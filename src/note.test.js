import NoteManager from './note.js';

let noteManager = new NoteManager();
let thisNote = noteManager.add("title", "content");
let thisOtherNote = noteManager.add("other title", "other content");

console.log("thisNote.title returns title")
if(thisNote.title === "title") {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("thisNote.content returns content");
if(thisNote.content === "content") {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("noteManager.list returns a list of notes");
if(noteManager.list.includes(thisNote) && noteManager.list.includes(thisOtherNote))  {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("noteManager.edit can change title and content");
noteManager.edit(thisNote, "new title", "new content");
if (thisNote.title === "new title" && thisNote.content === "new content") {
  console.log("pass");
} else {
  console.log("fail");
}

console.log("noteManager.delete removes a note from the list");
noteManager.delete("new title");
if ((noteManager.list).includes(thisNote)) {
  console.log("fail");
} else {
  console.log("pass");
}
