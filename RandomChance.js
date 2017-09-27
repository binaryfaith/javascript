function RandomChance(quarters) {
    for (var index = quarters; index > 0; index--){
        if (Math.floor(Math.random() * 100)==1) {
            console.log(Math.trunc(Math.random() * 50)+50+quarters);            
        }
    }
    console.log("You lose!");
}
RandomChance(100);
