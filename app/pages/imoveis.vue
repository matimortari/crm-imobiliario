<template>
  <div class="p-6">
    <h1 class="mb-4 text-2xl font-bold">
      Imóveis
    </h1>

    <form class="mb-4 flex gap-2" @submit.prevent="handleCreate">
      <input v-model="novoImovel.titulo" placeholder="Título" class="input" required>
      <input v-model="novoImovel.local" placeholder="Localização" class="input">
      <input v-model="novoImovel.status" placeholder="Status" class="input">
      <button type="submit" class="btn bg-green-900 text-white">
        Adicionar
      </button>

      <p v-if="mensagem" class="font-semibold text-green-900">
        {{ mensagem }}
      </p>
    </form>

    <table class="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">
            ID
          </th>
          <th class="border p-2">
            Título
          </th>
          <th class="border p-2">
            Localização
          </th>
          <th class="border p-2">
            Status
          </th>
          <th class="border p-2">
            Cliente
          </th>
          <th class="border p-2">
            Ações
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="imovel in imoveis" :key="imovel.id">
          <td class="border p-2">
            {{ imovel.id }}
          </td>
          <td class="border p-2">
            {{ imovel.titulo }}
          </td>
          <td class="border p-2">
            {{ imovel.local }}
          </td>
          <td class="border p-2">
            {{ imovel.status }}
          </td>
          <td class="border p-2">
            {{ imovel.cliente_id || '-' }}
          </td>
          <td class="flex gap-2 border p-2">
            <button class="btn" @click="handleEdit(imovel)">
              Editar
            </button>
            <button class="btn bg-red-500 text-white" @click="handleDelete(imovel.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const { imoveis, mensagem, createImovel, updateImovel, deleteImovel } = useImoveis()

const novoImovel = ref({ titulo: "", local: "", status: "", cliente_id: 0 })

function handleCreate() {
  createImovel(novoImovel.value)
  novoImovel.value = { titulo: "", local: "", status: "", cliente_id: 0 }
}

function handleEdit(imovel: any) {
  const updatedTitulo = prompt("Novo título:", imovel.titulo)
  if (updatedTitulo) {
    updateImovel({ ...imovel, titulo: updatedTitulo })
  }
}

function handleDelete(id: number) {
  if (confirm("Deseja realmente excluir este imóvel?")) {
    deleteImovel(id)
  }
}

definePageMeta({
  layout: "admin",
})
</script>
