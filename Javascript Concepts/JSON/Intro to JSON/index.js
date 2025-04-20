const post = [
    {
    id: 1,
    title: 'Post One',
    body: 'Lorem ipsum'
    },

    {
        id: 2,
        title: 'Post Two',
        body: 'Lorem ipsum'
    }
];

// Converting to JSON String
const string = JSON.stringify(post);

//Parse JSON
const obj = JSON.parse(string);

console.log(string);
console.log(obj);

for (let i = 0; i < 2; i++) {
    console.log(obj[i].id);
}