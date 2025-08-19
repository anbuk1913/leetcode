
var MinStack = function() {
    this.arr = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = this.getMin()
    if (min === null || min > val) {
      min = val
    }
    this.arr.push([val, min]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.arr.length){
        return this.arr[this.arr.length-1][0]
    } else {
        return null
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.arr.length){
        return this.arr[this.arr.length-1][1]
    } else {
        return null
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */