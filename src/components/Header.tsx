import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/o-nas' },
    { name: 'Usługi', href: '/sluzby' },
    { name: 'Kontakt', href: '/kontakt' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="border-b border-border/50">
        <div className="container">
          <div className="flex items-center justify-end py-2 text-sm text-muted-foreground">
            <span>Godziny pracy: Pon-Pt 9:00-18:00</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-primary-foreground">NS</span>
            </div>
            <span className="text-xl font-bold gradient-text">NazvaSSM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors glow-line"
              >
                {item.name}
              </Link>
            ))}
            <a href="#contactForm" className="btn-primary">
              Rozpocznij teraz
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="#contactForm"
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rozpocznij teraz
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
