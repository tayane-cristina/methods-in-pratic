import React from 'react';
import { useState } from 'react';

const IntermediateQuiz = () => {

    const [questions, setQuestions] = useState([
        {
            ask: "Qual princesa da Disney foi a primeira a ter um filme em CGI (animação computadorizada)?",
            options: [
                "Tiana",
                "Moana",
                "Rapunzel",
                "Elsa"
            ],
            answer: "Rapunzel"

        },
        {
            ask: "Qual princesa da Disney é conhecida por ter dormido por 100 anos?",
            options: [
                "Cinderela",
                "Bela",
                "Aurora",
                "Ariel"
            ],
            answer: "Aurora"
        },
        {
            ask: "Em que país se passa a história de Mulan?",
            options: [
                "Japão",
                "China",
                "Coreis",
                "Tailândia"
            ],
            answer: "China"
        },
        {
            ask: "Qual princesa é filha de um chefe tribal e deseja proteger a sua terra dos colonizadores?",
            options: [
                "Jasmine",
                "Pocahontas",
                "Merida",
                "Moana"
            ],
            answer: "Pocahontas"
        },
        {
            ask: "Qual princesa disfarça-se de homem para salvar o pai e lutar na guerra?",
            options: [
                "Mulan",
                "Tiana",
                "Merida",
                "Elsa"
            ],
            answer: "Mulan"
        },
        
    ])
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [feedback, setFeedback] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0)

    /*Função que checa se a resposta está correta*/
    const checkTheAnswer = (option, answer) => {
        setSelectedOption(option)
        setIsAnswered(true)
        if (option === answer) {
            setFeedback("Acertou!")
            setScore(score + 1)
        } else {
            console.log("errou", answer)
            setFeedback(`Errou, a resposta correta é ${answer}`)
        }
    }

    /*Contador que altera a pergunta atual*/
    const counter = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
            setFeedback(null)
            setIsAnswered(false)
        } else  {
            alert(`Seu score é de ${score} pontos`)
            setCurrentQuestion(0)
        }
    }

return(
    <div>
        <h2>Quiz</h2>

        {currentQuestion <= questions.length ? (<div>
            <ul>
               <legend>Pergunta {currentQuestion}/{questions.length - 1} - {questions[currentQuestion].ask}</legend>
               {questions[currentQuestion].options.map((opt, index) => (
                <li 
                    key={index} 
                    onClick={() => !isAnswered && checkTheAnswer(opt, questions[currentQuestion].answer)}
                    style={{
                        cursor: isAnswered ? 'not-allowed' : 'pointer', 
                        fontWeight: selectedOption === opt? "bold" : "normal",
                        color: isAnswered ? 'grey' : 'black'
                    }}    
                >
                    {opt}
                </li>
               ))}
            </ul>
            {feedback}
            <button onClick={() => counter()}>Próxima</button>
        </div>) :  (
            <p>Acabou</p>
        )}
    </div>

)
}
export default IntermediateQuiz;