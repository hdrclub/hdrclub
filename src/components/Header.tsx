import { Link, useLocation } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@/assets/hdrclub-logo.png";

const protocolos = [
  { to: "/protocolos/ascenda" as const, label: "Ascenda" },
  { to: "/protocolos/ascensao-feminina" as const, label: "Ascensão Feminina" },
  { to: "/protocolos/hdr28" as const, label: "HDR28" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-navy-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <img src={logoImg} alt="HDR Club" className="h-14 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-navy-foreground hover:text-golden transition-colors">Início</Link>
            <Link to="/sobre" className="text-sm font-medium text-navy-foreground hover:text-golden transition-colors">Sobre</Link>
            
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-navy-foreground hover:text-golden transition-colors"
              >
                Protocolos <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-navy border border-navy-foreground/10 rounded-xl shadow-xl py-2">
                  {protocolos.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-2 text-sm text-navy-foreground hover:bg-navy-foreground/5 hover:text-golden transition-colors"
                    >
                      {p.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contato" className="text-sm font-medium text-navy-foreground hover:text-golden transition-colors">Contato</Link>
          </nav>

          <button className="md:hidden text-navy-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-navy border-t border-navy-foreground/10 p-4 space-y-4">
          <Link to="/" className="block text-navy-foreground py-2">Início</Link>
          <Link to="/sobre" className="block text-navy-foreground py-2">Sobre</Link>
          <div className="space-y-2">
            <p className="text-golden text-xs font-semibold uppercase tracking-widest">Protocolos</p>
            {protocolos.map((p) => (
              <Link key={p.to} to={p.to} className="block text-navy-foreground py-1 pl-4">{p.label}</Link>
            ))}
          </div>
          <Link to="/contato" className="block text-navy-foreground py-2">Contato</Link>
        </div>
      )}
    </header>
  );
}
