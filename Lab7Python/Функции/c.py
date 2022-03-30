def Xor(a, b):
    if a == 1:
        if b == 1:
            return 0
        else:
            return 1
    else:
        if b == 1:
            return 1
        else:
            return 0
a = int(input())
b = int(input())
print(Xor(a, b))