"use client";

import Link from 'next/link';

const Hero = () => {
    return (
        // Height diatur h-[calc(100vh-3.5rem)] --> 100% layar dikurangi tinggi navbar (3.5rem/56px)
        <section className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-slate-900">

            {/* === BACKGROUND LAYER === */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
            >
                {/* Overlay Gelap */}
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* === CONTENT LAYER === */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white mt-[-2rem]">
                {/* mt-[-2rem] untuk sedikit menaikkan teks agar visualnya pas di tengah mata */}

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight drop-shadow-md">
                    Maximal <span className="text-red-600">Construction</span>
                </h1>

                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white/90">
                    Solusi Bangunan Profesional
                </h2>

                <p className="text-base md:text-xl text-slate-200 mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-sm">
                    Melayani pembuatan Kanopi, Pagar, Rumah, hingga Pemborong di wilayah Solo & Grobogan dengan hasil berkualitas tinggi.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="https://wa.me/6281325255005?text=Halo%20Maximal%2C%20saya%20tertarik%20dengan%20jasa%20Anda"
                        target="_blank"
                        className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-xl hover:shadow-red-500/30 hover:-translate-y-1"
                    >
                        Konsultasi Gratis
                    </Link>

                    <Link
                        href="#portofolio"
                        className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-10 border-2 border-white rounded-full transition-all duration-300 backdrop-blur-sm hover:-translate-y-1"
                    >
                        Lihat Portofolio
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Hero;