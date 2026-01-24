import { DataWithOffset } from "../interfaces/DataWithOffset";
import { OnlyType } from "../types/Allowed";

export const offsetForIndex = <T>(
  index: number,
  items: Array<DataWithOffset<OnlyType<T, number>>>,
  sizeKey: keyof OnlyType<T, number>
) => {
  let offset = 0;

  if (index > 0) {
    const previousChild = items[index - 1];
    offset = previousChild.offset + (previousChild.data[sizeKey] ?? 1);
  }

  return offset;
};