import { getApps, initializeApp } from 'firebase/app'

const config = {
  dev: {
    apiKey: 'AIzaSyC3AIhc1wG-ofnt6s70BcidAXdnNRV5PzE',
    authDomain: 'freelancer-brian-b.firebaseapp.com',
    databaseURL: 'https://freelancer-brian-b-default-rtdb.firebaseio.com',
    projectId: 'freelancer-brian-b',
    storageBucket: 'freelancer-brian-b.appspot.com',
    messagingSenderId: '149556519970',
    appId: '1:149556519970:web:18c6bc034bd61c9049167b',
    measurementId: 'G-WQ943MB4FW'
  },
  main: {
    apiKey: 'AIzaSyCWTg3cDv3zhqo2QxtDi6wZsrv_YKWh6Sg',
    authDomain: 'property-analysis-29b2f.firebaseapp.com',
    databaseURL: 'https://property-analysis-29b2f-default-rtdb.firebaseio.com',
    projectId: 'property-analysis-29b2f',
    storageBucket: 'property-analysis-29b2f.appspot.com',
    messagingSenderId: '482032857621',
    appId: '1:482032857621:web:dece6b892abaa70114d41c',
    measurementId: 'G-6RZ7D9MGJ1'
  }
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
