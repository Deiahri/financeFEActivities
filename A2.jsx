import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitResults } from './tools/activitySlice';
import MCQ from './tools/MCQ';

export default function A2({ id }) {
    // intro to assessments
    const dispatch = useDispatch();
    const [correct, setCorrect] = useState(0);
    const [attempted, setAttempted] = useState(0);
    const numQuestions = 2;

    useEffect(() => {
        // dispatch(submitResults(id, 100));
    }, [dispatch, id]);

    function onAnswer(isCorrect) {
        if (isCorrect) {
            setCorrect(correct + 1);
        }
        setAttempted(attempted + 1);
    }

    const done = attempted==numQuestions;
    return <>
        <h1>Intro to Credit Cards Assessment</h1>
        <MCQ onSelect={onAnswer} question={'A Credit Card is like'} choices={['Borrowed Money', 'Money you have', 'Free Money']} correctChoiceIndex={0}/>
        <MCQ onSelect={onAnswer} question={'A Credit Card is like'} choices={['Borrowed Money', 'Money you have', 'Free Money']} correctChoiceIndex={0}/>
        <h1>{done?`${100*correct/attempted}%`:'Almost There'}</h1>
        <p>{done?(correct==numQuestions?`Excellent Job!`:'Could Be Better'):''}</p>
    </>;
}
