import {create} from 'zustand'

interface LoadState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const useLoadStore = create<LoadState>((set) => ({
  isLoading: true,
  setIsLoading: (isLoading: boolean) => set((state) => ({state, isLoading})),
}))
