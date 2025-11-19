import { siteConfig } from "@/config/site";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">Contact</h1>

          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <p className="font-medium text-gray-900 mb-1">Email</p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-gray-900 hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">Address</p>
                  <p className="whitespace-pre-line">{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light text-gray-900 mb-6">Opportunities</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  We are always looking for motivated students and collaborators interested in our research areas.
                </p>
                <p className="leading-relaxed">
                  Please reach out via email with your CV and research interests.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-light text-gray-900 mb-6">For Prospective Students</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="leading-relaxed mb-4">
                <strong className="text-gray-900">PhD Students:</strong> If you're interested in pursuing doctoral research,
                please apply through the university's graduate admissions process and mention your interest in our lab.
              </p>
              <p className="leading-relaxed">
                <strong className="text-gray-900">Undergraduate & Master's Students:</strong> Current students interested
                in research opportunities should email with a brief introduction and CV.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
