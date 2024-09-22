import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    submitting: false,
}

const uT = localStorage.getItem('userToken');

const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setSubmitting(state, action) {
            if (typeof(action.payload) !== 'boolean') {
                console.log('incorrect payoad type of setSubmitting: '+action.payload);
                return;
            }
            state.submitting = action.payload;
        }
    }
});


const { setActivityID, setSubmitting } = activitySlice.actions;
// const serverURLActivity = 'https://financeapptest.onrender.com';
const serverURLActivity = 'http://localhost:8080';

/**
 * Percentage score (0.00-100.00) of current activity
 * @param {Number} percentage 
 */
export function submitResults(activityID, percentage) {
    return async function(dispatch, getStore) {
        // console.log('performance', percentage);
        const { submitting } = getStore().activity;

        console.log('submitResults --- PLEASE REPLACE ME');
        const userToken = uT;

        if (submitting) {
            return;
        }
        dispatch(setSubmitting(true));
        try {
            const res = await (await fetch(`${serverURLActivity}/submit-activity-performance`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' // Set headers
                },
                body: JSON.stringify({
                    performance: Number(percentage),
                    userToken,
                    activityID
                })
            })).json();
            console.log('res', res);
            if (res.error) {
                console.log('error sending performance', res.error);
            } else {
                console.log('successfully issued update activity');
            }
        } catch (e) {
            console.log('problem submitting to server', e.message);
        }
        dispatch(setSubmitting(false));
    }
}

export default activitySlice.reducer;
// export { setActivityID };
