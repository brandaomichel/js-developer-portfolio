
async function fetchProfileData() {
    const url = 'https://github.com/brandaomichel/js-developer-portfolio-mbr/blob/main/data/profile.json';
    const profileData = await response.json()
    return profileData
}
