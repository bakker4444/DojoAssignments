# Assignment: Product
#
# The owner of a store wants a program to track products.
# Create a product class to fill the following requirements.
# 
#   Product Class:
#       Attributes:
#           Price
#           Item Name
#           Weight
#           Brand
#           Status: default "for sale"
#       Methods:
#           Sell: changes status to "sold"
#           Add tax: takes tax as a decimal amount as a parameter and returns the price
#                    of the item including sales tax
#           Return: takes reason for return as a parameter and changes status accordingly.
#                    If the item is being returned because it is defective, change status
#                    to "defective" and change price to 0. If it is being returned in the box,
#                    like new, mark it "for sale". If the box has been, opened, set the status
#                    to "used" and apply a 20% discount.
#           Display Info: show all product details.
# 
# Every method that doesn't have to return something should return self so methods can be chained.

class Product(object):
    def __init__(self, price, name, weight, brand, status="for sale"):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.status = status
    def sell(self):
        print self.name + " is sold!\n"
        self.status = "sold"
    def add_tax(self, tax):
        return self.price * (1 + tax)
    def return1(self, reason):
        if self.status != "sold":
            print "This product is not sold yet!! Item's info will not be changed\n"
        else:
            if reason == "defective":
                print "Defective item is returned, changing the status as 'defective'\n"
                self.price = 0
                self.status = reason
            elif reason == "unopened box":
                print "Unoped box returned, changing the status as 'for sale'\n"
                self.status = "for sale"
            elif reason == "opened box":
                print "Opened box returned, changing the status as 'used' and discount the price as 20%\n"
                self.status = "used"
                self.price *= 0.8
    def display_info(self):
        print "Item Name: " + self.name
        print "Brand: " + str(self.brand)
        print "Price: $ " + str(self.price)
        print "Weight: " + str(self.weight) + " lb(s)"
        print "Status: " + self.status + "\n"

# define product(s) : Sweet corn can, Easy open tumbler, Hard open tumbler
corn_can = Product(10, "Sweet Can", 1, "Del Monte")
tumbler1 = Product(20, "Easy Open Tumbler", 4, "Contigo", "for sale")
tumbler2 = Product(30, "Hard Open Tumbler", 10, "Dunno", "for sale")

# check can's info
corn_can.display_info()

# sold corn_can
corn_can.sell()

# check can's info again - status --> "sold"
corn_can.display_info()

# check price with tax - tax rate : 10%
print "Total can price with tax, 10% : $ " + str(corn_can.add_tax(0.1)) + "\n"
print "==============================================\n"

# check tumbler1 info & sold item
tumbler1.display_info()
tumbler1.sell()

# return tumbler1 item with the box opened & check tumbler1 info again
tumbler1.return1("opened box")
tumbler1.display_info()
print "==============================================\n"

# check tumbler2 info
tumbler2.display_info()

# return a tumbler2 item but if it is not sold yet, print the indication and do not change the info about the product
tumbler2.return1("defective")
tumbler2.display_info()
print "==============================================\n"

