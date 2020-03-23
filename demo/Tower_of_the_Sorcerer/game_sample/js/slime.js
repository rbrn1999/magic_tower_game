var Slime = function (file, position) {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size

    this.greenSlime = new Framework.AnimationSprite({ url: define.imagePath + 'e1.png', col: 2, row: 1, loop: true, speed: 12 });
    this.greenSlime.scale = 2;
    this.greenSlime.index = 1;

    this.redSlime = new Framework.AnimationSprite({ url: define.imagePath + 'e2.png', col: 2, row: 1, loop: true, speed: 12 });
    this.redSlime.scale = 2;
    this.redSlime.index = 1;

    this.blackSlime = new Framework.AnimationSprite({ url: define.imagePath + 'e3.png', col: 2, row: 1, loop: true, speed: 12 });
    this.blackSlime.scale = 2;
    this.blackSlime.index = 1;

    this.greenSlime.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.redSlime.start({ from: 0, to: 4, loop: false, speed: 6 });
    this.blackSlime.start({ from: 0, to: 4, loop: false, speed: 6 });
    var PIXEL_CONST = 64;

    this.mapPosition = { x: 0, y: 0 };
    this.spritePosition = {}
    this._tileType = 0;

    this._greenSlimeHP = 17;
    this._greenSlimeATK = 9;
    this._greenSlimeDEF = 0;
    this._greenSlimeGainCoin = 0;
    this._greenSlimeGainExp = 0;

    this._redSlimeHP = 22;
    this._redSlimeATK = 10;
    this._greenSlimeDEF = 1;
    this._redSlimeGainCoin = 1;
    this._redSlimeGainExp = 0;

    this._blackSlimeHP = 65;
    this._blackSlimeATK = 30;
    this._blackSlimeDEF = 1;
    this._blackSlimeGainCoin = 4;
    this._blackSlimeGainExp = 0;

    this.update = function () {

    }

    this.draw = function (ctx) {  //畫道具的圖??
        this.mapFloor.draw(ctx);
        if (this._tileType === 30) {
            this.greenSlime.draw(ctx);
        }
        else if (this._tileType === 31) {
            this.redSlime.draw(ctx);
        }
        else if (this._tileType === 32) {
            this.blackSlime.draw(ctx);
        }
    }

    this.delete = function () {
        this.mapFloor = null;
        this.greenSlime = null;
        this.redSlime = null;
        this.blackSlime = null;
    }

    this.getHP = function (tileType) {
        if (tileType === 30) {
            return this._greenSlimeHP;
        }
        else if (tileType === 31) {
            return this._redSlimeHP;
        }
        else if (tileType === 32) {
            return this._blackSlimeHP;
        }
    }

    this.getATK = function (tileType) {
        if (tileType === 30) {
            return this._greenSlimeATK;
        }
        else if (tileType === 31) {
            return this._redSlimeATK;
        }
        else if (tileType === 32) {
            return this._blackSlimeATK;
        }
    }

    this.getDEF = function (tileType) {
        if (tileType === 30) {
            return this._greenSlimeDEF;
        }
        else if (tileType === 31) {
            return this._redSlimeDEF;
        }
        else if (tileType === 32) {
            return this._blackSlimeDEF;
        }
    }

    this.getGainCoin = function (tileType) {
        if (tileType === 30) {
            return this._greenSlimeGainCoin;
        }
        else if (tileType === 31) {
            return this._redSlimeGainCoin;
        }
        else if (tileType === 32) {
            return this._blackSlimeGainCoin;
        }
    }
    this.getGainExp = function (tileType) {
        if (tileType === 30) {
            return this._greenSlimeGainExp;
        }
        else if (tileType === 31) {
            return this._redSlimeGainExp;
        }
        else if (tileType === 32) {
            return this._blackSlimeGainExp;
        }
    }
};

Object.defineProperty(Slime.prototype, 'position', {  //圖片位置 是該格的位置
    get: function () {
        return this.mapPosition;
    },
    set: function (newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.greenSlime.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.redSlime.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.blackSlime.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
    }
});

Object.defineProperty(Slime.prototype, 'tileType', {
    get: function () {
        return this._tileType;
    },
    set: function (newValue) {
        this._tileType = newValue;
    }
}); 