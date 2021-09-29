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
        
        var valid=this.getAttribute("valid");
        var valid1=this.getAttribute("valid1");
        if(valid=="valid"){
            scoreCount +=20;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else if(valid1=="valid1"){
            scoreCount +=10;
            score.innerHTML=scoreCount;
            totalscore.innerHTML=scoreCount;
        }else{
            scoreCount -=20;
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
    if(count==6){
        Next.style.display = 'none';
    }
}

