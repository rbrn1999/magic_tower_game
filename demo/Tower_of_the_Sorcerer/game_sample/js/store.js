var Store = function () {
    this.basePrice = 10;
    this.priceIncrease = 0;
    this.getPrice = () => this.basePrice + this.priceIncrease * 10;
}