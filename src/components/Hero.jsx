import { useState } from "react";

export default function Hero() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "Home", href: "#home" },
        { label: "Menu", href: "#menu" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Order Now", href: "#order", highlight: true },
        { label: "Contact Us", href: "#contact" },
    ];

    return (
        <>
            <header id="home" className="bg-white dark:bg-gray-900">
                <nav className="bg-white dark:bg-gray-900 dark:border-gray-700">
                    <div className="container flex items-center justify-between px-6 py-4 mx-auto">
                        <a href="#" className="flex items-center mx-auto">
                            <img
                                className="w-auto h-6 sm:h-7" 
                                src="https://merakiui.com/images/full-logo.svg" 
                                alt="" 
                            />
                        </a>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
                        {
                            navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className={`mx-2 border-b-2 sm:mx-6 ${
                                        link.highlight
                                        ? "text-blue-500 border-transparent dark:hover:text-gray-200 hover:border-blue-500"
                                        : "text-gray-800 dark:text-gray-200 border-transparent hover:border-blue-500"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))
                        }

                        {/* <a href="#home" className="mx-2 text-gray-800 border-b-2 border-blue-500 dark:text-gray-200 sm:mx-6">Home</a>
                        <a href="#menu" className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">Menu</a>
                        <a href="#testimonials" className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">Testimonials</a>
                        <a href="#order" className="mx-2 border-b-2 border-transparent text-blue-500 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">Order Now</a>
                        <a href="#contact" className="mx-2 border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 sm:mx-6">Contact Us</a> */}
                    </div>

                    {
                        isOpen && (
                            <div className="lg:hidden px-6 pb-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                {
                                    navLinks.map((link) => (
                                        <a
                                            key={link.href}
                                            href={link.href}
                                            className={`block border-b border-gray-200 dark:border-gray-700 ${
                                                link.highlight ? "text-blue-500" : ""
                                            }`}
                                        >
                                            {link.label}
                                        </a>
                                    ))
                                }

                                {/* <a href="#home" className="block border-b border-gray-200 dark:border-gray-700">Home</a>
                                <a href="#menu" className="block border-b border-gray-200 dark:border-gray-700">Menu</a>
                                <a href="#testimonials" className="block border-b border-gray-200 dark:border-gray-700">Testimonials</a>
                                <a href="#order" className="block border-b border-gray-200 dark:border-gray-700 text-blue-500">Order Now</a>
                                <a href="#contact" className="block border-b border-gray-200 dark:border-gray-700">Contact Us</a> */}
                            </div>
                        )
                    }
                </nav>

                <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">DeParis Yogyakarta</h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">A seafood restaurant with simple traditional theme but still cozy.</p>
                            
                            <div className="mt-6">
                                <a 
                                    href="#menu" 
                                    className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                                >
                                    Lihat Menu
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img 
                            className="object-cover w-full h-full max-w-2xl rounded-md" 
                            src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                            alt="apple watch photo" 
                        />
                    </div>
                </div>
            </header>
        </>
    )
}
