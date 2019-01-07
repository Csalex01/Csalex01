# Adattípusok C++-ban

A program futása során az adatokat állandók \(konstansok\) vagy változók segítségével tároljuk. A használatuk előtt kötelező meghatározni ezek típusát.

A C++-ban a következő adattípusok léteznek:

| Adattípus | Értékkészlet | Méret \(bájt\) |
| :--- | :--- | :--- |
| char | -128 -&gt; 127 | 1 |
| unsigned char | 0 -&gt; 255 | 1 |
| short | -32768 -&gt; 32767 | 2 |
| unsigned short | 0 -&gt; 65535 | 2 |
| int | -2147483648 -&gt; 2147483647 | 4 |
| unsigned int | 0 -&gt; 42494967295 | 4 |
| long | -2147483648 -&gt; 2147483647 | 4 |
| unsigned long | 0 -&gt; 4294967295 | 4 |
| long long | -9 \* 10^18 -&gt; 9 \* 10^18 | 8 |
| unsigned long long | 0 -&gt; 10^19 | 8 |
| float | 3.4E-38 -&gt; 3.44E+38 | 4 |
| double | 1.7E-308 -&gt; 1.7E+308 | 8 |
| long double | 3.4E-4932 -&gt; 3.4E+4932 | 10 |
| bool | true / false | 1 |

#### A fenti táblázatból

* Egész típusúak: char, unsigned char, short, unsigned short, int, unsigned int, long, unsigned long, long long, unsigned long long
* Valós típusúak: float, double, long double
* Logikai: bool
* Karakter: char, unsigned char

#### Megjegyzések

A sizeof\(\) függvény visszatéríti, hogy az adott változótípus hány byte-on van tárolva.

Például:

```cpp
sizeof(int) -> 4 byte
sizeof(char) -> 1 byte
sizeof(long) -> 4 byte
sizeof(long long) -> 8 byte
sizeof(float) ->  4 byte
sizeof(double) -> 8 byte
sizeof(long double) -> 12 byte
sizeof(bool) -> 1 byte

(8 bit = 1 byte)
```

