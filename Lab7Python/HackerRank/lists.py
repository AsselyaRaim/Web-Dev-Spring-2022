if __name__ == '__main__':
    N = int(input())
    res = []
    for i in range(N):
        x = input().split()
        command = x[0]
        if command == "append":
            n = int(x[1])
            res.append(n)
        elif command == "print":
            print(res)
        elif command == "remove":
            n = int(x[1])
            res.remove(n)
        elif command == "insert":
            i = int(x[1])
            e = int(x[2])
            res.insert(i, e)
        elif command == "sort":
            res = sorted(res)
        elif command == "pop":
            if len(res) > 0:
                res.pop(len(res) - 1)
        elif command == "reverse":
            res.reverse()