import React from 'react';

function MoreInformationModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">More Information</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-4 text-gray-700">
          <p>This website is dedicated to providing comprehensive information and resources about the Missouri River Basin's water resources, hydrology, and environmental conditions.</p>
          <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
          <p>To support research, education, and public awareness regarding water resources in the Missouri River Basin through accessible data, visualizations, and outreach.</p>
          <h3 className="text-xl font-semibold text-gray-800">What You Will Find Here</h3>
          <ul className="list-disc pl-6">
            <li>Hydrological and climate data visualizations</li>
            <li>Educational resources and outreach materials</li>
            <li>Information on water quality, demand, and instrumentation</li>
            <li>Contact information for further inquiries</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800">Contact & Collaboration</h3>
          <p>If you are interested in collaborating, contributing, or have questions, please use the Contact Us form or reach out to our team directly.</p>
        </div>
      </div>
    </div>
  );
}

export default MoreInformationModal; 