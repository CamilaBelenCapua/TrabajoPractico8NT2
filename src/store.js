import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        usuarios : []
    },
    actions : {
        async getUsuarios({ commit }) {
            try {
                console.log('getUsuarios Store : Entro a getUsuarios Action')
                const usuarios = await axios.get('https://62ace499402135c7acba66cc.mockapi.io/usuarios')
                console.log('getUsuarios Store : Hace pegada a mockapi')
                console.log('getUsuarios Store : Hace Commit')
                commit('getUsuarios', usuarios.data)
            }
            catch (error) {
                alert(error)
                console.log('ENTRA ACA' + error)
            }
        },

        async deleteUsuario({ commit }, id) {
            try {
                console.log('deleteUsuario Store : Entro a getUsuarios Action')
                const { data: usuario } = await axios.delete('https://62ace499402135c7acba66cc.mockapi.io/usuarios/' + id)
                console.log('deleteUsuario Store : Hace pegada a mockapi')
                console.log('deleteUsuario Store : Hace Commit')
                commit('deleteUsuario', usuario)
            }

            catch (error) {
                alert(error)
                console.log('ENTRA ACA' + error)
            }
        },

        async putUsuario({ commit }, usuarioNuevo) {
            try {
                const { data: usuario } = await axios.post('https://627bf2b3b54fe6ee00919ac6.mockapi.io/usuario/', usuarioNuevo, {'content-type' : 'application/json'})
                commit('postUsuario', usuario)
            }

            catch (error) {
                alert(error)
            }
        },
    },

    mutations: {
        getUsuarios(state, data) {
            console.log('getUsuarios Store : Entro a getUsuarios mutations')
            console.log('getUsuarios Store : setea usuarios en state con data')
            state.usuarios = data
        },

        deleteUsuario(state, data) {
            console.log('deleteUsuario Store : Entro a getUsuarios mutations')
            let index = state.usuarios.findIndex(usuario => usuario.id == data.id)
            if (index == -1) throw new Error('usuario no encontrado')
            console.log('deleteUsuario Store : setea usuarios sin el usuario asignado pór id')
            state.usuarios.splice(index, 1)
        },

        postUsuario(state, data) {            
            state.usuarios.push(data)           
        }
    }
})






  
