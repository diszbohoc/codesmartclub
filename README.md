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

# 3. alkalom

Rövid egyeztetés dícséretekkel fűszerezve. Az alapfunkciók kész vannak. 
Egyetlen bug van: a kis kör be tud menni a doboz alá, ha jó helyre kerül

# 4. alkalom

Ciklusok, és hasznosságuk. Ha egy funkció kétszer ugyanúgy fut, akkor azt lehet ciklusban paramérerekkel futtatni. 
Cél a kód újrhasznosítása, amivel rugalmasabban lehet dolgozni.

Ugyanez érvényes a kondiciókra. Ha 2 kondiciót ellenőrzöl, akkor ellenőrizhetsz 3-at, 4-et stb. Érdemes funkcióban és iterálásban gondolkodni.
Jelige: a programozó lusta.

# 5. alkalom

Újrahasznosítás tömbökkel. Átbeszélve még egyszer.

## Következő feladat
Készítsd el az első szintent.

1. Falak: először egy keret. Ez móddsítani fogja a max/min mozgást.
  Tipp: kell hozzá majd egy ciklus
2. A dobozt középre kell tolni
3. Bónusz: az első szinten 2 dobozt kell a helyére tolni, hogy vége legyen
4. A dobozt akkor is tovább lehet tolni, ha jó helyen van!

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

Ciklusok:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration

https://webiskola.hu/javascript-ismeretek/javascript-ciklusok-azaz-js-iteraciok-for-while-do-while/

Foreach funkcióhívással

https://www.w3schools.com/jsref/jsref_foreach.asp
