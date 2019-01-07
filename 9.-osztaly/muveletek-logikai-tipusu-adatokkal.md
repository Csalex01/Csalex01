# Műveletek logikai típusú adatokkal

A logikai típusú adatok összehasonlító \(relációs\) operátorok segítségével írjuk le.

```text
== egyenlő
!=, <> nem egyenlő
<= kissebb vagy egyenlő
>= nagyobb vagy egyenlő
```

## Logikai kifejezések összekapcsolása

Több logikai kifejezés segítségével összetett logikai kifejezést is alkothatunk, ha ezeket a következő operátorok valamelyikével összekapcsoljuk:

```text
&& (és)
|| (vagy)
! (tagadás)
```

| a | b | a &&b | a \|\| b | !a | !b |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | 1 | 1 | 1 | 0 | 0 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 0 |
| 0 | 0 | 0 | 0 | 1 | 1 |



