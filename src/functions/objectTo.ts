export function objectToMap(a:Record<string,any>){
    const resMap=new Map();
    for(const key in a){
        resMap.set(key,a[key]);
    }
    return resMap;
}