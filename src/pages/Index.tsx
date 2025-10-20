import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { services } from '../data/services';
import heroBg from '@/assets/hero-bg.jpg';
import googleAdsImg from '@/assets/service-google-ads.jpg';
import socialAdsImg from '@/assets/service-social-ads.jpg';
import seoImg from '@/assets/service-seo.jpg';
import landingImg from '@/assets/service-landing.jpg';
import automationImg from '@/assets/service-automation.jpg';
import reputationImg from '@/assets/service-reputation.jpg';

const serviceImages: Record<string, string> = {
  'google-ads-kampanie-lokalne': googleAdsImg,
  'facebook-instagram-ads': socialAdsImg,
  'seo-lokalne': seoImg,
  'landing-pages': landingImg,
  'marketing-automation': automationImg,
  'zarzadzanie-reputacja': reputationImg
};

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="absolute inset-0 grid-pattern z-0" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6 animate-fade-up">
              Nowi klienci <span className="gradient-text">każdego tygodnia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Profesjonalna generacja leadów dla lokalnych biznesów. 
              Kompleksowe kampanie marketingowe, które naprawdę działają.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <a href="#contactForm" className="btn-primary text-lg px-8 py-4">
                Zapustić leadogenację
              </a>
              <Link to="/sluzby" className="btn-secondary text-lg px-8 py-4">
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 card-hover bg-card rounded-lg">
              <div className="text-5xl font-bold gradient-text mb-2">2500+</div>
              <p className="text-muted-foreground">Wygenerowanych leadów</p>
            </div>
            <div className="text-center p-8 card-hover bg-card rounded-lg">
              <div className="text-5xl font-bold gradient-text mb-2">95%</div>
              <p className="text-muted-foreground">Współczynnik zadowolenia</p>
            </div>
            <div className="text-center p-8 card-hover bg-card rounded-lg">
              <div className="text-5xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-muted-foreground">Monitoring kampanii</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Nasze usługi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kompleksowe rozwiązania marketingowe dostosowane do potrzeb lokalnych biznesów
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={service.slug} 
                className="card-hover bg-card rounded-lg overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={serviceImages[service.slug]} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.short}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6 text-sm">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={`/sluzby/${service.slug}`}
                    className="btn-secondary w-full text-center"
                  >
                    Dowiedz się więcej
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-4">Co mówią nasi klienci</h2>
            <p className="text-xl text-muted-foreground">
              Prawdziwe opinie od zadowolonych lokalnych przedsiębiorców
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-hover bg-card rounded-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Dzięki kampaniom Google Ads od NazvaSSM, mój salon piękności odnotował wzrost liczby rezerwacji o 150% w ciągu pierwszych 3 miesięcy. Polecam!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-primary">AK</span>
                </div>
                <div>
                  <p className="font-semibold">Anna Kowalska</p>
                  <p className="text-sm text-muted-foreground">Właścicielka salonu Beauty Lux</p>
                </div>
              </div>
            </div>

            <div className="card-hover bg-card rounded-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Profesjonalne podejście i doskonałe wyniki. Landing page stworzony przez zespół NazvaSSM konwertuje znacznie lepiej niż nasza poprzednia strona."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-primary">MN</span>
                </div>
                <div>
                  <p className="font-semibold">Marek Nowak</p>
                  <p className="text-sm text-muted-foreground">Auto Serwis Premium</p>
                </div>
              </div>
            </div>

            <div className="card-hover bg-card rounded-lg p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Lokalne SEO znacząco poprawiło naszą widoczność w Google. Teraz jesteśmy na pierwszej stronie wyników dla kluczowych fraz w naszej okolicy."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-primary">JW</span>
                </div>
                <div>
                  <p className="font-semibold">Joanna Wiśniewska</p>
                  <p className="text-sm text-muted-foreground">Klinika Stomatologiczna DentMed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactForm />
    </>
  );
};

export default Index;
