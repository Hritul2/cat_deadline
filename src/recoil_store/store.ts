import { atom } from "recoil";

export const dilrState = atom({
  key: "dilrState",
  default: 0,
});

export const quantsState = atom({
  key: "quantsState",
  default: 0,
});

export const verbalState = atom({
  key: "verbalState",
  default: 0,
});

export const currentDateState = atom({
  key: "currentDateState",
  default: "",
});

export const daysUntilCATState = atom({
  key: "daysUntilCATState",
  default: 0,
});
export const authState = atom({
  key: "authState",
  default: localStorage.getItem("loggedIn") || "false",
});
