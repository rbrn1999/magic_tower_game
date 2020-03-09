
var PlayerState = function() {

    this._hp = 1000;
    this._power = 10;
    this._defense = 10;      
    this._coin = 0;
    this._exp = 0;
    this._position = {x:0,y:0};
    this.load = function()
    {
    }

    this.update = function(){
    }


    this.draw = function(ctx){
        ctx.globalAlpha=0.8;
        ctx.fillStyle = 'black'; //背景色
        ctx.fillRect(this._position.x - 10, this._position.y, 300, 500);    //框的大小
        ctx.font = '30pt Algerian';
        ctx.globalAlpha=1;
        ctx.fillStyle = 'yellow';   //字色?
        ctx.textBaseline = 'top';
        ctx.textAlign = 'left';
        ctx.fillText("血量: " + this._hp, this._position.x, this._position.y);  //文字
        ctx.fillText("攻擊: " + this._power, 200, 200);  //文字
        ctx.fillText("防禦: " + this._defense, 200, 300);  //文字
        ctx.fillText("金幣: " + this._coin, 200, 400);  //文字
        ctx.fillText("經驗: " + this._exp, 200, 500);  //文字
    }

    this.addHp = function(hp){
        this._hp += hp;
    }

    this.dropHp = function(hp){
        this._hp -= hp;
    }

};

Object.defineProperty(PlayerState.prototype, 'position', {
    get: function() {
        return this._position;
    },
    set: function(newValue) {
        this._position = newValue;
    }
}); 
