import { Phone, Mail, Instagram, Facebook } from "lucide-react";
import mariaNozSeloBeige from "@/assets/Maria_Noz_ selo bege.png";

export const Footer = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contato" className="text-cream relative py-12 lg:py-16" style={{ backgroundColor: '#591B2B' }}>
        <div className="absolute inset-0 bg-gradient-radial opacity-20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-start text-center">
            {/* Left Column - Contact Info */}
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-oswald font-bold text-cream uppercase tracking-wide text-center lg:text-left">CONTATO</h3>

              <div className="space-y-3">
                <div className="flex flex-col items-center lg:items-start gap-1">
                  <Phone className="h-5 w-5 text-caramel" />
                  <p className="text-sm font-oswald text-cream/70 uppercase tracking-wide text-center lg:text-left">TELEFONE</p>
                  <p className="text-cream font-oswald font-medium text-center lg:text-left">(11) 99813-8094</p>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-1 mt-4">
                  <Mail className="h-5 w-5 text-caramel" />
                  <p className="text-sm font-oswald text-cream/70 uppercase tracking-wide text-center lg:text-left">E-MAIL</p>
                  <p className="text-cream font-oswald font-medium text-center lg:text-left">marianoz.torteria@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Center Column - Social Media */}
            <div className="space-y-4 flex flex-col items-center lg:items-start">
              <h3 className="text-2xl font-oswald font-bold text-cream uppercase tracking-wide text-center lg:text-left">SIGA-NOS</h3>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <a href="https://www.instagram.com/marianoz.torteria?igsh=MWxja25kN2l6d2p6YQ==" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-caramel transition-colors duration-300">
                  <Instagram className="h-8 w-8" />
                </a>

                <a href="https://www.facebook.com/share/1FJuoeXiC9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-caramel transition-colors duration-300">
                  <Facebook className="h-8 w-8" />
                </a>

                <a href="https://www.tiktok.com/@marianoz.torteria" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-caramel transition-colors duration-300">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>

                <a href="https://open.spotify.com/user/31xzyqrkiw3fymfgyzqknij6lnte?si=9183924480804b79" target="_blank" rel="noopener noreferrer" className="text-cream hover:text-caramel transition-colors duration-300">
                  <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Large Maria Noz Seal */}
            <div className="flex flex-col items-center lg:items-end justify-center lg:justify-start">
              <div>
                <img
                  src={mariaNozSeloBeige}
                  alt="Por mais momentos felizes à mesa"
                  className="h-32 sm:h-36 lg:h-40 w-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <footer className="text-cream py-4 lg:pt-2 relative" style={{ backgroundColor: '#591B2B' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Frase Ebenézer */}
          <div className="text-center mb-4">
            <p className="text-sm lg:text-base tracking-widest font-lecmer text-center" style={{ color: '#F4EACC' }}>
              Uma empresa nascida da dedicação e da Graça. Ebenézer.
            </p>
          </div>

          {/* Divider line */}
          <div className="w-full h-px bg-cream/30 mb-3"></div>

          {/* Company info centered */}
          <div className="text-center">
            <div className="text-xs text-cream/70 font-oswald tracking-wide">
              <p className="text-center">
                Mais momentos felizes à mesa. © 2025. Todos os direitos reservados à MARIA NOZ TORTERIA.
              </p>
              <p className="mt-1 text-center">
                CNPJ sob o nº 62.517.697/0001-20.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
