# Assignment: Names
# Write the following function.
# 
# Part I
# Given the following list:
#   students = [
#       {'first_name':  'Michael', 'last_name' : 'Jordan'},
#       {'first_name' : 'John', 'last_name' : 'Rosales'},
#       {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#       {'first_name' : 'KB', 'last_name' : 'Tonel'}
#   ]
# Create a program that outputs:
#   Michael Jordan
#   John Rosales
#   Mark Guillen
#   KB Tonel
#
#
# Part II
# Now, given the following dictionary:
#   users = {
#       'Students': [
#           {'first_name':  'Michael', 'last_name' : 'Jordan'},
#           {'first_name' : 'John', 'last_name' : 'Rosales'},
#           {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#           {'first_name' : 'KB', 'last_name' : 'Tonel'}
#       ],
#       'Instructors': [
#           {'first_name' : 'Michael', 'last_name' : 'Choi'},
#           {'first_name' : 'Martin', 'last_name' : 'Puryear'}
#       ]
#   }
# Create a program that prints the following format (including number of characters in each combined name):
#   Students
#   1 - MICHAEL JORDAN - 13
#   2 - JOHN ROSALES - 11
#   3 - MARK GUILLEN - 11
#   4 - KB TONEL - 7
#   Instructors
#   1 - MICHAEL CHOI - 11
#   2 - MARTIN PURYEAR - 13
# Note: The majority of data we will manipulate as web developers will be hashed in a dictionary
# using key-value pairs. Repeat this assignment a few times to really get the hang of unpacking
# dictionaries, as it's a very common requirement of any web application.

students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def names_1(arr):
    for i in arr:
        print i["first_name"] + " " + i["last_name"]

names_1(students)
print "\n==================================================\n"

users = {
    'Students': [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ],
    'Instructors': [
        {'first_name' : 'Michael', 'last_name' : 'Choi'},
        {'first_name' : 'Martin', 'last_name' : 'Puryear'}
    ]
}

def names_2(arr):
    print "Students"
    for i in range(1, len(arr["Students"]) + 1):
        print str(i) + " - " + arr["Students"][i-1]["first_name"] + " " + arr["Students"][i-1]["last_name"] + " - " + str(len(arr["Students"][i-1]["first_name"]) + len(arr["Students"][i-1]["last_name"]))
    print "Instructors"
    for i in range(1, len(arr["Instructors"]) + 1):
        print str(i) + " - " + arr["Instructors"][i-1]["first_name"] + " " + arr["Instructors"][i-1]["last_name"] + " - " + str(len(arr["Instructors"][i-1]["first_name"]) + len(arr["Instructors"][i-1]["last_name"]))

names_2(users)
