/**
 * Created by Administrator on 15-7-14.
 */


//游戏流程
intUser()
function game(){
    document.getElementById("gameMusic").play();
    showDIV('img02') ;               //初始化暂停按钮功能
    pen.clearRect(0,0,1000,600);    //擦除所有图形界面

    bulletRole=null ;               //初始化子弹为空
    graph=null  ;                    //初始化图形为空
    var bg=new Bg();
    bg.draw();


    iid =  setInterval("xunhuan()",20)



}

function xunhuan(){
    if(user.slow==1){
        step=2
    }
    else{
        step=3
    }
    if(user.Kingkongfu==1){
        document.getElementById("king").src="image/pop.png"
    }
    else{
        document.getElementById("king").src=""
    }

    user.score++;
    pen.clearRect(0,0,1000,600);
    pen.font="50px Arial";
    pen.strokeText(user.score,450,60);

    if(bulletRole){
        bulletRole.draw()
    }

    if(!graph) {
        var k = randomnum(0, 6);

        graph = new graphs[k]
    }
    else{
        if(graph.x<200){
            gameOver();
            return;
        }
        else{
            if(!boom()&&bulletRole.clear==false){
                gameOver();
                return;
            };
            graph.draw()
        }
    }
}





//初始化所有方块
function initbullets(arr){
    var str="";
    for(var i=0;i<arr.length;i++){
        str+="<li style='background-color:"+arr[i]+"' onclick='sendBullets(this)'></li>"
    }
    document.getElementById("bulletsUl").innerHTML=str
}

function sendBullets(getColor){
    if(!bulletRole){
        bulletRole =new BulletRole();
        bulletRole.color=getColor.style.backgroundColor

    }

}

//初始化色块
function initRole(obj,num){
    var colorArr=generateColorArray(num);
    initbullets(colorArr);
    //数组中随机获取颜色并生成新的数组
    obj.colorArr=[];
    for(var i=0;i<num;i++)
    {
        obj.colorArr[i]=getColor(colorArr)
    }
}

//碰撞检测
function boom(){
   if(graph==null || bulletRole==null ){
       return true
   }
   else{
     var l=  Math.sqrt(Math.pow(graph.x-bulletRole.x,2)+Math.pow(graph.y-bulletRole.y,2))
       if(l<=bulletRole.r)
       {
           var isboom =false;
           for(var i =0;i<graph.flag.length;i++)
           {

               if(compareColor(bulletRole.color,graph.colorArr[i]))
               {
                   graph.flag[i]=0;
                   isboom=true
                   bulletRole.clear=true

               }
           }
           if(!isboom){
              return false
           }
       }


    }
    return true
}

// 游戏结束
function gameOver(){
    user.Kingkongfu-=1;
    graph=null;
    if(user.Kingkongfu<0){
        clearInterval(iid);
        pen.drawImage(img,400,200);
        setTimeout(function(){
            page("page3")
        },2000)
    }
    hideDIV('img02')



}
// 初始化玩家的函数
function intUser (){
    user=new User();
}