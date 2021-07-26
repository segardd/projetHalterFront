import {daoAPI} from './daoAPI';
import {Competitor} from '../models/Competitor';
import {dao} from './dao';
import { DAOAPIFactory } from './DAOAPIFactory';
export class CompetitorDAO extends daoAPI<Competitor>{
    private static instance: CompetitorDAO;

    private constructor(){
        super();
    }

    public static getInstance():CompetitorDAO{
        if (CompetitorDAO.instance == undefined){
            CompetitorDAO.instance = new CompetitorDAO;
        }
        return CompetitorDAO.instance;
    }

    public findall(query: any[]):Promise<Competitor[]>{
        return <Promise<Competitor[]>>super.findall(query,Competitor).then((data: any)=>{return data.CompetitorMany})
    }
}