import contactImg from "../assets/work/work (7).jpg"; 

export default function ContactSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <img
            src={contactImg}
            alt="Contact Us"
            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
          />

          {/* Optional overlay badge */}
          <div className="absolute bottom-6 left-6 bg-white px-5 py-3 rounded-lg shadow-md">
            <p className="text-sm font-semibold text-gray-800">
              Quick Response Guaranteed
            </p>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
          
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Get in Touch with Us
          </h2>
          <p className="text-gray-600 mb-6">
            Have a project in mind? Fill out the form and our team will get back
            to you as soon as possible.
          </p>

          {/* Form */}
          <form className="space-y-5">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#c1a944]"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#c1a944]"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#c1a944]"
            />

            {/* Message */}
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 
                         focus:outline-none focus:ring-2 focus:ring-[#c1a944]"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#c1a944] text-black font-semibold py-3 rounded-lg
                         hover:bg-black hover:text-white transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}