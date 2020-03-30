var ConsoleBoard = function () {

    this._message1 = "";
    this._message2 = "";
    this._message3 = "";
    this._position = { x: 0, y: 0 };
    this.load = function () {
    }

    this.update = function () {
    }


    this.draw = function (ctx) {
        ctx.globalAlpha = 0.8;
        ctx.fillStyle = 'black'; //背景色
        ctx.fillRect(this._position.x - 10, this._position.y, 300, 100);    //框的大小
        ctx.font = '20pt Algerian';
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'yellow';   //字色?
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillText(this._message1, this._position.x, this._position.y);  //文字
        ctx.fillText(this._message2, this._position.x, this._position.y + 25);  //文字
        ctx.fillText(this._message3, this._position.x, this._position.y + 50);  //文字
    }

    this.setMessage = function (newMessage1 = "", newMessage2 = "", newMessage3 = "") {
        this._message1 = newMessage1;
        this._message2 = newMessage2;
        this._message3 = newMessage3;
    }
};

Object.defineProperty(ConsoleBoard.prototype, 'position', {
    get: function () {
        return this._position;
    },
    set: function (newValue) {
        this._position = newValue;
    }
}); 
