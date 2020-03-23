var Guard = function (file, position) {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size

    this.yellowGuard = new Framework.AnimationSprite({ url: define.imagePath + 'e21.png', col: 2, row: 1, loop: true, speed: 12 });
    this.yellowGuard.scale = 2;
    this.yellowGuard.index = 1;

    this.yellowGuard.start({ from: 0, to: 4, loop: false, speed: 6 });
    var PIXEL_CONST = 64;

    this.mapPosition = { x: 0, y: 0 };
    this.spritePosition = {}
    this._tileType = 0;

    this._yellowGuardHP = 25;
    this._yellowGuardATK = 22;
    this._yellowGuardDEF = 11;
    this._yellowGuardGainCoin = 6;
    this._yellowGuardGainExp = 0;

    this.update = function () {

    }

    this.draw = function (ctx) {  //畫道具的圖??
        this.mapFloor.draw(ctx);
        if (this._tileType === 42) {
            this.yellowGuard.draw(ctx);
        }
    }

    this.delete = function () {
        this.mapFloor = null;
        this.yellowGuard = null;
    }

    this.getHP = function (tileType) {
        if (tileType === 42) {
            return this._yellowGuardHP;
        }
    }

    this.getATK = function (tileType) {
        if (tileType === 42) {
            return this._yellowGuardATK;
        }
    }

    this.getDEF = function (tileType) {
        if (tileType === 42) {
            return this._yellowGuardDEF;
        }
    }

    this.getGainCoin = function (tileType) {
        if (tileType === 42) {
            return this._yellowGuardGainCoin;
        }
    }
    this.getGainExp = function (tileType) {
        if (tileType === 42) {
            return this._yellowGuardGainExp;
        }
    }
};

Object.defineProperty(Guard.prototype, 'position', {  //圖片位置 是該格的位置
    get: function () {
        return this.mapPosition;
    },
    set: function (newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.yellowGuard.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
    }
});

Object.defineProperty(Guard.prototype, 'tileType', {
    get: function () {
        return this._tileType;
    },
    set: function (newValue) {
        this._tileType = newValue;
    }
}); 