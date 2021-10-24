var Next = document.getElementById('Next');
var score = document.getElementById('score');
var totalscore = document.getElementById('totalscore');

var count = 0;
var scoreCount = 0;

var qaSet = document.querySelectorAll('.qa_set');
var qaAns = document.querySelectorAll('.qa_set .qa_ans input');

Next.addEventListener('click',function(){
    step()
})

qaAns.forEach(function(qaAnsSingle){
    qaAnsSingle.addEventListener('click',function(){
        
        var valid0=this.getAttribute("valid0");
        var valid1=this.getAttribute("valid1");
        var valid2=this.getAttribute("valid2");
        var valid3=this.getAttribute("valid3");
        
        if(valid0=="valid0"){
            scoreCount +=0;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else if(valid1=="valid1"){
            scoreCount +=1;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else if(valid2=="valid2"){
            scoreCount +=2;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else if(valid3=="valid3"){
            scoreCount +=3;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else{
            scoreCount +=4;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }
        
    })
});

function step(){
    count +=1;
    for(var i=0;i<qaSet.length;i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count==30){
        Next.style.display = 'none';
    }
}
