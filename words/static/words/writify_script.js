var resultView = new Vue({
  el: '#app',
  data: {
    index : 0,
    artist_count: 0,
    json_urban: null,
    urban_display: {},
    new_display: null,
    counter: 0,
    show: false,
    activeButton: 'btn btn-success',
    deadButton: 'btn btn-secondary',
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
            this.json_urban = response.data;
            this.urban_display = this.json_urban;
            // this.result_count = response.data.resultCount;
            // this.genres["ALL"] = true;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
      }
    },
  }
})


