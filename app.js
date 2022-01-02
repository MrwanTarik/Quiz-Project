// define the correct answers for the quiz
let correctAnswers = ['guy','girl','cat','bacon'];
// select form and add event on submitting to test if the actual value is equal to the correct answer
let form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    let score = 0;
    let userAnswers = [form.q1.value , form.q2.value , form.q3.value , form.q4.value];
    userAnswers.forEach(function(answer , index){
      if(answer === correctAnswers[index]){
        score+=25;
      }
    });
    let finalScore = document.querySelector('.quiz-score');
    let output = 0;
    let timer = setInterval(()=>{
      finalScore.textContent=`${output}%`;
      if(output === score){
        clearInterval(timer);
      } else {
        output++;
      }
    },10);
    window.scrollTo(0,0);
    
});