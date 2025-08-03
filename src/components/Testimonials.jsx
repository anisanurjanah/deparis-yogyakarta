export default function Testimonials() {
  const testimonials = [
    { name: "Andi", review: "Makanannya enak banget! Pelayanan ramah juga." },
    { name: "Sinta", review: "Tempatnya nyaman, cocok buat keluarga!" },
    { name: "Budi", review: "Harga terjangkau, rasa bintang lima!" },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 text-center bg-white">
      <h2 className="text-3xl font-bold mb-10">Apa Kata Mereka</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <p className="text-gray-800 mb-4 italic">"{item.review}"</p>
            <h3 className="font-semibold text-gray-600">- {item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
