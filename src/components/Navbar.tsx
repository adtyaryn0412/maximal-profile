"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 border-b border-gray-100 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'
                }`}
        >
            {/* Ubah h-16 menjadi h-14 agar navbar lebih tipis */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                {/* Logo Section */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="hover:opacity-90 transition">
                        <Image
                            src="/images/logo-maximal-2.png"
                            alt="Maximal Construction Logo"
                            width={140} // Ukuran logo disesuaikan (sebelumnya 140)
                            height={40}
                            priority
                            className="h-auto w-auto max-h-12" // Max height dikurangi biar pas di navbar kecil
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-slate-700 hover:text-red-600 font-bold text-xs uppercase tracking-wider transition"
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href="https://wa.me/6281325255005"
                        className="bg-[#0f172a] text-white px-5 py-2 rounded-lg font-bold text-xs hover:bg-red-600 transition shadow-sm"
                    >
                        HUBUNGI KAMI
                    </Link>
                </div>

            </div>
        </nav>
    );
}