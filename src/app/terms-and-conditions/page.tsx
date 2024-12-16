/* eslint-disable react/no-unescaped-entities */
'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-[#0d1117] text-white/90">
            <Navbar />
            <div className="max-w-[1000px] mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold text-[#FFC857] mb-8">Terms and Conditions</h1>

                <div className="space-y-8">
                    {/* Introduction */}
                    <section className="prose prose-invert max-w-none">
                        <p className="text-white/80">
                            Please read these terms and conditions carefully before using Our Service.
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
                                        <strong className="text-[#FFC857]">Affiliate:</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Country:</strong> refers to: Delhi, India
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Company:</strong> refers to Men of Culture Pvt. Ltd, 44, Second Floor, Regal Building, Connaught Place, Delhi - 110001.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Device:</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Service:</strong> refers to the Website.
                                    </li>
                                    <li>
                                        <strong className="text-[#FFC857]">Website:</strong> refers to Men Of Culture, accessible from https://www.menofculture.in
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Acknowledgment */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Acknowledgment</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-4">
                            <p className="text-white/80">
                                These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
                                These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                            </p>
                            <p className="text-white/80">
                                Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
                                These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                            </p>
                            <p className="text-white/80">
                                By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                            </p>
                            <p className="text-white/80">
                                You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                            </p>
                        </div>
                    </section>

                    {/* Links to Other Websites */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Links to Other Websites</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-4">
                            <p className="text-white/80">
                                Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.
                            </p>
                            <p className="text-white/80">
                                The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.
                            </p>
                        </div>
                    </section>

                    {/* Termination */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Termination</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-4">
                            <p className="text-white/80">
                                We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                            </p>
                            <p className="text-white/80">
                                Upon termination, Your right to use the Service will cease immediately.
                            </p>
                        </div>
                    </section>

                    {/* Governing Law */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Governing Law</h2>
                        <div className="bg-white/5 p-6 rounded-lg">
                            <p className="text-white/80">
                                The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service.
                                Your use of the Application may also be subject to other local, state, national, or international laws.
                            </p>
                        </div>
                    </section>

                    {/* Contact Information */}
                    <section>
                        <h2 className="text-2xl font-semibold text-[#FFC857] mb-4">Contact Us</h2>
                        <div className="bg-white/5 p-6 rounded-lg space-y-2">
                            <p className="text-white/80">
                                If you have any questions about these Terms and Conditions, You can contact us:
                            </p>
                            <ul className="space-y-2 text-white/80">
                                <li>
                                    By email: <a href="mailto:contact@menofculture.in" className="text-[#FFC857] hover:underline">contact@menofculture.in</a>
                                </li>
                                <li>
                                    By visiting: <a href="https://www.menofculture.in/contact" className="text-[#FFC857] hover:underline">https://www.menofculture.in/contact</a>
                                </li>
                                <li>
                                    By mail: 44, Second Floor, Regal Building, Connaught Place, Delhi - 110001
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
} 