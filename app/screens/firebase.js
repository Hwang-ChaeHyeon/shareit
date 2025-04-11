import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAISssHmbAS2XvH-kaRknMH4SVOeo7xis0",
  authDomain: "shareit-70327.firebaseapp.com",
  projectId: "shareit-70327",
  storageBucket: "shareit-70327.appspot.com", // ← 여기 spelling 주의! ".app" 아님!
  messagingSenderId: "741590488659",
  appId: "1:741590488659:web:c9cf7285a3ec1ecab218a6",
  measurementId: "G-38TFDN9BKK"
};

// 앱이 이미 초기화되었는지 확인
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Auth 초기화 (이미 초기화된 경우는 getAuth로 가져옴)
let auth;
try {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} catch (e) {
  auth = getAuth(app);
}

export { app, auth };
