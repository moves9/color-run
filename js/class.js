/**
 * Created by Administrator on 15-7-14.
 */
//游戏中所有全局变量和对象
var can1=document.getElementById("can1");
var can2=document.getElementById("can2");
var pen1=can1.getContext("2d");
var pen=can2.getContext("2d");
var iid;                // 时动器名称

var img = new Image();
img.src="image/gameover.png";



var user;
var bulletRole;        //子弹
var graph;              //图形
var graphs=[Graph1,Graph2,Graph3,Graph4,Graph5,];  //图形数组

var n=0.7;               //缩放系数
var step=3;             //步进


//背景对象
function Bg(){
    this.x=0;
    this.y=0;
    this.width=1000;
    this.height=600;
    this.color=generateColor();
    this.draw=function(){
        pen1.fillStyle=this.color;
        pen1.fillRect(this.x,this.y,this.width,this.height)
    }


}
//角色对象
function User(){
    this.name="元不亮";
    this.jiangli=0;
    this.score=0;
    this.colorNum=0;
    this.Kingkongfu=0;
    this.slow=0

}

//子弹角色
function BulletRole() {
    this.x=250;
    this.y=300;
    this.color;
    this.r=0;
    this.clear=false;
    this.draw =function(){
        pen1.beginPath();
        pen1.arc(this.x,this.y,this.r,0,2*Math.PI);
        pen1.closePath();
        pen1.fillStyle=this.color;
        pen1.fill();
        this.r =this.r+50;
        if(this.r>1000){
            bulletRole=null

        }
    }
}


function Graph(){
    this.x=1000;
    this.y=250;
    this.colorArr;
    this.flag;

}

function Graph1(){
    Graph.call(this);
    this.flag=[1,1];
    initRole(this,2);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.fillStyle=this.colorArr[0];
            pen.arc(this.x,this.y,50,0,Math.PI*2);
            pen.closePath();
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.fillStyle=this.colorArr[1];
            pen.arc(this.x,this.y+100,50,0,Math.PI*2);
            pen.closePath();
            pen.fill()
        };
        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(!this.flag[0]&&!this.flag[1]){
            user.colorNum+=2;
            graph=null
        }
        this.x-=step;
    }
}

function Graph2(){
    Graph.call(this);
    this.flag=[1,1];
    initRole(this,2);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.moveTo(this.x,200);
            pen.lineTo(this.x,400);
            pen.lineTo(this.x+100,400);
            pen.lineTo(this.x+100,200);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };

        this.draw2=function(){
            pen.beginPath();
            pen.moveTo(this.x-40,200);
            pen.lineTo(this.x-30,180);
            pen.lineTo(this.x-10,180);
            pen.quadraticCurveTo(this.x+50,120,this.x+110,180);
            pen.lineTo(this.x+130,180);
            pen.lineTo(this.x+140,200);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };
        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(!this.flag[0]&&!this.flag[1]){
            user.colorNum+=2;
            graph=null
        }
        this.x-=step;
    }
}

function Graph3(){
    Graph.call(this);
    this.flag=[1,1,1];
    initRole(this,3);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.moveTo(this.x+100,200);
            pen.lineTo(this.x+50,250);
            pen.lineTo(this.x+150,250);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.moveTo(this.x+70,250);
            pen.lineTo(this.x+130,250);
            pen.lineTo(this.x+170,280);
            pen.lineTo(this.x+30,280);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };
        this.draw3=function(){
            pen.beginPath();
            pen.moveTo(this.x+80,280);
            pen.lineTo(this.x+120,280);
            pen.lineTo(this.x+120,350);
            pen.lineTo(this.x+80,350);
            pen.closePath();
            pen.fillStyle=this.colorArr[2];
            pen.fill()
        };
        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(this.flag[2]){
            this.draw3()
        }
        if(!this.flag[0]&&!this.flag[1]&&!this.flag[2]){
            user.colorNum+=3;
            graph=null
        }
        this.x-=step;
    }
}

function Graph4(){
    Graph.call(this);
    this.flag=[1,1,1,1];
    initRole(this,4);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.moveTo(this.x+100,100);
            pen.lineTo(this.x+150,100);
            pen.lineTo(this.x+150,150);
            pen.lineTo(this.x+100,150);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.moveTo(this.x+50,150);
            pen.lineTo(this.x+300,150);
            pen.lineTo(this.x+350,250);
            pen.lineTo(this.x,250);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };
        this.draw3=function(){
            pen.beginPath();
            pen.moveTo(this.x+50,250);
            pen.lineTo(this.x+50,400);
            pen.lineTo(this.x+300,400);
            pen.lineTo(this.x+300,250);
            pen.closePath();
            pen.fillStyle=this.colorArr[2];
            pen.fill()
        };
        this.draw4=function(){
            pen.beginPath();
            pen.moveTo(this.x+200,400);
            pen.lineTo(this.x+250,400);
            pen.lineTo(this.x+250,300);
            pen.lineTo(this.x+200,300);
            pen.closePath();
            pen.fillStyle=this.colorArr[3];
            pen.fill()
        };
        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(this.flag[2]){
            this.draw3()
        }
        if(this.flag[3]){
            this.draw4()
        }
        if(!this.flag[0]&&!this.flag[1]&&!this.flag[2]&&!this.flag[3]){
            user.colorNum+=4;
            graph=null
        }
        this.x-=step;
    }
}

function Graph5(){
    Graph.call(this);
    this.flag=[1,1];
    initRole(this,2);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.moveTo(this.x+200*n,100*n+100);
            pen.lineTo(this.x+50*n,400*n+100);
            pen.lineTo(this.x+550*n,400*n+100);
            pen.lineTo(this.x+500*n,300*n+100);
            pen.lineTo(this.x+200*n,300*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.moveTo(this.x+300*n,100*n+100);
            pen.lineTo(this.x+300*n,300*n+100);
            pen.lineTo(this.x+600*n,300*n+100);
            pen.lineTo(this.x+600*n,100*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };

        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(!this.flag[0]&&!this.flag[1]){
            user.colorNum+=2;
            graph=null
        }

        this.x-=step;
    }
}

/*
function Graph6(){
    Graph.call(this);
    this.flag=[1,1,1];
    initRole(this,3);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.moveTo(this.x+50*n,150*n+100);
            pen.lineTo(this.x+500*n,150*n+100);
            pen.lineTo(this.x+500*n,300*n+100);
            pen.lineTo(this.x+50*n,300*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.arc(this.x+150*n,350*n+100,50*n,0,2*Math.PI);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };
        this.draw3=function(){
            pen.beginPath();
            pen.arc(this.x+400*n,350*n+100,50*n,0,2*Math.PI);
            pen.closePath();
            pen.fillStyle=this.colorArr[2];
            pen.fill()
        };

        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(this.flag[2]){
            this.draw3()
        }
        if(!this.flag[0]&&!this.flag[1]&&!this.flag[2]){
            user.colorNum+=3
            graph=null
        }

        this.x-=step;
    }
}
*/

/*
function Graph7(){
    Graph.call(this);
    this.flag=[1,1,1,1,1,1];
    initRole(this,6);
    this.draw=function(){
        this.draw1=function(){
            pen.beginPath();
            pen.arc(this.x+300*n,100*n+100,50*n,0,2*Math.PI);
            pen.closePath();
            pen.fillStyle=this.colorArr[0];
            pen.fill()
        };
        this.draw2=function(){
            pen.beginPath();
            pen.moveTo(this.x+220*n,150*n+100);
            pen.lineTo(this.x+220*n,400*n+100);
            pen.lineTo(this.x+370*n,400*n+100);
            pen.lineTo(this.x+370*n,150*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[1];
            pen.fill()
        };
        this.draw3=function(){
            pen.beginPath();
            pen.moveTo(this.x+270*n,400*n+100);
            pen.lineTo(this.x+290*n,400*n+100);
            pen.lineTo(this.x+290*n,500*n+100);
            pen.lineTo(this.x+270*n,500*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[2];
            pen.fill()
        };
        this.draw4=function(){
            pen.beginPath();
            pen.moveTo(this.x+310*n,400*n+100);
            pen.lineTo(this.x+330*n,400*n+100);
            pen.lineTo(this.x+330*n,500*n+100);
            pen.lineTo(this.x+310*n,500*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[3];
            pen.fill()
        };
        this.draw5=function(){
            pen.beginPath();
            pen.moveTo(this.x+170*n,200*n+100);
            pen.lineTo(this.x+190*n,200*n+100);
            pen.lineTo(this.x+190*n,350*n+100);
            pen.lineTo(this.x+170*n,350*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[4];
            pen.fill()
        };
        this.draw6=function(){
            pen.beginPath();
            pen.moveTo(this.x+400*n,200*n+100);
            pen.lineTo(this.x+420*n,200*n+100);
            pen.lineTo(this.x+420*n,350*n+100);
            pen.lineTo(this.x+400*n,350*n+100);
            pen.closePath();
            pen.fillStyle=this.colorArr[5];
            pen.fill()
        };

        if(this.flag[0]){
            this.draw1()
        }
        if(this.flag[1]){
            this.draw2()
        }
        if(this.flag[2]){
            this.draw3()
        }
        if(this.flag[3]){
            this.draw4()
        }
        if(this.flag[4]){
            this.draw5()
        }
        if(this.flag[5]){
            this.draw6()
        }
        if(!this.flag[0]&&!this.flag[1]&&!this.flag[2]&&!this.flag[3]&&!this.flag[4]&&!this.flag[5]){
            user.colorNum+=6
            graph=null
        }
        this.x-=step;
    }
}
*/
