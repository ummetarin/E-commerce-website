
import Categoric from "../Categorish/Categoric";
import HomeReviews from "../Homepage/HomeReviews";
import TopProduct from "../TopProduct/TopProduct";
import Banner from "./Banner";
import Section2 from "./Section2";
import Section3, { Carousel2 } from "./Section3";
import Section4 from "./Section4";

const Homedata = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="mb-12 mt-10">
                <div>
                    <h1 className="font-bold text-3xl text-center text-amber-950  ">Available Categories</h1>
                    <p className="text-center text-gray-600  text-sm md:px-24 mt-3">These are just some examples, and the specific categories can vary depending on the nature of the e-commerce website and the types of products it offers. The goal is to create a logical structure that makes it easy for users to find what they're looking for.</p>
                </div>
            <div className="mt-8">
            <Categoric></Categoric>
            </div>
            </div>
            <div>
         
            </div>
            <div>
              <Section2></Section2>
            </div>
            <div>
               <Carousel2></Carousel2>
            </div>
            <div>

                <TopProduct></TopProduct>
            </div>
            <div>
                <Section4></Section4>
            </div>
            
            <div className="mb-12 mt-10">
                    <h1 className="font-bold text-3xl text-center text-amber-950  ">Top Reviews About Our Cloths</h1>
                    <p className="text-center text-gray-600 text-sm md:px-24 mt-3">These are just some examples, and the specific categories can vary depending on the nature of the e-commerce website and the types of products it offers. The goal is to create a logical structure that makes it easy for users to find what they're looking for.</p>
                </div>
            <div>
                <HomeReviews></HomeReviews>
            </div>
           
        </div>
    );
};

export default Homedata;