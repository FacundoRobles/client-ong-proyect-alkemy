export default async () => {
    const response = await fetch('i18n');
    return response.json();
};
