import { useState } from 'react';
import { data } from '../../data.ts';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

// interface Props {
//     onEnter: ;
//     setCounterOn: string;
//     cardText: string;
// }

const AchievementsNumbers = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className="px-10 md:flex flex-wrap w-full bg-light-grey">
            <div className="md:max-w-1/2 w-full py-14 m-auto text-center">
                <h1 className='md:text-3xl text-xl font-bold text-theme-black'>Helping a local <div> <span className='text-themeColor'>business reinvent itself</span></div></h1>
                <p className='text-xs text-theme-black'>{data[0].AchievementsSection.smallText}</p>
            </div>
            <div className="md:max-w-1/2 w-full py-11">
                <div className="md:max-w-1/2 w-full m-auto">
                    <div className="mx-auto p-4">
                        <div className="grid grid-cols-2 grid-rows-2 gap-9">
                            <div className="w-max m-auto flex gap-2 items-center rounded-lg p-1">
                                <img src={data[0].AchievementsSection.Achievment.members.icon} alt="" />
                                <div>
                                    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                        <h2 className="text-lg text-theme-black font-bold mb-2">
                                            {counterOn && <CountUp start={0} end={data[0].AchievementsSection.Achievment.members.number} duration={3} delay={0} />}
                                       +
                                        </h2>
                                    </ScrollTrigger>
                                    <p className="text-greyColor text-xs">Members</p>
                                </div>
                            </div>
                            <div className="w-max m-auto flex gap-2 items-center rounded-lg p-1">
                                <img src={data[0].AchievementsSection.Achievment.clubs.icon} alt="" />
                                <div>
                                    <h2 className="text-lg text-theme-black font-bold mb-2">
                                       {counterOn &&  <CountUp start={0} end={data[0].AchievementsSection.Achievment.clubs.number} duration={3} delay={0} />}
                                   +
                                    </h2>
                                    <p className="text-greyColor text-xs">clubs</p>
                                </div>
                            </div>
                            <div className="w-max m-auto flex items-center gap-2 rounded-lg p-1">
                                <img src={data[0].AchievementsSection.Achievment.payments.icon} alt="" />
                                <div>
                                    <h2 className="text-lg text-theme-black font-bold mb-2">
                                       {counterOn && <CountUp start={0} end={data[0].AchievementsSection.Achievment.payments.number} duration={3} delay={0} />} 
                                   +
                                    </h2>
                                    <p className="text-greyColor text-xs">payments</p>
                                </div>
                            </div>
                            <div className="w-max m-auto flex items-center gap-2 rounded-lg p-1">
                                <img src={data[0].AchievementsSection.Achievment.eventBooking.icon} alt="" />
                                <div>
                                    <h2 className="text-lg text-theme-black font-bold mb-2">
                                       {counterOn && <CountUp start={0} end={data[0].AchievementsSection.Achievment.eventBooking.number} duration={3} delay={0} />} 
                                    +
                                    </h2>
                                    <p className="text-greyColor text-xs">event Booking</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AchievementsNumbers