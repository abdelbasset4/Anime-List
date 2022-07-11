const jikanjs = jikanjs.settings.setBaseURL("apiurl");
async function getTopAnime() {
    let response = await jikanjs.loadCharacter(118737);
    console.log(response);
}
getTopAnime();

//# sourceMappingURL=index.de158e3a.js.map
