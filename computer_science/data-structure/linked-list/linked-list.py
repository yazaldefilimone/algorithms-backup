class Node:
    def __init__(self, value, next):
        self.value = value
        self.next = next


class LinkedList:
    def __init__(self):
        self.head = 0

    def isEmpty(self):
        return self.head == 0

    def pushFront(self, value):
        self.head = Node(value, self.head)

    def pushBlack(self, value):
        currentNode = self.head

        while currentNode & currentNode.next:
            currentNode = currentNode.next
        currentNode.next = Node(value, 0)

    def size(self):
        total = 0
        currentNode = self.head
        while currentNode & currentNode.next:
            currentNode = currentNode.next
            total = total+1

        return total

    def search(self, value):
        if self.isEmpty():
            return

        if self.head.value == value:
            return self.head

        currentNode = self.head
        while currentNode & currentNode.next:
            if currentNode.value == value:
                return currentNode
                return
            currentNode = currentNode.next


node = Node('10', 0)
