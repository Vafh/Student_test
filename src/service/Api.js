const BASE_URLL = "https://test-task-j.herokuapp.com/data";

export async function fetchData(page, size) {
  const res = await fetch(`${BASE_URLL}?page=${page}&size=${size}`);
  return res.ok ? await res.json() : Promise.reject(new Error("Error"));
}
export async function fetchSearch(page, size, search) {
  if (search === "") return;
  const res = await fetch(
    `${BASE_URLL}?page=${page}&size=${size}&search=${search}`
  );
  return res.ok ? await res.json() : Promise.reject(new Error("Error"));
}
