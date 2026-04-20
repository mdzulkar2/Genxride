'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface AuthModelProps {
  open: boolean;
  onClose: () => void;
}

const AuthModel: React.FC<AuthModelProps> = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999]"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center">
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-lg p-8 w-full max-w-md"
            >
              {/* Close Button */}
              <div
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={onClose}
              >
                <X size={20} />
              </div>

              <div className="mb-6 text-center">
                <h1 className="text-2xl font-bold mb-4">GENXRIDE</h1>
                <p className="mt-1 text-xs text-gray-500">
                  Premium Vehicle Booking
                </p>
              </div>

              <button className="w-full h-11 rounded-xl border border-black/20 flex items-center justify-center gap-2 text-sm font-medium transition hover:bg-gray-100">
                <Image src="/google.png" alt="Google" width={18} height={18} />
                Continue with Google
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AuthModel;