sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    for (let index = 0; index < 4; index++) {
        otherSprite.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    }
    info.startCountdown(20)
})
let mySprite2: Sprite = null
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 7 7 7 7 1 7 7 7 7 1 1 1 7 7 5 
5 8 1 1 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 7 7 1 1 7 7 7 7 7 1 1 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 1 9 9 7 7 7 7 1 1 7 7 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 9 9 7 7 7 7 1 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 f f f 7 7 7 7 7 1 9 9 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 f 1 1 1 f 7 7 7 7 1 9 9 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 9 1 7 7 7 7 7 f f f 7 7 7 7 7 1 9 9 7 7 7 1 1 1 1 7 7 1 1 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 1 1 7 7 7 7 7 1 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 1 1 7 7 7 7 1 1 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 1 7 7 7 7 1 1 7 7 5 
5 9 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 1 1 7 7 7 1 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 7 1 1 7 7 1 7 7 5 
5 8 1 7 7 7 7 7 f 7 f 7 7 7 7 7 1 9 7 7 9 7 7 7 7 1 7 7 1 1 7 5 
5 8 1 7 7 7 7 f 7 7 7 f 7 7 7 7 1 9 7 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 1 1 1 1 1 1 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 1 7 7 7 7 7 7 7 7 7 1 7 5 
5 8 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 9 7 1 1 7 7 7 7 7 7 7 7 1 7 5 
5 7 7 8 8 7 8 1 7 7 7 1 7 7 7 7 7 7 7 7 1 7 7 7 7 7 7 7 7 1 7 5 
5 7 7 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 7 1 1 1 7 7 1 1 1 1 1 7 5 
5 7 8 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 7 7 7 1 7 7 1 1 7 7 7 7 5 
5 7 8 7 7 7 7 1 7 7 7 1 7 7 7 1 1 7 7 7 7 7 1 7 7 7 1 7 7 7 7 5 
5 7 8 7 7 1 1 1 7 7 7 1 1 1 7 1 7 7 7 7 7 7 1 7 7 7 1 7 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 7 7 7 7 7 7 1 7 7 7 1 1 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 1 1 1 1 1 1 1 7 7 7 7 1 7 7 7 5 
5 7 8 7 7 1 1 1 1 1 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 7 7 1 1 7 7 5 
5 7 8 7 7 7 7 7 7 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 5 
5 7 8 8 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 7 7 5 
5 7 7 8 8 8 8 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
// When turns on. player can not move to this color.
// There is a color texture to add to orange
scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 2 2 2 5 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 4 4 1 1 1 1 1 1 1 
1 1 1 1 1 2 2 1 1 1 1 1 1 a a 1 1 1 1 1 1 4 4 4 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 2 5 1 1 1 1 1 a 1 1 1 1 1 1 4 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 2 5 1 1 1 1 1 a 1 1 1 1 1 4 7 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 3 2 3 5 1 1 1 1 a a 1 1 1 3 4 4 3 3 1 1 1 1 1 1 1 1 1 
1 1 1 1 3 3 2 1 5 5 1 1 1 1 a 1 1 1 3 1 4 1 3 3 3 1 1 1 1 1 1 1 
1 1 1 1 3 1 2 2 1 1 5 3 1 1 a a 1 3 1 1 4 1 1 1 3 3 3 3 1 1 1 1 
1 1 1 3 3 1 1 1 2 2 2 3 3 1 1 a 3 3 1 4 7 7 1 1 1 1 1 3 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 5 2 2 3 3 3 a 1 4 1 1 7 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 5 1 2 2 1 1 a 4 1 1 1 7 7 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 5 1 1 1 2 1 1 4 1 1 1 1 1 7 7 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 5 5 1 1 1 1 2 1 4 1 1 1 1 1 1 1 7 7 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 5 1 1 1 1 1 2 4 2 1 1 1 1 1 1 1 1 7 9 9 1 1 1 1 1 
1 1 1 1 1 1 9 9 9 9 9 9 4 4 a 1 2 2 2 2 2 2 1 9 9 1 1 9 9 1 1 1 
1 1 1 1 1 9 9 5 5 1 1 1 4 9 a a 1 1 1 1 1 1 2 9 7 1 1 1 1 1 1 1 
1 1 1 1 1 9 1 1 5 5 1 4 4 1 9 a 9 1 1 1 9 9 1 2 7 1 1 1 1 1 1 1 
1 1 1 9 9 1 1 1 1 5 5 4 1 1 1 a 1 9 9 9 1 1 1 7 2 2 1 1 1 1 1 1 
1 1 1 9 1 1 1 1 1 1 4 5 1 1 1 a a 1 1 1 1 1 1 7 1 2 2 1 1 1 1 1 
1 1 1 9 1 1 1 1 1 1 4 5 1 1 1 1 a 1 1 1 1 1 1 1 7 1 2 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 4 5 1 1 1 1 a a 1 1 1 1 1 1 1 1 1 2 1 1 1 1 
1 1 1 1 1 1 1 1 1 5 4 1 1 1 1 1 1 a 1 1 1 1 1 1 1 1 1 2 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 4 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
scene.setTile(15, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, true)
scene.setTile(6, img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 9 6 6 6 6 9 6 6 6 6 6 
6 6 6 6 9 9 9 6 6 6 9 9 6 6 9 6 
6 9 6 6 9 6 9 6 6 9 9 9 9 9 6 6 
6 9 9 9 9 6 6 9 9 9 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 8 8 6 6 6 8 6 6 6 6 8 6 
6 6 6 6 8 8 6 6 8 8 8 6 6 8 8 6 
8 8 8 8 6 6 8 6 8 6 8 8 8 8 6 6 
6 8 8 6 6 6 6 8 8 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 1 6 6 6 1 6 6 6 6 6 6 6 6 
1 1 1 6 1 1 1 1 1 6 6 1 6 6 6 6 
1 1 6 6 6 1 1 6 1 1 1 1 1 1 1 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 . 3 3 . . . . . . 
. . . 3 3 3 3 3 3 . 3 . . . . . 
. . 3 3 3 3 3 3 3 3 3 . . . . . 
. . 3 3 3 f f f f f 1 1 . . . . 
. . 3 3 1 f f f f f f f 1 . . . 
. . 3 3 1 d f f f 1 1 f 1 . . . 
. . 3 3 f d d f f f f f 1 1 . . 
. . 3 . . 1 d d f f f f 1 1 . . 
. . . . . . 1 d d d d 1 1 . . . 
. . . . . . . d d d d . . . . . 
. . . . . . d 8 8 8 8 8 d d . . 
. . . . . d . 8 8 8 8 8 . . . . 
. . . . . . . 8 8 8 8 8 . . . . 
. . . . . . . 8 8 8 8 8 . . . . 
. . . . . . . 8 8 1 8 8 . . . . 
`, SpriteKind.Player)
// Controls the sprite
controller.moveSprite(mySprite)
// Camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 1; index++) {
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . d d d . . . . . . 
. . . . . . d b b b . . . . . . 
. . . . . . d b d d . . . . . . 
. . . . . . b d d d . . . . . . 
. . . . . . b c d b d . . . . . 
. . . . . . c b c b d d . . . . 
. . . . . . b d b d b d . . . . 
d d b d c d b d b d c d d c d f 
c b b b b d d d d d d b d c f b 
d f b c d c f b d b d d c b . . 
. . . . b c f b d d b b d d . . 
. . . . b c f d d d d . . . . . 
. . . . b f b d d d d . . . . . 
. . . b b f d d d d d b . . . . 
. . . d c b d d d d d d . . . . 
. . . . . b d d d d d d . . . . 
. . . . . b d d b d d d . . . . 
. . . . . b d d b d d d b . . . 
. c c c c b d d b d d d d c c . 
c d d d b b d b b d d d d b d c 
b d d b d b d b b d d b d b d b 
b d d b d d d b b d d b b b d b 
b d d d b d d b b d d b b d d b 
b d d d d b b b b b b b b d d b 
b d d d d d b b b b b d d d d b 
c d d d d d d d d d d d d d d c 
b c c d d d d d d d d d d c c b 
d b b b b b b b b b b b b b b d 
d b b b b c c c c c c b b b b d 
c b b b b b b b b b b b b b b c 
f c c c c c c c c c c c c c c f 
`, SpriteKind.Food)
    mySprite.setPosition(Math.randomRange(32, 380), Math.randomRange(100, 380))
    mySprite2.z = 1
}
info.startCountdown(20)
