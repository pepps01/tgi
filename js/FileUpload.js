// get the selectors
let fileDisplay = document.getElementById("fileInput");
let fileSelect = document.getElementById("myButton");
const processStorage = localStorage.setItem("name", "");
// File Storage
let fileStorage = [];
let selectFileOption = document.getElementById("select-file");
let driverLicense = document.getElementById("driverLicense");
let taxReturns = document.getElementById("tax-returns");
let paySub = document.getElementById("paySub");

//   Modal Options

//   Initial Set up
//   changes to cancel
$("#CancelChangesOne").click(() => {
  $("#myModal").modal("hide");
});
$("#CancelChangesTwo").click(() => {
  $("#myModal").modal("hide");
});

$("#saveChanges").click(() => {
  $("#myModal").modal("hide");
});

fileDisplay.style.display = "none";
fileSelect.onclick = function (e) {
  e.preventDefault();
  console.log("clicked");
  if (fileDisplay) {
    fileDisplay.click();
  }
};

fileDisplay.addEventListener("change", handleFiles, false);

function handleFiles(e) {
  if (!this.files.length) {
    feedback.innerHTML = "<p>No Files Selected</p>";
  } else {
    for (let i = 0; i < this.files.length; i++) {
      // console.log(this.files[i].name);
      fileStorage.push(this.files[i].name);
    }

    $("#myModal").modal("show");
    if ($("#myModal").modal("show")) {
      selectFileOption.addEventListener("change", addFileNametoFolder, false);
    }
  }
}

function addFileNametoFolder(e) {
  e.preventDefault();

  switch (this.value) {
    case "1":
      console.log(this.options[this.selectedIndex].text);
      addFile(driverLicense);
      break;
    case "2":
      console.log(this.options[this.selectedIndex].text);
      addFile(taxReturns);
      break;
    case "3":
      console.log(this.options[this.selectedIndex].text);
      addFile(paySub);

      break;
    default:
  }
}

function addFile(documentParent) {
  if (!fileStorage.length == 0) {
    for (let i = 0; i < fileStorage.length; i++) {
      let p = document.createElement("p");
      p.innerHTML = fileStorage[i];
      p.style.fontSize = ".75rem";
      p.style.marginBottom = ".3rem";
      p.style.color = "blue";
      documentParent.appendChild(p);
    }
    fileStorage.splice(0,fileStorage.length)
  }
}
