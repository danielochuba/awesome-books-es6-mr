import { Library } from './modules/libraryClass.js';
import { DateTime } from './modules/luxon.js';

const dateData = DateTime.now();
document.querySelector('.date-time').innerText = dateData.toLocaleString(DateTime.DATETIME_MED);

const library = new Library('.books', 'title-input', 'author-input', '.add-btn');
library.displayBooks();

const listSection = document.querySelector('.list-section');
const addNewSection = document.querySelector('.add-new-section');
const contactSection = document.querySelector('.contact-section');
const listLink = document.querySelector('.link1');
const addNewLink = document.querySelector('.link2');
const contactLink = document.querySelector('.link3');

listLink.addEventListener('click', () => {
  listLink.classList.add('active');
  addNewLink.classList.remove('active');
  contactLink.classList.remove('active');
  listSection.style.display = 'block';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewLink.addEventListener('click', () => {
  listLink.classList.remove('active');
  addNewLink.classList.add('active');
  contactLink.classList.remove('active');
  listSection.style.display = 'none';
  addNewSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  listLink.classList.remove('active');
  addNewLink.classList.remove('active');
  contactLink.classList.add('active');
  listSection.style.display = 'none';
  addNewSection.style.display = 'none';
  contactSection.style.display = 'block';
});
