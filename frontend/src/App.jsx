import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      setStatus("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/waitlist/",
        { email }
      );

      setStatus(
        `🎉 You're in! Your waitlist position is #${response.data.position}`
      );
      setEmail("");
    } catch (error) {
      if (error.response && error.response.data.email) {
        setStatus("⚠️ This email is already on the waitlist.");
      } else {
        setStatus("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          Flow<span className="text-indigo-500">Pay</span>
        </h1>
        <button className="text-sm bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition shadow-lg shadow-indigo-600/30">
          Join Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 flex-1">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl"
        >
          AI-powered budgeting
          <br />
          <span className="text-indigo-500">that understands you.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-6 text-gray-400 max-w-xl text-lg"
        >
          FlowPay helps modern professionals track, predict, and optimize their
          spending using intelligent financial insights.
        </motion.p>

        {/* Waitlist Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 w-full max-w-md"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-lg font-semibold transition shadow-xl shadow-indigo-600/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "Get Early Access"}
          </button>
        </motion.div>

        {status && (
          <p className="mt-4 text-sm text-indigo-400">{status}</p>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-sm text-gray-500"
        >
          Join 1,200+ early users preparing for launch 🚀
        </motion.p>
      </div>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-20 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold">
            Built for financial clarity and control
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            FlowPay combines AI-driven insights with real-time tracking to help
            you stay ahead of your finances effortlessly.
          </p>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left hover:border-indigo-500 transition">
              <h4 className="text-xl font-semibold">AI Smart Insights</h4>
              <p className="mt-3 text-gray-400">
                Get personalized spending insights powered by AI.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left hover:border-indigo-500 transition">
              <h4 className="text-xl font-semibold">Predictive Alerts</h4>
              <p className="mt-3 text-gray-400">
                Receive proactive alerts before overspending happens.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 text-left hover:border-indigo-500 transition">
              <h4 className="text-xl font-semibold">Unified Dashboard</h4>
              <p className="mt-3 text-gray-400">
                Track all accounts, subscriptions, and budgets in one dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-gray-600 text-sm py-6">
        © 2026 FlowPay. All rights reserved.
      </footer>

    </div>
  );
}