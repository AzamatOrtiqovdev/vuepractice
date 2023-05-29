<template>
      <div class="movie-add-form">
            <h3>Yangi Kino qo'shish</h3>
            <form class="add-form d-flex" @submit.prevent>
                  <input 
                        type="text" 
                        class="form-control new-movie-label" 
                        placeholder="Qanday kino?"
                        :value="name"
                        @input="name = $event.target.value"
                  >
                  <input 
                        type="text" 
                        class="form-control new-movie-label" 
                        placeholder="Nechi marotaba ko'rilgan?"
                        :value="viewers"
                        @input="viewers = $event.target.value"
                  >

                  <PrimaryButton class="btn-outline-dark" type="submit" @click="addMovie">Qo'shish</PrimaryButton>
            </form>
      </div>
</template>

<script> 
      
      export default {
            data() {
                  return {
                        name: "",
                        viewers: ""
                  }
            },
            methods: {
                  addMovie() {
                        if(!this.name || !this.viewers) return
                        const newMovie = {
                              name: this.name,
                              viewers: this.viewers,
                              like: false,
                              favourite: false,
                              id: Date.now()
                        }
                        this.$emit("createMovie", newMovie)
                        this.name = ""
                        this.viewers = ""
                  }
            }

      }
</script>

<style scoped>
      .movie-add-form {
            margin-top: 2rem;
            padding: 1.5rem;
            border-radius: 4px;
            background-color: #fcfaf5;
            box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
      }
</style>