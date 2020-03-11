var Terrain = function() {
    this.terrainList = [];
    this.spwanPositionList = [];
    //0 空地  1牆壁  2空木箱  3增加炸彈木箱道具  4增加威力道具木箱  5有獎的箱 -1增加炸彈數道具  -2增加炸彈power道具 
    //-97 上樓 -98 下樓 -99 藍磚
    //<0 可穿 >0 不可穿
    //                                                                  
    this.map0 = [];
    this.position0 = [];
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //0
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,-97,1,0,0,0,0,1]); //1
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //2
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //3
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //4
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //5
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //6
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //7
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //8
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //9
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //10
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,1,0,1,0,0,0,0,1]); //11
    this.map0.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //12
    this.position0.push({x:19,y:10},{x:19,y:2})

    this.map1 = [];
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,-98,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,0,1]); //1
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,1,0,0,0,1,0,1]); //2
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,1,0,0,0,1,0,1]); //3
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,0,1,1,0,1,1,1,0,1,0,1]); //4
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,1,0,1]); //5
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,1,1,1,1,1,0,1]); //6
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,0,1,1,0,0,0,0,0,0,0,1]); //7
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,1,0,1,1,1,0,1,1]); //8
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,0,0,1,-1,-3,-1,1]); //9
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,-97,0,1,-1,-2,-1,1]); //10
    this.map1.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map2 = [];
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,-98,1,0,0,0,1,0,0,0,0,1,1]); //1
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,1,0,0,0,0,1,1]); //1
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,1,0,0,0,0,1,1]); //2
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,1,1,1,1,0,1,1]); //3
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,0,0,0,0,0,1,1]); //4
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,1,0,1,1,0,1,1,1]); //5
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,1,0,0,0,1,1]); //6
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,1,0,1,0,1,0,1,1]); //7
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,0,1,0,1,0,1,1]); //8
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,1,0,0,1,0,1,0,1,1]); //9
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,-97,1,0,1,0,0,1,0,1,0,1,1]); //10
    this.map2.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map3 = [];
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,0,0,1,1,1,1,1]); //1
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,0,0,1,0,0,0,1]); //1
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,0,0,0,1,0,1,0,1]); //2
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,0,1,1,0,0,0,1,0,1,0,1]); //3
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,1,1,1,0,1,0,1,0,1]); //4
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,0,0,0,0,0,1,0,1,0,1]); //5
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,1,1,1,1,1,0,0,0,1,0,1]); //6
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,1,1,0,1,1,0,1]); //7
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,0,1,0,0,0,1,0,1]); //8
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,0,0,0,0,1,0,0,0,1,0,1]); //9
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,-98,0,1,1,1,1,0,0,0,1,-97,1]); //10
    this.map3.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map4 = [];
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map4.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map5 = [];
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map5.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map6 = [];
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map6.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map7 = [];
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map7.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map8 = [];
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map8.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11
    
    this.map9 = [];
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map9.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map10 = [];
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map10 = [];
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map10.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map11 = [];
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map11.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map12 = [];
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map12.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map13 = [];
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map13.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map14 = [];
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map14.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map15 = [];
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map15.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map16 = [];
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map16.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map17 = [];
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map17.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map18 = [];
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map18.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map19 = [];
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map19.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map20 = [];
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map20.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map21 = [];
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map21.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map22 = [];
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map22.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map23 = [];
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map23.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.map30 = [];
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //1
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //1
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //2
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //3
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //4
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //5
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //6
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //7
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //8
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //9
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,0,0,0,0,0,0,0,0,0,0,0,1]); //10
    this.map30.push([-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,-99,1,1,1,1,1,1,1,1,1,1,1,1,1]); //11

    this.terrainList.push(this.map0);
    this.terrainList.push(this.map1);
    this.terrainList.push(this.map2);
    this.terrainList.push(this.map3);
    this.terrainList.push(this.map4);
    this.terrainList.push(this.map5);
    this.terrainList.push(this.map6);
    this.terrainList.push(this.map7);
    this.terrainList.push(this.map8);
    this.terrainList.push(this.map9);
    this.terrainList.push(this.map10);
    this.terrainList.push(this.map11);
    this.terrainList.push(this.map12);
    this.terrainList.push(this.map13);
    this.terrainList.push(this.map14);
    this.terrainList.push(this.map15);
    this.terrainList.push(this.map16);
    this.terrainList.push(this.map17);
    this.terrainList.push(this.map18);
    this.terrainList.push(this.map19);
    this.terrainList.push(this.map20);
    this.terrainList.push(this.map21);
    this.terrainList.push(this.map22);
    this.terrainList.push(this.map23);
    this.terrainList.push(this.map30);

    this.spwanPositionList.push(this.position0);
};