# Assignment: Car
#
# Create a class called  Car.
# In the__init__(), allow the user to specify the following attributes: price, speed, fuel, mileage.
# If the price is greater than 10,000, set the tax to be 15%. Otherwise, set the tax to be 12%. 
#
# Create six different instances of the class Car.
# In the class have a method called display_all() that returns all the information about the car as a string.
# In your __init__(), call this display_all() method to display information about the car once the attributes have been defined.
# 
# A sample output would be like this:
# 
#   Price: 2000
#   Speed: 35mph
#   Fuel: Full
#   Mileage: 15mpg
#   Tax: 0.12
# 
#   Price: 2000
#   Speed: 5mph
#   Fuel: Not Full
#   Mileage: 105mpg
#   Tax: 0.12
# 
#   Price: 2000
#   Speed: 15mph
#   Fuel: Kind of Full
#   Mileage: 95mpg
#   Tax: 0.12
# 
#   Price: 2000
#   Speed: 25mph
#   Fuel: Full
#   Mileage: 25mpg
#   Tax: 0.12
# 
#   Price: 2000
#   Speed: 45mph
#   Fuel: Empty
#   Mileage: 25mpg
#   Tax: 0.12
# 
#   Price: 20000000
#   Speed: 35mph
#   Fuel: Empty
#   Mileage: 15mpg
#   Tax: 0.15

class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
        self.display_all()
    def display_all(self):
        print "Price: " + str(self.price)
        print "Speed: " + str(self.speed) + "mph"
        print "Fuel: " + self.fuel
        print "Mileage: " + str(self.mileage) + "mpg"
        print "Tax: " + str(self.tax) + "\n"

car1 = Car(2000, 35, "Full", 15)
car2 = Car(2000, 5, "Not Full", 105)
car3 = Car(2000, 15, "Kind of Full", 95)
car4 = Car(2000, 25, "Full", 25)
car5 = Car(2000, 45, "Empty", 25)
car6 = Car(20000000, 35, "Empty", 15)

