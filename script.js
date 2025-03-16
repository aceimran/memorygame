// Image URLs (you can replace these with your own)
const imageSources = [
    'https://i.pinimg.com/736x/59/1c/19/591c19123cc64c91f7946130fd729cb6.jpg',
    'https://i.pinimg.com/736x/4d/89/49/4d8949f9553c4fb723fc7f7c301ae084.jpg',
    'https://i.pinimg.com/736x/9b/45/61/9b456155cd35f9bdfcbca58b397edb75.jpg',
    'https://i.pinimg.com/736x/8f/d4/2e/8fd42e6cb328b660a04e2f132f040cec.jpg',
    'https://i.pinimg.com/736x/19/8b/a0/198ba072f18da83ca3a5072e8b887611.jpg',
    'https://i.pinimg.com/736x/c3/cc/9b/c3cc9bab142e7b8f42e8477b5aef8155.jpg',
    'https://i.pinimg.com/736x/54/c2/1b/54c21b7509f700c90c2ac8b27e85c592.jpg',
    'https://i.pinimg.com/736x/d1/4e/15/d14e15ef45e34499a4a081ea338e9254.jpg',
  ];
  
  // Duplicate and shuffle images
  let cardsArray = [...imageSources, ...imageSources];
  cardsArray.sort(() => 0.5 - Math.random());
  
  const gameBoard = document.getElementById('game-board');
  let flippedCards = [];
  let lockBoard = false;
  
  // Create cards with images
  cardsArray.forEach(src => {
    const card = document.createElement('div');
    card.classList.add('card');
  
    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">❓</div>
        <div class="card-back"><img src="${src}" alt="memory image" /></div>
      </div>
    `;
  
    card.addEventListener('click', () => flipCard(card));
    gameBoard.appendChild(card);
  });
  
  function flipCard(card) {
    if (lockBoard || flippedCards.includes(card)) return;
  
    card.classList.add('flip');
    flippedCards.push(card);
  
    if (flippedCards.length === 2) {
      lockBoard = true;
      const [first, second] = flippedCards;
      const firstImg = first.querySelector('.card-back img').src;
      const secondImg = second.querySelector('.card-back img').src;
  
      if (firstImg === secondImg) {
        flippedCards = [];
        lockBoard = false;
      } else {
        setTimeout(() => {
          first.classList.remove('flip');
          second.classList.remove('flip');
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }
  }
  

