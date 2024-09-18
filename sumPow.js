function sumPow(array, power = 1) {
    let sum = 0;
    array.array.forEach(element => {
        if (element.isArray(element)) {
            sumPow(element,pow+1);
        }else{
            sum += element
        }
        
    });

    return Math.pow(sum,power);
    
}
