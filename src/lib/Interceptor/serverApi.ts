import { cookies } from "next/headers";

const fetchApi = async <T = unknown>( url: string, options: Omit<RequestInit, "body"> & { body?: object } = {} )
  : Promise<T> => {
  // Get token from server storage
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  const tokenValue = token?.value as string;

  // send token and other headers to all Apis
  const headers: HeadersInit = {
    "Content-Type": "application/json",
    ...(tokenValue && {
      Authorization: `Bearer ${tokenValue}`,
    }),
    ...options.headers,
  };
  
  // conect all of that and make JSON.stringify
  const config: RequestInit = {
    ...options,
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  };

  // the Api call
  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_API_URL + url,
    config
  );

  // handle Errors
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized!");
    }
    if (response.status === 500) {
      throw new Error("Server Error!");
    }
    if (response.status === 403) {
      throw new Error("we dont have token!");
    }
    throw new Error("Request failed");
  }

  // return response to user
  return response.json() as Promise<T>;
};

export default fetchApi;