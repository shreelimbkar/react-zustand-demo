import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let store = (set) => ({
  people: ["John Doe", "Jane Doe"],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
});

store = devtools(store);
store = persist(store, { name: "user_settings" });

const useStore = create(store);

export default useStore;
