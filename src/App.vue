<template>
    <div class="searchBox">
        <div>
            <input
                autofocus="autofocus"
                id="search"
                type="text"
                placeholder="Search Content"
                v-model="inputSearchData"
                @keyup.enter="refreshRunSearchCore"
            />
            <button id="searchButton" @click="refreshRunSearchCore" >search</button>
        </div>
    </div>
	<div class="useSearchCoreList">
		<div v-for="(mapValue) in searchCoreMap" :key="mapValue[0]">
			<label >
				<span>{{mapValue[0]}}</span>
				<input v-model="useSearchCoreUseList" type="checkbox" :value="mapValue[0]" />
			</label>
		</div>
		<!-- <div class="openSearchButton">
			OpenSearch
		</div> -->
	</div>
	<div class="setSearchCoreBox">
		<ManageSearch/>
	</div>
    <div class="iframeBox">
        <Iframe
            v-for="(mapValue) in useSearchCoreMap"
            :key="mapValue[0]"
            :title="mapValue[0]"
            :IframeSrc="mapValue[1](searchData)"
        />
    </div>
</template>
<script lang="ts">

import "./scss/app.scss";
import Iframe from "./components/Iframe.vue";
import ManageSearch from "./components/mangeSearch/ManageSearch.vue";
import { searchData, inputSearchData, searchCoreMap ,refreshRunSearchCore ,useSearchCoreUseList ,useSearchCoreMap} from "./App";

export default {
    name: "App",
    components: {
		Iframe,
		ManageSearch
	},
    setup: () => {
        return { 
            inputSearchData,
            searchData,
            searchCoreMap,
			refreshRunSearchCore,
			useSearchCoreUseList,
			useSearchCoreMap
        };
    },
    createed: () => {},
};
</script>