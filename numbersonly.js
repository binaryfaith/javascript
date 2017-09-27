function onlynumbers(array) {
    var newarray = [];
    for (var index = 0; index < array.length; index++) {
       
        var num = 0;
        if (typeof array[index] === "number") {
            num = array[index];
            newarray.push(num);
        }
        
    }
    console.log(newarray);
}
onlynumbers([1,"apple",5]);
