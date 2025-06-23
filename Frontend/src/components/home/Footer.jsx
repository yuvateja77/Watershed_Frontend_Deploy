import React, { useState } from 'react';
import TermsOfServiceModal from './TermsOfServiceModal';
import ContactUsModal from './ContactUsModal';
import MoreInformationModal from './MoreInformationModal';

function Footer() {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMoreInfoModalOpen, setIsMoreInfoModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsTermsModalOpen(false);
    setIsContactModalOpen(false);
    setIsMoreInfoModalOpen(false);
  };

  return (
    <>
      <footer className="bg-yellow-500 border-t border-gray-200 shadow-sm h-16 mt-8">
        <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 w-full">
            {/* Copyright */}
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Missouri River Basin Water Resources. 
              {/* All rights reserved. */}
            </div>
            
            {/* Links */}
            <div className="flex space-x-4 sm:space-x-6">
              <button 
                onClick={() => setIsTermsModalOpen(true)}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </button>
              <button
                onClick={() => setIsMoreInfoModalOpen(true)}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                More Information
              </button>
            </div>
          </div>
        </div>
      </footer>

      <TermsOfServiceModal 
        isOpen={isTermsModalOpen}
        onClose={handleCloseModal}
      />

      <ContactUsModal
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
      />

      <MoreInformationModal
        isOpen={isMoreInfoModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Footer; 