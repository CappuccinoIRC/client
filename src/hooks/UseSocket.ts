export const WebSocketStatus = {
   0: 'CONNECTING',
   1: 'OPEN',
   2: 'CLOSING',
   3: 'CLOSED'
};

const useSocket = (url: string): WebSocket => {
   return new WebSocket(url);
};

export default useSocket;