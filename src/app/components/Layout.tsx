import { Outlet, Link, useLocation } from "react-router";
import { Scale, Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Especialidades", path: "/especialidades" },
    { name: "Processos (Admin. Judicial)", path: "/processos" },
    { name: "Contato", path: "/contato" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1128] text-[#fdfbf7] font-['Inter',sans-serif] flex flex-col selection:bg-[#d4af37] selection:text-[#0a1128]">
      {/* Header */}
      <header className="border-b border-[#fdfbf7]/10 bg-[#0a1128]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-2 border border-[#fdfbf7]/20 rounded-full group-hover:border-[#d4af37]/50 transition-colors">
                <Scale className="w-6 h-6 text-[#d4af37]" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-['Playfair_Display',serif] text-xl tracking-wide font-semibold">
                  Amanda Silvestre
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#fdfbf7]/60 uppercase mt-0.5">
                  Perícia e Administração Judicial
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm tracking-wide transition-colors hover:text-[#d4af37] ${
                    location.pathname === link.path
                      ? "text-[#d4af37] font-medium"
                      : "text-[#fdfbf7]/80"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-[#fdfbf7]/80 hover:text-[#d4af37] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#fdfbf7]/10 bg-[#0a1128]">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "bg-[#fdfbf7]/5 text-[#d4af37]"
                      : "text-[#fdfbf7]/80 hover:bg-[#fdfbf7]/5 hover:text-[#d4af37]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-[#fdfbf7]/10 bg-[#060a17] py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-5 h-5 text-[#d4af37]" strokeWidth={1.5} />
              <span className="font-['Playfair_Display',serif] text-lg tracking-wide">
                Amanda Silvestre do Nascimento
              </span>
            </div>
            <p className="text-[#fdfbf7]/60 text-sm leading-relaxed max-w-sm">
              Perícia Judicial e Extrajudicial | Administração Judicial | Perícia Grafotécnica | Documentoscopia | Consultoria
            </p>
          </div>
          
          <div>
            <h4 className="font-['Playfair_Display',serif] text-[#d4af37] mb-6 tracking-wider uppercase text-sm">Contatos</h4>
            <div className="space-y-4 text-sm text-[#fdfbf7]/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(62) 99573-0027</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <span>(62) 99545-9262</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>amandagbry@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-['Playfair_Display',serif] text-[#d4af37] mb-6 tracking-wider uppercase text-sm">Endereço</h4>
            <div className="space-y-4 text-sm text-[#fdfbf7]/70">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>
                  Rua 6, 448<br />
                  Guarujá Park, Trindade - GO<br />
                  CEP: 75392-867
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-[#fdfbf7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#fdfbf7]/40">
          <p>&copy; {new Date().getFullYear()} Amanda Silvestre do Nascimento. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
