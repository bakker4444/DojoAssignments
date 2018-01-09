# Compare Lists
# Write a program that compares two lists and prints a message
# depending on if the inputs are identical or not.
# Your program should be able to accept and compare two lists: list_one and list_two.
# If both lists are identical print "The lists are the same".
# If they are not identical print "The lists are not the same."
# Try the following test cases for lists one and two:

def compare_lists(list1, list2):
    flag = False
    if len(list1) != len(list2):
        print "The lists are not the same.\n"
    else:
        for i in range(len(list1)):
            if list1[i] == list2[i]:
                continue
            else:
                flag = True
                break
        if flag:
            print "The lists are not the same.\n"
        else:
            print "The lists are the same.\n"

# Try the following test cases for lists one and two:

list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
print "list_one :", list_one
print "list_two :", list_two
compare_lists(list_one, list_two)

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
print "list_one :", list_one
print "list_two :", list_two
compare_lists(list_one, list_two)

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
print "list_one :", list_one
print "list_two :", list_two
compare_lists(list_one, list_two)

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
print "list_one :", list_one
print "list_two :", list_two
compare_lists(list_one, list_two)


