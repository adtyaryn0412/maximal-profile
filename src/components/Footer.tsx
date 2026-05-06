import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900 relative overflow-hidden">

            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-neutral-800 to-red-600"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h3 className="text-3xl font-extrabold text-white tracking-tight">
                                Maximal
                            </h3>
                            <span className="text-red-600 font-bold text-lg tracking-widest uppercase -mt-1">Construction</span>
                        </div>
                        <p className="text-sm leading-7 text-neutral-400 max-w-xs">
                            Mitra terpercaya untuk solusi konstruksi, renovasi, dan fabrikasi logam di wilayah Solo Raya & Grobogan. Mengutamakan kualitas material dan kepuasan pelanggan.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://instagram.com/maximal.construction" target="_blank" className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-pink-500/20">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </Link>
                            <Link href="https://wa.me/6281325255005" target="_blank" className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-green-600 hover:border-transparent hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-green-500/20">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Layanan Kami
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {['Pemasangan Kanopi', 'Pagar Besi & Laser', 'Konstruksi Baja', 'Renovasi Rumah', 'Aksesoris Rumah'].map((item, index) => (
                                <li key={index}>
                                    <Link href="#layanan" className="text-sm text-neutral-400 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Hubungi Kami
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full"></span>
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 rounded-lg bg-neutral-900 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 border border-neutral-800 group-hover:border-red-600">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <span className="text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                    Solo, Jawa Tengah<br />
                                    <span className="text-xs text-neutral-500">(Area Solo Raya & Grobogan)</span>
                                </span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-neutral-900 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 border border-neutral-800 group-hover:border-red-600">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <span className="text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors">+62 813-2525-5005</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 rounded-lg bg-neutral-900 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 border border-neutral-800 group-hover:border-red-600">
                                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">maximal.construction@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
                            Area Kerja
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-red-600 rounded-full"></span>
                        </h4>
                        <div className="bg-neutral-900/50 p-5 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
                                <strong className="text-neutral-200">Survei Gratis!</strong> Kami siap datang ke lokasi Anda untuk konsultasi & pengukuran.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Solo', 'Grobogan', 'Karanganyar', 'Sukoharjo', 'Boyolali', 'Sragen'].map((city) => (
                                    <span key={city} className="text-[10px] font-medium bg-black text-neutral-400 px-3 py-1.5 rounded-full border border-neutral-800 hover:border-red-600 hover:text-white transition-colors cursor-default">
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-neutral-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-neutral-500 text-center md:text-left">
                        &copy; {currentYear} <span className="text-neutral-300 font-semibold">Maximal Construction</span>. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-neutral-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}