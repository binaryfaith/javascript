
var daysUntilMyBirthday = 60;
for (var daysUntilMyBirthday = 60; daysUntilMyBirthday <= 60 && daysUntilMyBirthday >= 0; daysUntilMyBirthday--) {
    if (daysUntilMyBirthday >= 30) {
        console.log("It's " + daysUntilMyBirthday + "to my bday");
    } else {
        if (daysUntilMyBirthday <= 30 && daysUntilMyBirthday >= 5) {
            console.log("Counting " + daysUntilMyBirthday + "to my bday");
        }
        else {
            if (daysUntilMyBirthday < 5 && daysUntilMyBirthday > 0) {
                console.log(daysUntilMyBirthday + " days!")
            }
            if (daysUntilMyBirthday == 0) {
                console.log("Party!")
            }
        }

    }

}



