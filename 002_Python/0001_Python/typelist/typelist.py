# Write a program that takes a list and prints a message for each element in the list,
# based on that element's data type.

# Your program input will always be a list.
# For each item in the list, test its data type.
# If the item is a string, concatenate it onto a new string.
# If it is a number, add it to a running sum.
# At the end of your program print the string,
# the number and an analysis of what the list contains.
# If it contains only one type, print that type, otherwise, print 'mixed'.

def typelist(arr):
    str1 = ""
    str_flag = False
    sum1 = 0
    int_flag = False
    float_flag = False
    for i in range(len(arr)):
        if isinstance(arr[i], int):
            sum1 += arr[i]
            int_flag = True
        elif isinstance(arr[i], float):
            sum1 += arr[i]
            float_flag = True
        elif isinstance(arr[i], str):
            str1 += arr[i] + " "
            str_flag = True
    str1[:-1]
    if (int_flag and str_flag) or (float_flag and str_flag) or (int_flag and float_flag):
        print "The list you entered is of mixed type"
        print "String:", str1
        print "Sum:", sum1, "\n"
    elif int_flag and not str_flag and not float_flag:
        print "The list you entered is integer type"
        print "Sum:", sum1, "\n"
    elif not int_flag and str_flag and not float_flag:
        print "The list you entered is string type"
        print "String:", str1, "\n"
    elif not int_flag and not str_flag and float_flag:
        print "The List you entered is float type"
        print "Sum:", sum1, "\n"
    else:
        print "The list you entered is neither interger nor string type" + "\n"

l = ['magical unicorns',19,'hello',98.98,'world']
print "INPUT :",  l
typelist(l)

l = [2,3,1,7,4,12]
print "INPUT :", l
typelist(l)

l = ['magical','unicorns']
print "INPUT :", l
typelist(l)

l = [17.2, 3.2, 1.6, 3.3]
print "INPUT :", l
typelist(l)
