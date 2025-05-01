import { DataWithOffset } from "../interfaces/DataWithOffset";
import { Allowed, OnlyType } from "../types/Allowed";
import { offsetForIndex } from "./offsetForIndex";

export function updateDisplacedChildren<TItem, TParent>(
  startIndex: number,
  items: Array<
    DataWithOffset<
      OnlyType<TItem, number> & Allowed<TItem, TParent>
    >
  >,
  parent: TParent,
  sizeKey: keyof OnlyType<TItem, number>,
  setParentFuncKey: keyof Allowed<TItem, TParent>
) {
  let offset = offsetForIndex(startIndex, items, sizeKey);

  for (let i = startIndex; i < items.length; i++) {
    const displacedChild = items[i];

    displacedChild.offset = offset;
    displacedChild.data[setParentFuncKey]?.(parent, offset);

    offset += displacedChild.data[sizeKey] ?? 1;
  }
};