export function changePage(pageID, subPageID) {
  //   let page = pageID + "Content";
  //let pageUrlArray = pageID.split("/");

  console.log(subPageID);
  if (!subPageID) {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      console.log(data);
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        //alert("Page cannot be found. Please check your url");
      }
      console.log("error", error.status);
    });
  } else {
    $.get(`pages/${pageID}/${subPageID}.html`, function (data) {
      console.log(data);
      $("#app").html(data);
    }).fail((error) => {
      if (error.status == "404") {
        //alert("Page cannot be found. Please check your url");
      }
      console.log("error", error.status);
    });
  }
}
