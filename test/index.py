#coding=utf-8
def a():
	for item in 'AN':
		print(item)  # A N
a()


#判断一个变量是不是可以遍历
from collections import Iterable
isIterable = isinstance('aasdsadsa',Iterable)
print('isIterable',isIterable)    # ('isIterable', True) 


def ergodicList(list):
	for i,v in enumerate(list):
		print(i,v)
ergodicList(['a','b','c'])   # 0,'a', 	1,'b', 	2,'c'


def ergodic(dictObj):
	for item in dictObj:
		print(item,dictObj[item].decode("unicode-escape"))
dictObj = {'name': 'zh','sex': '男'}
ergodic(dictObj)   #????????????输出中文


a = -10
b = -10
c = 4.2
d = 2.1
print(a is b,a == b,id(a),c+d)  #True, True, 74225500  the “identity” of an object, 相当于对象的内存地址 


print( [x * x for x in range(1, 11) if x % 2 == 0] )	 # [4, 16, 36, 64, 100]
print( [m + n for m in 'ABC' for n in 'XYZ'] ) 	         # ['AX', 'AY', 'AZ', 'BX', 'BY', 'BZ', 'CX', 'CY', 'CZ']

import os
# print( [d for d in os.listdir('.')])
for d in os.listdir('.')
	print(d)