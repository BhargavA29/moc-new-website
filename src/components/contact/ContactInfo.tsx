"use client";

import { Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
    return (
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-[#2C3E50]/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center text-center">
                    <Mail className="w-6 h-6 text-[#FFC857] mb-4" />
                    <h3 className="text-white mb-2">Email</h3>
                    <a href="mailto:contact@menofculture.in" className="text-[#FFC857] hover:underline">
                        contact@menofculture.in
                    </a>
                </div>
                <div className="flex flex-col items-center text-center">
                    <MapPin className="w-6 h-6 text-[#FFC857] mb-4" />
                    <h3 className="text-white mb-2">Find Us</h3>
                    <span className="text-[#FFC857] max-w-xs">
                        44, 2nd Floor, Regal Building, <br /> Connaught Place, Delhi - 110001
                    </span>
                </div>
            </div>
        </div>
    );
} 