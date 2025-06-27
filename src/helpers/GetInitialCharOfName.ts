export function getInitialCharOfName(nomeUser: string): string {
  if(!nomeUser) return ''
  const parts = nomeUser.trim().split(' ')
  const initials = parts.map(part => part.charAt(0).toUpperCase())
  return initials.slice(0, 2).join('')
}
