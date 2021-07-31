export default function NavItem({ href, isActive, children }) {
    return (
        <a href={href} className="block text-lg text-white font-medium hover:text-[#1e2472] sm:inline-block sm:text-[#8a6eff]">
          {children}
        </a>
    )
  }