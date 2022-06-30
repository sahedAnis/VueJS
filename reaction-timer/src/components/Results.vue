<template>
    <p>Reaction time : {{ this.result }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
    props: ['result'],
    data(){
        return {
            rank: null
        }
    },
    mounted(){
        if(this.result < 250) {
            this.rank = 'Ninja Fingers';
        } else if (this.result < 400) {
            this.rank = 'Rapid Reflexes'
        } else {
            this.rank = 'Snail pace...'
        }
    }
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

    .rank{
        font-size: 1.4em;
        color: #0faf87;
        font-weight: bold;
    }
</style>