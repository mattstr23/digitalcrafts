print("\nWelcome to Your TODO LIST!\n")

userCommand = ""
taskList = []

mainMenu = '''
    Press 1 to ADD TASK
    Press 2 to DELETE TASK
    Press 3 to VIEW TASK LIST
    
Press q to QUIT

    '''
while userCommand != "q":
    userCommand = input(mainMenu)
    
    if userCommand == "1":
        toDoName = input("What is the TASK?:  ")
        priority = input("What priority is your task?\n    (CASE SENSITIVE)\nHigh   Medium    Low: ")
        while priority != "High" and priority != "Medium" and priority != "Low":
            priority = input("Please Select from  High   Medium  Low!(CASE SENSITIVE!):")
        toDoIndex = len(taskList) + 1
        indexedToDo = str(toDoIndex) + ": " + toDoName + "  -  " + priority
        taskList.append(indexedToDo)
        
        print("\n" + toDoName + " is added to your TODO List!")
    
    elif userCommand == "2":
        print("DETLETION\nHere is your TODO List:\n", taskList)
        toDoDelete = int(input("Which TODO would you like remove?\n (PLEASE INPUT CORRISPONDING NUMERICAL CHOICE!)" )) - 1
        print(f"\nTODO {taskList[toDoDelete]}   :Has been DELETED!\n")
        del taskList[toDoDelete]
        print("\n Returning to MAIN MENU")
    
    elif userCommand == "3":
        print("\nHere is your TODO LIST:\n", taskList)
    
    elif userCommand == "q":
        print("GOODBYE!")
    
    else:
        print("INCORRECT INPUT!\nOPTIONS ARE 1,  2,   3  OR  'q'")