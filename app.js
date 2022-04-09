const yargs = require("yargs");
const notesUtil = require("./notes");

yargs.version("2.5");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notesUtil.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function (argv) {
    notesUtil.removeNote(argv.title);
  },
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.command({
  command: "list",
  describe: "Listing a note",

  handler: function () {
    console.log("List a note");
  },
});
yargs.parse();

// console.log(process.argv);
// console.log(yargs.argv);
