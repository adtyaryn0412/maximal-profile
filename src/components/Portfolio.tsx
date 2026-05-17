"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabaseClient';

const categories = ["Semua", "Kanopi", "Pagar", "Rumah", "Konstruksi", "Aksesoris"];

// Sesuaikan dengan struktur kolom di Supabase
interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    image_url: string;
    location: string;
    year: string;
    gallery?: string[];
}

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("Semua");
    const [visibleCount, setVisibleCount] = useState(6);
    const [projectsData, setProjectsData] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            // Mengambil semua data dari tabel 'projects'
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .order('id', { ascending: false }); // Urutkan dari yang terbaru

            if (error) {
                console.error("Error fetching projects:", error);
            } else {
                setProjectsData(data || []);
            }
            setIsLoading(false);
        };

        fetchProjects();
    }, []);

    const filteredProjects = activeCategory === "Semua"
        ? projectsData
        : projectsData.filter((project) => project.category?.trim().toLowerCase() === activeCategory.trim().toLowerCase());

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(6);
    };

    return (
        <section id="portofolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Hasil Karya Kami
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
                        Portofolio <span className="text-red-600">Proyek</span>
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border border-slate-200 ${activeCategory === category
                                    ? "bg-red-600 text-white shadow-lg shadow-red-500/30 border-red-600"
                                    : "bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading ? (
                    <div className="text-center py-20">
                        <div className="w-10 h-10 border-4 border-slate-200 border-t-red-600 rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-slate-500 font-medium">Memuat proyek...</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {displayedProjects.map((project) => (
                                <div
                                    key={project.id}
                                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                                >
                                    <div className="relative h-64 overflow-hidden bg-slate-100">
                                        {project.image_url ? (
                                            <Image
                                                src={project.image_url}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-slate-400">No Image</div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-sm">
                                            {project.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                            {project.description}
                                        </p>

                                        <div className="mt-auto">
                                            <div className="w-full h-px bg-slate-100 mb-4"></div>
                                            <Link
                                                href={`/project/${project.id}`}
                                                className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-red-600 transition-colors gap-2 group/link"
                                            >
                                                Lihat Detail
                                                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {visibleCount < filteredProjects.length && (
                            <div className="mt-16 text-center">
                                <button
                                    onClick={handleLoadMore}
                                    className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full font-bold hover:border-red-600 hover:text-red-600 transition-all duration-300 shadow-sm hover:shadow-md"
                                >
                                    Lihat Proyek Lainnya
                                </button>
                            </div>
                        )}

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-slate-400 text-lg">Belum ada proyek untuk kategori ini.</p>
                            </div>
                        )}
                    </>
                )}

            </div>
        </section>
    );
}