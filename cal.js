const calculator = {
    add: function(a,b){
        return a+b;
    },
    min: function(a,b){
        return a-b;
    }, 
    div: function(a,b){
        return a/b;
    },
    mul: function(a,b){
        return a*b;
    },
    powerB: function(a,b){ 
        return a**b;
    }
};

const plus = calculator.add(5,2);
const minus = calculator.min(plus,2);
const divide = calculator.div(10,minus);
const multiple = calculator.mul(divide, plus);
const powerResult = calculator.powerB(divide, minus);

