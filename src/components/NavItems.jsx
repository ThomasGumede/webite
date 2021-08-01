const NavItems = ({href, children}) => {
    return (
        <li className='mx-5'>
            <a href={href} className='relative py-9 text-xl text-gray-900 md:text-lg md:py-2 before:hov hover:before:hov2'>
                {children}
            </a>
        </li>
    )
}

export default NavItems
