import Echo from 'laravel-echo'
import Pusher from 'pusher-js'

declare global {
    interface Window {
        Echo: Echo
        Pusher: Pusher
    }
}

// window.Pusher = Pusher
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: import.meta.env.VITE_PUSHER_APP_KEY,
//     auth: {
//         headers: {
//             Authorization: `Bearer ${getToken()}`,
//         },
//     },
//     wsHost:
//         import.meta.env.VITE_PUSHER_HOST ??
//         `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
//     wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
//     wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
//     forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? 'https') === 'https',
//     enabledTransports: ['ws', 'wss'],
//     disableStats: true,
//     clusters: import.meta.env.VITE_PUSHER_APP_CLUSTER,
// })
