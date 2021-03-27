let 跑車 = sprites.create(img`
    . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . . . 
    5 . . . 5 5 5 a 9 9 5 . . . . . . . 
    5 5 . 5 6 b 5 a a a 9 5 5 . . . . . 
    3 3 5 6 b b 5 a a a a a 5 5 5 . . . 
    . 5 5 3 3 7 7 7 2 2 2 2 5 3 3 5 5 . 
    5 5 3 f f 3 7 7 7 7 2 2 3 f f 3 5 5 
    5 3 f a a f 3 5 7 7 7 3 f a a f 3 5 
    5 5 f a a f 5 5 5 5 5 5 f a a f 5 5 
    . . . f f . . . . . . . . f f . . . 
    . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(跑車)
跑車.startEffect(effects.warmRadial)
