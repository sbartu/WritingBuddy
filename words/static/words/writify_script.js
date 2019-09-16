var resultView = new Vue({
  delimiters: ['[[', ']]'],
  el: '#app',
  data: {
    json_urban: [],
    urban_display: [],
  },
  methods: {
    search_urban_dic (e) {
      if(e.keyCode === 13) {
        const query = e.target.value;
        const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define";
        const headers = {
          "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
          "x-rapidapi-key": "d42b00b19fmsh1d8c8774483287cp1a9412jsn58fb2ac82287",
        }
        const params = {
          term: query
        }
        axios
          .get(url, {params, headers})
          .then(response => {
            this.json_urban = response.data.list;
            this.urban_display = this.json_urban;
            console.log(this.urban_display);
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
  }
})


