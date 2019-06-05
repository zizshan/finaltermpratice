var player;
var currentplay=0;
var ready=false;
function onYouTubeIframeAPIReady(){
    player=new YT.Player("player",{
        height:"720",
        width:"1280",
        videoId:playlist[currentplay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playtime[currentplay][0],
            "end":playtime[currentplay][1],
            "showinfo":0,
            "rel":0,
            "iv_load_policy":3
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    })
}
function onPlayerReady(event){
    $("#playbutton").click(function(){
        $("h2").text(player.getVideoData().title);
        player.playVideo();
    })
    ready=true;
}
$("document").ready(function(){
    $("#next").click(function(){
        $("h2").text("")
        if(currentplay<playlist.length-1){
            currentplay++;
            player.cueVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            })
        }else{
            currentplay=0;
            player.cueVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            })
        }
    })
})
function onPlayerStateChange(event){
    if(ready){
    if(event.data==0){
        $("h2").text("")
        if(currentplay<playlist.length-1){
            currentplay++;
            player.cueVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            })
        }else{
            currentplay=0;
            player.cueVideoById({
                "videoId":playlist[currentplay],
                "startSeconds":playtime[currentplay][0],
                "endSeconds":playtime[currentplay][1],
                "suggestedQuality":"large"
            })
        }
        console.log("from ended "+event.data)
        console.log("from change "+currentplay.toString())
    }
    if(player.getVideoLoadedFraction()>0){$("h2").text(player.getVideoData().title);}
    ready=false;
    console.log(event.data)
    }if(event.data==1){
        ready=true;
        if(player.getVideoLoadedFraction()>0){$("h2").text(player.getVideoData().title);}
        player.playVideo();
    }
    if(player.getVideoLoadedFraction()>0){$("h2").text(player.getVideoData().title);}
}