/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

import list from './list'
import setState from '../store'

const remove = (i) => {
    let l = list();
    l = l.splice(i, 1);
    setState()
};

export default remove;
