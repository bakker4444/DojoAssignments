# Find Characters
#
# Write a program that takes a list of strings and a string
# containing a single character, and prints a new list of all the strings
# containing that character.

def find_characters(list1, char1):
    new_list = []
    for i in range(len(list1)):
        for j in range(len(list1[i])):
            if list1[i][j] == char1:
                new_list.append(list1[i])
    print new_list

# Input
word_list = ['hello','world','my','name','is','Anna']
char = 'o'

find_characters(word_list, char)

