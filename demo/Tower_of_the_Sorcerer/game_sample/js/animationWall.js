var AnimationWall = function(file,position) {  //畫面的object
    this.lavaWall = new Framework.AnimationSprite({url:define.imagePath + 'lava.png', col:4 , row:1 , loop:true , speed:12}); 
    this.lavaWall.scale = 2;
    this.lavaWall.index = 1;
    this.lavaWall.start({from:0, to: 4, loop: true, speed: 6});
    var PIXEL_CONST = 64;

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){  //畫道具的圖??
        if(this._tileType === 2){
            this.lavaWall.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
            this.lavaWall.draw(ctx);
        }
    }

};

Object.defineProperty(AnimationWall.prototype, 'position', {  //圖片位置 是該格的位置
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.lavaWall.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(AnimationWall.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 