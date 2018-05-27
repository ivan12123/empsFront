<template>
    <div class="dialog_container" v-show="show">
        <div class="mask"></div>
        <div class="dialog_content">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {

        }
    },
    created() {},
    mounted() {

    },
    methods: {

    }
}
</script>
<style>
    .dialog_container {
        position: relative;
    }
    .mask {
        position: fixed;
        z-index: 1000;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: rgba(0,0,0,.5);        
    }
    .dialog_content {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 700px;
        transform: translate(-50%, -50%);
        background: #fff;
        z-index: 1001;
        padding: 20px;
        text-align: right;
        border-radius: 10px;
    }
</style>
