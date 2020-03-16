var Keys = function() {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size
    this.yellowKey = new Framework.Sprite(define.imagePath + 'i1.png');
    this.yellowKey.scale = 2;    //size
    this.blueKey = new Framework.Sprite(define.imagePath + 'i2.png');
    this.blueKey.scale = 2;    //size
    this.redKey = new Framework.Sprite(define.imagePath + 'i3.png');
    this.redKey.scale = 2;    //size

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){  //畫道具的圖??

        this.mapFloor.draw(ctx);
        if(this._tileType === -99){
            this.mapLightBlueStone.draw(ctx);
        }
        else if(this._tileType === -1){
            this.yellowKey.draw(ctx);
        }else if(this._tileType === -2){
            this.blueKey.draw(ctx);
        }else if(this._tileType === -3){
            this.redKey.draw(ctx);
        }
    }

};

Object.defineProperty(Keys.prototype, 'position', {  //圖片位置 是該格的位置
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.yellowKey.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.blueKey.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.redKey.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(Keys.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 