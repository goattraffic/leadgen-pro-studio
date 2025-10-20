import { useState, FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Capture UTM parameters and other tracking data on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const trackingData = {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_term: urlParams.get('utm_term') || '',
      utm_content: urlParams.get('utm_content') || '',
      gclid: urlParams.get('gclid') || '',
      fbclid: urlParams.get('fbclid') || '',
      referrer: document.referrer,
      path: window.location.pathname + window.location.hash
    };
    sessionStorage.setItem('trackingData', JSON.stringify(trackingData));
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    const honeypot = formData.get('__hp');
    if (honeypot) {
      // Silent success for bots
      navigate('/dziekujemy');
      return;
    }

    // Consent check
    const consent = formData.get('consent');
    if (!consent) {
      setError('Musisz wyrazić zgodę na przetwarzanie danych osobowych');
      return;
    }

    // Add technical fields
    const trackingData = JSON.parse(sessionStorage.getItem('trackingData') || '{}');
    formData.append('__ts', Date.now().toString());
    Object.entries(trackingData).forEach(([key, value]) => {
      formData.append(key, value as string);
    });

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formData
      });

      const result = await response.json();

      if (result.ok) {
        navigate('/dziekujemy');
      } else {
        setError(result.error || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      }
    } catch (err) {
      setError('Nie udało się połączyć z serwerem. Sprawdź połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactForm" className="section bg-muted/30">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="mb-4">Gotowy na nowych klientów?</h2>
            <p className="text-muted-foreground text-lg">
              Wypełnij formularz, a skontaktujemy się z Tobą w ciągu 24 godzin
            </p>
          </div>

          <form onSubmit={handleSubmit} id="leadForm" className="card-hover bg-card rounded-lg p-8">
            {/* Honeypot field */}
            <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                  Imię <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                  Nazwisko <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefon <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="consent"
                  required
                  className="mt-1 w-4 h-4"
                />
                <span className="text-sm text-muted-foreground">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                  <a href="/#/polityka-prywatnosci" className="text-primary hover:underline">
                    polityką prywatności
                  </a>{' '}
                  w celu kontaktu ze strony NazvaSSM <span className="text-destructive">*</span>
                </span>
              </label>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-destructive/10 border border-destructive rounded-lg" role="alert" aria-live="polite">
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Wysyłanie...' : 'Wyślij zapytanie'}
            </button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              * Pola wymagane
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
