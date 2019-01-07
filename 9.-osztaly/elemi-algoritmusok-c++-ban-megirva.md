# Elemi algoritmusok \(C++-ban megírva\)

## Egy szám valódi osztoinak kiírása

```cpp
int szam;
cout << "Add meg a szamot: "; cin >> szam;

for( int oszto  = 2; oszto  < szam / 2; oszto ++ )
{
    if( szam % oszto == 0)
    {
        cout << oszto << " ";
    }
}
```

## Prímszámvizsgáló

```cpp
int szam;
bool prim_e = true;

for( int oszto = 2; oszto < sqrt(szam); oszto++ )
{
    if( szam % oszto == 0)
        prim_e = false;
}

if( prim_e )
{
    cout << "Prímszám!";
}
else
{
    cout << "Nem prímszám!";
}
```

## Elsőfokú egyenlet

```cpp
int a, b;
cout << "a: "; cin >> a;
cout << "b: "; cin >> b;

if( a == 0 && b == 0 )
{
    cout << "Végtelen sok megoldás!";
}

if( a != 0 && b == 0 )
{
    cout << "x = 0" ;
}

if( a != 0 && b != 0 )
{
    x = (-1) * (b / a);
    cout << "Megoldás: x = " << x;
}
```

## Tökéletes szám

```cpp
int szam;
int osszeg = 0;

cout << "Add meg a szamot: "; cin >> szam;

for(int oszto = 1; oszto  < szam / 2; oszto ++ )
{
    if( szam % oszto == 0 )
    {
        osszeg += oszto;
    }
}

if( szam == osszeg )
{
    cout << "A megadott szám tökéletes!";
}
else
{
    cout << "A megadott szám tökéletlen!";
}
```

## Barátságos számok

```cpp
int a, b;
int osszeg_a = 0;
int osszeg_b = 0;

cout << "a: "; cin >> a;
cout << "b: "; cin >> b;

for( int oszto_a = 1; oszto_a < a / 2; oszto_a++ )
{
    if( a % oszto_a == 0 )
    {
        osszeg_a += oszto_a;
    }
}

for( int oszto_b = 1; oszto_b < a / 2; oszto_b++ )
{
    if( b % oszto_b == 0 )
    {
        osszeg_b += oszto_b;
    }
}

if( osszeg_a == b && osszeg_b == a )
{
    cout << "A megadott számok barátságos számopárok!";
}
else
{
    cout << "A megadott számok nem barátságos számpárok!";
}
```

## Armstrong-féle szám

```cpp
int szam;
int seged;
int osszeg = 0;

cout << "Add meg a számot: "; cin >> szam;
seged = szam;

while( szam > 0 )
{
    int ut_szamjegy = szam % 10;
    osszeg += ut_szamjegy * ut_szamjegy * ut_szamjegy;
    szam /= 10;
}

if( seged == osszeg )
{
    cout << "A megadott szám Armstrong-féle szám!";
}
else
{
    cout << "A megadott szám nem Armstrong-féle szám!";
}
```

## Legnagyobb közös osztó és legkisebb közös többszörös

```cpp
int a, b;

cout << "a: "; cin >> a;
cout << "b: "; cin >> b;

if( a == 0 && b == 0 )
{
    cout << "Nincs LNKO!";
}

if( a == 0 && b != 0 )
{
    cout << "LNKO = " << b;
}

if( a != 0 && b == 0 )
{
    cout << "LNKO = " << a;
}

if( a != 0 && b != 0 )
{
    while( a != b)
    {
        if( a > b)
        {
            a = a - b;
        }
        else
        {
            b = b - a;
        }
    }
    
    cout << "LNKO = " << a;
}

/**
    Ha LKKT-t is akarunk számolni akkor a megjegyzésben
    leírt eljárást kell alkalmazni!
**/
```

## Eukleidész algoritmusa \(L.N.K.O kiszámítására\)

```cpp
int a, b;
int seged_a, seged_b;
int lnko = 0, lkkt = 0;

cout << "a: "; cin >> a;
cout << "b: "; cin >> b;

seged_a = a;
seged_b = b;

if( a < b )
{
    int p = a;
    a = b;
    b = p;
}

while( b != 0 )
{
    int m = a % b;
    a = b;
     b = m;
}

lnko = a;
lkkt = seged_a * seged_b / lnko;

cout << "LNKO = " << lnko << endl;
cout << "LKKT = " << lkkt;
```

## Palindrom

```cpp
int szam;
int palindrom = 0;
int seged_szam = a;

cout << "Add meg a számot: "; cin >> szam;
seged_szam = a;

while( szam > 0 )
{
    palindrom = palindrom * 10 + szam % 10;
    szam /= 10;
}

if( seged_szam == palindrom )
{
    cout << "A megadott szám palindrom!";
}
else
{
    cout << "A megadott szám nem palindrom!";
}
```

## Tízes számrendszerből kettesbe való alakíás

```cpp
int szam10;
int hatv = 1;
int szam2 = 0;

cout << "Add meg a számot: "; cin >> szam10;

while( szam10 > 0 )
{
    szam2 += (szam % 2) * hatv;
    hatv *= 10;
    szam10 /= 2;
}

cout << "A megadott szám kettes számrendszerben: " << szam2;
```

## Kettes számrendszerből tízesbe való alakítás

```cpp
int szam2;
int szam10 = 0;
int hatv = 1;

cout << "Add meg a számot: "; cin >> szam2;

while( szam2 > 0)
{
    szam10 += (szam2 % 10) * hatv;
    hatv *= 2;
    szam2 /= 10;
}

cout << "A megadott szám tízes számrendszerben: " << szam10;
```

