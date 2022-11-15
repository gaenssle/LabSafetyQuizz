import random

# Import file containing the questions and answeres
def ImportQuizz():
	Quizz = []
	Index = "a"
	for DecodedLineOfFile in open("LabSafetyQuizz_Linux.txt", 'r', encoding="utf8"):
		DecodedLineOfFile = DecodedLineOfFile.rstrip()
		LineOfFile = DecodedLineOfFile.split('_')
		if len(LineOfFile) == 3:
			if LineOfFile[0].isnumeric():
				Question = LineOfFile[2]
				Reply ={}
				Step = {}
			if LineOfFile[1] == "A":
				Answer = LineOfFile[2]
				Index = LineOfFile[0]
			if LineOfFile[0] == Index and LineOfFile[1] == "R":
				Reaction = LineOfFile[2]
				Reply.update({Answer:Reaction})
		else:
			Step.update({Question:Reply})
			Quizz.append(Step)
	Step.update({Question:Reply})
	Quizz.append(Step)
	return(Quizz)

# Conduct the quizz
def ConductQuizz(Quizz):
	Repeat = False
	for Steps in range(len(Quizz)):
		for Question, Reply in Quizz[Steps].items():
			print("\nQuestion %s:\n%s" % (Steps+1, Question))
			Index = 1
			Consequence =[]
			for Answer, Reaction in sorted(Reply.items(), key=lambda x: random.random()):
				print("%s\t%s" %(Index, Answer))
				Consequence.append(Reaction)
				Index += 1
			ChosenAnswer = input("You do:\t")
			while ChosenAnswer.isnumeric()==False or int(ChosenAnswer) not in range(1,Index):
				ChosenAnswer = input("\nPlease enter a number between 1 and %s\n" %(Index-1))
			print("\n%s" %(Consequence[int(ChosenAnswer)-1]))
		if Consequence[int(ChosenAnswer)-1].startswith("You fool!"):
			Proceed = input("\nYou have failed to leave everything in one piece! "
				"What do you do now?\na\tquit\nb\tstart again\n")
			while Proceed not in ("a", "b"):
				Proceed = input("Please enter 'a' or 'b'!")
			if Proceed == "a":
				quit()
			else:
				Repeat = True
				break
	print("\nCongratulations! You have managed to leave the lab!")
	return(Repeat)

# Start of Script
Quizz = ImportQuizz()
Repeat = ConductQuizz(Quizz)
while Repeat == True:
	Repeat = ConductQuizz(Quizz)
