# Create a class called User which consists of (first_name, last_name) properties. 
# Create a class name Address which consists of (street, city, state, zip_code) properties.

# Create a relationship between User and Address in a way that a single user can 
# have multiple addresses.

# Add a new method/function to User class called add_address(self, address) 
# which would take an address as an argument and add it to a list/array of addresses.

# Add another method to the User class called display_addresses(self) which would 
# display all the addresss of that user.

class User:
    def __init__(self, firstName, lastName):
        self.firstName = firstName
        self.lastName = lastName
        self.addresses = []
    
    def addAddress(self, address):
        self.addresses.append(address)


class Address:
    def __init__(self, street, city, state, zip):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip


Matthew = User("Matthew", "Valicoff")
add1 = Address("123 Northpointe", "Tomball", "Texas", 77377)
add2 = Address("321 Main St", "Spring", "Texas", 77375)
print(Matthew.firstName)