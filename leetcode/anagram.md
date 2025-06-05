---
layout: single
title: "Anagram - LeetCode"
permalink: /leetcode/anagram/
author_profile: true
---

## 🧠 Problem

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1: Input: s = "anagram", t = "nagaram" Output: true

Example 2: Input: s = "rat", t = "car" Output: false


---

## ✅ Solution

We can solve this using a hash map.


```python
def isAnagram(s,t):
  if len(s)!=len(t):
    return False

  hash_s = {}
  hash_t = {}
  #update dict for s
  for i in s:
    if i in hash_s:
      hash_s[i]=hash_s[i]+1
    else:
      hash_s[i]=1
  #update dic for t
  for j in t:
    if j in hash_t:
      hash_t[j]=hash_t[j]+1
    else:
      hash_t[j]=1
  if hash_s == hash_t: #return hash_s == hash_t # this will also work
    return True
  else:
    return False


print(isAnagram("anagram", "nagaram"))  # True
print(isAnagram("rat", "car"))          # False
print(isAnagram("aacc", "ccac"))        # False
```
