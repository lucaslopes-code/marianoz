import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

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

interface NutritionalRow {
  nutrient: string;
  per100g: string;
  perPortion: string;
  vd: string;
  isIndented?: boolean;
}

interface NutritionalInfo {
  portionPerPackage: string;
  portionSize: string;
  portionWeight: string;
  rows: NutritionalRow[];
}

interface ProductDetail {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  weight: string;
  image: string;
  ingredients: string;
  allergens: string;
  contains: string;
  packagingInfo?: string;
  nutritionalInfo: NutritionalInfo;
}

// Dados dos produtos - será preenchido com as informações reais
const productsData: Record<string, ProductDetail> = {
  "tartelete-maria-noz": {
    id: "tartelete-maria-noz",
    name: "Tartelete Maria Noz",
    subtitle: "Tartelete de Noz Pecã",
    description: "Nossa icônica tartelete de noz pecã com massa amanteigada e recheio caramelizado. Uma explosão de sabor em cada mordida.",
    weight: "80g",
    image: tarteleteMariaNoz1,
    ingredients: "Farinha de trigo enriquecida com ferro e ácido fólico, ovo de galinha, noz pecan, manteiga sem sal, açúcar de confeiteiro, açúcar mascavo, castanha de caju, mel, extrato de baunilha, canela em pó, sal refinado.",
    allergens: "ALÉRGICOS: CONTÉM CANELA, CASTANHA-DE-CAJU, LEITE, NOZES, OVOS, PODE CONTER AMÊNDOAS, AMENDOIM, AVELÃ, MACADÂMIA.",
    contains: "CONTÉM LACTOSE. CONTÉM GLÚTEN.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "2 porções",
      portionSize: "80g (1 unidade)",
      portionWeight: "80 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "473", perPortion: "378", vd: "19" },
        { nutrient: "Carboidratos (g)", per100g: "55", perPortion: "44", vd: "15" },
        { nutrient: "Açúcares totais (g)", per100g: "23", perPortion: "18", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "21", perPortion: "17", vd: "34", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "8,3", perPortion: "6,7", vd: "13" },
        { nutrient: "Gorduras totais (g)", per100g: "31", perPortion: "25", vd: "38" },
        { nutrient: "Gorduras saturadas (g)", per100g: "11", perPortion: "8,9", vd: "45", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "0", perPortion: "0", vd: "0", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "2,8", perPortion: "2,3", vd: "9" },
        { nutrient: "Sódio (mg)", per100g: "116", perPortion: "93", vd: "5" },
      ]
    }
  },
  "tartelete-maria-tereza": {
    id: "tartelete-maria-tereza",
    name: "Tartelete Maria Tereza",
    subtitle: "Tartelete de Chocolate com Avelã",
    description: "A combinação perfeita de chocolate intenso com avelãs crocantes em uma massa artesanal.",
    weight: "80g",
    image: tarteleteMariaTeresa1,
    ingredients: "A definir conforme tabela nutricional.",
    allergens: "ALÉRGICOS: CONTÉM AVELÃ, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "80g (1 unidade)",
      portionWeight: "80 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "tartelete-maria-carmela": {
    id: "tartelete-maria-carmela",
    name: "Tartelete Maria Carmela",
    subtitle: "Tartelete de Caramelo Salgado",
    description: "Caramelo salgado cremoso sobre massa crocante. O equilíbrio perfeito entre doce e salgado.",
    weight: "80g",
    image: tarteleteMariaCarmelaB2B1,
    ingredients: "A definir conforme tabela nutricional.",
    allergens: "ALÉRGICOS: CONTÉM LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "80g (1 unidade)",
      portionWeight: "80 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "muffin-black-cake": {
    id: "muffin-black-cake",
    name: "Muffin Black Cake",
    subtitle: "Muffin de Chocolate",
    description: "Receita exclusiva Maria Noz, com massa de cacau super aerada e úmida e ingredientes selecionados a dedo.",
    weight: "100g",
    image: muffinBlackCake,
    ingredients: "Receita exclusiva Maria Noz, com massa de cacau super aerada e úmida e ingredientes selecionados a dedo.",
    allergens: "ALÉRGICOS: CONTÉM OVOS, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "100g (1 unidade)",
      portionWeight: "100 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "muffin-cenoura": {
    id: "muffin-cenoura",
    name: "Muffin Cenoura",
    subtitle: "Muffin de Cenoura com Gotas de Chocolate",
    description: "Esse clássico de massa fofinha é feito com cenoura de verdade, ovos caipira, e finalizado com muitas gotas de chocolate.",
    weight: "100g",
    image: muffinCenoura,
    ingredients: "Esse clássico de massa fofinha é feito com cenoura de verdade, ovos caipira, e finalizado com muitas gotas de chocolate.",
    allergens: "ALÉRGICOS: CONTÉM OVOS, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "100g (1 unidade)",
      portionWeight: "100 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "muffin-banana-bread": {
    id: "muffin-banana-bread",
    name: "Muffin Banana Bread",
    subtitle: "Muffin de Banana",
    description: "Do Texas para sua mesa, essa receita tipicamente americana tem massa úmida, aromática e pedaços de banana.",
    weight: "100g",
    image: muffinBananaBread,
    ingredients: "Do Texas para sua mesa, essa receita tipicamente americana tem massa úmida, aromática e pedaços de banana.",
    allergens: "ALÉRGICOS: CONTÉM OVOS, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "100g (1 unidade)",
      portionWeight: "100 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "muffin-napolitano": {
    id: "muffin-napolitano",
    name: "Muffin Napolitano",
    subtitle: "Muffin Salgado",
    description: "Irresistível combinação entre queijo, tomate e manjericão em uma massa que desmancha na boca.",
    weight: "100g",
    image: muffinNapolitano,
    ingredients: "Irresistível combinação entre queijo, tomate e manjericão em uma massa que desmancha na boca.",
    allergens: "ALÉRGICOS: CONTÉM OVOS, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Embalagem com 12 unidades.",
    nutritionalInfo: {
      portionPerPackage: "12 porções",
      portionSize: "100g (1 unidade)",
      portionWeight: "100 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "bocado-maria-noz": {
    id: "bocado-maria-noz",
    name: "Bocado Maria Noz",
    subtitle: "Mini Tartelete de Noz Pecã",
    description: "Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias. Perfeito para eventos.",
    weight: "30g",
    image: bocadoMariaNoz1,
    ingredients: "Massa finíssima amanteigada, recheio 100% noz pecã, e muitas especiarias.",
    allergens: "ALÉRGICOS: CONTÉM NOZES E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN.",
    packagingInfo: "Caixa com 48 unidades.",
    nutritionalInfo: {
      portionPerPackage: "48 porções",
      portionSize: "30g (1 unidade)",
      portionWeight: "30 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "bocado-maria-tereza": {
    id: "bocado-maria-tereza",
    name: "Bocado Maria Tereza",
    subtitle: "Mini Tartelete de Chocolate com Avelã",
    description: "Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar. Perfeito para eventos.",
    weight: "30g",
    image: bocadoMariaTeresa1,
    ingredients: "Massa finíssima sabor chocolate, ganache blend de chocolate ao leite e meio amargo e avelã tostada para finalizar.",
    allergens: "ALÉRGICOS: CONTÉM AVELÃ, LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Caixa com 48 unidades.",
    nutritionalInfo: {
      portionPerPackage: "48 porções",
      portionSize: "30g (1 unidade)",
      portionWeight: "30 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "bocado-maria-carmela": {
    id: "bocado-maria-carmela",
    name: "Bocado Maria Carmela",
    subtitle: "Mini Tartelete de Caramelo Salgado",
    description: "Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar. Perfeito para eventos.",
    weight: "30g",
    image: mariaCarmela1,
    ingredients: "Massa finíssima amanteigada, recheio três leites, e cobertura de caramelo salgado para finalizar.",
    allergens: "ALÉRGICOS: CONTÉM LEITE E DERIVADOS DE TRIGO.",
    contains: "CONTÉM GLÚTEN E LACTOSE.",
    packagingInfo: "Caixa com 48 unidades.",
    nutritionalInfo: {
      portionPerPackage: "48 porções",
      portionSize: "30g (1 unidade)",
      portionWeight: "30 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Carboidratos (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Açúcares totais (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras totais (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Gorduras saturadas (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "-", perPortion: "-", vd: "-", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "-", perPortion: "-", vd: "-" },
        { nutrient: "Sódio (mg)", per100g: "-", perPortion: "-", vd: "-" },
      ]
    }
  },
  "caramelo-salgado": {
    id: "caramelo-salgado",
    name: "Caramelo Salgado",
    subtitle: "Caramelo Salgado Cremoso",
    description: "Nosso caramelo salgado artesanal, cremoso e irresistível. Perfeito para acompanhar sobremesas ou comer de colher.",
    weight: "230g",
    image: caramelo1,
    ingredients: "Açúcar refinado, creme de leite, manteiga sem sal, sal refinado, sorbato de potássio, lactato de sódio.",
    allergens: "ALÉRGICOS: CONTÉM DERIVADOS DO LEITE, LEITE, PODE CONTER AVELÃ, CASTANHA-DE-CAJU, NOZES.",
    contains: "CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN.",
    packagingInfo: "Embalagem de vidro 230g.",
    nutritionalInfo: {
      portionPerPackage: "Cerca de 11 porções",
      portionSize: "20g (1 colher de sopa)",
      portionWeight: "20 g",
      rows: [
        { nutrient: "Valor energético (kcal)", per100g: "451", perPortion: "90", vd: "5" },
        { nutrient: "Carboidratos (g)", per100g: "65", perPortion: "13", vd: "4" },
        { nutrient: "Açúcares totais (g)", per100g: "65", perPortion: "13", vd: "-", isIndented: true },
        { nutrient: "Açúcares adicionados (g)", per100g: "63", perPortion: "13", vd: "26", isIndented: true },
        { nutrient: "Proteínas (g)", per100g: "1,4", perPortion: "0,3", vd: "1" },
        { nutrient: "Gorduras totais (g)", per100g: "21", perPortion: "4,2", vd: "6" },
        { nutrient: "Gorduras saturadas (g)", per100g: "14", perPortion: "2,8", vd: "14", isIndented: true },
        { nutrient: "Gorduras trans (g)", per100g: "0", perPortion: "0", vd: "0", isIndented: true },
        { nutrient: "Fibras alimentares (g)", per100g: "0", perPortion: "0", vd: "0" },
        { nutrient: "Sódio (mg)", per100g: "282", perPortion: "56", vd: "3" },
      ]
    }
  },
};

// Lista de produtos para seção relacionados
const productsList = Object.values(productsData);

const ProdutoDetalhe = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? productsData[id] : null;

  // Pegar produtos relacionados (excluindo o atual, máximo 4)
  const relatedProducts = productsList
    .filter(p => p.id !== id)
    .slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#F4EACC' }}>
        <Navigation />
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4" style={{ color: '#591B2B' }}>
              Produto não encontrado
            </h1>
            <Link to="/produtos" className="text-accent hover:underline">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F4EACC' }}>
      <Navigation />

      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Link
            to="/produtos"
            className="inline-flex items-center text-sm font-oswald font-medium mb-8 hover:opacity-70 transition-opacity tracking-wide"
            style={{ color: '#591B2B' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao catálogo
          </Link>

          {/* Product Header */}
          <div className="card-luxury overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Weight Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-white/70 backdrop-blur-md text-sm font-bold text-accent px-3 py-2 rounded-full shadow-glow border border-accent/30">
                    {product.weight}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col justify-center p-6 md:p-8">
                <h1 className="text-2xl md:text-3xl font-lecmer font-black tracking-widest mb-4" style={{ color: '#591B2B' }}>
                  {product.name}
                </h1>

                <p className="font-oswald text-muted-foreground leading-relaxed tracking-wide mb-6">
                  {product.description}
                </p>

                {/* Mais informações link */}
                <button
                  onClick={() => {
                    const element = document.getElementById('informacoes-nutricionais');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="font-oswald font-semibold tracking-wide underline underline-offset-4 text-left mb-6 hover:opacity-70 transition-opacity"
                  style={{ color: '#591B2B' }}
                >
                  Mais informações
                </button>

                {/* WhatsApp Buy Button */}
                <p className="text-sm font-oswald text-muted-foreground mb-3 tracking-wide">
                  Clique no botão abaixo para comprar.
                </p>
                <a
                  href={`https://wa.me/5511998138094?text=${encodeURIComponent(`Olá, Maria Noz! Vim pelo site e gostaria de comprar: ${product.name} ${product.weight}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 font-oswald font-semibold tracking-wide px-6 py-3 rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105 w-fit"
                  style={{ backgroundColor: '#591B2B', color: '#F4EACC' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Comprar no Whatsapp
                </a>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div className="card-luxury p-6 md:p-8 mb-8">
            <h2 className="text-xl font-lecmer font-black tracking-widest mb-6" style={{ color: '#591B2B' }}>
              Descrição
            </h2>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="font-oswald font-semibold tracking-wide mb-2" style={{ color: '#591B2B' }}>Ingredientes:</h3>
              <p className="font-oswald text-muted-foreground leading-relaxed tracking-wide">{product.ingredients}</p>
            </div>

            {/* Allergens */}
            <div className="space-y-2">
              <p className="font-oswald font-semibold tracking-wide" style={{ color: '#591B2B' }}>{product.allergens}</p>
              <p className="font-oswald font-semibold tracking-wide" style={{ color: '#591B2B' }}>{product.contains}</p>
            </div>
          </div>

          {/* Nutritional Information */}
          <div id="informacoes-nutricionais" className="card-luxury p-6 md:p-8 scroll-mt-32">
            <div className="border border-accent/20 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="p-4 border-b border-accent/20" style={{ backgroundColor: '#591B2B' }}>
                <h2 className="text-lg font-lecmer font-black tracking-widest text-cream">INFORMAÇÃO NUTRICIONAL</h2>
              </div>

              {/* Portion Info */}
              <div className="p-4 border-b border-accent/20">
                <p className="text-sm font-oswald text-muted-foreground tracking-wide">
                  Porção por embalagem: {product.nutritionalInfo.portionPerPackage}
                </p>
                <p className="text-sm font-oswald text-muted-foreground mt-1 tracking-wide">
                  Porção: {product.nutritionalInfo.portionSize}
                </p>
              </div>

              {/* Nutritional Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-accent/20" style={{ backgroundColor: 'rgba(89, 27, 43, 0.05)' }}>
                      <th className="text-left p-4 font-oswald font-semibold tracking-wide" style={{ color: '#591B2B' }}></th>
                      <th className="text-center p-4 font-oswald font-semibold tracking-wide min-w-[80px]" style={{ color: '#591B2B' }}>100 g</th>
                      <th className="text-center p-4 font-oswald font-semibold tracking-wide min-w-[80px]" style={{ color: '#591B2B' }}>{product.nutritionalInfo.portionWeight}</th>
                      <th className="text-center p-4 font-oswald font-semibold tracking-wide min-w-[60px]" style={{ color: '#591B2B' }}>% VD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.nutritionalInfo.rows.map((row, index) => (
                      <tr key={index} className="border-b border-accent/10 last:border-b-0">
                        <td className={`p-4 font-oswald text-muted-foreground tracking-wide ${row.isIndented ? 'pl-8' : ''}`}>
                          {row.nutrient}
                        </td>
                        <td className="text-center p-4 font-oswald text-muted-foreground tracking-wide">{row.per100g}</td>
                        <td className="text-center p-4 font-oswald text-muted-foreground tracking-wide">{row.perPortion}</td>
                        <td className="text-center p-4 font-oswald text-muted-foreground tracking-wide">{row.vd}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Note */}
              <div className="p-4 border-t border-accent/20" style={{ backgroundColor: 'rgba(89, 27, 43, 0.05)' }}>
                <p className="text-xs font-oswald text-muted-foreground/70 tracking-wide">
                  * % Valores Diários de referência com base em uma dieta de 2.000 kcal.
                  Seus valores diários podem ser maiores ou menores, dependendo das suas necessidades energéticas.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          <div className="mt-16">
            {/* Separator Line */}
            <div className="w-full max-w-2xl mx-auto mb-12">
              <div className="h-px bg-accent/30"></div>
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-lecmer font-black tracking-widest text-center mb-10" style={{ color: '#591B2B' }}>
              Produtos relacionados
            </h2>

            {/* Products Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  to={`/produtos/${relatedProduct.id}`}
                  key={relatedProduct.id}
                  className="card-luxury overflow-hidden group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-sm md:text-base font-oswald font-semibold tracking-wide" style={{ color: '#591B2B' }}>
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs md:text-sm font-oswald text-muted-foreground mt-1">
                      {relatedProduct.weight}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
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
    </div>
  );
};

export default ProdutoDetalhe;
