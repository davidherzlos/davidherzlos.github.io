import config from '../config.js';

const funcs = {};

funcs.curried = {};

funcs.curried.renderHTML = function(template) {
    return function(list){
        return list.map( object => template(object) );
    };
};

funcs.curried.addToDOM = function (selector, position) {
    return async (htmlChilds) => {
        const $container = document.querySelector(selector);
        htmlChilds.forEach(function (child) {
            $container.insertAdjacentHTML(position, child);
        });
    };
};

funcs.curried.display = function (renderFunc, domFunc) {
    return function(list){
        domFunc(renderFunc(list));
    };
};

funcs.createIterator = function*(data) {
    for (const item of data) {
        yield item
    }
};

funcs.getFromIterator = function(amount, iteratorObject){
    var items = []
    for (let idx = 0; idx < amount; idx++) {
        items.push(iteratorObject.next().value)
    }
    return items
};

funcs.loadTemplate = (template) => {
    const filePath = config.templatesDir + '/' + template + '.html';
    return fetch(filePath).then((res) => res.text()).catch((e) => console.error(e));
}

export default funcs;
