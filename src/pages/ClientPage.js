import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io("https://testing-websocket-be.vercel.app");

const ClientPage = ({ idPerangkat }) => {
    useEffect(() => {
        socket.emit('joinRoom', idPerangkat);

        socket.on('notification', (data) => {
            const { content } = data;
            new Notification('Notification', { body: content });
        });

        return () => {
            socket.off('notification');
        };
    }, []);

    useEffect(() => {
        if (Notification.permission === 'default') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                }
            });
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>ini adalah halaman {idPerangkat}</h1>
        </div>
    );
};

export default ClientPage;