export class Competitor {
    protected name: string = "";
    protected firstname: string = "";
    protected birthday: Date = new Date();
    protected club: string = "";
    constructor(){
        
    }
    getName():string{
        return this.name
    };
    setName(name:string):void{
        this.name = name
    };
    getFirstname():string{
        return this.firstname
    };
    setFirstname(firstname:string):void{
        this.firstname = firstname;
    };


}