import funcs from "./funcs.js";

const data = [
  {
    'title': 'Instituto Rosario Castellanos',
    'description': 'Aula Virtual del Instituto de Estudios Superiores Rosario Castellanos. Uno de los proyectos educativos mas ambiciosos de la CDMX desde la creación de la Universidad Autónoma de la Ciudad de México',
    'url': 'http://189.240.71.205/piirc/',
    'cover': './static/iesrc.png',
    'tags': ['PHP', 'CSS3', 'Javascript', 'Moodle', 'Linux']
  },
  {
    'title': 'Formación Integral',
    'description': 'Si estudias en la Universidad Abierta y a Distancia de México (UnADM), puedes beneficiarte de su catálogo de cursos gratuitos de Formación Contínua. Los temas van desde Técnicas y Estrategias de Lectura, hasta la Equidad de Género y Construcción Ciudadana.',
    'url': 'http://formacionintegral.unadmexico.mx/FI',
    'cover': './static/fi.png',
    'tags': ['PHP', 'CSS3', 'Javascript', 'Moodle', 'Linux']
  },
  {
    'title': 'Ration IO App',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'https://ration.io',
    'cover': './static/ration.png',
    'tags': ['Sails.js', 'APIS', 'Bootstrap', 'EJS', 'Heroku']
  },
  {
    'title': 'Podcasts App',
    'description': 'Navega y descubre nuevos audios todos los días con este sencillo cliente de audioboom.com construido con NextJS, que trae para tí cientos Podcasts organizados en canales temáticos.',
    'url': 'https://davidherzlos-podcasts-smbzjpwwtj.now.sh',
    'cover': './static/podcasts.png',
    'tags': ['APIS', 'React', 'Next.Js', 'CSS Grids', 'Now.sh']
  },
  {
    'title': 'RI UnADM',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'http://www.repositorio.unadmexico.mx:8080/jspui',
    'cover': './static/ri-unadm.png',
    'tags': ['Html5', 'Dspace', 'Linux', 'CSS', 'PostgreSQL']
  },
  {
    'title': 'Canon Demo Platform',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'http://52.204.73.6',
    'cover': './static/canon-demo.png',
    'tags': ['PHP', 'CSS3', 'Javascript', 'Moodle', 'Linux']
  },
  {
    'title': 'Unaq Virtual',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'http://unaq.mrooms.net',
    'cover': './static/unaq.png',
    'tags': ['PHP', 'CSS3', 'Jquery', 'Linux']
  },
  {
    'title': 'Expensy App',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'http://expensy-davidherzlos.herokuapp.com',
    'cover': './static/expensy.png',
    'tags': ['PHP', 'Laravel', 'Bootstrap', 'Heroku']
  },
  {
    'title': 'Gatornito',
    'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday.`,
    'url': 'https://davidherzlos.github.io/gatornito/',
    'cover': './static/gatornito.png',
    'tags': ['HTML5', 'CSS', 'Javascript']
  }
];

const template = project => {
  return (`
  <article class="project" aria-label="interactive flipping card on mouse over" aria-hidden="false">
    <div class="project_link-container">
      <h1 class="project_title">${project.title}</h1>
      <figure class="project_image-wrapper">
        <img class="project_image" src="${project.cover}" alt="${project.title}" title="${project.title}">
        <figcaption class="project_info-wrapper" title="${project.title}">
          <p class="project_info">${project.description}</p>
          <div class="project-skills">
            ${project.tags.map(tag => '<span>' + tag + '</span>').join('')}
          </div>
        </figcaption>
      </figure>
    </div>
    <div class="project-button">
      <a href="${project.url}" title="Go to project ${project.title}" rel="external">
        View project <i class="fas fa-external-link-alt"></i>
      </a>
    </div>
  </article>`)
};

const projects = {};

projects.render = () => {

  const renderHTML = funcs.curried.renderHTML(template);
  const addToDOM = funcs.curried.addToDOM('#projects', 'beforeend');
  const display = funcs.curried.display(renderHTML, addToDOM);

  const iterator = funcs.createIterator(data);
  document.querySelector('#view-more').addEventListener('click', e => {
    e.preventDefault();
    display(funcs.getFromIterator(4, iterator));
  });

  display(funcs.getFromIterator(4, iterator));

};

export default projects;
