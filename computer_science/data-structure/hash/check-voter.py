voted = {}


def checkVoter(name):
    isVoted = voted.get(name)
    if isVoted:
        print("You already voted, you can't vote again")
    else:
        voted[name] = True
        print("Voted!")


checkVoter('Tom')
checkVoter('mike')
checkVoter('mike')
