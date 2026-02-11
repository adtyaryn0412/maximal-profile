import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      {/* Memanggil komponen Hero di bagian paling atas */}
      <Hero />

      {/* Placeholder untuk section selanjutnya (misal: Layanan) */}
      <section id="layanan" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mengapa Memilih Kami?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Kami berkomitmen memberikan hasil konstruksi terbaik dengan material pilihan.</p>
        </div>
      </section>
      
    </main>
  );
}