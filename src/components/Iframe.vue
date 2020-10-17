<template>
    <div class="iframeElemBox">
        <div>
            <b>{{ title }}</b>
        </div>
        <iframe class="searchIframe" :src="IframeSrc"></iframe>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        IframeSrc: {
            type: String,
        },
        title: {
            type: String,
        },
    },
};
</script>

<style lang="scss" scoped>
.iframeElemBox {
    display:flex;
    flex-direction: column;
    flex-grow: 1;
    /* 设置滚动条的样式 */
    ::-webkit-scrollbar {
        width: 3px;
    }
    /*滚动槽*/
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
    }
    /* 滚动条滑块 */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);
    }
    iframe {
        flex-grow: 1;
        border: 0;
    }
    &:hover {
        flex-grow: 8;
    }
}
</style>
