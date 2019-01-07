# Szöveges állományok

Az eddigi munkánk során az értékeket billentyűzetről vittük be és egy bizonyos ablakba kaptuk az eredményt, így a beírt és kiírt értékek elvesznek. Ezt a problémát kiküszöbölhetjük úgy, hogy a be- és kimeneti adatokat a szöveges állományokból vesszük ki, illetve szöveges állományokba íratjuk ki, így a későbbiek során bármikor elérhetőek lesznek.

A szöveges állományok használata akkor is nagyon előnyös, amikor egy programot többször is leszeretnénk futtatni ugyanazokra az értékekre. Ebben az esetben ,ha bemeneti adatok egy szöveges állományban vannak tárolva, akkor a program automatikusan onnan olvassa ki a bemeneti értékeket és nem szükséges minden futtatáskor nekünk bekérni.

A szöveges állományok létrehozhatók egy egyszerű szövegszerkesztővel \(Jegyzettömb, Notepad++, Sublime Text, ...\), utána meg egyszerűen módosíthatók. A szöveges állományok kiterjesztése, a .txt-n kívül, megváltoztathatóak a .in, .out, .stb... kifejezésekre.

A szöveges állományokat csak szekvenciálisan lehet használni, ami azt jelenti, hogy a szöveges állomány adatait csak egymás utáni sorrendben lehet elérni \(csak az állomány elejétől a vége fele tudunk olvasni, mindig a legelső karaktert tudjuk elérni elsőként, tehát nem lehet az állományt középről olvasni egyből\).

Az állományok kezelése 3 nagy lépésre osztható:

* Az állomány megnyitása
* Az állomány feldolgozása
* Az állomány bezárása

## Az állomány megnyitása

Ahhoz, hogy állományokkal dolgozni tudjunk, ahhoz be kell építsünk az "fstream" nevű fejlécfájlt.

```cpp
#include < fstream >
```

Állományok megnyitása során figyelembe kell vennünk azt, hogy meglévő állományt, vagy esetleg új állományt akarunk megnyitni, ennek függvényében 3 esetet különböztetünk meg:

* Létező \(bemeneti\) állomány megnyitása olvasás céljából
* Új \(kimeneti\) állomány megnyitása
* A fájlok bezárása

### Létező \(bemeneti\) állomány megnyitása olvasás céljából

Fájlból olvasáshoz először is létre kell hozni egy bemeneti adatállomány típusú fájlváltozót, ezután meg kell nyitni az állományt. Ekkor jöhet az állomány hozzárendelése a fájl változóhoz. Megnyitás után az állománymutató az állomány elején fog elhelyezkedni.

```cpp
ifstream FÁJLVÁLTOZÓ;
FÁJLVÁTOZÓ.open( "FÁJLNÉV.KITERJESZTÉS" );
```

Ha az állomány nem a program aktuális könyvtárában van, akkor a fájlnév előtt meg kell adni az elérési útvonalat is.

#### Megjegyzések

A deklarálást és megnyitást összevonhatjuk egy sorba.

```cpp
ifstream FÁJLVÁLTOZÓ( "FÁJLNÉV.KITERJESZTÉS" );
```

### Új \(kimeneti\) állomány megnyitása

Új állományt csak akkor tudunk létrehozni, ha először deklarálunk egy kimeneti adatállomány típusú változót, majd társítjuk egy fizikai állománynévhez, mely létre fog jönni és megnyitódik.

```cpp
ofstream FÁJLVÁLTOZÓ;
FÁJLVÁLTOZÓ.open( "FÁJLNÉV.KITERJESZTÉS" );
```

#### Megjegyzések

Vigyáznunk kell ezzel az utasítással, hiszen ha a meglévő állományt nyitjuk meg újként akkor az állomány tartalma elveszik.

### Írás és olvasás állományokból

Állományból beolvasni a standard beolvasáshoz hasonlóan lehet. Ha másképpen nem állítjuk, akkor szóköztől szóközig olvas a program és ezek az adatok kerülnek a megadott változókba.

```cpp
FÁJLVÁLTOZÓ >> VÁLTOZÓ_1 >> VÁLTOZÓ_2 >> ... >> VÁLTOZÓ_n;
```

Állományba írni szintén a standard kiíratáshoz hasonlóan lehet.

```cpp
FÁJLVÁLTOZÓ << KIFEJEZÉS_1 << KIFEJEZÉS_2 << ... << KIFEJEZÉS_n (<< endl);
```

### A fájlok bezárása

A megnyitott fájlokat a következőképpen tudjuk bezárni:

```cpp
FÁJLVÁLTOZÓ.close();
```

#### Megjegyzések

A fájlokat kötelezően be kell zárni a feldolgozás után.

