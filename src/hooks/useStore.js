import create from 'zustand';

const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => 
    window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
    cubes: getLocalStorage('world') || [
        {pos:[0,1,0], texture: 'dirt'},
        {pos:[1,1,1], texture: 'wood'},
        {pos:[2,1,1], texture: 'grass'},
        {pos:[2,2,2], texture: 'glass'},
        {pos:[3,1,2], texture: 'log'}
    ],
    addCube: (x, y, z, texture) => 
        set(state => ({
            cubes: [...state.cubes, {pos: [x,y,z], texture}],
        })),
    removeCube: (x, y, z) => {
        set((state) => ({
            cubes: state.cubes.filter((cube) => {
                const [_x, _y, _z] = cube.pos;
                return _x !== x || _y !== y || _z !== z;
            }),
        }));
    },
    texture: "wood",
    setTexture: texture => set((state) => ({texture})),
    saveWorld: () => set(state => {
      setLocalStorage("world", state.cubes);  
    })
}))