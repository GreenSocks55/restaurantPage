import { create, appendArray } from "./common.js";

export default function renderAbout() {
  let content = document.querySelector('#content');
  content.innerHTML = ``;

  let aboutContent = create("div", "about-content");
  let h3 = create("h3", "", "Feel free to contact us on: ");
  let ul = create("ul", "");
  let li1 = create("li", "");
  let span1a = create("span", "", "Facebook: ");
  let span1b = create("span", "data", "GoodFoods4");
  let li2 = create("li", "");
  let span2a = create("span", "", "Instagram: ");
  let span2b = create("span", "data", "ggggoodfoods");
  let li3 = create("li", "");
  let span3a = create("span", "", "Twitter: ");
  let span3b = create("span", "data", "goodfoodzz4");
  let li4 = create("li", "");
  let span4a = create("span", "", "Website: ");
  let span4b = create("span", "data", "goodfoods.com");
  let li5 = create("li", "");
  let span5a = create("span", "", "Email: ");
  let span5b = create("span", "data", "goodfoods4@gmail.com");
  let li6 = create("li", "");
  let span6a = create("span", "", "Phone.no: ");
  let span6b = create("span", "data", "9841945834, 9841235476");

  appendArray(content, aboutContent);
  appendArray(aboutContent, [h3, ul]);
  appendArray(ul, [li1, li2, li3, li4, li5, li6]);
  appendArray(li1, [span1a, span1b]);
  appendArray(li2, [span2a, span2b]);
  appendArray(li3, [span3a, span3b]);
  appendArray(li4, [span4a, span4b]);
  appendArray(li5, [span5a, span5b]);
  appendArray(li6, [span6a, span6b]);
}
