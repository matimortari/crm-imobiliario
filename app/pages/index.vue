<template>
  <div
    class="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-br from-blue-100 to-blue-800"
  >
    <header class="flex flex-col items-center justify-center gap-2">
      <h2 class="text-3xl font-bold text-blue-100">
        Entrar
      </h2>
      <p class="text-sm font-medium text-white">Acesse seu painel imobiliário</p>
    </header>

    <form
      class="flex w-96 flex-col gap-4 rounded-xl bg-white/90 p-6 shadow-lg backdrop-blur"
      @submit.prevent="handleLogin"
    >
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-400 focus:ring focus:ring-blue-100"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Senha"
        required
        class="rounded-lg border border-gray-200 px-4 py-2 focus:border-blue-400 focus:ring focus:ring-blue-100"
      />
      <button
        type="submit"
        class="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
      >
        <span>Entrar</span>
        <icon name="ph:arrow-right-bold" size="22" />
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')

async function handleLogin() {
  window.location.href = '/dashboard'
}
</script>
