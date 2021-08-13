import random
import time

def intro():
    time.sleep(1)
    print("\nThe sun begins to rise....")
    time.sleep(1.5)
    print("You stand at a clearing, a gaint fortress stands in the distance")
    time.sleep(1.5)
    print("Before you the land of Zalador is ravaged from the evil of Kaahlmar...")
    time.sleep(1.5)
    print("Will you be the hero the land needs, and put an end to Kaahlmar, The Dark Magic Destroyer?...\n")
    time.sleep(2)
    print("\t\tWELCOME TO LAST HOPE OF ZALADOR: DARKNESS OF KAAHLMAR!\n")
    time.sleep(1)

def nameChoice():
    name = ""
    while True:
        name = input("What Do you want your Hero's name to be?: ")
        if name.isalpha():
            print("\nWelcome %s! Best of Luck on your journey to defeat Kaahlmar!" % name)
            return name
        else:
            print("Please only use letters..")
    

def mainMenu():
    menuMessage = ("""
            Please Select an option below:
    
    1.  See Your Hero's Stats
    2.  Begin Your Fight!
    3.  Leave Game
    """)
    return print(menuMessage)

class Hero:
    def __init__(self, name, maxHealth, health, mana, magic):
        self.name = name
        self.maxHealth = maxHealth
        self.health = health
        self.mana = mana
        self.magic = magic
    
    def damageCalc(self, damage):
        damage = self.magic +- random.randint(1, 8)
        self.health -= damage
    
    def attack(self, target):
        target.damageCalc(self.health)
    
    def heal(self):
        while True:
            healing = 10 + random.randint(0, 10)
            manaLoss = self.mana - 10
            if self.health == self.maxHealth:
                return print("Your health is maxed, continue this fight!")
            if self.mana == 0:
                return print("You are out of mana")
            else:
                maxHealing = healing + self.health
                if maxHealing > 75:
                    self.health = 75
                    self.mana = manaLoss
                    print("%s: Guiding Light!" % hero.name)
                    print("%d mana is left" % hero.mana)
                    print("You healed yourself, your health is now %d" % hero.health)
                    return
                else:
                    self.health += healing
                    self.mana = manaLoss
                    print("%s: Guiding Light!" % hero.name)
                    print("%d mana is left" % hero.mana)
                    print("You healed yourself, your health is now %d" % hero.health)
                    return

class Villan:
    def __init__(self, name, health, darkMagic):
        self.name = name
        self.health = health
        self.darkMagic = darkMagic
    
    def damageCalc(self, damage):
        damage = self.darkMagic * 1.5 +- random.randint(1, 10)
        self.health -= damage
    
    def attack(self, target):
        target.damageCalc(self.health)
    
    def heal(self, healing):
        healing = 10 + random.randint(1, 15)
        self.health += healing
    


def statsMenu():
    charStats = ("""
        Stat Sheet
    Name:           %s
    Health:         75
    Mana:           30
    Magic Lvl:      20
    """ % (hero.name))
    return print(charStats)

def playMenu():
    playerInput = input("""
    1.      Attack
    2.      Heal
    3.      Teleport Away\n""")
    return playerInput

def playSequence(hero):
    time.sleep(2)
    print("\n\t 'Dust Settles to reveal %s walking through the halways of Kaahlmars Great Castle'" % (hero.name))
    print("\nAfter defeating endless waves of Kaahlmars minions...")
    time.sleep(2)
    print("Your hero, %s, walks up the stairway towards Kaahlmars Dark Throne..." % (hero.name))
    print("Once at the top, Kaahlmar, The Dark Magic Destroyer is right before you!")
    time.sleep(2)
    print("Kaahlmar grins slightly upon meeting your gaze...and in an instant...")
    time.sleep(1)
    print("ATTACKS!!!")
    print("\tNow is your time!")
    print("How do you respond to Kaahlmars Charge?")

    while True:
        playerInput = playMenu()
        if playerInput == "1":
            hero.attack(baddie)
            baddieAttackChance = random.randint(1, 10)
            baddieHealChance = random.randint(1, 10)      
            if baddie.health > 0 and baddie.health >= 100:
                print("%s: Holy Light!" % hero.name)
                print("'You strike Kaahlmar with a spell'")
                time.sleep(1)
                print("Kaahlmar smirks at your attack, and continues the fight")
                time.sleep(1)
                print("Kaahlmar has %d health left\n" % (baddie.health))
                if baddieAttackChance > 4 and baddie.health > 0:
                    print("Kaahlmar: SOUL EATER!")
                    print("'Kaahlmar hits you with a Dark Magic Blast'")
                    baddie.attack(hero)
                    time.sleep(1)
                    print("%s has %d health left." % (hero.name, hero.health))
            elif baddie.health > 0 and baddie.health < 100 and baddie.health > 80:
                print("'You strike Kaahlmar with a spell'")
                print("Kaahlmar, hit by your attack yells 'I SHALL BURN YOU AND THIS LAND TO THE GROUND!!'")
                time.sleep(1)
                print("Kaahlmar has %d health left" % baddie.health)
                if baddieAttackChance > 3 and baddie.health > 0:
                    print("Kaahlmar : Dark Decay!!")
                    print("'Kaahlmar hits you with a Dark Magic Blast'")
                    baddie.attack(hero)
                    time.sleep(1)
                    print("%s has %d health left." % (hero.name, hero.health))
            elif baddie.health > 0 and baddie.health <= 80 and baddie.health > 45:
                print("PENANCE!")
                print("'You strike Kaahlmar with a spell'")
                time.sleep(1)
                print("\t'Kaahlmar fearing defeat increases his attack!'")
                print("Kaahlmar: 'YOU WILL NOT DEFEAT ME!!'")
                time.sleep(1)
                print("Kaahlmar has %d health left" % (baddie.health))
                print("\t'Kaahlmar begins using Dark Magic to heal'")
                if baddieHealChance > 5 and baddie.health > 0:
                    print("Kaahlmar: Exura Vita!")
                    print("'Kahlmar consumes Dark Magic to heal himself'")
                    baddie.heal(baddie)
                    time.sleep(1)
                    print("Kaahlmar has %d health left" % (baddie.health))
                if baddieAttackChance > 2 and baddie.health > 0:
                    print("Kaahlmar hits you a Dark Magic Blast")
                    baddie.attack(hero)
                    time.sleep(1)
                    print("%s has %d health left." % (hero.name, hero.health))
            elif baddie.health > 0 and baddie.health <= 45 and baddie.health > 20:
                print("'You strike Kaahlmar with a spell'")
                print("Kaahlmar:  How can you be my equal..?!?")
                time.sleep(1)
                print("Kaahlmar has %d health left" % (baddie.health))
                if baddieAttackChance > 2 and baddie.health > 0:
                    print("Kaahlmar hits you with a Dark Magic Blast")
                    baddie.attack(hero)
                    time.sleep(1)
                    print("%s has %d health left." % (hero.name, hero.health))
                if baddieHealChance > 4 and baddie.health > 0:
                    print("Kaahlmar: Exura Vita!")
                    print("'Kahlmar consumes Dark Magic to heal himself'")
                    baddie.heal(baddie)
                    time.sleep(1)
                    print("Kaahlmar has %d health left" % (baddie.health))
            elif baddie.health > 0 and baddie.health <= 20 and baddie.health > 5:
                print("Your reign of darkness ends here!")
                time.sleep(1)
                print("'You strike Kaahlmar with a spell'")
                time.sleep(1)
                print("Kaahlmar: I...underestimated...you...")
                print("Kaahlmar has %d health left" % (baddie.health))
                if baddieAttackChance > 2 and baddie.health > 0:
                    print("Kaahlmar: 'UNYIELDING DEATH!'")
                    baddie.attack(hero)
                    time.sleep(1)
                    print("'Kaahlmar..running out of Dark magic and life force..attacks, for what might be his final time..")
                    print("He is almost defeated! Keep up the attack!")
                    time.sleep(1)
                    print("%s has %d health left." % (hero.name, hero.health))
            elif baddie.health > 0 and baddie.health <= 5:
                print("'Kaahlmar, faint, weak and almost defeated, stubbles through his throne chaimbers, and tries to retreat..'")
                print("FINISH HIM!!")
            elif baddie.health <= 0:
                print("EVISCERATE!!")
                print("'Your attack englufs Kaahlmar, and he is incinerated!'")
                time.sleep(1)
                print("Kaahlmar:...I....Shall.....Return.....")
                time.sleep(1)
                print("\t\t'Kaahlmar dissipates into dust, and drifts away in the wind")
                time.sleep(1)
                print("You have defeated Kaahlmar and ended his reign of darkness over Zalador!!")
                print("You can go rest......for now......")
                time.sleep(2)
                print("\t\tTHANK YOU %s FOR PLAYING" % hero.name)
                break
            elif hero.health <= 0:
                time.sleep(1)
                print("\t\tYOU ARE DEAD....")
                print("Kaahlmars darkness was too much for you")
                break
        elif playerInput == "2":
            hero.heal()
        elif playerInput == "3":
            print("Overwhelmed, you teleport yourself away from Kaahlmar")
            print("Hope you'll return soon!")
            break
intro()
name = nameChoice()
hero = Hero(name, 75, 75, 30, 20)
baddie = Villan("Kaahlmar, The Dark Magic Destroyer", 150, 15)
while True:
    time.sleep(1)
    mainMenu()
    playerInput = input("Whats your choice on this journey?: ")
    if playerInput == "1":
        statsMenu()
    elif playerInput == "2":
        playSequence(hero)
    elif playerInput == "3":
        print("Hope you'll return soon!")
    else:
        print("Please select a proper choice..\n")