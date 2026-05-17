import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import ProjectGallery from '@/components/ProjectGallery';

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props) {
    const { id } = await params;
    
    const { data: project } = await supabase
        .from('projects')
        .select('title, description')
        .eq('id', id)
        .single();

    if (!project) return { title: 'Proyek Tidak Ditemukan' };

    return {
        title: `${project.title} | Maximal Construction`,
        description: project.description,
    };
}

export default async function ProjectDetail({ params }: Props) {
    const { id } = await params;
    
    const { data: project, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

    if (error || !project) {
        notFound();
    }

    // --- PERBAIKAN GALERI ---
    // Mencegah error jika tipe data di database bukan Array
    let galleryImages: string[] = [];
    if (project.gallery) {
        if (Array.isArray(project.gallery)) {
            galleryImages = project.gallery;
        } else if (typeof project.gallery === 'string') {
            // Jika user mengisi sebagai teks biasa, bersihkan karakter aneh dan pisahkan dengan koma
            galleryImages = project.gallery
                .replace(/[{}"'[\]]/g, '') // Hapus tanda kurung atau kutip jika ada
                .split(/,|\n/) // Pisahkan dengan koma ATAU enter (jangan spasi, karena URL bisa mengandung spasi)
                .map((url: string) => url.trim())
                .filter((url: string) => url.length > 0);
        }
    }

    return (
        <main className="bg-white min-h-screen pb-20">

            <div className="relative min-h-[400px] md:min-h-[500px] h-[50vh] md:h-[60vh] w-full bg-neutral-900">
                {project.image_url && (
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                )}
                {/* Menambahkan pb-20 agar teks agak ke atas dan tidak tertabrak card yang naik (-mt-20) */}
                <div className="absolute inset-0 flex items-center justify-center pb-20 md:pb-24">
                    <div className="text-center px-4 animate-fade-in-up">
                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-widest uppercase rounded mb-4">
                            {project.category}
                        </span>
                        {/* Menambahkan text-balance atau break-words agar teks panjang di layar kecil tidak meluber */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg max-w-4xl leading-tight text-balance">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Kontainer Card Detail - Naik ke atas dengan -mt-20 */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-10">
                <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border border-neutral-100">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                        <div className="md:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-neutral-900 border-b-2 border-red-600 inline-block pb-2 mb-6">
                                    Tentang Proyek
                                </h2>
                                <p className="text-neutral-600 leading-relaxed text-lg text-justify whitespace-pre-line">
                                    {project.description}
                                </p>
                            </div>

                            {galleryImages.length > 0 && (
                                <ProjectGallery images={galleryImages} />
                            )}
                        </div>

                        <div className="space-y-8">
                            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                                <h3 className="text-lg font-bold text-neutral-900 mb-6 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-red-600 rounded-full"></span>
                                    Informasi Proyek
                                </h3>
                                <ul className="space-y-6">

                                    <li className="border-b border-neutral-200 pb-3">
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Lokasi</span>
                                        <span className="font-bold text-neutral-800 text-lg">{project.location || "-"}</span>
                                    </li>
                                    <li className="border-b border-neutral-200 pb-3">
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Tahun</span>
                                        <span className="font-bold text-neutral-800 text-lg">{project.year || "-"}</span>
                                    </li>
                                    <li className="border-b border-neutral-200 pb-3">
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Kategori</span>
                                        <span className="font-bold text-neutral-800 text-lg">{project.category}</span>
                                    </li>
                                    <li>
                                        <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Status</span>
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-bold">
                                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                                            Selesai
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="flex flex-col gap-4 sticky top-24">
                                <p className="text-sm text-center text-neutral-500">Tertarik membuat proyek seperti ini?</p>
                                <Link
                                    href={`https://wa.me/6281325255005?text=Halo%20Maximal%2C%20saya%20tertarik%20membuat%20${project.category}%20seperti%20proyek%20${project.title}`}
                                    target="_blank"
                                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl text-center transition-all shadow-lg hover:shadow-red-500/40 hover:-translate-y-1 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                    Pesan via WhatsApp
                                </Link>
                                <Link
                                    href="/#portofolio"
                                    className="w-full bg-white hover:bg-neutral-100 text-neutral-600 font-semibold py-4 rounded-xl text-center border border-neutral-300 transition-colors"
                                >
                                    ← Kembali ke Portofolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}