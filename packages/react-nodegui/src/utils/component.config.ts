import { ComponentConfig } from "../classes/ComponentConfig";
import { ReactNodeGuiTag } from "../types/ReactNodeGuiTag";

const components = new Map<string, ComponentConfig>();

export const getComponentByTagName = (tagName: string): ComponentConfig => {
  const config = components.get(tagName);
  
  if (!config) {
    throw `Unknown component ${tagName}`;
  }

  return config;
};

export function registerComponent<Props>(config: ComponentConfig): ReactNodeGuiTag<Props> {
  if (components.has(config.tagName)) {
    throw `A component with tagName: ${config.tagName} already exists. This base component will be ignored`;
  }

  components.set(config.tagName, config);
  
  return config.tagName;
}