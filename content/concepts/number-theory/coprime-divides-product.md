---
title: 곱의 한 인수와 서로소인 약수는 다른 인수를 나눈다
title_en: A Divisor Coprime to One Factor of a Product Divides the Other Factor
aliases: [coprime divides product, 서로소와 곱의 나누어떨어짐]
kind: proposition
field: number-theory
msc: ["11A05"]
level: undergrad
summary: 정수 a, b, c에 대하여 a가 곱 bc를 나누고 a와 b가 서로소이면 a는 c를 나눈다.
requires: [bezout-identity, greatest-common-divisor, divisibility, even-and-odd, well-ordering-principle]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 7장 연습문제 29, p.156 (풀이 p.327)
    checked: original
    note: "출처의 문제는 'a | bc이고 gcd(a, b) = 1이면 a | c'를 증명하라는 것이고 제안으로 p.152의 명제(베주)를 쓰라고 적는다(p.156). 책 뒤의 풀이(p.327)는 ax + by = 1에 c를 곱하고 bc = az를 대입해 a(cx + zy) = c를 얻는 직접 증명이다. 이 항목의 증명은 같은 방식이고 풀이와 문자(x, y, z)와 순서도 같다. 출처의 문제는 a, b, c의 범위를 적지 않고 풀이는 p.152의 Proposition 7.1(a, b가 자연수일 때의 진술)을 인용한다. 이 항목은 a, b가 둘 다 0은 아닌 정수라고 진술에 적었고(gcd(a, b)가 정의되려면 필요하다), 이 사이트의 베주 항등식이 정수에 대해 증명되어 있어 그대로 쓸 수 있다. 예시, 반례, 확인 질문은 새로 만들었다."
  - ref: stein-elementary-number-theory
    loc: 1.3절 Exercises, 연습문제 1.8(b), p.19
    checked: original
    note: "출처는 같은 진술을 정수 a, b, c, n에 대한 연습문제 1.8(b)로 싣는다(p.19). 책 뒤의 Answers and Hints(p.149)에는 1장 연습문제 1.8의 답이 없다(2장 9번의 힌트가 연습문제 1.8을 가리킬 뿐이다). 출처는 2.1.1절 Proposition 2.1.10(Cancellation, p.23)의 증명에서 n | (a − b)c이고 gcd(n, c) = 1이면 n | a − b라는 같은 꼴의 사실을 쓰는데, 그 자리에서는 산술의 기본 정리(Theorem 1.1.6)에서 나온다고만 적고 증명을 쓰지 않는다. 이 항목의 증명은 Hammack과 같은 베주 경로이다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 유한 곱의 정의와 성질을 보강하고 정렬된 꼴로 진술, 직관의 거짓 문장과 출처 기록 정정. 마지막 표현 수정은 지휘자가 변경분으로 확인."
added: 2026-11-16
---

:::statement
$a$, $b$, $c$가 정수이고 $a$, $b$가 둘 다 $0$은 아니며 $\gcd(a, b) = 1$이라 하자. 곧 $a$와 $b$는 [[greatest-common-divisor|서로소]]이다. 이때 $a \mid bc$이면 $a \mid c$이다.
:::

:::english
Let $a$, $b$, and $c$ be integers such that $a$ and $b$ are not both $0$ and $\gcd(a, b) = 1$; that is, $a$ and $b$ are relatively prime. If $a \mid bc$, then $a \mid c$.
:::

## 직관

$a$가 $bc$를 나눈다는 것은 $bc$가 $a$의 재료를 모두 갖추고 있다는 뜻입니다. 그 재료를 $b$가 대 줄 수 있다면 $c$에는 $a$의 재료가 없어도 됩니다. 서로소가 아닌 경우를 예로 들면, $a = 4$, $b = 6$, $c = 2$에서 $4 \mid 6 \cdot 2 = 12$이고 $4 = 2 \cdot 2$의 한 $2$는 $b = 6$에서, 다른 $2$는 $c = 2$에서 옵니다. 서로소는 $a$와 $b$의 공통인 양의 약수가 $1$뿐이라는 뜻이므로 $b$는 $a$의 재료를 하나도 대 주지 못하고, 따라서 $c$가 $a$의 재료를 모두 가져야 합니다. 이 비유는 "재료"라는 말을 쓰는 직관일 뿐이고, 아래 증명은 [[bezout-identity|베주 항등식]]만 씁니다.

[[euclids-lemma|유클리드 보조정리]]의 (1)은 이 명제의 특수한 경우입니다. 소수 $p$와 정수 $a$에 대하여 $p \nmid a$이면 $\gcd(p, a) = 1$입니다(유클리드 보조정리의 증명에서 보인 사실). 이 명제의 $a$, $b$, $c$ 자리에 각각 $p$, $a$, $b$를 넣으면, $p \mid ab$일 때 $p \mid b$를 얻습니다. 읽는 순서는 유클리드 보조정리가 먼저입니다. 거기서는 $p$가 소수라는 사실로 $\gcd(p, a) = 1$을 직접 보였고, 이 명제는 소수 대신 $\gcd = 1$이라는 조건만 가정한 일반형입니다.

## 증명

:::idea
$\gcd(a, b) = 1$이므로 베주 항등식으로 $ax + by = 1$을 얻는다. 양변에 $c$를 곱하면 $c = acx + bcy$이고, $a$는 두 항을 모두 나눈다.
:::

:::hint
$\gcd(a, b) = 1$에 [[bezout-identity|베주 항등식]]을 쓰면 어떤 식을 얻습니까?
:::

:::hint
그 식의 양변에 $c$를 곱하세요. 가정 $a \mid bc$를 정의대로 풀어 $bc$를 대신할 수 있습니다.
:::

:::proof
$a \mid bc$이므로 [[divisibility|나누어떨어짐]]의 정의에 의해 $bc = az$인 정수 $z$가 있다. $a$, $b$는 둘 다 $0$은 아니므로 [[bezout-identity|베주 항등식]]에 의해 $ax + by = \gcd(a, b)$인 정수 $x$, $y$가 있고, $\gcd(a, b) = 1$이므로 $ax + by = 1$이다. 양변에 $c$를 곱하면 정수의 덧셈·곱셈의 기본 계산 규칙([[well-ordering-principle]]의 진술에서 증명 없이 받아들임)에 의해
$$c = acx + bcy$$
이다. $bc = az$를 둘째 항에 대입하면 $bcy = (bc)y = azy$이므로
$$c = acx + azy = a(cx + zy)$$
이다. $c$, $x$, $z$, $y$가 정수이므로 정수의 합·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $cx + zy$는 정수이다. 따라서 $a \mid c$이다. $\blacksquare$
:::

## 예시와 반례

:::example[8과 15]
$a = 8$, $b = 15$라 하면 $8$의 양의 약수는 $1, 2, 4, 8$이고 $15$의 양의 약수는 $1, 3, 5, 15$이므로 공통 양의 약수는 $1$뿐이고 $\gcd(8, 15) = 1$입니다. $c = 40$이면 $bc = 600 = 8 \cdot 75$이므로 $8 \mid bc$이고, 정리에 의해 $8 \mid 40$이어야 합니다. 실제로 $40 = 8 \cdot 5$입니다.

증명의 수를 구해 보면 $z = 75$이고, $8 \cdot 2 + 15 \cdot (-1) = 16 - 15 = 1$이므로 $x = 2$, $y = -1$입니다. $c = a(cx + zy) = 8(40 \cdot 2 + 75 \cdot (-1)) = 8(80 - 75) = 8 \cdot 5 = 40$으로 맞습니다.
:::

:::example[a가 0인 경우]
$a = 0$, $b = 1$이면 $\gcd(0, 1) = 1$입니다([[greatest-common-divisor]]의 성질 (iv)). $0 \mid 1 \cdot c$이면 $c = 0 \cdot z = 0$이므로 $c = 0$이고, $0 \mid 0$입니다. 증명은 $a = 0$이어도 그대로 성립합니다.
:::

:::counterexample[서로소가 아니면 깨진다]
$a = 6$, $b = 10$, $c = 3$이면 $bc = 30 = 6 \cdot 5$이므로 $6 \mid bc$입니다. 그러나 $3 = 6k$인 정수 $k$가 없어($k \le 0$이면 $6k \le 0 < 3$이고 $k \ge 1$이면 $6k \ge 6 > 3$) $6 \nmid 3$입니다. $6$의 양의 약수 $1, 2, 3, 6$과 $10$의 양의 약수 $1, 2, 5, 10$의 공통 양의 약수는 $1, 2$이므로 $\gcd(6, 10) = 2 \ne 1$입니다.

증명이 막히는 곳은 베주 항등식으로 $ax + by = 1$을 얻는 단계입니다. $6x + 10y = 2(3x + 5y)$는 어떤 정수 $x$, $y$에 대해서도 짝수이고 $1$은 홀수이므로([[even-and-odd]]에서 받아들인 사실: 둘 다인 정수는 없다) $6x + 10y = 1$인 정수 $x$, $y$가 없습니다.
:::

## 확인 질문

:::check[$\gcd(14, 9) = 1$이다. 정수 $c$에 대하여 $14 \mid 9c$이면 $14 \mid c$인가? $c = 42$로 확인하라.]
$14$의 양의 약수는 $1, 2, 7, 14$이고 $9$의 양의 약수는 $1, 3, 9$이므로 $\gcd(14, 9) = 1$입니다. 따라서 $a = 14$, $b = 9$에 대해 $14 \mid 9c$이면 $14 \mid c$입니다. $c = 42$이면 $9c = 378 = 14 \cdot 27$이므로 $14 \mid 9c$이고, $42 = 14 \cdot 3$이므로 $14 \mid c$입니다.
:::

:::check[$\gcd(a, b) = 1$일 때 거꾸로 $a \mid c$이면 $a \mid bc$인가?]
네. $a \mid c$이면 $c = ak$인 정수 $k$가 있고 $bc = a(bk)$이며 $bk$는 정수이므로 $a \mid bc$입니다. 이 방향은 $\gcd(a, b) = 1$ 없이도 성립합니다. 따라서 $\gcd(a, b) = 1$이면 "$a \mid bc$"와 "$a \mid c$"는 같은 조건입니다.
:::
