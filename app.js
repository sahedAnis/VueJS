const app = Vue.createApp({
    data(){
        return {
            showBooks: true,
            title: 'Title1',
            books: [
                { title : 'book1', author: 'author1'},
                { title : 'book2', author: 'author2'},
                { title : 'book2', author: 'author3'}
            ]
        }
    },
    methods: {
        toggleShowTitle() {
            this.showBooks = !this.showBooks;
        }
    }
}) 

app.mount('#app')