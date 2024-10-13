import { getApps, initializeApp } from 'firebase/app'

const config = {
  dev: {},
  main: {}
} as const

const firebaseConfig = () => {
  return config.dev
}

export function init() {
  if (!getApps().length) {
    console.log(firebaseConfig().projectId)
    initializeApp(firebaseConfig())
  }
}
