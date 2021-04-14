
const note = (title, content) => {
  return {
    title,
    content
  }
}

class NoteManager {
  constructor() {
    this.list = [];
  }

  add(title, content) {
    const thisNote = note(title, content);
    this.list.push(thisNote);
    return thisNote;
  }

  edit(thisNote, title, content) {
    thisNote.title = title;
    thisNote.content = content;
  }

  delete(thisNote){
    let noteIndex = this.list.indexOf(thisNote)
    this.list.splice(noteIndex, 1)
  }
}
