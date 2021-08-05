import {useState} from 'react'

import NavItems from "./SharedComponets/NavItems";
import { BiBasket } from 'react-icons/bi'
import {CgMenuRight, CgMenuLeft} from 'react-icons/cg'

function Navbar() {

    const [show, setShow] = useState(false)

    const onclick = () => {
        show === false ? setShow(true) : setShow(false)
    }

    window.onscroll = () => {
        setShow(false)
    }

    return (
        <nav className="w-full bg-[#fffcf7] z-50 py-4 transition duration-1000">
            <div className="flex justify-between w-full items-center m-auto">

                <div><a href="#AboutUs" className="logo">WeBite</a></div>

                <ul className={`z-50 md:tablet ${show === true ? 'left-0': '-left-full'} flex phone`}>
                    <NavItems href="#About">About Us</NavItems>
                    <NavItems href="#Menu">Menu</NavItems>
                    <NavItems href="#Reviews">Reviews</NavItems>
                    <NavItems href="#Blog">Blog</NavItems>
                    <NavItems href="#Contacts">Contacts</NavItems>
                    <div onClick={onclick} className='absolute top-5 right-8 text-3xl text-[#927b71] md:hidden'>
                        <CgMenuLeft />
                    </div>
                </ul>

                <div className='hidden space-x-8 md:flex items-center'>
                    <a href="#home" className='navIcon hover:bg-[#f3bc58]'><BiBasket /></a>
                    <a href="#home" className='btn'>Reserve Table</a>
                </div>

                <CgMenuRight onClick={onclick} className={`text-3xl text-[#f3bc58] ${show === true ? 'hidden' : 'block'} md:hidden`} />

            </div>
        </nav>
    )
}

export default Navbar
