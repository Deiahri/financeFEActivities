import { getActivity } from "../tools/getActivity";

const lessonPaths = {
    'wan': [
        {
            name: 'Overview',
            type: 'lesson',
            id: '0',
            connectsTo: ['1']
        },
        {
            name: 'Intro to Credit Cards',
            type: 'lesson',
            id: '1',
            connectsTo: ['2']
        },
        {
            name: 'Intro Assessment',
            type: 'assessment',
            id: '2',
            connectsTo: ['djdj', 'jaja']
        },
        {
            name: 'Mr. Gael',
            type: 'lesson',
            id: 'djdj',
            connectsTo: ['fff1', 'crunch']
        },
        {
            name: 'Mr. Cruz',
            type: 'lesson',
            id: 'jaja',
            connectsTo: ['fff1']
        },
        {
            name: 'Mr. Yin',
            type: 'lesson',
            id: 'fff1',
            connectsTo: null
        },
        {
            name: 'Oh Yeah',
            type: 'lesson',
            id: 'crunch',
            connectsTo: null
        }
    ]
};

export default function ActivitiesRenderer({ lessonPath, activityID, setActivityID }) {
    // function that retreives current activity data using lessonPath and activityID lesson path
    const currentActivityData = findActivityInLessonPathGivenID(lessonPaths[lessonPath], activityID);
    console.log(currentActivityData);
    function switchToActivity(newActivityID) {
        setActivityID(newActivityID);
    }
    return <>
        {getActivity(currentActivityData?.id)}
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            {
                currentActivityData.connectsTo.map((nextActivityID) => {
                    const nextActivityData = findActivityInLessonPathGivenID(lessonPaths[lessonPath], nextActivityID);
                    return <button style={{outline: '1px solid #004', margin: '5px'}} onClick={() => switchToActivity(nextActivityID)} key={`n-${nextActivityID}`}>{nextActivityData.name}</button>
                })
            }
        </div>
    </>;
}


function findActivityInLessonPathGivenID(lessonPath, id) {
    for(let activity of lessonPath) {
        if (activity.id == id) {
            return activity;
        }
    }
    return null;
}