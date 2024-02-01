document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    const restartBtn = document.getElementById('restartBtn');

    let currentPlayer = 'X';
    let gameBoard = Array(9).fill('');
    let gameOver = false;

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
                return gameBoard[a];
            }
        }

        if (!gameBoard.includes('')) {
            return 'tie';
        }

        return null;
    };

    const handleClick = (index) => {
        if (!gameOver && gameBoard[index] === '') {
            gameBoard[index] = currentPlayer;
            board.children[index].innerHTML = `<img src="${currentPlayer}.png" alt="${currentPlayer}">`;

            const winner = checkWinner();

            if (winner) {
                if (winner === 'tie') {
                    message.textContent = 'DEU VELHA!';
                } else {
                    message.innerHTML = `<img src="${winner}.png" alt="${winner}"> VENCEU!`;
                }
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    };

    const restartGame = () => {
        gameBoard = Array(9).fill('');
        gameOver = false;
        currentPlayer = 'X';
        message.textContent = '';
        board.innerHTML = Array.from({ length: 9 }, () => '<div class="cell"></div>').join('');

        document.querySelectorAll('.cell').forEach((cell, index) => {
            cell.addEventListener('click', () => handleClick(index));
        });
    };

    restartBtn.addEventListener('click', restartGame);

    board.innerHTML = Array.from({ length: 9 }, () => '<div class="cell"></div>').join('');
    document.querySelectorAll('.cell').forEach((cell, index) => {
        cell.addEventListener('click', () => handleClick(index));
    });
});