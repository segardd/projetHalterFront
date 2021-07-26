import {GQLAPIManager} from '../datasourceManagement/graphQLAPIManager';
import {dao} from './dao';
import {gql} from 'apollo-angular';

export abstract class daoAPI<T extends Object> implements dao<T>{
    public find(id: string,query: any[], type: {new(): T}): T{
        var objet = new type();

        return <T>objet;
    }

    public create(object: T, query: Object, type: {new(): T}): T{
        var objet:T = new type();
        return <T>objet;
    }

    public update( object: T, query: Object, type: {new(): T}): T{
        var objet:T = new type();
        return <T>objet;
    }

    public delete(object: T): void{

    }

    public saveall(objects: T[]): void{

    }
    public findall(query: any[], type:{new (): T}):Promise<T[]>{

        var objects: [] =[];
        // Creating Query
        var objet = new type();
        var queryString =`query{\n${objet.constructor.name}Many{ \n`;
        query.forEach((element)=>{
            console.log("in each")
            if (element instanceof Object){
                console.log("in instanceof")
                queryString += `{\n`;
                element.forEach((subElement:Object) => {
                    queryString += `${subElement}\n`


                });
                queryString += `}\n`;
            }
            queryString += `${element}\n`;
        })
        queryString += `}\n}\n`;
        
        console.log('queryString: \n'+queryString)
        let myQuery = gql`${queryString}`
        myQuery = gql`query{
            CompetitorMany{ 
            _id
            name
            firstname
            }
        }`
        // Execute Query
        var gqlManager: GQLAPIManager<T[]> = GQLAPIManager.getInstance();
        return new Promise<T[]>((resolve,reject)=>{
            //var data:any = gqlManager.getData(myQuery)
            //console.log("data: "+data)
            var result = gqlManager.getData(myQuery).then(data => {
                resolve(<T[]>data.data)
            }).catch( error => {
                console.error("error: "+error);
                reject('error: '+error)
        })

            /*.then(value =>{
            console.log('value: '+value)
            resolve(value.data);
        })
        .catch((error)=>{
        console.error(error)
        reject(new Error(error))
        })*/
    })
        //objects = data;
        //return objects;
    }
}