function create(elementName, classArray = '', text = '') {
    let newElement = document.createElement(`${elementName}`);
    if (classArray == '' || classArray == ' ') {

    }
    else if (Array.isArray(classArray)) {
        for (let className of classArray) {
            newElement.classList.add(`${className}`);
        }
    }
    else {
        newElement.classList.add(`${classArray}`);
    }
    newElement.textContent = text;
    // console.log(newElement);
    return (newElement);
}

function appendArray (parent, childArray) {
    if (Array.isArray(childArray)) {
        for (let child of childArray) {
            parent.appendChild(child);  
        }
    }
    else {
        parent.appendChild(childArray);
    }
}

export {create, appendArray}