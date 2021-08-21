
/**
 * Example demonstration of an Immediately Invocable Function. Makes use of the concept of an anonymous function :-)
 */
(function(incomingRandomNumber){

    const multiplyByTwo = num => num * 2;
    console.log('The random number is ' + incomingRandomNumber);
    console.log('And the required result is '+multiplyByTwo(incomingRandomNumber))

    /**
     * Now let us try to study the behaviour of the this keyword
     */
    {
        const func_1 = function(){
            console.log(this);
        }
        func_1();/**Outputs window object */
    }
    {
        const func_1 = () => console.log(this);
        func_1();/**Outpur window object*/
    }
    (function(){
        const func_1 = () => {
            console.log(this)/**Outputs Window object */
            const func_2 = () => {
                console.log(this);/**Outputs window object */
            }
            func_2();
        }
        func_1();
    }())

    {
        let obj = {
            func1: function(){
                console.log(this);
            },
            func2: () => {
                console.log(this);
            }
        }
        obj.func1();/**Hmm, interesting. Outputs obj object */
        obj.func2();/**Outputs Window object */
    }

}(Math.random()))