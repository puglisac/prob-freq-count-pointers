// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valArr) {
    const obj = {};
    for (let i = 0; i < keyArr.length; i++) {
        if (valArr[i]) {
            obj[keyArr[i]] = valArr[i];
        } else {
            obj[keyArr[i]] = null;
        }
    } return obj;
}
module.exports = twoArrayObject;