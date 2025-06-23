import React from 'react';
import { FaCloudRain, FaSatelliteDish, FaMicroscope, FaWater, FaLeaf, FaThermometerHalf, FaCamera, FaBinoculars, FaGlobe, FaMapMarkedAlt } from 'react-icons/fa';

const Instrumentation = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Instrumentation and Field Research​
                </h1>
                
                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Feature 1 - Rain Tower Simulation */}
                    <div 
                        className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                        onClick={() => document.getElementById('rain-tower-section')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <div className="inline-block p-4 bg-blue-200 rounded-full mb-6 ring-2 ring-blue-300 ring-opacity-50">
                            <FaCloudRain className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-3">Rain Tower Simulation</h3>
                        <p className="text-blue-700">Demonstration of our advanced rainfall simulation technology for research purposes</p>
                    </div>

                    {/* Feature 2 - Environmental Sensing */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block p-4 bg-green-200 rounded-full mb-6 ring-2 ring-green-300 ring-opacity-50">
                            <FaSatelliteDish className="h-8 w-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-green-900 mb-3">Environmental Sensing</h3>
                        <p className="text-green-700">Advanced sensing technologies for monitoring environmental conditions (Coming Soon)</p>
                    </div>

                    {/* Feature 3 - UAV Imaging */}
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block p-4 bg-purple-200 rounded-full mb-6 ring-2 ring-purple-300 ring-opacity-50">
                            <FaCamera className="h-8 w-8 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-purple-900 mb-1">UAV Imaging</h3>
                        <p className="text-purple-700 mb-2">Aerial imaging and analysis using UAV technology</p>
                        <p className="text-xs text-purple-500 font-semibold">Coming Soon</p>
                    </div>

                    {/* Feature 4 - Swan Lake Monitoring */}
                    <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block p-4 bg-cyan-200 rounded-full mb-6 ring-2 ring-cyan-300 ring-opacity-50">
                            <FaBinoculars className="h-8 w-8 text-cyan-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-cyan-900 mb-1">Swan Lake Monitoring</h3>
                        <p className="text-cyan-700 mb-2">Monitoring and research at Swan Lake</p>
                        <p className="text-xs text-cyan-500 font-semibold">Coming Soon</p>
                    </div>

                    {/* Feature 5 - Environmental Hydrology System */}
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block p-4 bg-emerald-200 rounded-full mb-6 ring-2 ring-emerald-300 ring-opacity-50">
                            <FaGlobe className="h-8 w-8 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-emerald-900 mb-1">Environmental Hydrology System</h3>
                        <p className="text-emerald-700 mb-2">Integrated system for hydrological research</p>
                        <p className="text-xs text-emerald-500 font-semibold">Coming Soon</p>
                    </div>

                    {/* Feature 6 - West Africa/South Asia Field Research */}
                    <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="inline-block p-4 bg-yellow-200 rounded-full mb-6 ring-2 ring-yellow-300 ring-opacity-50">
                            <FaMapMarkedAlt className="h-8 w-8 text-yellow-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-yellow-900 mb-1">West Africa/South Asia Field Research</h3>
                        <p className="text-yellow-700 mb-2">International field research initiatives</p>
                        <p className="text-xs text-yellow-500 font-semibold">Coming Soon</p>
                    </div>
                </div>

                {/* Video Section - Now with constrained dimensions */}
                <div id="rain-tower-section" className="bg-white rounded-xl shadow-lg p-4 mb-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Rain Tower Demo</h2>
                    <div className="flex justify-center">
                        <video 
                            controls 
                            className="w-full max-w-3xl h-auto max-h-[50vh] rounded-lg shadow-md"
                            src='https://storage.googleapis.com/miz_hydrology/Frontend_Data/Instrumentation/RainTower.MP4'
                        />
                    </div>
                    <p className="mt-6 text-gray-700 text-base leading-relaxed">
                        A 1m × 1m laboratory-scale rainfall simulator is available in the lab for various experiments. The simulator is based on positive volume displacement principle to deliver precise rainfall intensities ranging from 0.025 to 16 cm/hour. The setup uses telescopic stainless-steel tubing to create 4.5 mm droplets, which is passed through a redistribution screen to simulate natural rainfall. By adjusting the screen height, we can match droplet characteristics to those of natural rain at specific intensities. The fully automated system operated in a closed loop with a feed tank and solenoid valves. The tank is 14m high to ensure droplets reached 95% of their terminal velocity.​
                    </p>
                </div>

                {/* Resources Section */}
                <div className="bg-white rounded-xl shadow-lg p-5">
                    <h2 className="text-xl font-semibold text-gray-700 mb-3">Research Resources</h2>
                    <ul className="space-y-2">
                        <li>
                            <a 
                                href='https://elibrary.asabe.org/abstract.asp?aid=5380' 
                                target="_blank" 
                                rel="noopener noreferrer"
                               className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                Rainfall Simulator
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://elibrary.asabe.org/abstract.asp?aid=17663' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                Influence of Kinetic Energy
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://elibrary.asabe.org/abstract.asp?aid=29500' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                Polyacrylamide Influence on Runoff
                            </a>
                        </li>
                        <li>
                            <a 
                                href='https://acsess.onlinelibrary.wiley.com/doi/abs/10.2134/jeq2014.10.0447' 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                            >
                                Phosphate Treatment of Lead-Contaminated Soil
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Instrumentation;