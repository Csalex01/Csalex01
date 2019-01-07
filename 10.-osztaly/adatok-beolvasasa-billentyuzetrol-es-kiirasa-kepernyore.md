# Adatok beolvasása billentyűzetről és kiírása képernyőre

Ahhoz, hogy adatokat tudjunk beolvasni és kiírni a képernyőre, az "iostream" fejállomány szükséges.\(\#include &lt;iostream&gt;\). Képernyőre kiírni a "cout" segítségével tudunk, melynek szintaxisa a következő:

```cpp
cout << KIFEJEZÉS_1 << KIFEJEZÉS_2 << ... << KIFEJEZÉS_n << endl;
```

#### Megjegyzések

Ha az utasítás sorozat végére az "endl" szavacskát írjuk, akkor a kiírás után a kurzor új sorba lép. Ha szöveget íratunk ki, akkor azt idézőjelek közé kell írni.

Például:

```cpp
cout << "A darabszám: " << db << endl;
           szöveg           változó értéke
```



Adatokat bekérni a billentyűzetről a "cin" utasítással lehet, melynek szintaxisa a következő:

```cpp
cin >> KIFEJEZÉS_1 >> KIFEJEZÉS_2 >> ... >> KIFEJEZÉS_n;
```

#### Szabály \(szubjektív\)

Minden beolvasás előtt ki kell íratni szöveggel egy utasítást arra vonatkozóan, hogy mit szeretnél, hogy a felhasználó beírjon a billentyűzetről.

