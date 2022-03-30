a = int(input())
b = int(input())
if b == 1:
    if a == 1:
        res = True
    else:
        res = False
else:
    if a == 1:
        res = False
    else:
        res = True
print("YES") if res else print("NO")