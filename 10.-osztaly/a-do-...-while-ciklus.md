# A do ... while ciklus

A do...while utasítás a hátultesztelő ciklusnak megfelelő C++ béli utasítás. Hátultesztelő ciklus esetén a ciklus feltétele a ciklus után helyezkedik el. 

Általános alakja:

```cpp
do 
{
    UTASÍTÁSOK;
} while ( FELTÉTEL );
```

A do...while utasítás a while utasítással ellentétben úgy működik, hogy először mindenképp végrehajtódnak a műveletek, majd csak utána értékelődik ki a feltétel. Ha a feltétel igaz, akkor megtörténik az ismétlődés, viszont ha hamis akkor a vezérlés átadódik a ciklus utáni első utasításnak. Akárcsak az elöltesztelő ciklusnál, vigyáznunk kell arra, hogy a ciklus feltétele hamissá váljon, különben végtelen ciklushoz jutunk.

A feltételeket kötelező kerek zárójelek \(\) között megadni. 

Ha a ciklusban kettő vagy több utasítás szerepel, akkor ezeket kötelező kapcsos zárójelek {} közé írni. Az utasításokat követő feltétel zárójele után mindig pontosvesszőt \(;\) kell tenni. Leggyakrabban a do...while ciklust a beviteli adatok ellenőrzésére szoktuk használni \(hibás adatok kiküszöbölésére\) .

