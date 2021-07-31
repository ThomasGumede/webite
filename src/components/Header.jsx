import { useState } from 'react'
import {CgMenuRight, CgMenuLeft} from 'react-icons/cg'
import NavItem from './NavItems'


function Header() {

    const [show, setShow] = useState(false)

    const hidden = show === false

    const onclick = () => {
        hidden ?
            setShow(true):
            setShow(false)
    }

    window.onscroll = () => {
        setShow(false)
    }

    return (
        <div className='fixed top-0 left-0 right-0 shadow-2xl w-full flex bg-[#1e2472] justify-between items-center z-40 p-2 md:px-24 sm:bg-[#fdfcff]'>
            
            
            <a href="#home" className="logo">Omnifesto.</a>

            {/* toggle bar */}
            {hidden ? <CgMenuRight className="icon" onClick={onclick}/> : <CgMenuLeft className="icon" onClick={onclick}/>}
        
        
            <nav className={`absolute top-full z-50 ${hidden ? '-right-full' : 'right-0'} bg-[#1e2472] text-center w-full space-y-3 pt-6 sm:tablet`}>
                <NavItem href="#home">Home</NavItem>
                <NavItem href="#Product">Product</NavItem>
                <NavItem href="#Solutions">Solutions</NavItem>
                <NavItem href="#Supports">Supports</NavItem>
                <NavItem href="#Resources">Resources</NavItem>
            </nav>

            <div className="hidden space-x-6 items-center md:inline-block">
                <a href="#home" className="btn transition duration-500 ease-linear">
                    Login
                </a>
                <a href="#home" className="btn2 transition duration-500 ease-linear">
                    Try Us
                </a>
            </div>
        </div>
    )
}

export default Header
