import Vue from 'vue'

const miMixinGlobal = {
    /* beforeMount() {
        console.error('beforeMount -> miMixinGlobal')
    },
    mounted() {
        console.error('mounted -> miMixinGlobal')
    }, */
    methods: {
        saludar() {
            return 'Hola como están desde el miMixinGlobal'
        },
        decrementar() {
            //this.contador--
            console.warn('-----------------------------------------')
            console.warn('dispatch -> decrementar', new Date().toLocaleString())
            this.$store.dispatch('contarDown', 3)
        },
        incrementar() {
            //this.contador++
            console.warn('-----------------------------------------')
            console.warn('dispatch -> incrementar', new Date().toLocaleString())
            this.$store.dispatch('contarUp', 2)
        },
        async getUsuariosAxios() {
            const url = 'https://62ace499402135c7acba66cc.mockapi.io/usuarios';
            try {
                let { data } = await this.axios(url)
                console.log(data)
                //this.usuarios = data
                this.$store.dispatch('setUsers', data)
            }catch(error) {
                console.error('Error Axios', error)
            } 
        },
        async deleteUsuario(id) {
            console.log('deleteUsuario', id)
            try {
                let { data: usuario } = await this.axios.delete(this.url+'/'+id)
                console.log('AXIOS DELETE usuario', usuario)
                this.$store.dispatch('deleteUser', usuario)
                //let index = this.usuarios.findIndex(user => user.id == usuario.id)
                //if(index == -1) throw new Error('usuario no encontrado')
                //this.usuarios.splice(index, 1)
            }catch(error) {
                console.error('Error en deleteUsuario()', error.message)
            }
        },          
        

    },
    computed: {
        mostrarUsuarios() {
            console.log('Entro en mostrarUsuarios')
            let usuarios = this.$store.state.usuarios
            console.error('usuarios', usuarios)
            return usuarios
        }   
        /*ejecutar(verbo, url, body){
           if (verbo === "POST"){
                return  this.axios.post(url, body, {'content-type' : 'application/json'})
           }else if(verbo === "GET"){
                return this.axios(url)
           }else{
            return {}
           }        
        }*/
    }
}

Vue.mixin(miMixinGlobal)