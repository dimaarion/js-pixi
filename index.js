// Import stylesheets
import "./style.css";
import $ from "./jquery.js";
function bagraundImagesPosition(npx, img, r, m, s) {
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
    getClass("images", i).src = img;

    getClass("images", i).style.position = "absolute";
    getClass("imagesBlock", i).style.width = npx + r;
    getClass("imagesBlock", i).style.height = npx + r;
    getClass("imagesBlock", i).style.overflow = "hidden";
    getClass("imagesBlock", i).style.position = "absolute";
    getClass("imagesBlock", i).style.float = "left";

    if (i > 0 && i < 2) {
      getClass("images", i).style.marginLeft = -count + r;
      getClass("imagesBlock", i).style.marginLeft = count + r;
    }
    if (i > 1 && i < 3) {
      getClass("images", i).style.marginLeft = 0 + r;
      getClass("images", i).style.marginTop = -npx + r;
      getClass("imagesBlock", i).style.marginLeft = 0 + r;
      getClass("imagesBlock", i).style.marginTop = npx + r;
    }
    if (i > 2 && i < 4) {
      getClass("images", i).style.marginLeft = -count / 2 + r;
      getClass("images", i).style.marginTop = -npx + r;
      getClass("imagesBlock", i).style.marginLeft = count / 2 + r;
      getClass("imagesBlock", i).style.marginTop = npx + r;
    }
  });

  getId("app").style.width = npx * 2 + r;
  getId("app").style.margin = "auto";
  $("#app").click(function() {
    $(".imagesBlock")
      .eq(0)
      .animate({ marginLeft: -m + "px", marginTop: -m + "px" }, s);
    $(".imagesBlock")
      .eq(1)
      .animate({ marginLeft: m + "px", marginTop: -m + "px" }, s);
    $(".imagesBlock")
      .eq(2)
      .animate({ marginLeft: -m + "px", marginTop: m + "px" }, s);
    $(".imagesBlock")
      .eq(3)
      .animate({ marginLeft: m + "px", marginTop: m + "px" }, s);

    $(".imagesBlock")
      .eq(0)
      .animate({ marginLeft: 0 + "px", marginTop: 0 + "px" }, s);
    $(".imagesBlock")
      .eq(1)
      .animate({ marginLeft: count / 2 + "px", marginTop: 0 + "px" }, s);
    $(".imagesBlock")
      .eq(2)
      .animate({ marginLeft: 0 + "px", marginTop: npx + "px" }, s);
    $(".imagesBlock")
      .eq(3)
      .animate({ marginLeft: count / 2 + "px", marginTop: npx + "px" }, s);
  });
}
bagraundImagesPosition(
  600,
  "https://avatars.mds.yandex.net/get-pdb/918543/547b2fdb-1352-4741-8832-f0c9bfaa95a5/s1200",
  "px",
  1000,
  1000
);
