const quizData = [
    {
    question: "Golden Circle is a famous Australian producer of which type of drink?",
    a: "Beer",
    b: "White Wine",
    c: "Fruit Juice",
    d: "None Of the Above",
    correct: "c",
    },

    {
        question: "How many layers are in a dessert called a jelly slice?",
        a: "five",
        b: "nine",
        c: "three",
        d: "eight",
        correct: "c",
        },

        {
            question: "New Zealand lamb is usually eaten with which herb?",
            a: "Coriander",
            b: "Mint",
            c: "Ginger",
            d: "All Of the Above",
            correct: "b",
            },

            {
            question: "Which meat would you expect to find in a Maori boil up?",
            a: "Chicken",
            b: "Beef",
            c: "Duck",
            d: "Pork",
            correct: "d",
            },

            {
            question: "Afghan Biscuits were invented in which decade?",
            a: "ninteen fifty",
            b: "two thousand and ten",
            c: "ninteen senty",
            d: "None of the Above",
            correct: "a",
    },

    ];

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");
    
    let currentQuiz = 0;
    let score = 0;


    loadQuiz();

    function loadQuiz(){
        deselectAnswers();
        const currentQuizData = quizData[currentQuiz];

        questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
    }


    function getSelected(){
        let answer = undefined;

        answerEls.forEach((answerE1) => {
            if(answerE1.checked){
                answer = answerE1.id;
            }
        });
        return answer;
    }

    function deselectAnswers(){
        answerEls.forEach((answerEl) =>{
            answerEl.checked = false;
        });
    }

    submitBtn.addEventListener("click", () => {

        const answer = getSelected();
        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++;
            }
            
            currentQuiz++;
            if(currentQuiz < quizData.length){
                loadQuiz();

            }else{
                quiz.innerHTML = `<h1>You Have Answered  ${score} \ ${quizData.length} questions correctly.</h1>
                <button onclick="location.reload()">RELOAD</button>`;
                
            }
        }
    });
