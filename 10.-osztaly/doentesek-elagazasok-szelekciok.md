# Döntések \(elágazások, szelekciók\)

## Az if utasítás

Az if utasítás segítségével 1, illetve kétágú döntéseket hozhatunk létre a programban.

#### Általános alakja \(kétágú döntés\)

```cpp
if ( FELTÉTEL )
{
    UTASÍTÁSOK_1;
}
else
{
    UTASÍTÁSOK_2;
}
```

#### Megjegyzések

Először kiértékelődik a feltétel, ha a feltétel nem 0, vagyis igaz, akkor végrehajtódnak az if utáni utasítások, ha a feltétel pedig hamis akkor az else utáni utasítások hajtódnak végre.

Ha valamelyik ágon csak egyetlen utasítás van, akkor ott a kapcsos zárójelet elhagyhatjuk.

A feltételt kötelezően mindig zárójelek \(\) közé kell írni és nem teszünk pontosvesszőt a végére!

Ha a feltétel összetett, akkor a feltétel részeit külön-külön még zárójelek közé írjuk.

#### Általános alakja \(egyágú döntés\)

```cpp
if( FELTÉTEL )
{
    UTASÍTÁSOK;
}
```

#### Megjegyzések

Úgy kaptuk az egyágú döntést, hogy a kétágú döntésből elhagytuk az else ágat. Ide ugyan azok a szabályok érvényesek, mint a kétágú döntésnél.

Egy- és kétágú döntések egymásba ágyazásával többágú döntéseket hozhatunk létre.

### Példaprogram

```cpp
#include <iostream>

using namespace std;

int main()
{
    float sz1, sz2, h1, h2;
    float T1, T2;
    
    cout << "sz1: "; cin >> sz1;
    cout << "h1: "; cin >> h1;
    cout << "sz2: "; cin >>sz2;
    cout << "h2: "; cin >> h2;
    
    T1 = sz1 * h1;
    T2 = sz2 * h2;
    
    if(T1 > T2)
    {
        cout << "A legnagyobb  terület: " << T1 << endl;
    }
    else
    {
        cout << "A legnagyobb terület: ";  << T2 <<endl;
    }
    
    return 0;
}
```

