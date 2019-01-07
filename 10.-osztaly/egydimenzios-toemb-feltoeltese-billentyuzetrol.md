# Egydimenziós tömb feltöltése billentyűzetről

Egy tömb elemeti nem lehet egyszerre beolvasni.

Először beolvassuk az elemek tényleges számát, majd egy számlálós \(for\) ciklussal beolvassuk egyenként az elemeket.

```cpp
int v[100];
int n;

cout << "Add meg a tömb méretét: "; cin >> n;

for ( int i = 0; i < n; i++ )
{
    cout << "v[" << i << "]: "; cin >> v[i];
}
```

Megtehetjük azt is, hogy egyszer beolvassuk az elemek számát és utána a deklaráljuk a tömböt a megadott elemszámmal.

```cpp
int n;
cout << "Add meg a tömb méretét: "; cin >> n;

int v[n];
```

