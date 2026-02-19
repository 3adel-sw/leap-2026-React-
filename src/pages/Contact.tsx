import PageLayout from "@/components/ui/PageLayout";
import Banner from "@/assets/banner-2.png";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FormField from "@/components/ui/FormField";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  subject: string;
  message: string;
};

function ConatctPage() {
  const { register, handleSubmit, reset } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    Swal.fire({
      title: "Form Data",
      icon: "success",
      confirmButtonText: "OK",
      html: `<pre style="text-align:left;white-space:pre-wrap;margin:0;">${JSON.stringify(
        data,
        null,
        2,
      )}</pre>`,
    });
    reset();
  };

  return (
    <PageLayout imageSrc={Banner} alt="Contact Page Banner">
      <div className="mx-auto max-w-7xl px-3 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 md:text-4xl">
            Drop Us a Line
          </h1>
          <p className="mt-4 text-slate-500">
            Reach out to us from our contact form and we will get back to you
            shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2"
          noValidate
        >
          <FormField
            id="contact-name"
            label="Name"
            required
            placeholder="Name"
            fieldProps={register("name", { required: true })}
          />

          <FormField
            id="contact-email"
            label="Email"
            required
            type="email"
            placeholder="Email"
            fieldProps={register("email", { required: true })}
          />

          <FormField
            id="contact-phone"
            label="Phone"
            placeholder="Phone"
            fieldProps={register("phone")}
          />

          <FormField
            id="contact-inquiry"
            label="Inquiry Type"
            as="select"
            options={[
              { label: "Select Inquiry Type", value: "", disabled: true },
              { label: "General", value: "general" },
              { label: "Services", value: "services" },
              { label: "Partnership", value: "partnership" },
              { label: "Other", value: "other" },
            ]}
            fieldProps={register("inquiryType", { required: true })}
          />

          <div className="md:col-span-2">
            <FormField
              id="contact-subject"
              label="Subject"
              required
              placeholder="Subject"
              fieldProps={register("subject", { required: true })}
            />
          </div>

          <div className="md:col-span-2">
            <FormField
              id="contact-message"
              label="Message"
              required
              as="textarea"
              placeholder="Message"
              rows={6}
              fieldProps={register("message", { required: true })}
            />
          </div>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full max-w-xs rounded-xl border-2 border-sky-200 py-4 font-bold text-sky-600 transition-all duration-300 hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}

export default ConatctPage;
