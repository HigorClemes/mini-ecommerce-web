<template>
    <div>
      <header>
        <p class="title-header">
          Tech Sales 
        </p> 
        <p class="search-bar">
          <v-text-field type="search" label="Busque aqui..."></v-text-field>
        </p>
        <p>
          <IconSite :iconDir="iconCart"
                    :iconName="cart"
                    :width="40"
                    :height="40"
                    :iconColor="white"/>
        </p>
      </header>
    </div>
</template>
    
  <script>

  export default ({
    name: 'HomeView',
  
    
    data() {
      return {
        
        rules:{
          required: (value) => !!value || 'Campo obrigatório.',
          counter: (value) => value && value.length >= 6 || 'Senha inválida',
        },
        dados: {
          nome: null,
          senha: null,
        },
        formValido: false,
        product: {
          name: 'Nome do Produto',
          price: 'R$100,00',
          image: 'C:\\Users\\higor\\OneDrive\\Documentos\\Faculdade\\Progamação 3\\trab\\mini-ecommerce-web\\mini-ecommerce-web\\src\\assets\\imagem\\imagem-1.png'
        },
      };
    },
    methods: {
      validate() {
        this.$refs.formdodani.validate();
      },
      reset() {
        this.$refs.formdodani.reset();
      },
      openPageDetail() {
        this.$router.push('/product-detail');
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
  
    header {
      display: flex;
      justify-content: space-between;
      background-color: #232121;
      height: 100px;
      color: white;
      border-bottom: white solid 1px;
  
      .title-header {
        margin: 30px;
        font-size: 30px;
      }
      
      .search-bar {
        margin: 28px;
        width: 350px;
        height: 10px;
      }
    }
  
    .space {
        display: flex;
        justify-content: space-between;
        margin: none;
        .button-entrar {
            margin-left: 50%;
            color: white;
            background-color: black;
        }
    }
  
    nav {
      display: none !important;
    }
  
    footer {
      display: flex;
      justify-content: space-between;
      background-color: #232121;
      height: auto;
      color: white;
      background-color: 232121;
      margin-top: 30px;
      border-top: white 2px solid;
    }
  
    .card {
      display: flex;
      justify-content: space-between;
  
      .card-prod {
        background-color: black;
        width: 25%;
        height: 25rem;
        box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.5);
        border: white 2px solid;
        margin-left: 30px;
        margin-right: 30px;
        font-size: 30px;
  
        .center {
          justify-content: center;
          align-items: center;
          bottom: 0;
          position: absolute;
          margin: 2%;
        }
  
        .font-prod {
          font-size: 12px;
          text-wrap: wrap;
          white-space: none !important;
          margin: 0;
          padding: 0;
          margin-left: 4px;
          margin-right: 10px;
          color: white;
        }
  
        .button {
            border: white 2px solid;
            color:white;
            width: 300%;
            max-width: 500%;
            margin-left: 250%;
            border-radius: 10px;
            bottom: 0;
            left: 50%;
          }
  
        .font-preco {
          font-size: 15px;
          text-wrap: wrap;
          margin: 0;
          padding: 0;
          color: white;
        }
  
        .foto {
          margin: 10px 0px 0px 25%;
          width: 50%;
          height: 50%;
        }
      }
    }
  </style>
•  