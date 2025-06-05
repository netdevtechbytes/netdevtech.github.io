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

```python
def twoSum(nums, target):
    hashmap = {}
    for i, num in enumerate(nums):
        diff = target - num
        if diff in hashmap:
            return [hashmap[diff], i]
        hashmap[num] = i
