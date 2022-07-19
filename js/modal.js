let workCardContainer = document.querySelector('.main-projects');

const works = {
  avocode: {
    title: 'Avocode Portfolio',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './assets/images/screenshot2.png',
    lang_list: ['javascript', 'html', 'css'],
    breadcrumbs: ['Home', 'Works', 'Calenda'],
    source: 'https://github.com/niicode/portfolio',
    live_demo: 'https://niicode.github.io/portfolio/',
  },
  calenda: {
    title: 'Calenda Web App',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './assets/images/screenshot3.png',
    lang_list: ['javascript', 'html', 'css'],
    breadcrumbs: ['Home', 'Works', 'Calenda'],
    source: 'https://github.com/niicode/portfolio',
    live_demo: 'https://niicode.github.io/portfolio/',
  },
  printing: {
    title: 'Printing Made Easy',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './assets/images/screenshot4.png',
    lang_list: ["javascript", 'html', 'css'],
    breadcrumbs: ['Home', 'Works', 'Calenda'],
    source: 'https://github.com/niicode/portfolio',
    live_demo: 'https://niicode.github.io/portfolio/',
  },
  gymfit: {
    title: 'GymFit',
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    featured_image: './assets/images/screenshot1.png',
    lang_list: ['javascript', 'html', 'css'],
    breadcrumbs: ['Home', 'Works', 'Calenda'],
    source: 'https://github.com/niicode/portfolio',
    live_demo: 'https://niicode.github.io/portfolio/',
  },
};

const workCardShouldReverse = (index) => {
  if (index % 2 === 0) {
    return "row-reverse work-item-2";
  }
  return "work-item-1";
}

const breadcrumbsHtml = (workObj, key, bread = "") => {
  /* eslint-disable no-restricted-syntax */
  for (const breadcrumb in workObj[key].breadcrumbs) {
    if (breadcrumb) {
      bread += `<li>${workObj[key].breadcrumbs[breadcrumb]}</li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return bread;
}

const languageHtml = (workObj, key, langList = "") => {
  /* eslint-disable no-restricted-syntax */
  for (const lang in workObj[key].lang_list) {
    if (lang) {
      langList += `<li><span>${workObj[key].lang_list[lang]}</span></li>`;
    }
  }
  /* eslint-enable no-restricted-syntax */
  return langList;
}

let workCard = "";
let index = 0;

for (const key in works) {
  if (key) {
    index += 1;
    workCard += `  <section class="main-project-1 ${workCardShouldReverse(
      index
    )}">
        <img src="${works[key].featured_image}" alt="${works[key].title}" />
        <div class="card work-card">
          <h3 class="font-style">${works[key].title}</h3>
          <div class="card-highlights work-period"> 
            <ul>
              ${breadcrumbsHtml(works, key)} 
            </ul>
          </div>
          <p class="font-style card-description">
           ${works[key].description}
          </p>
          <ul class="card-languages">
            ${languageHtml(works, key)}
          </ul>
          <button type="button" data-work="${key}" class="btn project-button">
            See Project
          </button>
        </div>
      </section>`;
  }
}

workCardContainer.innerHTML = workCard;
const seeProjectButtons = document.querySelectorAll('.project-button');
const closeModal = document.querySelector('.modal-close');

const showWorkModal = (work) => {// fetch the work from the works object
    const workDetails = works[work];
    document.querySelector('.modal-title').innerHTML = workDetails.title;// insert title to the modal
    document.querySelector('.featured-image').src = workDetails.featured_image;// insert image to the modal
    document.querySelector('.modal-description').innerHTML = workDetails.details; // insert description to the modal
    document.querySelector('.work-modal-breadcrumbs > ul').innerHTML = breadcrumbsHtml(works, work); // add the breadcrumbs to the modal
    document.querySelector('.work-modal-languages > ul').innerHTML = languageHtml(works, work);// add the languages to the modal
    document.querySelector('#work-modal-live-demo').href = workDetails.live_demo;// add live demo link
    document.querySelector('#work-modal-source').href = workDetails.source;  // add source link
    document.querySelector('.modal').style.display = 'flex';// show the modal with transition
}

seeProjectButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    showWorkModal(event.target.dataset.work);
    document.querySelector('.modal').style.display = 'flex';
  }, false);
});

closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});