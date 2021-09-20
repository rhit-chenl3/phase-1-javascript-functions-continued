// Your code here
function saturdayFun(msg = "roller-skate"){
    return `This Saturday, I want to ${msg}!`;
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(symbol="*") {
    return function(phrase) {
        return `You are ${symbol}${phrase}${symbol}!`;
    }
}