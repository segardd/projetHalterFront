export interface dao<T>{
    find(id: string,query: any[], type: {new(): T}): T;

    create(object: T, query: Object, type: {new(): T}): T;

    update( object: T, query: Object, type: {new(): T}): T;

    delete(object: T): void;

    saveall(objects: T[]): void;

    findall(query: Object, type:{new (): T}):Promise<void | T[]>;
}