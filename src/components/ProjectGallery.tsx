"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ProjectGalleryProps {
    images: string[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (!images || images.length === 0) return null;

    return (
        <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-6">Galeri Dokumentasi</h3>

            {/* Grid Thumbnail */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        className="relative h-64 rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow bg-slate-100 cursor-zoom-in"
                        onClick={() => setSelectedImage(img)}
                    >
                        <Image
                            src={img}
                            alt={`Galeri ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay transparan tipis */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                    </div>
                ))}
            </div>

            {/* Modal Zoom Layar Penuh */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Tombol Tutup */}
                    <button 
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Gambar Diperbesar */}
                    <div className="relative w-full max-w-5xl h-[80vh] cursor-zoom-out">
                        <Image
                            src={selectedImage}
                            alt="Galeri Diperbesar"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
