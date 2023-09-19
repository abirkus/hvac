import AcUnitIcon from "@mui/icons-material/AcUnit";
import EngineeringIcon from "@mui/icons-material/Engineering";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeIcon from "@mui/icons-material/Home";
import ConstructionIcon from "@mui/icons-material/Construction";
import AirIcon from "@mui/icons-material/Air";

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              When It Comes To Reliability, We Are The One You Need!
            </h2>
            <p className="text-xl text-gray-400">Reach out for a quote today</p>
          </div>

          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <AcUnitIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Service & Repair</h4>
              <p className="text-lg text-gray-400 text-center">
                Your HVAC system is critical to your comfort in Chicagoland and
                surrounding areas. Our team of experts is skilled and
                knowledgeable in the repair or service of most makes and models
                of HVAC systems. Call us today to schedule your appointment!
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <EngineeringIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Maintenance</h4>
              <p className="text-lg text-gray-400 text-center">
                With Chicago winters getting colder and longer every year, it is
                important to plan ahead for any possible outages. Our
                experienced team helps you create a maintenance plan for your
                heating and cooling systems.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <ApartmentIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Commercial</h4>
              <p className="text-lg text-gray-400 text-center">
                Choosing the optimal heating, ventilation, and air conditioning
                products for your facility requires expertise and advice from
                trusted heating and cooling experts. We work hand in hand with
                you, to understand your heating needs, preferences and budget
                before making any suggestions.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <HomeIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Residential</h4>
              <p className="text-lg text-gray-400 text-center">
                When the temperature begins to drop, don’t get left out in the
                cold if your heater or furnace quits working. No matter how you
                heat your home or business, Ukrainian Village HVAC can help you
                get warm and stay warm. Our highly experienced heater
                technicians can diagnose, service, repair, or replace faulty or
                worn out heater and furnace parts and systems fast and reliably.
                And they can work on just about any heater or furnace you own
                using factory authorized parts
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <ConstructionIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Installations</h4>
              <p className="text-lg text-gray-400 text-center">
                Ukrainian Village HVAC specializes in high-efficiency
                residential and light commercial heating innovations and offer
                free quotes on new equipment. We ensure complete transparency,
                explaining possibilities, hiding nothing, and applying our
                experience and knowledge to our recommendations. We go above and
                beyond, even emailing you when it’s time for maintenance so you
                don’t neglect warranty requirements.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-600 rounded-full">
                <AirIcon fontSize="large" />
              </div>
              <h4 className="h4 mb-2">Air Quality</h4>
              <p className="text-lg text-gray-400 text-center">
                The quality of the air inside your home is essential for more
                than just comfort—it’s essential for a healthy and happy life.
                Poor air quality impacts your family’s health and well-being.
                That’s why it’s reassuring to know that with Ukrainian Village
                HVAC, you can be in complete control of your indoor air quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
