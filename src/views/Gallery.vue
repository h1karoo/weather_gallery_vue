<template>
  <div class="app1">
    <img :src='image' width="700" height="700" style="margin-bottom:50px"/>
    <div class="searchBar">
    <input v-model="search" type="text" placeholder="Search here..."/>
    <button v-on:click="fetchSearchPhoto" onclick="document.getElementById('container').style.visibility = 'visible';">Search</button>
    </div>
    <div id="container">
      <div class="card">
    <img :src='coll'  class="search"/>
    <p>{{ title }}</p>
    <p>{{ author }}</p>
    </div>
    <div class="card">
    <img :src='coll1'  class="search"/>
    <p>{{ title1 }}</p>
    <p>{{ author1 }}</p>
    </div>
    <div class="card">
    <img :src='coll2'  class="search"/>
        <p>{{ title2 }}</p>
    <p>{{ author2 }}</p>
    </div>
    <div class="card">
    <img :src='coll3'  class="search"/>
    <p>{{ title3 }}</p>
    <p>{{ author3 }}</p>
    </div>
    <div class="card">
    <img :src='coll4'  class="search"/>
    <p>{{ title4 }}</p>
    <p>{{ author4 }}</p>
    </div>
    <div class="card">
    <img :src='coll5'  class="search"/>
    <p>{{ title5 }}</p>
    <p>{{ author5 }}</p>
    </div>
    <div class="card">
    <img :src='coll6'  class="search"/>
    <p>{{ title6 }}</p>
    <p>{{ author6 }}</p>
    </div>
    <div class="card">
    <img :src='coll7'  class="search"/>
    <p>{{ title7 }}</p>
    <p>{{ author7 }}</p>
    </div>
    </div>
    </div>
    </template>
    
    <script>
    export default {
       name: "App1",
       methods:{
         fetchRandomPhoto(){
            fetch(this.url + `?client_id=${this.accesKey}`)
              .then(response => response.json())
            .then((json)=>{
              this.image=json.urls.small
              console.log('json',json)
            }).
            catch((err)=>{
              console.log('error',err)
            })
         },
         fetchSearchPhoto(){
           let query = this.search
            fetch(this.url1+ query +`?&client_id=${this.accesKey}`)
              .then(response => response.json())
            .then((json)=>{
              this.coll=json.results[0].cover_photo.urls.full
              this.author=json.results[0].user.username
              this.title=json.results[0].title
              this.coll1=json.results[1].cover_photo.urls.full
              this.author1=json.results[1].user.username
              this.title1=json.results[1].title
              this.coll2=json.results[2].cover_photo.urls.full
              this.author2=json.results[2].user.username
              this.title2=json.results[2].title
              this.coll3=json.results[3].cover_photo.urls.full
              this.author3=json.results[3].user.username
              this.title3=json.results[3].title
              this.coll4=json.results[4].cover_photo.urls.full
              this.author4=json.results[4].user.username
              this.title4=json.results[4].title
              this.coll5=json.results[5].cover_photo.urls.full
              this.author5=json.results[5].user.username
              this.title5=json.results[5].title
              this.coll6=json.results[6].cover_photo.urls.full
              this.author6=json.results[6].user.username
              this.title6=json.results[6].title
              this.coll7=json.results[7].cover_photo.urls.full
              this.author7=json.results[7].user.username
              this.title7=json.results[7].title
              console.log('json',json)
            }).
            catch((err)=>{
              console.log('error',err)
            })
         }
       },
       created(){
          this.fetchRandomPhoto()
          this.fetchSearchPhoto()
       },
       data(){
         return{
           search:'',
           coll: '',
           coll1: '',
           coll2: '',
           coll3: '',
           coll4: '',
           coll5: '',
           coll6: '',
           coll7: '',
           image:'',
           accesKey:'s9HJxyXX40oFBGWJZsKDRKZXyC45yqq6pTY5dSi_OaA',
           url:'https://api.unsplash.com/photos/random',
           url1:'https://api.unsplash.com/search/collections?page=1&query='
         }
       },
    };
    </script>
    
    <style>
    #app {
       font-family: Avenir, Helvetica, Arial, sans-serif;
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
       text-align: center;
       color: #2c3e50;
       margin-top: 20px;
    }
    .search {
        display: inline-block;
        width: 300px;
        height: 300px;
        margin-bottom: 20px;
    }

    #container {
        margin-left: 15%;
        width: 1300px;
        visibility: hidden;

    }
    .app1 {
      background-image: url('https://protara.ru/image/catalog/cat-icons/white.jpg');
    }
    .searchBar {
      display: block;
      margin-top: 0px;
      margin-bottom: 40px;
    }
    p {
      width: auto;
    }
    .card {
      display: inline-block;
        width: 300px;
        height: 300px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    #nasa {
      display: none;
    }

    </style>