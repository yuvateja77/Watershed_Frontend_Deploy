import React, { useState } from 'react'
import { memo } from 'react'
import Slide_show from '../home/Slide_show'
import ContactUs from '../home/ContactUs'
import { FaWater, FaChartLine, FaLeaf, FaMicroscope,FaRobot, FaGraduationCap } from 'react-icons/fa'

function Home() {
  const [showBotModal, setShowBotModal] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Section with Slideshow */}
      <section className="w-full">
        <Slide_show />
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-sky-900 sm:text-5xl mb-4 tracking-tight">
              Our Resources
            </h2>
            <p className="text-lg text-sky-700 max-w-3xl mx-auto">
            Advancing solutions for water and land resources management for Missouri and Beyond!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

             {/* Feature 1 */}
             <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-emerald-200 rounded-full mb-6 ring-2 ring-emerald-300 ring-opacity-50">
                <FaChartLine className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-3">Streamflow forecasts​</h3>
              <p className="text-emerald-700">Explore the National Water Model streamflow simulations and forecasts</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onClick={() => setShowBotModal(true)}>
              <div className="inline-block p-4 bg-purple-200 rounded-full mb-6 ring-2 ring-purple-300 ring-opacity-50">
                <FaRobot className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-3">MO Water​</h3>
              <p className="text-purple-700">An interactive Gen AI virtual assistant that provides information about Missouri's water resources</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-blue-200 rounded-full mb-6 ring-2 ring-blue-300 ring-opacity-50">
                <FaMicroscope className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Instrumentation and Field Research</h3>
              <p className="text-blue-700">Find out resources available in the lab</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-cyan-200 rounded-full mb-6 ring-2 ring-cyan-300 ring-opacity-50">
                <FaLeaf className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-900 mb-3">Agricultural Water Management</h3>
              <p className="text-cyan-700">Find out resources available in the lab</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-amber-200 rounded-full mb-6 ring-2 ring-amber-300 ring-opacity-50">
                <FaGraduationCap className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Outreach and Education</h3>
              <p className="text-amber-700">Find details of courses,certifications, and educational programs related to water</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-sky-50 to-sky-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="inline-block p-4 bg-sky-200 rounded-full mb-6 ring-2 ring-sky-300 ring-opacity-50">
                <FaWater className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-sky-900 mb-3">Water Quality</h3>
              <p className="text-sky-700">Review available water quality data and information</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for MO Water technical details */}
      {showBotModal && (
        <div className="fixed inset-0  bg-opacity-70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl border border-purple-200 p-6 max-w-2xl w-full h-auto relative transition-all duration-300">
            <button onClick={() => setShowBotModal(false)} className="absolute top-3 right-3 text-gray-500 hover:text-purple-700 text-2xl font-bold transition-colors duration-200">&times;</button>
            <h2 className="text-xl font-bold text-purple-800 mb-2">MO Water Chatbot</h2>
            <div className="border-b border-purple-100 mb-4"></div>
            <div className="text-gray-700 space-y-4 text-sm leading-normal">
              <p>
                The <span className="font-semibold text-purple-700">MO Water Chatbot</span> is a <span className="font-semibold">Retrieval-Augmented Generation (RAG)</span> system designed for efficient, document-grounded question answering across a collection of approximately <span className="font-semibold text-purple-700">900 environmental and water resource documents</span> focused on Missouri. By integrating OpenAI's embedding and file search capabilities, the chatbot enables semantic retrieval and generates accurate, context-aware responses to user queries.
              </p>
              <p>
                The system's architecture includes <span className="font-semibold">document ingestion, preprocessing, vector embedding,</span> and <span className="font-semibold">real-time semantic indexing</span>. When a user submits a question, a <span className="font-semibold">Large Language Model (LLM)</span> synthesizes the most relevant retrieved content into citation-backed answers, supporting complex queries on topics such as drinking water regulations, wastewater treatment, and drought resilience.
              </p>
              <p>
                Initial results show that the chatbot significantly reduces the time required for manual document review while improving the clarity and accessibility of technical content. This work demonstrates a <span className="font-semibold">scalable and replicable AI framework</span> for public sector applications, with future plans to expand into real-time regulatory updates and multi-modal document handling.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content Sections */}
      <section className="bg-gradient-to-b from-sky-50 to-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Statement */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100">
              <h3 className="text-3xl font-bold text-sky-900 mb-6">Our Mission</h3>
              <p className="text-sky-800 leading-relaxed mb-3 text-lg">
              Welcome to our resource hub – where the vital waters of Missouri and beyond meet innovation and stewardship. Our agricultural landscapes, natural ecosystems, and growing communities adapt to shifting weather patterns and evolving land use, the need for effective water management has never been more urgent.
              </p>
              <p className="text-sky-800 leading-relaxed mb-3 text-lg">
              Understanding runoff, agricultural water use, and ecosystem health is not just a technical challenge—it's a cornerstone of building resilient policies and strategies that sustain our environment and support thriving communities.
              </p>
              <p className="text-sky-800 leading-relaxed text-lg font-bold">
              Join us in exploring solutions, sharing knowledge, and shaping a water-wise future for Missouri and beyond.
              </p>
            </div>

            {/* Latest Updates */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100">
              <h3 className="text-3xl font-bold text-sky-900 mb-6">Upcoming Events</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-sky-500 pl-6 py-2 bg-sky-50 rounded-r-lg">
                  <h4 className="font-semibold text-sky-900 text-lg">New Research Publication</h4>
                  <p className="text-sky-700">
                    Check the recent publications 
                    <a href="https://www.sciencedirect.com/science/article/pii/S277237552400323X?via%3Dihub" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900"> here </a> 
                    and 
                    <a href="https://www.frontiersin.org/journals/climate/articles/10.3389/fclim.2025.1481926/full" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900"> here</a>.
                </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6 py-2 bg-emerald-50 rounded-r-lg">
                  <h4 className="font-semibold text-emerald-900 text-lg">Upcoming events</h4>
                  <p className="text-emerald-700">​​Geospatial Science Summer Camp (July 14-17, 2025); check the details 
                    <a href="https://theconnector.missouri.edu/camp/geospatial-science-summer-camp/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900"> here</a>.
                  </p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-50 rounded-r-lg">
                  <h4 className="font-semibold text-cyan-900 text-lg">Community Update</h4>
                  <ul className="list-disc pl-6 text-cyan-700">
                    <li>CAFNR Research Symposium, <a href="https://calendar.missouri.edu/event/cafnr-research-symposium" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">1 October 2025​</a></li>
                    <li>Nebraska Water Conference, <a href="https://watercenter.unl.edu/news/2025-great-plains-water-conference-securing-water-resources-tomorrow/" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">9-10 October 2025​</a></li>
                    <li>American Geophysical Union Fall Meeting, <a href="https://www.agu.org/annual-meeting/schedule#session-formats#keypen" target="_blank" rel="noopener noreferrer" className="underline text-blue-700 hover:text-blue-900">15-19 December 2025</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-section bg-gradient-to-b from-white to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default memo(Home);