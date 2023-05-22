<template>
    <div class="app font-monospace">
        <div class="content">
            <AppInfo :allMoviesCount="movies.length" 
            :favouriteMoviesCount="movies.filter(movie => movie.favourite).length"/>
            <div class="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <MovieList :movies="movies"/>
            <MovieAddForm />        
        </div>
    </div>
</template>

<script>
    import AppInfo from '@/components/app-info/AppInfo.vue';
    import SearchPanel from '@/components/search-panel/SearchPanel.vue';
    import AppFilter from '@/components/app-filter/AppFilter.vue';
    import MovieList from '@/components/movie-list/MovieList.vue';
    import MovieAddForm from '@/components/movie-add-form/MovieAddForm.vue';

    export default {
        components: {
            AppInfo,
            SearchPanel,
            AppFilter,
            MovieList,
            MovieAddForm
        },
        data() {
                  return {
                        movies: [
                              {
                                    name: "John Wick 1",
                                    viewers: 755,
                                    like: true,
                                    favourite: false
                              },
                              {
                                    name: "John Wick 2",
                                    viewers: 578,
                                    like: false,
                                    favourite: false
                              },
                              {
                                    name: "John Wick 3",
                                    viewers: 821,
                                    like: false,
                                    favourite: true
                              }
                        ]
                  }
            }
    }
</script>

<style>
    .app {
        height: 100vh;
        color: #000;
    }

    .content {
        width: 1000px;
        min-height: 700px;
        background-color: #fff;
        margin: 0 auto;
        padding: 5rem 0;
    }

    .search-panel {
        margin-top: 2rem;
        margin-bottom: 2rem;
        padding: 1.5rem;
        background-color: #fcfaf5;
        border-radius: 4px;
        box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.15);
    }

</style>