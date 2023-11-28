<template>
    <div style="font-size: 2rem; font-weight: bold;">
      <p class="title">Cadastro de produto</p>
  
      <v-form style="width: 50%; margin: auto;"
        ref="formdodani"
        v-model="formValido">

        <v-text-field v-model="dados.produto" label="Produto*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.descricao" label="Descrição*" :rules="[rules.required]"></v-text-field>
        <v-text-field type="number" v-model="dados.valor" label="Preço*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.descricao_produto" label="Desc.Produto*" :rules="[rules.required]"></v-text-field>
        <v-text-field v-model="dados.informacoes_tecnicas" label="Info.Técnicas*" :rules="[rules.required]"></v-text-field>
        Promoção*
        <v-checkbox
                  v-model="dados.eh_promocao"
                  label="True"
                  value=true>
        </v-checkbox>
        <v-checkbox
                  v-model="dados.eh_promocao"
                  label="False"
                  value=false>
        </v-checkbox>
        <v-file-input
                    @change="handleImageUpload" accept="image/*"
                    show-size
                    counter
                    multiple
                    v-model="arquivoSelecionado"
                    label="Fotos"></v-file-input>
        <v-text-field v-model="dados.tipo" label="Tipo*" :rules="[rules.required]"></v-text-field>

        <p class="space-cadastro" style="margin-top: 20px">
            <v-btn @click="salvar()" class="button-cadastrar">
                Cadastrar
            </v-btn>
        </p>
    
      </v-form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default ({
    name: 'CadastroView',
    data() {
      return {
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length >= 6 || 'Senha inválida',
        },
        dados: {
          produto: null,
          descricao: null,
          valor: null,
          descricao_produto: null,
          informacoes_tecnicas: null,
          eh_promocao: false,
          promocao: null,
          foto: null,
        },
        watch: {
        arquivoSelecionado(val) {
            if (val) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.dados.foto = e.target.result;
                };2
                reader.readAsDataURL(val);
            }
          }
        },
        formValido: false,
        arquivoSelecionado: null,
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
        axios.post('http://localhost:8080/produto', {
          produto: this.dados.produto,
          descricao: this.dados.descricao,
          valor: this.dados.valor,
          descricao_produto: this.dados.descricao_produto,
          informacoes_tecnicas: this.dados.informacoes_tecnicas,
          eh_promocao: this.dados.eh_promocao,
          foto: this.dados.foto,
          tipo: this.dados.tipo,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
      },
      handleImageUpload(event) { 
      const file = event.target.files[0];  

      if (file) { 
        // Use FileReader para ler o arquivo como Base64 [// Use FileReader para ler o arquivo como Base64] 
        const reader = new FileReader(); 

        reader.onloadend = () => { 
          // O resultado do FileReader é o código Base64 da imagem [// O resultado do FileReader é o código Base64 da imagem] 
          this.dados.foto = reader.result; 
          console.log('nbase',reader.result)
        }; 

        reader.readAsDataURL(file); 
      } 
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
  