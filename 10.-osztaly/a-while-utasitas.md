# A while utasítás

Programozás során találkozunk olyan helyzetekkel, amikor ugyanazt az utasításokat többször végre kell hajtsa a program, viszont a végrehajtások \(iterációk\) számát előre nem ismerjük, azaz nem használhatunk számlálós ciklust. Az  ismétlődések száma viszont függ egy feltételtől és ennek teljesülésekor következik be az ismétlődés. Ezeket a ciklusokat feltételes ciklusoknak is nevezzük. Ha a ciklus feltétele a ciklus utasításai előtt helyezkedik el, akkor elöltesztelő ciklusról beszélünk. Az elöltesztelő ciklusnak megfelelő utasítás a while utasítás, melynek általános alakja a következő:

```cpp
while( FELTÉTEL )
{
    UTASÍTÁSOK;
}
```

Először kiértékelődik a feltétel, ha ennek logikai értéke igaz, akkor végrehajtódnak a ciklus utasításai, különben a vezérlés átadódik a ciklus utáni első műveletnek.

Vigyáznunk kell arra, hogy a ciklus utasításai olyanok legyenek, hogy bizonyos számú ismétlődés után a feltétel hamissá váljon, különben a ciklus végtelen ciklussá válik és hibaüzenettel a program leáll. Az is előfordulhat, hogy a feltétel már az első pillanatban hamis, ilyenkor egyszer sem hajtódnak végre a ciklus utasításai, azaz nem történik meg az iteráció. A feltétel kifejezését kötelezően kerek zárójelek \(\) közé kell írni, ha a ciklus csak egy utasítást tartalmaz, akkor azt nem kötelező kapcsos zárójelek {} közé írni. Kettő vagy annál több utasítás esetén viszont kötelező a kapcsos zárójelek {} használata, különben csak az első utasítást hajtja végre a ciklus.

Egy másik hiba, hogy pontosvesszőt \(;\) teszünk a feltételt követő zárójel után, melynek következtében nem tudnak végrehajtódni a ciklus utasításai így hibás programhoz jutunk.

Sok esetben több számot kell bevinnünk billentyűzetről. Ha előre ismerjük, hogy hány számot kell bevinni akkor számlálós ciklust használunk, ha viszont nem tudjuk, akkor végjelig történik a számok bevitele.

### Példa program

```cpp
#include <iostream>

using namespace std;

int main()
{
    int n;
    int s = 1;
    
    cout <<"n: "; cin >> n;
    
    while(n != 0)
    {
        s *= n;
        cin >> n;
    }
    
    cout << s;
}
```



