<template>
  <div>
    <br />
    <div class="col-sm-3">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{product.orderName}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{product.name}}</h6>
          <ul v-for="list in product.products" :key="list">
            <li>{{list}}</li>
          </ul>
          <p>
            <b>Total:</b>
            {{product.total}}$
          </p>
          <button class="card-link float-right" @click="remove(product.id)">Eliminar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: ["product"],
  methods: {
     remove(id) {
      this.$store.state.orders = this.$store.state.orders.filter(
        order => order.id !== id
      );
      localStorage.setItem("orders", JSON.stringify(this.$store.state.orders));
    },
  }
};
</script>