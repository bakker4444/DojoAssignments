# Assignment: Dictionary in, tuples out
#
# Write a function that takes in a dictionary and returns a list of tuples
# where the first tuple item is the key and the second is the value.
# Here's an example:
#
#   # function input
#   my_dict = {
#       "Speros": "(555) 555-5555",
#       "Michael": "(999) 999-9999",
#       "Jay": "(777) 777-7777"
#   }
#
#   #function output
#   [("Speros", "(555) 555-5555"), ("Michael", "(999) 999-9999"), ("Jay", "(777) 777-7777")]

my_dict = {
    "Speros": "(555) 555-5555",
    "Michael": "(999) 999-9999",
    "Jay": "(777) 777-7777"
}

def dict_in_tuple_out(dict1):
    arr = []
    for i in range(len(dict1)):
        arr.append((tuple(dict1)[i], dict1[tuple(dict1)[i]]))
    return arr

print dict_in_tuple_out(my_dict)
