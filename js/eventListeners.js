

let interactedWith = []
let score = 0

window.addEventListener('keydown', (event) => {
    if (player.preventInput) return
    switch (event.key) {
        case 'w':
            if (player.velocity.y === 0) player.velocity.y = -22
            break
        case 'a':
            keys.a.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
        case 'e':
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i]
                if (
                    player.hitBox.position.x + player.hitBox.width <= door.position.x + door.width &&
                    player.hitBox.position.x >= door.position.x &&
                    player.hitBox.position.y + player.hitBox.height >= door.position.y &&
                    player.hitBox.position.y <= door.position.y + door.height
                ) {
                player.velocity.x = 0
                player.velocity.y = 0
                player.preventInput = true
                player.switchSprite('enterDoor')
                door.play()
                return
                }
            }

            for (let j = 0; j < npcs.length; j++) {
                const npc = npcs[j]
                if (
                    player.hitBox.position.x + player.hitBox.width <= npc.position.x + npc.width &&
                    player.hitBox.position.x >= npc.position.x &&
                    player.hitBox.position.y + player.hitBox.height >= npc.position.y &&
                    player.hitBox.position.y <= npc.position.y + npc.height
                ) {
                player.velocity.x = 0
                player.velocity.y = 0
                player.preventInput = true
                player.switchSprite('idleR')
                const dialogueBox = document.querySelector('#dialogueBox')
                dialogueBox.classList.add('visible')
                document.querySelector('#dialogueBox').innerHTML = npc.text
                if (!interactedWith.includes(npc.id)) {
                    interactedWith.push(npc.id)
                    score += 1
                    document.querySelector('#numNpc').innerHTML = score
                }
                window.addEventListener('keydown', (event) => {
                    if (event.key === 'r') {
                        dialogueBox.classList.remove('visible')
                        player.preventInput = false
                    }
                })
                return
                }
            }
    }
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})