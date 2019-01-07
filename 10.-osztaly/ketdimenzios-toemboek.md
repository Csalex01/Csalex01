# Kétdimenziós tömbök

A kétdimenziós tömb szintén egy olyan adatszerkezet amely rögzített számú azonos típusú elemből épül fel.

Abban külömbözik az egydimenziós tömbtől, hogy az elemek nem csak sorokba, hanem oszlopokba is vannak rendezve.

Kiváló példa a kétdimenziós tömbök szemléltetésére a sakktábla vagy a tojástartó rács.

A kétdimenziós tömböt mátrixoknak is szokták nevezni \(matematikából kiindulva\).

A mátrix sorait sorindexek határozzák meg, az oszlopait pedig oszlopindexek azonosítják.

A sorok és oszlopok indexelése akárcsak az egydimenziós tömböknél automatikusan 0-tól kezdődik.

A fenti gondolatmenetet tovább folytatva újabb indexek meghatározásával három vagy annál többdimenziójú tömböket is létre tudunk hozni.

#### Mátrix deklarálása

Mátrixot úgy tudunk deklarálni, hogy az elemtípus és a tömbváltozó meghatározása után megkell adnunk először a sorindex, majd az oszlopindex felső határait a következő szintaxissal:

```cpp
ELEMTÍPUS VÁLTOZÓ[SOROK SZÁMA] [OSZLOPOK SZÁMA]

Pl:

int m[3][2] = {};
/**
    Akárcsak a vektoroknál, itt is érvényes az, hogy a nem inicializált
    elemet automatikusan 0 kezdőértékkel látja el.
**/
```

| m | **0** | **1** |
| :--- | :--- | :--- |
| **0** | 0 | 0 |
| **1** | 0 | 0 |
| **2** | 0 | 0 |



