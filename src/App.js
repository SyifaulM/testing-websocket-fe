import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Utama from './pages/Utama';
import ClientPage from './pages/ClientPage';
import { io } from "socket.io-client";

const socket = io("https://testing-websocket-be.vercel.app");
// const socket = "https://b8de-114-10-144-198.ngrok-free.app";

function App() {
  useEffect(() => {
    if ('Notification' in window && navigator.serviceWorker) {
      Notification.requestPermission()
        .then(permission => {
          if (permission === "granted") {
            console.log("Akses notifikasi diterima");
          } else {
            console.log("Akses notifikasi ditolah");
          }
        })
        .catch(err => {
          console.error("akses notifikasi error", err);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Utama />} />
        <Route path="/perangkat1" element={<ClientPage idPerangkat="perangkat1" />} />
        <Route path="/perangkat2" element={<ClientPage idPerangkat="perangkat2" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;