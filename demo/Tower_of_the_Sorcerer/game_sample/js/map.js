var Map = function(map, playerPosition) //碰撞框事件的object
{
    var mapPosition = 0;
    this.mapList = new Terrain();
    this.mapArray = this.mapList.terrainList[mapPosition];    //設定顯示第幾張地圖
    this.playerSpwanPositionArray = this.mapList.spwanPositionList[mapPosition]; //設定player在第幾張地圖的重生點位置
    console.log(this.playerSpwanPositionArray);
    this.load = function(){

        this._numDoorPickAxe = 0;
        this._numIronKey = 0;
        this.constants = new Constants();
        this.showLevelBroad = new ShowLevelBroad();
        this.showLevelBroad.position = {x:200,y:0}; //分數板位置
        this.score = new Score();
        this.score.position = {x:200,y:700}; //分數板位置
        this.playerState = new PlayerState();
        this.playerState.position = {x:200,y:100}; //分數板位置
        this.yellowKeyItemInventory = new YellowKeyItemInventory();
        this.yellowKeyItemInventory.position = {x:200,y:600}; //分數板位置
        this.blueKeyItemInventory = new BlueKeyItemInventory();
        this.blueKeyItemInventory.position = {x:300,y:600}; //分數板位置
        this.redKeyItemInventory = new RedKeyItemInventory();
        this.redKeyItemInventory.position = {x:400,y:600}; //分數板位置
        this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png',this,{down:{from:0}});  //定義floor2
        this.mapWall = new Framework.Sprite(define.imagePath + 'stone1.png');    //定義treeStone
        this.mapLightBlueStone = new Framework.Sprite(define.imagePath + 'stone.png');    //定義treeStone

        var lavaWall = new Framework.AnimationSprite({url: define.imagePath + "lava.png",col: 4, row: 1, loop: true,speed: 6});
        var skyWall = new Framework.AnimationSprite({url: define.imagePath + "sky.png",col: 4, row: 1, loop: true,speed: 6});
        var yellowDoor = new Framework.AnimationSprite({url: define.imagePath + "d1.png",col: 4, row: 1, loop: true,speed: 6});
        var blueDoor = new Framework.AnimationSprite({url: define.imagePath + "d2.png",col: 4, row: 1, loop: true,speed: 6});
        var redDoor = new Framework.AnimationSprite({url: define.imagePath + "d3.png",col: 4, row: 1, loop: true,speed: 6});
        var ironDoor = new Framework.AnimationSprite({url: define.imagePath + "d6.png",col: 4, row: 1, loop: true,speed: 6});
        var whiteDoor = new Framework.AnimationSprite({url: define.imagePath + "d5.png",col: 4, row: 1, loop: true,speed: 6});
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});   //定義

        this.stageDown = new Framework.Sprite(define.imagePath + 'doordown.png');
        this.stageUp = new Framework.Sprite(define.imagePath + 'doorup.png');

        this.yellowKey  = new Framework.Sprite(define.imagePath + 'i1.png'); //定義道具甲
        this.blueKey  = new Framework.Sprite(define.imagePath + 'i2.png'); //定義道具乙
        this.redKey  = new Framework.Sprite(define.imagePath + 'i3.png'); //定義道具丙
        this.doorPickAxe  = new Framework.Sprite(define.imagePath + 'i27.png'); //定義道具丙
        this.ironKey  = new Framework.Sprite(define.imagePath + 'i5.png'); //定義道具丙
        this.player1 = new BombMan(define.imagePath + 'player1.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});  //定義 玩家
        this.player1.position = {x:1, y:1}; //初始玩家位置 可以用.setPlayerPosition(x:,y:)改

        this.monster = [];  //有n個怪物 怪物array
        this.stopMonster = false;
        this.stopMonsterCounter = 0;
    }

    this.init = function()
    {
        this.player1.StepMovedCallBack = [];    //delete
        this.deleteTileArray();
        this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        //console.log("plater1 callback");
        //console.log(this.player1.StepMovedCallBack);
        //this.mapArray = [];
        this.tileArray = [];

        for(var i=0; i<this.mapArray.length; i++){  //道具
            var line = this.mapArray[i];
            for(var j=0; j<line.length; j++){
                if(line[j] === this.constants.ItemEnum.STONE_WALL || line[j] === this.constants.ItemEnum.BLUE_STONE){
                    var stoneWall = new StoneWall();
                    stoneWall.position = {x:j, y:i};
                    stoneWall.tileType = line[j];
                    this.tileArray.push(stoneWall);
                }
                else if(line[j] === this.constants.ItemEnum.LAVA_WALL || line[j] === this.constants.ItemEnum.SKY_WALL){
                    var animationWall = new AnimationWall();
                    animationWall.position = {x:j, y:i};
                    animationWall.tileType = line[j];
                    this.tileArray.push(animationWall);
                }
                else if(line[j] >= this.constants.ItemEnum.YELLOW_DOOR && line[j] <= this.constants.ItemEnum.WHITE_DOOR){
                    var door = new Door();
                    door.position = {x:j, y:i};
                    door.tileType = line[j];
                    this.tileArray.push(door);
                }
                else if(line[j] === this.constants.ItemEnum.YELLOW_KEY || line[j] === this.constants.ItemEnum.BLUE_KEY || line[j] === this.constants.ItemEnum.IRON_KEY){
                    var keys = new Keys();
                    keys.position = {x:j, y:i};
                    keys.tileType = line[j];
                    this.tileArray.push(keys);
                }
                else if(line[j] === this.constants.ItemEnum.STAGE_UP || line[j] === this.constants.ItemEnum.STAGE_DOWN){
                    //console.log("init stage");
                    var stage = new Stage();
                    stage.position = {x:j, y:i};
                    stage.tileType = line[j];
                    this.tileArray.push(stage);
                }
                else if(line[j] === this.constants.ItemEnum.DOOR_PICK_AXE){
                    var doorPickAxe = new DoorPickAxe();
                    doorPickAxe.position = {x:j, y:i};
                    doorPickAxe.tileType = line[j];
                    this.tileArray.push(doorPickAxe);
                }
                else{
                    var tile = new MapTile();
                    tile.position = {x:j,y:i};
                    tile.tileType = line[j];
                    this.tileArray.push(tile);
                }
            }
        }
    };
    
    this.setMapPosition = function(newMapPosition){ //切換地圖
        mapPosition = newMapPosition;
        console.log("Map Position" + mapPosition);
        this.mapArray = this.mapList.terrainList[mapPosition];    //設定顯示第幾張地圖
        this.showLevelBroad.setMapLevel(mapPosition);
        this.init();
        this.update();
        this.draw(Framework.Game._context);
    }

    this.deleteTileArray = function(){
        if(this.tileArray != null){
            console.log("delete");
            for(var i=0; i<this.tileArray.length; i++)
            {
                console.log(this.tileArray[i]);
                this.tileArray[i].delete();
            }
            this.tileArray = null;  //delete
        }
    }

    this.setPlayerPosition = function(playerPosition){  //改玩家位置
        this.player1.position = playerPosition;
    }
    this.addMonster = function(monsterPosition)
    {
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});
        newMonster.position = monsterPosition;
        this.monster.push(newMonster);
    }

    this.playerMovedHandler = function(player){ //玩家移到道具後事件
        var item = m_map.mapArray[player.position.y][player.position.x];
        if(item === m_map.constants.ItemEnum.STAGE_UP){//上樓
            m_map.setMapPosition(++mapPosition);
        }
        else if(item === m_map.constants.ItemEnum.STAGE_DOWN){//下樓
            m_map.setMapPosition(--mapPosition);
        }
        else if(item === m_map.constants.ItemEnum.YELLOW_KEY){
            m_map.mapArray[player.position.y][player.position.x] = 0;   //碰撞盒換成0
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;   //圖片換成0
            m_map.score.addScore(200);  //加分
            m_map.yellowKeyItemInventory.addYellowKey(1);
        }else if(item === m_map.constants.ItemEnum.BLUE_KEY){
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map.score.addScore(200);
            m_map.blueKeyItemInventory.addBlueKey(1);
        }else if(item === m_map.constants.ItemEnum.RED_KEY){
            m_map.stopMonster = true;
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map.score.addScore(200);
            m_map.redKeyItemInventory.addRedKey(1);
        }else if(item === m_map.constants.ItemEnum.IRON_KEY){
            m_map.stopMonster = true;
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map._numIronKey= 1;
            m_map.score.addScore(200);
            console.log(m_map._numIronKey);
        }
        else if(item === m_map.constants.ItemEnum.DOOR_PICK_AXE){
            m_map.stopMonster = true;
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map._numDoorPickAxe= 1;
            m_map.score.addScore(200);
           // console.log(m_map._numDoorPickAxe);
        }
    }


	this.update = function()
	{
        /*for(var i=0; i<this.boxArray.length; i++)
        {
            this.boxArray[i].update();
        }*/
        if(this.pressWalk === true && this.player1.isWalking === false)
        {
            if(this.checkIsWalkAble(this.player1.position.x+this.playerWalkDirection.x,this.player1.position.y+this.playerWalkDirection.y))
            {
                this.player1.walk(this.playerWalkDirection);
                console.log("player position:" + this.player1.position.x + ", " +this.player1.position.y /*+ "tile: " , this.tileArray[this.player1.position.y*26+this.player1.position.x]*/);
            }
        }
        this.player1.update();
        if(this.stopMonster === true)
        {
            this.stopMonsterCounter++;
            if(this.stopMonsterCounter > 1000)
            {
                this.stopMonster = false;
            }
        }else
        {
            for(var i=0;i<this.monster.length;i++)  //偵測碰到怪物死亡
            {
                this.monster[i].update();
                if(this.monster[i].isDead == false && this.monster[i].position.x == this.player1.position.x && this.monster[i].position.y == this.player1.position.y)
                {
                    this.player1.die();
                    break;
                }
            }
        }
        this.score.update();
        this.showLevelBroad.update();
        this.playerState.update();
        this.yellowKeyItemInventory.update();
        this.blueKeyItemInventory.update();
        this.redKeyItemInventory.update();
	}
	this.draw = function(ctx) {
		// for(var i=0; i<this.mapArray.length; i++){
		// 	var line = this.mapArray[i];
		// 	for(var j=0; j<line.length; j++){
		// 		this.mapFloor.position = {x: j * 64, y: i * 64};
		// 		this.mapFloor.draw(ctx);
        //         if(line[j] === 1){
        //             this.mapWall.position = {x: j * 64, y: i * 64};
        //             this.mapWall.draw(ctx);
        //         }else if(line[j] === -1){
        //             this.increaseBombNum.position = {x: j * 64, y: i * 64};
        //             this.increaseBombNum.draw(ctx);
        //         }else if(line[j] === -2){
        //             this.increaseBombPower.position = {x: j * 64, y: i * 64};
        //             this.increaseBombPower.draw(ctx);
        //         }
		// 	}
        // }

        for(var i=0; i<this.tileArray.length; i++)
        {
            this.tileArray[i].draw(ctx);
        }
        for(var i=0;i<this.monster.length;i++)
        {
            this.monster[i].draw(ctx);
        }
        this.player1.draw(ctx);
        this.showLevelBroad.draw(ctx);
        this.score.draw(ctx);
        this.playerState.draw(ctx);
        this.yellowKeyItemInventory.draw(ctx);
        this.blueKeyItemInventory.draw(ctx);
        this.redKeyItemInventory.draw(ctx);
	}	

    var m_map = this;

    this.getLeftMonsterNum = function()
    {
        var count =0;
        for(var i=0;i<this.monster.length;i++)
        {
            if(this.monster[i].isDead === false)
            {
                count++;
            }
        }
        return count;
    }

    this.playerWalkDirection = {x:0,y:0};
    this.pressWalk = false;
    this.keyPress = "";
    this.keydown = function(e, list){
        var playerPosition = this.player1.position;
        if(e.key === 'Down') {
            if(this.checkIsWalkAble(playerPosition.x,playerPosition.y+1)){
                //this.player1.walk({x:0,y:1});
                this.playerWalkDirection = {x:0,y:1};
                this.pressWalk = true;
                this.keyPress = "Down";
            }
            else{
                this.checkIsOpenDoor(playerPosition.x,playerPosition.y+1);
            }
        }

        if(e.key === 'Left') {
            if(this.checkIsWalkAble(playerPosition.x-1,playerPosition.y)){
                //this.player1.walk({x:-1,y:0});
                this.playerWalkDirection = {x:-1,y:0};
                this.pressWalk = true;
                this.keyPress = "Left";
            }
            else{
                this.checkIsOpenDoor(playerPosition.x-1,playerPosition.y);
            }
        }

        if(e.key === 'Right') {
            if(this.checkIsWalkAble(playerPosition.x+1,playerPosition.y)){
                //this.player1.walk({x:1,y:0});
                this.playerWalkDirection = {x:1,y:0};
                this.pressWalk = true;
                this.keyPress = "Right";
            }
            else{
                this.checkIsOpenDoor(playerPosition.x+1,playerPosition.y);
            }
        }

        if(e.key === 'Up') {
            if(this.checkIsWalkAble(playerPosition.x,playerPosition.y-1)){
                //this.player1.walk({x:0,y:-1});
                this.playerWalkDirection = {x:0,y:-1};
                this.pressWalk = true;
                this.keyPress = "Up";
            }
            else{
                this.checkIsOpenDoor(playerPosition.x,playerPosition.y-1);
            }
        }
        if(e.key === "A") {
            if(mapPosition > 0){
                this.setMapPosition(--mapPosition);
            }
            else{
                console.log("You can not go deeper, there is hell!!");
            }
        }
        if(e.key === "D") {
            if(mapPosition < this.mapList.terrainList.length-1){
                this.setMapPosition(++mapPosition);
            }
            else{
                console.log("You can not go upper, there is sky!!");
            }  
        }
        if(e.key === "I") {
            this.yellowKeyItemInventory.addYellowKey(1);
            this.update();
            this.draw(Framework.Game._context);
        }
        if(e.key === "O") {
            this.blueKeyItemInventory.addBlueKey(1);
            this.update();
            this.draw(Framework.Game._context);
        }
        if(e.key === "P") {
            this.redKeyItemInventory.addRedKey(1);
            this.update();
            this.draw(Framework.Game._context);
        }

        if(e.key === 'Space'){
            console.log("Press Space");
        }
    }

    this.stopAllMonsterWalk = function()
    {
        for(var i=0;i<this.monster.length;i++)
        {
            this.monster[i].stopWalk();
        }
    }

    this.checkIsWalkAble = function(x,y){
        if(x < 0 || x > this.mapArray[0].length){
            return false;
        }
        if(y < 0 || y > this.mapArray.length){
            return false;
        }
        if(this.mapArray[y][x] > 0){
            return false;
        }
        else{
            return true;
        }
    }

    this.checkIsOpenDoor = function(x,y){
        if(this.mapArray[y][x] === this.constants.ItemEnum.YELLOW_DOOR){
            if(this.yellowKeyItemInventory._yellowKey > 0){
                this.mapArray[y][x] = 0;   //碰撞盒換成0
                this.tileArray[y*26+x].tileType = 0;   //圖片換成0
                this.yellowKeyItemInventory.addYellowKey(-1);
                this.update();
                this.draw(Framework.Game._context);
            }
        }
        else if(this.mapArray[y][x] === this.constants.ItemEnum.BLUE_DOOR){
            if(this.mapArray[y][x] === this.constants.ItemEnum.BLUE_DOOR){
                if(this.blueKeyItemInventory._blueKey > 0){
                    this.mapArray[y][x] = 0;   //碰撞盒換成0
                    this.tileArray[y*26+x].tileType = 0;   //圖片換成0
                    this.blueKeyItemInventory.addBlueKey(-1);
                    this.update();
                    this.draw(Framework.Game._context);
                }
            }
        }
        else if(this.mapArray[y][x] === this.constants.ItemEnum.RED_DOOR){
            if(this.mapArray[y][x] === this.constants.ItemEnum.RED_DOOR){
                if(this.redKeyItemInventory._redKey > 0){
                    this.mapArray[y][x] = 0;   //碰撞盒換成0
                    this.tileArray[y*26+x].tileType = 0;   //圖片換成0
                    this.redKeyItemInventory.addRedKey(-1);
                    this.update();
                    this.draw(Framework.Game._context);
                }
            }
        }
        else if(this.mapArray[y][x] === this.constants.ItemEnum.IRON_DOOR){
            if(this._numIronKey > 0){
                this.mapArray[y][x] = 0;   //碰撞盒換成0
                this.tileArray[y*26+x].tileType = 0;   //圖片換成0
                this.update();
                this.draw(Framework.Game._context);
            }
        }
        else if(this.mapArray[y][x] === this.constants.ItemEnum.WHITE_DOOR){
            if(this._numDoorPickAxe > 0){
                this.mapArray[y][x] = 0;   //碰撞盒換成0
                this.tileArray[y*26+x].tileType = 0;   //圖片換成0
                this.update();
                this.draw(Framework.Game._context);
            }
        }
    }

    this.keyup = function(e, list){
        if(e.key === 'Down' || e.key === 'Up' || e.key === 'Left' || e.key === 'Right') {

            if(this.keyPress == e.key)
            {
                this.player1.walkEnd();
                this.pressWalk = false;
            };
        }
    }
}