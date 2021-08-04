print("Will it Fizz, Buzz or BOTH!")
num = int(input("Enter your number in question: "))
if (num % 3) == 0 and num % 5 == 0:
    print("FizzBuzz!")
elif (num % 3) == 0:
   print("Fizz")
elif (num % 5) == 0:
   print("Buzz")