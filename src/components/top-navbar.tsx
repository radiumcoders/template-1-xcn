import { Link } from "@tanstack/react-router";

const navLinks = [
  { label: "Home", hash: "home" },
  { label: "Pricing", hash: "pricing" },
  { label: "About", hash: "about" },
  { label: "Features", hash: "features" },
];

export function TopNavbar() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 flex justify-center px-6 py-5 sm:px-8 sm:py-6">
      <div
        className="flex items-center gap-2"
      >
        {navLinks.map((link) => (
          <Link
            key={link.hash}
            to="/"
            hash={link.hash}
            className="relative rounded-full px-4 py-2 text-sm font-medium"
          >
            <span className="relative z-10">{link.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
