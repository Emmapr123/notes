
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
    // console.log(thisNote);
    this.list.push(thisNote);
    // console.log(this.list);
    return thisNote;
  }
  
}