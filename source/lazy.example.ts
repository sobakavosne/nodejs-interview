import * as Lazy from 'lazy.js'

const xs = [
  { name: "Butcher", message: "I'll kill you, Homelander 💀" },
  { name: "Cutcher", message: "I'll kill you, Homelander 💀" },
  { name: "Dutcher", message: "I'll kill you, Homelander 💀" },
  { name: "Eutcher", message: "I'll kill you, Homelander 💀" },
  { name: "Futcher", message: "I'll kill you, Homelander 💀" }
]

const ys = Lazy(xs)
  .map(x => x)
  .filter(y => y.name.startsWith("B"))
  .toArray();

console.log(ys);
