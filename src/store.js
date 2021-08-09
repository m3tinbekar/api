import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 
Vue.use(Vuex)

export default  new Vuex.Store(
    {
        state: {  token : localStorage.getItem("token") || null, email:localStorage.getItem("email")||null,password:localStorage.getItem("password")||null},
        mutations: {
            RETRIEVE_TOKEN(state, token) {
            state.token = token
            
          },
         
            DESTROY_TOKEN(state) {
            state.token = null
            
            
          },
            RETRIEVE_MAIL(state,email){
                state.email = email
                
          },
          DESTROY_MAIL(state){
            
            state.email = null
          },
          RETRIEVE_PASSWORD(state,password){
            state.password = password
          },
          DESTROY_PASSWORD(state){
            state.password = null
          }
          

        },
        getters : {
            loggedIn(state){
            return state.token !== null
        },
            getEmail(state){
                return state.email
        },
            getPassword(state){
                return state.password
        }

    },
        actions : {
            retrieveToken(context, credentials) {
 
                return new Promise((resolve, reject) => {
                  axios.post("https://reqres.in/api/login", {
                    email: credentials.email,
                    password: credentials.password,
                  })
                    .then(response => {
                      const token = response.data.token
                      const email = credentials.email
                      const password = credentials.password
                      localStorage.setItem("token", token)
                      localStorage.setItem("email", email)
                      localStorage.setItem("password", password)
                      context.commit("RETRIEVE_MAIL",email)
                      context.commit("RETRIEVE_PASSWORD",password)
                      context.commit("RETRIEVE_TOKEN", token)
                      
                      resolve(response)

                    })
                    .catch(error => {
                      
                      reject(error)
                    })
                  })
              },
              destroyToken(context) {
                if (context.getters.loggedIn) {
                  localStorage.removeItem("token")
                  localStorage.removeItem("email")
                  localStorage.removeItem("password")
                  context.commit("DESTROY_TOKEN")
                  context.commit("DESTROY_MAIL")
                  context.commit("DESTROY_PASSWORD")
                  }
              }

        }
    })




