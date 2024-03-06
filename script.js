const makeChange = (c) => {
    const coins = {
        'q': 25, 
        'd': 10,
        'n': 5, 
        'p': 1,
    };
    let result = {
        'q': 0,
        'd': 0,
        'n': 0,
        'p': 0,
    };
 
    for (let coin in coins) {
        let div = Math.floor(c / coins[coin]);
        result[coin] = div;
        c -= div * coins[coin];
    }
    return result;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
