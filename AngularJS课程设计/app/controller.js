app.controller("mainctrl",function ($scope) {
    $scope.nav1=['首页','简介','信息','操作'];
    $scope.nav2=['设置栏目','更多设置','分割线'];
    $scope.user={
        'head':'images/a0.jpg',
        'nickname':'HHHHHHHHHHH',
        'text':"不哭不闹不炫耀，安安分分一起老。不骂不吵不张扬，安安分分一起过。就算逃到天涯海角，也决不回头。就算哭到世界灭亡，也决不后悔。我想依靠你 永远在我旁边带路。我想牵着你 永远只会为你带路。偶尔有点小任性，为了等待你安抚。偶尔有点小情绪，为了引起你注意。所有的一切、都不是什么誓言。所谓的一切、到头来都是欺骗。蓦然、心锁的钥匙新了不实用了。蓦然、心锁的钥匙旧了可以换了。",
        'address':'伦敦，英国',
        'pro':'IT大牛'
    };
    $scope.fans=[
        {name:'小王',pro:'设计师，博客',head:'images/a1.jpg',id:5},
        {name:'张琳',pro:'作家，杂志编辑',head:'images/a2.jpg',id:9},
        {name:'李小明',pro:'艺术总监，电影剪辑',head:'images/a3.jpg',id:4},
        {name:'赵大成',pro:'音乐家,运动员',head:'images/a4.jpg',id:2}
    ];

});

