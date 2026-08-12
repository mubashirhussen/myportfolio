# Sheik Mubashir Hussen - Portfolio Website

A premium, interactive personal portfolio website showcasing my experience, skills, and projects in Full Stack Development, Data Science, Machine Learning, and Cloud Engineering.

## 🚀 Live Repository
- **GitHub Repository:** https://github.com/mubashirhussen/myportfolio

---

## 🛠️ Tech Stack
- **Frontend:** React.js, Vite, Tailwind CSS, Lucide icons, Framer Motion
- **Build Tool:** Vite (Fast Refresh & HMR)
- **Deployment:** Vercel (Support for serverless configuration)

---

## 📬 Automated Contact Form Notifications
The contact form in the **Get in Touch** section is configured to deliver visitor submissions instantly in the background without needing a backend server. 

It supports multiple notification channels configured via environment variables:
1. **Email Alerts (Web3Forms):** Forwards submissions directly to your email inbox. (100% Free)
2. **Mobile Push Alerts (Telegram Bot):** Delivers instant notifications directly to your Telegram app. (100% Free)
3. **Desktop/Mobile Push Notifications (ntfy.sh):** Sends instant push alerts to your desktop browser or mobile phone via the ntfy application. (100% Free)

### Environment Variable Setup (`.env` / `.env.local`)
To enable background submissions, create a `.env.local` file in the root folder and add the following keys:

```env
# Web3Forms Email Configuration
# Get your free key at https://web3forms.com/
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key

# Telegram Mobile Alert Configuration (Optional)
# Create a bot via BotFather and retrieve chat ID via userinfobot
VITE_TELEGRAM_BOT_TOKEN=your_telegram_bot_token
VITE_TELEGRAM_CHAT_ID=your_telegram_chat_id

# ntfy.sh Mobile Alert Configuration (Optional)
# Change 'mubashir_portfolio_contact' to a secret topic name for privacy
VITE_NTFY_TOPIC=mubashir_portfolio_contact
```

> **Note:** If no environment keys are set, the form automatically falls back to client-side `mailto:` redirection, ensuring that the form remains fully functional.

---

## 💼 Portfolio Sections
- **Hero & About:** Brief professional pitch, personal links, and technical summary.
- **Experience:** Internships at TAO Digital Solutions, CITD, Huebits, and NIT Trichy.
- **Skills:** Categorized list covering Languages (Python, Java, SQL, C), Web Frameworks, Databases, Machine Learning (NLP, Sentence Transformers), Cloud (AWS, Azure), and Data Engineering (Apache Spark, Databricks).
- **Projects:** Featured applications including *GuardianMail AI* (email security engine) and *AI Resume Screening System* (semantic candidate scoring).
- **Certifications & Achievements:** Credentials and awards in DevOps, Google Cloud, and DSA.

---

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/mubashirhussen/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env.local
   ```
   *(Open `.env.local` and add your respective keys)*

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```
