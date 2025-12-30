export default function PopupForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      {/* Popup Box */}
      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Enquiry Form
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
          />

          <button className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600">
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}
