
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/brandaomichel/js-developer-portfolio/main/data/profile.json';
    const profileData = await response.json()
    return profileData
}
