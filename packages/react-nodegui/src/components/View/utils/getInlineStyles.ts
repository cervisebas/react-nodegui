import { convertStyleObject } from "../../../styles";
import { StyleProperties } from "../../../styles/interfaces/StyleProperties";

export function getInlineStyles(inlineStyles: string | StyleProperties | (string | StyleProperties)[]) {
  const styleList: string[] = [];

  if (Array.isArray(inlineStyles)) {
    for (const inlineStyle of inlineStyles) {
      if (typeof inlineStyle === 'string') {
        styleList.push(inlineStyle);
        continue;
      }
  
      if (typeof inlineStyle === 'object') {
        styleList.push(convertStyleObject(inlineStyle));
      }
    }
  }

  if (typeof inlineStyles === 'object' && !Array.isArray(inlineStyles)) {
    styleList.push(convertStyleObject(inlineStyles));
  }

  if (typeof inlineStyles === 'string') {
    styleList.push(inlineStyles);
  }

  return styleList.join('');
}
