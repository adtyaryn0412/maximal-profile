import servicesData from '@/data/services.json';

const ServiceIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'canopy':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            );
        case 'fence':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
            );
        case 'house':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        case 'renovation':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
            );
        case 'tools':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            );
        case 'construction':
            return (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            );
        default:
            return null;
    }
};

export default function Services() {
    return (
        <section id="layanan" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Apa yang Kami <span className="text-red-600">Kerjakan?</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Dari konstruksi baja berat hingga detail aksesoris rumah, kami memberikan standar kualitas tertinggi untuk setiap proyek Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, i) => (
                        <div
                            key={service.id}
                            data-aos="zoom-in-up"
                            data-aos-delay={i * 100}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-red-200 hover:bg-white hover:shadow-2xl hover:shadow-red-500/5 hover:-translate-y-2 transition-all duration-300 group cursor-default"
                        >
                            <div className="w-16 h-16 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white text-slate-700 transition-all duration-300 shadow-sm group-hover:shadow-md">
                                <ServiceIcon type={service.icon || 'house'} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}