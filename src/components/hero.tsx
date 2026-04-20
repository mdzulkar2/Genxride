'use client'
import { motion, scale } from "framer-motion";
import { Bike, Bus, Car, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpeg')" }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Book Any Vehicle
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-300 text-lg sm:text-xl mt-4 max-w-xl"
        >
          Rent a car, bike, or scooter with ease.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex gap-8 text-gray-300"
        >
          <Bike size={32} />
          <Car size={32} />
          <Bus size={32} />
          <Truck size={32} />
          
        </motion.div>

        <motion.button
         whileHover={{scale:1.05}}
         whileTap={{scale:0.95}}
          className="mt-10 px-6 py-3 bg-white text-black rounded-full font-semibold text-lg shadow-lg"
        >
          Book Now
        </motion.button>

      </div>

    </section>
  );
}