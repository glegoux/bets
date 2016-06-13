# Bets

For a two-opponents competition, you bet the result of each match :
* 0 point if you mistook
* 2 points if you are correct with a 1 point bonus if the score is correct

The winner is the one who has the more important of accumulated points.

Here, it is a example for the euro 2016.

## Install

1. Go to Google Drive and create Google Sheets
2. Customize your Google Sheet with freeze row and colors, respectively in :  
`View > Freeze` and `Format > Conditional formatting...`
3. Write your script to define your own functions in `Tools > Script editor...`
4. Here :
  * Score total is obtained with `=SUM(E2:E100)`
  * Score total is obtained with `=COMPARE_RESULT(C<i>:D<i>)` where `i` is the `ith` row.
 

## Documentation of Apps Script

https://www.google.com/script/start/

## Coding Style

* File with extension `.gs` as Google Sheets
* `UPPER_CASE_UNDERSCORE` for public functions
* `lower_case_underscore` for private functions 

## JsDoc

https://developers.google.com/closure/compiler/docs/js-for-compiler
