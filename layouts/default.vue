<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--blue {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #1b75b1;
  color: #326eb3;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--blue:hover {
  color: #fff;
  background-color: #1e388f;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.global-header {
  background-color: #35495e;
  display: block;
  padding-bottom: 10px;
  width: 100%;
}
.site-title {
  color: white;
  font-weight: bold;
  font-size: 200%; 
  margin-left: 20px;
}

.menu {
  display: flex;
  float: right;
  margin-top: -1.8rem;
  margin-right: 20px;
}
.menu-item-label {
  display: inline;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: white;
  background-color: #40576e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.menu-item-label:hover {
  color: #35495e;
  background-color: white;
}
</style>
