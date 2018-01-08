# Integer
# If the integer is greater than or equal to 100,
# print "That's a big number!"
# If the integer is less than 100,
# print "That's a small number"
# Assumption : Input is always integer

x = input("Enter your integer: ")
if x >= 100:
    print "That's a big number!"
else:
    print "That's a small number"

# String
# If the string is greater than or equal to 50 characters,
# print "Long sentence."
# If the string is shorter thatn 50 characters,
# print "Short sentence."
# Assumption : input is always string

y = raw_input("Enter your string: ")
if len(y) >= 50:
    print "Long sentence."
else:
    print "Short sentence."

# List
# If the length of the list is greater than or equal to 10,
# print "Big List"
# If the list has fewer than 10 values,
# print "Short List"
# Assumption : input is always list

z = input("Enter your List: ")
if len(z) >= 10:
    print "Big List"
else:
    print "Short List"

