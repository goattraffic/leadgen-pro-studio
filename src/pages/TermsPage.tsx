const TermsPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8">Regulamin</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p><strong>Data ostatniej aktualizacji:</strong> {new Date().toLocaleDateString('pl-PL')}</p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§1. Postanowienia ogólne</h2>
          <p>
            1. Niniejszy Regulamin określa zasady korzystania ze strony internetowej NazvaSSM oraz świadczenia 
            usług marketingowych przez NazvaSSM.
          </p>
          <p>
            2. Usługodawcą jest NazvaSSM, zwany dalej "Usługodawcą" lub "Agencją".
          </p>
          <p>
            3. Klientem jest osoba fizyczna, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości 
            prawnej, korzystająca z usług Agencji.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§2. Zakres usług</h2>
          <p>
            1. Agencja świadczy następujące usługi marketingowe:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Kampanie Google Ads</li>
            <li>Kampanie Facebook & Instagram Ads</li>
            <li>Usługi SEO lokalne</li>
            <li>Tworzenie landing pages</li>
            <li>Marketing automation</li>
            <li>Zarządzanie reputacją online</li>
          </ul>
          <p>
            2. Szczegółowy zakres każdej usługi określany jest w indywidualnej ofercie przygotowanej dla Klienta.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§3. Zawarcie umowy</h2>
          <p>
            1. Umowa o świadczenie usług zawierana jest poprzez:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Akceptację oferty przesłanej przez Agencję</li>
            <li>Podpisanie umowy w formie pisemnej lub elektronicznej</li>
          </ul>
          <p>
            2. Wypełnienie formularza kontaktowego na stronie nie stanowi zawarcia umowy, lecz jest jedynie zapytaniem ofertowym.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§4. Ceny i płatności</h2>
          <p>
            1. Ceny usług określane są indywidualnie w ofercie dla każdego Klienta.
          </p>
          <p>
            2. Wszystkie ceny podane na stronie mają charakter orientacyjny i nie stanowią oferty handlowej w rozumieniu Kodeksu Cywilnego.
          </p>
          <p>
            3. Płatności za usługi dokonywane są z góry, na podstawie wystawionej faktury, chyba że umowa stanowi inaczej.
          </p>
          <p>
            4. Termin płatności wynosi 7 dni od daty wystawienia faktury, chyba że umowa stanowi inaczej.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§5. Obowiązki stron</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Obowiązki Agencji:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Świadczenie usług z należytą starannością zgodnie z aktualnymi standardami branżowymi</li>
            <li>Terminowe wykonanie uzgodnionych działań</li>
            <li>Regularne raportowanie wyników kampanii</li>
            <li>Zachowanie poufności danych Klienta</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Obowiązki Klienta:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Terminowe dokonywanie płatności</li>
            <li>Dostarczenie niezbędnych materiałów i informacji do realizacji usług</li>
            <li>Współpraca w procesie realizacji kampanii</li>
            <li>Zapewnienie dostępu do niezbędnych narzędzi i kont reklamowych</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§6. Czas trwania umowy i wypowiedzenie</h2>
          <p>
            1. Umowa zawierana jest na czas określony wskazany w ofercie lub umowie.
          </p>
          <p>
            2. Każda ze stron może wypowiedzieć umowę z zachowaniem 30-dniowego okresu wypowiedzenia, chyba że umowa stanowi inaczej.
          </p>
          <p>
            3. Agencja zastrzega sobie prawo do natychmiastowego rozwiązania umowy w przypadku:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opóźnienia Klienta w płatnościach przekraczającego 14 dni</li>
            <li>Naruszenia przez Klienta istotnych postanowień umowy</li>
            <li>Działań Klienta niezgodnych z prawem lub dobrymi obyczajami</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§7. Odpowiedzialność</h2>
          <p>
            1. Agencja nie ponosi odpowiedzialności za:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Decyzje platform reklamowych (Google, Meta) dotyczące zawieszenia lub odrzucenia reklam</li>
            <li>Brak rezultatów kampanii wynikający z czynników zewnętrznych (sezonowość, sytuacja rynkowa, działania konkurencji)</li>
            <li>Szkody wynikłe z nieprawidłowych lub niepełnych danych dostarczonych przez Klienta</li>
          </ul>
          <p>
            2. Odpowiedzialność Agencji ograniczona jest do wysokości wynagrodzenia za dany miesiąc świadczenia usług.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§8. Poufność</h2>
          <p>
            1. Strony zobowiązują się do zachowania w tajemnicy wszelkich informacji uzyskanych w trakcie współpracy.
          </p>
          <p>
            2. Obowiązek zachowania poufności nie dotyczy informacji powszechnie znanych lub uzyskanych legalnie z innych źródeł.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§9. Prawa autorskie</h2>
          <p>
            1. Wszelkie materiały wytworzone przez Agencję w ramach świadczonych usług (teksty reklamowe, grafiki, landing pages) 
            stanowią przedmiot praw autorskich Agencji.
          </p>
          <p>
            2. Klient nabywa licencję na korzystanie z materiałów wyłącznie w celach uzgodnionych w umowie.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§10. Reklamacje</h2>
          <p>
            1. Reklamacje dotyczące świadczonych usług należy zgłaszać niezwłocznie, nie później niż w terminie 7 dni od ujawnienia wady.
          </p>
          <p>
            2. Reklamacje rozpatrywane są w terminie do 14 dni roboczych od daty ich otrzymania.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">§11. Postanowienia końcowe</h2>
          <p>
            1. W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu Cywilnego.
          </p>
          <p>
            2. Agencja zastrzega sobie prawo do zmiany Regulaminu. O zmianach Klienci będą informowani z 14-dniowym wyprzedzeniem.
          </p>
          <p>
            3. Ewentualne spory będą rozstrzygane przez sąd właściwy dla siedziby Agencji.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
