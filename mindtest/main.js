$(document).ready(function(){
    var currentQ=null;
    $("#button").click(function(){
        if(currentQ==null){
            currentQ=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(var x=0;x<questions[0].answers.length;x++){
                $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[0].answers[x][0]+"</label><br><br>");
            }
            $("#button").attr("value","Next");
        }else
        {
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQ].answers[i][1])){
                        var final=questions[currentQ].answers[i][1];
                        $("#question").text(finalAnswers[final][0]);
                        $("#options").empty();
                        $("#options").append(finalAnswers[final][1]+"<br><br>")
                        currentQ=null;
                        $("#button").attr("value","restart");
                    }else{
                        currentQ=questions[currentQ].answers[i][1]-1;
                        $("#options").empty();
                        $("#question").text(questions[currentQ].question);
                        for(var x=0;x<questions[currentQ].answers.length;x++){
                            $("#options").append("<input name='options' type='radio' value="+x+">"+"<label>"+questions[currentQ].answers[x][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
            })
        }
    })
})