<template>
  <div>
    <h1>ENCOMENDA</h1>
    <div class="container">
      <form v-on:submit.prevent="addOrder()">
        <div class="form-group">
          <label for="exampleFormControlInput1">Nome:</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" v-model="name" />
        </div>
        <div class="form-group">
          <label for="txtNameRace">Nome da Encomenda:</label>
          <input type="text" class="form-control" id="txtNameRace" v-model="encName" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Tipo de Produto:</label>
          <select class="form-control" id="exampleFormControlSelect2" v-model="type">
            <option value="1">Informática</option>
            <option value="2">Roupa</option>
            <option value="3">Instrumentos</option>
          </select>
        </div>

        <div class="col-sm-12">
          <table v-if="this.type !='' " class="table form-group" style="text-align:middle">
            <thead>
              <tr>
                <th class="align-middle" scope="col">Produto</th>
                <th class="align-middle" scope="col">Preço</th>
                <th class="align-middle" scope="col">Comprar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in filterTypes" v-bind:key="product">
                <td class="align-middle">{{ product.name }}</td>
                <td class="align-middle">{{ product.price }}</td>
                <td class="align-middle">
                  <input type="checkbox" :value="product.name" v-model="checkProducts" />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div class="container">
              <span v-if="this.checkProducts.length !=0">
                <h3>Compras</h3>
                <div v-for="sltproduct in filterProducts" :key="sltproduct">
                  <p>
                    <b>Artigo:</b>
                    {{sltproduct.name}}
                    <b>Preço:</b>
                    {{sltproduct.price}}$
                  </p>
                </div>
                <span v-for="price in filterPrice" :key="price"><h3>Total:{{price.n}}$</h3></span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <button type="submit" class="btn btn-primary float-right">Submeter</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    type: "",
    encName: "",
    name: "",
    checkProducts: [],
    total: 0
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("products")) {
      this.$store.state.products = JSON.parse(localStorage.getItem("products"));
    }
    if (localStorage.getItem("orders")) {
      this.$store.state.orders = JSON.parse(localStorage.getItem("orders"));
    }
  },
  methods: {
    saveStorage() {
      localStorage.setItem(
        "products",
        JSON.stringify(this.$store.state.products)
      );
    },
     getLastId() {
      return this.$store.getters.lastIdOrders;
    },
     addOrder() {
      let result = confirm("Deseja Adicionar esta encomenda?");
      if (result == true) {
        this.$store.commit("ADD_ORDER", {
          idOrder: this.getLastId() + 1,
          nameUser: this.name,
          nameOrder: this.encName,
          chkProducts: this.checkProducts,
          totalPrice: this.getTotalPrice(),
        });
        alert("registada com sucesso");
      }
    },
    getTotalPrice(){
        let a =Number(this.filterProducts[this.filterProducts.length-1].totalPrice)
        return a
    }
  },
  computed: {
    filterTypes() {
      return this.$store.state.products.filter(
        product => product.type == this.type
      );
    },
    filterProducts() {
      let array = [];
      let total = 0;
      for (const i in this.$store.state.products) {
        for (const j in this.checkProducts) {
          if (this.$store.state.products[i].name == this.checkProducts[j]) {
            total += this.$store.state.products[i].price;
            array.push({
              name: this.$store.state.products[i].name,
              price: this.$store.state.products[i].price,
              totalPrice: total
            });
          }
        }
      }
      return array;
    },
    filterPrice(){
        let a = [{n:Number(this.filterProducts[this.filterProducts.length-1].totalPrice)}]
        return a
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>