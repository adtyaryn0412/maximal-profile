"use client";

export default function Contact() {
    return (
        <section id="kontak" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2 block">
                        Temukan Kami
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Lokasi & <span className="text-red-600">Kontak</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6" />
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Kunjungi workshop kami atau hubungi langsung via WhatsApp untuk konsultasi & survei gratis.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

                    {/* Google Maps embed */}
                    <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-slate-100 shadow-sm h-[420px] bg-slate-100">
                        <iframe
                            title="Lokasi Maximal Construction"
                            src="https://maps.google.com/maps?q=-7.567764,110.87844&z=17&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>

                    {/* Info Kontak */}
                    <div className="lg:col-span-2 space-y-4">

                        {/* Alamat */}
                        <a
                            href="https://maps.app.goo.gl/Y5K1becofmKieaKp7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Alamat Workshop</p>
                                <p className="font-bold text-slate-800 group-hover:text-red-600 transition-colors text-sm">Dagen, Jaten, Karanganyar, Jawa Tengah</p>
                                <p className="text-xs text-slate-400 mt-0.5">Area layanan: Solo Raya & Sekitarnya</p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/6281325255005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">WhatsApp / Telepon</p>
                                <p className="font-bold text-slate-800 group-hover:text-red-600 transition-colors text-sm">+62 813-2525-5005</p>
                                <p className="text-xs text-slate-400 mt-0.5">Senin – Minggu, 08.00 – 17.00 WIB</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:maximal.construction@gmail.com"
                            className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</p>
                                <p className="font-bold text-slate-800 group-hover:text-red-600 transition-colors text-sm">maximal.construction@gmail.com</p>
                                <p className="text-xs text-slate-400 mt-0.5">Respon dalam 1×24 jam</p>
                            </div>
                        </a>

                        {/* CTA */}
                        <a
                            href="https://wa.me/6281325255005?text=Halo%20Maximal%2C%20saya%20ingin%20jadwalkan%20survei%20gratis."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1 text-sm"
                        >
                            Jadwalkan Survei Gratis
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}
