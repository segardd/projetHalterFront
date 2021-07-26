import { Observable } from 'rxjs';
import {
    ApolloClient,
    InMemoryCache,
    gql,
    ObservableQuery,
    NormalizedCacheObject,
    ApolloQueryResult,
    FetchResult
  } from "@apollo/client/core";
import {createApollo} from '../app/graphql.module'
//import { resolve } from 'dns';
export class GQLAPIManager<T>{
    private static instance: GQLAPIManager<any>;
    private readonly uri: string = 'http://localhost:4000/graphql'
    private apollo: ApolloClient<NormalizedCacheObject>;
    private constructor(){
        this.apollo = new ApolloClient({
            uri: this.uri,
            cache: new InMemoryCache()
        })
    }
    static getInstance():GQLAPIManager<any>{
        GQLAPIManager.instance = (GQLAPIManager.instance === undefined)?new GQLAPIManager():GQLAPIManager.instance
        return GQLAPIManager.instance;
    }

    async getData(query: any): Promise<ApolloQueryResult<T>>{
        //console.log(`query: ${JSON.stringify(query)}`)
            try{
               var response = await this.apollo.query({query: query})
               console.log('response '+response)
            }
            catch(e){
                console.error(e)
            }
            return this.apollo.query({query: query});
    }

    getDataObservable(query:any): ObservableQuery<any>{
        return this.apollo.watchQuery(query);
    }

    setData(mutation: any): Promise<FetchResult<any, Record<string, any>>>{
        return this.apollo.mutate(mutation);
    }
}