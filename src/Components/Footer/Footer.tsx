import { Link } from "react-router-dom"
import { data } from '../../data.ts';

const Footer = () => {

    return (
        <>
            <div className="bg-gray-800 text-white px-24 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <div>
                            <img src={data[0]?.NavBarMenu.logo1} alt="" />
                            <img src={data[0]?.NavBarMenu.logo2} alt="" />
                            
                        </div>
                            <h2 className="text-2xl font-bold mb-4">My Company</h2>
                            <p className="text-gray-400">Providing quality services since 2024. We aim to offer the best customer experience and satisfaction.</p>
                        </div>

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-bold mb-4">Navigation</h3>
                            <ul>
                                <Link to='/' className="mb-2">
                                    <a href="#home" className="text-gray-400 hover:text-white transition">Home</a>
                                </Link>
                                <li className="mb-2">
                                    <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#services" className="text-gray-400 hover:text-white transition">Services</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                            <ul>
                                <li className="mb-2 text-gray-400">
                                    <span className="font-bold">Address:</span> 1234 Street Name, City, Country
                                </li>
                                <li className="mb-2 text-gray-400">
                                    <span className="font-bold">Phone:</span> (123) 456-7890
                                </li>
                                <li className="mb-2 text-gray-400">
                                    <span className="font-bold">Email:</span> info@mycompany.com
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                        &copy; 2024 My Company. All rights reserved.
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer