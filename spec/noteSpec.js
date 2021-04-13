let noteManager = new NoteManager();;
let thisNote = noteManager.add("title", "content");
let thisOtherNote = noteManager.add("other title", "other content");


it("thisNote.title returns title", function() {
  expect(thisNote.title).toEqual("title");
});