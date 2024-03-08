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


# 6. alkalom

Kód átnézve. Lamentálás azon, hogyan lehetne elérni, hogy az emberke ne csússzon be a doboz vagy a fal alá.
(viszonyrendszer az emberke és a fal/doboz koordinátái közt, a mozgatás során ellenőrizve)

# 7. alkalom

Ismételten beszélgettünk a kódról és a javítási lehetőségekről. Ötletek:

- funkciók átnevezése beszédesebbé
- segítség a falak/blokkok beazonosításához (falak, mint négyzetek)
- kód valamilyen logikai sorba rendezése

## Következő feladat

1. Az emberke álljon meg, ahol kell.

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
