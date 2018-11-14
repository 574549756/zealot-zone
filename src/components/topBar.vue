<template>
    <div class="topbar">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-gerenlogoBold"></use>
        </svg>
        <div class="controller">
            <p>关于</p>
            <p>技能</p>
            <p>作品</p>
            <p>博客</p>
            <p>联系方式</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.topbar {
    height: 50px;
    width: 76vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #3b3b3b;
    margin-top: 80px;
    .controller {
        display: flex;
        p {
            color: #d2cfce;
            font-weight: 600;
            margin: 0 10px;
        }
    }
    svg {
        width: 40px;
        height: 40px;
        fill: #d2cfce;
    }
}
</style>