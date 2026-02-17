import "../../App.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <figure className="m-0 p-0 h-full">
            <img
              src="https://leap-pm.com/front/assets/img/banners/About Us-02.webp"
              srcSet="https://leap-pm.com/front/assets/img/banners/About Us-02.webp 2x"
              alt="banner"
              className="
              w-full
              h-full
              max-h-full
              object-cover
              object-bottom
            "
            />
          </figure>

          {/* Overlay optional */}
          {/* <div className="absolute inset-0 bg-black/60 z-10"></div> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 overflow-hidden">
          <div
            className="
            container
            mx-auto
            pt-18
            pb-8
            text-center
            min-h-[400px]
            flex
            items-center
            justify-center
          "
          >
            <div className="flex flex-wrap text-center w-full">
              <div
                className="
                w-full
                xl:w-9/12
                lg:w-9/12
                xxl:w-7/12
                px-[15px]
                mx-auto
              "
              >
                {/* Content goes here */}
                <h1 className="text-white text-4xl font-bold">
                  Welcome to Leap PM
                </h1>

                <p className="text-white/80 mt-4">
                  Professional Project Management Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-white">
        <div className="container mx-auto px-container">
          {/* TOP SECTION */}
          <div className="mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* IMAGE */}
              <div className="space-y-4">
                <img
                  src="https://leap-pm.com/front/assets/img/About Us.webp"
                  alt="About Us"
                  className="
                  w-full
                  h-full
                  object-cover
                  rounded-card
                  shadow-card
                "
                />
              </div>

              {/* TEXT */}
              <div className="space-y-4">
                <h2 className="text-title font-bold text-black leading-tight">
                  About Us
                </h2>

                <p className="text-muted text-body leading-relaxed">
                  LEAP is a dynamic and multidisciplinary project management
                  firm dedicated to delivering excellence in project management
                  services, training, and development programs.
                </p>
              </div>
            </div>
          </div>

          {/* CARDS */}
          <AboutCard />
        </div>
      </section>
    </>
  );
};
export default About;
