a = int(input())
if a % 4 == 0:
    if a % 100 == 0:
        if a % 400 == 0: res = True
        else: res = False
    else: res = True
else: res = False
print("YES") if res else print("NO")