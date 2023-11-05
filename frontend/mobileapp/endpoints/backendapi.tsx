//Add function here that reads in and returns split up wiki data
export const getWikiBlocks = async (item: string) => {
    try {
        const response = await fetch("https://localhost:8000/" + item);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("An error occured:", error);
    }
}