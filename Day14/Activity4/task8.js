class person{
    constructor(fName,Lname){
        this.fName = fName
        this.Lname = Lname
    }

    getfullName(){
        console.log(`full Name is : ${this.fName} ${this.Lname}`);
    }

    setFullName(fName,Lname){
        this.fName = fName;
        this.Lname = Lname;
    }
}

const obj = new person('Yusuf',"Pathan")
obj.getfullName()

obj.setFullName('Yusuf','Deewana')

obj.getfullName()