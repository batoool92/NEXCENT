import { useState } from "react";
import { ImMenu } from "react-icons/im";
import { FaWindowClose } from "react-icons/fa";
import { data } from '../../data.ts'; 



const SideBar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <ImMenu className="fixed z-20 top-3 right-10 text-4xl md:hidden" onClick={() => toggleMenu()} />
            <div className={isOpen ? "hidden" : "block"}>
                <div className="bg-light-grey fixed top-0 right-0 h-screen w-2/4 z-50 md:hidden flex flex-col">
                    <div className={isOpen ? "hidden" : "block"} ><FaWindowClose onClick={()=>toggleMenu()} className="text-themeColor" /></div>
                    <ul className='flex flex-col gap-4 text-xl items-center mb-10'>
                        {data[0]?.NavBarMenu.links.map((item)=> {
                            return (<li>{item.name}</li>)
                        })}
                    
                    </ul>
                    <button className='bg-button-rgb text-white px-5 py-2 text-xs rounded-sm'>
                        Register Now &#8594;
                    </button>
                </div>
            </div>
        </>
    )
}

export default SideBar