import React, { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Briefcase, Users, FileText, Shield } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Startseite', path: '/' },
    { label: 'Stellenangebote', path: '/jobs' },
    { label: 'Für Arbeitgeber', path: '/arbeitgeber' },
    { label: 'Karriere-Ratgeber', path: '/ratgeber' },
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.location.hash = '/'}>
              <Zap className="h-8 w-8 text-brand-600 mr-2 fill-brand-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Volt<span className="text-brand-600">Karriere</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors duration-200 ${
                      isActive
                        ? 'border-brand-600 text-brand-600'
                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-500 hover:text-slate-700 focus:outline-none p-2"
                aria-label="Menü öffnen"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 absolute w-full shadow-lg">
            <div className="pt-2 pb-4 space-y-1 px-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block pl-3 pr-4 py-3 border-l-4 text-base font-medium ${
                      isActive
                        ? 'border-brand-600 text-brand-700 bg-brand-50'
                        : 'border-transparent text-slate-500 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-700'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <Zap className="h-6 w-6 text-brand-400 mr-2" />
              <span className="text-xl font-bold">VoltKarriere</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Ihr spezialisierter Partner für Karrierechancen in der Industrieelektrik, Automatisierung und Betriebstechnik. Wir verbinden Fachkompetenz mit Top-Unternehmen.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Für Bewerber</h3>
            <ul className="space-y-3">
              <li><NavLink to="/jobs" className="text-slate-400 hover:text-white transition-colors">Alle Jobs</NavLink></li>
              <li><NavLink to="/ratgeber" className="text-slate-400 hover:text-white transition-colors">Gehaltsvergleich</NavLink></li>
              <li><NavLink to="/ratgeber" className="text-slate-400 hover:text-white transition-colors">Bewerbungstipps</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Für Arbeitgeber</h3>
            <ul className="space-y-3">
              <li><NavLink to="/arbeitgeber" className="text-slate-400 hover:text-white transition-colors">Stelle schalten</NavLink></li>
              <li><NavLink to="/arbeitgeber" className="text-slate-400 hover:text-white transition-colors">Personalvermittlung</NavLink></li>
              <li><NavLink to="/arbeitgeber" className="text-slate-400 hover:text-white transition-colors">Preise</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-4">Rechtliches</h3>
            <ul className="space-y-3">
              <li><NavLink to="/impressum" className="text-slate-400 hover:text-white transition-colors flex items-center"><FileText className="h-4 w-4 mr-2"/> Impressum</NavLink></li>
              <li><NavLink to="/datenschutz" className="text-slate-400 hover:text-white transition-colors flex items-center"><Shield className="h-4 w-4 mr-2"/> Datenschutz</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Social Media Venture GmbH. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default Layout;