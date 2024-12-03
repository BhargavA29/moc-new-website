"use client";

import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
    return (
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-[#2C3E50]/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                    <Mail className="w-6 h-6 text-[#FFC857] mb-4" />
                    <h3 className="text-white mb-2">Email</h3>
                    <a href="mailto:moc@gmail.com" className="text-[#FFC857] hover:underline">
                        moc@gmail.com
                    </a>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Phone className="w-6 h-6 text-[#FFC857] mb-4" />
                    <h3 className="text-white mb-2">Phone</h3>
                    <a href="tel:+919820572733" className="text-[#FFC857] hover:underline">
                        +91 9820572733
                    </a>
                </div>
                <div className="flex flex-col items-center text-center">
                    <MapPin className="w-6 h-6 text-[#FFC857] mb-4" />
                    <h3 className="text-white mb-2">Find Us</h3>
                    <span className="text-[#FFC857]">address</span>
                </div>
            </div>
        </div>
    );
} 