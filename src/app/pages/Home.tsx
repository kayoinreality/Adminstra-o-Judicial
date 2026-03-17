import { motion as Motion } from "motion/react";
import { ArrowRight, Award, FileSearch, Scale } from "lucide-react";
import { Link } from "react-router";

export function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBvZiUyMGp1c3RpY2V8ZW58MXx8fHwxNzczNjEzNTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Balança da Justiça"  
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128]/90 via-[#0a1128]/70 to-[#0a1128] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 max-w-4xl"
          >
            <div className="inline-block border border-[#d4af37]/30 px-6 py-2 rounded-full backdrop-blur-sm bg-[#0a1128]/50 mb-4">
              <span className="text-[#d4af37] text-sm tracking-[0.2em] uppercase font-medium">
                Excelência Jurídica & Pericial
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display',serif] text-[#fdfbf7] leading-tight font-normal">
              Amanda Silvestre Nascimento <br />
              {/* <span className="italic font-light text-[#fdfbf7]/90">Silvestre do Nascimento</span> */}
            </h1>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto my-8" />
            
            <p className="text-lg md:text-xl text-[#fdfbf7]/80 font-light max-w-2xl mx-auto leading-relaxed">
              Advogada Licenciada, Administradora Judicial, Perita Judicial, Grafotécnica e Documentoscópica. 
              Especialista em múltiplas áreas do Direito, com atuação em todo o território nacional.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/contato" 
                className="bg-[#fdfbf7] text-[#0a1128] px-8 py-4 rounded-sm font-medium tracking-wide hover:bg-[#d4af37] hover:text-[#0a1128] transition-all duration-300 flex items-center gap-2"
              >
                Agendar Consulta
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/especialidades" 
                className="border border-[#fdfbf7]/30 text-[#fdfbf7] px-8 py-4 rounded-sm font-medium tracking-wide hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300"
              >
                Conheça as Especialidades
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-24 bg-[#0a1128] relative border-t border-[#fdfbf7]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-4">
              Atuação Profissional
            </h2>
            <div className="w-12 h-[1px] bg-[#d4af37] mx-auto" />
          </Motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Scale className="w-8 h-8 text-[#d4af37]" strokeWidth={1} />,
                title: "Atuação Especializada",
                desc: "Perícia Judicial e Extrajudicial | Administração Judicial | Perícia Grafotécnica | Documentoscopia | Consultoria"
              },
              {
                icon: <FileSearch className="w-8 h-8 text-[#d4af37]" strokeWidth={1} />,
                title: "Perícia Grafotécnica e Documentoscópica",
                desc: "Análise minuciosa e científica de assinaturas e escritas manuais para determinação de autenticidade ou falsidade com emissão de laudos rigorosos."
              },
              {
                icon: <Award className="w-8 h-8 text-[#d4af37]" strokeWidth={1} />,
                title: "Atuação Nacional",
                desc: "Capacidade plena de atuação em todos os Estados da Federação e no Distrito Federal, garantindo acompanhamento direto onde você precisar."
              }
            ].map((item, i) => (
              <Motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="p-8 border border-[#fdfbf7]/10 bg-[#060a17]/50 hover:border-[#d4af37]/40 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {item.icon}
                </div>
                <div className="mb-6 inline-block p-4 border border-[#fdfbf7]/10 rounded-full bg-[#0a1128]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-4 group-hover:text-[#d4af37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#fdfbf7]/70 font-light leading-relaxed text-sm">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
