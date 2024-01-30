const images = [
    '../img/memoria/image1.png', '../img/memoria/image2.png', '../img/memoria/image3.png', '../img/memoria/image4.png', '../img/memoria/image5.png', '../img/memoria/image6.png', '../img/memoria/image7.png', '../img/memoria/image8.png', '../img/memoria/image9.png', '../img/memoria/image10.png', '../img/memoria/image11.png', '../img/memoria/image12.png',
    '../img/memoria/image1.png', '../img/memoria/image2.png', '../img/memoria/image3.png', '../img/memoria/image4.png', '../img/memoria/image5.png', '../img/memoria/image6.png', '../img/memoria/image7.png', '../img/memoria/image8.png', '../img/memoria/image9.png', '../img/memoria/image10.png', '../img/memoria/image11.png', '../img/memoria/image12.png'
];


    let flippedCards = [];
    let matches = 0;

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createCard(image, index) {
    const card = document.createElement('div');
    card.classList.add('memory-card');
    card.innerHTML = `
        <div class="card" onclick="flipCard(this, ${index})">
            <div class="card-front">
                <img src="../img/memoria/capa.png" alt="Card Back">
            </div>
            <div class="card-back">
                <img src="${image}" alt="Card Image">
            </div>
        </div>
    `;
    return card;
}


    function initializeGame() {
        matches = 0;
        flippedCards = [];
        const gameBoard = document.getElementById('game-board');
        gameBoard.innerHTML = '';
        
        shuffle(images);

        for (let i = 0; i < images.length; i++) {
            const card = createCard(images[i], i);
            gameBoard.appendChild(card);
        }

        const congratsMessage = document.getElementById('congrats-message');
        congratsMessage.style.display = 'none';

        const playAgainBtn = document.getElementById('play-again-btn');
        playAgainBtn.style.display = 'none';
    }

function flipCard(cardElement, index) {
    const card = { index, cardElement };

    // Verifica se o cartão já foi virado ou já está em um par
    if (!cardElement.classList.contains('flipped') && flippedCards.length < 2) {
        cardElement.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

    function checkMatch() {
        const [card1, card2] = flippedCards;

        if (images[card1.index] === images[card2.index]) {
            card1.cardElement.removeEventListener('click', () => flipCard(card1.cardElement, card1.index));
            card2.cardElement.removeEventListener('click', () => flipCard(card2.cardElement, card2.index));
            matches++;

            if (matches === images.length / 2) {
                showCongratulations();
            }
        } else {
            card1.cardElement.classList.remove('flipped');
            card2.cardElement.classList.remove('flipped');
        }

        flippedCards = [];
    }

    function showCongratulations() {
        const congratsMessage = document.getElementById('congrats-message');
        const playAgainBtn = document.getElementById('play-again-btn');
        congratsMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
    }

    function resetGame() {
        initializeGame();
    }

    initializeGame();