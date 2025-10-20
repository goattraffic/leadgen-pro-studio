const AboutPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-center">O nas</h1>
        
        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <p className="text-xl">
            NazvaSSM to agencja specjalizująca się w generowaniu lokalnych leadów dla małych i średnich przedsiębiorstw. 
            Pomagamy lokalnym firmom przyciągać nowych klientów poprzez skuteczne kampanie marketingowe online.
          </p>

          <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-card rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Doświadczenie</h3>
              <p className="text-sm">Ponad 5 lat w branży marketingu lokalnego</p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Eksperci</h3>
              <p className="text-sm">Zespół certyfikowanych specjalistów Google & Meta</p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Wyniki</h3>
              <p className="text-sm">Średnio 3x ROI dla naszych klientów</p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Nasza misja</h2>
          <p>
            Wierzymy, że każdy lokalny biznes zasługuje na stały napływ nowych klientów. Nasza misja to dostarczanie 
            mierzalnych rezultatów poprzez połączenie najnowszych technologii marketingowych z głęboką znajomością 
            lokalnego rynku.
          </p>

          <h2 className="text-3xl font-semibold mt-12 mb-4">Jak pracujemy</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Analiza</h3>
                <p>Dokładnie poznajemy Twój biznes, grupę docelową i konkurencję lokalną</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Strategia</h3>
                <p>Opracowujemy spersonalizowaną strategię marketingową dopasowaną do Twoich celów</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Wdrożenie</h3>
                <p>Uruchamiamy kampanie i optymalizujemy je na bieżąco dla maksymalnych wyników</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold mb-1">Raportowanie</h3>
                <p>Dostarczamy przejrzyste raporty i jesteśmy zawsze dostępni do konsultacji</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mt-12 mb-4">FAQ - Często zadawane pytania</h2>
          
          <div className="space-y-6">
            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Jak szybko zobaczę pierwsze rezultaty?</h3>
              <p className="text-sm">
                W przypadku kampanii Google Ads pierwsze leady mogą pojawić się już w ciągu pierwszych dni. 
                SEO lokalne wymaga więcej czasu - pierwsze znaczące efekty widoczne są zwykle po 2-3 miesiącach.
              </p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Czy muszę podpisać długoterminową umowę?</h3>
              <p className="text-sm">
                Nie. Oferujemy elastyczne modele współpracy. Większość naszych usług dostępna jest w opcji 
                miesięcznej bez zobowiązań długoterminowych.
              </p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Ile kosztuje współpraca z NazvaSSM?</h3>
              <p className="text-sm">
                Ceny zależą od wybranego pakietu usług. Nasze miesięczne pakiety startują od 800 PLN. 
                Skontaktuj się z nami, aby otrzymać wycenę dostosowaną do Twoich potrzeb.
              </p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Czy współpracujecie tylko z dużymi firmami?</h3>
              <p className="text-sm">
                Wręcz przeciwnie! Specjalizujemy się w obsłudze małych i średnich lokalnych przedsiębiorstw. 
                Pracowaliśmy z salonami fryzjerskimi, warsztatami samochodowymi, klinikami, restauracjami i wieloma innymi.
              </p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Jakie narzędzia i platformy obsługujecie?</h3>
              <p className="text-sm">
                Jesteśmy certyfikowani w Google Ads i Meta Ads. Pracujemy również z narzędziami takimi jak 
                Google Analytics, Google My Business, ActiveCampaign, Mailchimp i wieloma innymi platformami marketingowymi.
              </p>
            </div>

            <div className="card-hover bg-card rounded-lg p-6">
              <h3 className="font-semibold mb-2">Co jeśli nie jestem zadowolony z wyników?</h3>
              <p className="text-sm">
                Regularnie monitorujemy i optymalizujemy kampanie. Jeśli wyniki nie spełniają oczekiwań, 
                wspólnie analizujemy przyczyny i dostosowujemy strategię. Transparentność i otwarta komunikacja 
                to podstawa naszej współpracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
