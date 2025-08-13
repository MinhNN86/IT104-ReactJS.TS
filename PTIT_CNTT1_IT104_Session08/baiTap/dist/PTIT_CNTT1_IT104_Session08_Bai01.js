var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Th\u1EE9 Hai";
    WeekDays["Tuesday"] = "Th\u1EE9 Ba";
    WeekDays["Wednesday"] = "Th\u1EE9 T\u01B0";
    WeekDays["Thursday"] = "Th\u1EE9 N\u0103m";
    WeekDays["Friday"] = "Th\u1EE9 S\u00E1u";
    WeekDays["Saturday"] = "Th\u1EE9 B\u1EA3y";
    WeekDays["Sunday"] = "Ch\u1EE7 Nh\u1EADt";
})(WeekDays || (WeekDays = {}));
for (const day in WeekDays) {
    console.log(WeekDays[day]);
}
export {};
