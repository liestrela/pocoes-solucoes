const BASE_URL = 'http://localhost:3001/api'

function getToken() {
  return sessionStorage.getItem('admin_token')
}

function authHeader() {
  const token = getToken()
  return token ? { Authorization: `Bearer ${token}` } : {}
}

export function isAuthenticated() {
  return !!getToken()
}

export async function login(password) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  })
  if (!response.ok) throw new Error('Senha incorreta')
  const { token } = await response.json()
  sessionStorage.setItem('admin_token', token)
}

export function logout() {
  const token = getToken()
  sessionStorage.removeItem('admin_token')
  if (token) {
    fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }).catch(() => {})
  }
}

export async function getPotions() {
  const response = await fetch(`${BASE_URL}/potions`)
  if (!response.ok) throw new Error('Server error')
  return await response.json()
}

export async function createPotion(data) {
  const response = await fetch(`${BASE_URL}/potions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(data),
  })
  if (!response.ok) throw new Error('Failed to create potion')
  return await response.json()
}

export async function deletePotion(id) {
  const response = await fetch(`${BASE_URL}/potions/${id}`, {
    method: 'DELETE',
    headers: authHeader(),
  })
  if (!response.ok) throw new Error('Failed to delete potion')
}
