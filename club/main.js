
$(document).ready(function a(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount=topic.length;
    var s=1000;
    var mu=60*s;
    var hu=mu*60;
    var dayunit=hu*24;
    function test(){
    for(var x=0;x<topicCount;x++){
        if(topic[x]!="今天不開"){
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>"+(x+1)+"</td>");
            $("#courseTable").append("<td>"+new Date((startDate.getTime()+7*x*dayunit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td>"+topic[x]+"</td>");
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr style=\"background-color: lightgray\"><font color=\"gray\">");
            $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+(x+1)+"</td>");
            $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+new Date((startDate.getTime()+7*x*dayunit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+topic[x]+"</td>");
            $("#courseTable").append("</tr>");
        }
    }
    }
    test();
    $("#confirm").click(function(){
        var mydate=$("#indate").val().slice(5);
        if(mydate.length!=0){
            var m = parseInt(mydate.split('-')[0]);
            var d = parseInt(mydate.split('-')[1]);
            setMonthAndDay(m,d);
            $("#courseTable").empty();
            $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
            test();
        }
        else
            alert("invalid input");
    })
    $("#add").click(function(){
        //alert("wew")
        var mydate=$("#adddate").val().slice(5);
        var act=$("#activity").val();
        if(mydate.length!=0&&act.length!=0){
            if(act!="停課"){
                $("#courseTable").append("<tr>");
                $("#courseTable").append("<td>"+(++topicCount).toString()+"</td>");
                $("#courseTable").append("<td>"+mydate.split('-')[0]+"/"+mydate.split('-')[1]+"</td>");
                $("#courseTable").append("<td>"+act+"</td>");
                $("#courseTable").append("</tr>");
            }else{
                $("#courseTable").append("<tr style=\"background-color: lightgray\"><font color=\"gray\">");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+(x+1)+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+mydate.split('-')[0]+"/"+mydate.split('-')[1]+"</td>");
                $("#courseTable").append("<td style=\"background-color: lightgray\"><font color=\"gray\">"+act+"</td>");
                $("#courseTable").append("</tr>");
            }
        }
        else if(mydate.length==0&&act.length==1){
            alert("invalid activity and date")
        }
        else if(act.length!=0){
                 alert("invalid date")
                 }
        else if(mydate.length!=0){
                 alert("invalid activity")
                 }
    })
})