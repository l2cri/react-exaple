/**
 * Call function and prevent default submit form
 * 
 * @param {function} callback 
 * @param {args} arguments 
 * @param {React.FormEvent} event 
 */
export const formCallback = (event,callback, ...args ) => {
    console.log(event,callback, args);
    event.preventDefault();
    callback(args);
}