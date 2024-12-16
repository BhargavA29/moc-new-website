/* eslint-disable react/no-unescaped-entities */
'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#0d1117] text-white/90">
            <Navbar />
            <div className="max-w-[1000px] mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-[#FFC857] mb-8">Privacy Policy</h1>

                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="prose prose-invert max-w-none">
                        <p className="text-white/80">
                            This Privacy Policy describes Our policies and procedures on the collection,
                            use and disclosure of Your information when You use the Service and tells
                            You about Your privacy rights and how the law protects You.
                        </p>
                        <p className="text-white/80">
                            We use Your Personal data to provide and improve the Service. By using the
                            Service, You agree to the collection and use of information in accordance
                            with this Privacy Policy.
                        </p>
                    </section>

                    {/* Interpretation and Definitions */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Interpretation and Definitions</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-4">
                            <div>
                                <h3 className="text-xl font-medium mb-2">Interpretation</h3>
                                <p className="text-white/80">
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions.
                                    The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium mb-3">Definitions</h3>
                                <ul className="space-y-4 text-white/80">
                                    <li>
                                        <strong className="text-[#FFC857]">Account:</strong> means a unique account created for You to access our Service or parts of our Service.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Company:</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Men of Culture Media Pvt Ltd, 44, Second Floor, Regal Building, CP, Delhi - 110001.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Cookies:</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Country:</strong> refers to: Delhi, India
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Device:</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Personal Data:</strong> is any information that relates to an identified or identifiable individual.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Service:</strong> refers to the Website.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Website:</strong> refers to Men of Culture, accessible from menofculture.in
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Data Collection */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Collecting and Using Your Personal Data</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-6">
                            <div>
                                <h3 className="text-xl font-medium mb-3">Types of Data Collected</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-lg font-medium mb-2 text-[#FFC857]">Personal Data</h4>
                                        <p className="text-white/80">
                                            While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. This may include Usage Data.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium mb-2 text-[#FFC857]">Usage Data</h4>
                                        <p className="text-white/80">
                                            Usage Data is collected automatically when using the Service. It may include information such as Your Device&apos;s Internet Protocol address, browser type, browser version, pages visited, time and date of visits, time spent on pages, and other diagnostic data.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cookies */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Use of Cookies</h2>
                        <div className="bg-white/5 p-6 rounded-lg">
                            <p className="text-white/80 mb-4">
                                We use Cookies and similar tracking technologies to track activity on Our Service and store certain information. These technologies help us to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-white/80">
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you use our Service</li>
                                <li>Improve your experience</li>
                                <li>Provide secure and safe services</li>
                            </ul>
                        </div>
                    </section>

                    {/* Data Usage */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Use of Your Personal Data</h2>
                        <div className="bg-white/5 p-6 rounded-lg">
                            <p className="text-white/80 mb-4">The Company may use Personal Data for the following purposes:</p>
                            <ul className="list-disc pl-6 space-y-2 text-white/80">
                                <li>To provide and maintain our Service</li>
                                <li>To manage Your Account</li>
                                <li>To contact You regarding updates or informative communications</li>
                                <li>To provide You with news and general information</li>
                                <li>To manage Your requests</li>
                                <li>For business transfers</li>
                                <li>For data analysis and improvement of our Service</li>
                            </ul>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Contact Us</h2>
                        <div className="bg-white/5 p-6 rounded-lg">
                            <p className="text-white/80">
                                If you have any questions about this Privacy Policy, You can contact us:
                            </p>
                            <p className="text-white/80 mt-2">
                                By email: <a href="mailto:contact@menofculture.in" className="text-[#FFC857] hover:underline">contact@menofculture.in</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
} 