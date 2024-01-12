# Választott Project feladat

Név:Boxerman

Kategória: Játék

Rövid leírás:Tologatni kell a dobozokat, mindet a kijelölt helyére

Lsd: https://www.youtube.com/watch?v=xvu6r5_4_T4

Nehézség: Könnyű

# Javasolt lépések az első alkalom után

1. Hozz létre egy felületet, üres (vagy valami színes) háttérrel
2. Hozz létre egy tologató emberkét, aki gombnyomásra megy faltól-falig
3. Hozz létre 1 dobozt, amit az emberke "tologat"

# Referenciák

Gombnyomogatás:
https://p5js.org/reference/#/p5/keyPressed funkció
https://p5js.org/reference/#/p5/keyCode

Példa:
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    dimensions.x = dimensions.x - size
  } else if (keyCode === RIGHT_ARROW) {
    dimensions.x = dimensions.x + size
  }
}
