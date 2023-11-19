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

funcs.loadTemplate = template => {
    const filePath = config.templatesDir + '/' + template + '.html';
    return fetch(filePath).then((res) => res.text()).catch((e) => console.error(e));
}


funcs.renderTemplate = (template) => {
    return funcs.loadTemplate(template).then(html => {

        const partialMatches = html.matchAll(/partial{([^}]+)}/g)
        const partials = []

        for (const match of partialMatches) {
            const [token, subTemplate] = match
            partials.push({
                'token': token,
                'promise': funcs.renderTemplate(subTemplate)
            })
        }

        const promises = partials.map(partial => partial.promise)

        return Promise.all(promises).then(partialsHtml => {

            for (const [index, partial] of partials.entries()) {
                const re = new RegExp(partial.token, "g")
                html = html.replace(re, partialsHtml[index])
            }

            return html
        })

    })
}

// funcs.renderTemplate = (name) => {
//     return funcs.loadTemplate(name).then(template => {
//         const partialsRegExp = template.matchAll(/t{([^}]+)}/g)
//         for (const match of partialsRegExp) {
//             const [partialToken, partialName] = match
//             return funcs.renderTemplate(partialName).then(partial => {
//                 const re = new RegExp(partialToken, "g");
//                 return template.replace(re, partial)
//             })
//         }
//         return template
//     })
// }

export default funcs;
