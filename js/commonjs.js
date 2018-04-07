/**
 * Created by lovo_bdk on 15-7-13.
 */
//工具js
function showDIV(id){
    var obj = document.getElementById(id);
    obj.setAttribute("class","show");
}
function hideDIV(id){
    var obj = document.getElementById(id);
    obj.setAttribute("class","hide")
}
window.onload=function(){
    page('page1')
};

// 仅显示第X页
function page(pagenum){

    var page1=document.getElementById('page1');
    var choose=document.getElementById('choose');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');
    var page4=document.getElementById('page4');
    page1.setAttribute("class","hide");
    choose.setAttribute("class","hide");
    page2.setAttribute("class","hide");
    page3.setAttribute("class","hide");
    page4.setAttribute("class","hide");

    showDIV(pagenum)
}




//获得随机数
function randomnum(min,max){

    if(min==0){
        return parseInt(Math.random()*max);
    }
    else{
        for(var i= 0;i>=0;i++){
            num=Math.floor(Math.random()*max)+1
            if (num>=min){
                return num
            }

        }
    }

}

//随机产生数
function generateCode(num){
    return parseInt(Math.random()*num);
}
//随机产生颜色
function generateColor(){
    var colorStr = "";
    var colorCnt = 0;
    for(var i = 0;i < 3;i++){
        var rand = parseInt(Math.random()*175) + 10;
        if(i){
            colorStr += ",";
        }
        colorCnt += rand;
        colorStr += rand;

    }
    colorStr = "rgb("+colorStr+")";
    if(colorCnt > 280){
        return colorStr;
    }else{
        return generateColor();
    }
}
//随机产生颜色并放在指定大小的数组中
function generateColorArray(num){
    var ary = new Array();
    for(var i = 0;i < num;i++){
        var isSameColor=false;
        var tempColor = generateColor();
        for(var j = 0;j < i;j++){
            if(compareColor(tempColor,ary[j])){
                isSameColor = true;
                i--;
                break;
            }

        }
        if(!isSameColor){
            var isLikeColor=false;
            for(var j = 0;j < i;j++){
                if(like(tempColor,ary[j])){
                    isLikeColor = true;
                    i--;
                    break;
                }

            }
            if(!isLikeColor){
                ary[i] = tempColor;
            }

        }
    }
    return ary;
}
//比较两个颜色是否相等
function compareColor(color1,color2){
    return color1.replace(/\s+/g,"") == color2.replace(/\s+/g,"");
}
//判断两个颜色是否过于相近
function like(color1,color2) {
    var str1=color1.slice(4,color1.length-1);
    var arr1=str1.split(",");
    var str2=color2.slice(4,color2.length-1);
    var arr2=str2.split(",");
    c1r=parseInt(arr1[0]);
    c1g=parseInt(arr1[1]);
    c1b=parseInt(arr1[2]);
    c2r=parseInt(arr2[0]);
    c2g=parseInt(arr2[1]);
    c2b=parseInt(arr2[2]);
    if((c1r+c1g+c1b)-(c2r+c2g+c2b)>30||(c1r+c1g+c1b)-(c2r+c2g+c2b)<-30){
        return false
    }
    if((c1r+c1g+c1b)-(c2r+c2g+c2b)<=30&&(c1r+c1g+c1b)-(c2r+c2g+c2b)>-30){
        return true
    }
}

//从数组中随机获取一个颜色并返回
function getColor(ary){
    return ary[generateCode(ary.length)];
}