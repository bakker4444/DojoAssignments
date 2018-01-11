# Assignment: MathDojo
#
# HINT: To do this exercise, you will probably have to use 'return self'.
# If the method returns itself (an instance of itself), we can chain methods.
#
#
# PART I
# Create a Python class called MathDojo that has the methods add and subtract.
# Have these 2 functions take at least 1 parameter.
# 
# Then create a new instance called md. It should be able to do the following task:
# 
#   md.add(2).add(2,5).subtract(3,2).result
#
# which should perform 0+2+(2+5)-(3+2) and return 4.
#
#
# PART II
# Modify MathDojo to take at least one integer(s) and/or list(s) as a parameter
# with any number of values passed into the list. It should now be able to perform the following tasks:
# 
#   md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result
#
# should do 0+1+3+4+(3+5+7+8)+(2+4.3+1.25)-2-(2+3)-(1.1+2.3) and return its result.
#
#
# PART III
# Make any needed changes in MathDojo in order to support tuples of values in addition to lists and singletons.

class Mathdojo(object):
    def __init__(self):
        self.result = 0
    def add(self, *arg):
        self.result += sum(arg)
        return self
    def subtract(self, *arg):
        self.result -= sum(arg)
        return self

Dinmathdojo = Mathdojo()

print Dinmathdojo.add(2).add(2,5).subtract(3,2).result

class Mathdojo_part_2_and_3(Mathdojo):
    def add(self, *arg):
        for i in range(len(arg)):
            if isinstance(arg[i], list) or isinstance(arg[i], tuple):
                self.result += sum(arg[i])
            else:
                self.result += arg[i]
        return self
    def subtract(self, *arg):
        for i in range(len(arg)):
            if isinstance(arg[i], list) or isinstance(arg[i], tuple):
                self.result -= sum(arg[i])
            else:
                self.result -= arg[i]
        return self

Dindinmathdojo_p_2_and_3 = Mathdojo_part_2_and_3()
print Dindinmathdojo_p_2_and_3.add([1], 3,4).add((3,5,7,8), [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result

