import './style.css';
import getData from './modules/get.js';
import postData from './modules/post.js';

/// buttons//

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', () => {
  postData();
});

const refreshButton = document.querySelector('.refresh-button');
refreshButton.addEventListener('click', () => {
  getData();
});
