import LoadingScene from "./scenes/LoadingScene.js";
// import MainScene from "./scenes/MainScene";
import PlayingScene from "./scenes/PlayingScene.js";
// import GameOverScene from "./scenes/GameOverScene";
// import GameClearScene from "./scenes/GameClearScene";

const Config = {
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    scene: [LoadingScene, PlayingScene],
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            // debug: process.env.DEBUG === "true"
        },
    },
};

export default Config;