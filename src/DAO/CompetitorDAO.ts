import {daoAPI} from './daoAPI';
import {Competitor} from '../models/Competitor'
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
}