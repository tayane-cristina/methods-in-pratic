import React from 'react';
import { useState } from 'react';

const SimpleQuiz = () => {

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

    const checkTheAnswer = (selectedOption, answer) => {
        if (selectedOption === answer) {
            console.log("Acertou", answer)
        } else {
            console.log("errou", answer)
        }
    }

return(
    <div>
        <h2>Quiz</h2>

        <ul>
            {questions.map((question, index) => (
                <li key={index}>
                    <p>{question.ask}</p>
                    {question.options.map((opt, i) => (
                        <p key={i}  onClick={() => (checkTheAnswer(opt, question.answer))}>{opt}</p>
                    ))}
                </li>
            ))}
        </ul>
    </div>

)
}
export default SimpleQuiz;