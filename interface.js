// import NoteManager from "./src/note.js";

let noteManager = new NoteManager();

listNotes();
document.querySelector(".add-note").addEventListener("click", refreshRight) ;

function refreshRight() {
  console.log("clicked")
  document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='delete'>DELETE</button><button class='save-edit-delete-note' id='save'>SAVE</button></div><input type='text' placeholder='TITLE' name='title' id='title'><textarea id='note' rows='4' cols='50' placeholder='  NOTE'></textarea></div>";
  // document.querySelector(".right-inner").innerHTML= "<h1>test</h1>";
  document.querySelector("#save").addEventListener("click", addNewNote) ;
}

function addNewNote() {
  console.log("Also clicked")
  var title = document.querySelector("#title").value
  var note = document.querySelector("#note").value
  var newNote = noteManager.add(title, note)
  console.log(newNote)
  listNotes();
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

  
    document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='delete'>DELETE</button><button class='save-edit-delete-note' id='save'>EDIT</button></div><input type='text' placeholder='TITLE' name='title' id='title' disabled><textarea id='note' rows='4' cols='50' placeholder='  NOTE' disabled></textarea></div>"
    document.querySelector("#title").value = note.title
    document.querySelector('#note').value = note.content
    }
}