import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import img1 from "../assets/work/image (1).jpg";
import img2 from "../assets/work/image (2).jpg";
import img3 from "../assets/work/image (3).jpg";
import img4 from "../assets/work/work (4).jpg";
import img5 from "../assets/work/work (3).png";
import img6 from "../assets/work/work (5).jpg";
import img7 from "../assets/work/work (6).jpg";
import img8 from "../assets/work/work (7).jpg";
import img9 from "../assets/work/image (1).jpeg";
import img10 from "../assets/work/image (1).jpg";
import img11 from "../assets/work/image (2).jpeg";
import img12 from "../assets/work/image (2).jpg";
import img13 from "../assets/work/image3.jpeg";


const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

export default function OurWork() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openPreview = (index) => setSelectedIndex(index);
  const closePreview = () => setSelectedIndex(null);

  const nextImage = () =>
    setSelectedIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-6 bg-[#f9f9f9] min-h-screen">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our Work
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Take a look at some of our recent projects. Quality craftsmanship and
          attention to detail in every job we deliver.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            className="group cursor-pointer overflow-hidden rounded-xl shadow-md"
            onClick={() => openPreview(index)}
          >
            <motion.img
              src={img}
              alt="work"
              className="w-full h-64 object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Preview Modal */}
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
        >          {/* Close Button */}
          <button
            onClick={closePreview}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          {/* Image */}
          <img
            src={images[selectedIndex]}
            alt="preview"
            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-lg"
          />

          {/* Counter */}
          <div className="absolute bottom-6 text-white text-sm">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white"
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </section>
  );
}