import {create, appendArray} from './common.js';

export default function renderHome () {
    let content = document.querySelector('#content');
    content.innerHTML = ``;
    
    let homeContent = create('div', 'home-content');

    appendArray(content, homeContent);

    let h3 = create('h3', ' ', 'Greetings from the GoodFoods Cafe Family~');
    let span = create('span', 'break');
    let sectionFirst = create('div','section-first');
    let sectionFirstp = create('p', '','Are you looking for a cafe to spend your free time with your loved ones, friend and families? Or even rather spend time with yourself on your own? Or how about reading a book? Whatever it might be, GoodFoods Cafe will ensure you that you have the perfect environment, food and time in the cafe. Why not have a good time?');
    let sectionFirstimg = create('div', 'img-container');
    let span2= create('span', 'break');
    let sectionSecond = create('div', 'section-second');
    let sectionSecondp = create('p','','Our cafe has excellent environment for you to spend your time whether you want it in the open garden, a closed room, a standard hall or whatnot. Even more so, packed with delicious foods our cafe provides polite and genuine service. We make sure to treat our customers as a part of our own family and that they have the best time during their stay in our cafe.');
    let sectionSecondimg = create('div', 'img-container');
    let span3= create('span', 'break');
    let sectionThird = create('div', 'section-third');
    let imgContainerA = create('div', 'img-container-a');
    let imgContainerB = create('div', 'img-container-b');
    let h4 = create('h4', 'ending', 'We will be patiently waiting for you!');
    let span4 = create('span','break');

    appendArray(homeContent, [h3, span, sectionFirst, span2, sectionSecond, span3, sectionThird, h4, span4]);
    appendArray(sectionFirst, [sectionFirstp, sectionFirstimg]);
    appendArray(sectionSecond, [sectionSecondimg, sectionSecondp]);
    appendArray(sectionThird, [imgContainerA, imgContainerB])
}