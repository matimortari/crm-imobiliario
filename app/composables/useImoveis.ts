interface Imovel {
  id: number
  titulo: string
  local?: string
  status?: string
  cliente_id?: number
}

interface ImoveisResponse {
  success: boolean
  imoveis?: Imovel[]
  message?: string
}

export function useImoveis() {
  const imoveis = ref<Imovel[]>([])
  const mensagem = ref("")

  const fetchImoveis = async () => {
    try {
      const res = await $fetch<ImoveisResponse>("/api/imoveis", { method: "GET" })
      if (res.success && res.imoveis) {
        imoveis.value = res.imoveis
      }
      else {
        mensagem.value = res.message || "Erro ao carregar imóveis"
      }
    }
    catch {
      mensagem.value = "Erro ao carregar imóveis"
    }
  }

  const createImovel = async (novoImovel: Partial<Imovel>) => {
    try {
      const res = await $fetch<ImoveisResponse>("/api/imoveis", {
        method: "POST",
        body: novoImovel,
      })
      if (res.success) {
        mensagem.value = "Imóvel criado com sucesso!"
        fetchImoveis()
      }
      else {
        mensagem.value = res.message || "Erro ao criar imóvel"
      }
    }
    catch {
      mensagem.value = "Erro ao criar imóvel"
    }
  }

  const updateImovel = async (imovel: Imovel) => {
    try {
      const res = await $fetch<ImoveisResponse>(`/api/imoveis/${imovel.id}`, {
        method: "PUT",
        body: imovel,
      })
      if (res.success) {
        mensagem.value = "Imóvel atualizado com sucesso!"
        fetchImoveis()
      }
      else {
        mensagem.value = res.message || "Erro ao atualizar imóvel"
      }
    }
    catch {
      mensagem.value = "Erro ao atualizar imóvel"
    }
  }

  const deleteImovel = async (id: number) => {
    try {
      const res = await $fetch<{ success: boolean, message?: string }>(`/api/imoveis/${id}`, {
        method: "DELETE",
      })
      if (res.success) {
        mensagem.value = "Imóvel excluído com sucesso!"
        fetchImoveis()
      }
      else {
        mensagem.value = res.message || "Erro ao excluir imóvel"
      }
    }
    catch {
      mensagem.value = "Erro ao excluir imóvel"
    }
  }

  onMounted(fetchImoveis)

  return { imoveis, mensagem, fetchImoveis, createImovel, updateImovel, deleteImovel }
}
