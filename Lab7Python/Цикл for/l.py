a = input()
res = 0
index = 1
for i in a[::-1]:
    res += int(i) * index
    index *= 2
print(res)