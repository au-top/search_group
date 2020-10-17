<template>
    <button class="switchSearchCoreSetBox button" @click="switchShowSetBox">
        ShowSet
    </button>
    <div class="searchCoreSetLayer" v-if="showSetBox">
        <div class="searchCoreSetBox">
            <div
                v-for="(searchCoreMapVal, index) in searchCoreMapList"
                class="searchCoreSetElem"
                :key="index"
            >
                <div>
                    <span>SearchCore</span>
                    <input type="text" v-model="searchCoreMapVal[0]" />
                </div>
                <div>
                    <span>Url</span>
                    <input type="text" v-model="searchCoreMapVal[1]" />
                </div>
                <div>
                    <button
                        class="button delButton"
                        @click="delSarchCore(index)"
                    >
                        Del
                    </button>
                </div>
            </div>
            <div class="callButtonBox">
                <button class="addButton button" @click="addSarchCore">
                    Add
                </button>
                <button class="updateButton button" @click="updateSarchCoreMap">
                    Update
                </button>
                <button class="exitButton button" @click="switchShowSetBox">
                    Exit
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { searchCoreMap } from "../../App";

export default {
    setup: () => {
        const showSetBox = ref(false);
        const searchCoreMapList = ref(Array.from(searchCoreMap.value));
        function updateSarchCoreMap() {
            const nMap: Map<string, string> = new Map();
            for (const coreMapValue of searchCoreMapList.value) {
                nMap.set(coreMapValue[0], coreMapValue[1]);
            }
            searchCoreMap.value = nMap;
        }

        return {
            showSetBox,
            searchCoreMapList,
            updateSarchCoreMap,
            switchShowSetBox: () => (showSetBox.value = !showSetBox.value),
            addSarchCore: () => searchCoreMapList.value.push(["", ""]),
            delSarchCore: (index) => searchCoreMapList.value.splice(index, 1),
        };
    },
};
</script>

<style lang="scss">
@import "./ManageSearch.scss";
</style>
