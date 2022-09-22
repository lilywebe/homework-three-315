import * as model from "./model.js";

function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let pageIDArray = pageID.split("/");
  pageID = pageIDArray[0];
  let subPageID = pageIDArray[1];

  console.log("sub" + subPageID);

  if (pageID == "") {
    model.changePage("home");
  } else {
    if (pageID == subPageID) {
      model.changePage(pageID);
    } else {
      model.changePage(pageID, subPageID);
    }
  }
}

function initListeners() {
  //   $("nav a").click((e) => {
  //     console.log("click" + btnID);
  //   });
}

function initApp() {
  $(window).on("hashchange", route);
  route();
}

//once the document is "READ"
$(document).ready(function () {
  initApp();
  initListeners();
});
