Sure! Here are 35 intermediate-level JavaScript interview questions, designed to test a range of skills from algorithmic thinking to more complex data structure manipulations.

### Intermediate Level (35 Questions)

1. **Find the Missing Number in a Sequence**
   ```javascript
   /**
       Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

       Example 1:
       Input: nums = [3, 0, 1]
       Output: 2

       Example 2:
       Input: nums = [0, 1]
       Output: 2
   **/
   ```

2. **Implement Array Filter**
   ```javascript
   /**
       Implement a function that filters an array based on a callback function.

       Example 1:
       Input: nums = [1, 2, 3, 4], callback = x => x > 2
       Output: [3, 4]

       Example 2:
       Input: nums = [5, 6, 7, 8], callback = x => x % 2 === 0
       Output: [6, 8]
   **/
   ```

3. **Implement Array Map**
   ```javascript
   /**
       Implement a function that maps an array to a new array based on a callback function.

       Example 1:
       Input: nums = [1, 2, 3], callback = x => x * 2
       Output: [2, 4, 6]

       Example 2:
       Input: nums = [4, 5, 6], callback = x => x + 1
       Output: [5, 6, 7]
   **/
   ```

4. **Find All Unique Elements in an Array**
   ```javascript
   /**
       Given an array of integers nums, return an array of all unique elements.

       Example 1:
       Input: nums = [1, 2, 2, 3, 4]
       Output: [1, 3, 4]

       Example 2:
       Input: nums = [5, 5, 5, 6, 7, 7]
       Output: [6, 7]
   **/
   ```

5. **Implement a Function to Check for Balanced Parentheses**
   ```javascript
   /**
       Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if the brackets are closed in the correct order.

       Example 1:
       Input: s = "()[]{}"
       Output: true

       Example 2:
       Input: s = "(]"
       Output: false
   **/
   ```

6. **Find the Intersection of Two Arrays**
   ```javascript
   /**
       Given two arrays of integers nums1 and nums2, return an array of their intersection.

       Example 1:
       Input: nums1 = [1, 2, 2, 1], nums2 = [2, 2]
       Output: [2]

       Example 2:
       Input: nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
       Output: [9, 4]
   **/
   ```

7. **Calculate the Fibonacci Sequence**
   ```javascript
   /**
       Given an integer n, return the nth Fibonacci number.

       Example 1:
       Input: n = 4
       Output: 3

       Example 2:
       Input: n = 5
       Output: 5
   **/
   ```

8. **Implement a Function to Merge Two Sorted Arrays**
   ```javascript
   /**
       Given two sorted arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

       Example 1:
       Input: nums1 = [1, 2, 3, 0, 0, 0], nums2 = [2, 5, 6], m = 3, n = 3
       Output: [1, 2, 2, 3, 5, 6]

       Example 2:
       Input: nums1 = [1], nums2 = [], m = 1, n = 0
       Output: [1]
   **/
   ```

9. **Find All Anagrams in a String**
   ```javascript
   /**
       Given a string s and a non-empty string p, return an array of all the start indices of p's anagrams in s.

       Example 1:
       Input: s = "cbaebabacd", p = "abc"
       Output: [0, 6]

       Example 2:
       Input: s = "abab", p = "ab"
       Output: [0, 1, 2]
   **/
   ```

10. **Find the Longest Substring Without Repeating Characters**
    ```javascript
    /**
        Given a string s, find the length of the longest substring without repeating characters.

        Example 1:
        Input: s = "abcabcbb"
        Output: 3

        Example 2:
        Input: s = "bbbbb"
        Output: 1
    **/
    ```

11. **Rotate an Array**
    ```javascript
    /**
        Given an array nums, rotate the array to the right by k steps, where k is non-negative.

        Example 1:
        Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
        Output: [5, 6, 7, 1, 2, 3, 4]

        Example 2:
        Input: nums = [-1, -100, 3, 99], k = 2
        Output: [3, 99, -1, -100]
    **/
    ```

12. **Find the Kth Largest Element in an Array**
    ```javascript
    /**
        Given an integer array nums and an integer k, return the kth largest element in the array.

        Example 1:
        Input: nums = [3, 2, 1, 5, 6, 4], k = 2
        Output: 5

        Example 2:
        Input: nums = [3, 2, 3, 1, 4, 2], k = 4
        Output: 2
    **/
    ```

13. **Implement Binary Search**
    ```javascript
    /**
        Given a sorted array of integers nums and an integer target, return the index of target in nums. If target is not found, return -1.

        Example 1:
        Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
        Output: 4

        Example 2:
        Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
        Output: -1
    **/
    ```

14. **Generate Parentheses**
    ```javascript
    /**
        Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

        Example 1:
        Input: n = 3
        Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

        Example 2:
        Input: n = 1
        Output: ["()"]
    **/
    ```

15. **Find the Largest Rectangle in Histogram**
    ```javascript
    /**
        Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

        Example 1:
        Input: heights = [2, 1, 5, 6, 2, 3]
        Output: 10

        Example 2:
        Input: heights = [2, 4]
        Output: 4
    **/
    ```

16. **Find the Majority Element**
    ```javascript
    /**
        Given an array of size n, find the majority element. The majority element is the element that appears more than n/2 times.

        Example 1:
        Input: nums = [3, 2, 3]
        Output: 3

        Example 2:
        Input: nums = [2, 2, 1, 1, 1, 2, 2]
        Output: 2
    **/
    ```

17. **Climbing Stairs**
    ```javascript
    /**
        You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

        Example 1:
        Input: n = 2
        Output: 2

        Example 2:
        Input: n = 3
        Output: 3
    **/
    ```

18. **Find All Unique Permutations**
    ```javascript
    /**
        Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations.

        Example 1:
        Input: nums = [1, 1, 2]
        Output: [[1, 1, 2], [1, 2, 1], [2, 1, 1]]

        Example 2:
        Input: nums = [1, 2, 3]
        Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
    **/
    ```

19. **Find the First Unique Character in a String**
    ```javascript
    /**
        Given a string s, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

        Example 1:
        Input: s = "leetcode"
        Output: 0

        Example 2:
        Input: s = "loveleetcode"
        Output: 2
    **/
    ```

20. **Find the Maximum Product Subarray**
    ```javascript
    /**
        Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

        Example 1:
        Input: nums = [2, 3, -2, 4]
        Output: 6

        Example 2:
        Input: nums = [-2, 0, -1]
        Output: 0
    **/
    ```

21. **Check If a String is a Valid Palindrome**
    ```javascript
    /**
        Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

        Example 1:
        Input: s = "A man, a plan, a canal: Panama"
        Output: true

        Example 2:
        Input: s = "race a car"
        Output: false
    **/
    ```

22. **Group Anagrams**
    ```javascript
    /**
        Given an array of strings strs, group the anagrams together. You can return the answer in any order.

        Example 1:
        Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
        Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

        Example 2:
        Input: strs = [""]
        Output: [[""]]
    **/
    ```

23. **Merge Intervals**
    ```javascript
    /**
        Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

        Example 1:
        Input: intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
        Output: [[1, 6], [8, 10], [15, 18]]

        Example 2:
        Input: intervals = [[1, 4], [4, 5]]
        Output: [[1, 5]]
    **/
    ```

24. **Find the Longest Palindromic Substring**
    ```javascript
    /**
        Given a string s, return the longest palindromic substring in s.

        Example 1:
        Input: s = "babad"
        Output: "bab"

        Example 2:
        Input: s = "cbbd"
        Output: "bb"
    **/
    ```

25. **Find the Minimum Path Sum**
    ```javascript
    /**
        Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

        Example 1:
        Input: grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
        Output: 7

        Example 2:
        Input: grid = [[1, 2, 3], [4, 5, 6]]
        Output: 12
    **/
    ```

26. **Implement a Stack Using Queues**
    ```javascript
    /**
        Implement a last in first out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

        Example 1:
        Input: push(1), push(2), top(), pop(), empty()
        Output: 2, 1, false
    **/
    ```

27. **Find the Longest Consecutive Sequence**
    ```javascript
    /**
        Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

        Example 1:
        Input: nums = [100, 4, 200, 1, 3, 2]
        Output: 4

        Example 2:
        Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
        Output: 9
    **/
    ```

28. **Find All Paths in a Graph**
    ```javascript
    /**
        Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n-1, find all possible paths from node 0 to node n-1, and return them in any order.

        Example 1:
        Input: graph = [[1, 2], [3], [3], []]
        Output: [[0, 1, 3], [0, 2, 3]]

        Example 2:
        Input: graph = [[4, 3, 1], [3, 2, 4], [3], [4], []]
        Output: [[0, 4], [0, 3], [0, 1, 3], [0, 1, 2, 3], [0, 1, 4]]
    **/
    ```

29. **Find the Top K Frequent Elements**
    ```javascript
    /**
        Given a non-empty array of integers, return the k most frequent elements.

        Example 1:
        Input: nums = [1, 1, 1, 2, 2, 3], k = 2
        Output: [1, 2]

        Example 2:
        Input: nums = [1], k = 1
        Output: [1]
    **/
    ```

30. **Implement a Trie (Prefix Tree)**
    ```javascript
    /**
        Implement a trie with insert, search, and startsWith methods.

        Example 1:
        Input: insert("apple"), search("apple"), search("app"), startsWith("app"), insert("app"), search("app")
        Output: true, false, true, true, true
    **/
    ```

31. **Course Schedule**
    ```javascript
    /**
        There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1. Some courses may have prerequisites, and these are represented as a pair of courses [a, b], where a is the prerequisite of b. Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

        Example 1:
        Input: numCourses = 2, prerequisites = [[1, 0]]
        Output: true

        Example 2:
        Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
        Output: false
    **/
    ```

32. **Design a HashMap**
    ```javascript
    /**
        Design a HashMap without using any built-in hash table libraries.

        Example 1:
        Input: put(1, 1), put(2, 2), get(1), get(3), put(2, 1), get(2), remove(2), get(2)
        Output: null, null, 1, -1, null, 1, null, -1
    **/
    ```

33. **Sliding Window Maximum**
    ```javascript
    /**
        You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

        Example 1:
        Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
        Output: [3, 3, 5, 5, 6, 7]

        Example 2:
        Input: nums = [1], k = 1
        Output: [1]
    **/
    ```

34. **Find the Diameter of a Binary Tree**
    ```javascript
    /**
        Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

        Example 1:
        Input: root = [1, 2, 3, 4, 5]
        Output: 3

        Example 2:
        Input: root = [1, 2]
        Output: 1
    **/
    ```

35. **Binary Tree Level Order Traversal**
    ```javascript
    /**
        Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

        Example 1:
        Input: root = [3, 9, 20, null, null, 15, 7]
        Output: [[3], [9, 20], [15, 7]]

        Example 2:
        Input: root = [1]
        Output: [[1]]
    **/
    ```

These intermediate-level questions should provide a solid challenge and help deepen your understanding of JavaScript and problem-solving techniques.