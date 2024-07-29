export async function getJsonData() {
  try {
    const response = await fetch("../../data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching JSON:", error);
  }
}