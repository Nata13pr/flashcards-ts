import React,{FC} from "react";
import IQuestion from "../../Model/IQuestions.tsx";

interface  IProps{
    oneQuestion:IQuestion,
    selectedId:number | null
}
type QuestionComponentWithChildren<T> = T
    & { children?: React.ReactNode }
    & { clickHandler: (id: number) => void }

const Question: FC<QuestionComponentWithChildren<IProps
>> = ({oneQuestion, clickHandler, selectedId}) => {
    const {id, answer, question} = oneQuestion;
    
    return (
        <div onClick={() => clickHandler(id)} className={id === selectedId ? "selected" : ""}>
            <p>
                {id === selectedId ? answer : question}
            </p>
        </div>

    )
}
export default Question;