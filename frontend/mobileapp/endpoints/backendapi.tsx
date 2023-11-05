//Add function here that reads in and returns split up wiki data
export const getWikiBlocks = async (item: string, blocksize: string) => {
    try {
        const response = await fetch("http://10.0.2.2:4042/textGen/?title=" + item + "&blocksize=" + blocksize);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("An error occured:", error);
    }
}