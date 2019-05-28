/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

import list from './list'
import setState from '../store'

const add = elt => {
    let l = list();
    l.push(elt);
    setState(l);
};

export default add;
