# Feltételes műveletek

Alakja C++-ban

```text
FELTÉTEL ? MŰVELE_1 : MŰVELET_2
              I          H
```

Például

```cpp
int main()
{
    int x = -20;
    
    cout << ((x >= 0) ? "Pozitív" : "Negatív" ) << endl;
    return 0;
}
```

