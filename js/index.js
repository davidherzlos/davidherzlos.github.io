(async function () {
  // Tools
    // Ramda
    // Lodash
    // RXJS
    // Inmutable
    // Mocha
    // Chai


  // create projects section
    // get source of projects data
    // load projects data list
    // render projects in dom
      // create html elements
      // insert elements in container

  // TODO:
  // Implement animated anchor linking


  // Data
  const projectsData = [
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
  ]

  // Library functions
  const projectTemplate = function(project) {
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
          View project
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    </article>`)
  }

  const createIterator = function*(data){
    for (const item of data) {
      yield item
    }
  }

  // A new function composition
  const renderer = function (formatFn, insertFn) {
    return function(list){
      insertFn(formatFn(list))
    }
  }

  const htmlElements = function(template){
    return function(list){
      return list.map( object => template(object) )
    }
  }

  const addToDoom = async function (selector, position) {
    $container = document.querySelector(selector)
    return (htmlChilds) => {
      htmlChilds.forEach(function (child) {
        $container.insertAdjacentHTML(position, child)
      })
    }
  }

  const loadProjects = function (amount, iterator, renderer) {
    const projectList = getFromIterator(amount, iterator)
    renderer(projectList)
  }

  const getFromIterator = function(amount, iteratorObject){
    var items = []
    for (let idx = 0; idx < amount; idx++) {
      items.push(iteratorObject.next().value)
    }
    return items
  }

  const debounce = (func, delay) => {
    let inDebounce
    return function() {
      const context = this
      const args = arguments
      clearTimeout(inDebounce)
      inDebounce = setTimeout( () => (
        func.apply(context, args), delay
        ))
    }
  }

  // Scripting
  const projectsSource = createIterator(projectsData)
  const projectsRenderer = renderer(
    htmlElements(projectTemplate), 
    await addToDoom('.projects', 'beforeend') // Use the id instead of the class
    )

  loadProjects(4, projectsSource, projectsRenderer)
  const loadMoreProjects = debounce(loadProjects, 100)

  let $viewmore = document.querySelector('.view-more-button')
  $viewmore.addEventListener('click', function(event){
    event.preventDefault()
    loadMoreProjects(4, projectsSource, projectsRenderer)
  })
}())
