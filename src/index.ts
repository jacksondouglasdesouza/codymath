export { greekAlphabet } from "./alphabets/greek";
export { constants } from "./constants/index";
export { arithmetic } from "./algebra/index";
export { utils } from "./utils/index";

// Named per-function exports → tree-shaking by function (0.7.0)
export * from "./algebra/arithmetic";

//Ok 0.8.0
