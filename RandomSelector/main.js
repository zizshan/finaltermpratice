//window.onload = function ()
//{
    //document.write("Hello World!!");
//};
var ramen=new Image(600,480);
ramen.src='RandomSelector/ramen.jpg';
var ruloufan=new Image(600,480);
ruloufan.src='RandomSelector/ruloufan.png';
var sweajar=new Image(600,480);
sweajar.src='RandomSelector/sweajar.jpg';
var soulafan=new Image(600,480);
soulafan.src='RandomSelector/soulafan.jpg';
var maidundun=new Image(600,480);
maidundun.src='RandomSelector/miadundun.jpg';
var quest=new Image(600,480);
quest.src='RandomSelector/quest.jpg';
var change=true;
function allwhite(){
    $("#ra").attr({style:"background-color:white"});
    $("#lu").attr({style:"background-color:white"});
    $("#swea").attr({style:"background-color:white"});
    $("#sou").attr({style:"background-color:white"});
    $("#mai").attr({style:"background-color:white"});
}
$(document).ready(function(){
    var canvas=document.getElementById("image");
    var ct=canvas.getContext("2d");
    $("#what").click(function()
    {
        allwhite();
        var numberitem=$("#choice li").length;
        var ramdonitem=Math.floor(Math.random()*numberitem);
        $("H1").text($("#choice li").eq(ramdonitem).text());
        ct.clearRect(0, 0, canvas.width, canvas.height);
        switch (ramdonitem){
            case 0:
                 ct.drawImage(ramen,0,0,canvas.width,canvas.height);
                $("#ra").attr({style:"background-color:green"});
                break;
            case 1:
                $("#lu").attr({style:"background-color:green"});
                 ct.drawImage(ruloufan,0,0,canvas.width,canvas.height);
                break;
            case 2:
                $("#swea").attr({style:"background-color:green"});
                 ct.drawImage(sweajar,0,0,canvas.width,canvas.height);
                break;
            case 3:
                $("#sou").attr({style:"background-color:green"});
                 ct.drawImage(soulafan,0,0,canvas.width,canvas.height);
                break;
            case 4:
                $("#mai").attr({style:"background-color:green"});
                 ct.drawImage(maidundun,0,0,canvas.width,canvas.height);
                break;
            default:
                 ct.drawImage(quest,0,0,canvas.width,canvas.height);
                break;
        }
    })
    $("#ra").hover(function(){
        if(change){
        $("#ra").attr({style:"background-color:yellow"});
        ct.drawImage(ramen,0,0,canvas.width,canvas.height);
        $("#link").attr("href","https://rainbow6.ubisoft.com/siege/zh-tw/home/index.aspx")
        }
    },function(){if(change)$("#ra").attr({style:"background-color:white"});})
    $("#lu").hover(function(){
        if(change){
        $("#lu").attr({style:"background-color:yellow"});
        ct.drawImage(ruloufan,0,0,canvas.width,canvas.height);
        $("#link").attr("href","https://www.minecraft.net/zh-hant/")
        }
    },function(){if(change)$("#lu").attr({style:"background-color:white"});})
    $("#swea").hover(function(){
        if(change){
        $("#swea").attr({style:"background-color:yellow"});
        ct.drawImage(sweajar,0,0,canvas.width,canvas.height);
        $("#link").attr("href","https://na.leagueoflegends.com/en/")
        }
    },function(){if(change)$("#swea").attr({style:"background-color:white"});})
    $("#sou").hover(function(){
        if(change){
        $("#sou").attr({style:"background-color:yellow"});
        ct.drawImage(soulafan,0,0,canvas.width,canvas.height);
        $("#link").attr("href","https://www.rockstargames.com/GTAOnline/tw")
        }
    },function(){if(change)$("#sou").attr({style:"background-color:white"});})
    $("#mai").hover(function(){
        if(change){
        $("#mai").attr({style:"background-color:yellow"});
        ct.drawImage(maidundun,0,0,canvas.width,canvas.height);
        $("#link").attr("href","")
        }
    },function(){if(change)$("#mai").attr({style:"background-color:white"});})
    $("#ra").click(function(){
        $("h1").text("R6");
        allwhite();
        $("#ra").attr({style:"background-color:green"});
        $("#link").attr("href","https://rainbow6.ubisoft.com/siege/zh-tw/home/index.aspx")
        change=!change;
    })
    $("#lu").click(function(){
        $("h1").text("Minecraft");
        allwhite();
        $("#lu").attr({style:"background-color:green"});
        $("#link").attr("href","https://www.minecraft.net/zh-hant/")
        change=!change;
    })
    $("#swea").click(function(){
        $("h1").text("LOL");
        allwhite();
        $("#swea").attr({style:"background-color:green"});
        $("#link").attr("href","https://na.leagueoflegends.com/en/")
        change=!change;
    })
    $("#sou").click(function(){
        $("h1").text("GTA");
        allwhite();
        $("#sou").attr({style:"background-color:green"});
        $("#link").attr("href","https://www.rockstargames.com/GTAOnline/tw")
        change=!change;
    })
    $("#mai").click(function(){
        $("h1").text("弓箭傳說");
        allwhite();
        $("#mai").attr({style:"background-color:green"});
        $("#link").attr("href","")
        change=!change;
    })
    $("#reset").click(function(){
        allwhite();
        document.getElementById("image").getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
        $("h1").text("?");
    })
})
