const age = 96;

function calculateKrAge(ageOfForeigner) {   
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);

console.log(krAge);


/* 실행방법

1. const age = 96;
2. const krAge = calculateKrAge(96);
3. function calculateKrAge(96) {   
    return 96 + 2;
}
4. const krAge = 98;
5. console.log(98);


*/