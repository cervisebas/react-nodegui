export type SetParentFunc<T> = (parent: T, index: number) => void;

export type KeysOfType<T, TType> = {
  [Key in keyof T]-?: T[Key] extends TType | undefined ? Key : never;
}[keyof T];

export type OnlyType<T, TType> = {
  [Key in KeysOfType<T, TType>]?: TType;
};

export type Allowed<TItem, TParent> = OnlyType<TItem, SetParentFunc<TParent>>;
