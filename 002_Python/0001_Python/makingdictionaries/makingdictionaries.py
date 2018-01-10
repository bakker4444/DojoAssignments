# Assignment: Making Dictionaries
#
# Create a function that takes in two lists and creates a single dictionary.
# The first list contains keys and the second list contains the values.
# Assume the lists will be of equal length.
# 
# Your first function will take in two lists containing some strings. Here are two example lists:
# 
#   name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
#   favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
# 
# Here's some help starting your function.
# 
#   def make_dict(list1, list2):
#       new_dict = {}
#       # your code here
#       return new_dict
# 
# Hacker Challenge:
# If the lists are of unequal length, the longer list should be used for the keys, the shorter for the values.

def dict_make_same_length(a1, b1):
    new_dict = {}
    for i in range(len(a1)):
        new_dict[a1[i]] = b1[i]
    return new_dict

def making_dictionaries(list1, list2):
    if len(list1) == len(list2):
        result = dict_make_same_length(list1, list2)
        return result
    elif len(list1) > len(list2):
        # if len(list1) > len(list2),
        # makes list2 same length as list1 with None  
        # list1 ==> key, list2 ==> value
        for i in range(len(list1) - len(list2)):
            list2.append(None)
            result = dict_make_same_length(list1, list2)
            return result
    else:
        # if len(list1) < len(list2),
        # make list1 same length as list2 with None
        # list2 ==> key, list1 ==> value
        for i in range(len(list2) - len(list1)):
            list1.append(None)
            result = dict_make_same_length(list2, list1)
            return result

# Same length : name_1, favorite_animal_1
name_1 = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal_1 = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

print making_dictionaries(name_1, favorite_animal_1)
print "\n\n"

# Different length : name_2, favorite_animal_2
name_2 = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar", "DinDin"]
favorite_animal_2 = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

print making_dictionaries(name_2, favorite_animal_2)
print "\n\n"

# Different length : name_3, favorite_animal_3
name_3 = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal_3 = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas", "dindin"]

print making_dictionaries(name_3, favorite_animal_3)

