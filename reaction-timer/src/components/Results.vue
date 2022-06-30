<template>
    <p>Reaction time : {{ this.result }} ms</p>
</template>

<script>
export default {
    props: ['result']
}
</script>

<style>
    p {
        background-color: rgb(53, 190, 83);
        width: 10%;
        margin-left: auto;
        margin-right: auto;
        color: white;
        border-radius: 50px;
}
</style>