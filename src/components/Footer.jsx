import FooterCard from "./SharedComponets/FooterCard"
import FooterItems from "./SharedComponets/FooterItems"
import { BsArrowRightShort} from 'react-icons/bs'
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='space-y-4 M-12'>
            <div>
                <a href="#AboutUs" className="logo">WeBite</a>
            </div>

            <hr />

                
            

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:grid-cols-5">

                <div className="space-y-6">
                    <h1 data-aos='zoom-in' className="font-sans2 text-2xl text-gray-800">
                        Join Our Newsletter
                    </h1>
                    <div className="flex flex-col space-y-4 md:space-y-0  lg:flex-row lg:items-center space-x-4">
                        <input data-aos='fade-up' type="text" name="text" id="" placeholder='Enter your email' className='outline-none text-sm border-b-[2px] border-gray-400 px-2 w-[160px]' />
                        <BsArrowRightShort data-aos='fade-up' data-aos-delay='300' className='w-[30px] h-[30px] home rounded-full hover:animate-bounce' />
                    </div>
                    <div className="flex items-center space-x-3">
                            <FaFacebook data-aos='fade-up' data-aos-delay='400' className='w-[25px] h-[25px] text-[#f3bc58] cursor-pointer hover:animate-bounce' />
                            <FaTwitter data-aos='fade-up' data-aos-delay='500' className='w-[25px] h-[25px] text-[#f3bc58] cursor-pointer hover:animate-bounce' />
                            <FaInstagram data-aos='fade-up' data-aos-delay='600' className='w-[25px] h-[25px] text-[#f3bc58] cursor-pointer hover:animate-bounce' />
                            <FaYoutube data-aos='fade-up' data-aos-delay='700' className='w-[25px] h-[25px] text-[#f3bc58] cursor-pointer hover:animate-bounce' />
                    </div>
                </div>

                <FooterCard title='Services'>
                    <FooterItems href='#home'>Order Online</FooterItems>
                    <FooterItems href='#home'>Pre-Reservation</FooterItems>
                    <FooterItems href='#home'>24/7 Services</FooterItems>
                    <FooterItems href='#home'>Foodie Place</FooterItems>
                    <FooterItems href='#home'>Super Chef</FooterItems>
                </FooterCard>
                <FooterCard title='Quick Links'>
                    <FooterItems href='#home'>Menu</FooterItems>
                    <FooterItems href='#home'>Reviews</FooterItems>
                    <FooterItems href='#home'>Blog</FooterItems>
                    <FooterItems href='#home'>Reserve Table</FooterItems>
                    <FooterItems href='#home'>Order Food</FooterItems>
                </FooterCard>
                <FooterCard title='About'>
                    <FooterItems href='#home'>Our Story</FooterItems>
                    <FooterItems href='#home'>Benefits</FooterItems>
                    <FooterItems href='#home'>Career</FooterItems>
                    <FooterItems href='#home'>Our Chefs</FooterItems>
                </FooterCard>
                <FooterCard title='Help'>
                    <FooterItems href='#home'>Contact</FooterItems>
                    <FooterItems href='#home'>Support</FooterItems>
                    <FooterItems href='#home'>FAQ</FooterItems>
                </FooterCard>
            </div>
        </div>
    )
}

export default Footer
