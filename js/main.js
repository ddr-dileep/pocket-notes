showNotes();

// console.log('js file included')//console/
document.getElementById("addBtn").addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  console.log(addTxt.value);
  let allnotes = localStorage.getItem("allnotes");
  if (allnotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(allnotes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("allnotes", JSON.stringify(notesObj));
  addTxt.value = "";
//   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage

function showNotes() {
  let allnotes = localStorage.getItem("allnotes");
  if (allnotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(allnotes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div id=" notecard" class="noteCard">
                <div class="card w-100">
                    <div class="flex-tem">
                        <div class="card-body d-flex ">
                            <h5 class="card-title ">${index+1}} &nbsp</h5>
                            <p class="card-text ">${element}</p>
                </div>
                <div class="col-2">
                  <button id="${index}" onClick='deleteNode(this.id)' type="button" class="btn btn-danger"> delete</button>
                </div>
              </div>
                </div>
            </div>
             `;
  });

  let notesElement = document.getElementById('notecard');
  if(notesObj.length != 0) {
      notesElement.innerHTML = html;
  }
  else{
      notesElement.innerHTML =   `
                    <div class=" card shadow mt-5 mb-5 p-5">
                        <h4>you haven't any notes </h4>
                        <p> plz add some...! </p>
                        </div>
                        `
  }
}


// delete node
function deleteNode(index) {
    console.log('delete',index)
    let allnotes = localStorage.getItem("allnotes");
  if (allnotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(allnotes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("allnotes", JSON.stringify(notesObj));
  showNotes();
}


// search function
let search = document.getElementById("search-notes")
// console.log(search.value);
search.addEventListener('input',function() {
    let inputVal = search.value
    // console.log(inputVal);
    let noteCards = document.getElementsByClassName('noteCard')
    Array.from(noteCards).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    })

})