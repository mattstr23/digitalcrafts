print("welcome to CalcApp\n")
firstnumb = int(input("What's your first number?"))
secondnumb = int(input("Whats's your second number?"))

operator = input("Which operator do you want to use? ( + , - , * , /)")

print(firstnumb, secondnumb, operator)

if operator == "+":
    print(firstnumb + secondnumb)

if operator == "-":
    print(firstnumb - secondnumb)

if operator == "*":
    print(firstnumb * secondnumb)

if operator == "/":
    print(firstnumb / secondnumb)

print("EasyPeasy")
