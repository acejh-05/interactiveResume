class Object extends Sprite {
    constructor({ position, imageSrc, frameRate, frameBuffer, loop, autoplay, text, id }) {
        super({ position, imageSrc, frameRate, frameBuffer, loop, autoplay })
        this.id = id
    }
}