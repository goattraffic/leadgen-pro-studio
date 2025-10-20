import { useParams, Link, Navigate } from 'react-router-dom';
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

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/sluzby" replace />;
  }

  const scrollToForm = () => {
    const form = document.getElementById('orderFormAnchor');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container section">
      {/* Breadcrumbs */}
      <nav className="mb-8 text-sm">
        <ol className="flex items-center space-x-2 text-muted-foreground">
          <li><Link to="/" className="hover:text-primary">Strona główna</Link></li>
          <li>/</li>
          <li><Link to="/sluzby" className="hover:text-primary">Usługi</Link></li>
          <li>/</li>
          <li className="text-foreground">{service.title}</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto">
        {/* Hero Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img 
            src={serviceImages[service.slug]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title and Price */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="mb-4 md:mb-0">{service.title}</h1>
          <div className="text-3xl font-bold text-primary">{service.price}</div>
        </div>

        {/* Features */}
        <div className="card-hover bg-card rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">Co obejmuje usługa:</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div 
          className="prose prose-invert max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: service.contentHtml }}
        />

        {/* CTA Section */}
        <div id="orderFormAnchor" className="card-hover bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-bold mb-4">Zainteresowany tą usługą?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Wypełnij formularz kontaktowy, a nasz specjalista skontaktuje się z Tobą w ciągu 24 godzin, 
            aby omówić szczegóły i przygotować indywidualną ofertę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#contactForm" className="btn-primary text-lg px-8 py-4">
              Wypełnij formularz
            </a>
            <Link to="/sluzby" className="btn-secondary text-lg px-8 py-4">
              Wróć do listy usług
            </Link>
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Inne usługi, które mogą Cię zainteresować</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.slug !== service.slug)
              .slice(0, 3)
              .map(relatedService => (
                <Link
                  key={relatedService.slug}
                  to={`/sluzby/${relatedService.slug}`}
                  className="card-hover bg-card rounded-lg p-6 block"
                >
                  <h3 className="font-semibold mb-2">{relatedService.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{relatedService.short}</p>
                  <span className="text-primary font-semibold">Zobacz więcej →</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
