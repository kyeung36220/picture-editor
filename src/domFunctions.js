export function select(item) {
    return document.querySelector(item);
}

export function create(item) {
    return document.createElement(item);
}

export function editText(item, text) {
    item.textContent = text;
}

export function addClass(item, className) {
    item.classList.add(className);
}

export function removeClass(item, className) {
    item.classList.remove(className);
}

export function append(parent, child) {
    parent.appendChild(child);
}

export function capitalize(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function insert(parent, item, beforeWhatIndex) {
    parent.insertBefore(item, parent.children[beforeWhatIndex]);
}

export function addId(item, idName) {
    item.id = idName;
}

export function getId (item) {
    return item.id;
}
export function editValue(item, value) {
    item.value = value;
}

export function createUIItem(stringTitle, typeOfElement, arrayOfExtraClasses, appendingParent) {
    const item = create(typeOfElement);

    if (stringTitle != "") {
        addClass(item, stringTitle);
    }

    if (arrayOfExtraClasses.length > 0) {
        for (let i = 0; i < arrayOfExtraClasses.length; i++) {
            addClass(item, arrayOfExtraClasses[i]);
        }
    }

    if (appendingParent != "") {
        append(appendingParent, item);
    }

    return item;
}