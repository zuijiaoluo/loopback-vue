<template>
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <div class="container">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/" class="navbar-brand">Loopback Vue</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link tag="li" to="/" active-class="active" class="nav-item">
            <a class="nav-link">Home</a>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
