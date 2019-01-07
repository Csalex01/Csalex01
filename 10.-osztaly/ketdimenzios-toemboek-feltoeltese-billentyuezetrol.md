# Kétdimenziós tömbök feltöltése billentyüzetről

Mint a vektoroknál, itt sem lehet egyszerre beolvasni a mátrix értékeit.

Először beolvassuk a sorok és oszlopok számát majd két egymásba ágyazott számlálós \(for\) ciklus segítségével beolvassuk egyenként az elemeket.

```cpp
int n, m;
cout << "A sorok száma: "; cin >> n;
cout << "Az oszlopok száma: "; cin >> m;

int A[n][m];

for ( int sor = 0; sor < n; sor++ )
{
    for (int oszlop = 0; oszlop < m; oszlop++ )
    {
        cout << "A[" << sor << "][" << oszlop << "]: "; cin >> A[sor][oszlop];
    }
}
```

