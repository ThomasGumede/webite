const FooterItems = ({href, children}) => {
    return (
        <a data-aos='fade-down' data-aos-delay='400' href={`${href}`} className="text-sm text-gray-600 block p-2 w-max rounded-2xl hover:bg-[#f3bc58]">
            {children}
        </a>
    )
}

export default FooterItems
