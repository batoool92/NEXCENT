import { data } from '../../data.ts';

const MiddleSection = () => {
    return (
        <div className="md:flex w-full gap-16 items-center px-24 py-8">
            <div className="md:w-2/5 sm:w-full mb-4">
                <img className='w-full h-full' src={data[0].middleSection.image} alt="" />
            </div>
            <div className="md:w-3/5 sm:w-full sm:pr-28">
                <h1 className='text-theme-black font-semibold md:text-3xl text-xl mb-3'>{data[0].middleSection.title}</h1>
                <p className='text-greyColor text-xs mb-6'>{data[0].middleSection.details}</p>
                <button className='px-6 py-3 bg-button-rgb rounded-sm text-white text-xs'>Learn More</button>
            </div>
        </div>
    )
}

export default MiddleSection