import add from './note.js';

let thisNote = add("title", "content");

console.log("thisNote.title returns title")
if(thisNote.title === "title") {
  console.log("pass");
} else {
  console.log("fail");
}
