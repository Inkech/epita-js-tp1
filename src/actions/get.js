/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import list from './list'

const get = i => {
    let l = list();
    return l[i];
};

export default get;
