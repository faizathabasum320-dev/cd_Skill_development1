const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export function getToken() {
  return localStorage.getItem("skillflow_token");
}

export function setAuth(token, user) {
  localStorage.setItem("skillflow_token", token);
  localStorage.setItem("skillflow_user", JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem("skillflow_token");
  localStorage.removeItem("skillflow_user");
}

export function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("skillflow_user") || "null");
  } catch {
    return null;
  }
}

export async function api(path, options = {}) {
  const token = getToken();

  const headers = {
    ...(options.body instanceof FormData
      ? {}
      : { "Content-Type": "application/json" }),
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 401) {
      clearAuth();
    }
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const authApi = {
  register: (payload) =>
    api("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  login: (payload) =>
    api("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  me: () => api("/auth/me"),
};

export const profileApi = {
  get: () => api("/profile"),
  update: (profile) =>
    api("/profile", {
      method: "PUT",
      body: JSON.stringify(profile),
    }),
};

export const assessmentApi = {
  questions: () => api("/assessment/questions"),
  submit: (answers) =>
    api("/assessment/submit", {
      method: "POST",
      body: JSON.stringify({ answers }),
    }),
  result: () => api("/assessment/result"),
};

export const roadmapApi = {
  get: () => api("/roadmap"),
  update: (id, completed) =>
    api(`/roadmap/${id}`, {
      method: "PUT",
      body: JSON.stringify({ completed }),
    }),
};

export const jobsApi = {
  get: (search = "") =>
    api(`/jobs${search ? `?search=${encodeURIComponent(search)}` : ""}`),
};

export const progressApi = {
  get: () => api("/progress"),
};

export const settingsApi = {
  get: () => api("/settings"),
  update: (settings) =>
    api("/settings", {
      method: "PUT",
      body: JSON.stringify(settings),
    }),
};