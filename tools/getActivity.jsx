import A0 from '../A0';
import A1 from '../a1';
import A2 from '../A2';
/**
 * Given an activity's id, will return the corresponding activity page
 * @param {String} id 
 */
export function getActivity(id) {
    switch(`${id}`) {
        case '0':
            return <A0 id={id}/>;
        case '1':
            return <A1 id={id}/>;
        case '2':
            return <A2 id={id}/>;
        default:
            return <p>That item does not exist yet</p>
    }
}
