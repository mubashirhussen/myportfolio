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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
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

    setStatus({
      type: 'success',
      message: 'Opening your email client to send the message...'
    });

    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setStatus({ type: '', message: '' });
    }, 3000);
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
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-450'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle size={16} className="mr-2 mt-0.5 flex-shrink-0" />
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
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-semibold text-white bg-accentIndigo hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Send Message
                <Send size={14} className="ml-2" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
