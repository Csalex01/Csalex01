# Kétdimenziós tömbök kiíratása képernyőre

A beolvasáshoz hasonlóan történik, csak a kiiratás részét hagyjuk meg.

```cpp
int n, m;
cout << "A sorok száma: "; cin >> n;
cout << "Az oszlopok száma: "; cin >> m;

int A[n][m];

for ( int sor = 0; sor < n; sor++ )
{
    for (int oszlop = 0; oszlop < m; oszlop++ )
    {
        cout << "A[" << sor << "][" << oszlop << "]: ";
    }
}
```

