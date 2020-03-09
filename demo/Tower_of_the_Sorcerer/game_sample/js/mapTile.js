
var MapTile = function() {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'floor2.png');
    this.mapFloor.scale = 2;    //size

    this.mapWall = new Framework.Sprite(define.imagePath + 'treeStone.png');
    this.mapWall.scale = 2; //size

    this.increaseBombNum  = new Framework.Sprite(define.imagePath + 'increaseBombNum.png');
    this.increaseBombNum.scale = 1.5;   //size

    this.increaseBombPower  = new Framework.Sprite(define.imagePath + 'increaseBombPower.png');
    this.increaseBombPower.scale = 1.5; //size

    this.stopMonster  = new Framework.Sprite(define.imagePath + 'stopMonster.png');
    this.stopMonster.scale = 1.5;   //size

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){  //畫道具的圖??

        this.mapFloor.draw(ctx);
        if(this._tileType === 1){
            this.mapWall.draw(ctx);
        }else if(this._tileType === -1){
            this.increaseBombNum.draw(ctx);
        }else if(this._tileType === -2){
            this.increaseBombPower.draw(ctx);
        }else if(this._tileType === -3){
            this.stopMonster.draw(ctx);
        }
    }

};

Object.defineProperty(MapTile.prototype, 'position', {  //圖片位置 是該格的位置
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.mapWall.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.increaseBombNum.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.increaseBombPower.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.stopMonster.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(MapTile.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 