const PrivacyPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Polityka Prywatności</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników 
            strony internetowej NazvaSSM. Administratorem danych osobowych jest NazvaSSM.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Zakres zbieranych danych</h2>
          <p>
            W ramach świadczonych usług zbieramy następujące dane osobowe:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Dane dotyczące korzystania ze strony (pliki cookies, adres IP)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cel przetwarzania danych</h2>
          <p>Dane osobowe przetwarzane są w następujących celach:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Udzielanie odpowiedzi na zapytania przesłane przez formularz kontaktowy</li>
            <li>Świadczenie usług marketingowych</li>
            <li>Analizowanie ruchu na stronie i optymalizacja jej funkcjonowania</li>
            <li>Wypełnienie obowiązków prawnych ciążących na Administratorze</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Podstawa prawna przetwarzania</h2>
          <p>
            Dane osobowe przetwarzane są na podstawie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Zgody użytkownika (art. 6 ust. 1 lit. a RODO)</li>
            <li>Uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO)</li>
            <li>Niezbędności do wykonania umowy (art. 6 ust. 1 lit. b RODO)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Udostępnianie danych</h2>
          <p>
            Dane osobowe mogą być udostępniane:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Podmiotom przetwarzającym dane na zlecenie Administratora (np. dostawcy usług IT, hostingu)</li>
            <li>Organom uprawnionym do otrzymania danych na podstawie przepisów prawa</li>
          </ul>
          <p>
            Administrator nie przekazuje danych osobowych do państw trzecich ani organizacji międzynarodowych.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
            a po tym czasie przez okres wymagany przez przepisy prawa lub do momentu cofnięcia zgody.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Prawa użytkownika</h2>
          <p>
            Użytkownik ma prawo do:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>Cofnięcia zgody w dowolnym momencie</li>
            <li>Wniesienia skargi do organu nadzorczego (PUODO)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Pliki cookies</h2>
          <p>
            Strona wykorzystuje pliki cookies do zapewnienia prawidłowego funkcjonowania oraz analizy ruchu. 
            Szczegółowe informacje znajdują się w{' '}
            <a href="/#/polityka-cookies" className="text-primary hover:underline">Polityce Cookies</a>.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Bezpieczeństwo danych</h2>
          <p>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające ochronę danych osobowych 
            przed nieuprawnionym dostępem, utratą, zniszczeniem lub modyfikacją.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Zmiany w Polityce Prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. 
            O wszelkich zmianach użytkownicy będą informowani poprzez publikację zaktualizowanej wersji na stronie.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Kontakt</h2>
          <p>
            W sprawach dotyczących ochrony danych osobowych można kontaktować się poprzez formularz kontaktowy 
            dostępny na stronie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
