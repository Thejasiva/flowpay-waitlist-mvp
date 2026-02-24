# 🚀 FlowPay – Fintech Pre-Launch Waitlist MVP

A modern, high-converting fintech landing page with a full-stack waitlist system, built as a 24-hour product challenge.

## ✨ Overview
FlowPay is a fictional AI-powered budgeting platform designed to help professionals track, predict, and optimize spending using intelligent financial insights.

This MVP focuses on delivering a premium pre-launch experience with real-time waitlist capture, automated email onboarding, and queue position logic.

---

## 🧠 Product Thinking Highlights
- High-converting fintech landing page (Stripe/Revolut-inspired UI)
- Instant waitlist signup with real-time queue position
- Duplicate email prevention
- Branded automated welcome email
- Loading states and UX micro-interactions
- Clean, scalable full-stack architecture

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Framer Motion (animations)
- Axios (API communication)

### Backend
- Django
- Django REST Framework
- SQLite (MVP database)
- SMTP (Gmail) for automated emails
- python-dotenv for secure environment variables

---

## 🔐 Security Considerations
- Sensitive credentials stored using `.env`
- Environment variables used for email configuration
- Duplicate signup protection
- Input validation on backend

---

## 📦 Features Implemented
- Fully responsive premium fintech UI
- Waitlist email capture (full-stack)
- Queue position calculation logic
- Automated branded HTML email on signup
- Loading states & disabled submit button
- Clean API architecture (`/api/waitlist/`)

---

## 🚀 How to Run Locally


2️⃣ Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev

Frontend: http://localhost:5173

Backend API: http://127.0.0.1:8000/api/waitlist/
