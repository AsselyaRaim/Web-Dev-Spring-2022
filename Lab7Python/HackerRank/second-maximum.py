if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    max1 = max2 = -100
    for i in arr:
        if i > max1:
            max2 = max1
            max1 = i
        elif i == max1:
            continue
        elif i > max2:
            max2 = i
    print(max2)