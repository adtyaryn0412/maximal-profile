"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';

interface Testimonial {
    id: string;
    name: string;
    location: string;
    message: string;
    rating: number;
}

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            setIsLoading(true);
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('id', { ascending: false });

            if (error) {
                console.error("Error fetching testimonials:", error);
            } else {
                setTestimonials(data || []);
            }
            setIsLoading(false);
        };

        fetchTestimonials();
    }, []);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <svg
                    key={i}
                    className={`w-5 h-5 ${i <= rating ? 'text-yellow-400' : 'text-slate-200'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            );
        }
        return <div className="flex gap-1">{stars}</div>;
    };

    return (
        <section id="testimoni" className="py-24 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Ulasan Pelanggan
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Apa <span className="text-red-600"> Kata </span> Mereka?
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Kepercayaan Anda adalah prioritas kami. Lihat pengalaman nyata dari pelanggan yang telah menggunakan jasa Maximal Construction.
                    </p>
                </div>

                {isLoading ? (
                    <div className="text-center py-10">
                        <div className="w-10 h-10 border-4 border-slate-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-500 font-medium">Memuat ulasan...</p>
                    </div>
                ) : testimonials.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={testimonial.id}
                                data-aos="fade-up"
                                data-aos-delay={(i % 3) * 100}
                                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-6 right-8 text-slate-100 group-hover:text-red-50 transition-colors duration-300">
                                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6">
                                        {renderStars(testimonial.rating || 5)}
                                    </div>

                                    <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow">
                                        "{testimonial.message}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                                        <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-bold text-xl uppercase">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-xs text-slate-500 uppercase tracking-wider">
                                                {testimonial.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 border-dashed">
                        <p className="text-slate-400 text-lg">Belum ada ulasan saat ini.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
