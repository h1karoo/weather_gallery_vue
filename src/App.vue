<template>
  <nav>
    <router-link to="/" onclick=" document.getElementById('nasa').style.display='block';" >Weather</router-link> |
    <router-link to="/gallery" onclick=" document.getElementById('nasa').style.display='none';">Gallery</router-link>
  </nav>
  <router-view/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background-image: url('https://protara.ru/image/catalog/cat-icons/white.jpg');
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
