const { Index, Document, Worker } = require("flexsearch");


const index = new Index();
index.add(1, "abc de");
const result = index.search("abc");
console.log(result);    // [1]

const index2 = new Document({
    document: { 
        index: "content",
        store: ["author", "email"] 
    }
});

index2.add({
    id: 0,
    author: "Jon Doe",
    email: "john@mail.com",
    content: "Some content for the index ..."
});
const result2 = index2.search("some content", { enrich: true });        //Enrich IDs from the results with the corresponding documents.
console.log(JSON.stringify(result2));   
