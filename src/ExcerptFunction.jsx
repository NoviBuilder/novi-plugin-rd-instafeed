export function validInstagramElement(element){
    if (!element) return false;
    if (!novi.element.getAttribute(element, 'data-instafeed-get')) return false;
    return !hasValidAttribute(element);
}

function hasValidAttribute(element){
    return !novi.element.getAttribute(element, 'data-instafeed-user') && !novi.element.getAttribute(element, 'data-instafeed-tagname');
}
