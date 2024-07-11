
// import { useState } from 'react';
import { data } from '../../data.ts';


const NavBar = () => {
   
    return (
        <nav className='w-full flex fixed z-10 justify-between items-center bg-white text-black px-16 py-4'>
            <div className='flex gap-1'>
                <img src={data[0].NavBarMenu.logo1} alt="" />
                <img src={data[0].NavBarMenu.logo2} alt="" />
            </div>
            <div className='md:flex hidden gap-4'>
                <ul className='flex gap-4 text-xs items-center'>
                    <li> Home </li>
                    <li> Features </li>
                    <li> Community </li>
                    <li> Blog </li>
                    <li> Pricing </li>
                </ul>
                <button className='bg-button-rgb text-white px-5 py-2 text-xs rounded-sm'>
                    Register Now &#8594;
                </button>
            </div>
            {/* className="md:hidden" */}



        </nav>
    )
}

export default NavBar