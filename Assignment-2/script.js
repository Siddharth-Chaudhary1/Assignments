console.log("Question 1");
for(let i = 1;i <= 100;++i){
    let flag = 1;

    let j = 2;
    while(j*j <= i){
        if(i % j == 0)
            flag = 0;
        ++j;
    }

    if(flag)
        console.log(i);
}

calculate = (x, y, c) => {
    console.log("Question 2");
    switch(c){
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        default: return "Invalid operation";
    } 
}

findTax = (salary) => {
    console.log("Question 3");
    if(0 < salary && salary <= 500000)
        return 0;
    else if(500000 < salary && salary <= 1000000)
        return 0.1 * salary;
    else if(1000000 < salary && salary <= 1500000)
        return 0.2 * salary;
    else
        return 0.3 * salary;
}

fun = (x, y) => {
    console.log("Question 4");
    let sum = 0;
    while(x != 0 && y != 0){
        sum += (x % 10) * (y % 10);
        x = Math.floor(x/10);
        y = Math.floor(y/10);
    }

    return sum;
}