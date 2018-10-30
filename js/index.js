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
    { title: 'Canon Training Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Podcasts WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'UnAQ Virtual Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Formacion Integral UnADM', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'RAD Repository UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Collaborate Moodle Plugin', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Moodle Tunnig UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Articulate Courses', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Ration WebApp', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Laratter WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Canon Training Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Podcasts WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'UnAQ Virtual Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Formacion Integral UnADM', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'RAD Repository UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Collaborate Moodle Plugin', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Moodle Tunnig UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Articulate Courses', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Ration WebApp', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Laratter WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Canon Training Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Podcasts WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'UnAQ Virtual Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Formacion Integral UnADM', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'RAD Repository UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Collaborate Moodle Plugin', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Moodle Tunnig UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Articulate Courses', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Ration WebApp', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Laratter WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Canon Training Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Podcasts WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'UnAQ Virtual Platform', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Formacion Integral UnADM', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'RAD Repository UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Collaborate Moodle Plugin', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Moodle Tunnig UnADM', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Articulate Courses', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Ration WebApp', img: './static/project-image2.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' },
    { title: 'Laratter WebApp', img: './static/project-image.png', alt: 'Project alt text', info: 'Frontend Dev, Design', description: 'lorem ipsum bla bla bla lorem amend' }
  ];
    
  const projectTemplate = function(project) {
    return (`
    <article class="project">
      <a class="project_link-container" href="#">
        <h1 class="project_title">${project.title}</h1>
        <figure class="project_image-wrapper">
          <img class="project_image" src="${project.img}" alt="${project.alt}">
          <figcaption class="project_info-wrapper">
            <span>${project.info}</span>
            <p class="project_info">${project.description}</p>
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
