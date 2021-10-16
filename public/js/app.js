const playVideo = (name) => {
    console.log(name);
    const player = document.getElementById('video_container');
    player.setAttribute('src', `http://localhost:5050/${name}`);
}