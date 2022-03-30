v = int(input())
t = int(input())
if v >= 0:
    res = v * t % 109
else:
    res = 109 - (-v * t % 109)
print(res)
