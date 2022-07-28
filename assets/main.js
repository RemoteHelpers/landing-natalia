const root = document.documentElement;
const marqueeContent = document.querySelector('ul.running-string__list'); 
root.style.setProperty('--marquee-elements', marqueeContent.children.length);
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed');

for(let index = 0; index < marqueeElementsDisplayed.length; index++) {
    marqueeContent.appendChild(marqueeContent.children[index].cloneNode(true))
}  