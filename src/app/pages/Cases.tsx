import { motion as Motion } from "motion/react";
import { ExternalLink, FileText, Gavel, FileSignature } from "lucide-react";

export function Cases() {
  const cases = [
    /*{
      id: "1",
      title: "Recuperação Judicial - Indústria Metálica S.A.",
      number: "0012345-67.2023.8.07.0001",
      court: "1ª Vara de Falências e Recuperações Judiciais do DF",
      parties: "Indústria Metálica S.A. x Credores",
      status: "Em andamento",
      documents: [
        { name: "Edital de Convocação de Credores", date: "15 Fev 2024", link: "#" },
        { name: "Relatório Mensal de Atividades - Jan/2024", date: "10 Fev 2024", link: "#" },
        { name: "Decisão de Deferimento do Processamento", date: "20 Jan 2024", link: "#" }
      ]
    }*/,
    /*{
      id: "2",
      title: "Falência - Construtora Horizonte Ltda",
      number: "0098765-43.2022.8.07.0015",
      court: "Vara de Falências, Recuperações e Insolvência Civil",
      parties: "Massa Falida de Construtora Horizonte Ltda",
      status: "Fase de liquidação",
      documents: [
        { name: "Quadro Geral de Credores Consolidado", date: "05 Mar 2024", link: "#" },
        { name: "Auto de Arrecadação de Bens", date: "22 Dez 2023", link: "#" }
      ]
    }*/,
    /*{
      id: "3",
      title: "Perícia Grafotécnica - Ação Declaratória",
      number: "0701122-33.2023.8.07.0020",
      court: "3ª Vara Cível de Brasília",
      parties: "João da Silva x Banco Nacional S.A.",
      status: "Laudo Entregue",
      documents: [
        { name: "Laudo Pericial Grafotécnico", date: "28 Fev 2024", link: "#" },
        { name: "Termo de Encerramento dos Trabalhos", date: "01 Mar 2024", link: "#" }
      ]
    }*/
  ];

  return (
    <div className="w-full pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-[#0a1128] relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-5 pointer-events-none">
          <Gavel className="w-96 h-96" />
        </div>
        <div className="max-w-5xl mx-auto">
          <Motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="inline-flex items-center gap-2 border border-[#d4af37]/30 px-4 py-1.5 rounded-full w-fit bg-[#060a17]/50">
              <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
              <span className="text-[#d4af37] text-xs font-medium tracking-wider uppercase">Mural de Transparência</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#fdfbf7] mt-4">
              Administração Judicial
            </h1>
            <p className="text-[#fdfbf7]/70 text-lg font-light max-w-2xl mt-4">
              Acesso rápido a andamentos, relatórios mensais de atividades (RMA), quadros de credores e laudos periciais dos processos em destaque.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* Cases List */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {cases.map((caseItem, idx) => (
            <Motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#060a17] border border-[#fdfbf7]/10 p-6 md:p-8 rounded-sm hover:border-[#fdfbf7]/30 transition-colors"
            >
              {/* Case Header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 pb-8 border-b border-[#fdfbf7]/5">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 mb-2">
                    {caseItem.title.includes("Perícia") ? (
                      <FileSignature className="w-5 h-5 text-[#d4af37]" />
                    ) : (
                      <Gavel className="w-5 h-5 text-[#d4af37]" />
                    )}
                    <span className="text-xs text-[#d4af37] font-medium tracking-widest uppercase border border-[#d4af37]/20 px-2 py-0.5 rounded-sm">
                      {caseItem.status}
                    </span>
                  </div>
                  <h2 className="text-2xl font-['Playfair_Display',serif] text-[#fdfbf7]">
                    {caseItem.title}
                  </h2>
                  <div className="text-[#fdfbf7]/60 text-sm font-light space-y-1">
                    <p><strong className="font-medium text-[#fdfbf7]/80">Nº do Processo:</strong> {caseItem.number}</p>
                    <p><strong className="font-medium text-[#fdfbf7]/80">Juízo:</strong> {caseItem.court}</p>
                    <p><strong className="font-medium text-[#fdfbf7]/80">Partes:</strong> {caseItem.parties}</p>
                  </div>
                </div>
              </div>

              {/* Case Documents */}
              <div>
                <h3 className="text-[#fdfbf7]/90 text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#d4af37]" />
                  Peças & Documentos Importantes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseItem.documents.map((doc, i) => (
                    <a 
                      key={i} 
                      href={doc.link}
                      className="group flex items-center justify-between p-4 bg-[#0a1128] border border-[#fdfbf7]/5 hover:border-[#d4af37]/50 rounded-sm transition-all"
                    >
                      <div className="flex flex-col gap-1 pr-4">
                        <span className="text-[#fdfbf7] text-sm group-hover:text-[#d4af37] transition-colors line-clamp-2">
                          {doc.name}
                        </span>
                        <span className="text-xs text-[#fdfbf7]/40">
                          {doc.date}
                        </span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#fdfbf7]/30 group-hover:text-[#d4af37] shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
