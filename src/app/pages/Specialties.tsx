import { motion as Motion } from "motion/react";
import { CheckCircle2, ChevronRight, PenTool, BookOpen, Scale } from "lucide-react";

export function Specialties() {
  const specialties = [
    {
      category: "Perícia Grafotécnica e Documentoscópica",
      icon: <PenTool className="w-6 h-6 text-[#d4af37]" />,
      items: [
        "Análise de autenticidade de assinaturas",
        "Detecção de falsificações em documentos",
        "Exame de alterações documentais (rasuras, lavagens)",
        "Identificação de autoria de manuscritos",
        "Elaboração de Pareceres Técnicos Assistenciais",
        "Atuação como Assistente Técnica para partes"
      ]
    },
    {
      category: "Administração Judicial",
      icon: <BookOpen className="w-6 h-6 text-[#d4af37]" />,
      items: [
        "Gestão de Recuperações Judiciais",
        "Condução de Processos Falimentares",
        "Fiscalização das atividades do devedor",
        "Verificação de créditos",
        "Elaboração de relatórios mensais de atividades",
        "Realização do ativo e pagamento do passivo"
      ]
    },
    {
      category: "Áreas do Direito",
      icon: <Scale className="w-6 h-6 text-[#d4af37]" />,
      items: [
        "Direito Civil, Processo Civil, Direito Médico e da Saúde",
        "Lei Geral de Proteção de Dados - LGPD, Direito Notarial e Registral",
        "Direito Trabalhista, Processo Trabalhista e Direito Previdenciário",
        "Família, Sucessões, Direito Tributário e Processo Tributário"  
      ]
    }
  ];

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 border-b border-[#fdfbf7]/10 bg-[#060a17]">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-6"
          >
            Especialidades
          </Motion.h1>
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-[1px] bg-[#d4af37] mx-auto mb-6"
          />
          <Motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#fdfbf7]/70 max-w-2xl mx-auto font-light"
          >
            Atuação técnica e jurídica pautada pela excelência, ética e profundo conhecimento, 
            oferecendo soluções completas em perícia, administração Judicial e consultoria.
          </Motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {specialties.map((spec, idx) => (
              <Motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#fdfbf7]/10">
                  <div className="p-3 bg-[#060a17] border border-[#fdfbf7]/10 rounded-sm">
                    {spec.icon}
                  </div>
                  <h2 className="text-xl font-['Playfair_Display',serif] text-[#fdfbf7]">
                    {spec.category}
                  </h2>
                </div>
                
                <ul className="space-y-4 flex-grow">
                  {spec.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <ChevronRight className="w-5 h-5 text-[#d4af37]/70 shrink-0 mt-0.5 group-hover:text-[#d4af37] transition-colors" />
                      <span className="text-[#fdfbf7]/80 font-light text-sm leading-relaxed group-hover:text-[#fdfbf7] transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Interstitial Image */}
      <section className="max-w-7xl mx-auto px-4 mt-8">
        <Motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-64 md:h-96 w-full overflow-hidden border border-[#fdfbf7]/10"
        >
          <img 
            src="https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWduaW5nJTIwbGVnYWwlMjBkb2N1bWVudHxlbnwxfHx8fDE3NzM2NTgyODJ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Assinatura de documentos"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-50 transition-opacity duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center p-6 bg-gradient-to-t from-[#0a1128] via-transparent to-transparent">
            <p className="text-[#fdfbf7] font-['Playfair_Display',serif] text-2xl md:text-3xl italic font-light text-center drop-shadow-lg">
              "A verdade material revelada através da ciência e do direito."
            </p>
          </div>
        </Motion.div>
      </section>
    </div>
  );
}
