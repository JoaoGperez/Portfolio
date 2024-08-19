// inicio.js

export function initTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const fullText = typingText.textContent;
    typingText.textContent = ''; // Limpa o texto inicial

    let charIndex = 0;

    // Função para adicionar letras ao texto
    const typeLetter = () => {
        if (charIndex < fullText.length) {
            typingText.textContent += fullText[charIndex];
            charIndex++;
            setTimeout(typeLetter, 150); 
        }
    };

    // Inicia a animação de digitação após um breve atraso para sincronizar com o cursor
    setTimeout(() => {
        typingText.style.visibility = 'visible';
        typeLetter();
    }, 100);
}

// Chama a função quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initTypingEffect();
});
