---
title: 서로소인 두 약수의 곱은 약수이다
title_en: The Product of Two Coprime Divisors Is a Divisor
aliases: [coprime divisors, 서로소인 약수의 곱]
kind: proposition
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 정수 n을 서로소인 두 정수 a, b가 각각 나누면 곱 ab도 n을 나눈다.
requires: [coprime-divides-product, greatest-common-divisor, divisibility, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.3절 Exercises, 연습문제 1.8(a), p.19
    checked: original
    note: "출처는 이 진술을 정수 a, b, c, n에 대한 연습문제 1.8(a)로 싣는다(p.19). 책 뒤의 Answers and Hints(p.149)에는 1장 연습문제 1.8의 답이 없다. 출처는 본문에서 이 사실을 증명 없이 쓴다. 2.2절의 중국인의 나머지 정리의 유일성 부분에서 'Since gcd(n, m) = 1, it follows that nm | z'(p.29)로, 같은 절 보조정리의 단사성 증명에서 'nm | c − c′ because gcd(n, m) = 1'(p.31)로 쓴다. 이 항목의 증명은 이 사이트가 썼다. 진술에서 gcd(a, b)가 정의되려면 a, b가 둘 다 0은 아니어야 하므로 이 조건을 진술에 넣었다. 예시, 반례, 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 유한 곱의 정의와 성질을 보강하고 정렬된 꼴로 진술, 직관의 거짓 문장과 출처 기록 정정. 마지막 표현 수정은 지휘자가 변경분으로 확인."
added: 2026-11-16
---

:::statement
$a$, $b$, $n$이 정수이고 $a$, $b$가 둘 다 $0$은 아니며 $\gcd(a, b) = 1$이라 하자. 곧 $a$와 $b$는 [[greatest-common-divisor|서로소]]이다. 이때 $a \mid n$이고 $b \mid n$이면 $ab \mid n$이다.
:::

:::english
Let $a$, $b$, and $n$ be integers such that $a$ and $b$ are not both $0$ and $\gcd(a, b) = 1$; that is, $a$ and $b$ are relatively prime. If $a \mid n$ and $b \mid n$, then $ab \mid n$.
:::

## 직관

두 수가 각각 $n$을 나눌 때, 곱도 $n$을 나눈다고 하고 싶어집니다. 일반적으로는 틀립니다. $6$과 $9$는 모두 $18$을 나누지만 곱 $54$는 $18$을 나누지 못합니다. 두 수가 $1$보다 큰 공통 약수를 가지면 그 부분이 $n$ 안에 한 번만 들어 있어도 두 수가 모두 나눌 수 있기 때문입니다($6$과 $9$는 $3$을 공유하고 $18$ 안에 $3$이 두 번 들어 있습니다). 서로소는 $1$보다 큰 공통 약수가 없다는 조건이어서, 각각이 따로 $n$에 들어 있어야 하고 곱도 들어갑니다.

증명은 바로 앞 항목 [[coprime-divides-product|서로소인 약수의 성질]]에 기댑니다. $n = ak$로 쓰면 $b$가 $ak$를 나누는데 $b$는 $a$와 서로소이므로 $b$가 $k$를 나눕니다. 이 명제는 다음 단원의 중국인의 나머지 정리에서 쓰일 예정입니다.

## 증명

:::idea
$n = ak$로 쓰고 $b \mid ak$에 앞 항목을 적용해 $b \mid k$를 얻는다. $k = bt$이면 $n = (ab)t$이다.
:::

:::hint
$a \mid n$을 정의대로 풀어 $n = ak$로 쓰세요. 그러면 $b \mid n$은 $b \mid ak$입니다.
:::

:::hint
[[coprime-divides-product|앞 항목]]을 쓰려면 "나누는 수"와 "서로소인 인수"가 앞 항목의 $a$, $b$ 자리에 어떻게 들어가는지 정하세요. 서로소라는 조건에서 $a$와 $b$의 순서가 바뀌어도 되는지는 [[greatest-common-divisor|최대공약수]]의 성질에 있습니다.
:::

:::proof
$a \mid n$이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $n = ak$인 정수 $k$가 있다. $b \mid n$이므로 $b \mid ak$이다.

$a$, $b$는 둘 다 $0$은 아니고 $\gcd(a, b) = 1$이므로, [[greatest-common-divisor]]의 성질 (ii)에 의해 $\gcd(b, a) = \gcd(a, b) = 1$이다. 이제 [[coprime-divides-product|앞 항목]]을 그 항목의 $a$, $b$, $c$ 자리에 각각 $b$, $a$, $k$를 넣어 적용한다. $b$, $a$는 둘 다 $0$은 아니고 $\gcd(b, a) = 1$이며 $b \mid ak$이므로 $b \mid k$이다. 따라서 $k = bt$인 정수 $t$가 있다.

그러면 $n = ak = a(bt) = (ab)t$이다. 둘째 등호는 $k = bt$를 대입한 것이고 셋째 등호는 정수의 곱셈의 결합법칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들인 계산 법칙)이다. $a$, $b$, $t$가 정수이므로 정수의 곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $ab$는 정수이다. 따라서 $n = (ab)t$이고 $t$가 정수이므로 $ab \mid n$이다. $\blacksquare$
:::

## 예시와 반례

:::example[8과 15, 그리고 5와 9의 음수]
$a = 8$, $b = 15$는 서로소입니다($8$의 양의 약수 $1, 2, 4, 8$과 $15$의 양의 약수 $1, 3, 5, 15$의 공통인 것은 $1$뿐). $n = 240$이면 $240 = 8 \cdot 30$, $240 = 15 \cdot 16$이므로 $8 \mid n$이고 $15 \mid n$입니다. 정리에 의해 $ab = 120$이 $240$을 나누어야 하고 실제로 $240 = 120 \cdot 2$입니다.

증명의 수를 따라가면 $k = 30$이고 $b = 15 \mid ak = 8 \cdot 30 = 240$입니다. $15 \mid 30$이므로 $t = 2$이고 $n = (8 \cdot 15) \cdot 2 = 240$입니다.

음수도 됩니다. $a = -5$, $b = 9$이면 $\gcd(-5, 9) = \gcd(5, 9) = 1$이고, $n = 90$에서 $90 = (-5)(-18)$, $90 = 9 \cdot 10$이므로 $ab = -45$가 $90$을 나눕니다($90 = (-45)(-2)$).
:::

:::counterexample[서로소가 아니면 깨진다]
$a = 4$, $b = 6$, $n = 12$이면 $12 = 4 \cdot 3$이고 $12 = 6 \cdot 2$이므로 $4 \mid n$이고 $6 \mid n$입니다. 그러나 $ab = 24$는 $12$를 나누지 않습니다. $k \le 0$이면 $24k \le 0 < 12$이고 $k \ge 1$이면 $24k \ge 24 > 12$이므로 $12 = 24k$인 정수 $k$가 없습니다. $4$의 양의 약수 $1, 2, 4$와 $6$의 양의 약수 $1, 2, 3, 6$의 공통 양의 약수는 $1, 2$이므로 $\gcd(4, 6) = 2 \ne 1$입니다.

증명이 막히는 곳은 $b \mid ak$에서 $b \mid k$를 얻는 단계입니다. 여기서는 $n = 12 = 4 \cdot 3$이므로 $k = 3$이고 $b = 6 \mid 4 \cdot 3$이지만 $6 \nmid 3$입니다. 앞 항목의 서로소 조건이 없으면 $b \mid k$가 나오지 않습니다.
:::

## 확인 질문

:::check[$7 \mid n$이고 $10 \mid n$이면 $70 \mid n$인가? $n = 210$으로 확인하라.]
$\gcd(7, 10) = 1$입니다($7$의 양의 약수는 $1$, $7$뿐이고 $7 \nmid 10$). 따라서 정리에 의해 $7 \mid n$이고 $10 \mid n$이면 $70 \mid n$입니다. $n = 210$이면 $210 = 7 \cdot 30 = 10 \cdot 21 = 70 \cdot 3$입니다.
:::

:::check[$3 \mid -60$이고 $5 \mid -60$일 때 정리로 어떤 결론을 얻는가?]
$-60 = 3 \cdot (-20)$이고 $-60 = 5 \cdot (-12)$입니다. $\gcd(3, 5) = 1$이므로 $15 \mid -60$이고, 실제로 $-60 = 15 \cdot (-4)$입니다.
:::
