export default async function getData() {
  const res = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
  if (!res.ok) {
    throw new Error('Error de solicitud')
  }
  const data = await res.json()
  return data
}
