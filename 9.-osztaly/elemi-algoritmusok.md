# Elemi algoritmusok \(pszeudokód\)

## Egy szám valódi osztóinak kiírása

```text
Például:
    12 osztói: 1, 2, 3, 4,  6, 12
    12 valódi osztói: 2, 3, 4, 6
    12 nem valódi osztói: 1, 12
```

Alakja pszeudokódban

```text
Be: szam
Minden oszto <-- 2, szam-1 végezd el:
    Ha szam % oszto == 0, akkor:
        Ki: oszto + " "
```

## Prímszámvizsgáló

Prímszám - egy olyan természetes szám, amely csak 1-el és önmagával osztható.

Alakja pszeudokódban

```text
Be: szam
prim_e = igaz

Minden oszto <-- 2, [sqrt(szam)] végezd el:
    Ha szam % oszto == 0, akkor:
        prim_e = hamis
        
Ha prim_e == igaz, akkor:
    Ki: "Prímszám"
különben:
    Ki: "Nem prímszám"
```

## Elsőfokú egyenlet

Alakja pszeudokódban

```text
Be: a, b
Ha a == 0 && b == 0, akkor:
    Ki: "Végtelen sok megoldás"

Ha a != 0 && b == 0, akkor:
    Ki: "Nincs megoldás!"
    
Ha a != 0 && b == 0, akkor:
    Ki: "x = 0"
    
Ha a != 0 && b != 0, akkor:
    x = (-1) * b / a
    Ki: "Megoldás: " + x
```

## Tökéletes szám

Tökéletes szám: Ha a szám egyenlő a nála kisebb osztóinak összegével

Alakja pszeudokódban:

```text
Be: szam
osszeg = 0

Minden oszto <-- 1, [szam / 2], végezd el:
    Ha szam % oszto == 0, akkor:
        osszeg = osszeg + oszto
        
Ha szam == osszeg, akkor:
    Ki: "A megadott szám tökéletes!"
különben:
    Ki: "A megadott szám tökéletlen!"
```

## Barátságos számok

Barátságos számok: Ha az egyik szám nála kisebb osztóinak összege egyenlő a másik számmal és fordítva.

```text
Például:
220 és 286, mert 220 osztóinak összege egyenlő 286-al,
és 286 osztóinak összege egyenlő 220-al.
```

Alakja pszeudokódban:

```text
Be: a, b
osszeg_a = 0
osszeg_b = 0

Minden oszto_a <-- 1, [a / 2], végezd el:
    Ha a % oszto_a == 0, akkor:
        osszeg_a = osszeg_a + oszto_a
        
Minden oszto_b <-- 1, [b / 2], végezd el:
    Ha b % oszto_b == 0, akkor:
        osszeg_b = osszeg_b + oszto_b
        
Ha osszeg_a == b && osszeg_b == a, akkor:
    Ki: "A megadott számok barátságos számpárok!"
különben:
    Ki: "A megadott számok nem barátságos számpárok!"
```

## Armstrong-féle szám

Armstrong-féle szám: Egy 3 jegyű természetes szám amelynek számjegyeinek köbének összege egyenlő a számmal.

```text
Például: 153 Armstrong-féle, mert 1^3 + 5^3 + 3^3 = 153
```

Alakja pszeudokódban:

```text
Be: szam
seged = szam
osszeg = 0

Amíg szam > 0, végezd el:
    osszeg = osszeg + ((a % 10) + (a % 10) + (a % 10))
    a = [a / 10]
    
Ha seged == osszeg, akkor:
    Ki: "A megadott szám Armstrong-féle szám!"
különben:
    Ki: "A megadott szám nem Armstrong-féle szám!"

```

## Legnagyobb közös osztó és legkisebb közös többszörös

Alakja pszeudokódban

```text
(Legkisebb közös többszörös nélkül!)

Be: a, b

Ha a == 0 && b == 0, akkor:
    Ki: "Nincs"

Ha a == 0 && b != 0, akkor:
    Ki: b
    
Ha a != 0 && b == 0, akkor:
    Ki: a
    
Ha a != 0 && b != 0, akkor:
    Amíg a != b, végezd el:
        Ha a > b, akkor:
            a = a - b
        különben
            b = b - a
    
    Ki: a
```

#### Megjegyzések

A fenti algoritmus két szám legnagyobb közös osztóját határozza meg. A módszer a következő: amíg a két szám nem egyenlő, megvizsgáljuk melyik szám a nagyobb és a nagyobb szám értékét megváltoztatjuk a nagyobb szám minusz a kisebb számra. Amikor a két szám egyenlővé válik, akkor a két szám valamelyike lesz a legnagyobb közös osztó.



Ha a legkisebb közös többszöröst is szeretnénk kiszámítani, akkor azt megtehetjük egy sima kiírás blokkal, ami a következő képen néz ki:

```text
seged_a = a
seged_b = b
....
Ki: "Legkisebb közös többszörös: " + seged_a * seged_b / a 
// Az itt megjelenő 'a' a számítás után va, míg a seged_a-ba tárolt
// az az 'a' értéke számítás előtt.

```

### Eukleidész algoritmusa \(L.N.K.O kiszámítására\)

Alakja pszeudokódban

```text
Be: a, b
seged_a = a
seged_b = b
lnko = 0
lkkt = 0

Ha a < b, akkor:
    p = a
    a = b
    b = p
    
Amíg b != 0, végezd el:
    m = a % b
    a = b
    b = m
    
lnko = a
lkkt = seged_a * seged_b / lnko

Ki: "L.N.K.O: " + lnko
Ki: "L.K.K.T: " + lkkt
```

## Palindrom

Palindrom: Ha egy szám egyenlő a fordítottjával \(tükörképével -&gt; tükörszám\)

```text
Például: 101, 11011, 110011, 1110111, 94649, 946649, ...
```

Alakja pszeudokódban

```text
Be: szam
seged_szam = szam
palindrom = 0

Amíg szam > 0, végezd el:
    palindrom = palindrom * 10 + szam % 10
    szam = [szam / 10]
    
Ha seged_szam == palindrom, akkor:
    Ki: "A megadott szám palindrom!"
különben:
    Ki: "A megadott szám nem palindrom!"
```

## Tízes számrendszerből kettesbe való alakítás

Alakja pszeudokódban

```text
Be: szam10
hatv = 1
szam2 = 0

Amíg szam10 > 0, végezd el:
    szam2 = szam2 + (szam10 % 2) * hatv
    hatv = hatv * 10
    szam10 = [szam10 / 2]
    
Ki: "A megadott szám kettes számrendszerben: " + szam2
```

## Kettes számrendszerből tízesbe alakítás

Alakja pszeudokódban

```text
Be: szam2
szam10 = 0
hatv = 1

Amíg szam2 > 0, végezd el:
    szam10 = szam10 + (szam2 % 10) * hatv
    hatv = hatv * 2
    szam2 = [szam2 / 10]
    
Ki: "A megadott szám tízes számrendszerben: " + szam10
```

## Egy szám számjegyeinek összege 

Alakja pszeudokódban

```text
Be: szam
osszeg = 0

Amíg szam > 0:
    osszeg += szam % 10
    szam /= 10
    
Ki: "A megadott szám számjegyeinek összege: " + osszeg
```

