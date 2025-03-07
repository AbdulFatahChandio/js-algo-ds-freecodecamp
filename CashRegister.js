function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2);

    if (changeDue > totalCid) return { status: "INSUFFICIENT_FUNDS", change: [] };
    if (changeDue.toFixed(2) === totalCid) return { status: "CLOSED", change: cid };

    let changeArr = [];
    let currencyUnits = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    cid = cid.reverse();

    for (let [unit, value] of currencyUnits) {
        let available = cid.find(money => money[0] === unit)[1];
        let amountToReturn = 0;

        while (changeDue >= value && available > 0) {
            changeDue -= value;
            changeDue = changeDue.toFixed(2);
            available -= value;
            amountToReturn += value;
        }

        if (amountToReturn > 0) {
            changeArr.push([unit, amountToReturn]);
        }
    }

    return changeDue > 0 ? { status: "INSUFFICIENT_FUNDS", change: [] } : { status: "OPEN", change: changeArr };
}

// Test Cases
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));