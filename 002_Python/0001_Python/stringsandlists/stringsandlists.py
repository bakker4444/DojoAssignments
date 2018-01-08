# Find and Replace
words = "It's thanksgiving day. It's my birthday, too!"
print words.find("day")
print words.replace("day", "month")

# Min and Max
x = [2, 54, -2, 7, 12, 98]
print min(x)
print max(x)

# First and Last
x = ["hello", 2, 54, -2, 7, 12, 98, "world"]
print "First value in array x is :", x[0]
print "Last value in array x is :", x[-1]
print [x[0], x[-1]]

# New List
x = [19, 2, 54, -2, 7, 12, 98, 32, 10, -3, 6]
x.sort()
print x

# splitting in half
x_first_half = x[:len(x)/2]
x_second_half = x[len(x)/2:]
x_second_half.insert(0, x_first_half)
print x_second_half
