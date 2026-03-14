import type { CardConfig } from '../types';
import { defaultConfig } from '../defaults';

const URL_PARAM = 's';

/**
 * Serializes the full config to a base64-encoded JSON string for use in a URL query param.
 * @returns Base64-encoded config string
 */
export function serializeConfig(config: CardConfig): string {
  return btoa(JSON.stringify(config));
}

/**
 * Deserializes a config from a base64-encoded string, merging missing keys from defaultConfig.
 * Returns null if the string is not valid.
 * @throws Never — all errors are caught and return null
 */
export function deserializeConfig(encoded: string): CardConfig | null {
  try {
    const parsed = JSON.parse(atob(encoded)) as Partial<CardConfig>;
    return { ...defaultConfig, ...parsed };
  } catch {
    return null;
  }
}

/**
 * Reads the config from the current page URL's query string.
 * Returns null if no config param is present or the value is invalid.
 */
export function readConfigFromUrl(): CardConfig | null {
  const params = new URLSearchParams(window.location.search);
  const encoded = params.get(URL_PARAM);
  if (!encoded) return null;
  return deserializeConfig(encoded);
}

/**
 * Writes the serialized config into the URL query string without triggering navigation.
 */
export function writeConfigToUrl(config: CardConfig): void {
  const url = new URL(window.location.href);
  url.searchParams.set(URL_PARAM, serializeConfig(config));
  window.history.replaceState(null, '', url.toString());
}
