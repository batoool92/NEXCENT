import { data } from '../../data.ts';
import SystemCard from '../SystemCard/SystemCard.tsx';

const ManageComunitySystem = () => {
    return (
        <div className='px-24'>
            <div className="text-theme-black text-center mb-4 mt-3 lg:max-w-1/4 md:max-w-1/2 m-auto">
                <h1 className="lg:text-2xl md:text-lg font-semibold mb-3">{data[0].ManageComunitySystem.title}</h1>
                <p className="text-xs text-greyColor">{data[0].ManageComunitySystem.smallText}</p>
            </div>
           <div className='flex items-center justify-around flex-wrap'>
                {data[0]?.ManageComunitySystem.SystemCard.map((item) => {
                    return (<SystemCard cardIcon={item.cardIcon} cardTitle={item.cardTitle} cardText={item.cardText} />)
                })}
            </div>
        </div>
    )
}

export default ManageComunitySystem