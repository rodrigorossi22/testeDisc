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
  // ... (todas as outras perguntas do array original)
  // Manter exatamente o mesmo array de perguntas que você tinha antes
];

const profiles = {
  D: {
    name: "Dominante (D)",
    summary: "Você é uma pessoa determinada, direta e orientada para resultados...",
    strengths: "Liderança natural;<br>Capacidade de resolver problemas rapidamente;<br>Foco em metas e resultados.",
    development: "Pode ser impulsivo(a)...<br>Dificuldade em lidar com ambiguidades.",
    relations: "Interage de forma assertiva e direta...",
    decisions: "Toma decisões rápidas e baseadas em resultados imediatos.",
    mainMotivator: "Alcançar metas ambiciosas e ser reconhecido(a).",
    secondaryMotivator: "Criar conexões e inspirar outras pessoas."
  },
  // ... (todos os outros perfis do objeto original)
  // Manter exatamente o mesmo objeto de perfis que você tinha antes
};

class DiscTest {
  constructor(questions, profiles) {
    this.questions = questions;
    this.profiles = profiles;
    this.currentQuestion = 0;
    this.answers = Array(questions.length).fill(null);
    
    this.initElements();
    this.renderQuestion();
    this.setupEventListeners();
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
    document.getElementById('pdf-btn').addEventListener('click', () => this.generatePDF());
  }
  
 renderQuestion() {
  this.formElement.innerHTML = '';
  
  const question = this.questions[this.currentQuestion];
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question-card active'; // Adicionei 'active'
  questionDiv.innerHTML = `<h3>${this.currentQuestion + 1}. ${question.question}</h3>`;
  
  Object.entries(question.options).forEach(([key, text]) => {
    const optionId = `q${this.currentQuestion}-${key}`;
    const isChecked = this.answers[this.currentQuestion] === key;
    
    questionDiv.innerHTML += `
      <div class="answer-option ${isChecked ? 'selected' : ''}" data-value="${key}">
        <input type="radio" id="${optionId}" name="q${this.currentQuestion}" 
               value="${key}" ${isChecked ? 'checked' : ''} hidden />
        <label for="${optionId}">${text}</label>
      </div>
    `;
  });
  
  this.formElement.appendChild(questionDiv);
  this.updateProgress();
  
  // Mostrar apenas a pergunta atual
  document.querySelectorAll('.question-card').forEach((card, index) => {
    card.style.display = index === this.currentQuestion ? 'block' : 'none';
  });

  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      const value = option.getAttribute('data-value');
      this.answers[this.currentQuestion] = value;
      this.renderQuestion();
    });
  });
}
  
  updateProgress() {
    const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
    this.progressBar.style.width = `${progress}%`;
    this.progressText.textContent = `Pergunta ${this.currentQuestion + 1} de ${this.questions.length}`;
    
    this.prevBtn.disabled = this.currentQuestion === 0;
    this.nextBtn.disabled = this.currentQuestion === this.questions.length - 1;
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
      this.showResults();
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
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();
    
    pdf.setFont('helvetica');
    pdf.setFontSize(20);
    pdf.text('Seu Perfil DISC', 105, 20, { align: 'center' });
    
    pdf.setFontSize(10);
    pdf.text(`Gerado em: ${new Date().toLocaleDateString()}`, 105, 30, { align: 'center' });
    
    pdf.setFontSize(12);
    let yPosition = 45;
    
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
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new DiscTest(questionsData, profiles);
});
