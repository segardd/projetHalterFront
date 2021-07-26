import { daoAPI } from "./daoAPI";
import { dao } from './dao';
import { Competitor } from "src/models/Competitor";
import { CompetitorDAO } from "./CompetitorDAO";
export class DAOAPIFactory {
    private static instance: DAOAPIFactory;
    private constructor(){
    }

    public static getInstance():DAOAPIFactory{
        if (DAOAPIFactory.instance  == undefined){
            DAOAPIFactory.instance = new DAOAPIFactory();
        }
        return DAOAPIFactory.instance;
    }

    public getCompetitorDAO(): dao<Competitor>{
        return CompetitorDAO.getInstance();
    }
}