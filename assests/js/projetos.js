export function toggleProjects() {
    const loadMoreButton = document.getElementById('loadMore');
    const allCards = document.querySelectorAll('.projetos-grid .projeto-card');
    let showingMore = false;

    loadMoreButton.addEventListener('click', function() {
        if (!showingMore) {
            // Mostrar todos os projetos
            allCards.forEach(card => card.classList.remove('hidden'));
            loadMoreButton.innerText = 'Mostrar Menos';
            showingMore = true;
        } else {
            // Ocultar todos os projetos exceto os dois primeiros
            allCards.forEach((card, index) => {
                if (index >= 2) {
                    card.classList.add('hidden');
                }
            });
            loadMoreButton.innerText = 'Mais Projetos';
            showingMore = false;
        }
    });
}
