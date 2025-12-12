import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0078D4] to-[#005A9E] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
            <Icon icon="lucide:alert-circle" className="w-4 h-4 text-red-400" />
            <span className="text-white/90 text-sm font-medium">404 Error</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold mb-6">
            Oops!
            <br />
            Page not found.
          </h1>

          <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-xl">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-white text-[#0078D4] text-sm font-semibold rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/20 transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Icon icon="lucide:home" className="w-4 h-4" />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white text-sm font-semibold rounded-lg hover:bg-white/10 hover:border-white transition-all flex items-center gap-2"
            >
              Contact Support
              <Icon
                icon="lucide:arrow-right"
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-sm font-semibold text-white/70 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/90 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-white/20 to-cyan-400/20 rounded-2xl blur-xl"></div>
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src="/hero-1.png"
                alt="404 Error"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0078D4]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
