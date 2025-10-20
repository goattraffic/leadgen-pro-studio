import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import ContactPage from "./pages/ContactPage";
import ThankYouPage from "./pages/ThankYouPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiePage from "./pages/CookiePage";
import TermsPage from "./pages/TermsPage";
import RefundsPage from "./pages/RefundsPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieBanner from "./components/CookieBanner";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="flex flex-col min-h-screen" data-variation-seed="4732">
          <Header />
          <main className="flex-1 pt-32">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/o-nas" element={<AboutPage />} />
              <Route path="/sluzby" element={<ServicesPage />} />
              <Route path="/sluzby/:slug" element={<ServiceDetailPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/dziekujemy" element={<ThankYouPage />} />
              <Route path="/polityka-prywatnosci" element={<PrivacyPage />} />
              <Route path="/polityka-cookies" element={<CookiePage />} />
              <Route path="/regulamin" element={<TermsPage />} />
              <Route path="/zwroty" element={<RefundsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <CookieBanner />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
