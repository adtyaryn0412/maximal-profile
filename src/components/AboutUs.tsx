"use client";

export default function AboutUs() {
    const stats = [
        { value: "100+", label: "Proyek Selesai" },
        { value: "7", label: "Tahun Pengalaman" },
        { value: "10+", label: "Kota Dilayani" },
        { value: "100%", label: "Garansi Kualitas" },
    ];

    const keunggulan = [
        "Material berkualitas tinggi & bersertifikat SNI",
        "Tim berpengalaman & profesional",
        "Survei & konsultasi gratis tanpa syarat",
        "Harga transparan, tanpa biaya tersembunyi",
        "Garansi pengerjaan dan hasil akhir",
        "Pengerjaan tepat waktu sesuai kontrak",
    ];

    return (
        <section id="tentang" className="py-24 bg-white relative overflow-hidden">
            {/* Dot pattern — sama persis dengan Services */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header — sama dengan Services */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Tentang <span className="text-red-600">Kami</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Mitra terpercaya untuk solusi konstruksi, renovasi, dan fabrikasi logam di wilayah Solo Raya & Grobogan.
                    </p>
                </div>

                {/* Statistik — gaya kartu sama dengan Services */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-2 transition-all duration-300 text-center group cursor-default"
                        >
                            <p className="text-4xl md:text-5xl font-extrabold text-red-600 mb-2">
                                {stat.value}
                            </p>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Konten utama */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                    {/* Kiri - Deskripsi */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                            Mitra Terpercaya untuk{" "}
                            <span className="text-red-600">Konstruksi</span>{" "}
                            &{" "}
                            <span className="text-red-600">Renovasi</span>{" "}
                            di Solo Raya
                        </h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            <strong className="text-slate-800">Maximal Construction</strong> adalah perusahaan jasa konstruksi dan fabrikasi logam yang berpusat di Solo, Jawa Tengah. Kami telah dipercaya oleh ratusan pelanggan, mulai dari perumahan pribadi, ruko, kantor, hingga gudang industri.
                        </p>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Spesialisasi kami mencakup pemasangan <strong className="text-slate-800">kanopi</strong>, pembuatan <strong className="text-slate-800">pagar & pintu gerbang</strong>, <strong className="text-slate-800">konstruksi baja</strong>, hingga <strong className="text-slate-800">renovasi bangunan</strong>. Semua dikerjakan dengan standar kualitas tinggi.
                        </p>
                        <a
                            href="https://wa.me/6281325255005?text=Halo%20Maximal%2C%20saya%20ingin%20konsultasi."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/30 hover:-translate-y-1"
                        >
                            Konsultasi Sekarang
                        </a>
                    </div>

                    {/* Kanan - Keunggulan */}
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300">
                        <h4 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-red-600 transition-colors duration-300">
                            Mengapa Pilih Kami?
                        </h4>
                        <ul className="space-y-4">
                            {keunggulan.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <div className="flex-shrink-0 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300 shadow-sm">
                                        <svg className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}