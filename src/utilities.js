import moment from "moment";

export {
    birthdayToAge
}

function birthdayToAge(birthday, today){
    return moment(today).diff(birthday, "years");
}
