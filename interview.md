Sure! Here are 20 JavaScript live coding interview questions ranging from beginner to advanced levels. Each question includes a brief description, an example input, and the expected output.

### Beginner Level

1. **Reverse a String**
   ```javascript
   /**
       Given a string s, return the string reversed.

       Example 1:
       Input: s = "hello"
       Output: "olleh"

       Example 2:
       Input: s = "world"
       Output: "dlrow"
   **/
   ```

2. **Palindrome Check**
   ```javascript
   /**
       Given a string s, return true if it is a palindrome, and false otherwise.

       Example 1:
       Input: s = "racecar"
       Output: true

       Example 2:
       Input: s = "hello"
       Output: false
   **/
   ```

3. **Sum of an Array**
   ```javascript
   /**
       Given an array of integers nums, return the sum of all the elements.

       Example 1:
       Input: nums = [1, 2, 3, 4]
       Output: 10

       Example 2:
       Input: nums = [5, 5, 5, 5]
       Output: 20
   **/
   ```

4. **Find Maximum in an Array**
   ```javascript
   /**
       Given an array of integers nums, return the maximum value in the array.

       Example 1:
       Input: nums = [1, 2, 3, 4]
       Output: 4

       Example 2:
       Input: nums = [10, 5, 8, 20]
       Output: 20
   **/
   ```

5. **Count Vowels in a String**
   ```javascript
   /**
       Given a string s, return the number of vowels in the string.

       Example 1:
       Input: s = "hello"
       Output: 2

       Example 2:
       Input: s = "javascript"
       Output: 3
   **/
   ```

### Intermediate Level

6. **Fibonacci Sequence**
   ```javascript
   /**
       Given an integer n, return the first n numbers of the Fibonacci sequence.

       Example 1:
       Input: n = 5
       Output: [0, 1, 1, 2, 3]

       Example 2:
       Input: n = 7
       Output: [0, 1, 1, 2, 3, 5, 8]
   **/
   ```

7. **Find Duplicates in an Array**
   ```javascript
   /**
       Given an array of integers nums, return an array of duplicates in nums.

       Example 1:
       Input: nums = [1, 2, 3, 1, 2, 4]
       Output: [1, 2]

       Example 2:
       Input: nums = [1, 2, 3, 4]
       Output: []
   **/
   ```

8. **Remove Duplicates from an Array**
   ```javascript
   /**
       Given an array of integers nums, return an array with duplicates removed.

       Example 1:
       Input: nums = [1, 2, 3, 1, 2, 4]
       Output: [1, 2, 3, 4]

       Example 2:
       Input: nums = [1, 2, 3, 4]
       Output: [1, 2, 3, 4]
   **/
   ```

9. **Anagram Check**
   ```javascript
   /**
       Given two strings s1 and s2, return true if s1 and s2 are anagrams of each other, and false otherwise.

       Example 1:
       Input: s1 = "listen", s2 = "silent"
       Output: true

       Example 2:
       Input: s1 = "hello", s2 = "world"
       Output: false
   **/
   ```

10. **Merge Two Sorted Arrays**
    ```javascript
    /**
        Given two sorted arrays nums1 and nums2, return a single sorted array that combines both.

        Example 1:
        Input: nums1 = [1, 3, 5], nums2 = [2, 4, 6]
        Output: [1, 2, 3, 4, 5, 6]

        Example 2:
        Input: nums1 = [1, 2, 3], nums2 = [4, 5, 6]
        Output: [1, 2, 3, 4, 5, 6]
    **/
    ```

### Advanced Level

11. **Longest Substring Without Repeating Characters**
    ```javascript
    /**
        Given a string s, return the length of the longest substring without repeating characters.

        Example 1:
        Input: s = "abcabcbb"
        Output: 3

        Example 2:
        Input: s = "bbbbb"
        Output: 1
    **/
    ```

12. **Two Sum**
    ```javascript
    /**
        Given an array of integers nums and an integer target, return the indices of the two numbers that add up to the target.

        Example 1:
        Input: nums = [2, 7, 11, 15], target = 9
        Output: [0, 1]

        Example 2:
        Input: nums = [3, 2, 4], target = 6
        Output: [1, 2]
    **/
    ```

13. **Valid Parentheses**
    ```javascript
    /**
        Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

        Example 1:
        Input: s = "()"
        Output: true

        Example 2:
        Input: s = "([)]"
        Output: false
    **/
    ```

14. **Find Peak Element**
    ```javascript
    /**
        Given an array of integers nums, find a peak element and return its index.

        Example 1:
        Input: nums = [1, 2, 3, 1]
        Output: 2

        Example 2:
        Input: nums = [1, 2, 1, 3, 5, 6, 4]
        Output: 5
    **/
    ```

15. **Rotate Matrix**
    ```javascript
    /**
        Given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

        Example 1:
        Input: matrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ]
        Output: [
          [7, 4, 1],
          [8, 5, 2],
          [9, 6, 3]
        ]

        Example 2:
        Input: matrix = [
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16]
        ]
        Output: [
          [15, 13, 2, 5],
          [14, 3, 4, 1],
          [12, 6, 8, 9],
          [16, 7, 10, 11]
        ]
    **/
    ```

16. **Word Break**
    ```javascript
    /**
        Given a string s and a dictionary of words dict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

        Example 1:
        Input: s = "leetcode", dict = ["leet", "code"]
        Output: true

        Example 2:
        Input: s = "applepenapple", dict = ["apple", "pen"]
        Output: true
    **/
    ```

17. **Maximum Subarray**
    ```javascript
    /**
        Given an integer array nums, find the contiguous subarray which has the largest sum and return its sum.

        Example 1:
        Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
        Output: 6

        Example 2:
        Input: nums = [1]
        Output: 1
    **/
    ```

18. **Median of Two Sorted Arrays**
    ```javascript
    /**
        Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

        Example 1:
        Input: nums1 = [1, 3], nums2 = [2]
        Output: 2.0

        Example 2:
        Input: nums1 = [1, 2], nums2 = [3, 4]
        Output: 2.5
    **/
    ```

19. **Top K Frequent Elements**
    ```javascript
    /**
        Given an array of integers nums and an integer k, return the k most frequent elements.

        Example 1:
        Input: nums = [1, 1, 1, 2, 2, 3], k = 2
        Output: [1, 2]

        Example 2:
        Input: nums = [1], k = 1
        Output: [1]
    **/
    ```

20. **Longest Palindromic Substring**


    ```javascript
    /**
        Given a string s, return the longest palindromic substring in s.

        Example 1:
        Input: s = "babad"
        Output: "bab" (or "aba")

        Example 2:
        Input: s = "cbbd"
        Output: "bb"
    **/
    ```

These questions range from simple string manipulations and basic array operations to more complex algorithmic challenges involving dynamic programming and advanced data structures. Happy coding!