import { useState } from "react";
import PageLayout from "@/components/ui/PageLayout";
import Banner from "@/assets/img-5.png";

const Privacy = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <PageLayout
      imageSrc={Banner}
      alt="Privacy Policy"
      headerContent={
        <div className="max-w-3xl space-y-4 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            Privacy Policy
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
            How we collect, use, and protect your information
          </h1>
          <p className="text-sm text-white/80">Home → Privacy Policy</p>
        </div>
      }
    >
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-600">
            Last Updated: February 15, 2026
          </p>
        </div>

        {showAlert ? (
          <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sky-900 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services. By using our services, you consent to the data
                practices described in this policy.
              </p>
              <button
                type="button"
                onClick={() => setShowAlert(false)}
                className="rounded-lg border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700 hover:bg-sky-100"
                aria-label="Close alert"
              >
                Close
              </button>
            </div>
          </div>
        ) : null}

        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800">
            Table of Contents
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600">
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#introduction"
              >
                Introduction
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#information-we-collect"
              >
                Information We Collect
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#how-we-use"
              >
                How We Use Your Information
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#sharing"
              >
                Information Sharing and Disclosure
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#security"
              >
                Data Security
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#cookies"
              >
                Cookies and Tracking Technologies
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#rights"
              >
                Your Privacy Rights
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#retention"
              >
                Data Retention and Deletion
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#transfers"
              >
                International Data Transfers
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#third-party"
              >
                Third-Party Links
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#children"
              >
                Children's Privacy
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#changes"
              >
                Changes to This Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-xl font-semibold hover:text-sky-600"
                href="#contact-us"
              >
                Contact Us
              </a>
            </li>
          </ol>
        </div>
        <div className="mt-10 space-y-10  text-slate-700 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <section id="introduction">
            <h3 className="text-3xl font-bold text-slate-800">
              1. Introduction
            </h3>
            <p className="mt-3">
              At LEAP PM, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
            <p className="mt-3">
              By using our website or services, you consent to the data
              practices described in this policy. We comply with applicable data
              protection laws, including the General Data Protection Regulation
              (GDPR) for EU residents.
            </p>
          </section>

          <section id="information-we-collect">
            <h3 className="text-3xl font-bold text-slate-800">
              2. Information We Collect
            </h3>
            <h4 className="mt-4 font-semibold text-slate-800">
              Personal Information
            </h4>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Name and contact information (email address, phone number,
                mailing address)
              </li>
              <li>Company information and job title</li>
              <li>Account credentials (username, password)</li>
              <li>Project requirements and service preferences</li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
              <li>Communication preferences and feedback</li>
            </ul>
            <h4 className="mt-6 font-semibold text-slate-800">
              Automatically Collected Information
            </h4>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>IP address and browser information</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website and search terms</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section id="how-we-use">
            <h3 className="text-3xl font-bold text-slate-800">
              3. How We Use Your Information
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Providing and maintaining our services</li>
              <li>Processing service requests and communications</li>
              <li>Sending administrative information and updates</li>
              <li>Responding to customer service requests</li>
              <li>Improving our website and services</li>
              <li>Personalizing your experience</li>
              <li>Conducting analytics and research</li>
              <li>Complying with legal obligations</li>
              <li>Protecting against fraud and security threats</li>
              <li>Sending marketing communications (with your consent)</li>
            </ul>
          </section>

          <section id="sharing">
            <h3 className="text-3xl font-bold text-slate-800">
              4. Information Sharing and Disclosure
            </h3>
            <p className="mt-3">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except in the
              following circumstances:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Service Providers: Trusted third parties who assist us in
                operating our website and business
              </li>
              <li>
                Legal Requirements: When required by law or to protect rights,
                property, or safety
              </li>
              <li>
                Business Transfers: In the event of a merger, acquisition, or
                sale of assets
              </li>
              <li>Consent: With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section id="security">
            <h3 className="text-3xl font-bold text-slate-800">
              5. Data Security
            </h3>
            <p className="mt-3">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Employee training on data protection</li>
              <li>Secure hosting and infrastructure</li>
              <li>Regular backup and disaster recovery procedures</li>
            </ul>
            <p className="mt-3">
              However, no method of transmission over the internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section id="cookies">
            <h3 className="text-3xl font-bold text-slate-800">
              6. Cookies and Tracking Technologies
            </h3>
            <p className="mt-3">
              We use cookies and similar tracking technologies to enhance your
              browsing experience and analyze website usage. Types of cookies we
              use include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Essential Cookies: Required for basic website functionality
              </li>
              <li>
                Analytics Cookies: Help us understand how visitors use our
                website
              </li>
              <li>
                Functional Cookies: Remember your preferences and settings
              </li>
              <li>
                Marketing Cookies: Used to deliver relevant advertisements
              </li>
            </ul>
            <p className="mt-3">
              You can control cookie settings through your browser preferences.
              However, disabling certain cookies may affect website
              functionality. For more information, visit allaboutcookies.org.
            </p>
          </section>

          <section id="rights">
            <h3 className="text-3xl font-bold text-slate-800">
              7. Your Privacy Rights
            </h3>
            <p className="mt-3">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Access: Request access to your personal information</li>
              <li>Correction: Request correction of inaccurate information</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>
                Portability: Request transfer of your data to another service
              </li>
              <li>
                Objection: Object to certain processing of your information
              </li>
              <li>Restriction: Request restriction of processing</li>
              <li>Withdraw Consent: Withdraw consent for data processing</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the information
              provided below. We will respond to your request within one month.
            </p>
          </section>

          <section id="retention">
            <h3 className="text-3xl font-bold text-slate-800">
              8. Data Retention and Deletion
            </h3>
            <p className="mt-3">
              We retain your personal data only as long as necessary for the
              purposes for which it was collected or as required by law. Our
              retention periods vary based on the type of data and our business
              needs.
            </p>
            <p className="mt-3">
              When data is no longer needed, we securely delete or anonymize it.
              We maintain detailed data retention policies and regularly review
              our data holdings to ensure compliance.
            </p>
          </section>

          <section id="transfers">
            <h3 className="text-3xl font-bold text-slate-800">
              9. International Data Transfers
            </h3>
            <p className="mt-3">
              If we transfer your personal data outside your country of
              residence, we ensure appropriate safeguards are in place, such as
              Standard Contractual Clauses or adequacy decisions by relevant
              authorities.
            </p>
            <p className="mt-3">
              We only transfer data to countries or organizations that provide
              adequate protection for your personal information.
            </p>
          </section>

          <section id="third-party">
            <h3 className="text-3xl font-bold text-slate-800">
              10. Third-Party Links
            </h3>
            <p className="mt-3">
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices or content of
              these external sites. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
          </section>

          <section id="children">
            <h3 className="text-3xl font-bold text-slate-800">
              11. Children's Privacy
            </h3>
            <p className="mt-3">
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected personal information
              from a child under 13, we will take steps to delete such
              information.
            </p>
            <p className="mt-3">
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us
              immediately.
            </p>
          </section>

          <section id="changes">
            <h3 className="text-3xl font-bold text-slate-800">
              12. Changes to This Privacy Policy
            </h3>
            <p className="mt-3">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will notify you of any material changes by
              posting the new Privacy Policy on this page and updating the "Last
              Updated" date.
            </p>
            <p className="mt-3">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we protect your information.
            </p>
          </section>
        </div>
        <div
          id="contact-us"
          className="rounded-2xl border border-slate-200 bg-sky-50 mt-10 p-8 text-center shadow-sm"
        >
          <h3 className="text-3xl font-bold text-slate-800">13. Contact Us</h3>
          <p className="mt-4 text-slate-600">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>
          <p className="mt-4 text-slate-700">Email: info@leap-pm.com</p>
          <p className="text-slate-700">Phone: +966532407726</p>
          <p className="text-slate-700">Address: Riyadh, Saudi Arabia</p>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacy;
