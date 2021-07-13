let fileInput = document.getElementById("fileInput");
let myButton = document.getElementById("myButton");
let fileCatcher = document.getElementById("file-catcher");
var fileListDisplay = document.getElementById("file-list-display");

let fileList = [];
let renderFileList, sendFile;

// Once Clicked and Files Selected
// a Modal is Created
// Option selected to put them in their category  unders the group files
// Where to host the files?

myButton.addEventListener(
  "click",
  function (e) {
    fileInput.click();
  },
  false,
);

fileInput.addEventListener("change", function (e) {
  fileList = [];
  for (let i = 0; i < fileInput.files.length; i++) {
    console.log(fileInput.files[i]);
    fileList.push(fileInput.files[i]);
  }
  renderFileList();
});

fileCatcher.addEventListener("submit", function (e) {
  e.preventDefault();

  fileList.forEach(function (file) {
    sendFile(file);
  });
});

renderFileList = function () {
  fileListDisplay.innerHTML = "";
  fileList.forEach(function (file, index) {
    var fileDisplayEl = document.createElement("p");

    fileDisplayEL.innerHTML = index + 1 + ": " + file.name;
    fileListDisplay.appendChild(fileDisplayEL);
  });
};

sendFile = function (file) {
  let formData = new FormData();
  let request = XMLHttpRequest();

  formData.set("file", file);
  request.open("POST", URL_API);
  request.send(formData);
  console.log("File Uploaded");
};
