import { Button } from "@/components/ui/button";
import { MessageCircle, ExternalLink } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-brand-navy to-blue-900">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            📌 Não perca nenhum detalhe da Turma #26!
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 max-w-2xl mx-auto mb-6">
            <p className="text-sm md:text-base text-white font-semibold">
              📅 <strong>Datas:</strong> 14, 15 e 16 de Outubro<br />
              🕗 <strong>Horário:</strong> 20h (todos os dias)
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-blue-100 mb-6 leading-relaxed">
            Entre agora no nosso Grupo VIP do WhatsApp para receber materiais exclusivos, 
            lembretes das aulas e conteúdos bônus.
          </p>
        </div>

        <Button 
          size="lg" 
          variant="cta"
          className="text-sm md:text-base px-4 md:px-6 max-w-xs mx-auto"
          asChild
        >
          <a 
            href="https://chat.whatsapp.com/CXSEcmaHhG47k0AJervAbQ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 md:gap-3"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span>Quero entrar no Grupo VIP</span>
            <ExternalLink className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
          </a>
        </Button>

        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-blue-100">
            ✨ <strong>Acesso exclusivo</strong> a materiais complementares, discussões em grupo e suporte direto dos instrutores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;