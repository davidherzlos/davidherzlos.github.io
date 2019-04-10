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


  // Projects section
  const projectsData = [
    {
      'title': 'Formación Integral',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'http://formacionintegral.unadmexico.mx/FI',
      'cover': './static/fi.png',
      'tags': ['PHP', 'CSS3', 'Javascript', 'Moodle', 'Linux']
    },
    {
      'title': 'Ration IO App',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'https://ration.io',
      'cover': './static/ration.png',
      'tags': ['Sails.js', 'APIS', 'Stripe', 'Mailgun', 'Bootstrap', 'EJS', 'Heroku']
    },
    {
      'title': 'Podcasts App',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'https://davidherzlos-podcasts-smbzjpwwtj.now.sh',
      'cover': './static/podcasts.png',
      'tags': ['APIS', 'React', 'Next.Js', 'CSS Grids', 'Now.sh']
    },
    {
      'title': 'Repositorio Institucional UnADM',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'http://www.repositorio.unadmexico.mx:8080',
      'cover': './static/ri-unadm.png',
      'tags': ['Html5', 'Dspace', 'Linux', 'CSS', 'PostgreSQL']
    },
    {
      'title': 'Canon Demo Platform',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'http://52.204.73.6',
      'cover': './static/canon-demo.png',
      'tags': ['PHP', 'CSS3', 'Javascript', 'Moodle', 'Linux']
    },
    {
      'title': 'Unaq Virtual',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'http://unaq.mrooms.net',
      'cover': './static/unaq.png',
      'tags': ['PHP', 'CSS3', 'Jquery', 'Linux']
    },
    {
      'title': 'Expensy App',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'http://expensy-davidherzlos.herokuapp.com',
      'cover': './static/expensy.png',
      'tags': ['PHP', 'Laravel', 'Bootstrap', 'Heroku']
    },
    {
      'title': 'Page Speed Insights',
      'description': `Sharing items with Ration is super easy. Take a picture of stuff you don't want to take up space in your home, but still kinda want to keep in case you need it someday. Then, if a friend needs it, they'll come get it!`,
      'url': 'https://davidherzlos.github.io/page-speed-insights',
      'cover': './static/page-speed.png',
      'tags': ['HTML5', 'CSS', 'Javascript']
    }
  ];
  
  const projectTemplate = function(project) {
    return (`
    <article class="project">
      <a class="project_link-container" href="${project.url}">
        <h1 class="project_title">${project.title}</h1>
        <figure class="project_image-wrapper">
          <img class="project_image" src="${project.cover}" alt="${project.title}">
          <figcaption class="project_info-wrapper">
            <p class="project_info">${project.description}</p>
            <div class="skills">
              ${project.tags.map(tag => '<span>' + tag + '</span>').join('')}
            </div>
          </figcaption>
        </figure>
      </a>
    </article>`);
  }

  const createIterator = function*(data){
    for (const item of data) {
      yield item;
    }
  }

  // Aka compose function
  const renderer = function (formatFn, insertFn) {
    return function(list){
      insertFn(formatFn(list));
    }
  }
  
  const htmlElements = function(template){
    return function(list){
      return list.map( object => template(object) );
    }
  }
  
  const addToDoom = async function (selector, position) {
    $container = document.querySelector(selector);
    return (htmlChilds) => {
      htmlChilds.forEach(function (child) {
        $container.insertAdjacentHTML(position, child);        
      });
    }
  };
  
  const loadProjects = function (amount, iterator, renderer) {
    const projectList = getFromIterator(amount, iterator);
    renderer(projectList);
  }
  
  const getFromIterator = function(amount, iteratorObject){
    var items = [];
    for (let idx = 0; idx < amount; idx++) {
      items.push(iteratorObject.next().value);
    }
    return items;
  }

  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(inDebounce);
      inDebounce = setTimeout( () => (
        func.apply(context, args), delay
        ))
    }
  }

  const projectsSource = createIterator(projectsData);

  const projectsRenderer = renderer(
    htmlElements(projectTemplate), 
    await addToDoom('.projects', 'beforeend'));

  loadProjects(4, projectsSource, projectsRenderer);

  loadMoreProjects = debounce(loadProjects, 100);
  const $loadProjectsButton = document.querySelector('.projects_more-button');
  $loadProjectsButton.addEventListener('click', function(event){
    event.preventDefault();
    loadMoreProjects(4, projectsSource, projectsRenderer);
  });

  // window.addEventListener('scroll', function(event) {
  //   const docHeight = document.documentElement.offsetHeight;
  //   const windowHeight = window.innerHeight;
  //   const docScrolling = document.documentElement.scrollTop;
    
  //   if (docHeight - docScrolling === windowHeight) {
  //     loadMoreProjects(3, projectsSource, projectsRenderer);
  //   }
  // });

}());
