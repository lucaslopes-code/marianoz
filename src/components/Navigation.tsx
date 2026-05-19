import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Target, Building2, Calendar, Phone, ShoppingBag } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Prevent scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // Se for 'home', vai para o topo da página inicial
    if (sectionId === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    // Se não estiver na página inicial, navega para home com hash
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
      return;
    }

    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${scrolled
      ? 'backdrop-blur-xl shadow-elegant'
      : ''
      }`} style={{ backgroundColor: '#591B2B' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Desktop Navigation - Moved to left */}
          <div className="hidden md:flex items-baseline flex-shrink-0">
            <div className="flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:opacity-80 pl-0 pr-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('proposito')}
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Propósito
              </button>
              <button
                onClick={() => scrollToSection('b2b')}
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                B2B
              </button>
              <Link
                to="/produtos"
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Produtos
              </Link>
              <button
                onClick={() => scrollToSection('eventos')}
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Eventos
              </button>
              <button
                onClick={() => scrollToSection('academy')}
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Academy
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="hover:opacity-80 px-3 py-2 rounded-lg text-base font-oswald font-medium tracking-widest transition-all duration-300"
                style={{ color: '#F4EACC' }}
              >
                Contato
              </button>
            </div>

          </div>

          {/* Frase centralizada */}
          <div className="hidden md:flex flex-1 justify-center">
            <p className="text-sm lg:text-base tracking-widest font-lecmer text-center" style={{ color: '#F4EACC' }}>
              Por mais momentos felizes à mesa
            </p>
          </div>

          {/* Logo */}
          <div className="hidden md:flex flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="https://cdn.cachetaleague.com/logo_Maria_Noz_amarelo.png"
              alt="Maria Noz Logo"
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Logo mobile */}
          <div className="md:hidden flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="https://cdn.cachetaleague.com/logo_Maria_Noz_amarelo.png"
              alt="Maria Noz Logo"
              className="h-16 w-auto hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream hover:bg-cream/10 p-3"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="fixed inset-0 bg-background backdrop-blur-xl z-[99999] animate-fade-in shadow-2xl">
              <div className="bg-background h-full overflow-y-auto">
                {/* Header with close button */}
                <div className="flex justify-between items-center p-6 border-b border-accent/20">
                  <h1 className="text-2xl text-accent tracking-wide">
                    Maria Noz
                  </h1>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-accent hover:bg-accent/10 p-3"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  {/* Enhanced mobile menu items with icons */}
                  <div className="space-y-4">
                    <button
                      onClick={() => scrollToSection('home')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Home className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Início</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                      onClick={() => scrollToSection('proposito')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Target className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Propósito</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                      onClick={() => scrollToSection('b2b')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Building2 className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">B2B</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <Link
                      to="/produtos"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <ShoppingBag className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Produtos</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <button
                      onClick={() => scrollToSection('eventos')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Calendar className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Eventos</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                      onClick={() => scrollToSection('academy')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Target className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Academy</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    <button
                      onClick={() => scrollToSection('contato')}
                      className="flex items-center w-full text-left px-6 py-4 text-foreground hover:text-accent transition-all duration-300 font-semibold rounded-2xl hover:bg-gradient-radial border border-accent/20 hover:border-accent/40 group hover-scale"
                    >
                      <Phone className="h-5 w-5 mr-4 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-lg">Contato</span>
                      <div className="ml-auto w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>

                  {/* Mobile CTA button */}
                  <div className="pt-8 border-t border-caramel/20">
                    <button className="btn-luxury w-full group">
                      <span className="relative z-10">Fale Conosco</span>
                    </button>
                  </div>

                  {/* Mobile footer info */}
                  <div className="pt-6 text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Maria Noz</p>
                    <p className="text-xs text-caramel font-medium">Torteria</p>
                    <p className="text-xs text-muted-foreground">Itu-SP • (11) 99813-8094</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};