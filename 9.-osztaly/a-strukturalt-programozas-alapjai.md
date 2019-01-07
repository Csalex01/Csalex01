# A strukturált programozás alapjai

A programozás elméletében szereplő alapelv szerint bármilyen algoritmus felépíthető a következő struktúrák segítségével

* Lineáris struktúra
* Elágazási struktúra
* Ismétlő struktúra

## Lineáris struktúra

Akkor beszélünk lineáris struktúráról amikor az algoritmus lépései egymás után következnek és az algoritmus nem tartalmaz elágazásokat, feltételeket vagy ismétlődéseket.

## Elágazási struktúra

Az algoritmus készítése során találkozhatunk olyan helyzetekkel, amikor egy feltétel teljesülésekor egy bizonyos műveletet kell végeznünk, ellenkező esetben, pedig egy másikat. Ezeket az elágazásokat "döntéseknek" is nevezzük.

Kétféle döntés létezik:

* Egyágú döntés
* Kétágú döntés

#### Egyágú döntés általános alakja pszeudokódban

```text
Ha FELTÉTEL, akkor:
    művelet_1
```

#### Megjegyzés

Először kiértékelődik a feltétel, ha a feltétel igaz akkor az igaz ágon hajtódnak végre a műveletek, különben nem történik semmi.

#### Kétágú döntés általános alakja pszeudokódban

```text
Ha FELTÉTEL, akkor:
    művelet_1
különben:
    művelet_2
```

#### Megjegyzés

Kiértékelődik a feltétel, ha a feltétel igaz, akkor az igaz ágon hajtódnak végre a műveletek, különben a hamis ágon.

## Ismétlőstruktúra \(ciklusok\)

Egy feladat megoldása során előfordulhat, hogy egy bizonyos műveletsort többször kell elvégezni. Ezeket ismétlődésnek vagy ciklusoknak nevezzük.

Kétféle ciklus létezik:

* Ahol ismerjük az ismétlődések \(iterációk\) számát: számlálós ciklus
* Ahol nem ismerjük az ismétlődések \(iterációk\) számát: feltételes ciklus

### Számlálós ciklus

Alakja pszeudokódban:

```text
Minden CIKLUSVÁLTOZÓ <-- KEZDŐÉRTÉK, VÉGÉRTÉK, végezd el:
    műveletek / ciklus utasításai
```

#### Megjegyzés

A számlálós ciklus úgy működik, hogy a ciklusváltozó felveszi a kezdőértéket, végrehajtja a ciklus utasításait, automatikusan 1-el nő / csökken az értéke, majd visszatér a ciklus elejére, majd újra elvégzi az utasításokat.

Ezt mindaddig végzi amíg a ciklusváltozó el nem éri a végértéket. Ha a ciklus kezdő- és végértéke megegyezik akkor a ciklus egyszer erre az értékre végrehajtja a műveleteket. Ha a kezdőérték szigorúan nagyobb a végértéknél a ciklus egyszer sem hajtja végig a műveleteket.

Alapértelmezésben a számlálós ciklus mindig növekvő, de létezik csökkenő számláló ciklus is, melynek pszeudokódban az alakja a következő:

```text
Minden CIKLUSVÁLTOZÓ <-- KEZDŐÉRTÉK, VÉGÉRTÉK, -1, végezd el:
    utasítások
```

A csökkenő számlálós ciklus csak akkor tudja végrehajtani az utasításokat ha a kezdőérték nagyobb vagy egyenlő a végértéknél.

Vannak olyan algoritmusok, amelyekben a ciklusváltozó értékét nem használjuk fel a ciklus utasításai között. Csak azért használjuk a ciklust, hogy az ismétlődések megtörténjenek.

### Feltételes ciklus

Létezik:

* Elültesztelő feltételes ciklus
* Hátultesztelő feltételes ciklus

#### Az elültesztelő ciklus

Alakja pszeudokódban

```text
Amíg FELTÉTEL, végezd el:
    utasítások / ciklus műveletei
```

#### Megjegyzések

Az elültesztelő ciklus úgy működik, hogy először kiértékelődik a feltétel, ha a feltétel igaz akkor az igaz ágon végrehajtódnak a műveletek, majd újra kiértékelődik a feltétel \(tehát megtörtént az ismétlődés / iteráció\). Ha a feltétel hamissá válik, akkor az algoritmus kilép a ciklusból.

Vigyáznunk kell arra, hogy bizonyos számú ismétlődés után a feltétel hamissá váljon, mert különben végtelen ciklushoz jutunk. Ehhez egy olyan műveletre van szükség a cikluson belül, amely változtatja a feltételben megjelenő változó\(k\) értékét.



#### A hátultesztelő ciklus

Alakja pszeudokódban

```text
Ismételd:
    utasítások
Ameddig FELTÉTEL
```

#### Megjegyzések

A hátultesztelős ciklus úgy működik, hogy egyszer végrehajtódnak a műveletek, majd kiértékelődik a feltétel. Ha a feltétel hamis akkor újból végrehajtódnak a műveletek és ismét kiértékelődik a feltétel, tehát megtörténik az ismétlődés \(iteráció\). Ha a feltétel igazzá válik akkor az algoritmus kilép a ciklusból.

Vigyáznunk kell arra, hogy a műveletek között legyen olyan művelet amely változtatja a feltételben szereplő változó\(k\) értékét.



Előfordulhat, hogy egy programban szereplő változókra valamilyen feltétel van kiszabva és ha beolvasáskor a beolvasott érték nem felel meg ennek a feltételnek akkor újból bekérjük mindaddig amíg a beolvasott érték megfelel a feltételnek.

```text
Ismételd:
    Be: szam
Ameddig szam > 0
```

#### Elöltesztelő és hátultesztelő ciklusok összehasonlítása

Hasonlóságok

* Mindkettő feltételes ciklus
* Mindkettőnél szükség van egy módosító kifejezésre, hogy ne kapjunk végtelen ciklust.

Különbségek

* Míg az elültesztelő ciklus az igaz ágon halad tovább, addig a hátultesztelő ciklus a hamis ágon.
* A hátultesztelő ciklusban egyszer biztos, hogy lefutnak az utasítások, míg az elültesztelő ciklusban olyan is lehet, hogy egyszer sem.



