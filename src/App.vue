<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" >
      <b-navbar-brand>
        <b-icon icon="house" aria-hidden="true"></b-icon>
        Examen
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="inicio">Principal</b-nav-item>
          <b-nav-item href="from">Formulario</b-nav-item>
          <b-nav-item href="info">Paginación</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <!-- <b-col cols="12"> -->
        <b-row>
          <b-col cols="12">
            <router-view></router-view>
          </b-col>
        </b-row>
      <!-- </b-col> -->
    </b-container>
  </div>
</template>

<style >

</style>
