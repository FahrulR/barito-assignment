function maxStockProfit(prices) {
    let maxProfit = 0
    let buy = 0
    let sell = 0

    let changeBuyPrice = true

    for (let i = 0; i < prices.length; i++) {
        if (changeBuyPrice) buy = prices[i]
        sell = prices[i + 1]
        // console.log(sell)

        if (sell < buy) {
            changeBuyPrice = true
        } else {
            let tempProfit = sell - buy
            if (tempProfit > maxProfit) maxProfit = tempProfit
            changeBuyPrice = false
        }
    }
    if (maxProfit != 0) {
        console.log(maxProfit)
    } else {
        console.log("tidak dapat membeli")
    }
}

maxStockProfit([5, 6, 15, 3, 10, 22, 15])
maxStockProfit([10, 15, 8, 7, 14])
maxStockProfit([100, 90, 80, 75, 65])