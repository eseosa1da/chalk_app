const fs = require("fs");
// import { errorMsg } from "./app.mjs";

const getNotes = () => {
  return "Your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);

    console.log("New Note added");
  } else {
    console.log("Note title taken");
  }
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  jsonNotes = JSON.stringify(notes);

  fs.writeFileSync("notes.json", jsonNotes);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const noteExists = notes.filter((note) => {
    return note.title === title;
  });

  if (noteExists.length > 0) {
    const filteredNotes = notes.filter((note) => {
      return note.title !== title;
    });

    saveNotes(filteredNotes);
    console.log("Note titled " + title + " removed");
  } else {
    console.log("No note with this title exists to remove");
  }
};

module.exports = { getNotes, addNote, removeNote };
