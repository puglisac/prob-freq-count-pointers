// add whatever parameters you deem necessary
function letterFrequencyCounter(string) {
    const counts = {};
    for (let char of string) {
        counts[char] = counts[char] + 1 || 1;
    }
    return counts;
}

function constructNote(message, letters) {
    const messageFreq = letterFrequencyCounter(message);
    const lettersFreq = letterFrequencyCounter(letters);
    for (let key in messageFreq) {
        if (!lettersFreq[key]) return false;
        if (messageFreq[key] > lettersFreq[key]) return false;
    }
    return true;
}

module.exports = constructNote;