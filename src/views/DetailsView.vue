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

  <p class="title-product" >
    Processador AMD Ryzen 5 5600, 3.5GHz (4.4GHz Max Turbo), Cache 35MB  
  </p>

  <div class="product-container">
      <div class="content-container">
        <div class="foto">
          <img :src="imagemTeste" alt="Product Main Image">
        </div>

      </div>

      
      <div class="price-button-container">

        <div class="detalhes">
          Detalhamento completo do processador (descrição completa)
        </div>

        <div class="font-preco">
          R$ 999,99
        </div>

        <v-btn class="button">Comprar</v-btn>

        <div class="entregue">
          Entregue por Mini Ecommerce Lucas e Higor
        </div>
      </div>
    </div>

  
  
  <footer>
    <label style="font-size:20px; margin:40px; text-wrap: wrap;">
      
      <h2>Departamentos</h2>

      <p style="margin-top: 20px">
        Hardware
      </p>
      <p>
        Celular e Smartphone
      </p>
      <p>
        Periféricos
      </p>
      <p>
        Teclado e Mouse
      </p>
      <p>
        Computadores
      </p>
      <p>
        Placa de Vídeo
      </p>
      <p>
        Monitores
      </p>
      <p>
        Consoles e Games
      </p>
      <p>
        Áudio
      </p>
      <p>
        TV
      </p>
      <p>
        Móveis
      </p>
      <p>
        Eletrodomésticos
      </p>
      <p>
        Eletroportáteis
      </p>
      <p>
        Smart Home
      </p>
    </label>

    <label style="font-size:20px; margin:40px">
      
      <h2>Institucional</h2>

      <p style="margin-top: 20px;">
        Sobre a Tech Sales
      </p>
      <p>
        Políticas do Site e Marketplace
      </p>
      <p>
        Políticas de Privacidade
      </p>
      <p>
        Exerça seus Direitos de Privacidade
      </p>
      <p>
        Prêmios
      </p>
      <p>
        Trabalhe Conosco
      </p>
      <p>
        Código de Defesa do Consumidor
      </p>
      <p>
        Código de Conduta Ética
      </p>
      <p>
        FAQ
      </p>
      <p>
        FAQ - Orientações
      </p>
    </label>

    <label style="margin:40px">
      
      <h2>Minha conta</h2>

      <p style="margin-top: 20px">
        Meus Pedidos
      </p>
      <p>
        Cadastrar ou Remover Newsletter
      </p>
      
      <h2 style="margin-top: 30px">Atendimento</h2>
   
      <p style="margin-top: 20px">
        Horário de atendimento:
      </p>
      <p>
        08:00 às 20:00 - Segunda a Sábado, horário de Brasília (Exceto domingo e feriados, em São João Batista - SC)
      </p>
      <p>
        Endereço: Rua José Montibeller, 168 -
        Jardim São Paulo
        São João Batista/SC - CEP: 88240-00 
      </p>
      <p>
        Central SAC: (19) 2114-4444
      </p>
      <p>
        E-mail: faleconosco@techsales.com.br
      </p>
      
    </label>

    <div class="product-details">
    <div class="main-image">
      <img :src="mainImage" alt="Product Main Image">
    </div>
    <div class="thumbnail-images">
      <img
        v-for="(image, index) in thumbnailImages"
        :key="index"
        :src="image"
        alt="Thumbnail Image"
        @click="changeMainImage(index)"
      >
    </div>
  </div>

  </footer>
  <div>
    <BannerSite :imageSource="bannerImage4"/>
  </div>
</template>


<script>
import BannerSite from '../components/BannerSite.vue'
import IconSite from '../components/IconSite.vue'
import bannerImage from '@/assets/imagem/banner-1.png'
import bannerImage2 from '@/assets/imagem/banner-2.png'
import bannerImage3 from '@/assets/imagem/banner-3.png'
import bannerImage4 from '@/assets/imagem/banner-4.png'
import iconCart from '@/assets/icons/cart.svg'
import imagemTeste from '@/assets/imagem/imagem-1.png'

export default ({
  name: 'HomeView',

  components: {
    BannerSite,
    IconSite
  },

  data() {
    return {
      bannerImage,
      bannerImage2,
      bannerImage3,
      bannerImage4,
      iconCart,
      imagemTeste,
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
    redirecionar() {
      this.$router.push('/home');
    },
    redirecionarCadastro() {
      this.$router.push('/register-user'); 
    },
    redirecionarDetails() {
        this.$router.push('/details');
    },
  }
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

  .title-product {
      margin: 30px;
      font-size: 30px;
      text-align: left;
    }

  .entregue{
    text-align: right;;
    margin: 5px ;

    font-size: 13px;
  }

    .font-preco {
    font-size: 35px;
    white-space: wrap;

    padding: 0;
    color: red;
    }

  .button {
    border: red 2px solid;
    color: red;
    width: 100%;
    max-width: 500px; 
    border-radius: 10px;
    text-align: left;
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


    .product-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 120px; 
    margin-right: 220px; 
  }

  .content-container {
    display: flex;
    align-items: flex-start;
  }

  .foto {
    max-width: 100%;
    height: auto;
  }

  .detalhes {
    text-align: left;
    margin: 0px 0px 30px 0px;
    max-width: 700px;
  }

  .price-button-container {
    text-align: left;

  }
</style>
