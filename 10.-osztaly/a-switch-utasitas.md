# A switch utasítás

A switch utasítás az if utasításhoz hasonlóan egy feltételtől függő programelágazást végez, azzal a különbséggel, hogy itt kettőnél több elágazást is létrehozhatunk egyetlen switch utasítás segítségével.

Általános alakja:

```cpp
switch ( KIVÁLASZTÓ KIFEJEZÉS )
{
    case ÁLLANDÓ_KIFEJEZÉS_1: { UTASÍTÁSOK_1; break; }
    case ÁLLANDÓ_KIFEJEZÉS_2: { UTASÍTÁSOK_2; break; }
    ...
    default: { UTASÍTÁSOK; }
}
```

A switch utasításban szereplő kiválasztó kifejezés csak egész típusú lehet \(char, short, int, long\). Ennek az értékét az utasítás a felsorolt "case" címkék utáni állandó kifejezésekkel összehasonlítja és az első megegyező címkénél lévő utasításra adja a vezérlést. Ha a felsorolt állandó kifejezések közül egyikkel sem történik egyezés, akkor a vezérlés a default ágra kerül. 

A default címke elhanyagolható. Ha nincs jelen a felsorolásban és a kiválasztó kifejezés egyik állandó kifejezéssel sem egyezik, akkor nem történik semmilyen utasítás végrehajtás a switch utasításokon belül és a vezérlés a switch utáni első utasításra kerül.

### Példa program

```cpp
#include <iostream>

using namespace std;

int main()
{
    char c;
    cout << "Adj meg egy római karaktert: "; cin >> c;
    
    switch(c)
    {
        case 'I': { cout << "1"; break; }
        case 'V': { cout << "5"; break; }
        case 'X': { cout << "10"; break; }
        case 'L': { cout << "50"; break; }
        case 'C': { cout << "100"; break; }
        case 'D': { cout << "500"; break; }
        case 'M': { cout << "1000"; break; }
        default: { cout << "Te, ez nem római számjegy!"; }
    }
}
```

