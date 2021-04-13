import NoteManager from './src/note';

let noteManager = new NoteManager;

function refreshRight() {
  document.getElementsByClassName("right-inner").innerHTML("
  <div class='buttons'>
    <div></div>
    <button class='save-edit-delete-note'>DELETE</button>
    <button class='save-edit-delete-note'>SAVE</button>
  </div>
  <input type='text' placeholder='TITLE' nainme='title' id='title'>
  <textarea id='note' rows="4" cols="50" placeholder="  NOTE"></textarea>
  </div>
  ");

}