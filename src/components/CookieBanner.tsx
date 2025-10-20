import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      tcString: generateTCString({ necessary: true, analytics: true, marketing: true })
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      tcString: generateTCString({ necessary: true, analytics: false, marketing: false })
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
      tcString: generateTCString(preferences)
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const generateTCString = (prefs: typeof preferences) => {
    // Simplified TCF v2.2 string generation
    const purposeConsents = {
      1: prefs.necessary,
      2: prefs.analytics,
      3: prefs.marketing
    };
    return btoa(JSON.stringify({ version: 2, purposeConsents, vendorConsents: {} }));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg animate-fade-up">
      <div className="container py-6">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Ta strona używa plików cookie</h3>
              <p className="text-sm text-muted-foreground">
                Używamy plików cookie, aby poprawić Twoje doświadczenia na naszej stronie. 
                Niektóre z nich są niezbędne, podczas gdy inne pomagają nam analizować ruch i wyświetlać spersonalizowane treści.{' '}
                <Link to="/polityka-prywatnosci" className="text-primary hover:underline">
                  Polityka prywatności
                </Link>
                {' '}&bull;{' '}
                <Link to="/polityka-cookies" className="text-primary hover:underline">
                  Polityka cookies
                </Link>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowPreferences(true)}
                className="btn-secondary text-sm px-4 py-2"
              >
                Preferencje
              </button>
              <button
                onClick={handleRejectAll}
                className="btn-secondary text-sm px-4 py-2"
              >
                Odrzuć
              </button>
              <button
                onClick={handleAcceptAll}
                className="btn-primary text-sm px-4 py-2"
              >
                Akceptuj wszystkie
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-fade-in">
            <h3 className="font-semibold mb-4">Preferencje dotyczące plików cookie</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Niezbędne</h4>
                  <p className="text-sm text-muted-foreground">
                    Te pliki cookie są wymagane do prawidłowego funkcjonowania strony i nie mogą być wyłączone.
                  </p>
                </div>
                <div className="ml-4">
                  <input type="checkbox" checked disabled className="w-4 h-4" />
                </div>
              </div>

              <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Analityczne</h4>
                  <p className="text-sm text-muted-foreground">
                    Pomagają nam zrozumieć, jak odwiedzający korzystają z naszej strony internetowej.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-4 h-4"
                  />
                </div>
              </div>

              <div className="flex items-start justify-between p-4 bg-muted/30 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium mb-1">Marketingowe</h4>
                  <p className="text-sm text-muted-foreground">
                    Służą do wyświetlania spersonalizowanych reklam na podstawie Twoich zainteresowań.
                  </p>
                </div>
                <div className="ml-4">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                    className="w-4 h-4"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={() => setShowPreferences(false)}
                className="btn-secondary text-sm px-4 py-2"
              >
                Wstecz
              </button>
              <button
                onClick={handleSavePreferences}
                className="btn-primary text-sm px-4 py-2"
              >
                Zapisz preferencje
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
