var resultView = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    json_urban: [],
    urban_display: [],
    json_words: [],
    words_display: [],
  },
  methods: {
    search(e) {
      if(e.keyCode === 13) {
        this.search_words(e);
        this.search_urban(e);
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
          console.log(this.words_display);
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
          // console.log(this.urban_display);
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
})


