export default function Menu() {
  const menuItems = [
    { name: "Nasi Goreng Spesial", price: "25K", img: "/nasi-goreng.jpg" },
    { name: "Sate Ayam", price: "30K", img: "/sate.jpg" },
    { name: "Es Teh Manis", price: "8K", img: "/esteh.jpg" },
  ];

  return (
    <section id="menu" className="py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Menu Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {menuItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={item.img} alt={item.name} className="h-56 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
