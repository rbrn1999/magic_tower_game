var NPC = function (file, position) {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size

    this.man = new Framework.AnimationSprite({ url: define.imagePath + 'e19.png', col: 2, row: 1, loop: true, speed: 12 });
    this.man.scale = 2;
    this.man.index = 1;

    this.woman = new Framework.AnimationSprite({ url: define.imagePath + 'e20.png', col: 2, row: 1, loop: true, speed: 12 });
    this.woman.scale = 2;
    this.woman.index = 1;

    this.thief = new Framework.AnimationSprite({ url: define.imagePath + 'e24.png', col: 2, row: 1, loop: true, speed: 12 });
    this.thief.scale = 2;
    this.thief.index = 1;

    this.oldMan = new Framework.AnimationSprite({ url: define.imagePath + 'e25.png', col: 2, row: 1, loop: true, speed: 12 });
    this.oldMan.scale = 2;
    this.oldMan.index = 1;

    this.princess = new Framework.AnimationSprite({ url: define.imagePath + 'e25.png', col: 2, row: 1, loop: true, speed: 12 });
    this.princess.scale = 2;
    this.princess.index = 1;

    this.blueShop0 = new Framework.Sprite(define.imagePath + 's25.png');
    this.blueShop0.scale = 2;    //size

    this.blueShop1 = new Framework.Sprite(define.imagePath + 'NPC01-02_3_1.png');
    this.blueShop1.scale = 2;    //size

    this.blueShop2 = new Framework.Sprite(define.imagePath + 's26.png');
    this.blueShop2.scale = 2;    //size

    this.man.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.woman.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.thief.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.oldMan.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.princess.start({ from: 0, to: 4, loop: false, speed: 6 });
    var PIXEL_CONST = 64;

    this.mapPosition = { x: 0, y: 0 };
    this.spritePosition = {}
    this._tileType = 0;

    this.update = function () {

    }

    this.draw = function (ctx) {  //畫道具的圖??
        this.mapFloor.draw(ctx);
        if (this._tileType === 91) {
            this.blueShop0.draw(ctx);
        }
        else if (this._tileType === 92) {
            this.blueShop1.draw(ctx);
        }
        else if (this._tileType === 93) {
            this.blueShop2.draw(ctx);
        }
        else if (this._tileType === 94) {
            this.princess.draw(ctx);
        }
        else if (this._tileType === 95) {
            this.man.draw(ctx);
        }
        else if (this._tileType === 96) {
            this.woman.draw(ctx);
        }
        else if (this._tileType === 97) {
            this.thief.draw(ctx);
        }
        else if (this._tileType === 98) {
            this.oldMan.draw(ctx);
        }
    }

    this.delete = function () {
        this.mapFloor = null;
        this.man = null;
        this.woman = null;
        this.thief = null;
        this.oldMan = null;
        this.princess = null;
        this.blueShop0 = null;
        this.blueShop1 = null;
        this.blueShop2 = null;
    }
};

Object.defineProperty(NPC.prototype, 'position', {  //圖片位置 是該格的位置
    get: function () {
        return this.mapPosition;
    },
    set: function (newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.man.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.woman.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.thief.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.oldMan.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.princess.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.blueShop0.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.blueShop1.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.blueShop2.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
    }
});

Object.defineProperty(NPC.prototype, 'tileType', {
    get: function () {
        return this._tileType;
    },
    set: function (newValue) {
        this._tileType = newValue;
    }
}); 