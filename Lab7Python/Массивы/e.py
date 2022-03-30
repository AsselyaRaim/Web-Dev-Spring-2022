n = int(input())
a = []
res = False
for i in range(n):
    a.append(int(input()))
for i in range(1, len(a)):
    if (a[i] > 0 and a[i - 1] > 0) or (a[i] < 0 and a[i - 1] < 0):
        res = True
        break
if res: print("YES")
else: print("NO")