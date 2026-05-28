import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { CatalogDownloadModal } from "@/components/CatalogDownloadModal";

// Importar imagens dos produtos
import tarteleteMariaNoz1 from "@/assets/tarteletemarianoz1.jpg";
import tarteleteMariaTeresa1 from "@/assets/tarteletemariatereza1.jpg";
import tarteleteMariaCarmelaB2B1 from "@/assets/tarteletemariacamela1.jpg";
import caramelo1 from "@/assets/caramelo1.jpg";
import muffinBlackCake from "@/assets/Muffin Black cake.png";
import muffinCenoura from "@/assets/Muffin Cenoura.png";
import muffinBananaBread from "@/assets/Muffin Banana Bread.png";
import muffinNapolitano from "@/assets/Muffin Napolitano.png";
import bocadoMariaNoz1 from "@/assets/bocado Maria Noz1.jpg";
import bocadoMariaTeresa1 from "@/assets/bocadomariatereza1.jpg";
import mariaCarmela1 from "@/assets/mariacamela1.jpg";

interface Product {
  id: string;
  name: string;
  weight: string;
  image: string;
  category: string;
}

const products: Product[] = [
  // Tarteletes B2B
  {
    id: "tartelete-maria-noz",
    name: "Tartelete Maria Noz",
    weight: "80g",
    image: tarteleteMariaNoz1,
    category: "Tarteletes"
  },
  {
    id: "tartelete-maria-tereza",
    name: "Tartelete Maria Tereza",
    weight: "80g",
    image: tarteleteMariaTeresa1,
    category: "Tarteletes"
  },
  {
    id: "tartelete-maria-carmela",
    name: "Tartelete Maria Carmela",
    weight: "80g",
    image: tarteleteMariaCarmelaB2B1,
    category: "Tarteletes"
  },
  // Muffins
  {
    id: "muffin-black-cake",
    name: "Muffin Black Cake",
    weight: "100g",
    image: muffinBlackCake,
    category: "Muffins"
  },
  {
    id: "muffin-cenoura",
    name: "Muffin Cenoura",
    weight: "100g",
    image: muffinCenoura,
    category: "Muffins"
  },
  {
    id: "muffin-banana-bread",
    name: "Muffin Banana Bread",
    weight: "100g",
    image: muffinBananaBread,
    category: "Muffins"
  },
  {
    id: "muffin-napolitano",
    name: "Muffin Napolitano",
    weight: "100g",
    image: muffinNapolitano,
    category: "Muffins"
  },
  // Bocados (Eventos)
  {
    id: "bocado-maria-noz",
    name: "Bocado Maria Noz",
    weight: "30g",
    image: bocadoMariaNoz1,
    category: "Bocados"
  },
  {
    id: "bocado-maria-tereza",
    name: "Bocado Maria Tereza",
    weight: "30g",
    image: bocadoMariaTeresa1,
    category: "Bocados"
  },
  {
    id: "bocado-maria-carmela",
    name: "Bocado Maria Carmela",
    weight: "30g",
    image: mariaCarmela1,
    category: "Bocados"
  },
  // Outros
  {
    id: "caramelo-salgado",
    name: "Caramelo Salgado",
    weight: "230g",
    image: caramelo1,
    category: "Acompanhamentos"
  },
];

const Produtos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4EACC' }}>
      <Navigation />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-oswald font-medium mb-6 hover:opacity-70 transition-opacity tracking-wide"
              style={{ color: '#591B2B' }}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao início
            </Link>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <h1 className="text-2xl lg:text-3xl font-lecmer font-black tracking-widest" style={{ color: '#591B2B' }}>
                Catálogo de Produtos
              </h1>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-oswald font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#591B2B' }}
              >
                <Download className="w-4 h-4" />
                Baixar Catálogo PDF
              </button>
            </div>
            <p className="text-lg text-muted-foreground font-oswald tracking-wide">
              Conheça nossa linha completa de produtos artesanais
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Link
                to={`/produtos/${product.id}`}
                key={product.id}
                className="card-luxury overflow-hidden group relative flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative flex-shrink-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Weight Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-white/70 backdrop-blur-md text-sm font-bold text-accent px-3 py-2 rounded-full shadow-glow border border-accent/30">
                      {product.weight}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <div className="px-1 sm:px-3">
                    <h3 className="text-sm sm:text-base font-bold text-foreground text-left">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

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

      {/* Catalog Download Modal */}
      <CatalogDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Produtos;
