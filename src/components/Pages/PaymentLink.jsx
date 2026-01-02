import { motion } from "framer-motion";
import { CreditCard, IndianRupee, ShieldCheck } from "lucide-react";

export default function PaymentLink() {
  return (
    <div className="px-6 py-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          Secure Payment
        </h1>
        <p className="text-gray-300 text-lg">
          Pay your registration fees securely for BK Sports Academy programs.
        </p>
      </motion.div>

      {/* Payment Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-xl"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold text-orange-400 mb-4 flex items-center gap-2">
              <IndianRupee /> Payment Details
            </h2>
            <ul className="text-gray-300 space-y-3">
              <li>✔ Program Registration Fees</li>
              <li>✔ Trek & Event Payments</li>
              <li>✔ Marathon / Camp Fees</li>
              <li>✔ Secure & Trusted Payment</li>
            </ul>
          </div>

          {/* Right */}
          <div className="bg-black/30 rounded-xl p-6 text-center">
            <CreditCard className="w-14 h-14 text-orange-400 mx-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Click below to proceed with secure online payment.
            </p>

            {/* 🔗 Replace with your actual payment link */}
            <a
              href="https://rzp.io/l/your-payment-link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition"
            >
              Pay Now
            </a>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-400">
              <ShieldCheck className="w-4 h-4" /> 100% Secure Payment
            </div>
          </div>
        </div>
      </motion.div>

      {/* Note */}
      <div className="max-w-4xl mx-auto mt-10 text-center text-gray-400 text-sm">
        <p>
          After successful payment, please keep the transaction receipt for future reference.
        </p>
      </div>
    </div>
  );

}

