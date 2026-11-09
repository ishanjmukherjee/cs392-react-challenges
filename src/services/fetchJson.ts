export class HttpError extends Error {
  readonly status: number;

  constructor(status: number, statusText: string) {
    super(`HTTP ${status}${statusText ? ` ${statusText}` : ''}`);
    this.name = 'HttpError';
    this.status = status;
  }
}

/**
 * Fetches `url` and parses the body as JSON of type `T`.
 *
 * The parsed value is asserted, not validated, to have type `T`. Throws
 * `HttpError` when the response status is not OK.
 */
export const fetchJson = async <T>(
  url: string,
  signal?: AbortSignal,
): Promise<T> => {
  const response = await fetch(url, { signal });
  if (!response.ok) {
    throw new HttpError(response.status, response.statusText);
  }
  return (await response.json()) as T;
};
