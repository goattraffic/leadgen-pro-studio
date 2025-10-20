import { Link } from 'react-router-dom';

const ThankYouPage = () => {
  return (
    <div className="container section">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="mb-6">Dziękujemy!</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Twoje dane zostały pomyślnie wysłane. Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin roboczych.
        </p>

        <div className="card-hover bg-card rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Co dalej?</h2>
          <ul className="text-left space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Nasz specjalista przeanalizuje Twoje zapytanie</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Skontaktujemy się telefonicznie lub emailem (według Twoich preferencji)</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Omówimy Twoje potrzeby i zaproponujemy najlepsze rozwiązania</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span>Przygotujemy indywidualną ofertę dopasowaną do Twojego budżetu</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary px-8 py-3">
            Wróć do strony głównej
          </Link>
          <Link to="/sluzby" className="btn-secondary px-8 py-3">
            Zobacz nasze usługi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
