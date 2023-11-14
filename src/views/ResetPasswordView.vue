<template>
    <div style="font-size: 2rem; font-weight: bold;">
      Redefina a sua senha

      <v-form style="width: 50%; margin: auto;"
        ref="formreset"
        v-model="formValido"
      >
        <v-text-field type="password" v-model="dados.senha" label="Senha" :rules="[rules.required, rules.counter, rules.equal]" />
        <v-text-field type="password" v-model="dados.senha2" label="Repita a senha" :rules="[rules.required, rules.counter, rules.equal]" />
        
        <v-btn @click="validate; redirecionar()" :disabled="!formValido" class="button-redefinir">
          Redefinir
        </v-btn>
      </v-form>
    </div>
  </template>
  
  <script>
  export default ({
    name: 'ResetPassword',
    data() {
      return {
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length >= 6 || 'A quantidade de caracteres deve ser maior 6 ',
          equal: (value) => value && value.senha == value.senha2 || 'As senhas não correspondem'
        },
        dados: {
          senha: null,
          senha2: null,
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
    },
  })
  </script>

<style lang="scss">
.button-redefinir {
    color: white;
    background-color: black;
}
</style>
  