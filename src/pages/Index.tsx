import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/ui/section";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselDots } from "@/components/ui/carousel";
import { Music, Video, Star, Heart, Cookie, Crown, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-tartlets.jpg";
import Autoplay from "embla-carousel-autoplay";
import tartletsVariety from "@/assets/tartlets-variety.jpg";
import celebrationMoment from "@/assets/celebration-moment.jpg";
import eventTartlets from "@/assets/event-tartlets.jpg";
import carrosel01 from "@/assets/carrosel-01.jpg";
import carrosel02 from "@/assets/carrosel-02.jpg";
import carrosel03 from "@/assets/carrosel-03.jpg";
import bannerDesktop1 from "@/assets/Maria - Banner site 01.png";
import bannerDesktop2 from "@/assets/Maria - Banner site 2.png";
import bannerDesktop3 from "@/assets/Maria - Banner site 3.png";
import bannerTablet1 from "@/assets/Maria - Banner site tablet 1.png";
import bannerTablet2 from "@/assets/Maria - Banner site tablet 2.webp";
import bannerTablet3 from "@/assets/Maria - Banner site tablet 3.png";
import bannerMobile1 from "@/assets/Maria - Banner site celular 1.png";
import bannerMobile2 from "@/assets/Maria - Banner site celular 2.png";
import bannerMobile3 from "@/assets/Maria - Banner site celular 3 att.png";
import fotoProposito from "@/assets/foto proposito familia.jpg";
import nossaTartelete from "@/assets/nossatartelete.jpg";
import bocadoMariaNoz1 from "@/assets/bocado Maria Noz1.jpg";
import bocadoMariaNoz2 from "@/assets/bocado Maria Noz2.jpg";
import bocadoMariaTeresa1 from "@/assets/bocadomariatereza1.jpg";
import bocadoMariaTeresa2 from "@/assets/bocadomariztereza2.jpg";
import caramelo1 from "@/assets/caramelo1.jpg";
import caramelo2 from "@/assets/caramelo2.jpg";
import mariaCarmela1 from "@/assets/mariacamela1.jpg";
import mariaCarmela2 from "@/assets/mariacamela2.jpg";
import tarteleteMariaCarmelaB2B1 from "@/assets/tarteletemariacamela1.jpg";
import tarteleteMariaCarmelaB2B2 from "@/assets/tarteletemariacamela2.jpg";
import tarteleteMariaNoz1 from "@/assets/tarteletemarianoz1.jpg";
import tarteleteMariaNoz2 from "@/assets/tarteletemarianoz2.jpg";
import tarteleteMariaTeresa1 from "@/assets/tarteletemariatereza1.jpg";
import tarteleteMariaTeresa2 from "@/assets/tarteletemariztereza2.jpg";
import mariaNozTartlet from "@/assets/maria-noz-tartlet.jpg";
import mariaTerezaTartlet from "@/assets/maria-tereza-tartlet.jpg";
import mariaClaraTartlet from "@/assets/maria-clara-tartlet.jpg";
import carameloSalgado from "@/assets/caramelo-salgado.jpg";
import mariaAnaTartlet from "@/assets/maria-ana-tartlet.jpg";
import mariaLuizaTartlet from "@/assets/maria-luiza-tartlet.jpg";
import mariaCafeTartlet from "@/assets/maria-cafe-tartlet.jpg";
import mariaLimaoTartlet from "@/assets/maria-limao-tartlet.jpg";
import mariaOuroTartlet from "@/assets/maria-ouro-tartlet.jpg";
import melEspecial from "@/assets/mel-especial.jpg";
import muffinBlackCake from "@/assets/Muffin Black cake.png";
import muffinCenoura from "@/assets/Muffin Cenoura.png";
import muffinBananaBread from "@/assets/Muffin Banana Bread.png";
import muffinNapolitano from "@/assets/Muffin Napolitano.png";
const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return <div className="min-h-screen bg-background overflow-x-hidden">
    <Navigation />

    {/* Hero Carousel - Full Width No Padding - First Element */}
    <div className="w-full relative pt-24">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: false
          })
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {[
            {
              img: bannerMobile1,
              imgTablet: bannerTablet1,
              imgDesktop: bannerDesktop1,
              alt: "Tarteletes Artesanais Premium",
              title: "São produtos que fazem diferença",
              subtitle: "...e impressionam seus clientes.",
              label: "TARTELETES PREMIUM",
              buttonText: "",
              showLogo: true
            },
            {
              img: bannerMobile2,
              imgTablet: bannerTablet2,
              imgDesktop: bannerDesktop2,
              alt: "Variedade de Sabores",
              title: "Da nossa mesa para a sua",
              subtitle: "Experimente toda nossa variedade artesanal",
              label: "VARIEDADE DE SABORES",
              buttonText: "",
              showLogo: true
            },
            {
              img: bannerMobile3,
              imgTablet: bannerTablet3,
              imgDesktop: bannerDesktop3,
              alt: "Momentos de Celebração",
              title: "Tarteletes premium que elevam o sabor do seu negócio",
              subtitle: "Celebre com sabor e sofisticação",
              label: "MOMENTOS DELICIOSOS",
              buttonText: "",
              showLogo: true
            },
          ].map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative group w-full">
                {/* Image container with larger height */}
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[500px] overflow-hidden bg-cream-warm">
                  {/* Mobile only image */}
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover object-bottom sm:hidden"
                  />
                  {/* Tablet image */}
                  <img
                    src={item.imgTablet}
                    alt={item.alt}
                    className="w-full h-full object-cover object-left hidden sm:block lg:hidden"
                  />
                  {/* Desktop image */}
                  <img
                    src={item.imgDesktop}
                    alt={item.alt}
                    className="w-full h-full object-cover object-left hidden lg:block"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex left-4 lg:left-8 h-12 w-12 bg-cream/10 hover:bg-cream/20 border-cream/30 text-cream backdrop-blur-sm" />
        <CarouselNext className="hidden lg:flex right-4 lg:right-8 h-12 w-12 bg-cream/10 hover:bg-cream/20 border-cream/30 text-cream backdrop-blur-sm" />
      </Carousel>

      {/* Features Section - Below Carousel with reduced spacing */}
      <div className="w-full border-t border-accent/10 py-6" style={{ backgroundColor: '#E8DBC1' }}>
        <div className="w-full overflow-x-auto pb-4" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#E8DBC1 transparent'
        }}>
          <div className="flex gap-8 lg:gap-12 px-4 sm:px-6 min-w-max lg:justify-center">
            <div className="text-center space-y-3 min-w-[200px]">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" style={{ color: '#591B2B' }} />
              <p className="text-xl sm:text-2xl font-lecmer tracking-wider" style={{ color: '#591B2B' }}>Ingredientes Premium</p>
            </div>
            <div className="text-center space-y-3 min-w-[200px]">
              <Heart className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" style={{ color: '#591B2B' }} />
              <p className="text-xl sm:text-2xl font-lecmer tracking-wider" style={{ color: '#591B2B' }}>Produto Artesanal</p>
            </div>
            <div className="text-center space-y-3 min-w-[200px]">
              <Cookie className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" style={{ color: '#591B2B' }} />
              <p className="text-xl sm:text-2xl font-lecmer tracking-wider" style={{ color: '#591B2B' }}>Massa Finíssima</p>
            </div>
            <div className="text-center space-y-3 min-w-[240px]">
              <Crown className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" style={{ color: '#591B2B' }} />
              <p className="text-xl sm:text-2xl font-lecmer tracking-wider whitespace-nowrap" style={{ color: '#591B2B' }}>Sofisticação e Praticidade</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    {/* About Section */}
    <Section className="relative pt-16 lg:pt-24" style={{ backgroundColor: '#F4EACC' }}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="flex flex-col lg:flex-row lg:items-stretch gap-24 relative z-10">
        <div className="order-2 lg:order-1 relative lg:w-1/2 min-h-[300px] lg:min-h-0">
          <img src={nossaTartelete} alt="Variedade de tarteletes artesanais - craft gastronômico" className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-elegant border border-white/20" />
        </div>

        <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up text-left lg:w-1/2">
          <h2 className="text-2xl lg:text-3xl font-lecmer font-black leading-tight tracking-widest" style={{ color: '#591B2B' }}>
            Nossa tartelete tem um jeito muito especial de ser feita: une sabor com significado.
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-oswald tracking-wide">
            <p>
              Sabor, porque estamos falando de tarteletes artesanais, feitas com ingredientes selecionados, combinações únicas e um cuidado que se sente em cada mordida.
            </p>

            <p>
              Significado, porque acreditamos que as melhores receitas nascem quando há propósito por trás, e nossas tarteletes são convites a viver momentos gostosos, cercados de afeto e partilha, respeitando a mesa como lugar de encontro.
            </p>

            <p>
              Quer proporcionar momentos como esses para seus clientes?
            </p>

            <p>
              Fale com a gente. Vamos espalhar mais sabor, alegria e comunhão por aí.
            </p>

            <div>
              <a
                href="https://wa.me/5511998138094?text=Ol%C3%A1%2C%20Maria%20Noz!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="text-cream font-oswald font-bold text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wider hover:bg-[#4D2523]"
                  style={{ backgroundColor: '#591B2B' }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Fale Conosco no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* Purpose Section */}
    <Section id="proposito" style={{ backgroundColor: '#F4EACC' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
        <div className="space-y-6">
          <h2 className="text-2xl lg:text-3xl font-lecmer font-black tracking-widest" style={{ color: '#591B2B' }}>
            Propósito
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-oswald tracking-wide">
            <p>Nascemos com um propósito claro: ser um convite para momentos de comunhão à mesa, inspirando encontros que celebrem a vida, as conquistas e o afeto. Acreditamos que cada tartelete pode ser mais do que uma sobremesa pode ser uma oportunidade de conexão, cuidado e celebração.</p>
            <p>
              Com essa essência, oferecemos tarteletes artesanais de excelência, preparadas com ingredientes selecionados, carinho em cada detalhe e um compromisso genuíno com a sustentabilidade e boas práticas ESG.
            </p>
            <div>
              <h3 className="font-semibold text-caramel mb-1">Visão:</h3>
              <p>Sermos a primeira escolha em sobremesas que transformam os encontros à mesa em momentos inesquecíveis de afeto e comunhão.</p>
            </div>
            <div>
              <h3 className="font-semibold text-caramel mb-1">Valores:</h3>
              <p>Excelência, Relacionamento, Ética & Transparência, Inovação com Consciência e Práticas ESG.</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={fotoProposito} alt="Pessoa celebrando à mesa com tarteletes" className="relative w-full h-[500px] object-cover rounded-3xl shadow-elegant border border-white/20" />
        </div>
      </div>
    </Section>

    {/* B2B Section */}
    <Section id="b2b" className="relative" style={{ backgroundColor: '#F4EACC' }}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-radial opacity-20 float" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-radial opacity-15 float" style={{
          animationDelay: '3s'
        }} />
      </div>

      <div className="space-y-16 relative z-10">
        {/* B2B Title and Subtitle */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-lecmer font-black tracking-widest text-center" style={{ color: '#591B2B' }}>
            Maria Noz B2B
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto px-4 font-oswald tracking-wide text-center">
            Sabor, praticidade e encantamento é o que servimos aos nossos clientes.
          </p>
        </div>

        {/* B2B Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto px-4" opts={{
          align: "start",
          loop: true
        }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Noz" image={tarteleteMariaNoz2} image2={tarteleteMariaNoz1} description="Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Tereza" image={tarteleteMariaTeresa2} image2={tarteleteMariaTeresa1} description="Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Carmela" image={tarteleteMariaCarmelaB2B2} image2={tarteleteMariaCarmelaB2B1} description="Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Caramelo Salgado" image={caramelo2} image2={caramelo1} description="Caramelo salgado cremoso com flor de sal servido como acompanhamento de um café, como cobertura extra em outras sobremesas ou em combinações com vários tipos de queijos e castanhas." weight="230g" details="Para restaurantes, cafeterias, bistrôs e mercados: embalagem de vidro 230g." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Black Cake" image={muffinBlackCake} image2={muffinBlackCake} description="Receita exclusiva Maria Noz, com massa de cacau super aerada e úmida e ingredientes selecionados a dedo." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Cenoura" image={muffinCenoura} image2={muffinCenoura} description="Esse clássico de massa fofinha é feito com cenoura de verdade, ovos caipira, e finalizado com muitas gotas de chocolate." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Banana Bread" image={muffinBananaBread} image2={muffinBananaBread} description="Do Texas para sua mesa, essa receita tipicamente americana tem massa úmida, aromática e pedaços de banana." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Napolitano" image={muffinNapolitano} image2={muffinNapolitano} description="Irresistível combinação entre queijo, tomate e manjericão em uma massa que desmancha na boca." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            {/* Duplicated items for carousel effect */}
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Noz" image={tarteleteMariaNoz2} image2={tarteleteMariaNoz1} description="Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Tereza" image={tarteleteMariaTeresa2} image2={tarteleteMariaTeresa1} description="Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Tartelete Maria Carmela" image={tarteleteMariaCarmelaB2B2} image2={tarteleteMariaCarmelaB2B1} description="Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar." weight="80g" details="Para restaurantes, cafeterias, bistrôs: Tartelete congelada e embalada individualmente. Caixa com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Caramelo Salgado" image={caramelo2} image2={caramelo1} description="Caramelo salgado cremoso com flor de sal servido como acompanhamento de um café, como cobertura extra em outras sobremesas ou em combinações com vários tipos de queijos e castanhas." weight="230g" details="Para restaurantes, cafeterias, bistrôs e mercados: embalagem de vidro 230g." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Black Cake" image={muffinBlackCake} image2={muffinBlackCake} description="Receita exclusiva Maria Noz, com massa de cacau super aerada e úmida e ingredientes selecionados a dedo." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Cenoura" image={muffinCenoura} image2={muffinCenoura} description="Esse clássico de massa fofinha é feito com cenoura de verdade, ovos caipira, e finalizado com muitas gotas de chocolate." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Banana Bread" image={muffinBananaBread} image2={muffinBananaBread} description="Do Texas para sua mesa, essa receita tipicamente americana tem massa úmida, aromática e pedaços de banana." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Muffin Napolitano" image={muffinNapolitano} image2={muffinNapolitano} description="Irresistível combinação entre queijo, tomate e manjericão em uma massa que desmancha na boca." weight="100g" details="Para mercados, empórios, cantinas, cafeterias: Muffin congelado e embalado individualmente. Embalagem com 12 unidades." />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white border-gray-300 text-gray-700 hover:text-gray-900 shadow-lg" />
          <CarouselNext className="right-2 md:-right-12 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white border-gray-300 text-gray-700 hover:text-gray-900 shadow-lg" />
          <CarouselDots />
        </Carousel>
      </div>
    </Section>

    {/* Events Section */}
    <Section id="eventos" style={{ backgroundColor: '#F4EACC' }}>
      <div className="space-y-16">
        {/* Events Title and Subtitle */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl lg:text-3xl font-lecmer font-black tracking-widest text-center" style={{ color: '#591B2B' }}>
            Maria Noz Buffet e Eventos
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto font-oswald tracking-wide text-center">
            A linha Bocado é a escolha ideal para transformar eventos em experiências memoráveis.
          </p>
        </div>

        {/* Events Carousel */}
        <Carousel className="w-full max-w-6xl mx-auto px-4" opts={{
          align: "start",
          loop: true
        }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Noz" image={bocadoMariaNoz2} image2={bocadoMariaNoz1} description="Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Tereza" image={bocadoMariaTeresa2} image2={bocadoMariaTeresa1} description="Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Carmela" image={mariaCarmela2} image2={mariaCarmela1} description="Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Caramelo Salgado" image={caramelo2} image2={caramelo1} description="Caramelo salgado cremoso com flor de sal servido como acompanhamento de um café, como cobertura extra em outras sobremesas ou em combinações com vários tipos de queijos e castanhas." weight="230g" details="Apresentação: embalagem de vidro 230g." />
            </CarouselItem>

            {/* Duplicated items for carousel effect */}
            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Noz" image={bocadoMariaNoz2} image2={bocadoMariaNoz1} description="Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Tereza" image={bocadoMariaTeresa2} image2={bocadoMariaTeresa1} description="Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Bocado Maria Carmela" image={mariaCarmela2} image2={mariaCarmela1} description="Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar." weight="30g" details="Apresentação: Tartelete congelada em caixa com 48 unidades." />
            </CarouselItem>

            <CarouselItem className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/4">
              <ProductCard name="Caramelo Salgado" image={caramelo2} image2={caramelo1} description="Caramelo salgado cremoso com flor de sal servido como acompanhamento de um café, como cobertura extra em outras sobremesas ou em combinações com vários tipos de queijos e castanhas." weight="230g" details="Apresentação: embalagem de vidro 230g." />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white border-gray-300 text-gray-700 hover:text-gray-900 shadow-lg" />
          <CarouselNext className="right-2 md:-right-12 top-1/2 -translate-y-1/2 h-8 w-8 bg-white/90 hover:bg-white border-gray-300 text-gray-700 hover:text-gray-900 shadow-lg" />
          <CarouselDots />
        </Carousel>
      </div>
    </Section>

    {/* Academy Section */}
    <Section id="academy" className="relative pb-16 lg:pb-24" style={{ backgroundColor: '#F4EACC' }}>
      <div className="absolute inset-0 bg-gradient-radial opacity-30" />

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24 relative z-10">
        <div className="order-2 lg:order-1 relative">
          <video
            src="https://pub-f8e6505451754de18818f9d0642315af.r2.dev/angelicaaa.mp4"
            className="relative w-full h-[500px] object-cover rounded-3xl shadow-elegant border border-white/20"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="order-1 lg:order-2 space-y-8 animate-fade-in-up">
          <h2 className="text-2xl lg:text-3xl font-lecmer font-black leading-tight tracking-widest" style={{ color: '#591B2B' }}>
            ACADEMY
          </h2>

          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-oswald tracking-wide">
            <p>
              Experiência exclusiva para quem busca ir além!
            </p>

            <p>
              Mais do que fornecer produtos, oferecemos soluções que impulsionam o crescimento do seu negócio, fortalecem sua marca e encantam seus clientes.
            </p>

            <p>
              Aqui, acreditamos no poder de compartilhar conhecimento e construir parcerias duradouras, contribuindo para que você prospere com confiança, elegância e autenticidade em cada criação.
            </p>

            <p>
              Escolher nossa empresa é investir em excelência, resultados e diferenciação para o seu negócio.
            </p>
          </div>
        </div>
      </div>
    </Section>

    {/* Contact Section */}
    <Footer />

    {/* Floating WhatsApp Button */}
    <a
      href="https://wa.me/5511998138094?text=Ol%C3%A1%2C%20Maria%20Noz!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 text-cream rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:opacity-90"
      style={{ backgroundColor: '#591B2B' }}
      aria-label="Fale conosco no WhatsApp"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  </div>;
};
export default Index;