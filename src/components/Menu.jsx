export default function Menu() {
    const categories = [
        "Seafood", "Beef Ribs", "Fish", "Vegetable", 
        "Main Course", "Drinks", "Blend", "Snack"
    ];

    const menuItems = [
        { name: "Nasi Goreng Spesial", price: "25K", img: "/nasi-goreng.jpg" },
        { name: "Sate Ayam", price: "30K", img: "/sate.jpg" },
        { name: "Es Teh Manis", price: "8K", img: "/esteh.jpg" },
    ];

    return (
        <>
            <section id="menu" className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-12 mx-auto">
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">DeParis Menu</h1>

                    <div className="lg:hidden flex overflow-x-auto space-x-4 space-y-4 mb-4 mt-4">
                        {
                            categories.map((category) => (
                                <a
                                    key={category}
                                    href="#"
                                    className="flex-shrink-0 px-4 py-2 text-sm bg-gray-100 rounded-full text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                >
                                    {category}
                                </a>
                            ))
                        }
                    </div>

                    <div className="flex flex-col lg:flex-row lg:gap-12 mt-6">
                        <aside className="hidden lg:block w-1/4">
                            <div className="space-y-4">
                                {
                                    categories.map((category, idx) => (
                                        <a
                                            key={idx}
                                            href="#"
                                            className={`block text-gray-500 dark:text-gray-300 hover:underline`}
                                        >
                                            {category}
                                        </a>
                                    ))
                                }
                            </div>
                        </aside>

                        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {
                                menuItems.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-lg shadow-md dark:bg-gray-800"
                                    >
                                        <img
                                            src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                                            // src={item.img}
                                            alt={item.name}
                                            className="w-full h-56 object-cover rounded-t-lg"
                                        />

                                        <div className="p-4">
                                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                {item.name}
                                            </h2>
                                            <p className="text-sm text-blue-500 dark:text-blue-400 mt-1">{item.price}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </main>
                    </div>

                    {/* <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
                        <div className="lg:mx-12">
                            <div className="mt-4 space-y-4 lg:mt-8">
                                <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">Seafood</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Beef Ribs</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Fish</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Vegetable</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Main Course</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Drinks</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Blend</a>
                                <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Snack</a>
                            </div>
                        </div>

                        <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                                <div>
                                    <img className="object-cover w-full rounded-lg h-72 "
                                        src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                                        alt="" />
                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Best website
                                        collections</h2>
                                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Website</p>
                                </div>

                                <div>
                                    <img className="object-cover w-full rounded-lg h-72 "
                                        src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                        alt="" />
                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                                        collections</h2>
                                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                                </div>

                                <div>
                                    <img className="object-cover w-full rounded-lg h-72 "
                                        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                        alt="" />
                                    <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Ton’s of mobile
                                        mockup</h2>
                                    <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Mockups</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}
