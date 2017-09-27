function RangePrint(x, y, z) {
    var arr = [];
    var num = 0;
    for (var i = 1; i < y / z; i++) {
        num = z * i;
        arr.push(num);
    }
 
    console.log(arr);
}

RangePrint(2, 10, 2)