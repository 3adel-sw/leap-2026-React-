import PageLayout from "@/components/ui/PageLayout";
import Banner from "@/assets/banner-2.png";
import { Link } from "wouter";

const Jobs = () => {
  return (
    <PageLayout imageSrc={Banner} alt="Careers">
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl font-semibold tracking-[0.3em] text-gray-800">
            Careers
          </h1>
          <p className="text-xl leading-tight md:text-5xl text-gray-700">
            Discover exciting career opportunities and become part of our
            growing team.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-2xl font-extrabold text-slate-800">
            No Jobs Available
          </h2>
          <p className="mt-4 text-slate-500">
            We don't have any open positions at the moment, but please check
            back soon for new opportunities!
          </p>
          <Link
            href="/contact-us"
            className="mt-8 inline-flex items-center justify-center rounded-xl border-2 border-sky-200 px-8 py-3 font-bold text-sky-600 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default Jobs;
