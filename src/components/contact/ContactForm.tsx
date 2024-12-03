"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-white text-sm">Name</label>
                    <Input
                        placeholder="Your name"
                        className="bg-transparent border-[#2C3E50] text-white"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-white text-sm">Email</label>
                    <Input
                        type="email"
                        placeholder="Your email"
                        className="bg-transparent border-[#2C3E50] text-white"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-white text-sm">Phone</label>
                    <Input
                        type="tel"
                        placeholder="Your phone number"
                        className="bg-transparent border-[#2C3E50] text-white"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-white text-sm">Company</label>
                    <Input
                        placeholder="Your company"
                        className="bg-transparent border-[#2C3E50] text-white"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                </div>
            </div>
            <div className="space-y-2">
                <label className="text-white text-sm">Message</label>
                <Textarea
                    placeholder="Your message"
                    className="bg-transparent border-[#2C3E50] text-white min-h-[200px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
            </div>
            <div className="flex justify-center">
                <Button
                    type="submit"
                    className="bg-[#FFC857] text-black hover:bg-[#FFC857]/90 px-8 py-2 rounded-full"
                >
                    Get in Touch
                </Button>
            </div>
        </form>
    );
} 