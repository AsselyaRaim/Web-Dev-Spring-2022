n = int(input())
a = []
cnt = 0
for i in range(n):
    a.append(int(input()))
for i in range(1, len(a)):
    if a[i] > a[i - 1]: cnt += 1
print(cnt)