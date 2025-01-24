import { testimonial_data } from "../../data/testimonial";
import googleLogo from "../../assets/google-logo.webp";
import fullStars from "../../assets/full-stars.svg";
import practoLogo from "../../assets/practo-logo.webp";
import fourandhalfStars from "../../assets/four-half-stars.svg";
import facebookLogo from "../../assets/facebook.webp";
import sulekhaLogo from "../../assets/sulekha.webp";
import justdialLogo from "../../assets/justdial.webp";
import Testimonial from "./Testimonial";
import Review from "../UI/Review";

export default function Testimonials() {
  return (
    <div className="flex items-center justify-center flex-col space-y-20 rounded-3xl">
      <div className="w-full flex items-center justify-center flex-col space-y-4">
        <div className="w-full flex items-center justify-center flex-col">
          <h1 className="font-bold text-6xl tracking-tight">
            Don't take our word for it,
          </h1>
          <h1 className="font-bold text-6xl tracking-tight">
            See what <span className="text-health-green">Clients</span> say
            about us
          </h1>
        </div>
        <h1 className="text-lg tracking-tight">
          Life-changing turnarounds with the right care
        </h1>
      </div>
      <div className="w-[70%] grid grid-cols-2 gap-8">
        {testimonial_data.map((person) => (
          <Testimonial key={person.id} {...person} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center space-x-10">
          <Review
            desc="Based on Google reviews"
            logo={googleLogo}
            stars={fourandhalfStars}
            title={"4.6"}
          />
          <Review
            desc="Based on Practo reviews"
            logo={practoLogo}
            stars={fullStars}
            title={"5.0"}
          />
          <Review
            desc="Based on Facebook reviews"
            logo={facebookLogo}
            stars={fourandhalfStars}
            title={"4.6"}
          />
          <Review
            desc="Based on Sulekha reviews"
            logo={sulekhaLogo}
            stars={fullStars}
            title={"5.0"}
          />
          <Review
            desc="Based on Justdial reviews"
            logo={justdialLogo}
            stars={fourandhalfStars}
            title={"4.6"}
          />
        </div>
      </div>
    </div>
  );
}
