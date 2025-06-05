---
layout: single
title: "LeetCode Problems"
permalink: /leetcode/
author_profile: true
---

## 🧠 LeetCode Problems

<div>
  <!-- Filters -->
  Difficulty:
  <select id="difficulty-filter" onchange="filterTable()">
    <option value="">All</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
  </select>

  Category:
  <select id="category-filter" onchange="filterTable()">
    <option value="">All</option>
    <option value="Array">Array</option>
    <option value="HashMap">HashMap</option>
    <option value="Two Pointers">Two Pointers</option>
    <option value="Dynamic Programming">Dynamic Programming</option>
    <option value="Graph">Graph</option>
  </select>
</div>

<table id="problem-table">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>LeetCode</th>
      <th>Solution</th>
      <th>Difficulty</th>
      <th>Category</th>
    </tr>
  </thead>
  <tbody>
    <tr data-difficulty="Easy" data-category="HashMap">
      <td>1</td>
      <td>Two Sum</td>
      <td><a href="https://leetcode.com/problems/two-sum/">Problem</a></td>
      <td><a href="/leetcode/two-sum/">Solution</a></td>
      <td>Easy</td>
      <td>HashMap</td>
    </tr>
    <tr data-difficulty="Medium" data-category="Two Pointers">
      <td>2</td>
      <td>*TBD*</td>
      <td><a href="#">Problem</a></td>
      <td><a href="#">Solution</a></td>
      <td>Medium</td>
      <td>Two Pointers</td>
    </tr>
    <tr data-difficulty="Hard" data-category="Dynamic Programming">
      <td>3</td>
      <td>*TBD*</td>
      <td><a href="#">Problem</a></td>
      <td><a href="#">Solution</a></td>
      <td>Hard</td>
      <td>Dynamic Programming</td>
    </tr>
  </tbody>
</table>

<script>
  function filterTable() {
    const difficulty = document.getElementById('difficulty-filter').value;
    const category = document.getElementById('category-filter').value;
    const rows = document.querySelectorAll('#problem-table tbody tr');

    rows.forEach(row => {
      const rowDifficulty = row.getAttribute('data-difficulty');
      const rowCategory = row.getAttribute('data-category');
      const matchesDifficulty = !difficulty || rowDifficulty === difficulty;
      const matchesCategory = !category || rowCategory === category;
      row.style.display = matchesDifficulty && matchesCategory ? '' : 'none';
    });
  }
</script>
