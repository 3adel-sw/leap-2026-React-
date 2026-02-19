import AboutImg from "@/assets/AboutUs.webp";

function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-center lg:gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src={AboutImg}
              alt="About us"
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-5 text-slate-800">
              <h2 className="text-3xl font-bold uppercase leading-tight sm:text-4xl">
                About Us
              </h2>
              <p className="text-base leading-7 text-slate-700 sm:text-lg">
                LEAP is a dynamic and multidisciplinary project management firm
                dedicated to delivering excellence in project management
                services, as well as training and development programs in the
                project management field. Our expertise lies in applying
                industry-best project management techniques and methodologies to
                ensure efficiency and success in every project we undertake. At
                LEAP, we go beyond conventional project management by
                integrating practical learning experiences into our training
                programs. We empower professionals by equipping them with the
                essential skills, knowledge, and tools required for career
                growth in the project management industry.
              </p>
              <a
                href="#"
                className="inline-flex w-fit items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105"
              >
                Read more about LEAP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
