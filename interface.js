// import NoteManager from "./src/note.js";

let noteManager = new NoteManager();

console.log(noteManager.list)
if(localStorage.getItem("list")) {
  noteManager.list = JSON.parse(localStorage.getItem("list"));
  console.log(noteManager.list)
}

listNotes();
document.querySelector(".add-note").addEventListener("click", refreshRight) ;

function refreshRight() {
  console.log("clicked")
  document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='save'>SAVE</button></div><input type='text' placeholder='TITLE' name='title' id='title'><textarea id='note' rows='4' cols='50' placeholder='  NOTE'></textarea></div>";
  // document.querySelector(".right-inner").innerHTML= "<h1>test</h1>";
  addTextInputKeyupListener()
  document.querySelector("#save").addEventListener("click", addNewNote) ;
}

function addTextInputKeyupListener() {
  const titleInput = document.getElementById("title");
  emojify(titleInput);
  const contentInput = document.getElementById("note");
  emojify(contentInput);
}

function emojify(textInput) {
  const url = "https://makers-emojify.herokuapp.com/"
  textInput.addEventListener("keyup", function (event) {
    if (event.key === ":") {
      postData(url, { text: textInput.value })
        .then(data => {
        console.log(1, data); // JSON data parsed by `data.json()` call
        if (data.status == "OK" && data.emojified_text !== undefined) {
          console.log(2, data);
          textInput.value = data.emojified_text;
        }
      });
    }
  });
}

function addNewNote() {
  var title = document.querySelector("#title").value
  var note = document.querySelector("#note").value
  
  noteManager.add(title, note);
  
  saveToStorage();

  clearText();
  listNotes();


}

function clearText() {
  document.querySelector("#title").value = ""
  document.querySelector("#note").value = ""
}

function listNotes() {
  htmlStr="";
  noteManager.list.map((note, index) => {

    htmlStr += `<button class='note-preview' id='note${index}'><h3 class='preview-note'>${note.title}</h3><p class='preview-note'>${note.content}</p></button>`;
  })

  document.querySelector('.previewed-notes').innerHTML=htmlStr;

  noteManager.list.map((note, index) => {
    document.querySelector(`#note${index}`).addEventListener("click", selectNote(note));
  })
}

function selectNote(note) {

  return () => {
    document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='delete'>DELETE</button><button class='save-edit-delete-note' id='save'>SAVE</button></div><input type='text' placeholder='TITLE' name='title' id='title'><textarea id='note' rows='4' cols='50' placeholder='  NOTE'></textarea></div>"
    addTextInputKeyupListener()
    document.querySelector("#title").value = note.title
    document.querySelector('#note').value = note.content
    document.querySelector('#save').addEventListener("click", editNote(note));
    document.querySelector('#delete').addEventListener("click", deleteNote(note));
    }
}

function editNote(note) {
  return () => {
    var title = document.querySelector("#title").value
    var content = document.querySelector("#note").value

    noteManager.edit(note, title, content);

    saveToStorage();
    clearText();
    listNotes();
  }
}

  function deleteNote(note) {
    return () => {
      noteManager.delete(note)

      saveToStorage();
      clearText();
      listNotes();
    }
  }

  function saveToStorage() {
    let storageList = JSON.stringify(noteManager.list)
    localStorage.setItem("list", storageList)
  }

  // Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}