import { StyleProperties } from "./interfaces/StyleProperties";

const StringAttributes: (keyof StyleProperties)[] = [
  'flexDirection',
  'justifyContent',
  'alignItems',
  'alignContent',
  'alignSelf',
  'flexWrap',
];

export function convertStyleObject(styleObject: StyleProperties) {
  let styles = '';

  for (const [key, value] of Object.entries(styleObject)) {
    if (value === undefined || value === null) {
      continue;
    }

    const type = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);

    if (StringAttributes.includes(key as never)) {
      styles += `${type}: '${value}';`;
    } else {
      styles += `${type}: ${value};`;
    }
  }

  return styles;
}
