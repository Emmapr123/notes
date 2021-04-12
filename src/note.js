
const note = (title, content) => {
  return {
    title,
    content
  }
}

export default class NoteManager {
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
}