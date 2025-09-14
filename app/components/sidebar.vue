<template>
  <aside class="flex h-screen w-64 flex-col bg-gray-800 p-4 text-white">
    <h3 class="mb-8 text-xl font-bold">
      CRM Imobiliário
    </h3>

    <nav class="flex flex-col gap-4">
      <nuxt-link to="/dashboard" class="flex items-center gap-2 rounded p-2 hover:bg-gray-700">
        <icon name="ph:invoice" size="25" />
        <span>Faturas</span>
      </nuxt-link>
      <nuxt-link to="/dashboard" class="flex items-center gap-2 rounded p-2 hover:bg-gray-700">
        <icon name="ph:user-circle" size="25" />
        <span>Clientes</span>
      </nuxt-link>
      <nuxt-link to="/imoveis" class="flex items-center gap-2 rounded p-2 hover:bg-gray-700">
        <icon name="ph:house" size="25" />
        <span>Imóveis</span>
      </nuxt-link>
      <nuxt-link to="/dashboard" class="flex items-center gap-2 rounded p-2 hover:bg-gray-700">
        <icon name="ph:building" size="25" />
        <span>Condomínios</span>
      </nuxt-link>
      <nuxt-link to="/dashboard" class="flex items-center gap-2 rounded p-2 hover:bg-gray-700">
        <icon name="ph:coffee" size="25" />
        <span>Negociações</span>
      </nuxt-link>
    </nav>
  </aside>
</template>
