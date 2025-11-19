import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import NewsSection from "@/components/NewsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Minimal */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 tracking-tight">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Research Highlights - Minimal Cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Research</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {siteConfig.highlights.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              to="/research"
              className="text-gray-900 font-medium hover:underline inline-flex items-center"
            >
              View all research areas →
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">About</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="leading-relaxed">
                  Add your lab's mission and overview here. This section should describe
                  your research philosophy, approach, and what makes your lab unique.
                </p>
                <p className="leading-relaxed mt-4">
                  Edit this text in src/pages/Home.tsx or add it to your config file.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-6">Principal Investigator</h2>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg font-medium text-gray-900">{siteConfig.pi.name}</p>
                <p>{siteConfig.pi.title}</p>
                <p>{siteConfig.pi.department}</p>
                <p>{siteConfig.pi.university}</p>
                <a
                  href={`mailto:${siteConfig.pi.email}`}
                  className="text-gray-900 hover:underline inline-block mt-2"
                >
                  {siteConfig.pi.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates - Dynamic */}
      <NewsSection />
    </div>
  );
};

export default Home;
