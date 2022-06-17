function boxy(s) {
     var rangethrough = (sequence, str) => {
        var a2 = [];
        str.split(sequence[0]).forEach(function(e) {
            var h = e.split(sequence[1]);
            if (h.length == 1) {
                h = h[0];
            }
            a2.push(h)
        })
        var a3 = [];
        a2.forEach(function(e) {
            var type = typeof e;
            if (type == "object") {
                a3.push(sequence[0] + e[0] + sequence[1]);
                a3.push(e[1]);
            } else {
                a3.push(e);
            }
         })
        return a3;
    }
    
    var from_table = (a, b) => {
        return String.fromCharCode(parseInt('0x25'+a+b));
    };
    
    var res = rangethrough(['![',']'],str).slice(1,-1).map(x=>{
        if (x.startsWith('![')){
            return from_table(x.slice(2,-1).split('')[0],x.slice(2,-1).split('')[1])
        } else {
            return x
        }
    }).join('')
    
    return res
}
