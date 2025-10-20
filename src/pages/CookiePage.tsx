const CookiePage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Polityka Cookies</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas przeglądania 
            stron internetowych. Zawierają informacje dotyczące korzystania ze strony i pozwalają na zapamiętanie 
            określonych ustawień lub preferencji.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Jakie cookies używamy?</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1. Cookies niezbędne</h3>
          <p>
            Te pliki cookies są konieczne do prawidłowego funkcjonowania strony. Umożliwiają podstawowe funkcje, 
            takie jak nawigacja po stronie czy dostęp do zabezpieczonych obszarów. Strona nie może prawidłowo 
            funkcjonować bez tych plików cookies.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>cookieConsent</strong> - przechowuje informacje o preferencjach dotyczących cookies</li>
            <li><strong>sessionID</strong> - identyfikuje sesję użytkownika</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.2. Cookies analityczne</h3>
          <p>
            Te pliki cookies pozwalają nam analizować sposób korzystania ze strony przez użytkowników. 
            Zbierają informacje o odwiedzanych podstronach, czasie spędzonym na stronie i ewentualnych błędach. 
            Wszystkie dane są anonimowe.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>_ga</strong> - Google Analytics - rejestruje unikalny identyfikator</li>
            <li><strong>_gid</strong> - Google Analytics - rejestruje unikalny identyfikator</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.3. Cookies marketingowe</h3>
          <p>
            Te pliki cookies śledzą aktywność użytkowników w internecie w celu wyświetlania dopasowanych reklam. 
            Mogą być wykorzystywane przez partnerów reklamowych do budowania profilu zainteresowań użytkownika.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>_fbp</strong> - Facebook Pixel - śledzi konwersje z reklam Facebook</li>
            <li><strong>IDE</strong> - Google Ads - wyświetlanie dopasowanych reklam</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Zarządzanie cookies</h2>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies za pomocą ustawień przeglądarki. 
            Możliwe jest:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Całkowite zablokowanie plików cookies</li>
            <li>Otrzymywanie powiadomień o każdym pliku cookie</li>
            <li>Usunięcie zapisanych plików cookies</li>
          </ul>
          <p>
            Należy pamiętać, że zablokowanie plików cookies może wpłynąć na funkcjonalność strony.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Jak wyłączyć cookies w przeglądarce?</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Google Chrome</h3>
          <p>Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie i inne dane witryn</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Mozilla Firefox</h3>
          <p>Ustawienia → Prywatność i bezpieczeństwo → Ciasteczka i dane stron</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Safari</h3>
          <p>Preferencje → Prywatność → Zarządzaj danymi witryn</p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Microsoft Edge</h3>
          <p>Ustawienia → Pliki cookie i uprawnienia witryn → Zarządzaj plikami cookie i danymi witryn</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Zgodność z TCF v2.2</h2>
          <p>
            Nasza implementacja plików cookies jest zgodna z Transparency & Consent Framework (TCF) w wersji 2.2, 
            opracowanym przez IAB Europe. Oznacza to, że:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Zbieramy wyraźną zgodę użytkownika przed wykorzystaniem cookies marketingowych i analitycznych</li>
            <li>Użytkownik ma pełną kontrolę nad swoimi preferencjami</li>
            <li>Przechowujemy szczegółowe informacje o udzielonej zgodzie (TC String)</li>
            <li>Użytkownik może w każdej chwili zmienić swoje preferencje</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Okres przechowywania</h2>
          <p>
            Różne rodzaje cookies są przechowywane przez różne okresy:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies sesyjne</strong> - usuwane po zamknięciu przeglądarki</li>
            <li><strong>Cookies trwałe</strong> - pozostają do 24 miesięcy lub do momentu ręcznego usunięcia</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Kontakt</h2>
          <p>
            W razie pytań dotyczących Polityki Cookies, prosimy o kontakt poprzez formularz dostępny na stronie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePage;
