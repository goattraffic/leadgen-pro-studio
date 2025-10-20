import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">NS</span>
              </div>
              <span className="text-xl font-bold gradient-text">NazvaSSM</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Profesjonalna agencja lead generation dla lokalnych biznesów.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Nawigacja</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Strona główna
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="text-muted-foreground hover:text-primary transition-colors">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/sluzby" className="text-muted-foreground hover:text-primary transition-colors">
                  Usługi
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-muted-foreground hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Usługi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sluzby/google-ads-kampanie-lokalne" className="text-muted-foreground hover:text-primary transition-colors">
                  Google Ads
                </Link>
              </li>
              <li>
                <Link to="/sluzby/facebook-instagram-ads" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Ads
                </Link>
              </li>
              <li>
                <Link to="/sluzby/seo-lokalne" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO Lokalne
                </Link>
              </li>
              <li>
                <Link to="/sluzby/landing-pages" className="text-muted-foreground hover:text-primary transition-colors">
                  Landing Pages
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Hours */}
          <div>
            <h3 className="font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li>
                <Link to="/polityka-prywatnosci" className="text-muted-foreground hover:text-primary transition-colors">
                  Polityka prywatności
                </Link>
              </li>
              <li>
                <Link to="/polityka-cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Polityka cookies
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-muted-foreground hover:text-primary transition-colors">
                  Regulamin
                </Link>
              </li>
              <li>
                <Link to="/zwroty" className="text-muted-foreground hover:text-primary transition-colors">
                  Polityka zwrotów
                </Link>
              </li>
            </ul>
            <div className="text-sm text-muted-foreground">
              <p className="font-semibold mb-1">Godziny pracy:</p>
              <p>Poniedziałek - Piątek</p>
              <p>9:00 - 18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} NazvaSSM. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
