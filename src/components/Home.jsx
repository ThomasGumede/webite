function Home() {


    return (
        <div className="flex flex-col space-y-5 items-center w-full mt-16 md:flex-row md:justify-between  md:space-y-0">

            <div className="block text-center space-y-4 md:text-left md:space-y-8 md:w-[500px]">
                <h5 className="text-sm text-[#686e7c]">Creativity And Collaborations</h5>

                <h1 className="text-xl xsm:text-2xl sm:text-3xl md:text-4xl text-[#1e2472] font-bold">Work Remotely 
                    From Your Home Or Places
                </h1>

                <p className="text-base text-gray-500 font-normal sm:font-medium">
                    We curate the best digital jobs for those 
                    looking to start their telecommunication career
                </p>

                <div className="flex space-x-6 items-center justify-between md:justify-start">
                    <a href="#home" className="btn">Get Started</a>
                    <a href="#home" className="btn2">Book a demo</a>
                </div>
            </div>

            <img src="/img/Remote team-amico.svg" alt="" className="w-[400px] h-[400px] md:w-[550px] md:h-[550px]" />
        </div>
    )
}

export default Home
