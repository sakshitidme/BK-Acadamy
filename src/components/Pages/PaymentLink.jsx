import { motion } from "framer-motion";
import { CreditCard, IndianRupee, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

export default function PaymentLink() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      
      <div className="pt-24" />{/* Spacing for fixed navbar */}

      {/* ================= PAYMENT SECTION ================= */}
      <section className="max-w-4xl mx-auto px-6 py-12 relative z-20">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100"
        >
          <div className="grid md:grid-cols-2">
            
            {/* Left Col: Details */}
            <div className="p-10 bg-slate-50/50">
              <h2 className="text-2xl font-oswald font-bold text-brand-black mb-6 uppercase flex items-center gap-2">
                <IndianRupee className="text-brand-red" /> Payment Details
              </h2>
              <ul className="space-y-4">
                {[
                  "Program Registration Fees",
                  "Trek & Event Payments",
                  "Marathon / Camp Fees",
                  "Merchandise & Equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={18} className="text-brand-red shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800 flex items-start gap-3">
                 <ShieldCheck className="shrink-0 mt-0.5" />
                 <p>All transactions are 100% secure and encrypted. We do not store your card details.</p>
              </div>
            </div>

            {/* Right Col: Action */}
            <div className="p-10 bg-white flex flex-col justify-center items-center text-center border-l border-slate-100">
               <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mb-6">
                 <CreditCard className="w-10 h-10 text-brand-red" />
               </div>
               
               <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to Pay?</h3>
               <p className="text-slate-500 mb-8 max-w-xs text-sm">
                 Click the button below to proceed to our secure payment gateway (Razorpay).
               </p>

               <a
                 href="https://rzp.io/l/your-payment-link"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group relative w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded-xl overflow-hidden hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500/30"
               >
                 <span className="relative z-10 flex items-center gap-2">
                   Pay Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </span>
               </a>

               <p className="mt-6 text-xs text-slate-400">
                 * Please save your transaction ID for reference.
               </p>
            </div>

          </div>
        </motion.div>
      </section>

    </div>
  );
}
