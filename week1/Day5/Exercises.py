#1
# Add the missing Avenger(s)
# Delete Iron Man from the Avengers #RIPTony
# Insert a new member of the Avengers (whoever you want -Bob Ross, yourself etc.-) between Captain America and Tho

# ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]

# print(ogAvengers)
# ogAvengers.append("Hawkeye")

# print(ogAvengers)

# del ogAvengers[2]
# print(ogAvengers)

# newGuy = "Doctor Strange"
# index = 1

# ogAvengers.insert(index, newGuy)
# print(ogAvengers)

# #2
# In your terminal, print the range of numbers from 1 to 100
# For every number that is divisible by 3, you want to replace it with the word "Fizz"
# For every number that is divisible by 5, you want to replace it with the word "Buzz"
# For every number that is divisible by 3 and 5, you want to replace it with the word "FizzBuzz"

# for x in range(1,101):
#     if x % 3 == 0 and x % 5 == 0:
#         print("FizzBuzz")
#     elif x % 3 == 0:
#         print("Fizz")
#     elif x % 5 == 0:
#         print("Buzz")
#     else:
#         print(x)

#3
#Given an array of numbers, write a function to move all zeroes to the end of it while maintaining the relative order of 
#the non-zero elements.

array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]
print(array1, array2)

# for value in array1:
#     if value == 0:
#         array1.remove(value)
#         array1.append(value)
#     else:
#         pass
# for value in array2:
#     if value == 0:
#         array2.remove(value)
#         array2.append(value)
#     else:
#         pass
# print(array1, array2)