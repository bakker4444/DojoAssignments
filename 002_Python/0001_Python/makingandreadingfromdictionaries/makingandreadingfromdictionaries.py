# Assignment: Making and Reading from Dictionaries
# Create a dictionary containing some information about yourself or John/Jane Dow.
# The keys should include name, age, country of birth, favorite language.
# 
# Write a function that will print something like the following as it executes:
# 
#   My name is Anna
#   My age is 101
#   My country of birth is The United States
#   My favorite language is Python
# 
# There are two steps to this process, building a dictionary and then gathering all the data from it.
# Write a function that can take in and print out any dictionary keys and values.
# 
# Note: The majority of data we will manipulate as web developers will be hashed in a dictionary using key-value pairs.
# Repeat this assignment a few times to really get the hang of unpacking dictionaries, as it's a very common requirement of any web application.


my_dict = {}
my_dict["name"] = "Dindin"
my_dict["age"] = 190
my_dict["country of birth"] = "United States"
my_dict["favorite language"] = "Python"

def making_and_reading_from_dictionaries(dict1):
    print "My name is " + dict1["name"]
    print "My age is " + str(dict1["age"])
    print "My country of birth is " + dict1["country of birth"]
    print "My favorite language is " + dict1["favorite language"]

making_and_reading_from_dictionaries(my_dict)

