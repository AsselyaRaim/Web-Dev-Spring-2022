n = int(input())
a = []
for i in range(n):
    a.append(int(input()))
for i in a:
    if i % 2 == 0: print(i, end=" ")