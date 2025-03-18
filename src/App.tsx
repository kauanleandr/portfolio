import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-40">
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Kauan Moreira</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">Desenvolvedor Full Stack</p>
          <div className="flex gap-4 justify-center mb-12">
            <a 
              href="https://github.com/kauanleandr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-indigo-300 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kauanleandr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-indigo-300 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kauanprograma@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 hover:text-indigo-300 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a href="#about" className="animate-bounce inline-block">
            <ChevronDown size={32} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-indigo-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Sobre Mim</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              Sou estudante de Ciência da Computação em fase final de curso pela UNAMA, com previsão de conclusão em dezembro de 2025. 
              Atualmente, atuo como estagiário na Prodepa, onde iniciei na área de Suporte Técnico e Telecomunicação e, desde outubro de 2024, 
              estou alocado no setor de Desenvolvimento de Sistemas, trabalhando com Vue.js e Quasar, busco sempre aplicar boas práticas como Clean Code. 
              Estou em busca da minha primeira oportunidade como Desenvolvedor Júnior, pronto para colaborar em projetos, aprender com o time e contribuir 
              com soluções de qualidade.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="text-indigo-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Habilidades</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                name: 'Linguagens', 
                skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'MySQL'] 
              },
              { 
                name: 'Frameworks e Ferramentas', 
                skills: ['Vue.js', 'Quasar', 'Flutter', 'Node.js', 'Git', 'GitLab'] 
              },
              { 
                name: 'Sistemas Operacionais', 
                skills: ['Linux'] 
              },
              { 
                name: 'Soft Skills', 
                skills: ['Clean Code', 'Trabalho em Equipe', 'Aprendizado Rápido', 'Proatividade'] 
              }
            ].map((category) => (
              <div key={category.name} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Briefcase className="text-indigo-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-800">Projetos</h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative h-48">
                <img 
                  src="https://alcarengenharia.netlify.app/midia/1.jpg"
                  alt="Alçar Engenharia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a href="https://alcarengenharia.netlify.app/#/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="text-white" size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Alçar Engenharia</h3>
                <p className="text-gray-600">
                  Website desenvolvido para empresa de construção civil, apresentando seus serviços e portfólio de projetos.
                  Desenvolvido com Vue.js e hospedado na Netlify.
                </p>
                <a 
                  href="https://alcarengenharia.netlify.app/#/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                >
                  Visitar site <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a 
              href="https://github.com/kauanleandr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/kauanleandr/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kauanprograma@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-400 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
          <p className="text-gray-400">© 2025 Kauan Moreira. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;