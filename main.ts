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
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 7 7 7 1 1 7 7 7 7 7 1 7 5 
5 8 1 7 e e e e e e e e e e e 7 1 9 9 9 7 7 7 7 1 1 7 7 7 1 7 5 
5 8 1 7 e 1 1 1 1 1 1 1 1 1 e 7 1 9 9 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 e 1 e e e e e e e 1 e 7 1 9 9 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 9 1 7 e 1 e 7 7 7 7 7 e 1 e 7 1 9 9 7 7 7 1 1 1 1 7 7 1 1 7 5 
5 8 1 7 e 1 e 7 1 7 1 7 e 1 e 7 1 9 7 9 7 1 1 7 7 7 7 7 1 7 7 5 
5 8 1 7 e 1 e 7 7 1 7 7 e 1 e 7 1 9 7 9 7 1 1 7 7 7 7 1 1 7 7 5 
5 8 1 7 e 1 e 7 1 7 1 7 e 1 e 7 1 9 7 9 7 7 1 7 7 7 7 1 1 7 7 5 
5 9 1 7 e 1 e 7 7 1 7 7 e 1 e 7 1 9 7 9 7 7 7 1 1 7 7 7 1 7 7 5 
5 8 1 7 e 1 e 7 1 7 1 7 e 1 e 7 1 9 7 9 7 7 7 7 1 1 7 7 1 7 7 5 
5 8 1 7 e 1 e 7 7 7 7 7 e 1 e 7 1 9 7 7 9 7 7 7 7 1 7 7 1 1 7 5 
5 8 1 7 e 1 e e e e e e e 1 e 7 1 9 7 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 e 1 1 1 1 1 1 1 1 1 e 7 1 9 7 7 7 7 7 7 7 1 7 7 7 1 7 5 
5 8 1 7 e e e e e e e e e e e 7 1 9 7 1 1 1 1 1 1 1 7 7 7 1 7 5 
5 8 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 9 7 1 7 7 7 7 7 7 7 7 7 1 7 5 
5 8 1 1 1 1 1 1 7 7 7 1 1 1 1 1 1 9 7 1 1 7 7 7 7 7 7 7 7 1 7 5 
5 7 7 8 8 7 8 1 7 7 7 1 7 7 7 7 7 7 7 7 1 7 7 7 7 7 7 7 7 1 7 5 
5 7 7 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 7 1 1 1 7 7 1 1 1 1 1 7 5 
5 7 8 8 8 8 8 1 7 7 7 1 7 7 7 7 7 7 7 7 7 7 1 7 7 1 1 7 7 7 7 5 
5 7 8 7 7 7 7 1 7 7 7 1 7 7 7 1 1 7 7 7 7 7 1 7 7 7 1 7 7 7 7 5 
5 7 8 7 7 1 1 1 7 7 7 1 1 1 7 1 7 7 7 7 7 7 1 7 7 7 1 7 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 7 7 7 7 7 7 1 7 7 7 1 1 7 7 7 5 
5 7 8 7 7 1 7 7 7 7 7 7 7 1 7 1 1 1 1 1 1 1 1 7 7 7 7 1 7 7 7 5 
5 7 8 7 7 1 1 1 1 1 7 7 7 1 1 1 1 7 7 7 7 7 7 7 7 7 7 1 1 7 7 5 
5 7 8 7 7 7 7 7 7 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 7 7 5 
5 7 8 8 7 7 7 7 7 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 1 1 1 7 7 5 
5 7 7 8 8 8 8 7 7 7 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 7 7 7 7 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`)
// When turns on. player can not move to this color.
// There is a color texture to add to orange
scene.setTile(1, img`
1 1 9 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 1 1 1 1 1 1 1 1 
1 9 1 1 9 9 6 1 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 6 1 1 1 1 1 1 1 
1 9 1 9 1 1 6 6 1 1 3 3 3 1 1 1 1 1 1 6 6 6 6 6 6 6 6 6 1 1 1 8 
1 1 9 1 1 6 6 3 3 3 1 5 5 3 1 1 1 3 6 6 3 c 6 9 7 7 7 7 7 7 7 1 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 e e e 1 1 1 7 8 
1 2 9 1 1 3 2 6 5 1 1 1 1 3 6 7 7 7 7 6 7 7 7 9 7 1 1 1 1 1 7 1 
2 1 6 6 6 3 6 6 6 6 6 6 6 3 6 1 5 1 f 6 4 c 1 9 1 1 1 1 1 1 7 1 
6 6 d 1 6 3 5 5 6 1 7 3 1 3 1 e 5 1 f 6 7 c 1 1 9 1 1 1 1 8 7 1 
2 1 d 1 6 5 2 3 6 1 3 7 4 3 e 1 5 1 f 4 4 3 c 1 1 9 9 9 9 9 9 9 
2 1 d 1 6 5 2 1 6 5 3 4 7 3 4 4 1 5 5 5 5 5 5 3 3 1 1 7 9 9 9 1 
2 1 d 6 3 5 9 9 4 4 5 3 1 3 7 7 7 4 1 1 4 f 1 5 8 8 8 7 1 9 1 1 
2 1 d 6 5 1 1 4 9 9 2 3 3 3 1 a 3 7 7 4 7 8 8 8 c 1 7 3 1 1 9 1 
2 1 d 6 5 1 6 6 6 1 9 9 2 3 3 3 a 1 8 8 8 7 1 1 f 7 7 5 1 1 1 9 
2 1 d 6 5 6 6 6 6 6 5 1 9 3 3 3 8 8 1 . . . 7 7 7 f 7 7 7 7 1 9 
2 2 d 5 . 6 1 . . . 6 4 3 4 4 4 3 3 . 1 1 1 6 4 7 7 5 . 7 1 1 9 
1 1 2 2 2 2 1 1 1 1 4 3 1 8 1 9 4 . 3 3 3 6 7 7 4 5 7 7 . . 1 9 
7 1 . 5 6 1 2 2 2 4 3 1 1 1 1 6 4 6 6 6 7 3 3 3 5 c 7 1 6 6 . 1 
7 1 . 5 1 6 2 2 4 3 9 f f f a 1 4 7 7 7 2 2 5 5 3 3 4 7 7 7 6 . 
7 1 f 5 2 2 6 4 3 1 f 1 4 1 1 8 4 7 7 9 5 5 c 3 3 a 3 4 1 7 7 6 
1 7 f f 1 9 4 3 6 f 1 4 8 1 1 1 4 1 1 1 3 3 3 4 4 a a 1 7 1 1 1 
1 1 7 7 f f 3 1 1 6 8 8 1 1 1 a 5 4 3 3 4 4 9 7 a 7 a 1 7 1 1 1 
1 1 e 5 7 f 3 2 2 8 2 2 2 2 2 2 3 3 2 2 1 c 7 a 7 7 2 7 1 1 1 1 
1 e 7 7 f 3 4 6 8 b b b 5 5 6 3 7 7 7 7 7 7 1 1 9 9 2 7 1 1 1 1 
7 7 1 5 1 3 4 8 b 5 5 5 6 6 f f 3 a 1 2 1 c c 1 1 1 1 7 a 1 1 1 
1 7 1 d 1 3 6 b b 6 e e e e e 1 f 3 a a 7 1 1 c 1 1 1 7 1 a 1 1 
7 7 1 d 8 3 e e e e 4 1 5 e 5 5 2 2 3 3 a 7 7 7 7 1 1 7 1 1 a 1 
1 7 1 3 3 e e 1 1 e e e 2 e 2 2 1 1 1 1 3 3 3 1 c 7 7 7 7 7 1 a 
7 7 3 1 e 1 1 1 1 2 a a e e e 9 9 e e 1 1 1 f 3 3 1 1 7 1 a a 1 
7 f 1 1 1 1 1 2 2 a a 1 9 9 9 9 9 e e e e e e e 1 3 3 7 1 1 a 1 
1 7 7 7 7 9 a a a a a a a a a a a a a a a a a e e e e 3 7 e e a 
a f 1 2 2 a 1 1 6 6 6 6 1 1 1 a a 1 1 1 1 9 9 a 9 3 3 1 1 7 1 1 
1 a a 1 1 1 1 1 1 1 1 1 1 a a 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 1 
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
6 6 8 6 6 8 8 8 6 9 6 6 1 1 1 6 
6 8 6 6 8 8 6 8 8 9 6 6 1 8 8 6 
8 8 8 8 8 9 6 6 9 6 8 8 1 6 8 8 
6 8 8 6 9 9 9 6 6 9 9 9 6 1 9 6 
6 9 8 8 9 6 9 6 6 9 9 9 9 1 6 6 
6 9 9 8 8 6 6 9 9 9 6 6 6 6 1 6 
6 1 1 1 8 1 1 9 9 1 1 1 1 6 6 1 
1 1 6 8 8 8 1 9 1 1 6 6 1 1 1 1 
6 6 6 8 8 8 9 6 8 8 8 6 6 8 1 6 
8 8 8 8 6 9 9 9 8 6 8 8 8 1 1 6 
9 8 8 9 8 8 6 9 9 6 6 6 9 9 1 6 
9 9 9 6 8 8 6 6 9 9 9 9 9 6 1 9 
6 6 1 1 8 6 6 1 9 9 6 6 6 1 1 6 
1 1 1 8 1 1 1 9 9 6 6 1 6 1 6 6 
1 1 6 8 6 1 1 9 9 1 1 1 1 1 1 6 
6 6 6 6 6 6 6 6 9 6 6 6 6 6 1 1 
`, true)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . 
. . . . 8 8 5 5 5 5 5 5 5 8 8 . . . . . . . . . . . . . . . . . 
. . . . 8 5 1 1 5 5 1 1 5 5 8 . . . . . . . . . . . . . . . . . 
. . . . 8 f f f f f f f f f 8 . . . . . . . . . . . . . . . . . 
. . . . f f 1 1 1 d 1 1 1 f f . . . . . . . . . . . . . . . . . 
. . . . f f 1 f 1 d 1 f 1 d f . . . . . . . . . . . . . . . . . 
. . . . f d 1 1 1 d 1 1 1 d f . . . . . . . . . . . . . . . . . 
. . . . . d f f f f f f f d . . . . . . . . . . . . . . . . . . 
. . . . . d f d 2 2 2 d f d . . . . . . . . . . . . . . . . . . 
. . . . . . d d 2 3 2 d d . . . . . . . . . . . . . . . . . . . 
. . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . 
. . . . . . d 8 8 8 8 8 d . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 f f 5 f f 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . . 8 8 8 8 8 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f . f f . . . . . . . . . . . . . . . . . . . . 
. . . . . . 1 1 1 . 1 1 1 . . . . . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . 1 1 1 1 . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
