import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AlertCircle, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, phone, location } = portfolioData.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '', 
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'All fields are required. Please check your inputs.'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const ntfyTopic = import.meta.env.VITE_NTFY_TOPIC;

    // Check if configuration keys are set (not empty and not the placeholder strings)
    const isWeb3FormsConfigured = web3formsKey && 
      web3formsKey !== 'your_web3forms_access_key_here' && 
      web3formsKey.trim() !== '';

    const isTelegramConfigured = telegramBotToken && 
      telegramChatId && 
      telegramBotToken !== 'your_telegram_bot_token_here' && 
      telegramChatId !== 'your_telegram_chat_id_here' &&
      telegramBotToken.trim() !== '' && 
      telegramChatId.trim() !== '';

    const isNtfyConfigured = ntfyTopic && 
      ntfyTopic !== 'your_ntfy_topic_here' && 
      ntfyTopic.trim() !== '';

    const promises = [];

    if (isWeb3FormsConfigured) {
      promises.push(
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
            from_name: 'Portfolio Contact Form'
          })
        }).then(async (res) => {
          const data = await res.json();
          if (!data.success) {
            throw new Error(data.message || 'Web3Forms failed to send.');
          }
          return 'email';
        })
      );
    }

    if (isTelegramConfigured) {
      const telegramText = `📬 *New Contact Form Submission*\n\n` +
                           `👤 *Name:* ${formData.name}\n` +
                           `📧 *Email:* ${formData.email}\n` +
                           `📝 *Subject:* ${formData.subject}\n\n` +
                           `💬 *Message:*\n${formData.message}`;
      promises.push(
        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: telegramText,
            parse_mode: 'Markdown'
          })
        }).then(async (res) => {
          const data = await res.json();
          if (!data.ok) {
            throw new Error(data.description || 'Telegram failed to send.');
          }
          return 'telegram';
        })
      );
    }

    if (isNtfyConfigured) {
      promises.push(
        fetch(`https://ntfy.sh/${ntfyTopic}`, {
          method: 'POST',
          headers: {
            'Title': `Portfolio Contact: ${formData.subject}`,
            'Tags': 'incoming_envelope,speech_balloon',
            'Click': `mailto:${formData.email}`
          },
          body: `From: ${formData.name} <${formData.email}>\n\nMessage:\n${formData.message}`
        }).then(async (res) => {
          if (!res.ok) {
            throw new Error('ntfy failed to send.');
          }
          return 'ntfy';
        })
      );
    }

    if (promises.length === 0) {
      // Fallback: If neither is configured, open the local email client (mailto:)
      setStatus({
        type: 'success',
        message: 'Opening your email client to send the message...'
      });

      const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
      const mailtoBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setIsSubmitting(false);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setStatus({ type: '', message: '' });
      }, 3000);
      return;
    }

    try {
      const results = await Promise.all(promises);
      
      let successMsg = 'Thank you! Your message has been sent successfully.';
      const sentChannels = [];
      if (results.includes('email')) sentChannels.push('email');
      if (results.includes('telegram') || results.includes('ntfy')) sentChannels.push('mobile');

      if (sentChannels.includes('email') && sentChannels.includes('mobile')) {
        successMsg = 'Thank you! Your message was sent successfully to email and mobile.';
      } else if (sentChannels.includes('email')) {
        successMsg = 'Thank you! Your message was sent successfully via email.';
      } else if (sentChannels.includes('mobile')) {
        successMsg = 'Thank you! Your message was sent successfully to mobile.';
      }

      setStatus({
        type: 'success',
        message: successMsg
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error.message || 'Unknown error'}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 border-t border-slate-900/60 light:border-slate-200/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-accentTeal tracking-widest uppercase font-semibold mb-2 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-950 tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentIndigo to-accentCyan">Me</span>
          </h2>
          <div className="w-12 h-1 bg-accentTeal mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          
          {/* Details Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white light:text-slate-900">
              Let's collaborate on your next project
            </h3>
            <p className="text-sm sm:text-base text-slate-400 light:text-slate-650 leading-relaxed">
              I am available for full-time job opportunities, remote engagements, and technical discussions. Drop me a line!
            </p>

            {/* Info Cards */}
            <div className="space-y-4 pt-4">
              
              <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 dark:hover:border-slate-805 transition-all duration-150 light:bg-slate-50 light:border-slate-200/80">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-accentTeal light:bg-white light:border-slate-200">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold">Email</span>
                  <a href={`mailto:${email}`} className="text-sm sm:text-base font-semibold text-slate-250 hover:text-accentTeal transition-colors light:text-slate-800">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 dark:hover:border-slate-805 transition-all duration-150 light:bg-slate-50 light:border-slate-200/80">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-accentIndigo light:bg-white light:border-slate-200">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold">Phone</span>
                  <a href={`tel:${phone}`} className="text-sm sm:text-base font-semibold text-slate-250 hover:text-accentIndigo transition-colors light:text-slate-800">
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 rounded-xl border border-slate-900 bg-slate-950/40 hover:border-slate-800 dark:hover:border-slate-805 transition-all duration-150 light:bg-slate-50 light:border-slate-200/80">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-accentCyan light:bg-white light:border-slate-200">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold">Location</span>
                  <span className="text-sm sm:text-base font-semibold text-slate-250 light:text-slate-800">
                    {location}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl border border-slate-800/85 bg-slate-950/40 backdrop-blur shadow-xl light:bg-white light:border-slate-200 space-y-5"
            >
              <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                Send Message
              </h4>

              {/* Status Alert */}
              {status.type && (
                <div 
                  className={`flex items-start p-3 rounded-lg border text-xs sm:text-sm font-sans ${
                    status.type === 'success' 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-450' 
                      : status.type === 'loading'
                      ? 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-450'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  ) : status.type === 'loading' ? (
                    <div className="mr-2 mt-0.5 w-4 h-4 border-2 border-indigo-400 border-t-transparent rounded-full animate-spin flex-shrink-0" />
                  ) : (
                    <AlertCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center">
                    <User size={10} className="mr-1" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-900 bg-slate-950/60 focus:border-accentTeal focus:ring-0 focus:outline-none text-white placeholder-slate-600 light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder-slate-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold flex items-center">
                    <Mail size={10} className="mr-1" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@domain.com"
                    className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-900 bg-slate-950/60 focus:border-accentTeal focus:ring-0 focus:outline-none text-white placeholder-slate-600 light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder-slate-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold flex items-center">
                  <MessageSquare size={10} className="mr-1" />
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration Request"
                  className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-900 bg-slate-950/60 focus:border-accentTeal focus:ring-0 focus:outline-none text-white placeholder-slate-600 light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder-slate-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-[10px] text-slate-550 uppercase tracking-widest font-semibold flex items-center">
                  <MessageSquare size={10} className="mr-1" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your message details..."
                  className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-900 bg-slate-950/60 focus:border-accentTeal focus:ring-0 focus:outline-none text-white placeholder-slate-600 light:bg-slate-50 light:border-slate-200 light:text-slate-900 light:placeholder-slate-400 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-semibold text-white bg-accentIndigo hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300 cursor-pointer ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={14} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
