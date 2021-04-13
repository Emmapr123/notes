let noteManager = new NoteManager();

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
}