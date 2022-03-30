import math
a = int(input())
b = int(input())
for i in range(a, b):
    c = math.sqrt(i)
    if c == round(c): print(i, end=" ")
