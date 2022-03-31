const { Index, Document, Worker } = require("flexsearch");


const index = new Index();
index.add(1, "abc de");
const result = index.search("abc");
console.log(result);
