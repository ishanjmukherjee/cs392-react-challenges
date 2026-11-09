import { useEffect, useState } from 'react';
import { fetchJson } from '../services/fetchJson';

interface QueryResult<T> {
  url: string;
  data?: T;
  error?: Error;
}

/**
 * Fetches JSON from `url` when the component mounts or `url` changes.
 *
 * Loading is derived from whether the stored result belongs to the current
 * `url`, so the effect only sets state from the asynchronous callback.
 */
export const useJsonQuery = <T>(url: string) => {
  const [result, setResult] = useState<QueryResult<T>>();

  useEffect(() => {
    const controller = new AbortController();

    const load = async () => {
      try {
        const data = await fetchJson<T>(url, controller.signal);
        setResult({ url, data });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error(`Failed to fetch ${url}`, error);
        setResult({
          url,
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    };

    void load();
    return () => controller.abort();
  }, [url]);

  const isCurrent = result?.url === url;
  return {
    data: isCurrent ? result.data : undefined,
    isLoading: !isCurrent,
    error: isCurrent ? result.error : undefined,
  };
};
