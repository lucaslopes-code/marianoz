import { useState } from "react";
import { X, Download } from "lucide-react";
import catalogoPdf from "@/assets/Catálogo Maria Noz 2026.pdf";

interface CatalogDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  razaoSocial: string;
  cnpj: string;
  email: string;
  telefone: string;
}

interface FormErrors {
  razaoSocial?: string;
  cnpj?: string;
  email?: string;
  telefone?: string;
}

const formatCNPJ = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  return numbers
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
};

const formatPhone = (value: string): string => {
  const numbers = value.replace(/\D/g, "");
  if (numbers.length <= 10) {
    return numbers
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .slice(0, 14);
  }
  return numbers
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
};

const validateCNPJ = (cnpj: string): boolean => {
  const numbers = cnpj.replace(/\D/g, "");
  return numbers.length === 14;
};

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, "");
  return numbers.length >= 10 && numbers.length <= 11;
};

export const CatalogDownloadModal = ({ isOpen, onClose }: CatalogDownloadModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    razaoSocial: "",
    cnpj: "",
    email: "",
    telefone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "cnpj") {
      formattedValue = formatCNPJ(value);
    } else if (name === "telefone") {
      formattedValue = formatPhone(value);
    }

    setFormData((prev) => ({ ...prev, [name]: formattedValue }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.razaoSocial.trim()) {
      newErrors.razaoSocial = "Razão Social é obrigatória";
    }

    if (!formData.cnpj.trim()) {
      newErrors.cnpj = "CNPJ é obrigatório";
    } else if (!validateCNPJ(formData.cnpj)) {
      newErrors.cnpj = "CNPJ inválido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.telefone.trim()) {
      newErrors.telefone = "Telefone é obrigatório";
    } else if (!validatePhone(formData.telefone)) {
      newErrors.telefone = "Telefone inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Send data to Google Sheets using URL params (works with no-cors)
      const params = new URLSearchParams({
        razaoSocial: formData.razaoSocial,
        cnpj: formData.cnpj,
        email: formData.email,
        telefone: formData.telefone,
      });

      await fetch(
        `https://script.google.com/macros/s/AKfycbxys990VWj4B2X0YHCYPC6KBMyKL7zd289R_JGyGJIXva7uner-6jRGBmqudllt0up8/exec?${params.toString()}`,
        {
          method: "GET",
          mode: "no-cors",
        }
      );

      // Trigger download
      const link = document.createElement("a");
      link.href = catalogoPdf;
      link.download = "Catálogo Maria Noz 2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Reset form and close modal
      setFormData({ razaoSocial: "", cnpj: "", email: "", telefone: "" });
      onClose();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      // Still allow download even if sheet fails
      const link = document.createElement("a");
      link.href = catalogoPdf;
      link.download = "Catálogo Maria Noz 2026.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md rounded-2xl shadow-2xl animate-in fade-in zoom-in duration-200"
        style={{ backgroundColor: "#F4EACC" }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" style={{ color: "#591B2B" }} />
        </button>

        {/* Header */}
        <div className="p-6 pb-4">
          <h2
            className="text-xl font-lecmer font-black tracking-wide"
            style={{ color: "#591B2B" }}
          >
            Baixar Catálogo
          </h2>
          <p className="text-sm text-muted-foreground mt-1 font-oswald">
            Preencha os dados para fazer o download
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          {/* Razão Social */}
          <div>
            <label
              htmlFor="razaoSocial"
              className="block text-sm font-medium mb-1.5 font-oswald"
              style={{ color: "#591B2B" }}
            >
              Razão Social
            </label>
            <input
              type="text"
              id="razaoSocial"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white/80 font-oswald text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.razaoSocial
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-[#591B2B]/20 focus:border-[#591B2B]"
              }`}
              placeholder="Nome da empresa"
            />
            {errors.razaoSocial && (
              <p className="text-red-500 text-xs mt-1">{errors.razaoSocial}</p>
            )}
          </div>

          {/* CNPJ */}
          <div>
            <label
              htmlFor="cnpj"
              className="block text-sm font-medium mb-1.5 font-oswald"
              style={{ color: "#591B2B" }}
            >
              CNPJ
            </label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white/80 font-oswald text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.cnpj
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-[#591B2B]/20 focus:border-[#591B2B]"
              }`}
              placeholder="00.000.000/0000-00"
            />
            {errors.cnpj && (
              <p className="text-red-500 text-xs mt-1">{errors.cnpj}</p>
            )}
          </div>

          {/* E-mail */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1.5 font-oswald"
              style={{ color: "#591B2B" }}
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white/80 font-oswald text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-[#591B2B]/20 focus:border-[#591B2B]"
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Telefone */}
          <div>
            <label
              htmlFor="telefone"
              className="block text-sm font-medium mb-1.5 font-oswald"
              style={{ color: "#591B2B" }}
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border bg-white/80 font-oswald text-sm transition-colors focus:outline-none focus:ring-2 ${
                errors.telefone
                  ? "border-red-400 focus:ring-red-200"
                  : "border-gray-300 focus:ring-[#591B2B]/20 focus:border-[#591B2B]"
              }`}
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && (
              <p className="text-red-500 text-xs mt-1">{errors.telefone}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3 px-4 rounded-lg font-oswald font-medium text-white transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-70"
            style={{ backgroundColor: "#591B2B" }}
          >
            {isSubmitting ? (
              <span>Processando...</span>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Baixar Catálogo</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
