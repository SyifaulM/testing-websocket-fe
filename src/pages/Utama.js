import React from 'react';
import io from 'socket.io-client';

const socket = io("http://localhost:5000");

const Utama = () => {
    const sendNotification = (target) => {
        const pesan = { target, content: `Notifikasi untuk ${target}` };
        socket.emit('notify', pesan);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={() => sendNotification('perangkat1')}>Notify Perangkat 1</button>
            <button onClick={() => sendNotification('perangkat2')}>Notify Perangkat 2</button>
            <button onClick={() => sendNotification('semua-perangkat')}>Notify Semua Perangkat</button>
        </div>
    );
};

export default Utama;