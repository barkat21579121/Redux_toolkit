import Chance from "chance";

const chance = new Chance();

export function FakeData() {
  return chance.name({ middle: true });
}
