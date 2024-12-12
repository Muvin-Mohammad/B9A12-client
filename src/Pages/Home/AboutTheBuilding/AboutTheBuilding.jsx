import DivisionTitle from "../../../components/DivisionTitle/DivisionTitle";
import feature from '../../../assets/image/feature.jpg';
import feature2 from '../../../assets/image/feature2.jpg';
import feature3 from '../../../assets/image/feature3.png';


import './AboutTheBuilding.css'


const AboutTheBuilding = () => {
  return (
    <div class=" container px-6 py-10 mx-auto">
      <section class="about-item bg-fixed pt-8 my-20">
     
        <DivisionTitle title={'About the Building'} subTitle={'Discover the history and features of our magnificent building, designed with modern amenities and cutting-edge architecture.'} ></DivisionTitle>

      
        <div
          className="hero min-h-screen"
          style={{
            // backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
            backgroundImage: { feature2 },
          }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
        
              <p className="mb-5 text-2xl">
                Welcome to Safoon Estate, a modern and secure residential space offering comfortable apartments with state-of-the-art amenities.
              </p>
              {/* <button className="btn btn-primary">Get Started</button> */}
              <button className="btn btn-outline border-0  hover:bg-blue-600  border-b-4 mt-4">Explore Now</button>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
};

export default AboutTheBuilding;
