var Map = function(map) //碰撞框事件的object
{
    var mapPosition = 0;
    this.mapList = new Terrain();
    this.mapArray = this.mapList.terrainList[mapPosition];    //設定顯示第幾張地圖
    //console.log(this.mapArray);
    this.load = function(){

        this.showLevelBroad = new ShowLevelBroad();
        this.showLevelBroad.position = {x:200,y:0}; //分數板位置
        this.score = new Score();
        this.score.position = {x:200,y:700}; //分數板位置
        this.playerState = new PlayerState();
        this.playerState.position = {x:200,y:100}; //分數板位置
        this.mapFloor = new Framework.Sprite(define.imagePath + 'stone0.png',this,{down:{from:0}});  //定義floor2
        this.mapWall = new Framework.Sprite(define.imagePath + 'stone1.png');    //定義treeStone
        this.mapLightBlueStone = new Framework.Sprite(define.imagePath + 'stone.png');    //定義treeStone
        this.stageDown = new Framework.Sprite(define.imagePath + 'doordown.png');
        this.stageUp = new Framework.Sprite(define.imagePath + 'doorup.png');
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});   //定義
        
        this.increaseBombNum  = new Framework.Sprite(define.imagePath + 'increaseBombNum.png'); //定義道具甲
        this.increaseBombPower  = new Framework.Sprite(define.imagePath + 'increaseBombPower.png'); //定義道具乙
        this.stopMonster  = new Framework.Sprite(define.imagePath + 'stopMonster.png'); //定義道具丙
        this.player1 = new BombMan(define.imagePath + 'player1.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});  //定義 玩家
        this.player1.position = {x:1, y:1}; //初始玩家位置 可以用.setPlayerPosition(x:,y:)改

        this.monster = [];  //有n個怪物 怪物array
        this.stopMonster = false;
        this.stopMonsterCounter = 0;
    }

    this.init = function()
    {
        this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        console.log("plater1 callback");
        this.constants = new Constants();
        //this.mapArray = [];
        this.tileArray = [];
        this.exploreArray = [];

        for(var i=0; i<this.mapArray.length; i++){  //道具
            var line = this.mapArray[i];
            for(var j=0; j<line.length; j++){
                var tile = new MapTile();
                var stoneWall = new StoneWall();
                var stage = new Stage();
                tile.tileType = 0;
                /*if(line[j] === 2){
                    var box = new Box(this.constants.ItemEnum.NONE);
                    box.position = {x:j, y:i};
                    this.boxArray.push(stage);
                }*/
                if(line[j] > 0){
                    //console.log("init stoneWall");
                    stoneWall.position = {x:j, y:i};
                    stoneWall.tileType = line[j];
                    this.tileArray.push(stoneWall);
                }
                else if(line[j] === -97 || line[j] === -98){
                    //console.log("init stage");
                    stage.position = {x:j, y:i};
                    stage.tileType = line[j];
                    this.tileArray.push(stage);
                }
                else{
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
        var constants = new Constants();
        var item = m_map.mapArray[player.position.y][player.position.x];
        if(item === -97){//上樓
            m_map.setMapPosition(++mapPosition);
        }
        else if(item === -98){//下樓
            m_map.setMapPosition(--mapPosition);
        }
        else if(item === constants.ItemEnum.INCREASE_BOMB){
            m_map.mapArray[player.position.y][player.position.x] = 0;   //碰撞盒換成0
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;   //圖片換成0
            m_map.score.addScore(200);  //加分
        }else if(item === constants.ItemEnum.INCREASE_POWER){
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map.score.addScore(200);
        }else if(item === constants.ItemEnum.STOP_MONSTER){
            m_map.stopMonster = true;
            m_map.mapArray[player.position.y][player.position.x] = 0;
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;
            m_map.score.addScore(200);
        }
    }

    this.exploreEndHandler = function(explore){
        var index = m_map.exploreArray.indexOf(explore);
        m_map.exploreArray.splice(index,1);
        m_map.draw(Framework.Game._context);
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
                console.log("player current position" + this.player1.position.x + ", " +this.player1.position.y)
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
        }

        if(e.key === 'Left') {
            if(this.checkIsWalkAble(playerPosition.x-1,playerPosition.y)){
                //this.player1.walk({x:-1,y:0});
                this.playerWalkDirection = {x:-1,y:0};
                this.pressWalk = true;
                this.keyPress = "Left";
            }
        }

        if(e.key === 'Right') {
            if(this.checkIsWalkAble(playerPosition.x+1,playerPosition.y)){
                //this.player1.walk({x:1,y:0});
                this.playerWalkDirection = {x:1,y:0};
                this.pressWalk = true;
                this.keyPress = "Right";
            }
        }

        if(e.key === 'Up') {
            if(this.checkIsWalkAble(playerPosition.x,playerPosition.y-1)){
                //this.player1.walk({x:0,y:-1});
                this.playerWalkDirection = {x:0,y:-1};
                this.pressWalk = true;
                this.keyPress = "Up";
            }
        }
        if(e.key === "A") {
            if(mapPosition > 0){
                this.setMapPosition(--mapPosition);
            }
            else{
                console.log("You can not go deeper, there are hell!!");
            }
        }
        if(e.key === "D") {
            if(mapPosition < this.mapList.terrainList.length-1){
                this.setMapPosition(++mapPosition);
            }
            else{
                console.log("You can not go upper, there are sky!!");
            }  
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
        if(x < 0 || x > this.mapArray[0].length){ return false; }
        if(y < 0 || y > this.mapArray.length){ return false; }

        if(this.mapArray[y][x] > 0){ return false; }
        else{ return true; }
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