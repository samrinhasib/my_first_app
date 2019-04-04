//This hides the replay button
$('#replay1').hide();


//This function will create the header
function header(){
  $(`header`).append(`
      <h3 class = "miles">Score:<span id = "score-button">0</span>/10</h3>
      <h3 class = "trinkot">Question:<span id="js-click"> 0</span>/10</h3>`)
}

//This array holds the questions and answers; we will use various functions to loop through this array to create our quiz
const QUESTION_BANK = [
  {number:1,
  question: `Evaluate 2 - 3 * 3 + 5`,
  ans1 : 2,
  ans2: -2,
  ans3:-22,
  correctans : -2,
  correctansexp: `( 2 - 9 + 5 ) = ( -7 + 5 ) = -2`  
  },

  {number:2,
  question: `Evaluate 4 ^ 2 - 3 * 3 + 4 / 2`,
  ans1 : 7,
  ans2: 9,
  ans3: -26,
  correctans : 9,
  correctansexp: `( 16 - 9 + 2 ) = ( 7 + 2 ) = 9`},

  {number:3,
  question: `Evaluate 4 ^ 2 - 3 * ( 4 + 4 ) / 2`,
  ans1 :64,
  ans2: 4,
  ans3: 26,
  correctans : 4,
  correctansexp: `( 16 - 3 * 8 / 2 ) = ( 16 - 3 * 4 ) = ( 16 - 12 ) = 4`},

  {number:4,
  question: `Evaluate 16 ^ 1 / 4 + 64 ^ ( 1 / 3 )`,
  ans1 : 3,
  ans2: -3.1,
  ans3: 8,
  correctans : 8,
  correctansexp: `( 16 / 4 + 4 ) = ( 4 + 4 ) = 8`},

  {number:5,
  question: `Evaluate - 49 ^ ( 1 / 2 ) + 2 `,
  ans1 : 6,
  ans2: 96,
  ans3: -5,
  correctans : -5,
  correctansexp: `( - 7 + 5 ) = - 2` },

  {number:6,
  question: `Evaluate 10 + 2 * 3 / 3 + 9 ^ ( 1 / 2 )`,
  ans1 : 15,
  ans2: 7.5,
  ans3: 5.4,
  correctans : 15,
  correctansexp: `( 10 + 2 * 1 + 3 ) = ( 10 + 2 + 3 ) = 15`},

  {number:7,
  question: `Evaluate 10 + 2 - 10 * 3 + 5 * 2`,
  ans1 : -28,
  ans2: -16,
  ans3: -8,
  correctans : -8,
  correctansexp: `( 10 + 2 - 30 + 10 ) = ( 12 - 30 + 10 ) = ( -18 + 10 ) = - 8`},

  {number:8,
  question: `Evaluate ( x + x - 4x * 5 + 6x ) / x`,
  ans1 : 40,
  ans2: -12,
  ans3: 9.5,
  correctans :-12,
  correctansexp: `(( 2x - 20x + 6x ) / x ) = (( - 18x + 6x )/ x ) = ( - 12x / x ) = - 12` },

  {number:9,
  question: `Evaluate ( 6y + 5y - 9y * 8 + 3y - 4y ) * 1 / y`,
  ans1 :-84,
  ans2: 15,
  ans3: -62,
  correctans : -62,
  correctansexp: `( 11y - 72y - y ) * ( 1 / y) = ( 11y - 73y ) * ( 1 / y ) = ( -62y ) / ( y ) = - 62`},

  {number:10,
  question: `Evaluate ( 3 ^ 0 ) + 4 + 5 - 9 - 1`,
  ans1 : 1,
  ans2: -1,
  ans3: 0,
  correctans : 0,
  correctansexp: `( 1 + 9 - 9 - 1 ) = ( 1 + 0 - 1 ) = ( 1 - 1 ) = 0`},

]

//The following function loops through the constant Question and adds each question to the form; it also adds the potential answer choices for each along with two sections which are used to demonstrate if the answer choice picked by the user is correct or incorrect.
function addAllQuestions(){
  for (let i=0; i<=9;i++){
    let j = i+1;
    let joshua = "next"+j; //forms the id for all "next buttons"
    let ryan = "que"+j+"ends"; //forms the id for all "moving on buttons" for correct answers
    let adam = "que"+j+"end";//forms the id for all "moving on buttons" for incorrect answers
    let naher = "correct_answer"+j; //forms the id for all correct answer sections
    let ali = "incorrect_answer"+j; //forms the id for all incorrect answer sections
    let sammy = "que"+i; //forms a unique id for each question in the form

    //Appending questions and answers
    $('div').append(`
   <form class = "question container1" id="${sammy}">
    <fieldset>
      <legend><h2>${QUESTION_BANK[i].question}</h2></legend>
      <ul>
        <li><input type = "radio" name = "${QUESTION_BANK[i]}" id = "${QUESTION_BANK[i].ans1}" checked = "checked">
        <label for = "${QUESTION_BANK[i].ans1}" >${QUESTION_BANK[i].ans1}</label></li>
        <li><input type = "radio" name = "${QUESTION_BANK[i]}" id = "${QUESTION_BANK[i].ans2}">
        <label for "${QUESTION_BANK[i].ans2}">${QUESTION_BANK[i].ans2}</label></li>
        <li><input type = "radio" id = "${QUESTION_BANK[i].ans3}" name = "${QUESTION_BANK[i]}">
        <label for = "${QUESTION_BANK[i].ans3}">${QUESTION_BANK[i].ans3}</label></li>
        </ul>
      </fieldset>
      <button type = "button" label = "next-button" id = "${joshua}" class = "next-button"><b>Next</b></button>
      </form>`);
    //appending two sections, only one of which will display depending on whether the correct answer was picked or not.
      $('div').append(
      `<section class = "correctanswer" id = "${naher}" role = "correct-answer">
        <h1 class = "mild">Well Done!</h1>
        <button type = "button" class = "moving_on_correct" id = "${ryan}">Moving on</button>
        </section>`);
        $('div').append(
        `<section class = "incorr" id = "${ali}" role = "incorrect-answer">
          <h1 class = "mild">Oops, that's not it!
          <p>The correct answer is ${QUESTION_BANK[i].correctans} because ${QUESTION_BANK[i].correctansexp} !</p></h1>
          <button type = "button" class = 'moving_on' id = "${adam}">Moving on</button>
          </section>`)
  }
}

//This function determines what to do once the start button is pressed
function startButton(){
$('#original').click(function(event){
  console.log('it opened');
  let que1done = 0;
  event.preventDefault();
  $('.opener').hide();
  $('#que0').removeClass("question");
  document.getElementById('js-click').innerHTML = 1;
})}


//This function determines what should happen to the header and what should display depending on the answer choice picked once the next button is hit for each question. For example, for i=1, it will determine what happens when the next button is hit following the second question.
function nextButton(){
    let que1done = Number(document.getElementById("score-button").innerHTML);
    for (let i=0;i<=9;i++){
      let gmat = QUESTION_BANK[i].number;
      let j = i+1;
      let rant = '#'+'next'+`${gmat}` //a way to collect the id for each next button
      let fasta = "#"+"correct_answer"+j;  //a way to collect the id for each section which displays the correct answer
      let masta = "#"+"incorrect_answer"+j; //a way to collect the id for each section which displays the incorrect answer
      let kaitlyn = "#"+"que"+i; //a way to collect the id for each question
      $(rant).click(function(event){
        //console.log('we see  happening');
          event.preventDefault();
          let matty = QUESTION_BANK[gmat-1].correctans;
          console.log(String(matty));
          if (document.getElementById(matty).checked){
          $(kaitlyn).addClass("question");
          $(fasta).removeClass('correctanswer');
          que1done = que1done + 1;
          document.getElementById("score-button").innerHTML= `${que1done}`;
          }
          else {
            $(masta).removeClass('incorr');
            $(kaitlyn).addClass("question");
            };
})}};

//this function determines what to do when the "moving on button" is clicked for correct and incorrect answers up until the tenth question
function movingOn(){
  for (let k=0; k<=8;k++){
    let h = k+1;
    let max = "#"+"que"+h+"end"; //retrieves the id for all "moving on buttons" for correct answers
    let maxi = "#"+"que"+h+"ends";
    let mean = "#"+"que"+h; //retrieves the id for all questions
    let fasty = "#"+"correct_answer"+h;  //retrieves the id for all sections which contain correct answers;
    let masty = "#"+"incorrect_answer"+h; //retrieves the id for all sections which contain incorrect answers;
    $(max).click(function(event){
      event.preventDefault();   
      $(fasty).addClass('correctanswer');
      $(masty).addClass('incorr');
      $(mean).removeClass("question");
      document.getElementById('js-click').innerHTML = Number(h+1);
})
    $(maxi).click(function(event){
      event.preventDefault();   
      $(fasty).addClass('correctanswer');
      $(masty).addClass('incorr');
      $(mean).removeClass("question");
      document.getElementById('js-click').innerHTML = Number(h+1);
})}}
  

//This function determines what to do upon hitting the "Moving On" button for question10;
function finalPage(){

$('#que10end,#que10ends').click(function(event){
  event.preventDefault();
  $('#correct_answer10').addClass('correctanswer');
  $('#incorrect_answer10').addClass('incorr');
  document.getElementById('js-click').innerHTML = 10;
  $('#replay1').show();
  const que10done = document.getElementById("score-button").innerHTML;
  $('div').empty();
  if (Number(que10done)>=8){
    $('div').append(`
      <section class = "high" id = "scores_higher_than_8">
        <h1 class = "math">Mathematician!<h1>
        <p>You demonstrate excellent skills and are probably a Mathematician or were Baron Cauchy in a past life!</p>
        </section>`);}
        else if (Number(que10done>=5)){
          $('div').append(`
          <section class = 'medium' id = "scores_between_5_and_7">
            <h1 class = "math">Average Joe!</h1>
            <p>You demonstrate good skills and with some work, might be able to succeed as a Mathematician!</p>
            </section>`);}
            else{
              $('div').append(`
        <section class = 'low' id = "scores_between_0_and_4">
          <h1 class = "math">Math Learner</h1>
          <p>Your skills could do with some work; but hey, you can always learn! We would love to encourage you to go pick up some skills and to come back to try this quiz again!</p>
          </section> `)
    }
})};

//This function determines what to do upon hitting the Play Again button
function replay() {
$('.replaybutton').click(function(event){
  event.preventDefault();
  $('.replaybutton').hide();
  $('.low').hide();
  $('.medium').hide();
  $('.high').hide();
  $("h3.miles" ).replaceWith(`<h3 class = "miles">Score:<span id = "score-button">0</span>/10</h3>`);
  $("h3.trinkot").replaceWith(`<h3 class = "trinkot">Question:<span id="js-click"> 0</span>/10</h3>`);
  $('.opener').show();
  $(addAllQuestions());
  $(startButton());
  $(nextButton());
  $(movingOn());
  $(finalPage());
})}


function quiz(){
  $(header());
  $(addAllQuestions());
  $(startButton());
  $(nextButton());
  $(movingOn());
  $(finalPage());
  $(replay());
}

$(quiz());
