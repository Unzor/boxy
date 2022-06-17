# boxy
A simple text format that allows you to make text box drawings.

# Example
```js
var str = `![0c]![00]![00]![00]![00]![10]
![02]hi!!![02]
![14]![00]![00]![00]![00]![18]`;
console.log(boxy_to_string(str))
```
Output:
```
┌────┐
│hi!!│
└────┘
```
