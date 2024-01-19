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

# 2. Alkalom

1. Egyszerűsítsd a változóidat. Sok val -> const object, jellemzők szerint (kör, negyzet, koordinatak)
2. Amit kétszer leírsz és érték, az változóba megy, és ami kód, az funkcióba
3. Komplex kondíciókra lásd a példát
4. Kondíciókban: negálás != egyezés ===

# Referenciák

Gombnyomogatás:

https://p5js.org/reference/#/p5/keyPressed funkció

https://p5js.org/reference/#/p5/keyCode

Példa:

```
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    dimensions.x = dimensions.x - size
  } else if (keyCode === RIGHT_ARROW) {
    dimensions.x = dimensions.x + size
  }
}
```

Javascript adatstruktúrák, az object:

https://www.w3schools.com/js/js_objects.asp

Komplex feltételek:

https://bobbyhadz.com/blog/javascript-specify-multiple-conditions-in-if-statement

Funkciók paraméterekkel:

https://www.w3schools.com/js/js_function_parameters.asp

