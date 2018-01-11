# Optional Assignment: Store
#
# Now, let's build a store to contain our products by making a store class
# and putting our products into an array.
# 
#   Store class:
#       Attributes:
#           products: an array of products objects
#           location: store address
#           owner: store owner's name
#       Methods:
#           add_product: add a product to the store's product list
#           remove_product: should remove a product according to the product name
#           inventory: print relevant information about each product in the store
# 
# You should be able to test your classes by instantiating new objects of each class
# and using the outlined methods to demonstrate that they work.

class Store(object):
    def __init__(self, products, location, owner):
        self.products = []
        self.location = location
        self.owner = owner
        #self.products.append(products)
        self.products.extend(products)
    def add_product(self, addition_product):
        print "Adding product(s)\n"
        self.products.append(addition_product)
    def remove_product(self, remove_product):
        print "Removing product(s)\n"
        self.products.remove(remove_product)
    def inventory(self):
        print "-----------------------------------------------------"
        print self.owner + "'s store location is shown below"
        print self.location + "\n"
        print self.owner + "'s store has the inventory(ies) shown below"
        print self.products
        print "=====================================================\n"

tom_inventory = [ "corn_can_1", "tumbler1", "tumbler2"]
tom_location = "1234 Five Street, Six City, Seven, USA"
tom_store = Store(tom_inventory, tom_location, "Tom")


john_inventory = [ "corn_can_2", "tumbler3", "tumbler4"]
john_location = "4567 Eight Street, Nine City, Ten, USA"
john_store = Store(john_inventory, john_location, "John")


sam_inventory = [ "corn_can_3", "tumbler5", "tumbler6"]
sam_location = "9876 Four Street, Two City, One, USA"
sam_store = Store(sam_inventory, sam_location, "Sam")

tom_store.inventory()
tom_store.add_product("Tuna Can")
tom_store.inventory()
tom_store.remove_product("tumbler1")
tom_store.inventory()

