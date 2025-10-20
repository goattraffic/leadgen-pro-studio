import { Link } from 'react-router-dom';
import { services } from '../data/services';
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

const ServicesPage = () => {
  return (
    <div className="container section">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="mb-6">Nasze usługi</h1>
        <p className="text-xl text-muted-foreground">
          Kompleksowe rozwiązania marketingowe stworzone z myślą o lokalnych biznesach. 
          Wybierz usługę dopasowaną do Twoich potrzeb lub skorzystaj z pakietu.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={service.slug}
            className="card-hover bg-card rounded-lg overflow-hidden flex flex-col animate-fade-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={serviceImages[service.slug]}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-muted-foreground mb-4 flex-1">{service.short}</p>
              
              <div className="mb-4">
                <span className="text-2xl font-bold text-primary">{service.price}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={`/sluzby/${service.slug}`}
                className="btn-primary w-full text-center mt-auto"
              >
                Zobacz szczegóły
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 max-w-4xl mx-auto">
        <div className="card-hover bg-card rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Potrzebujesz kompleksowego rozwiązania?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Skontaktuj się z nami, aby omówić indywidualny pakiet usług dostosowany do Twoich celów biznesowych.
          </p>
          <Link to="/kontakt" className="btn-primary text-lg px-8 py-4">
            Skontaktuj się z nami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
