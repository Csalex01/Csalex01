# Egydimenziós tömb kiíratása képernyőre

A képernyőre való kiiratás egy számlálós \(for\) ciklus segítségével történik.

```cpp
...
for (int i = 0; i < HOSSZ; i++) 
{
    cout << v[i] << " ";
}
...
```

#### Megjegyzés

Az "iomanip" nevű fejlécállományban használható a setw\(\) függvény ami segítségével tagoltabbá tudjuk tenni a tömb kiiratását.

```cpp
...
for (int i = 0; i < HOSSZ; i++) 
{
    cout << setw(4) << v[i];
}
...
```

