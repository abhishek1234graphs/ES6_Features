/**
 * 
 * Analysis of let and const keywords in ES6
 */

var func_1 = function(){
    console.log('This version is attached to the window object');
}
{
    /**
     * This code is in between two brackets.
     * This way we are trying to create a self-contained block in JavaScript
     */
    let func_1 = function(){
        console.log('Inside JS Block - this version is not attached to the window object')
    }
    func_1();/**Outputs "Inside JS Block - this version is not attached to the window object" */

    const func_const = function(){
        console.log(this);
    }
    func_const();/**Outputs window object in the console. */

    /**
     * Should produce an Uncaught TypeError if left uncommented
     */
    /*
    func_const = function(){
        console.log('Error');
    }
    */
}
func_1();/**Outputs "This version is attached to the window object" */

/**Should produce an Uncaught ReferenceError if left uncommented */
/** 
func_const();
*/