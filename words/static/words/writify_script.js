var resultView = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    json_urban: [],
    urban_display: [],
    json_words: [],
    words_display: [],
    json_rhymes: [],
    rhymes_display: [],
  },
  methods: {
    search(e) {
      if(e.keyCode === 13) {
        this.search_words(e);
        this.search_urban(e);
        this.search_rhymes(e);
      }
    },
    search_words (e) {
      const query = e.target.value;
      const url = "https://wordsapiv1.p.rapidapi.com/words/" + query;
      const headers = {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": config.WORD_KEY,
      }
      axios
        .get(url, {headers})
        .then(response => {
          this.json_words = response.data.results;
          this.words_display = this.json_words;
        })
        .catch(error => {
          console.log(error);
        })
    },
    search_urban (e) {
      const query = e.target.value;
      const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define";
      const headers = {
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": config.URB_KEY,
      }
      const params = {
        term: query
      }
      axios
        .get(url, {params, headers})
        .then(response => {
          this.json_urban = response.data.list;
          this.urban_display = this.json_urban;
        })
        .catch(error => {
          console.log(error);
        })
    },
    search_rhymes (e) {
      const query = e.target.value;
      const url = "https://wordsapiv1.p.rapidapi.com/words/" + query + "/rhymes"
      const headers = {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": config.WORD_KEY,
      }
      axios
        .get(url, {headers})
        .then(response => {
          this.json_rhymes = response.data.rhymes.all;
          this.rhymes_display = this.json_rhymes;
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
})


