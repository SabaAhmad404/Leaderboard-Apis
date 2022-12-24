// get it
// post it
//  fetch to select it
// await
const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xFYWNQ1BMLcrnYEsH7Bp/scores/';
  const response = await fetch(url);
  const data = await response.json();
  const innerPars = document.querySelector('.inner-paragraph');
  const getFunction = (data) => {
    data.result.forEach((e) => {
      const para = document.createElement('p');
      para.innerText = `${e.user}:${e.score}`;
      innerPars.append(para);
    });
  };
  getFunction(data);
};
export { getData as default };
