// add whatever parameters you deem necessary
function frequencyCounter(num) {
    const string = num.toString();
    const counts = new Map();
    for (let val of string) {
        let valCount = counts.get(val) || 0;
        counts.set(val, valCount + 1);
    }
    return counts;
}

function sameFrequency(num1, num2) {
    const num1Freq = frequencyCounter(num1);
    const num2Freq = frequencyCounter(num2);
    if (num1Freq.size !== num2Freq.size) return false;
    for (let key of num1Freq.keys()) {
        if (!num2Freq.has(key)) return false;
        if (num1Freq.get(key) !== num2Freq.get(key)) return false;
    }
    return true;
}
module.exports = sameFrequency;
