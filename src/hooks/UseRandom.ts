function* generateId(max: number) {
    while (true) {
        yield Math.floor(Math.random() * max);
    }
}

const useRandom = () => {
    return {
        id: generateId(999999).next().value as number
    };
};

export default useRandom;