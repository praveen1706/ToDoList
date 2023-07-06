//jshint ESversion:6

module.exports.getDate = getDate;

function getDate() {

    const today = new Date();     //std js code for getting date

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    };
    
    const day = today.toLocaleDateString("en-US", options);   //january, july 1 ->format

    return day;
}

//both way is same
//day alone

exports.getDay = function() {

    const today = new Date();

    const options = {
        weekday: "long"
    };

    const day = today.toLocaleDateString("en-us", options);

    return day; 
}