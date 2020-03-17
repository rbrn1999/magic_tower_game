var Door = function(file,position) {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size
    this.yellowDoor = new Framework.AnimationSprite({url:define.imagePath + 'd1.png', col:4 , row:1 , loop:true , speed:12}); 
    this.yellowDoor.scale = 2;
    this.yellowDoor.index = 1;
    this.blueDoor = new Framework.AnimationSprite({url:define.imagePath + 'd2.png', col:4 , row:1 , loop:true , speed:12}); 
    this.blueDoor.scale = 2;
    this.blueDoor.index = 1;
    this.redDoor = new Framework.AnimationSprite({url:define.imagePath + 'd3.png', col:4 , row:1 , loop:true , speed:12}); 
    this.redDoor.scale = 2;
    this.redDoor.index = 1;
    this.yellowDoor.start({from:0, to: 4, loop: false, speed: 6});
    this.blueDoor.start({from:0, to: 4, loop: false, speed: 6});
    this.redDoor.start({from:0, to: 4, loop: false, speed: 6});
    var PIXEL_CONST = 64;

    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function(){

    }

    this.draw = function(ctx){  //畫道具的圖??
        this.mapFloor.draw(ctx);
        if(this._tileType === 10){
            this.yellowDoor.draw(ctx);
        }
        else if(this._tileType === 11){
            this.blueDoor.draw(ctx);
        }
        else if(this._tileType === 12){
            this.redDoor.draw(ctx);
        }
    }

};

Object.defineProperty(Door.prototype, 'position', {  //圖片位置 是該格的位置
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.yellowDoor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.blueDoor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
        this.redDoor.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
}); 

Object.defineProperty(Door.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 