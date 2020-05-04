var Zombie = function (file, position) {  //畫面的object
    this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png');
    this.mapFloor.scale = 2;    //size

    this.zombieMan = new Framework.AnimationSprite({ url: define.imagePath + 'e13.png', col: 2, row: 1, loop: true, speed: 1 });
    this.zombieMan.scale = 2;
    this.zombieMan.index = 1;

    this.zombieKnight = new Framework.AnimationSprite({ url: define.imagePath + 'e14.png', col: 2, row: 1, loop: true, speed: 1 });
    this.zombieKnight.scale = 2;
    this.zombieKnight.index = 1;

    this.zombieMan.start({ from: 0, to: 1});
    this.zombieKnight.start({ from: 0, to: 1 });
    var PIXEL_CONST = 64;

    this.mapPosition = { x: 0, y: 0 };
    this.spritePosition = {}
    this._tileType = 0;

    this._zombieManHP = 130;
    this._zombieManATK = 42;
    this._zombieManDEF = 2;
    this._zombieManGainCoin = 9;
    this._zombieManGainExp = 0;

    this._zombieKnightHP = 160;
    this._zombieKnightATK = 60;
    this._zombieKnightDEF = 7;
    this._zombieKnightGainCoin = 0;
    this._zombieKnightGainExp = 0;

    this.update = function () {
        this.zombieMan.update();
        this.zombieKnight.update();
    }

    this.draw = function (ctx) {  //畫道具的圖??
        this.mapFloor.draw(ctx);
        if (this._tileType === 36) {
            this.zombieMan.draw(ctx);
        }
        else if (this._tileType === 37) {
            this.zombieKnight.draw(ctx);
        }
    }

    this.delete = function () {
        this.mapFloor = null;
        this.zombieMan = null;
        this.zombieKnight = null;
    }

    this.getHP = function (tileType) {
        if (tileType === 36) {
            return this._zombieManHP;
        }
        else if (tileType === 37) {
            return this._zombieKnightHP;
        }
    }

    this.getATK = function (tileType) {
        if (tileType === 36) {
            return this._zombieManATK;
        }
        else if (tileType === 37) {
            return this._zombieKnightATK;
        }
    }

    this.getDEF = function (tileType) {
        if (tileType === 36) {
            return this._zombieManDEF;
        }
        else if (tileType === 37) {
            return this._zombieKnightDEF;
        }
    }

    this.getGainCoin = function (tileType) {
        if (tileType === 36) {
            return this._zombieManGainCoin;
        }
        else if (tileType === 37) {
            return this._zombieKnightGainCoin;
        }
    }
    this.getGainExp = function (tileType) {
        if (tileType === 36) {
            return this._zombieManGainExp;
        }
        else if (tileType === 37) {
            return this._zombieKnightGainExp;
        }
    }
};

Object.defineProperty(Zombie.prototype, 'position', {  //圖片位置 是該格的位置
    get: function () {
        return this.mapPosition;
    },
    set: function (newValue) {
        this.mapPosition = newValue;
        this.mapFloor.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.zombieMan.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
        this.zombieKnight.position = { x: this.mapPosition.x * 64, y: this.mapPosition.y * 64 };
    }
});

Object.defineProperty(Zombie.prototype, 'tileType', {
    get: function () {
        return this._tileType;
    },
    set: function (newValue) {
        this._tileType = newValue;
    }
}); 