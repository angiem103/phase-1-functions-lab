function distanceFromHqInBlocks(street) {
    let result
    if (street > 42 ) {result = street - 42;
    } else if (street < 42) {result = 42 - street;
    };
    return result

}

function distanceFromHqInFeet(feetBlocks) {
    distanceFromHqInBlocks(feetBlocks);
    return distanceFromHqInBlocks(feetBlocks) * 264
}

function distanceTravelledInFeet(num1,num2) {
    let traveled
    if (num1 > num2) { traveled = (num1 - num2) *264
     } else if (num2 > num1) {traveled = (num2 - num1) *264}
    return traveled

}

function calculatesFarePrice(start,distance){
    let feet
    if (start > distance) {
        feet = (start - distance) * 264;

         if (feet < 400) {return 0};
         if (feet > 2500) {return 'cannot travel that far'}
         if (feet < 2000) {return (feet - 400) *.02}
         if (feet > 2000) {return 25}
    }
    if (distance > start) {
        feet = (distance - start) * 264;
        if (feet < 400) {return 0};
        if (feet > 2500) {return 'cannot travel that far'}
        if (feet < 2000) {return (feet - 400) *.02}
        if (feet > 2000) {return 25}
    }
}
        