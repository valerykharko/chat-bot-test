import axios from 'axios'

const authBackendUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8080'

export async function signInRequest(email: string, password: string) {
  return await axios.post(`${authBackendUrl}/api/auth/signIn`, {
    email,
    password,
  })
}

export async function signUpRequest(
  name: string,
  companyName: string,
  email: string,
  password: string
) {
  return await axios.post(`${authBackendUrl}/api/auth/signUp`, {
    name,
    companyName,
    email,
    password,
  })
}
