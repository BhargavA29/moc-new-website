"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
};

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<FormData>();
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const onSubmit = async (data: FormData) => {
        setSubmitStatus('idle');
        const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeKf5UiPzEs7vycDcfH6k-dwiZhpPNJL8v1wurD7HQVKjuM7g/formResponse';

        try {
            console.log('Submitting form data:', data);

            const response = await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'entry.2069709985': data.name,
                    'entry.771447517': data.email,
                    'entry.371782562': data.phone,
                    'entry.6665203': data.company || '',
                    'entry.769632773': data.message,
                }).toString(),
            });

            console.log('Form submission response:', response);
            setSubmitStatus('success');
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-white text-sm">Name</label>
                    <Input
                        {...register("name", {
                            required: "Name is required",
                            minLength: { value: 2, message: "Name must be at least 2 characters" }
                        })}
                        className="bg-transparent border-[#2C3E50] text-white"
                        placeholder="Your name"
                    />
                    {errors.name && (
                        <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 py-2">
                            <AlertDescription className="text-xs text-red-400">
                                {errors.name.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-white text-sm">Email</label>
                    <Input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        type="email"
                        className="bg-transparent border-[#2C3E50] text-white"
                        placeholder="Your email"
                    />
                    {errors.email && (
                        <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 py-2">
                            <AlertDescription className="text-xs text-red-400">
                                {errors.email.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-white text-sm">Phone</label>
                    <Input
                        {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Please enter a valid 10-digit phone number"
                            }
                        })}
                        type="tel"
                        className="bg-transparent border-[#2C3E50] text-white"
                        placeholder="Your phone number"
                    />
                    {errors.phone && (
                        <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 py-2">
                            <AlertDescription className="text-xs text-red-400">
                                {errors.phone.message}
                            </AlertDescription>
                        </Alert>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-white text-sm">Company (Optional)</label>
                    <Input
                        {...register("company")}
                        className="bg-transparent border-[#2C3E50] text-white"
                        placeholder="Your company"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-white text-sm">Message</label>
                <Textarea
                    {...register("message", {
                        required: "Message is required",
                        minLength: { value: 10, message: "Message must be at least 10 characters" }
                    })}
                    className="bg-transparent border-[#2C3E50] text-white min-h-[200px]"
                    placeholder="Your message"
                />
                {errors.message && (
                    <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 py-2">
                        <AlertDescription className="text-xs text-red-400">
                            {errors.message.message}
                        </AlertDescription>
                    </Alert>
                )}
            </div>

            <div className="flex flex-col items-center gap-4">
                <Button
                    type="submit"
                    className="bg-[#FFC857] text-black hover:bg-[#FFC857]/90 px-8 py-2 rounded-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Get in Touch'}
                </Button>

                {submitStatus === 'success' && (
                    <Alert className="bg-green-500/10 border-green-500/20 py-2">
                        <AlertDescription className="text-green-400">
                            Thank you for your message! We&apos;ll get back to you soon.
                        </AlertDescription>
                    </Alert>
                )}

                {submitStatus === 'error' && (
                    <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 py-2">
                        <AlertDescription className="text-red-400">
                            There was an error sending your message. Please try again.
                        </AlertDescription>
                    </Alert>
                )}
            </div>
        </form>
    );
} 