const app = Vue.createApp({
    data(){
        return {
            url : 'https://www.google.fr',
            showBooks: true,
            title: 'Title1',
            books: [
                { title : 'book1', author: 'author1', img: 'assets/1.jpg', isFav : true},
                { title : 'book2', author: 'author2', img: 'assets/2.jpg', isFav : false},
                { title : 'book2', author: 'author3', img: 'assets/3.jpg', isFav : true}
            ]
        }
    },
    methods: {
        toggleShowTitle() {
            this.showBooks = !this.showBooks;
        },

        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    }
}) 

app.mount('#app')