export function createTemplate (inTemplateData:Record<string,string>,useStr:undefined|null|string){
    for(const inTemplateDataKey in inTemplateData){
        if(Object.prototype.hasOwnProperty.call(inTemplateData,inTemplateDataKey)){
            useStr=useStr.replace(inTemplateDataKey,inTemplateData[inTemplateDataKey])
        }
    }
    return useStr;
}