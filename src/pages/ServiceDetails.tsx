import { useRoute } from "wouter";
import PageLayout from "@/components/ui/PageLayout";
import { SERVICES_DATA } from "@/components/ServiceSection";
import ServiceImage from "@/assets/OurServices.webp";
import ContactSection from "@/components/ContactSection";

const ServiceDetails = () => {
  const [match, params] = useRoute("/services/:id");

  if (!match) return null;

  const serviceId = Number(params?.id);
  const service = SERVICES_DATA.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <PageLayout imageSrc={ServiceImage} alt="Service not found">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800">
            Service Not Found
          </h1>
          <p className="mt-4 text-slate-500">
            Please choose a service from the list.
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout imageSrc={ServiceImage} alt={service.title}>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-4xl font-extrabold text-slate-800">
          {service.title}
        </h1>
        <p className="mt-6 text-lg text-slate-600">{service.description}</p>
        <div className="mt-8 rounded-2xl border border-slate-200 border-t-4 border-b-4 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">What we deliver</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            <li>Standardization of planning and scheduling tasks</li>
            <li>Development of baseline and revised schedules</li>
            <li>Progress updates based on actual project performance</li>
            <li>Productivity analysis and resource optimization</li>
            <li>Continuous performance monitoring and follow-up</li>
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-800">24/7</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Monitoring
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-800">+30%</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Efficiency
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
              <p className="text-2xl font-extrabold text-slate-800">100%</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Baseline Control
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactSection />
    </PageLayout>
  );
};

export default ServiceDetails;
