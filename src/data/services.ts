export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'google-ads-kampanie-lokalne',
    title: 'Google Ads - Kampanie Lokalne',
    short: 'Przyciągnij klientów z Twojej okolicy dzięki precyzyjnym kampaniom lokalnym',
    price: 'od 1500 PLN/mies',
    features: [
      'Targetowanie geograficzne',
      'Optymalizacja słów kluczowych lokalnych',
      'Reklamy w Google Maps',
      'Rozszerzenia lokalizacji',
      'Raportowanie i analityka'
    ],
    image: '/src/assets/service-google-ads.jpg',
    contentHtml: `
      <p>Kampanie Google Ads dla lokalnych biznesów to najszybsza droga do pozyskania nowych klientów w Twojej okolicy. Nasza strategia opiera się na precyzyjnym targetowaniu geograficznym oraz optymalizacji pod kątem lokalnych zapytań.</p>
      
      <h2>Jak działają lokalne kampanie Google Ads?</h2>
      <p>Tworzymy kampanie, które wyświetlają się wyłącznie użytkownikom w określonym promieniu od Twojej firmy. Dzięki temu każda złotówka wydana na reklamy trafia do potencjalnych klientów, którzy naprawdę mogą skorzystać z Twoich usług.</p>
      
      <h3>Proces wdrożenia:</h3>
      <ul>
        <li><strong>Analiza konkurencji lokalnej</strong> - sprawdzamy, kto reklamuje się w Twojej okolicy i jak możemy się wyróżnić</li>
        <li><strong>Dobór słów kluczowych</strong> - wybieramy frazy z dodaniem nazw miejscowości i dzielnic</li>
        <li><strong>Tworzenie przekonujących reklam</strong> - piszemy treści, które przyciągają uwagę i zachęcają do kontaktu</li>
        <li><strong>Konfiguracja rozszerzeń</strong> - dodajemy telefon, adres, linki do podstron</li>
        <li><strong>Optymalizacja i skalowanie</strong> - regularnie poprawiamy wyniki kampanii</li>
      </ul>
      
      <h3>Korzyści z kampanii lokalnych:</h3>
      <p>Dzięki kampaniom lokalnym Twoja firma pojawia się w wynikach wyszukiwania dokładnie wtedy, gdy klienci szukają usług w Twojej okolicy. To oznacza wyższy współczynnik konwersji i lepszy ROI niż tradycyjne formy reklamy.</p>
      
      <p>Dodatkowo, reklamy w Google Maps sprawiają, że Twoja firma staje się widoczna dla osób szukających usług bezpośrednio na mapie - często w momencie, gdy są już gotowi do podjęcia decyzji.</p>
      
      <h3>Co otrzymujesz:</h3>
      <ul>
        <li>Dedykowanego specjalistę Google Ads</li>
        <li>Szczegółowy raport z wyników co tydzień</li>
        <li>Stałą optymalizację kampanii</li>
        <li>Dostęp do panelu analitycznego 24/7</li>
      </ul>
    `
  },
  {
    slug: 'facebook-instagram-ads',
    title: 'Facebook & Instagram Ads',
    short: 'Dotarcie do lokalnej społeczności poprzez precyzyjne kampanie w mediach społecznościowych',
    price: 'od 1200 PLN/mies',
    features: [
      'Kreacje reklamowe dostosowane do grupy docelowej',
      'Targetowanie demograficzne i behawioralne',
      'Remarketing do odwiedzających',
      'A/B testing kreacji',
      'Optymalizacja konwersji'
    ],
    image: '/src/assets/service-social-ads.jpg',
    contentHtml: `
      <p>Kampanie reklamowe na Facebooku i Instagramie to potężne narzędzie do budowania świadomości marki i pozyskiwania klientów w Twojej lokalności. Dzięki precyzyjnemu targetowaniu docieramy do osób naprawdę zainteresowanych Twoją ofertą.</p>
      
      <h2>Dlaczego warto reklamować się w social mediach?</h2>
      <p>Facebook i Instagram oferują najbardziej zaawansowane możliwości targetowania spośród wszystkich platform reklamowych. Możemy dotrzeć do użytkowników na podstawie ich zainteresowań, zachowań, wieku, lokalizacji i wielu innych kryteriów.</p>
      
      <h3>Nasze podejście:</h3>
      <ul>
        <li><strong>Analiza grupy docelowej</strong> - określamy, kim są Twoi idealni klienci</li>
        <li><strong>Tworzenie atrakcyjnych kreacji</strong> - projektujemy grafiki i piszemy teksty, które przyciągają uwagę</li>
        <li><strong>Testowanie wariantów</strong> - sprawdzamy różne wersje reklam, aby znaleźć najskuteczniejsze</li>
        <li><strong>Remarketing</strong> - docieramy ponownie do osób, które już wykazały zainteresowanie</li>
        <li><strong>Optymalizacja budżetu</strong> - kierujemy środki na najlepiej działające kampanie</li>
      </ul>
      
      <h3>Typy kampanii, które prowadzisz:</h3>
      <p><strong>Kampanie zasięgowe</strong> - budujemy rozpoznawalność marki w lokalnej społeczności, pokazując Twoją firmę tysiącom potencjalnych klientów.</p>
      
      <p><strong>Kampanie konwersyjne</strong> - skupiamy się na generowaniu konkretnych działań: wypełnieniu formularza, wykonaniu telefonu, rezerwacji wizyty.</p>
      
      <p><strong>Kampanie remarketingowe</strong> - przypominamy o Twojej ofercie osobom, które odwiedziły stronę, ale jeszcze nie podjęły decyzji.</p>
      
      <h3>Co wyróżnia nasze kampanie:</h3>
      <ul>
        <li>Profesjonalne kreacje graficzne w cenie</li>
        <li>Copywriting dostosowany do Twojej branży</li>
        <li>Cotygodniowe raporty z wyników</li>
        <li>Stały kontakt z opiekunem kampanii</li>
        <li>Transparentne rozliczenia</li>
      </ul>
    `
  },
  {
    slug: 'seo-lokalne',
    title: 'SEO Lokalne',
    short: 'Wypozycjonuj swoją firmę w lokalnych wynikach wyszukiwania i Google Maps',
    price: 'od 2000 PLN/mies',
    features: [
      'Optymalizacja Google Moja Firma',
      'Budowa lokalnych linków zwrotnych',
      'Optymalizacja treści pod lokalne zapytania',
      'Zarządzanie opiniami',
      'Monitoring pozycji lokalnych'
    ],
    image: '/src/assets/service-seo.jpg',
    contentHtml: `
      <p>Lokalne SEO to klucz do długoterminowej widoczności Twojej firmy w wynikach wyszukiwania Google. W przeciwieństwie do płatnych reklam, efekty SEO są trwałe i budują się z czasem, zapewniając stały napływ organicznych leadów.</p>
      
      <h2>Czym jest lokalne SEO?</h2>
      <p>Lokalne SEO to zestaw działań mających na celu poprawę widoczności Twojej firmy w lokalnych wynikach wyszukiwania. Gdy ktoś w Twojej okolicy szuka usług, które oferujesz, Twoja firma powinna pojawić się na szczycie wyników.</p>
      
      <h3>Kluczowe elementy lokalnego SEO:</h3>
      
      <h4>1. Profil Google Moja Firma</h4>
      <p>Optymalizujemy Twój profil w Google, aby wyświetlał się w wynikach wyszukiwania i na mapach Google. Dodajemy zdjęcia, pełne dane kontaktowe, godziny otwarcia oraz regularnie publikujemy posty.</p>
      
      <h4>2. Budowa lokalnych cytowań</h4>
      <p>Umieszczamy informacje o Twojej firmie w lokalnych katalogach, portalach branżowych i serwisach informacyjnych. Dbamy o spójność danych NAP (nazwa, adres, telefon) we wszystkich źródłach.</p>
      
      <h4>3. Optymalizacja strony internetowej</h4>
      <p>Dostosowujemy treści na Twojej stronie pod lokalne frazy kluczowe. Dodajemy sekcje z opisem lokalizacji, mapę dojazdu oraz treści związane z obsługiwanym obszarem.</p>
      
      <h4>4. Zdobywanie opinii</h4>
      <p>Pomagamy w budowaniu bazy pozytywnych opinii w Google, które są kluczowym czynnikiem rankingowym. Większa liczba dobrych recenzji = wyższa pozycja w wynikach.</p>
      
      <h3>Proces wdrożenia:</h3>
      <ul>
        <li><strong>Miesiąc 1:</strong> Audyt SEO, optymalizacja profilu GMF, pierwsza seria cytowań</li>
        <li><strong>Miesiąc 2-3:</strong> Optymalizacja treści na stronie, budowa linków lokalnych</li>
        <li><strong>Miesiąc 4+:</strong> Utrzymanie pozycji, dalszy rozwój autorytetu lokalnego</li>
      </ul>
      
      <h3>Efekty, które zobaczysz:</h3>
      <ul>
        <li>Wyższa pozycja w wynikach wyszukiwania lokalnego</li>
        <li>Więcej wyświetleń profilu w Google Maps</li>
        <li>Wzrost organicznego ruchu na stronie</li>
        <li>Większa liczba telefonów i zapytań</li>
        <li>Przewaga nad konkurencją w Twojej okolicy</li>
      </ul>
    `
  },
  {
    slug: 'landing-pages',
    title: 'Landing Pages',
    short: 'Strony docelowe z wysoką konwersją, zaprojektowane do generowania leadów',
    price: 'od 2500 PLN',
    features: [
      'Projekt graficzny dopasowany do branży',
      'Optymalizacja pod konwersję',
      'Responsywność (mobile-first)',
      'Integracja z systemami CRM',
      'Testy A/B i optymalizacja'
    ],
    image: '/src/assets/service-landing.jpg',
    contentHtml: `
      <p>Landing page to specjalna strona internetowa zaprojektowana z jednym celem: przekonać odwiedzającego do wykonania konkretnej akcji. To niezbędne narzędzie skutecznej kampanii marketingowej online.</p>
      
      <h2>Czym różni się landing page od zwykłej strony?</h2>
      <p>W przeciwieństwie do standardowej witryny firmowej, landing page koncentruje się na jednej ofercie i jednym wezwaniu do działania (CTA). Eliminujemy wszystkie rozpraszacze, prowadząc użytkownika prostą ścieżką do konwersji.</p>
      
      <h3>Elementy skutecznego landing page:</h3>
      
      <h4>Przekonujący nagłówek</h4>
      <p>Pierwsza rzecz, którą widzi użytkownik. Musi natychmiast pokazać główną korzyść i przykuć uwagę w ciągu 3 sekund.</p>
      
      <h4>Problem i rozwiązanie</h4>
      <p>Identyfikujemy problem, z którym mierzy się Twój klient, a następnie prezentujemy Twoją usługę jako idealne rozwiązanie.</p>
      
      <h4>Dowody społeczne</h4>
      <p>Opinie klientów, certyfikaty, liczby pokazujące Twoje doświadczenie - wszystko, co buduje zaufanie i wiarygodność.</p>
      
      <h4>Wyraźne CTA</h4>
      <p>Przycisk lub formularz, który wyróżnia się wizualnie i jasno komunikuje, co stanie się po kliknięciu.</p>
      
      <h3>Nasz proces tworzenia:</h3>
      <ul>
        <li><strong>Brief i research</strong> - poznajemy Twoją ofertę, grupę docelową i konkurencję</li>
        <li><strong>Strategia konwersji</strong> - planujemy strukturę i przepływ użytkownika</li>
        <li><strong>Projekt graficzny</strong> - tworzymy atrakcyjny wizualnie design dopasowany do Twojej branży</li>
        <li><strong>Copywriting</strong> - piszemy perswazyjne treści, które sprzedają</li>
        <li><strong>Implementacja techniczna</strong> - kodujemy stronę z dbałością o szybkość i responsywność</li>
        <li><strong>Integracje</strong> - podłączamy formularze, narzędzia analityczne, systemy CRM</li>
        <li><strong>Testy i optymalizacja</strong> - sprawdzamy wszystkie scenariusze i dostosowujemy elementy</li>
      </ul>
      
      <h3>Technologie i integracje:</h3>
      <p>Każdy landing page kodujemy ręcznie dla maksymalnej szybkości ładowania. Integrujemy z najpopularniejszymi narzędziami: Google Analytics, Facebook Pixel, ActiveCampaign, Mailchimp, Pipedrive i wiele innych.</p>
      
      <h3>Co otrzymujesz:</h3>
      <ul>
        <li>Unikalny projekt graficzny</li>
        <li>Responsywną stronę działającą na wszystkich urządzeniach</li>
        <li>Zoptymalizowany kod dla najlepszej wydajności</li>
        <li>Panel administracyjny do edycji treści</li>
        <li>Instrukcję obsługi</li>
        <li>2 miesiące darmowego wsparcia technicznego</li>
      </ul>
    `
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation',
    short: 'Automatyczne sekwencje email i SMS, które pielęgnują leady i zwiększają sprzedaż',
    price: 'od 1800 PLN/mies',
    features: [
      'Projektowanie ścieżek automatyzacji',
      'Segmentacja bazy kontaktów',
      'Personalizowane kampanie email/SMS',
      'Lead scoring i nurturing',
      'Integracja z CRM i innymi narzędziami'
    ],
    image: '/src/assets/service-automation.jpg',
    contentHtml: `
      <p>Marketing automation to technologia, która pozwala automatycznie wysyłać spersonalizowane wiadomości do potencjalnych klientów w odpowiednim momencie ich ścieżki zakupowej. To sposób na skalowanie komunikacji bez zwiększania zespołu.</p>
      
      <h2>Jak działa marketing automation?</h2>
      <p>System automatycznie reaguje na zachowania użytkowników - odwiedziny na stronie, kliknięcia w email, wypełnienie formularza - i wysyła im treści dostosowane do ich zainteresowań i etapu procesu decyzyjnego.</p>
      
      <h3>Przykładowe scenariusze automatyzacji:</h3>
      
      <h4>Powitanie nowego leada</h4>
      <p>Gdy ktoś zapisze się do newslettera lub pobierze e-book, automatycznie otrzymuje serię emaili powitalnych, które przedstawiają Twoją firmę i budują relację.</p>
      
      <h4>Odzyskiwanie porzuconych koszyków</h4>
      <p>Dla e-commerce: gdy klient doda produkt do koszyka, ale nie dokończy zakupu, system wysyła przypomnienie z zachętą do finalizacji.</p>
      
      <h4>Przypomnienia o wizycie</h4>
      <p>Dla usług: automatyczne przypomnienia SMS/email wysyłane dzień przed umówioną wizytą, redukujące no-show o 40-60%.</p>
      
      <h4>Reaktywacja nieaktywnych klientów</h4>
      <p>System wykrywa klientów, którzy dawno nie mieli kontaktu z firmą, i wysyła im specjalną ofertę zachęcającą do powrotu.</p>
      
      <h3>Korzyści z automatyzacji:</h3>
      <ul>
        <li><strong>Oszczędność czasu</strong> - raz skonfigurowane sekwencje działają bez Twojego udziału</li>
        <li><strong>Personalizacja w skali</strong> - każdy kontakt otrzymuje komunikat dopasowany do jego potrzeb</li>
        <li><strong>Wyższa konwersja</strong> - regularny kontakt z leadami zwiększa szanse na sprzedaż</li>
        <li><strong>Lepsze wykorzystanie leadów</strong> - żaden potencjalny klient nie zostaje zapomniany</li>
        <li><strong>Mierzalne efekty</strong> - dokładne statystyki otwarć, kliknięć i konwersji</li>
      </ul>
      
      <h3>Nasz proces wdrożenia:</h3>
      <ol>
        <li><strong>Mapowanie ścieżki klienta</strong> - określamy wszystkie punkty kontaktu</li>
        <li><strong>Projektowanie scenariuszy</strong> - planujemy automatyczne reakcje na zachowania</li>
        <li><strong>Tworzenie treści</strong> - piszemy i projektujemy emaile i SMS-y</li>
        <li><strong>Konfiguracja techniczna</strong> - wdrażamy automatyzację w wybranym narzędziu</li>
        <li><strong>Testowanie</strong> - sprawdzamy wszystkie ścieżki i scenariusze</li>
        <li><strong>Uruchomienie i monitoring</strong> - włączamy automatyzację i śledzimy wyniki</li>
        <li><strong>Optymalizacja</strong> - na podstawie danych poprawiamy konwersję</li>
      </ol>
      
      <h3>Narzędzia, z którymi pracujemy:</h3>
      <p>ActiveCampaign, Mailchimp, HubSpot, GetResponse, Sendinblue i inne popularne platformy marketingowe. Dobieramy narzędzie odpowiednie do Twoich potrzeb i budżetu.</p>
      
      <h3>Co jest w pakiecie:</h3>
      <ul>
        <li>Pełna strategia automatyzacji</li>
        <li>Przygotowanie 3-5 kluczowych sekwencji</li>
        <li>Segmentacja bazy kontaktów</li>
        <li>Szablony emaili w brandingu firmy</li>
        <li>Integracja z Twoją stroną i CRM</li>
        <li>Szkolenie z obsługi platformy</li>
        <li>Miesięczne raporty i optymalizacja</li>
      </ul>
    `
  },
  {
    slug: 'zarzadzanie-reputacja',
    title: 'Zarządzanie Reputacją',
    short: 'Dbamy o Twoją opinię online, pozyskujemy pozytywne recenzje i reagujemy na negatywne',
    price: 'od 800 PLN/mies',
    features: [
      'Monitoring opinii w Google, Facebook, branżowych portalach',
      'System pozyskiwania nowych recenzji',
      'Profesjonalne odpowiedzi na opinie',
      'Raporty z sentimentu marki',
      'Strategia budowania reputacji'
    ],
    image: '/src/assets/service-reputation.jpg',
    contentHtml: `
      <p>W dzisiejszych czasach opinie online mogą zrobić lub zniszczyć lokalny biznes. 93% konsumentów czyta recenzje przed podjęciem decyzji o zakupie, a średnia ocena bezpośrednio wpływa na pozycję w wynikach wyszukiwania Google.</p>
      
      <h2>Dlaczego zarządzanie reputacją jest kluczowe?</h2>
      <p>Twoja reputacja online to często pierwsze wrażenie, jakie potencjalny klient ma o Twojej firmie. Brak opinii, niska średnia ocen lub nieudzielone odpowiedzi na negatywne recenzje mogą zniechęcić klientów, zanim jeszcze Cię poznają.</p>
      
      <h3>Co obejmuje zarządzanie reputacją:</h3>
      
      <h4>1. Monitoring opinii 24/7</h4>
      <p>Śledzimy wszystkie platformy, na których mogą pojawiać się opinie o Twojej firmie: Google, Facebook, branżowe portale, fora internetowe. Natychmiast informujemy Cię o nowych recenzjach.</p>
      
      <h4>2. Pozyskiwanie pozytywnych opinii</h4>
      <p>Wdrażamy system zachęcający zadowolonych klientów do wystawienia recenzji. Może to być automatyczny email po usłudze, SMS-owa prośba lub karta z kodem QR wręczana osobiście.</p>
      
      <h4>3. Profesjonalne odpowiedzi</h4>
      <p>Każda opinia - pozytywna czy negatywna - otrzymuje odpowiedź. Dziękujemy za pozytywne, a na negatywne reagujemy empatycznie, starając się rozwiązać problem i pokazać Twoją troskę o klienta.</p>
      
      <h4>4. Zarządzanie kryzysowe</h4>
      <p>W przypadku niesłusznych oszczerstw lub kampanii hejtu, podejmujemy działania mające na celu ochronę Twojej reputacji, w tym procedury zgłoszeniowe do platform.</p>
      
      <h3>Proces budowania reputacji:</h3>
      <ul>
        <li><strong>Audyt obecnej sytuacji</strong> - sprawdzamy, gdzie i jakie opinie już istnieją</li>
        <li><strong>Strategia pozyskiwania recenzji</strong> - projektujemy system zachęcający do wystawiania opinii</li>
        <li><strong>Implementacja narzędzi</strong> - wdrażamy automatyzacje i procesy</li>
        <li><strong>Bieżący monitoring</strong> - śledzimy nowe opinie i reagujemy na nie</li>
        <li><strong>Raportowanie</strong> - co miesiąc dostarczamy raport z nowych opinii i działań</li>
      </ul>
      
      <h3>Jak odpowiadamy na negatywne opinie?</h3>
      <p>Negatywna opinia to nie koniec świata - to szansa na pokazanie, jak bardzo zależy Ci na klientach. Nasza strategia opiera się na:</p>
      <ul>
        <li>Szybkiej reakcji (w ciągu 24h)</li>
        <li>Empatii i zrozumieniu problemu</li>
        <li>Konkretnych działaniach naprawczych</li>
        <li>Przeniesieniu rozmowy do kanału prywatnego (email/telefon)</li>
        <li>Próbie przekształcenia niezadowolonego klienta w ambasadora marki</li>
      </ul>
      
      <h3>Efekty, które zobaczysz:</h3>
      <ul>
        <li>Wzrost średniej oceny w Google i na Facebooku</li>
        <li>Większa liczba recenzji (im więcej, tym lepiej dla SEO)</li>
        <li>Wyższa konwersja z wizyt na stronie na faktyczne zapytania</li>
        <li>Przewaga nad konkurencją w postrzeganej jakości</li>
        <li>Lepsze pozycje w lokalnych wynikach wyszukiwania</li>
      </ul>
      
      <h3>Co zawiera pakiet:</h3>
      <ul>
        <li>Monitoring 5-10 platform z opiniami</li>
        <li>System automatycznego pozyskiwania recenzji</li>
        <li>Do 20 odpowiedzi na opinie miesięcznie</li>
        <li>Miesięczny raport z reputacji</li>
        <li>Wsparcie w sytuacjach kryzysowych</li>
      </ul>
    `
  }
];
