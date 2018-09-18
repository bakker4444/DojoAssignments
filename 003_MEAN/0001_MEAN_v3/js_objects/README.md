# Coding Dojo Bootcamp Assignment
## MEAN / Javascript / JavaScript Objects

### Assignment details

**Objectives:**

1. Assess your familiarity with JavaScript, particularly iterating over arrays and objects.

---

If this assignment takes longer than a half hour to complete, revisit the algorithm app, the JavaScript chapter in Web Fundamentals, and your algorithm book to review.

**Challenge 1**

Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.

```
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];
```

Your console should look like the following when the function is called with the provided array.

```
Name: Remy, Cohort: Jan
Name: Genevieve, Cohort: March
Name: Chuck, Cohort: Jan
Name: Osmund, Cohort: June
Name: Nikki, Cohort: June
Name: Boris, Cohort: June
```

**Challenge 2**

Write a function that accepts an object of users divided into employees and managers, as shown below, and logs the information to the console.

```
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
```

Your console should look like the following:

```
EMPLOYEES
1 - JONES, MIGUEL - 11
2 - BERTSON, ERNIE - 12
3 - LU, NORA - 6
4 - BARKYOUMB, SALLY - 14
MANAGERS
1 - CHAMBERS, LILLIAN - 15
2 - POE, GORDON - 9
```