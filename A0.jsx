import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { submitResults } from './tools/activitySlice';
import MCQ from './tools/MCQ';

export default function A1({ id }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(submitResults(id, 100));
    }, [dispatch, id]);

    return (
        <>
            <h2>Overview</h2>
            <p>
                Many folks hear the words credit card and immediately picture a
                giant, looming monster called DEBT.
                <br />
                <br />
                🧟‍♂️ And you know what? That's perfectly okay! It just means
                you're staying smart and cautious about your cash. <br />
                Today is the day we dare, grabbing our shields and swords (and
                wallets 💳) and learning how to slay that fear!
                <br />
                <br />
                With a few skills and tricks up our sleeves, we’ll show you how
                credit cards can be more of a trusty sidekick than a villain.
                Ready to master the art of plastic power?
                <br />
                <br />
                Let’s dive in! ⚔
            </p>
        </>
    );
}
