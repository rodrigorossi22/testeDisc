console.log("=== INICIANDO TESTE DISC ===");
console.log("Total de perguntas:", questionsData.length);
console.log("Perfis carregados:", Object.keys(profiles).length);

const questionsData = [
  {
    "question": "Quando enfrenta um problema inesperado, você tende a:",
    "options": {
      "D": "Agir rapidamente para resolver o problema.",
      "I": "Buscar apoio e envolver outras pessoas para encontrar soluções.",
      "S": "Manter a calma e analisar cuidadosamente antes de agir.",
      "C": "Revisar todos os detalhes e planejar com precisão."
    }
  },
  {
    "question": "Como você prefere trabalhar em equipe?",
    "options": {
      "D": "Tomando a liderança e definindo as tarefas.",
      "I": "Motivando e inspirando os outros.",
      "S": "Colaborando harmoniosamente e apoiando os colegas.",
      "C": "Seguindo processos claros e garantindo qualidade."
    }
  },
  {
    "question": "Em uma reunião importante, você:",
    "options": {
      "D": "Foca em resultados e decisões rápidas.",
      "I": "Tenta criar um ambiente descontraído e participativo.",
      "S": "Escuta atentamente e busca consenso.",
      "C": "Apresenta dados e fatos organizados."
    }
  },
  {
    "question": "O que mais te motiva no trabalho ou nos estudos?",
    "options": {
      "D": "Superar desafios e alcançar metas ambiciosas.",
      "I": "Criar conexões e interagir com as pessoas.",
      "S": "Contribuir para um ambiente estável e cooperativo.",
      "C": "Realizar tarefas com precisão e excelência."
    }
  },
  {
    "question": "Como você lida com críticas ou feedbacks?",
    "options": {
      "D": "Aceita apenas se forem construtivos e úteis.",
      "I": "Reflete sobre o feedback, mas busca apoio emocional.",
      "S": "Escuta pacientemente e ajusta suas ações.",
      "C": "Analisa criticamente para entender o contexto."
    }
  },
  {
    "question": "Em uma festa ou evento social, você geralmente:",
    "options": {
      "D": "Assume a liderança e conhece novas pessoas.",
      "I": "É o centro das atenções e anima o ambiente.",
      "S": "Observa primeiro antes de interagir.",
      "C": "Prefere conversas profundas e significativas."
    }
  },
  {
    "question": "Quando precisa tomar uma decisão importante, você:",
    "options": {
      "D": "Confia no instinto e age rapidamente.",
      "I": "Consulta amigos ou colegas para ter diferentes perspectivas.",
      "S": "Pensa nas consequências para evitar conflitos.",
      "C": "Reúne dados e faz uma análise lógica."
    }
  },
  {
    "question": "Qual ambiente de trabalho ou estudo você prefere?",
    "options": {
      "D": "Competitivo, onde posso mostrar meu desempenho.",
      "I": "Dinâmico, com muita interação e energia.",
      "S": "Estável, onde posso manter rotinas e previsibilidade.",
      "C": "Estruturado, com regras claras e processos bem definidos."
    }
  },
  {
    "question": "Como você reage a mudanças repentinas?",
    "options": {
      "D": "Vejo como uma oportunidade para agir com rapidez.",
      "I": "Me adapto facilmente e tento torná-las divertidas.",
      "S": "Preciso de tempo para me ajustar.",
      "C": "Avalio cuidadosamente os impactos antes de aceitar."
    }
  },
  {
    "question": "O que mais valoriza nas relações pessoais?",
    "options": {
      "D": "Respeito e admiração pelos meus resultados.",
      "I": "Alegria, diversão e momentos memoráveis.",
      "S": "Lealdade, confiança e apoio mútuo.",
      "C": "Honestidade, transparência e compromisso."
    }
  },
  {
    "question": "Quando está sob pressão, você tende a:",
    "options": {
      "D": "Agir de forma assertiva e assumir o controle.",
      "I": "Procurar apoio emocional e incentivar os outros.",
      "S": "Manter a calma e evitar confrontos.",
      "C": "Seguir protocolos para garantir que tudo esteja certo."
    }
  },
  {
    "question": "O que você mais gosta em aprender algo novo?",
    "options": {
      "D": "Aplicar rapidamente e ver resultados concretos.",
      "I": "Compartilhar o que aprendeu com outras pessoas.",
      "S": "Entender como isso pode trazer equilíbrio à minha vida.",
      "C": "Dominar todos os detalhes e garantir precisão."
    }
  },
  {
    "question": "Como você prefere receber instruções?",
    "options": {
      "D": "Diretas e objetivas, sem muitos detalhes.",
      "I": "De forma entusiasmada e motivadora.",
      "S": "Com paciência e espaço para perguntas.",
      "C": "Organizadas e com informações completas."
    }
  },
  {
    "question": "O que mais te frustra no trabalho ou nos estudos?",
    "options": {
      "D": "Falta de desafios ou metas ambiciosas.",
      "I": "Ambientes monótonos e sem interação.",
      "S": "Conflitos ou mudanças bruscas.",
      "C": "Falta de organização ou imprecisão."
    }
  },
  {
    "question": "Como você avalia sua capacidade de persuasão?",
    "options": {
      "D": "Sou direto(a) e objetivo(a).",
      "I": "Uso criatividade e entusiasmo.",
      "S": "Construo confiança ao longo do tempo.",
      "C": "Baseio-me em fatos e dados."
    }
  },
  {
    "question": "O que mais te motiva a alcançar seus objetivos?",
    "options": {
      "D": "Reconhecimento e status.",
      "I": "Relacionamentos e colaboração.",
      "S": "Harmonia e estabilidade.",
      "C": "Precisão e excelência."
    }
  },
  {
    "question": "Como você lida com prazos apertados?",
    "options": {
      "D": "Priorizo tarefas e agilizo o processo.",
      "I": "Motivo a equipe para superar o desafio.",
      "S": "Mantenho a calma e sigo o planejamento.",
      "C": "Verifico cada detalhe para evitar erros."
    }
  },
  {
    "question": "O que mais te atrai em um projeto?",
    "options": {
      "D": "A possibilidade de liderar e inovar.",
      "I": "A chance de interagir e motivar pessoas.",
      "S": "A previsibilidade e segurança.",
      "C": "A estrutura e organização."
    }
  },
  {
    "question": "Como você reage a situações de risco?",
    "options": {
      "D": "Encaro como uma oportunidade de crescimento.",
      "I": "Procuro apoio para avaliar os prós e contras.",
      "S": "Evito riscos desnecessários.",
      "C": "Analiso cuidadosamente antes de agir."
    }
  },
  {
    "question": "O que mais valoriza em um líder?",
    "options": {
      "D": "Decisão e assertividade.",
      "I": "Carisma e capacidade de inspirar.",
      "S": "Empatia e paciência.",
      "C": "Organização e atenção aos detalhes."
    }
  },
  {
    "question": "Como você lida com conflitos interpessoais?",
    "options": {
      "D": "Enfrento diretamente para resolver.",
      "I": "Busco mediar e promover entendimento.",
      "S": "Evito confrontos para manter a harmonia.",
      "C": "Analiso o contexto para propor soluções."
    }
  },
  {
    "question": "O que mais te motiva em um ambiente de trabalho?",
    "options": {
      "D": "Metas desafiadoras e reconhecimento.",
      "I": "Interação e colaboração com a equipe.",
      "S": "Estabilidade e previsibilidade.",
      "C": "Processos claros e organização."
    }
  },
  {
    "question": "Como você avalia sua capacidade de lidar com o estresse?",
    "options": {
      "D": "Sou resiliente e me adapto rapidamente.",
      "I": "Busco apoio para lidar com a frustração.",
      "S": "Mantenho a calma e evito reações impulsivas.",
      "C": "Planejo estratégias para gerenciar o estresse."
    }
  },
  {
    "question": "O que mais te frustra em um ambiente de trabalho?",
    "options": {
      "D": "Falta de autonomia ou liberdade.",
      "I": "Ambientes isolados ou pouco interativos.",
      "S": "Conflitos ou falta de harmonia.",
      "C": "Desorganização ou imprecisão."
    }
  },
  {
    "question": "Como você define seu estilo de comunicação?",
    "options": {
      "D": "Direto, objetivo e focado em resultados.",
      "I": "Animado, entusiasmado e criativo.",
      "S": "Calmo, empático e paciente.",
      "C": "Detalhista, organizado e preciso."
    }
  },
  {
    "question": "O que mais te atrai em uma nova oportunidade?",
    "options": {
      "D": "Desafios e chances de crescimento.",
      "I": "Possibilidades de interação e networking.",
      "S": "Estabilidade e segurança.",
      "C": "Organização e clareza nos processos."
    }
  },
  {
    "question": "Como você lida com feedback negativo?",
    "options": {
      "D": "Aceito apenas se for relevante e útil.",
      "I": "Procuro apoio para lidar com a frustração.",
      "S": "Reflito calmamente e ajusto minhas ações.",
      "C": "Analiso criticamente para entender o contexto."
    }
  },
  {
    "question": "O que mais valoriza em uma equipe?",
    "options": {
      "D": "Eficiência e resultados rápidos.",
      "I": "Energia positiva e colaboração.",
      "S": "Harmonia e confiança mútua.",
      "C": "Precisão e atenção aos detalhes."
    }
  },
  {
    "question": "Como você avalia sua capacidade de adaptar-se a novas situações?",
    "options": {
      "D": "Sou flexível e me adapto rapidamente.",
      "I": "Busco apoio para facilitar a transição.",
      "S": "Prefiro manter a rotina sempre que possível.",
      "C": "Analiso cuidadosamente antes de me adaptar."
    }
  },
  {
    "question": "O que mais te motiva a buscar crescimento pessoal?",
    "options": {
      "D": "Alcançar metas ambiciosas e ser reconhecido(a).",
      "I": "Criar conexões e inspirar outras pessoas.",
      "S": "Promover harmonia e equilíbrio na vida.",
      "C": "Aperfeiçoar habilidades e garantir precisão."
    }
  }
];

const profiles = {
  D: {
    name: "Dominante (D)",
    summary: "Você é uma pessoa determinada, direta e orientada para resultados. Tem grande capacidade de tomar decisões rápidas e enfrentar desafios com confiança.",
    strengths: "Liderança natural;<br>Capacidade de resolver problemas rapidamente;<br>Foco em metas e resultados;<br>Independência e autoconfiança.",
    development: "Pode ser impulsivo(a) em algumas situações;<br>Dificuldade em lidar com ambiguidades;<br>Às vezes pode parecer autoritário(a).",
    relations: "Interage de forma assertiva e direta;<br>Valora respeito e admiração pelos resultados;<br>Prefere comunicação objetiva e sem rodeios.",
    decisions: "Toma decisões rápidas e baseadas em resultados imediatos;<br>Foca em soluções práticas e eficientes.",
    mainMotivator: "Alcançar metas ambiciosas e ser reconhecido(a).",
    secondaryMotivator: "Criar conexões e inspirar outras pessoas."
  },
  I: {
    name: "Influente (I)",
    summary: "Você é uma pessoa comunicativa, entusiasmada e sociável. Tem facilidade para motivar os outros e criar um ambiente positivo.",
    strengths: "Habilidade para motivar e engajar;<br>Criatividade e espontaneidade;<br>Ótimo networking e habilidades sociais;<br>Capacidade de inspirar outras pessoas.",
    development: "Pode ser distraído(a) com detalhes;<br>Às vezes fala mais do que ouve;<br>Pode ter dificuldade com rotinas muito estruturadas.",
    relations: "Interage de forma calorosa e amigável;<br>Gosta de reconhecimento e elogios;<br>Prefere ambientes animados e descontraídos.",
    decisions: "Toma decisões baseadas no consenso e no impacto nas pessoas;<br>Considera o lado emocional das situações.",
    mainMotivator: "Criar conexões e inspirar outras pessoas.",
    secondaryMotivator: "Promover harmonia e equilíbrio na vida."
  },
  S: {
    name: "Estável (S)",
    summary: "Você é uma pessoa paciente, gentil e que valoriza a harmonia. Tem grande capacidade de ouvir e trabalhar em equipe de forma cooperativa.",
    strengths: "Empatia e sensibilidade;<br>Lealdade e comprometimento;<br>Ótimo ouvinte e mediador de conflitos;<br>Capacidade de manter a calma sob pressão.",
    development: "Pode ser resistente a mudanças;<br>Às vezes evita confrontos necessários;<br>Pode ter dificuldade em dizer não.",
    relations: "Interage de forma calma e empática;<br>Valora lealdade e confiança mútua;<br>Prefere ambientes estáveis e previsíveis.",
    decisions: "Toma decisões refletidas e baseadas nas consequências para os outros;<br>Prefere consenso e harmonia.",
    mainMotivator: "Promover harmonia e equilíbrio na vida.",
    secondaryMotivator: "Aperfeiçoar habilidades e garantir precisão."
  },
  C: {
    name: "Conformidade (C)",
    summary: "Você é uma pessoa detalhista, organizada e que valoriza a precisão. Tem grande capacidade de análise e busca sempre a excelência.",
    strengths: "Atento(a) aos detalhes;<br>Preocupado(a) com qualidade e precisão;<br>Ótimo(a) em análise de dados;<br>Capacidade de seguir procedimentos complexos.",
    development: "Pode ser perfeccionista demais;<br>Às vezes perde o foco no panorama geral;<br>Pode ter dificuldade com mudanças de última hora.",
    relations: "Interage de forma formal e lógica;<br>Valora honestidade e transparência;<br>Prefere comunicação clara e baseada em fatos.",
    decisions: "Toma decisões baseadas em dados e análises cuidadosas;<br>Busca a opção mais precisa e correta.",
    mainMotivator: "Aperfeiçoar habilidades e garantir precisão.",
    secondaryMotivator: "Alcançar metas ambiciosas e ser reconhecido(a)."
  }
};

class DiscTest {
  constructor(questions, profiles) {
    console.log("Inicializando teste..."); // Debug
    this.questions = questions;
    this.profiles = profiles;
    this.currentQuestion = 0;
    this.answers = Array(questions.length).fill(null);
    
    this.initElements();
    this.renderQuestion();
    this.setupEventListeners();
  }
 
    console.log("Teste DISC inicializado com", questions.length, "perguntas");
  }
  
  initElements() {
    this.formElement = document.getElementById('disc-form');
    this.prevBtn = document.getElementById('prev-btn');
    this.nextBtn = document.getElementById('next-btn');
    this.progressBar = document.getElementById('progress-bar');
    this.progressText = document.getElementById('progress-text');
    this.resultsSection = document.getElementById('results');
  }
  
  setupEventListeners() {
  this.prevBtn.addEventListener('click', () => this.prevQuestion());
  this.nextBtn.addEventListener('click', () => this.nextQuestion());
  
  const pdfBtn = document.getElementById('pdf-btn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => this.generatePDF());
  } else {
    console.error("Botão PDF não encontrado");
  }
}
  
  renderQuestion() {
    this.formElement.innerHTML = '';
    
    const question = this.questions[this.currentQuestion];
    const questionDiv = document.createElement('div');
    questionDiv.className = 'question-card';
    questionDiv.innerHTML = `
      <h3>${this.currentQuestion + 1}. ${question.question}</h3>
      <div class="options-container">
        ${Object.entries(question.options).map(([key, text]) => `
          <div class="answer-option" data-value="${key}">
            <input type="radio" id="q${this.currentQuestion}-${key}" 
                   name="q${this.currentQuestion}" value="${key}" hidden />
            <label for="q${this.currentQuestion}-${key}">${text}</label>
          </div>
        `).join('')}
      </div>
    `;
    
    this.formElement.appendChild(questionDiv);
    this.updateProgress();
    // Adiciona classe especial se for a última pergunta
  if (this.currentQuestion === this.questions.length - 1) {
    this.nextBtn.classList.add('finish-btn');
  } else {
    this.nextBtn.classList.remove('finish-btn');
  }
  
  this.setupOptionListeners();
}
  
  setupOptionListeners() {
    document.querySelectorAll('.answer-option').forEach(option => {
      option.addEventListener('click', () => {
        const value = option.getAttribute('data-value');
        this.answers[this.currentQuestion] = value;
        
        document.querySelectorAll('.answer-option').forEach(opt => {
          opt.classList.remove('selected');
        });
        option.classList.add('selected');
      });
    });
  }
  
 updateProgress() {
  const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
  this.progressBar.style.width = `${progress}%`;
  this.progressText.textContent = `Pergunta ${this.currentQuestion + 1} de ${this.questions.length}`;
  
  this.prevBtn.disabled = this.currentQuestion === 0;
  
  // Modificação aqui - muda o texto do botão na última pergunta
  if (this.currentQuestion === this.questions.length - 1) {
    this.nextBtn.textContent = 'Finalizar';
    this.nextBtn.innerHTML = '<i class="fas fa-check"></i> Finalizar';
    this.nextBtn.disabled = false; // Garante que está ativo
  } else {
    this.nextBtn.textContent = 'Próxima';
    this.nextBtn.innerHTML = 'Próxima <i class="fas fa-arrow-right"></i>';
  }
}
  
  prevQuestion() {
    if (this.currentQuestion > 0) {
      this.currentQuestion--;
      this.renderQuestion();
    }
  }
  
  nextQuestion() {
  if (this.answers[this.currentQuestion] === null) {
    alert('Por favor, selecione uma resposta antes de continuar.');
    return;
  }
  
  if (this.currentQuestion < this.questions.length - 1) {
    this.currentQuestion++;
    this.renderQuestion();
  } else {
    this.showResults(); // Isso deve ser chamado ao clicar em "Finalizar"
  }
}
  
  showResults() {
    const scores = { D: 0, I: 0, S: 0, C: 0 };
    this.answers.forEach(answer => {
      if (answer) scores[answer]++;
    });
    
    const maxScore = Math.max(...Object.values(scores));
    const top = Object.keys(scores).filter(k => scores[k] === maxScore);
    const selectedProfile = this.profiles[top[0]];
    
    document.getElementById('profile-summary').innerHTML = `
      <strong>${selectedProfile.name}</strong><br>${selectedProfile.summary}
    `;
    document.getElementById('strengths').innerHTML = selectedProfile.strengths;
    document.getElementById('development-areas').innerHTML = selectedProfile.development;
    document.getElementById('interpersonal-relations').innerHTML = selectedProfile.relations;
    document.getElementById('decision-making').innerHTML = selectedProfile.decisions;
    document.getElementById('main-motivator').textContent = selectedProfile.mainMotivator;
    document.getElementById('secondary-motivator').textContent = selectedProfile.secondaryMotivator;
    
    this.resultsSection.classList.remove('hidden');
    this.resultsSection.scrollIntoView({ behavior: 'smooth' });
  }
  

generatePDF() {
  try {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    
    // Configurações iniciais
    pdf.setFont('helvetica');
    pdf.setFontSize(20);
    pdf.text('Seu Perfil DISC - Consultoria Rodrigo Rossi', 105, 20, { align: 'center' });
    
    // Adicionar data
    pdf.setFontSize(10);
    pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
    
    // Adicionar conteúdo do perfil
    pdf.setFontSize(12);
    let yPosition = 45;
    
    // Perfil principal
    const profileTitle = document.getElementById('profile-summary').firstChild.textContent;
    const profileText = document.getElementById('profile-summary').lastChild.textContent;
    
    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(profileTitle, 20, yPosition);
    yPosition += 10;
    
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);
    const splitText = pdf.splitTextToSize(profileText, 170);
    pdf.text(splitText, 20, yPosition);
    yPosition += splitText.length * 7 + 15;
    
    // Adicionar outras seções
    const sections = [
      'Pontos Fortes', 'Pontos de Desenvolvimento',
      'Relações Interpessoais', 'Tomada de Decisão',
      'Motivador Principal', 'Motivador Secundário'
    ];
    
    sections.forEach(section => {
      if (yPosition > 250) {
        pdf.addPage();
        yPosition = 20;
      }
      
      const contentElement = document.getElementById(section.toLowerCase().replace(' ', '-'));
      const content = contentElement ? contentElement.textContent : '';
      
      pdf.setFont('helvetica', 'bold');
      pdf.text(`${section}:`, 20, yPosition);
      yPosition += 7;
      
      pdf.setFont('helvetica', 'normal');
      const splitContent = pdf.splitTextToSize(content, 170);
      pdf.text(splitContent, 25, yPosition);
      yPosition += splitContent.length * 7 + 10;
    });
    
    pdf.save('perfil-disc.pdf');
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
    alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
  }
}

// Inicialização única
document.addEventListener('DOMContentLoaded', () => {
  try {
    new DiscTest(questionsData, profiles);
  } catch (error) {
    console.error("Erro ao inicializar:", error);
    alert("Erro ao carregar o teste. Recarregue a página.");
  }
});
