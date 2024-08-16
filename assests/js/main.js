// main.js

import { setupMenu } from './menu.js';
import { smoothScroll } from './menu.js';
import { initTypingEffect } from './inicio.js';
import { toggleProjects } from './projetos.js';

// Inicializa o menu quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    smoothScroll();
    initTypingEffect();
    toggleProjects();

});

