import { convertStyleObject } from "../styles";
import { StyleProperties } from "../styles/interfaces/StyleProperties";

export class StyleSheet {
  public static create<T extends Record<string, Partial<StyleProperties>>>(params: T): { [K in keyof T]: string } {
    const result = {} as { [K in keyof T]: string };

    for (const [key, style] of Object.entries(params)) {
      Object.assign(result, {
        [key]: convertStyleObject(style as StyleProperties),
      });
    }

    return result;
  }
}
