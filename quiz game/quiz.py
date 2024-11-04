
#  making a quiz game 
def quiz():
    score = 0
    totalQuestion = 4

    question = [
        'How many colours are in a rainbow',
        'What is the capital of Nigeria',
        'Which programing language is known for it simplicity and readability',
        'Who is the president of Nigeria'
    ]

    answers = [
        7,
        'Abuja',
        'Python',
        'Tinubu'
    ]

    options = [
        [7, 3, 6, 1],
        ['Kaduna', 'lagos', 'bauchi', 'Kaduna'],
        ['Python', 'C++', 'Java', 'Dart'],
        ['Kabir', 'Musa', 'Tinubu', 'Yahya']
    ]

    for i in range(totalQuestion): 
        print(f"Questions {i+1}: {question[i]}")
        for j in range(4):
            print(f"Options {j+1}: {options[i][j]}")
            print(f"Options {j+2}: {options[i][j+1]}")
            print(f"Options {j+3}: {options[i][j+2]}")
            print(f"Options {j+4}: {options[i][j+3]}")
            userAnswer = input ('Enter your answer(1-4): ')
            if userAnswer == str(answers.index(answers[i]) + 1):
                print('Correct!')

                score += 1
            else: 
                print(f"Incorrect answer. the correct answer is: {answers[i]}")
    print(f'\nYou scored {score} out of {totalQuestion}')    
    playAgain = input ('Do you want to play again? (yes/no):')   
    if playAgain.lower() == 'yes':
        quiz()
quiz()        

