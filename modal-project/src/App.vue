<template>
  <h1> {{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Sign up for the giveaway!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </teleport>
    

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Sign up for the newsletter</h1>
      <p>For updates and promo codoes!</p>
    </Modal>
  </div>
  <button @click ="toggleModal">Open modal</button>
  <button @click ="toggleModalTwo">Open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components : { Modal },
  data(){
    return{
      title: 'My First Vue App!',
      showModal: false,
      showModalTwo : false
    }
  },

  methods: {
    handleClick(){
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },

    toggleModal(){
      console.log('clicked')
      this.showModal = !this.showModal;
    },

    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo;
    }
  }  
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
