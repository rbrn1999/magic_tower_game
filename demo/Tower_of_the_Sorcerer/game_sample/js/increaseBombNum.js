var IncreaseBombNum = function() {
    this.sprite = new Framework.Sprite(define.imagePath + 'increaseBombNum.png');
    this.sprite.scale = 2;
    this.mapPosition = {x:0, y:0};
    this.spritePosition = {}
    this._tileType = 0;
    this.update = function() {
    }
    this.draw = function(ctx) {
        this.sprite.draw(ctx);
    }
};

Object.defineProperty(IncreaseBombNum.prototype, 'position', {
    get: function() {
        return this.mapPosition;
    },
    set: function(newValue) {
        this.mapPosition = newValue;
        this.sprite.position = {x: this.mapPosition.x * 64, y: this.mapPosition.y * 64};
    }
});

Object.defineProperty(IncreaseBombNum.prototype, 'tileType', {
    get: function() {
        return this._tileType;
    },
    set: function(newValue) {
        this._tileType = newValue;
    }
}); 