function numWaterBottles(numBottles: number, numExchange: number): number {
    let ans:number = numBottles
    let emptyBot:number = numBottles
    while(emptyBot>=numExchange){
        const newBot:number = Math.floor(emptyBot/numExchange)
        ans += newBot
        emptyBot = emptyBot % numExchange + newBot
    }
    return ans
};