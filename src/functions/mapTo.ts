export function mapToObject(a:Map<any,any>){
    const resO={};
    for(let [k,v] of a){
        resO[k.toString()]=v;
    }
    return resO;

}
export function mapToJson(a:Map<any,any>){
    return JSON.stringify(mapToObject(a)); 
}