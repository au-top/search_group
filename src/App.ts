import { ref, Ref, computed, watch, reactive } from "vue";
import searchCoreDef from "./assets/searchCore.json";
import { createTemplate } from "./functions/template";
import { mapToJson } from "./functions/mapTo";
import { objectToMap } from "./functions/objectTo";
//init data
let inputSearchData = ref("");
let searchData = ref("Welcome");
let searchCoreMap: Ref<Map<string, string>> = ref(new Map());
let useSearchCoreUseList: Ref<Array<string>> = ref([]);
function createSearchCore(keyName: string, templateStr: string) {
    searchCoreMap.value.set(keyName, templateStr);
}
for (const searchCoreDefKey in searchCoreDef) {
    if (Object.prototype.hasOwnProperty.call(searchCoreDef, searchCoreDefKey)) {
        createSearchCore(searchCoreDefKey, searchCoreDef[searchCoreDefKey]);
    }
}
//add def
searchCoreMap.value.forEach((v, k) => {
    useSearchCoreUseList.value.push(k);
});
//init localStorage data

if (localStorage.getItem("useSearchCoreMap") == undefined) {
    localStorage.setItem(
        "useSearchCoreMap",
        JSON.stringify(useSearchCoreUseList.value)
    );
}
const cacheUseSearchCoreMap = localStorage.getItem("useSearchCoreMap");
useSearchCoreUseList.value = JSON.parse(cacheUseSearchCoreMap);
watch(useSearchCoreUseList, () => {
    localStorage.setItem(
        "useSearchCoreMap",
        JSON.stringify(useSearchCoreUseList.value)
    );
});

(() => {
    if (localStorage.getItem("searchCoreMap") == undefined) {
        localStorage.setItem("searchCoreMap", mapToJson(searchCoreMap.value));
    }
    searchCoreMap.value = objectToMap(JSON.parse(localStorage.getItem("searchCoreMap")));
    watch(searchCoreMap, () => {
        localStorage.setItem("searchCoreMap", mapToJson(searchCoreMap.value));
    });
})();


//method
function refreshRunSearchCore() {
    searchData.value = inputSearchData.value;
}
const useSearchCoreMap = computed(() => {
    const useSearchCoreMap: Map<string, (string) => string> = new Map();
    useSearchCoreUseList.value.forEach((coreName, k) => {
        if (searchCoreMap.value.has(coreName)) {
            useSearchCoreMap.set(coreName, (searchContent: string) =>
                createTemplate(
                    { "${searchContent}": searchContent },
                    searchCoreMap.value.get(coreName)
                )
            );
        }
    });
    return useSearchCoreMap;
});
export {
    inputSearchData,
    searchData,
    searchCoreMap,
    refreshRunSearchCore,
    useSearchCoreUseList,
    useSearchCoreMap,
};
