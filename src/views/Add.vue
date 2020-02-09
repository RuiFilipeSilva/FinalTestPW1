<template>
  <div>
    <h1>TESTE</h1>
    <div class="container">
      <form v-on:submit.prevent="addRace()">
        <div class="form-group">
          <label for="exampleFormControlInput1">Nome:</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" v-model="name" />
        </div>
        <div class="form-group">
          <label for="txtNameRace">Nome da Corrida:</label>
          <input type="text" class="form-control" id="txtNameRace" v-model="raceName" />
        </div>
        <div class="form-group">
          <label for="inpTime">Tempo da corrida</label>
          <input type="time" class="form-control" name step="0.001" id="inpTime" v-model="time" />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Tipo de corrida</label>
          <select class="form-control" id="exampleFormControlSelect2" v-model="type">
            <option value="42.2">Maratona</option>
            <option value="21.1">Meia-Maratona</option>
            <option value="15">15km</option>
            <option value="10">10km</option>
            <option value="5">5km</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="obs"></textarea>
        </div>
        <button type="submit" class="btn btn-primary float-right">Submeter</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    name: "",
    raceName: "",
    time: "",
    type: "",
    obs: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("races")) {
      this.$store.state.races = JSON.parse(localStorage.getItem("races"));
    }
  },
  methods: {
    getLastId() {
      return this.$store.getters.lastId;
    },
    addRace() {
      let result = confirm("Deseja Adicionar corrida?");
      if (result == true) {
        this.$store.commit("ADD_RACE", {
          idRace: this.getLastId() + 1,
          nameUser: this.name,
          nameRace: this.raceName,
          timeRace: this.time,
          typeRace: this.type,
          obsRace: this.obs
        });
        alert("registada com sucesso");
      }
    }
  }
};
</script>
<style scoped>
h1 {
  text-align: center;
}
</style>