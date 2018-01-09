# Assignment: Fun with Functions
# Create a series of functions based on the below descriptions.
#
#
# Odd/Even:
# Create a function called odd_even that counts from 1 to 2000.
# As your loop executes have your program print the number of that iteration
# and specify whether it's an odd or even number.
# Your program output should look like below:
#
# Number is 1.  This is an odd number.
# Number is 2.  This is an even number.
# Number is 3.  This is an odd number.
# ...
# Number is 2000.  This is an even number.
#
#
# Multiply:
# Create a function called 'multiply' that iterates
# through each value in a list (e.g. a = [2, 4, 10, 16])
# and returns a list where each value has been multiplied by 5.
# 
# The function should multiply each value in the list by the second argument. For example, let's say:
#
# a = [2,4,10,16]
# Then:
# b = multiply(a, 5)
# print b
#
# Should print [10, 20, 50, 80 ].
#
#
# Hacker Challenge:
# Write a function that takes the multiply function call as an argument.
# Your new function should return the multiplied list as a two-dimensional list.
# Each internal list should contain the 1's times the number in the original list.
# Here's an example:
#
# def layered_multiples(arr):
#   # your code here
#   return new_array
# x = layered_multiples(multiply([2,4,5],3))
# print x
#
# # output
# >>>[[1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]

def odd_even():
    for i in range(1, 2000 + 1):
        if i % 2 == 0:
            print "Number is " + str(i) + ".  This is an even number."
        else:
            print "Number is " + str(i) + ".  This is an odd number."

odd_even()
print "==================================\n\n"

def multiply(arr, num):
    for i in range(len(arr)):
        arr[i] *= num
    return arr

a = [2, 4, 10, 16]
b = multiply(a, 5)
print b
print "==================================\n\n"

def layered_multiples(arr):
    new_arr = []
    for i in range(len(arr)):
        inner_arr = []
        for j in range(arr[i]):
            inner_arr.append(1)
        new_arr.append(inner_arr)
    return new_arr

x = layered_multiples(multiply([2,0,5],3))
print x
