import axios from "axios";
import { Ref, UnwrapRef } from "vue";
import { useLocalState } from "@/helpers";

interface RequestParams {
  url: string;
  method?: RequestMethods;
  body?: object;
  headers?: object;
}

export enum RequestMethods {
  Head = "head",
  Options = "options",
  Put = "put",
  Post = "post",
  Patch = "patch",
  Delete = "delete",
  Get = "get",
}

export const useAxios = async ({
  url,
  method = RequestMethods.Get,
  body,
  headers,
}: RequestParams): Promise<{
  response: Ref<UnwrapRef<any>>;
  error: Ref<UnwrapRef<string>>;
  loading: Ref<UnwrapRef<boolean>>;
}> => {
  const [response, setResponse] = useLocalState(undefined);
  const [error, setError] = useLocalState("");
  const [loading, setLoading] = useLocalState(true);

  try {
    const result = await axios[method](url, body, headers);
    setResponse(result.data);
  } catch (error: any) {
    setError(error);
  } finally {
    setLoading(false);
  }

  return { response, error, loading };
};
