import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Research", path: "/research" },
    { name: "People", path: "/people" },
    { name: "Publications", path: "/publications" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between h-16">
          {/* Lab Name */}
          <Link to="/" className="text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors">
            {siteConfig.labName}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu - Simple Dropdown */}
          <div className="md:hidden">
            <select
              className="text-sm border-none bg-transparent text-gray-900 font-medium"
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
            >
              {links.map((link) => (
                <option key={link.path} value={link.path}>
                  {link.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
