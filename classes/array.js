// Your code here
Array.prototype.isEqual = function(array) {
    for(let i = 0; i < this.length; i += 1) {
        if (this[i] !== array[i]) {
            return false;
        }
    }

    return true;
}