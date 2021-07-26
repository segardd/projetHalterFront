import { Competitor } from './Competitor';
export class Club {
    protected id?: String;
    protected name: String;
    protected director: String;
    protected createdDate: Date;
    protected members?: [Competitor];
    constructor(id: String,
        name: String = "",
        director: String = "",
        createdDate: Date = new Date()
    ) {
        this.id = id;
        this.name = name;
        this.director = director;
        this.createdDate = createdDate;
    }
    getId(): String {
        if (this.id != undefined) {
            return this.id;
        }
        return '';
    }
    setId(id: String) {
        if (this.id == undefined) {
            this.id = id;
        }
        else throw new Error('id is already defined');
    }
    setName(name: String){
        this.name = name.toLowerCase();
    }

    getName():String{
        return this.name;
    }

    setDirector(director: String){
        this.director = director.toLowerCase();
    }

    getDirector():String{
        return this.director;
    }

    setCreatedDate(date: Date){
        this.createdDate = date;
    }

    getCreatedDate(): Date{
        return this.createdDate;
    }
    setMembers(members: [Competitor]){
        this.members = members;
    }
    getMembers():[Competitor]{
        return this.members!;
    }
    addMembers(member: Competitor){
        this.members?.push(member)
    }
    


    //TODO: implement getter setter for members
    // add member and delete member
}