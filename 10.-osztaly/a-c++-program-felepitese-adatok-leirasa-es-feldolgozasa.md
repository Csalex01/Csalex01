# A C++ program felépítése, adatok leírása és feldolgozása

Minden C++ program tartalmaz egy főfüggvényt, amely a program futásakor végrehajtásra kerül, és ez a következő:

```cpp
int main()
{
    ...
    return 0;
}
```

A főfüggvény tartalmazza a változók deklarálását \(itt határozzuk meg, hogy milyen változókat használunk és ezek milyen adattípusúak\). Ez után következnek a főfüggvény utasításai. A főfüggvény előtti részen a függvény prototípusokat kell beépíteni \(fejállományok, vagy header\), ezek tartalmazzák azoknak a függvényeknek a leírását, amelyeket a program során használunk. Ezeket a beépítéseket a "\#include" után adjuk meg. 

Például

```cpp
#include <iostream>
#include <cmath>
#include <iomanip>
#include <cstdlib>
#include <ctime>
...


#include <- preprocesszor
<...> <- fejlécállomány elnevezése
```

#### Egy példa program



```cpp
#include <iostream> // Fejállomány, tartalmazza a cin-t és a cout-ot
using namespace std;

int main()
{
    int a; // deklarálás
    cout << "Adj meg egy számot: "; // Kiírás
    cin >> a; // Beolvasás
    cout << "A beolvasott szám: " << a << endl; // Kiíratás
    
    return 0;
}
```

#### Megjegyzések

C++-ban MINDEN sor végére pontosvesszőt \(;\) kell írni, kivéve:

* a fejállomány beépítése után
* a kapcsos {} zárójelek után
* a struktúrák után.

