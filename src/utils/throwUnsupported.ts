export function throwUnsupported(instance: object) {
  throw new Error(
    `Unsupported operation performed in ${instance.constructor.name}`,
  );
}