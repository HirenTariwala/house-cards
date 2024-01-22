export async function getHousesData() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL as string);

  return await res.json();
}
