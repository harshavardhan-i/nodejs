// module.exports = functionName;

// module.exports.getDate = function (){
exports.getDate = function (){
    const today = new Date();
    // const currentDay = today.getDay(); //returns a day number
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function (){
    const today = new Date();
    // const currentDay = today.getDay(); //returns a day number
    
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };
    
    return day = today.toLocaleDateString("en-US", options);
}