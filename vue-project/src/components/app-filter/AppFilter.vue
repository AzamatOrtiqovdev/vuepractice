<template>
      <div class="btn-group">
            <button 
                  class="btn" 
                  v-for="btn in filterButtons" 
                  :key="btn.name" 
                  :class="[filter == btn.name ? 'btn-dark':'btn-outline-dark']"
                  @click="filterHandler(btn.name)"
            >
                  {{ btn.title }}
            </button>
      </div>
</template>

<script>
      export default {
            props: {
                  updateFilterHandler: {
                        type: Function,
                        required: true
                  },
                  filterName: {
                        type: Function,
                        required: true
                  }
            },

            data() {
                  return {
                        filterButtons: [
                              {
                                    title: "Barcha kinolar",
                                    name: "all"
                              },
                              {
                                    title: "Mashhur kinolar",
                                    name: "popular"
                              },
                              {
                                    title: "Eng ko'p ko'rilgan kinolar",
                                    name: "mostViewers"
                              }
                        ],
                        filter: "all"
                  }
            },

            methods: {
                  filterHandler(filter) {
                        this.filter = filter
                        this.updateFilterHandler(this.filter)
                  }
            }

      }
</script>

<style> 
</style>