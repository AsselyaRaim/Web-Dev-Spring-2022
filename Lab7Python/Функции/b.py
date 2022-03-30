def power(a, n):
    res = 1
    for i in range(n):
        res *= a
    return res


a = int(input())
b = int(input())
print(power(a, b))
