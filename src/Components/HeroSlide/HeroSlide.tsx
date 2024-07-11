import heroImage from './../../assets/Illustration.png'

const HeroSlide = () => {
    return (
        <div className="px-20 py-16 bg-light-grey flex flex-wrap justify-around mt-12">
            <div className="lg:w-3/5 md:w-2/4 flex flex-col justify-center py-11 pl-14">
                <div className='w-4/5'>
                    <h1 className="sm:text-xl lg:text-5xl md:text:3xl font-bold mb-4">Lessons and insights <div><span className='text-themeColor'>from 8 years</span></div></h1>
                    <p className="text-xs text-greyColor mb-6">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                </div>
                <div>
                    <button className="px-5 py-2 bg-button-rgb text-white text-xs rounded-lg">Register</button>
                </div>
            </div>
            <div className="lg:w-2/5 md:w-2/4">
                <img src={heroImage} alt="Hero" className="h-full" />
            </div>
        </div>
    )
}

export default HeroSlide