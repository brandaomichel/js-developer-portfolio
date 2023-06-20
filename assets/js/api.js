
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/brandaomichel/js-developer-portfolio-mbr/main/data/profile.json';
    const profileData = await response.json()
    return profileData
}
