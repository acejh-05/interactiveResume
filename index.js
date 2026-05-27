const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const startGame = document.querySelector('#startGame')
const modal = document.querySelector('#modal')

let parsedCollisions
let collisionBlocks
let background
let doors
let npcs

const player = new Player({
    imageSrc: './img/spaceGuy/idleR.PNG',
    frameRate: 3,
    animations: {
        idleR: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/spaceGuy/idleR.PNG',
        },
        idleL: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/spaceGuy/idleL.PNG',
        },
        walkR: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/spaceGuy/walkR.PNG',
        },
        walkL: {
            frameRate: 4,
            frameBuffer: 10,
            loop: true,
            imageSrc: './img/spaceGuy/walkL.PNG',
        },
        enterDoor: {
            frameRate: 6,
            frameBuffer: 5,
            loop: false,
            imageSrc: './img/spaceGuy/enterDoor.PNG',
            onComplete: () => {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        level++
                        //looping level back to 1 from 4 (covering bases)
                        if (level === 5) level = 1
                        levels[level].init()
                        player.switchSprite('idleR')
                        player.preventInput = false
                        gsap.to(overlay, {
                            opacity: 0
                        })
                    }
                })
            },
        },
    }
})

let level = 1
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 150
            player.position.y = 340

            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel1.PNG',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 712, 
                        y: 320,
                    },
                    imageSrc: './img/outsideDoor.PNG',
                    frameRate: 4,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]

            npcs = [
                new Npc({
                    position: {
                        x: 500,
                        y: 355,
                    },
                    imageSrc: './img/npcs/1L.PNG',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    autoplay: true,
                    text: 'Welcome to my playable resume! My name is Acen Hite and I am a game designer' + 
                    ' and full-stack software developer studying at Bridgewater College. I built this resume using just' +
                    ' HTML, Tailwind CSS, and JavaScript! If you would like to view and download my resume, you can by clicking the button in the top right corner.' + 
                    ' You can also access my portfolio and get in contact with me using those buttons. Thank you, and enjoy playing my resume! Press R to return.',
                    id: 1,
                })
            ]

        }
    },

    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 96
            player.position.y = 140

            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel2.PNG',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 784, 
                        y: 64,
                    },
                    imageSrc: './img/insideDoor.PNG',
                    frameRate: 4,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]

            npcs = [
                new Npc({
                    position: {
                        x: 120,
                        y: 420,
                    },
                    imageSrc: './img/npcs/2R.PNG',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    autoplay: true,
                    text: 'I am currently attending Bridgewater College and am expected to graduate May 2027.' +
                    ' Here, I am studying full-stack software development and game design and have a GPA of 3.97.' +
                    ' From August 2023 to December 2025, I studied Computer Science at Blue Ridge Community College and earned' +
                    ' my Associates of Science with a GPA of 3.8. Press R to return.',
                    id: 2,
                }),

                new Npc({
                    position: {
                        x: 800,
                        y: 420,
                    },
                    imageSrc: './img/npcs/3L.PNG',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    autoplay: true,
                    text: 'Currently, I am working at Juiceworks3D Innovation Academy in Harrisonburg, VA as a Game Design Coach training kids ages 8+' +
                    ' to build their own video games using Construct 3. I have been here since February of 2026. I am also currently working' +
                    ' as a line cook at The Cracked Pillar in Bridgewater, VA and have been since August 2025. From January 2024 to July 2025, I worked' +
                    ' as a line cook at Byers Street Bistro in Staunton, VA, and from October 2021 to December 2023 I worked as a food service worker at' +
                    ' Ciros Pizza in Verona, VA. Press R to return.',
                    id: 3
                })
            ]
        }
    },

    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 100
            player.position.y = 400

            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel3.PNG',
            })

            doors = [
                new Sprite({
                    position: {
                        x: 256, 
                        y: 64,
                    },
                    imageSrc: './img/insideDoor.PNG',
                    frameRate: 4,
                    frameBuffer: 5,
                    loop: false,
                    autoplay: false,
                })
            ]

            npcs = [
                new Npc({
                    position: {
                        x: 820,
                        y: 427,
                    },
                    imageSrc: './img/npcs/4L.PNG',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    autoplay: true,
                    text: 'My skills include:' +
                    ' Languages: JavaScript, GDScript, Python, Java \n' +
                    ' Frameworks: HTML, CSS, VueJS, TailwindCSS \n' +
                    ' Engines: Unreal Engine 5, Godot, Construct 3, HTML Canvas with JS  \n' +
                    ' Tools: VSCode, Tiled, Aesprite \n' +
                    ' Press R to return.',
                    id: 4,
                }),

                new Npc({
                    position: {
                        x: 515,
                        y: 102,
                    },
                    imageSrc: './img/npcs/5R.PNG',
                    frameRate: 4,
                    frameBuffer: 10,
                    loop: true,
                    autoplay: true,
                    text: 'I am a member of Alpha Chi Omega at Bridgewater College, a member of Phi Theta Kappa at Blue Ridge Community College,' +
                    ' the piccolo section leader of the Bridgewater College Screamin Eagles Marching Band since 2025, have been on the Deans List' +
                    ' Fall 2023 to Spring 2026, The Presidents List (?), and am a Certified AWS Cloud Practitioner as of May 2025. Press R to return.',
                    id: 5,
                })
            ]
        }
    },

    4: {
        init: () => {
            parsedCollisions = collisionsLevel4.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            player.position.x = 96
            player.position.y = 410

            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0,
                },
                imageSrc: './img/backgroundLevel4.PNG',
            })

            doors = []

            npcs = [
                new Npc({
                    position: {
                        x: 525,
                        y: 330,
                    },
                    imageSrc: './img/npcs/6L.PNG',
                    frameRate: 4,
                    frameBuffer: 20,
                    loop: true,
                    autoplay: true,
                    text: 'Thank you for checking my resume out! You can view my socials at the computer and of course' + 
                    ' the buttons up top still work! Please consider reaching out if you liked what you saw c:' ,
                    id: 6,
                })
            ]
        }
    },
}

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    e: {
        pressed: false,
    },
}

const overlay = {
    opacity: 0,
}

function animate() {
    window.requestAnimationFrame(animate)

    background.draw()

    //visual collision blocks
    //collisionBlocks.forEach(collisionBlock => { collisionBlock.draw() })

    doors.forEach((door) => {
        door.draw()
    })

    npcs.forEach((npc) => {
        npc.draw()
    })

    player.handleInput(keys)
    player.draw()
    player.update()
    
    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.restore()
}

levels[level].init()
animate()
player.preventInput = true

startGame.addEventListener('click', () => {
    modal.style.display = 'none'
    player.preventInput = false;
})