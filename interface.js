// import NoteManager from "./src/note.js";

let noteManager = new NoteManager();

listNotes();
document.querySelector(".add-note").addEventListener("click", refreshRight) ;

function refreshRight() {
  console.log("clicked")
  document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='save'>SAVE</button></div><input type='text' placeholder='TITLE' name='title' id='title'><textarea id='note' rows='4' cols='50' placeholder='  NOTE'></textarea></div>";
  // document.querySelector(".right-inner").innerHTML= "<h1>test</h1>";
  document.querySelector("#save").addEventListener("click", addNewNote) ;
}

function addNewNote() {
  var title = document.querySelector("#title").value
  var note = document.querySelector("#note").value

  postData('https://makers-emojify.herokuapp.com/', { text: note })
  .then(data => {
    note = data;
    noteManager.add(title, note)
    
    localStorage.setItem(title, note.emojified_text)

    clearText();
    listNotes();
  });  

}

function clearText() {
  document.querySelector("#title").value = ""
  document.querySelector("#note").value = ""
}

function listNotes() {
  htmlStr="";
  noteManager.list.map((note, index) => {

    note = localStorage.getItem(`${title}`)

    htmlStr += `<button class='note-preview' id='note${index}'><h3 class='preview-note'>${title}</h3><p class='preview-note'>${note}</p></button>`;
    console.log(localStorage)
  })

  document.querySelector('.previewed-notes').innerHTML=htmlStr;

  noteManager.list.map((note, index) => {
    document.querySelector(`#note${index}`).addEventListener("click", selectNote(note));
  })
}

function selectNote(note) {

  return () => {
    document.querySelector(".right-inner").innerHTML= "<div class='buttons'><div></div><button class='save-edit-delete-note' id='delete'>DELETE</button><button class='save-edit-delete-note' id='save'>SAVE</button></div><input type='text' placeholder='TITLE' name='title' id='title'><textarea id='note' rows='4' cols='50' placeholder='  NOTE'></textarea></div>"
    document.querySelector("#title").value = localStorage.getItem('title')
    document.querySelector('#note').value = localStorage.getItem('note')
    document.querySelector('#save').addEventListener("click", editNote(note));
    document.querySelector('#delete').addEventListener("click", deleteNote(note));
    }
}

function editNote(note) {
  return () => {
    var title = document.querySelector("#title").value
    var content = document.querySelector("#note").value
    

    localStorage.setItem('title', title)
    localStorage.setItem('note', content)

    noteManager.edit(note, title, content.emojified_text);
    clearText();
    listNotes();
  }
}

  function deleteNote(note) {
    return () => {
      noteManager.delete(note)
      clearText();
      listNotes();
    }
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