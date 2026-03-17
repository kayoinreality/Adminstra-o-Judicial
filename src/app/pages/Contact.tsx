import { motion as Motion } from "motion/react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  return (
    <div className="w-full pb-24 flex-grow flex flex-col">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 bg-[#0a1128] border-b border-[#fdfbf7]/5">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-6"
          >
            Contato
          </Motion.h1>
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 h-[1px] bg-[#d4af37] mx-auto"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <Motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-2xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-6">
                Informações de Atendimento
              </h2>
              <p className="text-[#fdfbf7]/70 font-light mb-8">
                Estamos à disposição para agendar reuniões presenciais ou por videoconferência. 
                Entre em contato pelos canais abaixo para discutir seu caso.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#060a17] border border-[#fdfbf7]/10 rounded-sm shrink-0">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-[#fdfbf7] font-medium mb-1">Telefones</h3>
                  <p className="text-[#fdfbf7]/60 text-sm font-light">(62) 99573-0027 (WhatsApp)</p>
                  <p className="text-[#fdfbf7]/60 text-sm font-light">(62) 99545-9262</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#060a17] border border-[#fdfbf7]/10 rounded-sm shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-[#fdfbf7] font-medium mb-1">E-mail</h3>
                  <p className="text-[#fdfbf7]/60 text-sm font-light">amandagbry@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#060a17] border border-[#fdfbf7]/10 rounded-sm shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-[#fdfbf7] font-medium mb-1">Endereço Principal</h3>
                  <p className="text-[#fdfbf7]/60 text-sm font-light leading-relaxed">
                    Rua 6, 448<br />
                  Guarujá Park, Trindade - GO<br />
                  CEP: 75392-867
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#060a17] border border-[#fdfbf7]/10 rounded-sm shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-[#fdfbf7] font-medium mb-1">Horário de Funcionamento</h3>
                  <p className="text-[#fdfbf7]/60 text-sm font-light">Segunda a Sexta, das 09:00 às 18:00</p>
                  <p className="text-[#fdfbf7]/60 text-sm font-light italic mt-1">Atendimento mediante agendamento.</p>
                </div>
              </div>
            </div>
          </Motion.div>

          {/* Form Side */}
          <Motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#060a17] border border-[#fdfbf7]/10 p-8 rounded-sm"
          >
            <h2 className="text-2xl font-['Playfair_Display',serif] text-[#fdfbf7] mb-8">
              Envie uma Mensagem
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#fdfbf7]/80 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#0a1128] border border-[#fdfbf7]/20 rounded-sm px-4 py-3 text-[#fdfbf7] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#fdfbf7]/30"
                  placeholder="Seu nome"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#fdfbf7]/80 mb-2">E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#0a1128] border border-[#fdfbf7]/20 rounded-sm px-4 py-3 text-[#fdfbf7] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#fdfbf7]/30"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#fdfbf7]/80 mb-2">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-[#0a1128] border border-[#fdfbf7]/20 rounded-sm px-4 py-3 text-[#fdfbf7] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#fdfbf7]/30"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#fdfbf7]/80 mb-2">Assunto</label>
                <select 
                  id="subject" 
                  className="w-full bg-[#0a1128] border border-[#fdfbf7]/20 rounded-sm px-4 py-3 text-[#fdfbf7] focus:outline-none focus:border-[#d4af37] transition-colors appearance-none"
                >
                  <option value="">Selecione o motivo do contato...</option>
                  <option value="advocacia">Consultoria Jurídica</option>
                  <option value="pericia">Perícia Grafotécnica/Documentoscópica</option>
                  <option value="administracao">Administração Judicial</option>
                  <option value="outro">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#fdfbf7]/80 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#0a1128] border border-[#fdfbf7]/20 rounded-sm px-4 py-3 text-[#fdfbf7] focus:outline-none focus:border-[#d4af37] transition-colors placeholder:text-[#fdfbf7]/30 resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#fdfbf7] text-[#0a1128] font-medium py-4 rounded-sm hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2 mt-4"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </Motion.div>
        </div>
      </section>
    </div>
  );
}
