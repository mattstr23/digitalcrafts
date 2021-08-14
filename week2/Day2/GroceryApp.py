print("\n\t\tWELCOME TO YOUR SHOPPING LIST APP!\n")

groceryLists = []

def mainMenu():
    message = """
    Please Select an Option Below:
    1.  Create a new Shopping List
    2.  Add Item(s) to an Exsisting Shopping List
    3.  View Your Shopping List(s)
    4.  Quit Program
    """
    return print(message)

def priceCheck():
    while True:
        itemPrice = input("What is the price of the item?: ")
        if itemPrice.isint() or itemPrice.isfloat():
            return print("Item price added.")
        else:
            print("Please put in a number with or without a decimal")

def qtyCheck():
    while True:
        item qtyCheck = input("How many are you needing?:")
        if qtyCheck.isint():
            return print("Quantity added.")
        else:
            print()
class List:
    def __init__(self, name, location):
        self.name = name
        self.location = location
        self.items = []
        
    def addNewItem(self, items):
        self.items.append(items)

class Item:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

while True:
    mainMenu()
    userInput = input("Which item can I assist you with?:  ")
    if userInput == "1":
        nameOfStore = input("What is the name of the store?: ")
        locOfStore = input("Where is the store?: ")
        shopList = List(nameOfStore, locOfStore)
        print(f"\nAdded - {nameOfStore} - at - {locOfStore} -!")
        shopList.append(groceryLists)

    elif userInput == "2":
        num = 1
        for i in shopList:
            print(num, i.title)
            num += 1
    listSelect = input("Which shopping list do you wish to add to?: ")
        while len(listSelect) > 0:
            listSelect = int(listSelect)
            listSelect -= 1
            itemName = input("Enter the name of the item: ")
            itemPrice = priceCheck()
            itemQty = input

    elif userInput == "3":
        pass
    elif userInput == "4":
        print("\nHave a Good Day!")
        break
    else:
        print("\nThat is not a correct response\n")
        