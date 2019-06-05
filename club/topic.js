var topic = [
    "今天不開",
    "GTA",
    "LOL",
    "今天不開",
    "弓箭傳說",
    "R6",
    "今天不開",
    "今天不開",
    "GTA",
    "GTA",
    "R6",
    "LOL",
    "今天不開",
    "Minecraft",
    "GTA",
    "LOL",
    "今天不開",
    "今天不開",
]
var startDate = new Date();
function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
setMonthAndDay(2,23);