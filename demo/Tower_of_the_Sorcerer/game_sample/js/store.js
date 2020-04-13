var Store = function () {
    this.priceIncrease = 0;
    this.currentPrice = 10;
    this.itemBought = function(){
        this.priceIncrease++;
        this.currentPrice = this.getPrice();
    }
    this.getPrice = () => this.currentPrice + this.priceIncrease * 10;
}