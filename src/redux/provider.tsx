"use client"

import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

import { store } from "./store"

export function Providers({ children }: { children: React.ReactNode }) {
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {() => <>{children}</>}
      </PersistGate>
    </Provider>
  )
}
