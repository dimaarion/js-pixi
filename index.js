// Import stylesheets
import "./style.css";
function getId(e) {
  return document.getElementById(e);
}
function getClass(e,n){
return document.getElementsByClassName(e)[n];
}

function createE(e) {
  return document.body.appendChild(document.createElement(e));
}
function childE(e, e2) {
  return e.appendChild(e2);
}

function createClass(e, cl) {
  return (e.className = cl);
}

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(x, i) {
  createClass(childE(getId("app"), createE("div")), "imagesBlock");
  createClass(childE(document.getElementsByClassName('imagesBlock')[i],createE("img")),'images');
  getClass('images',i).src = 'https://naked-science.ru/wp-content/uploads/2016/04/article_komodo-web.jpg'
});
