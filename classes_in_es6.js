class Mammal{
    constructor(){
        this.gender = "Male";
    }
    printGender = () => {
        console.log(this.gender);
    }
}

class Human extends Mammal{
    constructor(){
        super();
        this.name = "Ranjit";
    }
    printName = () =>{
        console.log(this.name);
    }
}

const obj = new Human();
obj.printGender();
obj.printName();