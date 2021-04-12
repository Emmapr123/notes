export default function add(title, content) {
  const thisNote = note(title, content);
  return thisNote;
}

const note = (title, content) => {
  return {
    title,
    content
  }
}

