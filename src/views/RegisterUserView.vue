<template>
    <div style="font-size: 2rem; font-weight: bold;">
      <p class="title">Cadastro de usuário</p>
  
      <v-form style="width: 50%; margin: auto;"
        ref="formdodani"
        v-model="formValido">

        <v-text-field v-model="dados.cpf" label="CPF*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.nome" label="Nome Completo*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.email" label="E-mail*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.endereco" label="Endereço*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.complemento" label="Complemento*" :rules="[rules.required]"></v-text-field>
        <v-text-field type="date" v-model="dados.dt_nascimento" label="Data de nascimento*" :rules="[rules.required]"></v-text-field>
        <v-text-field type="password" v-model="dados.senha" label="Senha*" :rules="[rules.required]"></v-text-field>
        <v-text-field type="password" v-model="dados.senha2" label="Confirme a senha*" :rules="[rules.required]"></v-text-field>
  

        <p class="space-cadastro" style="margin-top: 20px">
            <v-btn @click="salvar(); redirecionar()" class="button-cadastrar">
                Cadastrar
            </v-btn>
        </p>
    
      </v-form>
    </div>
  </template>
  
  <script>
import axios from 'axios';

  export default ({
    name: 'LoginView',
    data() {
      return {
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length >= 6 || 'Senha inválida',
        },
        dados: {
          nome: null,
          email: null,
          endereco: null,
          complemento: null,
          senha: null,
          senha2: null,
          cpf: null,
          dt_nascimento: null,
        },
        formValido: false,
      };
    },
    methods: {
      validate() {
        this.$refs.formdodani.validate();
      },
      reset() {
        this.$refs.formdodani.reset();
      },
      redirecionar() {
        this.$router.push('/login');
      },
      salvar() {
        console.log('dadoss',this.dados, 'foto?', this.arquivoSelecionado);
        axios.post('http://localhost:8080/usuario', {
          nome: this.dados.nome,
          dt_nascimento: this.dados.dt_nascimento,
          cpf: this.dados.cpf,
          email: this.dados.email,
          endereco: this.dados.endereco,
          complemento: this.dados.complemento,
          senha: this.dados.senha,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
      },
    },
  })
  </script>

  <style lang="scss">
    .redefinir {
        font-size: 13px;
        text-decoration: none !important;
        color: #085caf;

        :hover {
            text-decoration: underline;
            color: black;
        }
    }

    .texto {
        font-size: 13px;
        text-decoration: none !important;
    }

    .title {
        margin: 15px;
    }

    .space-cadastro {
        display: flex;
        justify-content: right;
        .button-cadastrar {
            color: white;
            background-color: black;
        }
    }

    nav {
    display: none !important;
  }
  </style>
  