import AchievementsNumbers from "../../Components/AchievementsNumbers/AchievementsNumbers"
import Hero from "../../Components/Hero/Hero"
import ManageComunitySystem from "../../Components/ManageComunitySystem/ManageComunitySystem"
import MiddleSection from "../../Components/MiddleSection/MiddleSection"
import NavBar from "../../Components/NavBar/NavBar"
import OurClients from "../../Components/OurClients/OurClients"
import SideBar from "../../Components/SideBar/SideBar"
import Unseen from "../../Components/Unseen/Unseen"

// const initialState = {
//     data: data,
//     loading: false,
//     error: null
// }
const Home = () => {


    return (
        <>
            <NavBar />
            <SideBar />
            <Hero />
            <OurClients />
            <ManageComunitySystem />
            <Unseen />
            <AchievementsNumbers />
            <MiddleSection />
            {/* <Footer /> */}
        </>

    )
}

// const mapStateToProps = state: initialState => {
//     return {
//         data: state.data
//     }
// }

export default Home