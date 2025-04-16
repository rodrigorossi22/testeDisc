window.jsPDF = window.jspdf.jsPDF;
// Adicione no início do arquivo, antes de tudo
console.log("=== INICIANDO TESTE DISC ===");

// Fallback para erro crítico
window.addEventListener('error', function(e) {
  console.error("Erro global capturado:", e.error);
  document.body.innerHTML = `
    <div style="text-align: center; padding: 50px; font-family: Arial;">
      <h1>Erro ao carregar o teste</h1>
      <p>Pedimos desculpas pelo inconveniente. O suporte já foi notificado.</p>
      <button onclick="location.reload()" style="padding: 10px 20px; background: #2196F3; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Tentar Novamente
      </button>
    </div>
  `;
}

// Inicializa o teste quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
  try {
    console.log("DOM carregado, iniciando teste...");
    
    // Verifica elementos essenciais
    const essentialElements = ['disc-form', 'prev-btn', 'next-btn', 'progress-bar', 'progress-text', 'results'];
    essentialElements.forEach(id => {
      if (!document.getElementById(id)) {
        throw new Error(`Elemento essencial #${id} não encontrado`);
      }
    });

    // Inicializa o teste
    const discTest = new DiscTest(questionsData, profiles);
    
  } catch (error) {
    console.error("Falha na inicialização:", error);
    alert("Erro ao carregar o teste. Por favor, recarregue a página.\nErro: " + error.message);
  }
}););

// 30 Perguntas selecionadas para o teste DISC
const questionsData = [
  // Abordagem a Desafios e Problemas
  {
    "question": "Como você reage a desafios?",
    "options": {
      "D": "Encaro de frente e procuro resultados imediatos",
      "I": "Vejo como oportunidade para motivar os outros e encontrar soluções criativas",
      "S": "Analiso cuidadosamente antes de agir, preferindo abordagens testadas",
      "C": "Pesquiso todas as informações possíveis para encontrar a solução mais precisa"
    }
    
    // Adiciona página com as respostas
    pdf.addPage();
    y = 20;
    
    pdf.setFont(styles.subtitle.font, styles.subtitle.style);
    pdf.setFontSize(styles.subtitle.size);
    pdf.text('Resumo das Respostas', 105, y, { align: 'center' });
    y += 15;
    
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    
    // Cria uma tabela com as respostas e os percentuais
    pdf.text('Tipo', 30, y);
    pdf.text('Respostas', 80, y);
    pdf.text('Percentual', 140, y);
    y += 8;
    
    // Linha separadora
    pdf.line(20, y - 3, 190, y - 3);
    y += 5;
    
    // Contagem das respostas por tipo
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    this.answers.forEach(answer => {
      if (answer) counts[answer]++;
    });
    
    // Lista das respostas
    Object.entries(counts).forEach(([type, count]) => {
      pdf.text(type, 30, y);
      pdf.text(`${count} de ${this.answers.length}`, 80, y);
      pdf.text(`${this.percentages[type]}%`, 140, y);
      y += 10;
    });
    
    // Informações sobre as respostas
    y += 10;
    pdf.text('Suas respostas para cada pergunta:', 20, y);
    y += 10;
    
    this.questions.forEach((q, index) => {
      const answer = this.answers[index];
      if (!answer) return;
      
      const questionText = q.question;
      const answerText = q.options[answer];
      
      if (y > 250) {
        pdf.addPage();
        y = 20;
      }
      
      pdf.setFont(styles.normal.font, 'bold');
      const questionLines = pdf.splitTextToSize(`${index + 1}. ${questionText}`, 170);
      pdf.text(questionLines, 20, y);
      y += questionLines.length * 6;
      
      pdf.setFont(styles.normal.font, 'normal');
      const answerLines = pdf.splitTextToSize(`Resposta: ${answerText}`, 170);
      pdf.text(answerLines, 20, y);
      y += answerLines.length * 6 + 3;
    });
    
    // Salva o PDF
    pdf.save('perfil-disc.pdf');
  }
}
  },

  // Liderança e Trabalho em Equipe
  {
    "question": "Em uma equipe, meu papel natural é:",
    "options": {
      "D": "Líder e tomador de decisões",
      "I": "Motivador e entusiasta",
      "S": "Apoio estável e conciliador",
      "C": "Executor metódico"
    }
  },
  
  // Comunicação e Interação
  {
    "question": "Em uma conversa, você geralmente:",
    "options": {
      "D": "Vai direto ao ponto, sendo objetivo e focado no resultado",
      "I": "Fala animadamente, contando histórias e envolvendo as pessoas",
      "S": "Escuta mais do que fala, demonstrando atenção ao outro",
      "C": "Apresenta informações detalhadas e precisas sobre o assunto"
    }
  },
  
  // Ritmo de Trabalho e Adaptabilidade
  {
    "question": "Como você lida com mudanças?",
    "options": {
      "D": "Adapto-me rapidamente e busco as novas oportunidades",
      "I": "Entusiasmo-me com as novidades e motivo os outros a aceitar a mudança",
      "S": "Prefiro mudanças graduais e com tempo para me adaptar",
      "C": "Questiono os motivos e implicações antes de aceitar a mudança"
    }
  },
  
  // Ritmo de Trabalho
  {
    "question": "Seu ritmo de trabalho geralmente é:",
    "options": {
      "D": "Rápido e dinâmico, sempre buscando novos desafios",
      "I": "Variado e flexível, com múltiplos projetos simultâneos",
      "S": "Constante e previsível, com foco em qualidade consistente",
      "C": "Metódico e sistemático, com atenção aos detalhes"
    }
  },
  
  // Organização e Normas
  {
    "question": "Seu espaço de trabalho ou ambiente pessoal tende a ser:",
    "options": {
      "D": "Funcional e organizado para maximizar a eficiência",
      "I": "Colorido e dinâmico, com vários projetos acontecendo simultaneamente",
      "S": "Confortável e acolhedor, com objetos pessoais significativos",
      "C": "Meticulosamente organizado, com tudo em seu devido lugar"
    }
  },
  
  // Regras e Procedimentos
  {
    "question": "Em relação a regras e procedimentos, você:",
    "options": {
      "D": "Segue apenas as que fazem sentido para alcançar resultados eficientes",
      "I": "Prefere flexibilidade e encontra formas criativas de interpretar as regras",
      "S": "Respeita-as e valoriza a estabilidade que elas proporcionam",
      "C": "Segue-as rigorosamente e espera que os outros também o façam"
    }
  },
  
  // Motivação e Valores
  {
    "question": "O que mais te motiva em um projeto?",
    "options": {
      "D": "Alcançar resultados concretos e superar desafios",
      "I": "A oportunidade de conhecer pessoas e trabalhar em equipe",
      "S": "Contribuir para um ambiente estável e cooperativo",
      "C": "Produzir um trabalho de alta qualidade e precisão"
    }
  },
  
  // Tomada de Decisão
  {
    "question": "Qual frase melhor descreve sua forma de tomar decisões?",
    "options": {
      "D": "Vamos decidir e agir agora",
      "I": "Vamos discutir as possibilidades com todos",
      "S": "Vamos considerar como isso afetará a todos",
      "C": "Vamos analisar todas as alternativas cuidadosamente"
    }
  },
  
  // Base para Decisões
  {
    "question": "Minhas decisões são mais baseadas em:",
    "options": {
      "D": "Resultados e eficiência",
      "I": "Emoções e relacionamentos",
      "S": "Valores pessoais e harmonia",
      "C": "Dados e lógica"
    }
  },
  
  // Trabalho sob Pressão
  {
    "question": "Quando estou sob pressão:",
    "options": {
      "D": "Tomo o controle",
      "I": "Busco apoio emocional",
      "S": "Fico mais sensível e cauteloso",
      "C": "Me fecho e analiso internamente"
    }
  },
  
  // Ambiente Social
  {
    "question": "Em eventos sociais, você normalmente:",
    "options": {
      "D": "Prefere conversas objetivas e estabelecer contatos estratégicos",
      "I": "Conhece muitas pessoas novas e energiza o ambiente",
      "S": "Conversa tranquilamente com poucas pessoas, criando conexões mais profundas",
      "C": "Observa a dinâmica do ambiente antes de se envolver em conversas"
    }
  },
  
  // Planejamento
  {
    "question": "Ao planejar um projeto, você prioriza:",
    "options": {
      "D": "Estabelecer metas claras e prazos curtos",
      "I": "Formar uma equipe entusiasmada e discutir ideias criativas",
      "S": "Criar um plano passo a passo que todos possam seguir",
      "C": "Elaborar um plano detalhado considerando todos os possíveis obstáculos"
    }
  },
  
  // Reconhecimento
  {
    "question": "Quando recebe um elogio, você prefere ser reconhecido por:",
    "options": {
      "D": "Sua capacidade de liderança e resultados alcançados",
      "I": "Sua criatividade e habilidade de inspirar os outros",
      "S": "Sua lealdade e capacidade de trabalhar bem em equipe",
      "C": "Sua atenção aos detalhes e trabalho de alta qualidade"
    }
  },
  
  // Legado
  {
    "question": "Como você gostaria de ser lembrado pelos outros?",
    "options": {
      "D": "Como alguém determinado que alcançou resultados importantes",
      "I": "Como alguém inspirador que trouxe alegria para a vida dos outros",
      "S": "Como alguém confiável que sempre esteve presente quando necessário",
      "C": "Como alguém competente que fez trabalhos de excelente qualidade"
    }
  },
  
  // Conflitos
  {
    "question": "Quando precisa resolver um conflito, você normalmente:",
    "options": {
      "D": "Encara diretamente a situação e busca resolver de forma rápida e objetiva",
      "I": "Usa seu carisma para aliviar a tensão e encontrar um meio-termo aceitável",
      "S": "Busca entender todos os pontos de vista e encontrar uma solução harmoniosa",
      "C": "Analisa as causas do conflito para propor uma solução baseada em fatos"
    }
  },
  
  // Feedback
  {
    "question": "Ao dar feedback para alguém, você:",
    "options": {
      "D": "É direto e objetivo, apontando claramente o que precisa melhorar",
      "I": "Começa com elogios e apresenta as críticas de forma positiva e motivadora",
      "S": "É gentil e cuidadoso, evitando ser muito duro ou magoar a pessoa",
      "C": "Fornece análises detalhadas e específicas baseadas em fatos observáveis"
    }
  },
  
  // Comunicação Pública
  {
    "question": "Quando falo em público:",
    "options": {
      "D": "Sou direto e assertivo",
      "I": "Me comunico com entusiasmo e empatia",
      "S": "Fico nervoso, prefiro conversar individualmente",
      "C": "Sou mais reservado, mas me preparo muito"
    }
  },
  
  // Reação ao Fracasso
  {
    "question": "Minha reação ao fracasso:",
    "options": {
      "D": "Uso como aprendizado e sigo",
      "I": "Fico abalado, mas tento me animar",
      "S": "Me culpo e reflito bastante",
      "C": "Reavalio tudo e fico em silêncio"
    }
  },
  
  // Pontos Fortes
  {
    "question": "Minhas maiores forças são:",
    "options": {
      "D": "Iniciativa e decisão",
      "I": "Entusiasmo e carisma",
      "S": "Paciência e empatia",
      "C": "Análise e precisão"
    }
  },
  
  // Percepção Externa
  {
    "question": "Sou percebido como:",
    "options": {
      "D": "Determinado e direto",
      "I": "Alegre e comunicativo",
      "S": "Tranquilo e confiável",
      "C": "Calado e analítico"
    }
  },
  
  // Fontes de Incômodo
  {
    "question": "O que mais te incomoda?",
    "options": {
      "D": "Falta de ação ou lentidão",
      "I": "Pessoas fechadas ou pessimistas",
      "S": "Conflitos e mudanças bruscas",
      "C": "Falta de método ou desorganização"
    }
  },
  
  // Ambiente Ideal
  {
    "question": "Em um ambiente ideal de trabalho:",
    "options": {
      "D": "Sou desafiado e tenho autonomia",
      "I": "Posso interagir e criar com liberdade",
      "S": "Existe segurança e previsibilidade",
      "C": "Há organização e regras claras"
    }
  },
  
  // Preferência de Tarefas
  {
    "question": "Gosto mais de tarefas que:",
    "options": {
      "D": "São urgentes e competitivas",
      "I": "Envolvem contato com pessoas",
      "S": "Me permitem trabalhar com constância",
      "C": "Exigem atenção a detalhes"
    }
  },
  
  // Prazos e Compromissos
  {
    "question": "Em relação a prazos e compromissos, você:",
    "options": {
      "D": "Cumpre-os sempre que são importantes para seus objetivos principais",
      "I": "Pode se distrair com novas oportunidades, às vezes precisando de lembretes",
      "S": "É confiável e consistente, raramente deixa de cumprir o combinado",
      "C": "É extremamente pontual e organizado, planejando-se com antecedência"
    }
  },
  
  // Novos Grupos
  {
    "question": "Em um grupo novo, você:",
    "options": {
      "D": "Assume logo a liderança",
      "I": "Faz piadas e quebra o gelo",
      "S": "Observa antes de se envolver",
      "C": "Analisa as dinâmicas do grupo"
    }
  },
  
  // Situações de Crise
  {
    "question": "Em uma situação de crise, você costuma:",
    "options": {
      "D": "Agir rapidamente, tomando decisões firmes para resolver o problema",
      "I": "Comunicar-se abertamente, mantendo o ânimo e envolvendo as pessoas na solução",
      "S": "Manter a calma e garantir que todos estejam bem enquanto resolve o problema metodicamente",
      "C": "Avaliar todas as informações disponíveis para encontrar a solução mais eficaz"
    }
  },
  
  // Autodescrição
  {
    "question": "Me vejo como:",
    "options": {
      "D": "Corajoso e direto",
      "I": "Criativo e entusiasmado",
      "S": "Cuidadoso e acolhedor",
      "C": "Organizado e lógico"
    }
  },
  
  // Fonte de Energia
  {
    "question": "Eu me sinto mais energizado quando:",
    "options": {
      "D": "Estou superando metas",
      "I": "Estou rodeado de pessoas",
      "S": "Estou ajudando os outros",
      "C": "Estou sozinho(a), refletindo e planejando"
    }
  },
  
  // Perspectiva Pessoal
  {
    "question": "Qual frase te define?",
    "options": {
      "D": "Feito é melhor que perfeito",
      "I": "O caminho se faz caminhando",
      "S": "Devagar e sempre",
      "C": "Se vale a pena fazer, vale a pena fazer bem"
    }
  },
  
  // Medo Principal
  {
    "question": "Seu maior medo é:",
    "options": {
      "D": "Ser controlado ou limitado",
      "I": "Ser ignorado ou rejeitado",
      "S": "Perder a segurança ou harmonia",
      "C": "Falhar por falta de preparo"
    }
  }
];
  
// Perfis DISC
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
    console.log("Inicializando teste DISC...");
    this.questions = questions;
    this.profiles = profiles;
    this.currentQuestion = 0;
    this.answers = Array(questions.length).fill(null);
    this.percentages = {}; // Armazenar percentuais
    this.sortedTypes = []; // Armazenar tipos ordenados por predominância
    
    this.initElements();
    this.renderQuestion();
    this.setupEventListeners();
    
    console.log("Teste DISC pronto com", questions.length, "perguntas");
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
    
    // Configura o listener do PDF apenas quando os resultados forem mostrados
    document.addEventListener('resultsShown', () => {
      const pdfBtn = document.getElementById('pdf-btn');
      if (pdfBtn) {
        pdfBtn.addEventListener('click', () => this.generatePDF());
      }
    });
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
    
    if (this.currentQuestion === this.questions.length - 1) {
      this.nextBtn.innerHTML = '<i class="fas fa-check"></i> Finalizar';
    } else {
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
      const options = document.querySelectorAll('.answer-option');
      options.forEach(opt => opt.classList.add('shake'));
      setTimeout(() => {
        options.forEach(opt => opt.classList.remove('shake'));
      }, 500);
      return;
    }
    
    if (this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
      this.renderQuestion();
    } else {
      this.calculateResults();
      this.showResults();
    }
  }
  
  // Método para calcular os resultados
  calculateResults() {
    // Contagem das respostas
    const counts = { D: 0, I: 0, S: 0, C: 0 };
    this.answers.forEach(answer => {
      if (answer) counts[answer]++;
    });
    
    // Calcula os percentuais
    const total = this.answers.length;
    this.percentages = {
      D: Math.round((counts.D / total) * 100),
      I: Math.round((counts.I / total) * 100),
      S: Math.round((counts.S / total) * 100),
      C: Math.round((counts.C / total) * 100)
    };
    
    // Ordena os tipos por percentual (do maior para o menor)
    this.sortedTypes = Object.entries(this.percentages)
      .sort((a, b) => b[1] - a[1])
      .map(entry => entry[0]);
      
    console.log("Percentuais calculados:", this.percentages);
    console.log("Tipos ordenados:", this.sortedTypes);
  }
  
  // Método para mostrar os resultados
  showResults() {
    // Pega o perfil primário e secundário
    const primaryType = this.sortedTypes[0];
    const secondaryType = this.sortedTypes[1];
    
    const primaryProfile = this.profiles[primaryType];
    const secondaryProfile = this.profiles[secondaryType];
    
    // Preparar um resumo com ambos os perfis
    const profileSummary = `
      <strong>Perfil Primário: ${primaryProfile.name} (${this.percentages[primaryType]}%)</strong><br>
      ${primaryProfile.summary}<br><br>
      <strong>Perfil Secundário: ${secondaryProfile.name} (${this.percentages[secondaryType]}%)</strong><br>
      ${secondaryProfile.summary}
    `;
    
    // Gráfico de distribuição de perfis
    const profileDistribution = `
      <div class="profile-distribution">
        <div class="profile-bar">
          <div class="profile-label">D (${this.percentages.D}%)</div>
          <div class="profile-progress">
            <div class="profile-progress-bar" style="width: ${this.percentages.D}%"></div>
          </div>
        </div>
        <div class="profile-bar">
          <div class="profile-label">I (${this.percentages.I}%)</div>
          <div class="profile-progress">
            <div class="profile-progress-bar" style="width: ${this.percentages.I}%"></div>
          </div>
        </div>
        <div class="profile-bar">
          <div class="profile-label">S (${this.percentages.S}%)</div>
          <div class="profile-progress">
            <div class="profile-progress-bar" style="width: ${this.percentages.S}%"></div>
          </div>
        </div>
        <div class="profile-bar">
          <div class="profile-label">C (${this.percentages.C}%)</div>
          <div class="profile-progress">
            <div class="profile-progress-bar" style="width: ${this.percentages.C}%"></div>
          </div>
        </div>
      </div>
    `;
    
    document.getElementById('profile-summary').innerHTML = profileSummary + profileDistribution;
    document.getElementById('strengths').innerHTML = primaryProfile.strengths;
    document.getElementById('development-areas').innerHTML = primaryProfile.development;
    document.getElementById('interpersonal-relations').innerHTML = primaryProfile.relations;
    document.getElementById('decision-making').innerHTML = primaryProfile.decisions;
    document.getElementById('main-motivator').textContent = primaryProfile.mainMotivator;
    document.getElementById('secondary-motivator').textContent = secondaryProfile.mainMotivator;
    
    this.resultsSection.classList.remove('hidden');
    this.resultsSection.scrollIntoView({ behavior: 'smooth' });
    
    // Dispara evento para notificar que os resultados estão prontos
    document.dispatchEvent(new Event('resultsShown'));
  }
  
  // Método para gerar o PDF
  generatePDF() {
    // Defina as variáveis necessárias localmente
    const primaryType = this.sortedTypes[0];
    const secondaryType = this.sortedTypes[1];
    const primaryProfile = this.profiles[primaryType];
    const secondaryProfile = this.profiles[secondaryType];
    
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    const styles = {
      title: { size: 18, font: 'helvetica', style: 'bold' },
      subtitle: { size: 14, font: 'helvetica', style: 'bold' },
      normal: { size: 11, font: 'helvetica', style: 'normal' }
    };

    let y = 20;

    // Cabeçalho
    pdf.setFont(styles.title.font, styles.title.style);
    pdf.setFontSize(styles.title.size);
    pdf.text('Resultado do Perfil DISC', 105, y, { align: 'center' });
    y += 10;
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, 105, y, { align: 'center' });
    y += 15;
    
    // Barras de distribuição
    Object.entries(this.percentages).forEach(([type, percentage]) => {
      pdf.text(`${type}: ${percentage}%`, 20, y);
      
      // Desenha uma barra representando a porcentagem
      pdf.setFillColor(200, 200, 200);
      pdf.rect(40, y - 5, 100, 6, 'F');
      
      // Cor da barra de acordo com o tipo
      const colors = {
        D: [231, 76, 60], // Vermelho
        I: [241, 196, 15], // Amarelo
        S: [46, 204, 113], // Verde
        C: [52, 152, 219]  // Azul
      };
      
      pdf.setFillColor(...colors[type]);
      pdf.rect(40, y - 5, percentage, 6, 'F');
      
      y += 10;
    });
    
    y += 5;
    
    // Outras seções
    const sections = [
      { title: 'Relações Interpessoais', content: primaryProfile.relations.replace(/<br>/g, '\n') },
      { title: 'Tomada de Decisão', content: primaryProfile.decisions.replace(/<br>/g, '\n') },
      { title: 'Motivador Principal', content: primaryProfile.mainMotivator },
      { title: 'Motivador Secundário', content: secondaryProfile.mainMotivator }
    ];
    
    for (const section of sections) {
      if (y > 250) {
        pdf.addPage();
        y = 20;
      }
      
      pdf.setFont(styles.subtitle.font, styles.subtitle.style);
      pdf.setFontSize(styles.subtitle.size);
      pdf.text(section.title, 20, y);
      y += 8;
      
      pdf.setFont(styles.normal.font, styles.normal.style);
      pdf.setFontSize(styles.normal.size);
      
      if (section.content.includes('\n')) {
        const items = section.content.split('\n');
        items.forEach(item => {
          if (item.trim()) {
            const itemLines = pdf.splitTextToSize(`• ${item.trim()}`, 170);
            
            if (y + itemLines.length * 6 > 280) {
              pdf.addPage();
              y = 20;
            }
            
            pdf.text(itemLines, 20, y);
            y += itemLines.length * 6;
          }
        });
      } else {
        const contentLines = pdf.splitTextToSize(section.content, 170);
        
        if (y + contentLines.length * 6 > 280) {
          pdf.addPage();
          y = 20;
        }
        
        pdf.text(contentLines, 20, y);
        y += contentLines.length * 6;
      }
      
      y += 5;
    }
    
    // Resultado Principal
    pdf.setFont(styles.subtitle.font, styles.subtitle.style);
    pdf.setFontSize(styles.subtitle.size);
    pdf.text(`Perfil Primário: ${primaryProfile.name} (${this.percentages[primaryType]}%)`, 20, y);
    y += 10;
    
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    const profileTextLines = pdf.splitTextToSize(primaryProfile.summary, 170);
    pdf.text(profileTextLines, 20, y);
    y += profileTextLines.length * 6 + 5;
    
    // Perfil Secundário
    pdf.setFont(styles.subtitle.font, styles.subtitle.style);
    pdf.setFontSize(styles.subtitle.size);
    pdf.text(`Perfil Secundário: ${secondaryProfile.name} (${this.percentages[secondaryType]}%)`, 20, y);
    y += 10;
    
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    const secondaryTextLines = pdf.splitTextToSize(secondaryProfile.summary, 170);
    pdf.text(secondaryTextLines, 20, y);
    y += secondaryTextLines.length * 6 + 10;
    
    // Pontos fortes (do perfil primário)
    if (y > 250) {
      pdf.addPage();
      y = 20;
    }
    
    pdf.setFont(styles.subtitle.font, styles.subtitle.style);
    pdf.setFontSize(styles.subtitle.size);
    pdf.text('Pontos Fortes', 20, y);
    y += 8;
    
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    
    // Converter HTML para texto simples
    const strengths = primaryProfile.strengths.replace(/<br>/g, '\n').split('\n');
    strengths.forEach(item => {
      if (item.trim()) {
        const itemLines = pdf.splitTextToSize(`• ${item.trim()}`, 170);
        
        if (y + itemLines.length * 6 > 280) {
          pdf.addPage();
          y = 20;
        }
        
        pdf.text(itemLines, 20, y);
        y += itemLines.length * 6;
      }
    });
    
    y += 5;
    
    // Áreas de desenvolvimento
    if (y > 250) {
      pdf.addPage();
      y = 20;
    }
    
    pdf.setFont(styles.subtitle.font, styles.subtitle.style);
    pdf.setFontSize(styles.subtitle.size);
    pdf.text('Pontos de Desenvolvimento', 20, y);
    y += 8;
    
    pdf.setFont(styles.normal.font, styles.normal.style);
    pdf.setFontSize(styles.normal.size);
    
    // Converter HTML para texto simples
    const development = primaryProfile.development.replace(/<br>/g, '\n').split('\n');
    development.forEach(item => {
      if (item.trim()) {
        const itemLines = pdf.splitTextToSize(`• ${item.trim()}`, 170);
        
        if (y + itemLines.length * 6 > 280) {
          pdf.addPage();
          y = 20;
        }
        
        pdf.text(itemLines, 20, y);
        y += itemLines.length * 6;
      }
    });
    
    y += 5;
