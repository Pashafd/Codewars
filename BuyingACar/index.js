/*
    Let us begin with an example:
    A man has a rather old car being worth $2000. 
    He saw a secondhand car being worth $8000. 
    He wants to keep his old car until he can buy the secondhand one.

    He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
    Furthermore this percent of loss increases of 0.5 percent at the end of every two months. 
    Our man finds it difficult to make all these calculations.

    Can you help him?
    How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?
*/

const nbMonths = (startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) => {
    if (startPriceOld >= startPriceNew) {
        return [0, startPriceOld - startPriceNew];
    }

    let [priceOld, priceNew, percentLoss, available] = [
        startPriceOld,
        startPriceNew,
        percentLossByMonth,
        0,
    ];
    available = priceOld - priceNew + savingperMonth + (priceNew - priceOld) * (percentLoss / 100);

    for (let i = 1; ; i++) {
        if (i % 2 === 0) {
            percentLoss += 0.5;
        }

        if (i !== 1) available += savingperMonth + (priceNew - priceOld) * (percentLoss / 100);

        priceNew -= priceNew * (percentLoss / 100);
        priceOld -= priceOld * (percentLoss / 100);

        if (available >= 0) {
            return [i, Math.round(available)];
        }
    }
};

console.log(nbMonths(2000, 8000, 1000, 1.5));
