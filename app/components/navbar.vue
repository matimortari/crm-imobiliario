<template>
  <header class="flex items-center justify-between bg-white p-4 shadow">
    <h1 class="text-2xl font-bold">
      Dashboard
    </h1>

    <div class="flex items-center gap-4">
      <button class="btn bg-[#2563eb] text-white">
        <icon name="ph:invoice-bold" size="20" />
        <span>Fatura</span>
      </button>

      <button class="btn">
        <icon name="ph:bell-ringing-bold" size="25" />
      </button>

      <div class="flex items-center gap-2">
        <img :src="userAvatar" class="h-10 w-10 rounded-full">
        <div>
          <p class="font-bold">
            Matheus Mortari
          </p>
          <p class="text-sm text-gray-500">
            Administrador
          </p>
        </div>
      </div>

      <button class="btn bg-red-500 text-white hover:bg-red-600" @click="handleLogout">
        Sair
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
const userAvatar = "https://avatars.githubusercontent.com/u/144123817?v=4"

async function handleLogout() {
  window.location.href = "/"
}
</script>
