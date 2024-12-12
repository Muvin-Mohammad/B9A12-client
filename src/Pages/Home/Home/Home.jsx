import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Categories from "../../../components/Categories/Categories";
import AboutTheBuilding from "../AboutTheBuilding/AboutTheBuilding";
import ApartmentLocation from "../ApartmentLocation/ApartmentLocation";
import Testimonial from "../Testimonial/Testimonial";
import OurTeam from "../OurTeam/OurTeam";
import CouponOffer from "../../../components/CouponOffer/CouponOffer";



const Home = () => {
    return (
        <div>

            <Helmet>
                <title>Safoon Estate | Vacation Homes & Condo Rentals </title>
            </Helmet>
            {/* <Categories></Categories> */}
            <Banner></Banner>
            <CouponOffer></CouponOffer>
            <AboutTheBuilding></AboutTheBuilding>
            <Testimonial></Testimonial>
            <OurTeam></OurTeam>
            {/* <ApartmentLocation></ApartmentLocation> */}
        </div>
    );
};

export default Home;