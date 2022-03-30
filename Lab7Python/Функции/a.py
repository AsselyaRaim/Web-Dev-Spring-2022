def min(a, b, c, d):
    if a < b:
        min1 = a
    else:
        min1 = b
    if c < d:
        min2 = c
    else:
        min2 = d
    if min1 < min2:
        return min1
    else:
        return min2
a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(min(a, b, c, d))