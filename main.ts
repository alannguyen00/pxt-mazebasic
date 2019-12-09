sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite2.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
    mySprite2.destroy()
})
let mySprite2: Sprite = null
scene.setTileMap(img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 7 7 9 9 9 9 9 9 9 9 9 9 9 9 9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 1 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 1 9 9 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 9 9 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 f f f 7 7 7 7 7 1 9 9 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 f 1 1 1 f 7 7 7 7 1 9 9 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 9 1 7 7 7 7 7 f f f 7 7 7 7 7 1 9 9 7 7 7 7 7 1 1 1 1 1 1 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 1 1 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 7 7 7 7 7 7 7 7 5 
5 9 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 f 7 7 7 7 7 7 1 9 7 9 7 1 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 f 7 f 7 7 7 7 7 1 9 7 7 9 1 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 f 7 7 7 f 7 7 7 7 1 9 7 7 9 7 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 9 7 7 1 1 1 1 1 1 7 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 7 1 7 7 7 7 7 7 7 7 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 1 1 1 7 7 7 7 1 1 1 7 7 5 
5 8 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 9 7 1 7 7 7 7 7 7 1 6 6 6 7 5 
5 7 7 8 8 7 8 1 7 7 7 1 7 7 7 7 7 7 7 1 7 7 7 7 7 7 1 6 6 6 7 5 
5 7 7 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 1 1 1 7 7 7 7 1 6 6 6 7 5 
5 7 8 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 7 7 1 7 7 7 7 1 6 6 6 7 5 
5 7 8 7 7 7 7 1 7 7 7 1 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 7 5 
5 7 8 7 7 1 1 1 7 7 7 1 1 1 7 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 7 7 7 7 7 7 7 7 7 3 7 7 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 7 7 7 1 1 1 1 1 3 3 1 1 6 7 7 5 
5 7 8 7 7 1 1 1 1 1 7 7 7 1 1 1 7 7 7 1 7 1 7 7 7 6 6 6 6 7 7 5 
5 7 8 7 7 7 7 7 7 1 7 7 7 7 7 7 7 7 7 1 7 1 7 7 7 7 6 7 6 6 7 5 
5 7 8 8 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 1 7 1 7 7 7 7 6 6 6 6 7 5 
5 7 7 8 8 8 8 7 7 7 1 1 1 1 1 1 1 1 1 1 7 1 7 7 7 1 7 6 6 6 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
// When turns on. player can not move to this color.
// There is a color texture to add to orange
scene.setTile(5, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 f f 5 f f 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 f f f f f f f f f f f f 5 5 5 5 5 5 f 5 5 5 5 5 
5 5 5 5 5 5 5 f 5 5 5 5 5 f f 5 5 5 5 f f 5 5 5 5 5 f 5 5 5 5 5 
5 5 5 5 5 5 5 f 5 5 5 5 5 f f 5 5 5 5 5 f 5 5 5 5 5 5 f f 5 5 5 
5 5 5 5 5 5 5 5 f 5 5 5 5 f f 5 5 5 5 5 f f 5 5 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 f 5 5 5 5 5 f f 5 5 5 5 5 f 5 5 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 f f 5 5 5 5 f f 5 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 f f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 f f f 5 5 5 f f 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 f f 5 5 5 f f 5 5 5 5 f 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 5 5 f f 5 5 5 5 f f 5 5 f f 5 5 5 
5 5 5 5 5 5 f f f f f f f f f 5 5 5 f f 5 5 5 5 f f 5 5 f f 5 5 
5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 f 5 5 5 f 5 5 
5 5 5 5 f 5 5 f f f f f f f f f 5 5 5 5 f 5 5 5 5 5 f 5 5 5 f 5 
5 5 5 5 f 5 f 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 f 5 f 5 5 5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f 5 5 f 5 
5 5 5 5 f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5 5 5 5 5 5 5 5 f 5 5 f 5 
5 5 5 5 f f f f 5 5 5 5 5 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 5 5 f 5 
5 5 5 5 5 f 5 f f 5 5 5 5 5 5 5 5 f 5 5 5 5 f 5 5 5 5 f 5 5 f 5 
5 5 5 5 5 5 f 5 f f 5 5 5 5 5 5 f f 5 5 5 5 f 5 5 5 5 5 5 5 f 5 
5 5 5 5 5 5 f f 5 f f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 5 5 5 f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 5 5 5 5 f f f f f f f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f 5 5 5 5 f f f f f f f f f 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f f f f f f 5 5 5 5 5 5 5 5 5 
`, true)
scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 f f f f f f f f f 1 1 1 1 
1 1 1 f 7 7 7 7 7 7 7 f f 1 1 1 
1 1 1 f 7 d d d d d d d f f 1 1 
1 1 1 f f d d d d d f d d f f 1 
1 1 1 1 f d d d d d d d d d f 1 
1 1 1 1 1 f d d d d f f f f f 1 
1 1 1 1 1 f f d d d f 1 1 1 1 1 
1 1 1 1 1 1 f f f f f 1 1 1 1 1 
1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 
1 1 1 1 1 1 a a a a d d d 1 1 1 
1 1 1 1 1 a a a f 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 a a a 1 1 1 1 1 1 
1 1 1 1 1 1 1 a 1 a d 1 1 1 1 1 
1 1 1 1 1 1 1 a 1 a d d 1 1 1 1 
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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . 1 d d d d d 1 1 . . . . 
. . . . 1 d d d d d d 1 1 . . . 
. . . . 1 d d d d f d d 1 . . . 
. . . . 1 1 d d f d d d 1 1 . . 
. . . . . 1 1 d f f f f 1 1 . . 
. . . . . . 1 d d d d 1 1 . . . 
. . . . . . . 1 1 1 1 . . . . . 
. . . . . . 1 9 9 1 1 1 1 1 . . 
. . . . . 1 . 1 9 1 1 1 . . . . 
. . . . . . . 1 9 9 9 1 . . . . 
. . . . . . . 1 9 1 9 1 . . . . 
. . . . . . . 1 9 1 1 1 . . . . 
`, SpriteKind.Player)
// Controls the sprite
controller.moveSprite(mySprite)
// Camera follows sprite throughout game
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 6; index++) {
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
    mySprite.setPosition(Math.randomRange(0, 512), Math.randomRange(0, 512))
}
info.startCountdown(30)
