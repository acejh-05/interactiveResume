class Npc extends Sprite {
    constructor({ position, imageSrc, frameRate, frameBuffer, loop, autoplay, text, id }) {
        super({ position, imageSrc, frameRate, frameBuffer, loop, autoplay })
        this.text = text
        this.id = id
    }
}