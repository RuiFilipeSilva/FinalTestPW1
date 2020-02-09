<template>
  <div>
    <h1>Teste</h1>
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVcAAACTCAMAAAAN4ao8AAAAq1BMVEUAtt4AsdwAs+EAtN8AtN0AteEAut8AseAAsd8At94At9wAsd3k9/wAstsAs9otueDc9fkFs+bH7fTP8vYArd+z5vN0zuhAw+fq+v0yveEAs9c5xuLV8vRmyOcdvd6J1/DI7Pmr4POU2/C86fR8zuxjzOVWxOS/4/Ol5Ox40eWR1+6N1uTR8PvF7/Wf3u+36PH2/f3c8fu66+m86PeP1fDh9/czwtub1++X3uurTDY7AAADIklEQVR4nO3YbXPiNhDAcXlXiiwbGwzYYA4cCA8JKYGkadL7/p+sNnft9UVmbtrJDEz7/71hENKMtF6LlYwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/ir30BP6TbKiCsVatCcG4723GurbNJaohJO2HTTSYJOmegGj7LZx7ucTYibvg3K+YlZupM23wXKYuWBtEuxib4EKwptCkSKT9QURUijaUNg9JKtINDVaKep7LpZdwldq49oK4Io/aRJyNsy4lo9RHqmI1ynPNtAg+9W27VVVvChtbF76N/VL15vHssgu4Ul1cb/yiuV2Wxq2Gd+rUHZfrhU0Kv1ivq6LSZFad1pvYNVVdDm9lu17vzi+/yt39eh6Trx/p4uqih9G+2A+eJmb1mNlBFfqjrfhfDpOwfzrkxfFU98tynAzKL2G4Prp60O/SWo1GZhBfegXX6Zyv6apMXfz8ntp65HfHLPeL+5k9NKrx10PevIxz8cOgg52Xqperf9h+ryFsfxDpZRdwpc75mq22mcumXkL/JZZY+vtlGe3WPhKpD+nxsbm5MeUmDJ2V6l6sP+6J60982wfKbVs/TTPRZhDZ0/OyXJXjxXLWvurNYVzOX399bTfVMFRrqzJWWVXE9SecJL2+Py6Mi6dxIv3B+PYUeb8osy9L9S6bzOPH36LC52PTXxqRTRlpfNz8iOv4svO/VsGEt/74YSsmfo6MrQfZaiNpVpbxeD7JfLYc+WaaJal525mRU63KqN0HfuTrW8xx7SMioZek5cInfnqOazSZV9Vp9bKzk97ddrgaZdn+ZVMdjj4sg5HqNbPR8e/7AHXWRxIjTfDNTbD63tX+797Wj3f1bDHJxN3+PpksRaP67rEubGja4rZpnPFN89f4d86xH+ruAdrjqWv/ks6J1x1mJW0DqPrURLE/7VNtT1qxJu05oOsq5+5/Drfi2Af+CTF2+7L6OmyLLTLy87SZmfmwW9ReZyTk5wlqXMitT4Tr2U+lQW271XZ3sRT+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPC/9wfEwC6hEoVOwgAAAABJRU5ErkJggg=="
    />
    <br />
    <br />
    <div class="container">
      <button class="col-sm-4">
        <router-link to="add">Adicionar</router-link>
      </button>
      <button id="registerBtn" class="col-sm-4 float-right">
        <router-link to="list">Relatório</router-link>
      </button>
    </div>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
}
img {
  height: 200px;
  padding-left: 27.5%;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
