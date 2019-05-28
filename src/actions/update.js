/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

import list from './list'
import setState from '../store'

const update = (i, e) => {
    let l = list();
    l[i] = e;
    setState(l);
};

export default update;
