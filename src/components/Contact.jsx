export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
      <p className="mb-4">📍 Jl. Contoh No.123, Kota Makan, Indonesia</p>
      <p className="mb-4">📞 0812-3456-7890</p>
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 px-6 py-3 mt-4 rounded-full font-semibold hover:bg-green-600 transition"
      >
        Chat via WhatsApp
      </a>
    </section>
  );
}
