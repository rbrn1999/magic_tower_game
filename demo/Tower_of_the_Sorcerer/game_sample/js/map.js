var Map = function(map) //碰撞框事件的object
{
    var mapPosition = 0;
    this.mapList = new Terrain();
    this.mapArray = this.mapList.terrainList[mapPosition];    //設定顯示第幾張地圖
    //console.log(this.mapArray);
    this.load = function(){

        this.score = new Score();
        this.score.position = {x:200,y:0}; //分數板位置
        this.numBomb = new NumBomb();
        this.numBomb.position = {x:200,y:400}; //分數板位置
        this.mapFloor = new Framework.Sprite(define.imagePath + 'floor2.png');  //定義floor2
        this.mapFloor.scale = 2;    //size
        this.mapWall = new Framework.Sprite(define.imagePath + 'treeStone.png');    //定義treeStone
        this.mapWall.scale = 2; //size
        var mapBoxPic = new Framework.Sprite(define.imagePath + 'box.png'); //定義box
        var bombPic  = new Framework.Sprite(define.imagePath + 'bomb.png'); //定義bomb
        var bombPic  = new Framework.Sprite(define.imagePath + 'explore.png');  //定義
        var newMonster = new Monster(define.imagePath + 'monster.png',this, {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});   //定義
        
        this.increaseBombNum  = new Framework.Sprite(define.imagePath + 'increaseBombNum.png'); //定義道具甲
        this.increaseBombNum.scale = 1.5;   //size
        this.increaseBombPower  = new Framework.Sprite(define.imagePath + 'increaseBombPower.png'); //定義道具乙
        this.increaseBombPower.scale = 1.5; //size
        this.stopMonster  = new Framework.Sprite(define.imagePath + 'stopMonster.png'); //定義道具丙
        this.stopMonster.scale = 1.5;   //size
        this.player1 = new BombMan(define.imagePath + 'player1.png', {down: {from: 0, to: 2}, left: {from:3, to: 5}, right: {from: 6, to: 8}, up: {from: 9, to: 11}});  //定義 玩家
        this.player1.position = {x:1, y:1}; //初始玩家位置 可以用.setPlayerPosition(x:,y:)改

        this.monster = [];  //有n個怪物 怪物array
        this.stopMonster = false;
        this.stopMonsterCounter =0;
    }

    this.init = function()
    {
        this.player1.StepMovedCallBack.push(this.playerMovedHandler);
        this.constants = new Constants();
        //this.mapArray = [];
        this.boxArray = [];
        this.bombArray = [];
        this.itemArray = [];
        this.tileArray = [];
        this.exploreArray = [];

        for(var i=0; i<this.mapArray.length; i++){  //道具
            var line = this.mapArray[i];
            for(var j=0; j<line.length; j++){
                var tile = new MapTile();
                tile.tileType = 0;
                tile.position = {x:j,y:i}
                if(line[j] === 2){
                    var box = new Box(this.constants.ItemEnum.NONE);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 3){
                    var box = new Box(this.constants.ItemEnum.INCREASE_BOMB);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 4){
                    var box = new Box(this.constants.ItemEnum.INCREASE_POWER);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else if(line[j] === 5){
                    var box = new Box(this.constants.ItemEnum.STOP_MONSTER);
                    box.position = {x:j, y:i};
                    this.boxArray.push(box);
                }else
                {
                    tile.tileType = line[j];
                }
                this.tileArray.push(tile);
            }
        }
	};

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
        if(item === constants.ItemEnum.INCREASE_BOMB){
            player.increaseBombNum();
            m_map.mapArray[player.position.y][player.position.x] = 0;   //碰撞盒
            m_map.tileArray[player.position.y*26+player.position.x].tileType = 0;   //圖片
            m_map.score.addScore(200);  //加分
            m_map.numBomb.addBomb(1);   //加bomb
        }else if(item === constants.ItemEnum.INCREASE_POWER){
            player.increaseBombPower();
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
        for(var i=0; i<this.boxArray.length; i++)
        {
            this.boxArray[i].update();
        }
        for(var i=0; i<this.bombArray.length; i++)
        {
            this.bombArray[i].update();
        }
        for(var i=0; i<this.exploreArray.length; i++)
        {
            this.exploreArray[i].update();
        }
        if(this.pressWalk === true && this.player1.isWalking === false)
        {
            if(this.checkIsWalkAble(this.player1.position.x+this.playerWalkDirection.x,this.player1.position.y+this.playerWalkDirection.y))
            {
                this.player1.walk(this.playerWalkDirection);
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
	}
	this.draw = function(ctx) {
		// for(var i=0; i<this.mapArray.length; i++){
		// 	var line = this.mapArray[i];
		// 	for(var j=0; j<line.length; j++){
		// 		this.mapFloor.position = {x: j * 64, y: i * 64};
		// 		this.mapFloor.draw(ctx);
  //               if(line[j] === 1){
  //                   this.mapWall.position = {x: j * 64, y: i * 64};
  //                   this.mapWall.draw(ctx);
  //               }else if(line[j] === -1){
  //                   this.increaseBombNum.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombNum.draw(ctx);
  //               }else if(line[j] === -2){
  //                   this.increaseBombPower.position = {x: j * 64, y: i * 64};
  //                   this.increaseBombPower.draw(ctx);
  //               }
		// 	}
		// }
        for(var i=0; i<this.tileArray.length; i++)
        {
            this.tileArray[i].draw(ctx);
        }

        for(var i=0; i<this.boxArray.length; i++)
        {
            this.boxArray[i].draw(ctx);
        }
        for(var i=0; i<this.bombArray.length; i++)
        {
            this.bombArray[i].draw(ctx);
        }
        for(var i=0; i<this.exploreArray.length; i++)
        {
            this.exploreArray[i].draw(ctx);
        }
        for(var i=0;i<this.monster.length;i++)
        {
            this.monster[i].draw(ctx);
        }
        this.player1.draw(ctx);
        this.score.draw(ctx);
        this.numBomb.draw(ctx);
	}	

    var m_map = this;
    this.bombExploredHandler = function(exploredArray, bomb){
        var index = m_map.bombArray.indexOf(bomb);
        m_map.bombArray.splice(index,1);
        m_map.mapArray[bomb.position.y][bomb.position.x] = 0;
        looptop:
        for(var i=0; i<exploredArray.length; i++){
            for(var j=0;j<exploredArray[i].length;j++)
            {
                var explorePos = exploredArray[i][j];
                var hasExploreBox = false;
                if(explorePos.x>0 && explorePos.y>0 && explorePos.y<m_map.mapArray.length && explorePos.x<m_map.mapArray[0].length){
                    if(m_map.mapArray[explorePos.y][explorePos.x]<0){
                        //item
                    }else if(m_map.mapArray[explorePos.y][explorePos.x] == 1)
                    {
                        //wall
                        break;
                    }else if(m_map.mapArray[explorePos.y][explorePos.x] >= 2){
                        //box
                        hasExploreBox = true;
                    }

                    if(m_map.mapArray[explorePos.y][explorePos.x] != 1){
                        var explore = new Explore();
                        explore.position = explorePos;
                        explore.ExploredEndCallBack.push(m_map.exploreEndHandler);
                        m_map.exploreArray.push(explore);
                        if(hasExploreBox)
                        {
                            break;
                        }
                    }
                    if(explorePos.x === m_map.player1.position.x && explorePos.y === m_map.player1.position.y){ //玩家碰到火焰亡
                        m_map.player1.die();
                        break looptop;
                    }
                    for(var k=0;k<m_map.monster.length;k++)
                    {
                        if(explorePos.x === m_map.monster[k].position.x && explorePos.y === m_map.monster[k].position.y){   //怪物碰到火焰亡
                            m_map.monster[k].die();
                            m_map.score.addScore(500);
                        }
                    }
                }
            }
        }
    }
    
    this.setMapPosition = function(newMapPosition){ //切換地圖
        mapPosition = newMapPosition;
        this.mapArray = this.mapList.terrainList[mapPosition];    //設定顯示第幾張地圖
        this.init();
        this.update();
        this.draw();
        console.log("Map Position" + mapPosition);
    }

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
            this.setMapPosition(--mapPosition);
        }
        if(e.key === "D") {
            this.setMapPosition(++mapPosition);
        }

        if(e.key === 'Space'){
            var bomb = this.player1.placeBomb();
            if(!Framework.Util.isNull(bomb))
            {
                bomb.ExploredCallBack.push(Framework.Game._currentLevel.map.bombExploredHandler);
                this.bombArray.push(bomb);
                var bombPosition = bomb.position;
                this.mapArray[bombPosition.y][bombPosition.x] = 3;
            }
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
        else{ return true;}
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