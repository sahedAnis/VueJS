const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'Title1',
            age: 45
        }
    },
    methods: {
        toggleShowTitle() {
            this.showBooks = !this.showBooks;
        }
    }
}) 

app.mount('#app')