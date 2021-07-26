import {Club} from './Club';

export class Person{
    protected name?: String = '';
    protected firstname?: String = '';
    protected club?: Club;

    setName(name: String){
        this.name = name.toLowerCase();
    }

    getName():String{
        return this.name!;
    }

    setFirstname(name: String){
        this.firstname = name.toLowerCase();
    }

    getFirstname():String{
        return this.firstname!;
    }

    setClub(club: Club){
        this.club = club;
    }
    getClub(){
        return this.club!;
    }
}