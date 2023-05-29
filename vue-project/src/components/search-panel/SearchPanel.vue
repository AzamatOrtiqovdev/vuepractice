<template>
      <input type="text" class="form-control search-input" placeholder="Kinolarni qidiring" :value="term" @input="changeHandler">
</template>

<script>
      export default {
            props: {
                  updateTermHandler: {
                        type: Function,
                        required: true,
                  }
            },

            data() {
                  return {
                        term: '',
                  }
            },

            methods: {
                  changeHandler(e) {
                        this.term = e.target.value.toLowerCase()
                        this.updateTermHandler(this.term)
                  }
            }
      }
</script>

<style scoped>
      .search-input {
            padding: 1.5rem;
            margin-bottom: 1rem;
            border-radius: 4px;
            background-color: #fff;
            box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
      }
</style>