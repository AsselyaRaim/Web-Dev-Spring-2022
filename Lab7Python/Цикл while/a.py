import math
a = int(input())
i = 1
while i <= a:
    b = math.sqrt(i)
    if b == round(b): print(i)
    i += 1