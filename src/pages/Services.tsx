import PageLayout from "@/components/ui/PageLayout";

import SerivceImage from "@/assets/OurServices.webp";
import ServicesSection from "@/components/ServiceSection";

function SerivcePage() {
  return (
    <PageLayout imageSrc={SerivceImage} alt="Serive Image">
      <div className="text-center">
        <ServicesSection
          title="Our Services"
          description="Explore our comprehensive range of professional services"
        />
      </div>
    </PageLayout>
  );
}

export default SerivcePage;
