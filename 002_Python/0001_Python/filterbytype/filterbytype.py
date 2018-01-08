sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

# Distinguish type first and then, do following statement depending on data types

# Integer
# If the integer is greater than or equal to 100,
# print "That's a big number!"
# If the integer is less than 100,
# print "That's a small number"
# Assumption : Input is always integer

# String
# If the string is greater than or equal to 50 characters,
# print "Long sentence."
# If the string is shorter thatn 50 characters,
# print "Short sentence."
# Assumption : input is always string

# List
# If the length of the list is greater than or equal to 10,
# print "Big List"
# If the list has fewer than 10 values,
# print "Short List"

def filterbytype(num):
    if type(num) == int:
        if num >= 100:
            return "That's a big number!"
        else:
            return "That's a small number"
    elif type(num) == str:
        if len(num) >= 50:
            return "Long sentence."
        else:
            return "Short sentence."
    elif type(num) == list:
        if len(num) >= 10:
            return "Big List"
        else:
            return "Short List"

print "sI = 45"
print "    Result :", filterbytype(sI)
print "mI = 100"
print "    Result :", filterbytype(mI)
print "bI = 455"
print "    Result :", filterbytype(bI)
print "eI = 0"
print "    Result :", filterbytype(eI)
print "spI = -23"
print "    Result :", filterbytype(spI)
print "sS = 'Rubber baby buggy bumpers'"
print "    Result :", filterbytype(sS)
print "mS = 'Experience is simply the name we give our mistakes'"
print "    Result :", filterbytype(mS)
print "bS = 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'"
print "    Result :", filterbytype(bS)
print "eS = ''"
print "    Result :", filterbytype(eS)
print "aL = [1,7,4,21]"
print "    Result :", filterbytype(aL)
print "mL = [3,5,7,34,3,2,113,65,8,89]"
print "    Result :", filterbytype(mL)
print "lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]"
print "    Result :", filterbytype(lL)
print "eL = []"
print "    Result :", filterbytype(eL)
print "spL = ['name','address','phone number','social security number']"
print "    Result :", filterbytype(spL)

