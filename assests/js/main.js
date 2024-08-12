// main.js

import { setupMenu } from './menu.js';
import { initTypingEffect } from './inicio.js';


// Inicializa o menu quando o documento estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    setupMenu();
    initTypingEffect();

});
