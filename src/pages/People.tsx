import { useMarkdownContent } from "@/hooks/useMarkdownContent";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { siteConfig } from "@/config/site";

const People = () => {
  const { items: phdStudents, loading } = useMarkdownContent('students/phd');
  const { items: piData, loading: piLoading } = useMarkdownContent('pi');

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">People</h1>

          {/* Principal Investigator */}
          <section className="mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8">Principal Investigator</h2>
            <div className="border-l-2 border-gray-200 pl-8">
              <h3 className="text-xl font-medium text-gray-900 mb-2">{siteConfig.pi.name}</h3>
              <p className="text-gray-600 mb-1">{siteConfig.pi.title}</p>
              <p className="text-gray-600 mb-1">{siteConfig.pi.department}</p>
              <p className="text-gray-600 mb-4">{siteConfig.pi.university}</p>
              <a
                href={`mailto:${siteConfig.pi.email}`}
                className="text-gray-900 hover:underline"
              >
                {siteConfig.pi.email}
              </a>
              {piData.length > 0 && (
                <div className="mt-6 prose prose-gray max-w-none">
                  <MarkdownRenderer content={piData[0].content} />
                </div>
              )}
            </div>
          </section>

          {/* PhD Students */}
          <section className="mb-20">
            <h2 className="text-2xl font-light text-gray-900 mb-8">PhD Students</h2>
            {loading ? (
              <p className="text-gray-600">Loading...</p>
            ) : phdStudents.length > 0 ? (
              <div className="space-y-8">
                {phdStudents.map((student) => (
                  <div key={student.slug} className="border-l-2 border-gray-200 pl-8">
                    <div className="flex gap-6 items-start">
                      {student.metadata.photo && (
                        <img
                          src={student.metadata.photo}
                          alt={student.metadata.name}
                          className="w-24 h-24 rounded object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">
                          {student.metadata.name}
                        </h3>
                        <p className="text-gray-600 mb-3">{student.metadata.research}</p>
                        {student.metadata.email && (
                          <a
                            href={`mailto:${student.metadata.email}`}
                            className="text-gray-900 hover:underline text-sm"
                          >
                            {student.metadata.email}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-600">
                <p>
                  Add student profiles to the <code className="bg-gray-100 px-2 py-1 rounded">content/students/phd/</code> folder.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default People;
