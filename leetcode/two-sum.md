---
layout: single
title: "Two Sum - LeetCode"
permalink: /leetcode/two-sum/
author_profile: true
---

## 🧠 Problem

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

---

## ✅ Solution

We can solve this using a hash map to track the complement values.
Variation 1: Numbers are not sorted

```python
def twoSum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[num] = i

nums = [2,7,11,15,4,8,9]
target = 15
print(two_sum(nums, target))
```
Variation 2: Numbers are sorted, use 2 pointers logic

```python
def two_sum_pointer(nums, target):
  #nums.sort()
  i = 0
  j = len(nums)-1
  while i<j:
    if nums[i]+nums[j]>target:
      j = j -1
    elif nums[i]+nums[j]<target:
      i=i+1
    else:
      return i, j

nums = [2,7,11,15,4,8,9]
target = 15
print(two_sum_pointer(nums, target))
```
Variation 3: Numbers are not sorted, use 2 pointers logic

```python
def two_sum_pointer_unsort(nums, target):
  indexed_nums = sorted((num, idx) for idx, num in enumerate(nums))
  print((indexed_nums))
  i, j = 0, len(indexed_nums) - 1

  while i < j:
    total = indexed_nums[i][0] + indexed_nums[j][0] # value is at 0 because of (num, idx)
    if total > target:
      j -= 1
    elif total < target:
      i += 1
    else:
      return indexed_nums[i][1], indexed_nums[j][1]

nums = [2,7,11,15,4,8,9]
target = 15
print(two_sum_pointer_unsort(nums, target))
```
Variation 4: Provide all the entries, ensuring no duplicates

```python
def two_sum_unique_pairs(nums, target):
    nums.sort()
    result = []
    l, r = 0, len(nums) - 1

    while l < r:
        total = nums[l] + nums[r]
        if total < target:
            l += 1
        elif total > target:
            r -= 1
        else:
            result.append([nums[l], nums[r]])
            l += 1
            r -= 1
            # Skip duplicates
            while l < r and nums[l] == nums[l - 1]:
                l += 1
            while l < r and nums[r] == nums[r + 1]:
                r -= 1

    return result

print(two_sum_unique_pairs([1, 1, 2, 2, 3, 4], 4))
```
