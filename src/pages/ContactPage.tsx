import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="mb-6">Skontaktuj się z nami</h1>
        <p className="text-xl text-muted-foreground">
          Masz pytania? Chcesz rozpocząć współpracę? Wypełnij formularz, a nasz zespół 
          skontaktuje się z Tobą w ciągu 24 godzin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Dlaczego warto z nami porozmawiać?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Bezpłatna konsultacja</h3>
                <p className="text-muted-foreground">
                  Pierwsza rozmowa jest zawsze darmowa. Przeanalizujemy Twoją sytuację i zaproponujemy najlepsze rozwiązania.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Indywidualna strategia</h3>
                <p className="text-muted-foreground">
                  Każdy biznes jest inny. Przygotujemy spersonalizowaną strategię marketingową dopasowaną do Twoich celów.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Transparentna wycena</h3>
                <p className="text-muted-foreground">
                  Otrzymasz jasną i szczegółową wycenę bez ukrytych kosztów. Wszystko jest transparentne.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-semibold mb-1">Szybka reakcja</h3>
                <p className="text-muted-foreground">
                  Odpowiadamy na zapytania w ciągu maksymalnie 24 godzin. Twój czas jest dla nas cenny.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 p-6 bg-card rounded-lg border border-border">
            <h3 className="font-semibold mb-4">Godziny pracy</h3>
            <div className="space-y-2 text-muted-foreground">
              <p><strong>Poniedziałek - Piątek:</strong> 9:00 - 18:00</p>
              <p><strong>Sobota - Niedziela:</strong> Zamknięte</p>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Formularz można wypełnić o dowolnej porze - skontaktujemy się w najbliższym dniu roboczym.
            </p>
          </div>
        </div>

        <div>
          <div className="card-hover bg-card rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Formularz kontaktowy</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
