# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t-iffany/lotide`

**Require it:**

`const _ = require('@t-iffany/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: Retrieves first element from an array
* `tail()`: Returns every element except the head/first element
* `middle()`: Returns an array with only the middle elements of the provided array
* `eqArrays()`: Compares two arrays for a perfect match
* `assertEqual()`: Compares two values and prints out a colourful successful or failure message

