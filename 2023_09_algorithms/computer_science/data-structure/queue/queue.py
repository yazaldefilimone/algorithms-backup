class Queue:
    def __init__(self):
        self.elements = {}
        self.head = 0
        self.tails = 0

    def enqueue(self, value):
        self.elements[self.tails] = value
        self.tails = self.tails+1

    def dequeue(self):
        if self.head > 0:
            backoup = self.elements[self.head]
            del self.elements[self.head]
            return backoup
        return -1

    def peek(self):
        return self.elements[self.head]

    def length(self):
        return self.tails - self.head

    def isEmpty(self):
        return self.tails - self.head
