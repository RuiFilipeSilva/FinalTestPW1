<template>
  <div>
    <h1>ENCOMENDAS</h1>
    <input type="text" v-model="filter" />
    <div class="container">
      <div class="row">
        <app-cards v-for="p in filterResults" :key="p" :product="p"></app-cards>
      </div>
    </div>
  </div>
</template>
<script>
import Cards from "../components/Cards.vue";
export default {
  components: {
    "app-cards": Cards
  },
  data() {
    return {
      product: JSON.parse(localStorage.getItem("orders")),
      filter: ""
    };
  },
  created: function() {
    if (localStorage.getItem("orders")) {
      this.$store.state.orders = JSON.parse(localStorage.getItem("orders"));
    }
  },
  computed: {
    filterResults() {
      //FILTRAR RESULTADOS
      return this.$store.state.orders.filter(order => {
        let filterResult = true;
        //não há pesquisa
        if (this.filter == "") {
          return filterResult;
        }
        //por nome de utilizador
        if (order.name.toLowerCase().includes(this.filter.toLowerCase())) {
          filterResult = order.name
            .toLowerCase()
            .includes(this.filter.toLowerCase());
          return filterResult;
        }
        //por nome da encomenda
        if (order.orderName.toLowerCase().includes(this.filter.toLowerCase())) {
          filterResult = order.orderName
            .toLowerCase()
            .includes(this.filter.toLowerCase());
          return filterResult;
        }
      });
    }
  }
};
</script>