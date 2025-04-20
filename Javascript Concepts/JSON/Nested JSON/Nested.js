var cars = [
    {
        label: 'Autos',
        subs: []
    },
    {
        sublabel: 'Trucks',
        subs: [
            {
                label: '2 Wheel Drive',
                subs: []
            },
            {
                label: '4 Wheel Drive',
                subs: [
                    {
                        label: 'Ford',
                        subs: []
                    },
                    {
                        label: 'Chevrolet',
                        subs: []
                    }
                ]
            }
        ]
    },
    {
        label: 'Sudan',
        subs: []
    }
];

//Fixing nested JSON
function iterateObject(obj){
    for (var key in obj) {
        if (typeof  obj[key] === 'object' && obj[key] !== null ) {
            iterateObject(obj[key]); //Recursive call for nested object
        }
        else {
            console.log(key + ': ' + obj[key]);
        }
    }
}


iterateObject(cars)