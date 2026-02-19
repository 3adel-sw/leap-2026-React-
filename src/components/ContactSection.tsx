import { Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FormField from "./ui/FormField";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  subject: string;
  message: string;
};

const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
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

  const onInvalid = () => {
    const missingLabels: string[] = [];
    if (errors.name) missingLabels.push("Name");
    if (errors.email) missingLabels.push("Email");
    if (errors.subject) missingLabels.push("Subject");
    if (errors.message) missingLabels.push("Message");

    Swal.fire({
      title: "Required Fields",
      icon: "warning",
      confirmButtonText: "OK",
      text: missingLabels.length
        ? `Please fill: ${missingLabels.join(", ")}`
        : "Please fill all required fields.",
    });
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 bg-[var(--color-primary)]/10 rounded py-20 px-6 md:px-12 lg:px-24">
        {/* Left Side: Info */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-slate-100">
              <Mail className="text-[var(--color-secondary)]" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-700 leading-tight">
              If you like what you see, let's work together.
            </h2>
            <p className="text-slate-500 text-xl font-medium !leading-[1.65] xl:pe-14 lg:pe-14 mb-6">
              We bring rapid solutions to make the life of our clients easier.
              Have any questions? Reach out to us from this contact form and we
              will get back to you shortly.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Email Box */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                <Mail className="text-sky-500" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Email</p>
                <a
                  href="mailto:info@leap-pm.com"
                  className="text-sky-500 hover:underline"
                >
                  info@leap-pm.com
                </a>
              </div>
            </div>

            {/* Response Time Box */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <Clock className="text-green-500" size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">
                  Response Time
                </p>
                <p className="text-green-500 font-medium">24-48 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-transparent">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit(onSubmit, onInvalid)}
            noValidate
          >
            {/* Name */}
            <FormField
              id="contact-name"
              label="Name"
              required
              placeholder="Your full name"
              fieldProps={register("name", { required: true })}
            />

            {/* Email */}
            <FormField
              id="contact-email"
              label="Email"
              required
              type="email"
              placeholder="you@example.com"
              fieldProps={register("email", { required: true })}
            />

            {/* Phone */}
            <FormField
              id="contact-phone"
              label="Phone"
              placeholder="+1 (555) 123-4567"
              fieldProps={register("phone")}
            />

            {/* Company */}
            <FormField
              id="contact-company"
              label="Company"
              placeholder="Company or organization"
              fieldProps={register("company")}
            />

            {/* Inquiry Type - Full Width */}
            <div className="md:col-span-2">
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
                fieldProps={register("inquiryType")}
              />
            </div>

            {/* Subject - Full Width */}
            <div className="md:col-span-2">
              <FormField
                id="contact-subject"
                label="Subject"
                required
                placeholder="How can we help?"
                fieldProps={register("subject", { required: true })}
              />
            </div>

            {/* Message - Full Width */}
            <div className="md:col-span-2">
              <FormField
                id="contact-message"
                label="Message"
                required
                as="textarea"
                placeholder="Your Message"
                rows={5}
                fieldProps={register("message", { required: true })}
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 space-y-4">
              <button
                type="submit"
                className="w-fit py-3 px-6 rounded-xl border-2 border-sky-200 text-sky-500 font-bold hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all duration-300"
              >
                Send Message
              </button>
              <p className="text-xs text-slate-400 text-center md:text-left leading-relaxed">
                Your information is secured and will only be used to respond to
                your inquiry.
                <a href="#" className="text-sky-400 ml-1">
                  Privacy Policy
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
