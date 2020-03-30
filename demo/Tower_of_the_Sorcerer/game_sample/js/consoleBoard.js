var ConsoleBoard = function () {

    this._message1 = "";
    this._message2 = "";
    this._message3 = "";
    this._position = { x: 0, y: 0 };
    this.fadeOutCounter = 0;
    this.eventFlag = false;
    this.load = function () {
    }

    this.update = function () {
        this.fadeOutCounter++;
    }


    this.draw = function (ctx) {
        //console.log("Fade Out: " + this.fadeOutCounter);
        if(this.fadeOutCounter<120 && this.eventFlag){
            ctx.globalAlpha = 0.9;
            ctx.fillStyle = '#212F3D'; //背景色
            ctx.fillRect(this._position.x - 10, this._position.y, 290, 150);    //框的大小
            ctx.font = '25pt Algerian';
            ctx.globalAlpha = 1;
            ctx.fillStyle = 'orange';   //字色
            ctx.textBaseline = 'top';
            ctx.textAlign = 'left';
            ctx.fillText(this._message1, this._position.x, this._position.y + 20);  //文字
            ctx.fillText(this._message2, this._position.x, this._position.y + 60);  //文字
            ctx.fillText(this._message3, this._position.x, this._position.y + 100);  //文字
        } else {
            ctx.globalAlpha = 0;
            ctx.fillRect(this._position.x - 10, this._position.y, 290, 150);
            ctx.fillText("", this._position.x, this._position.y + 20);
            ctx.globalAlpha = 1; //Render might be fucked up if you don't set it back
            this.adeOutCounter = 0;
            this.eventFlag = false;
        }
    }

    this.setMessage = function (newMessage1 = "", newMessage2 = "", newMessage3 = "") {
        this.fadeOutCounter = 0;
        this.eventFlag = true;
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
