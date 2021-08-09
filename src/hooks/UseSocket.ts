import { io } from 'socket.io-client';

const useSocket = (url: string) => {
    return io(url);
};

export default useSocket;