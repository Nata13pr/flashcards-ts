import React, {useState,FC} from "react";
import Question from "../Question/Question.tsx";
import IQuestion from "../../Model/IQuestions.tsx";

interface IProps{
    questions:IQuestion[]
}


type FlashCardsWithChildren<T>=T & {children?:React.ReactNode}
const FlashCards:FC<FlashCardsWithChildren<IProps>> = ({questions}) => {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    function handleClick(id:number) {
        setSelectedId(id !== selectedId ? id : null);
    }

    return (
        <div className="flashcards">
            {questions.map((question) => (
                <Question
                    key={question.id}
                   oneQuestion={question}
                    clickHandler={handleClick}
                    selectedId={selectedId}

                />
            ))}
        </div>
    );
}
export default FlashCards