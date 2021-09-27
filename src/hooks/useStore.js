import create from 'zustand';

const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) => 
    window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create((set) => ({
    cubes: getLocalStorage('world') || [],
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