n = int(input())
a = []
for i in range(n):
    a.append(int(input()))
for i in range(0, len(a) // 2):
    a[i], a[len(a) - i - 1] = a[len(a) - i - 1], a[i]
for i in a:
    print(i, end=" ")