"use strict";

var students = [ 
    {first_name:  'Michael', last_name : 'Jordan'},
    {first_name : 'John', last_name : 'Rosales'},
    {first_name : 'Mark', last_name : 'Guillen'},
    {first_name : 'KB', last_name : 'Tonel'}
]

for (var i = 0; i < students.length ; i++){
    console.log(students[i].first_name,students[i].last_name);
}

var users = {
    'Students': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
    ],
    'Instructors': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
    ]
}

for (var key in users){
    console.log(key);
    for (var i = 0; i < users[key].length; i++) {
        console.log(i + " - " + users[key][i]["first_name"] + " " + users[key][i]["last_name"] + " - " + (users[key][i]["first_name"] + users[key][i]["last_name"]).length);
    }
}
