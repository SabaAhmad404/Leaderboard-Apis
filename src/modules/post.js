const player = document.querySelector('#text');
const playerScore = document.querySelector('#score-text');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xFYWNQ1BMLcrnYEsH7Bp/scores/';

let playerNames = {
  user: '',
  score: '',
};
player.addEventListener('input', (e) => {
  const player = e.target.value.trim();
  playerNames = {
    ...playerNames,
    user: player,
  };
});

playerScore.addEventListener('input', (e) => {
  const playerScore = e.target.value.trim();
  playerNames = {
    ...playerNames,
    score: playerScore,
  };
});

const postData = async () => {
  const params = {
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(playerNames),
  };
  await fetch(url, params).then((response) => response.json());
};

export { postData as default };
