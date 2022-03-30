if __name__ == '__main__':
    res = []
    min1 = min2 = 100
    for _ in range(int(input())):
        name = input()
        score = float(input())
        res.append([name, score])
        if score < min1:
            min2 = min1
            min1 = score
        elif score == min1:
            continue
        elif score < min2:
            min2 = score
    res1 = [i[0] for i in res if i[1] == min2]
    res1 = sorted(res1)
    for i in res1:
        print(i)