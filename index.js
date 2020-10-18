// Import stylesheets
import "./style.css";
function bagraundImagesPosition(npx){
function getId(e) {
  return document.getElementById(e);
}
function getClass(e, n) {
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


let count = 0;
[1, 2, 3, 4].map(function(x, i) {
  count = count + npx / 2;
  createClass(childE(getId("app"), createE("div")), "imagesBlock");
  createClass(
    childE(document.getElementsByClassName("imagesBlock")[i], createE("img")),
    "images"
  );
  getClass("images", i).src =
    "https://naked-science.ru/wp-content/uploads/2016/04/article_komodo-web.jpg";

  
  getClass("images", i).style.position = "absolute";
  getClass("imagesBlock", i).style.width = npx + "px";
  getClass("imagesBlock", i).style.height = npx + "px";
  getClass("imagesBlock", i).style.overflow = "hidden";
  getClass("imagesBlock", i).style.position = "relative";
  getClass("imagesBlock", i).style.float = "left";
  if (i > 0 && i < 2) {
    
    getClass("images", i).style.marginLeft = -count + "px";
  }
  if (i > 1 && i < 3) {
    getClass("images", i).style.marginLeft = 0 + "px";
     getClass("images", i).style.marginTop = -npx + "px";
  }
  if (i > 2 && i < 4) {
    getClass("images", i).style.marginLeft = -count / 2 + "px";
     getClass("images", i).style.marginTop = -npx + "px";
  }
});

getId("app").style.width = npx * 2 + "px";

}
bagraundImagesPosition(400)

