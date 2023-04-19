

def binary_search(elements, search_data):
    down = 0
    up = len(elements) - 1

    while (down <= up):
        quite = round((down+up)/2)
        kick = elements[quite]

        if kick == search_data:
            return quite
        elif kick > search_data:
            up = quite - 1
        else:
            down = quite+1
