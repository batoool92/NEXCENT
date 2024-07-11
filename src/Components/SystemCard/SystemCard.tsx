interface Props {
    cardIcon: string;
    cardTitle: string;
    cardText: string;
}


const SystemCard:React.FC<Props> = ({ cardIcon, cardTitle, cardText }) => {
    return (
        <div className="lg:w-1/3 sm:w-1/2 h-3/4">
            <div className="py-4 m-auto text-center w-100">
                <div className="mb-4 m-auto w-fit"><img className="bg-light-green" src={cardIcon} alt="" /></div>
                <h1 className="text-sm lg:text-lg text-theme-black font-bold m-auto max-w-1/2">{cardTitle}</h1>
                <p className="text-xs text-greyColor max-w-3/4 m-auto">{cardText}</p>
            </div>
        </div>
    )
}

export default SystemCard