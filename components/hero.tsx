import HeroLandingImage from "@/public/images/ihor.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">
              Ukrainian Village HVAC
            </h1>
            <p
              className="text-xl text-gray-400 mb-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              We speak English 🇺🇸 Ukrainian 🇺🇦 Polish 🇵🇱
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a
                  className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="mailto:igorgabur@gmail.com?subject=ServiceRequest"
                >
                  Email us
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="tel:+17733963950"
                >
                  Call us
                </a>
              </div>
            </div>
          </div>

          <Image
            src={HeroLandingImage}
            className="rounded-md"
            width="1920"
            height="1080"
            alt={"logo"}
          />
        </div>
      </div>
    </section>
  );
}
