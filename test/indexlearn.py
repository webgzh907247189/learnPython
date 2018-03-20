# https://www.cnblogs.com/Kaivenblog/p/5917190.html

def a():
	d = {'a': 1, 'b': 2, 'c': 3}
	for item in d:
		print(d[item],item)
a()


def aa():
	d = {'a': 1, 'b': 2, 'c': 3}
	for k,v in d.items():
		print(k,v,d[k])
aa()

def aaa():
	for k,v in enumerate(['A', 'B', 'C']):
		print(k,v)
	for k,v in enumerate([(1, 11), (2, 44), (3, 99)]):
		for v1 in v:
			print(k,v,v1,'111')
aaa()

from collections import Iterable
isIterable = isinstance('1111',Iterable)
print('isIterable',isIterable)   #True


from functools import reduce
def fn(x, y):
	return x * 10 + y
num = reduce(fn, [1, 3, 5, 7, 9])
print(num)

# 1*10 +3 = 13
# 13*10 + 5 = 135
# 135*10 + 7 = 1357
# 1357*10+9 = 13579 

def char2num(s):
    digits = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9}
    return digits[s]
lsit1 = map(char2num, '13579')
for item in lsit1:
	print(item)  # 1 3 5 7 9

from functools import reduce
num2 = reduce(lambda x, y: x * 10 + y, [1, 3, 5, 7, 9])
print(num2)  # 13579