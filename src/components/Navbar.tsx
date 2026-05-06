"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavItem } from '@/types';

const navItems: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        document.body.style.overflow = sidebarOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [sidebarOpen]);

    return (
        <>
            {/* ── NAVBAR ── */}
            <nav className={`fixed w-full z-50 transition-all duration-300 border-b border-neutral-100 ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="hover:opacity-90 transition" onClick={() => setSidebarOpen(false)}>
                            <Image
                                src="/images/logo-maximal-2.png"
                                alt="Maximal Construction Logo"
                                width={140}
                                height={40}
                                priority
                                className="h-auto w-auto max-h-12"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-neutral-900 hover:text-red-600 font-bold text-xs uppercase tracking-wider transition"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="https://wa.me/6281325255005"
                            className="bg-black text-white px-5 py-2 rounded-lg font-bold text-xs hover:bg-red-600 transition shadow-sm"
                        >
                            HUBUNGI KAMI
                        </Link>
                    </div>

                    {/* Trigger Sidebar — Mobile Only */}
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-neutral-100 transition-colors gap-1.5 focus:outline-none"
                        aria-label="Buka menu"
                    >
                        <span className="block w-6 h-0.5 bg-neutral-800 rounded-full" />
                        <span className="block w-4 h-0.5 bg-neutral-800 rounded-full self-end" />
                        <span className="block w-6 h-0.5 bg-neutral-800 rounded-full" />
                    </button>

                </div>
            </nav>

            {/* ── OVERLAY ── */}
            <div
                onClick={() => setSidebarOpen(false)}
                className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* ── SIDEBAR ── */}
            <aside
                className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
                    <div className="flex flex-col">
                        <span className="text-lg font-extrabold text-neutral-900 leading-none">Maximal</span>
                        <span className="text-xs font-bold text-red-600 tracking-widest uppercase">Construction</span>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100 hover:text-red-600 transition-colors"
                        aria-label="Tutup menu"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav Links */}
                <nav className="flex-1 px-0 py-6 space-y-1">
                    {navItems.map((item, i) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            onClick={() => setSidebarOpen(false)}
                            className="w-full flex items-center justify-start gap-3 px-6 py-3.5 rounded-none text-neutral-600 font-semibold text-sm hover:bg-red-50 hover:text-red-600 transition-all duration-200 group border-l-2 border-transparent hover:border-red-600"
                            style={{ animationDelay: `${i * 60}ms` }}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="px-4 pb-8 space-y-3">
                    <div className="h-px bg-neutral-100 mb-4" />
                    <Link
                        href="https://wa.me/6281325255005"
                        target="_blank"
                        onClick={() => setSidebarOpen(false)}
                        className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-xl transition-colors text-sm shadow-md hover:shadow-red-500/30"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        Hubungi via WhatsApp
                    </Link>
                    <p className="text-center text-xs text-neutral-400">
                        Solo Raya & Grobogan, Jawa Tengah
                    </p>
                </div>
            </aside>
        </>
    );
}
