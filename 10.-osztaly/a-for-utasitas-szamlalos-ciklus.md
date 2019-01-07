# A for utasítás \(számlálós ciklus\)

#### Általános alakja C++-ban

```cpp
for ( KEZDETI_ÉRTÉKADÁS ; FOLYTATÓDÁSI_FELTÉTEL ; MÓDOSÍTÓ_KIFEJEZÉS)
{
    UTASÍTÁSOK;
}
```

A for ciklus úgy működik, hogy általában egy ciklusváltozót használunk melynek a kezdeti értékadás során kezdőértéket adunk. Ez után beállítjuk a folytatási feltételt. Ha a folytatási feltétel teljesül, akkor végrehajtódnak a ciklus utasításai \(megtörténik az iteráció\) és a módosító kifejezés segítségével a ciklusváltozó automatikusan változik. 

A módosítás legtöbbször a ciklusváltozó 1-el való növekedését jelenti \(ekkor növekvő ciklusról beszélünk\), de csökkenthetjük is a ciklusváltozót \(ekkor csökkenő ciklusról beszélünk\).

### Példa program

```cpp
#include <iostream>

using namespace std;

int main()
{
    for(short i = 1; i <= 100; i++)
    {
        cout << i << " ";
    }
}
```



