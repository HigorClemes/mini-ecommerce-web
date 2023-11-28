<template>
  <div>
    <header>
      <p class="title-header">
        Tech Sales 
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
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
  <v-carousel-item
      v-for="(slide,i) in slides"
      :key="i"
      :src="slide.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  <h1 style="margin: 20px">BLACK FRIDAY TECH SALES</h1>
  <div>
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="90%"
    height="450"
    >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="prod in produtoPromo" :key="prod.id"
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="black"
          :class="['ma-4', selectedClass]"
          height="400"
          width="350"
          @click="toggle"
        >
        <v-img class="foto"
               :src="prod.foto"
               aspect-ratio="1.7"></v-img> 

          <v-card-title class="font-prod">
              {{ prod.produto }}
          </v-card-title>
          <v-card-subtitle class="font-preco">
            <p style="text-decoration: line-through; color: white">
              R$ {{prod.valor}}
            </p>
            <p style="color: rgb(2, 253, 2)">
              R$ {{ prod.valor }}
            </p>
            <p style="color: white">
              À vista no pix  
            </p>
          </v-card-subtitle>
          <v-card-actions class="center">
            <v-btn class="button">Comprar</v-btn>
          </v-card-actions> 
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  </div>
  <div style="border-radius: 30px; margin-top: 30px;">
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
  <v-carousel-item
      v-for="(slide,i) in slides2"
      :key="i"
      :src="slide.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  </div>
  <h1 style="margin: 20px">MAIS PROCURADOS</h1>
  <div>
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="90%"
    height="450"
    >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="prod in produtoTp1" :key="prod.id"
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="black"
          :class="['ma-4', selectedClass]"
          height="400"
          width="350"
          @click="toggle"
        >
        <v-img class="foto"
               :src="prod.foto"
               aspect-ratio="1.7"></v-img> 

          <v-card-title class="font-prod">
              {{ prod.produto }}
          </v-card-title>
          <v-card-subtitle class="font-preco">
            <p style="text-decoration: line-through; color: white">
              R$ {{prod.valor}}
            </p>
            <p style="color: rgb(2, 253, 2)">
              R$ {{ prod.valor }}
            </p>
            <p style="color: white">
              À vista no pix  
            </p>
          </v-card-subtitle>
          <v-card-actions class="center">
            <v-btn class="button">Comprar</v-btn>
          </v-card-actions> 
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  </div>
  <div style="margin: 30px; border-radius: 30px;">
    <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
  <v-carousel-item
      v-for="(slide,i) in slides3"
      :key="i"
      :src="slide.src"
      cover
    ></v-carousel-item>
  </v-carousel>
  </div>
  <h1 style="margin: 20px">PLACAS DE VIDEO</h1>
  <div class="card">
    <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="90%"
    height="450"
    >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="prod in produtoTp2" :key="prod.id"
        v-slot="{ toggle, selectedClass }"
      >
        <v-card
          color="black"
          :class="['ma-4', selectedClass]"
          height="400"
          width="350"
          @click="toggle"
        >
        <v-img class="foto"
               :src="prod.foto"
               aspect-ratio="1.7"></v-img> 

          <v-card-title class="font-prod">
              {{ prod.produto }}
          </v-card-title>
          <v-card-subtitle class="font-preco">
            <p style="text-decoration: line-through; color: white">
              R$ {{prod.valor}}
            </p>
            <p style="color: rgb(2, 253, 2)">
              R$ {{ prod.valor }}
            </p>
            <p style="color: white">
              À vista no pix  
            </p>
          </v-card-subtitle>
          <v-card-actions class="center">
            <v-btn class="button">Comprar</v-btn>
          </v-card-actions> 
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
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
import axios from 'axios'

export default ({
  name: 'HomeView',

  components: {
    BannerSite,
    IconSite
  },
  produto: null,
  produtoPromo: null,
  produtoTp1: null,
  produtoTp2: null,
  data() {
    return {
      slides: [
          {
            src: bannerImage,
          },
          {
            src: bannerImage2,
          },
          {
            src: bannerImage3,
          },
        ],
        slides2: [
          {
            src: bannerImage2,
          },
          {
            src: bannerImage3,
          },
          {
            src: bannerImage,
          },
        ],
        slides3: [
          {
            src: bannerImage3,
          },
          {
            src: bannerImage,
          },
          {
            src: bannerImage2,
          },
        ],
      iconCart,
      imagemTeste,
      bannerImage,
      bannerImage4,
      rules:{
        required: (value) => !!value || 'Campo obrigatório.',
        counter: (value) => value && value.length >= 6 || 'Senha inválida',
      },
      dados: {
        nome: null,
        senha: null,
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
      this.$router.push('/home');
    },
    redirecionarCadastro() {
      this.$router.push('/register-user'); 
    },
    redirecionarDetails() {
        this.$router.push('/details');
    },
  },
  async mounted() {
    await axios.get('http://localhost:8080/produto')
        .then(response => {
            console.log(response.data);
            this.produto = response.data;
            this.produtoPromo = this.produto.filter(item => { return item.eh_promocao == true});
            this.produtoTp1 = this.produto.filter(item => { return item.tipo == 1 });
            this.produtoTp2 = this.produto.filter(item => { return item.tipo == 2 });
        })
        .catch(error => {
            console.error(error);
        });
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

.card-prod {
  background-color: black;
  width: 25%;
  height: 25rem;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.5);
  border: white 2px solid;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 30px;
}
  .center {
    justify-content: center;
    align-items: center;
    bottom: 0;
    position: absolute;
    margin: 2%;
    width: 90%;
  }

  .font-prod {
    font-size: 15px;
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
      width: 60%;
      margin-left: 20px;
      border-radius: 10px;
    }

  .font-preco {
    font-size: 15px;
    text-wrap: wrap;
    margin-bottom: 5px;
    color: white;
  }

  .foto {
    margin: 10px 0px 0px 25%;
    width: 50%;
    height: 50%;
  }

</style>
