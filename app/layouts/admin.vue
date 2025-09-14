<template>
  <div class="flex min-h-screen">
    <Sidebar />

    <div class="flex flex-1 flex-col bg-gray-100">
      <Navbar />

      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>
