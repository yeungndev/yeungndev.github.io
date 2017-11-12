---
layout: post
title: Clutch Talent
date:   2016-11-04 06:53
categories: career
tags: [todo, notes, follow-up]
---

### Ruby Study Problems

1. What will `val1` and `val2` equal after the code below is executed? explain your answer.
  `val2 = true && false`
  `val1 = true and false` # hint: output of this statement is IRB is NOT val of val1!

2. Which of the expressions listed below will result in "false"?
  
  ```ruby
  true     ? "true"  : "false"
  false    ? "true"  : "false"
  nil      ? "true   : "false"
  1        ? "true"  : "false"
  0        ? "true"  : "false"
  "false"  ? "true"  : "false"
  ""       ? "true"  : "false"
  []       ? "true"  : "false"
  ```
3. Consider the following two methods:

        ```ruby
          def times_two(arg1);
            puts arg1 * 2
          end

          def sum(arg1, arg2);
            puts arg1 + arg2;
          end

What will be the result of each of the following lines of code:
  time_two 5
  times_two(5)
  times_two (5)
  sum 1,2
  sum(1, 2)
  sum (1, 2)

4. Write a single line of Ruby code that prints the fibonacci sequence of any length as an array.

  (Hint: use inject)

Problem 5:

Writing programming interviw questions hasn't made me rich. Maybe trading Apple stovks will.

Suppose we could access yesterday's stock prices in an array, where:
  The indices are the time in minutes past trade opening time, which was 9:30am local time.
  The values are the price in dollars of Apple stiock at the time.
So if the stock cost $500 at 10:30am, stock_prices_yeaterday[60] = 500.
Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:
  stock_prices_yesterday = [10, 7, 5, 8, 11, 9]
  get_max_profit(stock_prices_yesterday)
  # returns 6 (buying for $5 and selling for $ 11)
  No "shorting" -- you must buy before you sell. You may not buy ad sell in the same time step (at least 1 minute must pass).

  Problem 6:

  You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

  write a function get_products_of_all_int_except_at_index () that takes an array of integer and returns an array of the product.

  For example, given:
  [1, 7, 3, 4]

  your function would return:
  [84, 12, 28, 21]

  by calculating:
  [7*3*4*, 1*3*4, 1*&*4, 1*7*3]
  Don't use division in your solution.

  Problem 7:

  You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the wolrd's largest privately owned stoc of cakes--the vault of the Queen of england.

  While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of wach type.
  each type of cake has a weight and a value, stored in an array with two indicies:

1. An integer representing the weight of the cake in kilograms
2. An integer representing the monetary value of the cake in British pounds

For example: # weighs 7 kilograms and has a value of 160 pounds
[7, 160]

# weight 3 kilograms and has a value of 90 pounds
[3, 90]

you brought a duffle ba that can hold limited weight, and want to make off with the most valuable haul possible.

Write a function max_duffel_bag_value() that takes an array of cake type arrays and a weigth capacity, and returns the maximum moentary value the duffel bag can hold.

for example: cake_arrays = [ [7, 160], [3, 90], [2, 15] ]
capacity = 20

max_dufel_bag_value(cake_arrays, capacity)
#returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values ay be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags tyhat can't hold anything. but we're not just super master mind criminals--we're also meticulous about keeping our algorithms flexible and comprehensive.






