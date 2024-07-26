class person{
    constructor(fName,Lname){
        this.fName = fName
        this.Lname = Lname
    }

    getfullName(){
        console.log(`full Name is : ${this.fName} ${this.Lname}`);
    }
}

const obj = new person('Yusuf',"Pathan")
obj.getfullName()