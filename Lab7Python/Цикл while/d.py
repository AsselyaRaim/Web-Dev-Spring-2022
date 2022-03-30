a = int(input())
i = 1
res = False
while i <= a:
    if i == a:
        res = True
        break
    i *= 2
if res:
    print("YES")
else:
    print("NO")