/**
 * Created by Administrator on 15-7-13.
 */

//------------------------------------- 用户界面 ----------------------------------------



 var can =document.getElementById("canvas");
 var pen2 =can.getContext("2d");
pen2.fillStyle="#3b4161";
pen2.fillRect(0,0,1000,600);
pen2.beginPath();
 pen2.moveTo(0,0);
 pen2.lineTo(1000,0);
pen2.lineTo(1000,250);
pen2.lineTo(300,250);
pen2.lineTo(285,270);
pen2.lineTo(270,250);
pen2.lineTo(0,250);
pen2.closePath();
pen2.fillStyle="#3fc9b1";
pen2.fill();
pen2.beginPath();
pen2.moveTo(660,343);
pen2.lineTo(685,343);
pen2.moveTo(670,330);
pen2.lineTo(685,343);
pen2.lineTo(670,355);
pen2.moveTo(660,343);
pen2.lineTo(685,343);
pen2.moveTo(670,330);
pen2.lineTo(685,343);
pen2.lineTo(670,355);
pen2.strokeStyle="white";
pen2.stroke();

//-------------------------------------- js ---------------------------------------
//道具选取的JS
document.getElementById("go").addEventListener("click",function(){
    game()
    document.getElementById("daoju1_1").style.backgroundColor="gray"
    document.getElementById("daoju2_1").style.backgroundColor="gray"
     flag_daoju1=false
     flag_daoju2=false
});

document.getElementById("push").addEventListener("click",function(){
    clearInterval(iid)
    document.getElementById("s_score").innerHTML=user.score;    //得分
    document.getElementById("color").innerHTML=user.colorNum;   //颜色
    document.getElementById("jiangli").innerHTML=user.colorNum*50;   //颜色


    var score=user.score
    var jiangli=document.getElementById("jiangli").innerHTML
    document.getElementById("allScore").innerHTML=parseInt(score)+parseInt(jiangli)

//    page("page3")
});
document.getElementById("img02").addEventListener("click",function(){
    iid =  setInterval("xunhuan()",20)
});
document.getElementById("img01").addEventListener("click",function(){
    intUser()
});
//道具1点击事件
var flag_daoju1=false
var flag_daoju2=false
document.getElementById("daoju1").addEventListener("click",function(){
    if(!flag_daoju1){
        user.Kingkongfu=1;
        flag_daoju1=true
        document.getElementById("daoju1_1").style.backgroundColor="green"
    }
    else if(flag_daoju1){
        user.Kingkongfu=0;
        flag_daoju1=false
        document.getElementById("daoju1_1").style.backgroundColor="gray"
    }

});
document.getElementById("daoju2").addEventListener("click",function(){
    if(!flag_daoju2){
        user.slow=1;
        flag_daoju2=true
        document.getElementById("daoju2_1").style.backgroundColor="green"
    }
    else if(flag_daoju2){
        user.slow=0;
        flag_daoju2=false
        document.getElementById("daoju2_1").style.backgroundColor="gray"
    }

});








//localStorage JS 以及计分板

if(!localStorage.players){
    var players=[{id:123,name:'小三',score:1000}]
    var str=JSON.stringify(players)
    localStorage.players=str
}


document.getElementById("page3_go").addEventListener
(
    "click",function()
{
    document.getElementById("s_score").innerHTML=user.score;    //得分
    document.getElementById("color").innerHTML=user.colorNum;   //颜色
    document.getElementById("jiangli").innerHTML=user.colorNum*50;   //颜色


    var score=user.score
    var jiangli=document.getElementById("jiangli").innerHTML
    document.getElementById("allScore").innerHTML=parseInt(score)+parseInt(jiangli)

    //数据添加到localStorage
    var tempArr=JSON.parse(localStorage.players);
    var new_id=tempArr.length+1;
    var new_name=document.getElementById("input_name").value;

    var e_score=parseInt(document.getElementById("allScore").innerHTML);

    new_play=[{id:new_id,name:new_name,score:e_score}];
    tempArr.push(new_play[0]);

    var tempStr=JSON.stringify(tempArr);
    localStorage.players=tempStr;
    //排序
    tempArr.sort(compare);
    //填充排行榜
    document.getElementById("table").innerHTML ="";
    for(var i=0;i<tempArr.length;i++)
    {

        if(i>=18){

            break
        }
        document.getElementById("table").innerHTML +="<tr><td class='t_id'>"+(i+1)+"</td><td class='t_name'>"+tempArr[i].name+"</td><td class='t_score'>"+tempArr[i].score+"</td><tr>"
        if(tempArr[i].score==e_score){

            document.getElementById("paiming").innerHTML=i+1
        }


    }
    document.getElementById("mostScore").innerHTML=tempArr[0].score   //颜色

}
)


function compare (a,b){
    return b.score- a.score
}
