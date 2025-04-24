// components/ui/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-500"
        >
          Code Celeste
        </Link>
        {/* Liens d’ancre */}
        <ul className="flex space-x-6">
          <li>
            <a href="#pricing" className="hover:text-blue-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-500">
              Testimonials
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
