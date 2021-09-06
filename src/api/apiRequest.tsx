export const API_URL = "http://localhost:5000";

export const COMMON_FETCH_OPTIONS = {
    headers: {
        Accept: "application/json, *.*",
        "Content-Type": "application/json; charset=utf-8",
    },
};

type Request = {
    path: string;
    method: "POST" | "GET" | "PUT" | "DELETE";
    body?: Record<string, unknown>;
};

const apiRequestBase = async ({ path, method, ...config }: Request) => {
    const response = await fetch(`${API_URL}/${path}`, {
        ...COMMON_FETCH_OPTIONS,
        method,
        body: config.body ? JSON.stringify(config.body) : undefined,
    });

    if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}, ${response.url}`);
    }

    let data;

    try {
        data = await response.json();
    } catch (e) {
        data = null;
    }

    if (response.status === 500) {
        console.warn(response);
        return { response, parsedBody: null };
    }

    return {
        response,
        data,
    };
};

export const apiRequest = async (params: Request) => {
    const { data } = await apiRequestBase(params);
    return data;
};
