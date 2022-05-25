import {element} from "prop-types";


const dispatchMultipleActionsMiddleware = storeAPI => next => action => {
    // TODO This middleware should check to see if a given "action" is actually an array,
    // TODO using `Array.isArray()`.  If it's an array, it should assume that all of the
    // TODO items are real actions, and dispatch them back to the start of the middleware chain.
    // TODO In that case, the return value should be the number of actions in the array.

    // Remember that `storeAPI` has the `dispatch` method available.
    const {dispatch} = storeAPI;
    if (!Array.isArray(action)){
        return next(action);
    }else{
        action.forEach((elem)=>{
            if (elem.type==='INCREMENT'){
               dispatch(elem);
            }
        });
        return action.length;
    }

}

export default dispatchMultipleActionsMiddleware;
