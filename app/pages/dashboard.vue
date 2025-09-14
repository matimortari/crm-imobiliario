<template>
  <div class="flex min-h-screen">
    <div class="flex-1 bg-gray-100 p-6">
      <div class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="flex flex-col items-center rounded bg-white p-4 shadow">
          <p class="text-gray-500">
            Clientes cadastrados
          </p>
          <p class="text-2xl font-bold">
            {{ clientes.length }}
          </p>
        </div>
        <div class="flex flex-col items-center rounded bg-white p-4 shadow">
          <p class="text-gray-500">
            Imóveis disponíveis
          </p>
          <p class="text-2xl font-bold">
            {{ imoveis.length }}
          </p>
        </div>
        <div class="flex flex-col items-center rounded bg-white p-4 shadow">
          <p class="text-gray-500">
            Negociações em andamento
          </p>
          <p class="text-2xl font-bold">
            {{ negociacoes.length }}
          </p>
        </div>
      </div>

      <div class="rounded bg-white p-4 shadow">
        <h2 class="mb-4 text-xl font-bold">
          Clientes Recentes
        </h2>
        <table class="w-full table-auto border border-gray-300">
          <thead class="bg-gray-200">
            <tr>
              <th class="border p-2">
                Nome
              </th>
              <th class="border p-2">
                Contato
              </th>
              <th class="border p-2">
                Imóvel de Interesse
              </th>
              <th class="border p-2">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="cliente in clientesRecentes" :key="cliente.id">
              <td class="border p-2">
                {{ cliente.nome }}
              </td>
              <td class="border p-2">
                {{ cliente.contato }}
              </td>
              <td class="border p-2">
                {{ cliente.imovel }}
              </td>
              <td class="border p-2">
                {{ cliente.status }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImoveis } from "~/composables/useImoveis"

const { imoveis } = useImoveis()

// Dados simulados
const clientes = ref([
  { id: 1, nome: "João Silva" },
  { id: 2, nome: "Maria Souza" },
  { id: 3, nome: "Carlos Lima" },
  { id: 4, nome: "Ana Pereira" },
])

const negociacoes = ref([
  { id: 1, client: "João Silva", imovel: "Apartamento 101", status: "Em andamento" },
  { id: 2, client: "Maria Souza", imovel: "Casa 202", status: "Proposta enviada" },
  { id: 3, client: "Carlos Lima", imovel: "Cobertura 303", status: "Contrato assinado" },
])

const clientesRecentes = ref([
  { id: 1, nome: "João Silva", contato: "9999-9999", imovel: "Apartamento 101", status: "Em andamento" },
  { id: 2, nome: "Maria Souza", contato: "8888-8888", imovel: "Casa 202", status: "Proposta enviada" },
  { id: 3, nome: "Carlos Lima", contato: "7777-7777", imovel: "Cobertura 303", status: "Contrato assinado" },
])

definePageMeta({ layout: "admin" })
</script>
