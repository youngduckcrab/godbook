---
title: 합동은 동치관계이다
title_en: Congruence Modulo n Is an Equivalence Relation
aliases: [합동은 동치관계, congruence is an equivalence relation]
kind: theorem
field: number-theory
msc: ["11A07"]
level: intro
summary: 자연수 n에 대하여 정수 위의 관계 "x ≡ y (mod n)"은 반사적이고 대칭적이고 추이적이다. 곧 동치관계이다.
requires: [congruence-modulo-n, equivalence-relation, equivalence-class, equivalence-classes-equal-iff-related, partition, equivalence-classes-form-a-partition, properties-of-relations, relation, divisibility, even-and-odd, direct-proof]
proof: full
sources:
  - ref: hammack-book-of-proof
    loc: 11.2절 Properties of Relations, Example 11.8의 Proposition (≡ (mod n)이 Z 위에서 반사적, 대칭적, 추이적), p.208
    checked: original
    note: "출처의 증명과 같은 방식이다. 반사성은 n | 0, 대칭성은 양변에 −1을 곱하기, 추이성은 두 식을 더하기로 보인다. 출처는 이를 반사적·대칭적·추이적이라는 세 성질로 진술하고, 이 사이트의 진술은 같은 내용을 동치관계라는 이름으로 적었다. 출처는 이 관계가 동치관계임을 11.3절 Example 11.13(p.212)에서 이 사실을 바탕으로 쓴다. 예시 중 mod 2의 동치류(짝수 전체와 홀수 전체)와 mod 4의 동치류는 새로 만들었다. 출처 11.3절 Example 11.13은 mod 3을, 11.4절 연습문제 3(p.217)은 mod 4로 만들어지는 ℤ의 분할을 묻는 문제로 다루므로 mod 4는 그 문제와 주제가 같지만 이 항목의 예시와 계산은 직접 만든 것이다. 반례(정수 위의 나누어떨어짐은 반사적이지만 대칭적이 아니다)는 출처 p.205의 표에 나오는 사실이고, 2 | 4, 4 ∤ 2라는 수치는 새로 골랐다. 확인 질문은 새로 만들었다."
status: reviewed
review_note: "2026-11-16 독립 검토 4회. 수학적 오류 없음. 정의되지 않은 기호 제거, 출처에서 가져온 예 교체, 출처 기록 정정."
added: 2026-11-16
---

:::statement
$n$이 자연수라 하자. 정수 $x$, $y$에 대하여 "$x R y$는 정확히 $x \equiv y \pmod n$일 때이다"로 $\mathbb{Z}$ 위의 [[relation]] $R$을 정한다([[congruence-modulo-n|합동의 정의]]). 그러면 $R$은 $\mathbb{Z}$ 위의 [[equivalence-relation]]이다. 곧 다음이 성립한다.

1. (반사성) 모든 정수 $x$에 대하여 $x \equiv x \pmod n$이다.
2. (대칭성) 모든 정수 $x, y$에 대하여 $x \equiv y \pmod n$이면 $y \equiv x \pmod n$이다.
3. (추이성) 모든 정수 $x, y, z$에 대하여 $x \equiv y \pmod n$이고 $y \equiv z \pmod n$이면 $x \equiv z \pmod n$이다.
:::

:::english
Let $n$ be a natural number. Define a relation $R$ on $\mathbb{Z}$ by declaring, for integers $x$ and $y$, that $x R y$ holds exactly when $x \equiv y \pmod n$. Then $R$ is an equivalence relation on $\mathbb{Z}$. That is, the following hold.

1. (Reflexivity) $x \equiv x \pmod n$ for every integer $x$.
2. (Symmetry) For all integers $x, y$, if $x \equiv y \pmod n$ then $y \equiv x \pmod n$.
3. (Transitivity) For all integers $x, y, z$, if $x \equiv y \pmod n$ and $y \equiv z \pmod n$ then $x \equiv z \pmod n$.
:::

## 직관

시계의 비유로 읽으면, "같은 자리를 가리킨다"는 관계입니다. $x$시는 자기와 같은 자리를 가리키고, $x$시가 $y$시와 같은 자리이면 $y$시도 $x$시와 같은 자리이며, $x$시와 $y$시, $y$시와 $z$시가 각각 같은 자리이면 $x$시와 $z$시도 같은 자리입니다. 이 비유에서 한 바퀴가 $n$입니다.

계산으로는 "차가 $n$의 배수"라는 조건이 세 성질을 물려받는다는 말입니다. $0$은 $n$의 배수이고, $n$의 배수의 $-1$배는 $n$의 배수이고, $n$의 배수 둘의 합도 $n$의 배수입니다. 이 세 사실이 각각 반사성, 대칭성, 추이성에 대응합니다.

## 증명

:::idea
각 성질을 [[direct-proof]]으로 보인다. $x \equiv y \pmod n$은 $x - y = nc$인 정수 $c$가 있다는 뜻이므로, 이 식에서 출발해 필요한 결론의 식을 만든다.
:::

:::hint
반사성은 $x - x$가 무엇인지 보면 됩니다. $0$을 $n$과 어떤 정수의 곱으로 쓸 수 있나요?
:::

:::hint
대칭성은 $x - y = na$에서 $y - x$의 식을 만듭니다. 양변에 $-1$을 곱해 보세요.
:::

:::hint
추이성은 $x - y = na$와 $y - z = nb$ 두 식을 가지고 있습니다. 더하면 $x - z$가 나옵니다.
:::

:::proof
$n$을 자연수라 하자. [[congruence-modulo-n|합동]]에 의해 정수 $x$, $y$에 대하여 $x \equiv y \pmod n$인 것은 정확히 $n \mid (x - y)$일 때이고, [[divisibility|나누어떨어짐]]에 의해 이는 정확히 $x - y = nc$인 정수 $c$가 존재할 때이다. $R$이 반사적, 대칭적, 추이적임을 차례로 보인다.

**반사성.** $x$를 임의의 정수라 하자. $x - x = 0 = n \cdot 0$이고 $0$은 정수이므로 $n \mid (x - x)$이다. 따라서 $x \equiv x \pmod n$이다. $x$가 임의의 정수였으므로 모든 정수 $x$에 대하여 $x \equiv x \pmod n$이고, $R$은 반사적이다.

**대칭성.** $x$, $y$를 임의의 정수라 하고 $x \equiv y \pmod n$이라 가정한다. 그러면 $x - y = na$인 정수 $a$가 있다. 양변에 $-1$을 곱하면 $y - x = n(-a)$이다. 정수의 곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $-a = (-1) \cdot a$는 정수이다. 따라서 $n \mid (y - x)$이고 $y \equiv x \pmod n$이다. 곧 모든 정수 $x, y$에 대하여 $x \equiv y \pmod n$이면 $y \equiv x \pmod n$이고, $R$은 대칭적이다.

**추이성.** $x$, $y$, $z$를 임의의 정수라 하고 $x \equiv y \pmod n$이고 $y \equiv z \pmod n$이라 가정한다. 그러면 $x - y = na$, $y - z = nb$인 정수 $a$, $b$가 있다. 두 식을 더하면
$$x - z = (x - y) + (y - z) = na + nb = n(a + b)$$
이다. 정수의 합은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)에 의해 $a + b$는 정수이다. 따라서 $n \mid (x - z)$이고 $x \equiv z \pmod n$이다. 곧 모든 정수 $x, y, z$에 대하여 $x \equiv y \pmod n$이고 $y \equiv z \pmod n$이면 $x \equiv z \pmod n$이고, $R$은 추이적이다.

$R$이 반사적이고 대칭적이고 추이적이므로 [[equivalence-relation]]의 정의에 의해 동치관계이다.
:::

## 예시와 반례

:::example[mod 2의 동치류]
$n = 2$일 때 $R$의 동치류([[equivalence-class]])는 $[0] = \{x \in \mathbb{Z} : x \equiv 0 \pmod 2\} = \{x \in \mathbb{Z} : 2 \mid x\}$입니다. $2 \mid x$는 $x = 2c$인 정수 $c$가 있다는 뜻이므로 $[0]$은 짝수 전체입니다. $[1] = \{x \in \mathbb{Z} : 2 \mid (x - 1)\}$이고, $x - 1 = 2c$는 $x = 2c + 1$과 같은 뜻이므로 $[1]$은 홀수 전체입니다. $1 - 0 = 1 = 2c$이면 $c = 0.5$로 정수가 아니므로 $1 \not\equiv 0 \pmod 2$이고, 동치류가 같을 조건([[equivalence-classes-equal-iff-related]])에 의해 $[1] \ne [0]$입니다. 모든 정수는 짝수이거나 홀수이므로 모든 정수 $x$는 $[0]$ 또는 $[1]$에 속하고, 그러면 $[x]$가 그 동치류와 같으므로 동치류는 이 둘뿐이며, 동치류 전체 $\{[0], [1]\}$은 $\mathbb{Z}$의 [[partition]]입니다([[equivalence-classes-form-a-partition]]).
:::

:::example[mod 4의 동치류]
$n = 4$일 때
- $[0] = \{x \in \mathbb{Z} : 4 \mid x\} = \{\dots, -8, -4, 0, 4, 8, \dots\}$
- $[1] = \{x \in \mathbb{Z} : 4 \mid (x - 1)\} = \{\dots, -7, -3, 1, 5, 9, \dots\}$
- $[2] = \{x \in \mathbb{Z} : 4 \mid (x - 2)\} = \{\dots, -6, -2, 2, 6, 10, \dots\}$
- $[3] = \{x \in \mathbb{Z} : 4 \mid (x - 3)\} = \{\dots, -5, -1, 3, 7, 11, \dots\}$

입니다. 예를 들어 $-7 - 1 = -8 = 4 \cdot (-2)$, $9 - 1 = 8 = 4 \cdot 2$이므로 $-7$과 $9$는 $[1]$에 있습니다. 이 넷은 서로 다른 동치류입니다. 더 큰 쪽에서 작은 쪽을 뺀 차는 $[1]$과 $[0]$에서 $1 - 0 = 1$, $[2]$와 $[0]$에서 $2 - 0 = 2$, $[3]$과 $[0]$에서 $3 - 0 = 3$, $[2]$와 $[1]$에서 $2 - 1 = 1$, $[3]$과 $[1]$에서 $3 - 1 = 2$, $[3]$과 $[2]$에서 $3 - 2 = 1$이고, $1$, $2$, $3$은 어느 것도 $4c$($c$는 정수)꼴이 아닙니다. 따라서 어느 두 수도 합동이 아니고, 동치류가 같을 조건에 의해 네 동치류는 모두 다릅니다. 이 넷이 $\mathbb{Z}$ 전체를 덮는지는 "정수를 $4$로 나누면 몫과 $0$ 이상 $4$ 미만의 나머지가 하나로 정해진다"는 사실이 있어야 보이는데, 이 사실은 아직 배우지 않았으므로 여기서는 다루지 않습니다.
:::

:::counterexample[비슷해 보여도 동치관계가 아닌 관계]
$\mathbb{Z}$ 위의 나누어떨어짐 "$x \mid y$"는 반사적입니다. $x = x \cdot 1$이기 때문입니다. 그러나 대칭적이 아닙니다. $2 \mid 4$이지만 $4 \mid 2$는 거짓입니다($2 = 4c$이면 $c = 0.5$). 합동과 달리 동치관계가 아닙니다.
:::

## 확인 질문

:::check[$n = 7$일 때 $15$와 $-6$은 같은 동치류에 있는가? $4$는 $[1]$에 있는가?]
$15 - (-6) = 21 = 7 \cdot 3$이므로 $15 \equiv -6 \pmod 7$이고, 동치류가 같을 조건에 의해 $[15] = [-6]$입니다. $4 - 1 = 3$이고 $3 = 7c$이면 $c = 3/7$이므로 $7 \nmid 3$입니다. $4 \equiv 1 \pmod 7$이 아니므로 $4 \notin [1]$입니다.
:::

:::check[$n = 5$일 때 $[2] = [12]$인가?]
그렇습니다. $12 - 2 = 10 = 5 \cdot 2$이므로 $12 \equiv 2 \pmod 5$이고, 동치류가 같을 조건에 의해 $[12] = [2]$입니다.
:::
