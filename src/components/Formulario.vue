<template>
  <section class="src-components-formulario-av">
    <div class="jumbotron">
      <h3 class="formulario">Formulario vue-form</h3>
      <hr>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <validate tag="div">
          <label for="nombreCompleto">Nombre Completo</label>
          <input 
            type="text"
            id="nombreCompleto"
            name="nombreCompleto" 
            class="form-control"
            autocomplete="off"
            v-model.trim="datos.nombreCompleto" 
            required 
            :minlength="nombreMinLength"
            :maxlength="nombreMaxLength"
            no-espacios
          />

          <field-messages name="nombreCompleto" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="maxlength" class="alert alert-danger mt-1">
              Este campo requiere como maximo {{nombreMaxLength}} caracteres.
            </div>
          </field-messages>
        
        </validate>
    
        <validate tag="div">
          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            name="edad" 
            class="form-control"
            autocomplete="off"
            v-model.number="datos.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        <br>

        <validate tag="div">
          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            name="email" 
            class="form-control"
            autocomplete="off"
            v-model.trim="datos.email" 
            required 
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

      <hr>

    </div>
  </section>
</template>

<script lang="js">
  export default {
      name: 'src-components-formulario',
      components: {},
      props: [],
      data () {
        return {
          formState : {},
          datos : this.getInicialData(),
          nombreMinLength : 5,
          nombreMaxLength : 15,
          edadMin: 18,
          edadMax: 120,
          url: 'https://62ace499402135c7acba66cc.mockapi.io/usuarios',
          usuarios: []
        }
      },
      computed: {
    
      },
      mounted () {
    
      },
      methods: {
        getInicialData() {
          return {
            nombreCompleto: null,
            edad: null,
            email: null
          }
        },
        enviar() {
          console.log({...this.formData})        
          const usuario = { name: this.formData.name, edad: this.formData.edad, email: this.formData.email } 
          this.$store.dispatch('putUsuario', usuario)
          this.formData = this.getInicialData()
          this.formState._reset()
        },
        
      }
    }
</script>


<style scoped lang="css">

</style>
