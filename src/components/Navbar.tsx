import type React from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "./constants";
import Logo from "./Logo";

export default function Navbar({
  activeSection,
  mobileOpen,
  setMobileOpen,
}: {
  activeSection: string;
  mobileOpen: boolean;
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between p-4 sm:p-5 md:justify-center">
        <div className="hidden items-center gap-1 rounded-full bg-black/65 pl-3 pr-2 py-2 shadow-2xl shadow-black/20 backdrop-blur-xl md:flex">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            className="mr-1 flex items-center"
            aria-label="Home"
          >
            <Logo />
          </button>

          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollTo(item.id)}
              className={[
                "rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300",
                activeSection === item.id ?
                  "bg-white text-gray-900"
                : "text-gray-300 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {item.label}
            </button>
          ))}

          {/* <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="ml-1 rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-gray-900 transition-transform hover:scale-[1.04] hover:bg-gray-100"
          >
            Connect
          </button> */}
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <button
            type="button"
            onClick={() => scrollTo("home")}
            aria-label="Home"
            className="rounded-full bg-black/65 p-2.5 shadow-lg backdrop-blur-xl"
          >
            <Logo />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="rounded-full bg-black/65 p-2.5 text-white shadow-lg backdrop-blur-xl"
          >
            {mobileOpen ?
              <X size={22} />
            : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={[
          "fixed left-0 right-0 top-0 z-[90] bg-white px-5 pb-6 pt-20 shadow-2xl transition-all duration-300 md:hidden",
          mobileOpen ?
            "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0",
        ].join(" ")}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => scrollTo(item.id)}
            className={[
              "block w-full border-b border-gray-100 py-3.5 text-left text-sm font-medium",
              activeSection === item.id ? "text-gray-950" : "text-gray-500",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}

        <button
          type="button"
          onClick={() => scrollTo("contact")}
          className="mt-5 w-full rounded-full bg-gray-950 py-3 text-sm font-semibold text-white"
        >
          Connect
        </button>
      </div>
    </>
  );
}
