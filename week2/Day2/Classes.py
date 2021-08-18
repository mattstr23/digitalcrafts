                    #CLASSES

#Class is a complicated/more advanced dictionary that can house information, methods
#methods (functions) and can be replicated.

# List []
# Dictionary {"key": "value"}
# Tuple  (123,123,4321)

#Function def funcitonName():
#    return

# def getAge():
#     JoesAge = 10
#     return JoesAge
# age = getAge()

# Joe = {
#     "name": "Joe",
#     "age": getAge(30)

# }

# Randy = {
#     "name": "Randy",
#     "age": getAge(22)
#     }


       #SCOPE  -  a limited range when inside of a function
# def joesFunction():
#     joesName = "Joe"
#     return joesName

# print(joesName)

#  You define a class with the keyword "class", followed by the name of th class
# Class must have a constructor, which is a blueprint or skeleton or model for your class
# Constructors are formated as: def__init__(self): 
# Constructors are defined like a function
    #Use open and close ()
    # You will use the keyword self (self)
        # class Person:
                #constructor
                #constructor
                #constructor

class Person:
    def __init__(self):
        self.name = "Joe"
        self.hairColor = "Black"
        self.age = "unknown"
        self.ears = 2
        self.address = "123 tomball st"
    
# First we must instantiate a class and assign it to a variable
joe = Person()
# To access unique attribuets of that class, we use dot notation
# So if you want to get britts name, you would use joe.name (and so on)
print(joe.address)
print(joe.ears)
# Even though this is using the same class we defined, we give it a new instance
justin = Person()
print(justin.ears)





# def getAge(age):
#     personAge = age
#     return personAge
