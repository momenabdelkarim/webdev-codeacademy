const getSleepHours = day => {
    switch (day) {
        case "monday":
            return 8;
        case "tuesday":
            return 8;
        case "wednesday":
            return 8;
        case "thursday":
            return 8;
        case "friday":
            return 8;
        case "saturday":
            return 8;
        case "sunday":
            return 8;
        default:
            return 0;
    }
};

const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") +
    getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") +
    getSleepHours("saturday") + getSleepHours("sunday");

const getIdealSleepHours = () => {
    let idealHours = 8.5;
    return idealHours * 7;
};

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed.");
    } else {
        console.log("You should get " + (idealSleepHours - actualSleepHours) + " more hour(s) of sleep.");
    }
};

console.log(getSleepHours("monday"));
console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt();