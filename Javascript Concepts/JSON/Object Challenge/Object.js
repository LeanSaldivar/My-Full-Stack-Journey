library = [
    {
        title: "JavaScript",
        author: "John Doe",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title: "Python",
        author: "Jane Doe",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },

    {
        title: "Java",
        author: "Jared Doe",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
]

//Iterates for each item in the array
library.forEach((item) => {
    if (item.status.read === false) {
        return item.status.read = true;
    }
})

console.log(library);
