<template>
  <div>
    <h1>Lista</h1>
    <br />
    <span v-if="this.$store.state.races.length == 0">
      <h3>SEM DADOS</h3>
    </span>
    <span v-else>
      <input type="text" v-model="search" />
      <select v-model="filter">
        <option value="all">Todos</option>
        <option value="42.2">Maratona</option>
        <option value="21.1">Meia-Maratona</option>
        <option value="15">15km</option>
        <option value="10">10km</option>
        <option value="5">5km</option>
      </select>
      <br />
      <br />
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Nome da Corrida</th>
            <th scope="col">KM</th>
            <th scope="col">Tempo</th>
            <th scope="col">+Info</th>
            <th scope="col">Eliminar</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="race in filterResults" :key="race">
            <td>{{race.name}}</td>
            <td>{{race.raceName}}</td>
            <td>{{race.type}}</td>
            <td>{{race.time}}</td>
            <td>
              <button @click="seeMore(race.id)">Ver Mais</button>
            </td>
            <td>
              <button @click="remove(race.id)">Eliminar</button>
            </td>
            <td>
              <button @click="editModal(race.id)">Ver Mais</button>
            </td>
          </tr>
        </tbody>
      </table>
      <dialog id="more">
        <h3>Observações</h3>
        <p id="content"></p>
        <button style="border:none; background-color: white" @click="closeSeeMore()">Fechar</button>
      </dialog>
      <dialog id="editDialog">
        <form method="dialog" v-on:submit.prevent="change()">
          <div class="form-group">
            <label for="exampleFormControlInput1">Nome:</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="editName"
            />
          </div>
          <div class="form-group">
            <label for="txtNameRace">Nome da Corrida:</label>
            <input type="text" class="form-control" id="txtNameRace" v-model="editRace" />
          </div>
          <div class="form-group">
            <label for="inpTime">Tempo da corrida</label>
            <input
              type="time"
              class="form-control"
              name
              step="0.001"
              id="inpTime"
              v-model="editTime"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect2">Tipo de corrida</label>
            <select class="form-control" id="exampleFormControlSelect2" v-model="editType">
              <option value="42.2">Maratona</option>
              <option value="21.1">Meia-Maratona</option>
              <option value="15">15km</option>
              <option value="10">10km</option>
              <option value="5">5km</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Example textarea</label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="editObs"
            ></textarea>
          </div>
          <br />
          <button style="border:none; background-color: #555555; color:white" type="submit">Gravar</button>
          <button style="border:none; background-color: white" @click="closeEdit()">Fechar</button>
        </form>
      </dialog>
    </span>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: "",
    filter: "",
    editName: "",
    editRace: "",
    editTime: "",
    editType: "",
    editObs: ""
  }),
  created: function() {
    if (localStorage.getItem("races")) {
      this.$store.state.races = JSON.parse(localStorage.getItem("races"));
    }
  },
  methods: {
    closeSeeMore() {
      document.getElementById("more").close();
    },
    closeEdit() {
      document.getElementById("editDialog").close();
    },

    remove(id) {
      this.$store.state.races = this.$store.state.races.filter(
        race => race.id !== id
      );
      localStorage.setItem("races", JSON.stringify(this.$store.state.races));
    },
    getIdSelect() {
      return this.$store.getters.idSelect;
    },
    editModal(id) {
      document.getElementById("editDialog").showModal();
      this.$store.state.selectId = id;
      for (let i in this.$store.state.races) {
        if (this.$store.state.races[i].id == id) {
          this.editName = this.$store.state.races[i].name;
          this.editRace = this.$store.state.races[i].raceName;
          this.editTime = this.$store.state.races[i].editTime;
          this.editType = this.$store.state.races[i].type;
          this.editObs = this.$store.state.races[i].obs;
        }
      }
    },
    seeMore(id) {
      document.getElementById("more").showModal();
      for (let i in this.$store.state.races) {
        if (this.$store.state.races[i].id == id) {
          document.getElementById(
            "content"
          ).innerHTML = this.$store.state.races[i].obs;
        }
      }
    },
    change() {
      this.$store.commit("CHANGE", {
        idRace: this.getIdSelect(),
        editName: this.editName,
        editRace: this.editRace,
        editTime: this.editTime,
        editType: this.editType,
        editObs: this.editObs
      });
      document.getElementById("editDialog").close();
    }
  },

  computed: {
    filterResults() {
      //FILTRAR RESULTADOS
      return this.$store.state.races.filter(race => {
        let filterResult = true;
        //não há pesquisa
        if (this.search == "") {
          return filterResult;
        }
        //por nome de utilizador
        if (race.name.toLowerCase().includes(this.search.toLowerCase())) {
          filterResult = race.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
          return filterResult;
        }
        //por nome da prova
        if (race.raceName.toLowerCase().includes(this.search.toLowerCase())) {
          filterResult = race.raceName
            .toLowerCase()
            .includes(this.search.toLowerCase());
          return filterResult;
        }
        //se o tipo de prova estiver vazio
        if (this.filter === "all") {
          return filterResult;
        }
        if (race.type == this.filter) {
          filterResult = race.type;
          return filterResult;
        }
      });
    }
  }
};
</script>
<style scoped>
h1,
h3 {
  text-align: center;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: grey;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>