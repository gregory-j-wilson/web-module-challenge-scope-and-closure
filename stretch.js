function addSixClosure(addSix, startNumber) {

    return addSix(startNumber);    

}

const addSix = function(startNumber) {
    return startNumber + 6;
}

console.log(addSixClosure(addSix, 10));