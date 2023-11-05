import Constants from 'expo-constants';

const getSearchResults = async (search: string) => {
    try {
        const response = await fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=" + search + "&limit=15&format=json" );
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("An error occured:", error);
    }
}

export default getSearchResults;