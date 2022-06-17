# boxy
A simple text format that allows you to make text box drawings.

# Example
```js
var str = `![0c]![00]![00]![00]![00]![10]
![02]hi!!![02]
![14]![00]![00]![00]![00]![18]`;
console.log(boxy(str))
```
Output:
```
┌────┐
│hi!!│
└────┘
```

# Writing in Boxy
How do you write in Boxy? Simple.

Boxy uses the box-drawing character range, something like this:

![Box-drawing character range](https://user-images.githubusercontent.com/71789103/174226048-0052941d-336e-4c58-9a67-1ef008936626.png)

To write a single character, you have to enclose it in `![` and `]`. To write it, first write the row, then the column. For example, if you want to draw a normal horizontal line, you just write `![00]`. Or if you want to write an X, you just write `![73]`.
