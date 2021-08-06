const NavItems = ({href, children}) => {
    return (
        <li className='mx-5 my-6 md:my-0'>
            <a href={href} className='relative text-xl text-gray-900 md:text-lg md:py-2 before:hov hover:before:hov2'>
                {children}
            </a>
        </li>
    )
}

export default NavItems
