<template>
  <section class="src-componentes-usuarios">
    <div class="jumbotron">
      <h2 class="usuarios">Usuarios</h2>
      <hr>
      <hr>
      <br>
      <button style="margin-left: 10px" class="btn btn-info ml-3" @click="getUsuarios()">GET USUARIOS</button>
        <span v-if="mostrarUsuarios.length">
            <div class="media alert alert-info" v-for="(usuario,index) in mostrarUsuarios" :key="index">
                <div class="media-body ml-4">
                    <h4 class="mt-0">
                        <u>Usuario {{ index + 1 }} - ID: {{ usuario.id }}</u>
                    </h4>
                    <br>
                    <p>Nombre Completo: <b>{{ usuario.nombre }}</b></p>
                    <p>Edad: <i>{{ usuario.edad }}</i></p>
                    <p>Email: {{ usuario.email }}</p>

                    <button style="margin-left: 10px" class="btn btn-danger mt-3" @click="deleteUsuario(usuario.id)">DELETE</button>
                </div>
            </div>
        </span>
        <span v-else class="alert alert-warning">
                    No hay usuarios que mostrar
        </span>
    </div>
  </section>
</template>

<script>
  export default  {
    name: 'src-componentes-usuarios',
    props: [],
     mounted () {
    },
    data () {
      return {    
      }
    },
    methods: {
      deleteUsuario(id) {
        console.log("deleteUsuario en componente Usuarios : Hace Dispatch con id "+id)
        this.$store.dispatch('deleteUsuario',id)
      },
       getUsuarios() {
        console.log("getUsuarios en componente Usuarios : Hace Dispatch")
        this.$store.dispatch('getUsuarios')
      },

    },
    computed: {
      mostrarUsuarios() {
        console.log('mostrarUsuarios en componente Usuarios : Entro')
        console.log('mostrarUsuarios en componente Usuarios : setea usuarios con this.$store.state.usuarios')
        let usuarios = this.$store.state.usuarios
        console.log('mostrarUsuarios en componente Usuarios : retorna usuarios')
        return usuarios
      },
      
    }
}
</script>

<style scoped lang="css">
  .src-componentes-api-rest-ful {
  }
  .jumbotron {
   
  }
  .usuarios{
    text-align: center;
    color:rgb(5, 94, 97);
}
</style>