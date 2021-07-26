import {Club} from './Club';
import {Person} from './Person'

enum Sex{M = 'M',F = 'F', U=''};

export class Competitor extends Person{
    protected id?: String;
    protected sex?: Sex = Sex.U;
    protected name?: String = '';
    protected firstname?: String = '';
    protected birthday?: Date = new Date();
    protected weight?: number;
    protected club?: Club;

    constructor(id?: String,
                sex?: Sex,
                name: String="",
                firstname: String="",
                birthday: Date= new Date(),
                weight?: number)
                {
                    super();
                    this.id = id;
                    this.name = name;
                    this.firstname = firstname;
                    this.sex = this.setSex(sex);
                    this.birthday = birthday;
                    this.weight = weight;
                }
            
    getId(): String{
        if(this.id != undefined){
            return this.id;
        }
        return '';
    }
    setId(id: String){
        if(this.id == undefined){
            this.id = id;
        }
        else throw new Error('id is already defined');
    }

    setSex(sex: any):Sex{
        if (sex == Sex.M){
            this.sex = Sex.M;
        }
        else if(sex == Sex.F){
            this.sex = Sex.F;
        }
        else{
            //console.error(`${sex} is not supported`)
            this.sex = Sex.U;
        }
        return this.sex;
    }

    getSex():Sex | null{
        if (this.sex != undefined)
            return this.sex;
        return null;
    }

    setBirthday(day: number, month: number, year: number){
        if(day > 31 || day < 0){
            throw new Error('Day must be between 0 and 31')
        }
        if (month < 0 || month > 12){
            throw new Error('Day must be between 0 and 12')
        }
        try{
            this.birthday = new Date(year, month, day)
        }
        catch(e){
            throw new Error(e);
        }
    }

    getBirthday():Date{
        return this.birthday!
    }

    getBirthdayFormatLitteral():String{
        return this.birthday!.toLocaleString();
    }

    getBirthdayCompactFormat(){
        return `${this.birthday!.getDay()}/${this.birthday!.getMonth()}/${this.birthday!.getFullYear()}}`;
    }
    setWeight(weight: number){
        this.weight = weight;
    }
    getWeight():number{
        if (this.weight != undefined){
            return this.weight;
        }
            return 0;
    }

}