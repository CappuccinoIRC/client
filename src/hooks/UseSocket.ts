const useSocket = (url: string) => {
    return new WebSocket(url);
};

export default useSocket;