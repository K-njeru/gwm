import React from 'react';
import Image from 'next/image';

function App() {
    return (
        <section className="relative py-16 min-h-screen">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
            <Image
                    src="/morocco.png"
                    alt="Background pattern"
                    layout="fill" // Fill the parent container
                    objectFit="cover" // Ensure the image covers the area without distortion
                    className="opacity-15" // Adjust opacity as needed
                    priority // Load the image with high priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-5xl font-bold text-center mb-16 text-blue-600">
                    Our Journey of Faith & Wisdom
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Vision Statement Card */}
                    {/*Card 1 */}
                    <div className="transform hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl md:mt-12">
                        <h3 className="text-3xl font-bold mb-6 leading-tight">
                            Christ, the Wisdom of God
                            <span className="block mt-2 text-blue-200">
                                – our true North, guiding every step we take and shaping every life we touch.
                            </span>
                        </h3>
                        <div className="w-16 h-1 bg-amber-400 rounded-full mb-6"></div>
                    </div>

                    {/* Card 2 */}
                    <div className="transform hover:scale-105 transition-transform duration-300 relative flex flex-col justify-between items-baseline rounded-2xl p-8 shadow-lg text-white max-h-fit md:mt-20 md:-mb-8">
                        <Image
                            src="/church.jpg" // Place in public/ or use an external URL
                            alt="Church background"
                            fill
                            className="rounded-2xl object-cover"
                            quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent rounded-2xl"></div>
                        <div className="relative z-10 h-full flex flex-col justify-end">
                            <p className="mb-0">
                                Godly wisdom isn&apos;t just taught here—it&apos;s lived, shared,
                                and multiplied through real lives with real impact.
                            </p>
                        </div>
                    </div>

                    {/* Community Card */}
                    {/* Card 3 */}
                    <div className="transform hover:scale-105 transition-transform duration-300 relative flex flex-col justify-between rounded-2xl p-8 shadow-lg text-white">
                        <Image
                            src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?q=80&w=2070"
                            alt="Community background"
                            fill
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent rounded-2xl"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">Our Community</h3>
                            <p className="text-blue-50 mb-6">
                                Join a thriving community of believers who support and uplift each other in faith and wisdom.
                            </p>
                            <button className="px-6 py-3 bg-amber-400 text-blue-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors duration-300 transform hover:scale-105">
                                Join Us Today
                            </button>
                        </div>
                    </div>

                    {/* About Card */}
                    <div className="relative transform hover:scale-105 transition-transform duration-300 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 md:mt-12 overflow-hidden">
                        {/* Background with blur effect */}
                        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full">
                            <div>
                                <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>
                                <p className="text-gray-700 leading-relaxed">
                                    We are a discipleship-driven Christian ministry based in Nairobi, walking
                                    alongside believers on their journey to spiritual maturity and Kingdom impact.
                                    Since 2013, we&apos;ve been nurturing fruitfulness through Scripture-based teachings,
                                    economic empowerment, and leadership development.
                                </p>
                                <p className="mt-4 text-gray-700 leading-relaxed">
                                    Inspired by Titus 1:1 and the call to godliness, we help believers live wisely,
                                    lead humbly, and serve passionately.
                                </p>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <span className="text-sm text-blue-600 font-semibold">Est. 2013</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                        <div className="text-gray-600">Years of Ministry</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                        <div className="text-gray-600">Lives Impacted</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div className="text-gray-600">Community Programs</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                        <div className="text-gray-600">Ministry Leaders</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;