export default function generateApiUrl(currentApiSuffix: string){
    return `${import.meta.env.SERVER_URL}${currentApiSuffix}`;
}