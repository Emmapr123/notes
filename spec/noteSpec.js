let noteManager = new NoteManager();;
let thisNote = noteManager.add("title", "content");
let thisOtherNote = noteManager.add("other title", "other content");


it("thisNote.title returns title", function() {
  expect(thisNote.title).toEqual("title");
});

it("thisNote.content returns content", function(){
  expect(thisNote.content).toEqual("content")
})

it("noteManager.edit can change title and content", function(){
  noteManager.edit(thisNote, "new title", "new content")
  expect(thisNote.title).toEqual("new title")
  expect(thisNote.content).toEqual("new content")
})

it("noteManager.list returns a list of notes",  function(){
  expect(noteManager.list).toInclude(thisNote)
  expect(noteManager.list).toInclude(thisOtherNote)
})

it('noteManager.delete removes a note from the list', function(){
  noteManager.delete("new title")
  expect(noteManager.list).toNotInclude(thisNote)
})
