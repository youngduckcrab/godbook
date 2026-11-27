---
title: 환의 표수
title_en: Characteristic of a Ring
aliases: [표수, 특성, char, characteristic]
kind: definition
field: ring-theory
msc: ["13", "12E99"]
level: undergrad
summary: 단위원을 갖는 환의 표수를 덧셈군에서 단위원의 위수로 정의한다(위수가 무한하면 0). 정수배가 0 이 될 조건, 출처의 정의와 같다는 것, 정역의 표수는 0 이거나 소수라는 것, 정수·실수·법 m 의 정수의 표수, 표수가 소수 p 이면 p의 거듭제곱 배가 0 이라는 것, 준동형과 부분환에서의 표수를 보인다.
requires: [set, function, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, divisibility, prime-power-divisors, group, power-in-a-group, laws-of-exponents, order-of-an-element, number-groups, integers-modulo-n, ring, ring-basic-properties, ring-examples, subring, integral-domain, ring-homomorphism]
sources:
  - ref: judson-abstract-algebra
    loc: "16.2절 Integral Domains and Fields, 표수의 정의 (번호 없음, p.194), Example 16.17 (p.194–195), Lemma 16.18 (p.195), Theorem 16.19 (p.195); 22.1절 Structure of a Finite Field, 첫 문단과 Proposition 22.2 의 증명 (p.278); 16.7절 Exercises, 연습문제 30 (p.206); 9.2절 Example 9.19 (p.119)"
    checked: original
    note: "출처는 음이 아닌 정수 n 에 대해 r + ⋯ + r (n 개)를 nr 로 쓰고, 표수 char R 을 '모든 r ∈ R 에서 nr = 0 인 가장 작은 양의 정수 n, 그런 정수가 없으면 0' 으로 정의한다(p.194). 이 항목은 단위원을 갖는 환에서 표수를 덧셈군에서 1 의 위수로 정의하고, 출처의 정의와 같다는 것을 (2)로 보인다. 이 정의는 출처 Lemma 16.18(p.195) '단위원을 갖는 환에서 1 의 위수가 n 이면 표수는 n' 을 정의로 올린 것이다. 출처의 정의는 단위원이 없는 환에도 쓰이고 이 항목의 정의는 단위원을 갖는 환에만 쓴다. (1)의 n·a = (n·1)a 는 Lemma 16.18 의 증명의 nr = n(1r) = (n1)r 과 같은 계산이다. (1)의 '정수배 n·1 이 0 인 것은 정확히 char R 이 n 을 나눌 때' 는 출처 Proposition 22.2 의 증명(p.278)이 ϕ(n) = n·1 의 핵을 pℤ 라고 적는 것과 같은 내용이다. (3)은 Theorem 16.19 이다. 출처의 증명은 'n = ab, 1 < a < n, 1 < b < n' 으로 두는데, 이 항목은 n ≥ 2 를 먼저 보이고(표수 1 은 1 = 0 이어야 한다) 'a·1 = 0 이면 n | a 이므로 n ≤ a' 로 모순을 낸다. (4)의 char ℤ_p = p 는 Example 16.17(p.194–195)과 같다. (6)의 'char R = p 이면 모든 a 에서 p·a = 0' 은 22.1절 첫 문단(p.278)이 표수가 p 인 체를 '모든 원소 α 에서 pα = 0 인 가장 작은 양의 정수 p' 로 다시 적는 것과 같은 내용이다. 확인 질문 '$\\mathbb{Z}_{12}$의 표수는 무엇이고, 그 부분집합 $\\{[0], [4], [8]\\}$은 어떤가?' 의 부분집합은 출처 연습문제 16.30(p.206, 부분환의 단위원이 환의 단위원과 같은지 묻는다)과 같은 종류의 물음이고, 그 답의 '[4] 를 세 번 더하면 [0]' 은 출처 Example 9.19(p.119)가 Z12 에서 8 의 위수를 3 으로 구하는 것과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$R$이 단위원 $1$을 갖는 [[ring|환]]이라 하자. $0$, $1$, 곱 $ab$, 정수배 $n \cdot a$는 [[ring|환]]의 표기이고, 원소의 위수가 유한하다, 위수 $\operatorname{ord}$, 위수가 무한하다는 덧셈군 $(R, +)$에서의 [[order-of-an-element|원소의 위수]]의 뜻이다. 나누어떨어짐 $a \mid b$는 [[divisibility|나누어떨어짐]]의 것이다(정수 $n$에 대하여 $0 \mid n$인 것은 정확히 $n = 0$일 때이다).

$R$의 **표수**(characteristic) $\operatorname{char} R$를 다음과 같이 정한다.

- 덧셈군 $(R, +)$에서 $1$의 위수가 유한하면 $\operatorname{char} R = \operatorname{ord}(1)$이다.
- $1$의 위수가 무한하면 $\operatorname{char} R = 0$이다.

따라서 $\operatorname{char} R$는 $0$ 이상인 정수이다. 다음이 성립한다. 아래에서 $n$은 정수이고 $a$는 $R$의 원소이다.

1. (정수배가 $0$이 될 조건) $n \cdot 1 = 0$인 것은 정확히 $\operatorname{char} R \mid n$일 때이다. 또 $n \cdot a = (n \cdot 1)\,a$이므로, $\operatorname{char} R \mid n$이면 $R$의 모든 원소 $a$에서 $n \cdot a = 0$이다.
2. (출처의 정의와 같다) $\operatorname{char} R \ne 0$이면 $\operatorname{char} R \ge 2$이고, $\operatorname{char} R$는 "$R$의 모든 원소 $a$에서 $n \cdot a = 0$"인 자연수 $n$ 가운데 가장 작은 것이다. $\operatorname{char} R = 0$인 것은 정확히 "$R$의 모든 원소 $a$에서 $n \cdot a = 0$"인 자연수 $n$이 없을 때이다.
3. (정역) $R$이 [[integral-domain|정역]]이면 $\operatorname{char} R$는 $0$이거나 소수이다. 또 정역 $R$의 원소 $a \ne 0$에 대하여 $n \cdot a = 0$인 것은 정확히 $\operatorname{char} R \mid n$일 때이다.
4. (예) 환은 [[ring-examples|환의 예]]의 것이다. $\operatorname{char} \mathbb{Z} = 0$이고 $\operatorname{char} \mathbb{R} = 0$이다. $m \ge 2$인 정수 $m$에 대하여 $\operatorname{char} \mathbb{Z}_m = m$이다. 특히 소수 $p$에 대하여 $\operatorname{char} \mathbb{Z}_p = p$이다.
5. (준동형과 부분환) $R'$이 단위원 $1'$을 갖는 환이고 $\varphi : R \to R'$이 $\varphi(1) = 1'$인 [[ring-homomorphism|환 준동형]]이라 하자.
   - (i) $\operatorname{char} R' \mid \operatorname{char} R$이다.
   - (ii) $\varphi$가 단사이면 $\operatorname{char} R' = \operatorname{char} R$이다.
   - (iii) $S$가 $1 \in S$인 $R$의 [[subring|부분환]]이면 $S$는 단위원 $1$을 갖는 환이고 $\operatorname{char} S = \operatorname{char} R$이다.
6. (표수가 소수인 환) $\operatorname{char} R = p$이고 $p$가 소수이면, $R$의 모든 원소 $a$와 모든 자연수 $k$에서 $p \cdot a = 0$이고 $p^k \cdot a = 0$이다. 여기서 $p^k$는 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 정수의 거듭제곱이다. 거꾸로 소수 $p$에 대하여 $p \cdot 1 = 0$이면 $\operatorname{char} R = p$이다.
:::

:::english
Let $R$ be a ring with unity $1$. The notations $0$, $1$, products $ab$ and integer multiples $n \cdot a$ are those of the entry on rings, and "the order of an element is finite", the order $\operatorname{ord}$, and "the order is infinite" are taken in the additive group $(R, +)$ in the sense of the entry on the order of an element. Divisibility $a \mid b$ is that of the entry on divisibility (for an integer $n$, $0 \mid n$ exactly when $n = 0$).

The **characteristic** $\operatorname{char} R$ of $R$ is defined as follows.

- If $1$ has finite order in the additive group $(R, +)$, then $\operatorname{char} R = \operatorname{ord}(1)$.
- If $1$ has infinite order, then $\operatorname{char} R = 0$.

Thus $\operatorname{char} R$ is an integer $\ge 0$. The following hold, where $n$ is an integer and $a$ is an element of $R$.

1. (When an integer multiple is $0$) $n \cdot 1 = 0$ exactly when $\operatorname{char} R \mid n$. Also $n \cdot a = (n \cdot 1)\,a$, so if $\operatorname{char} R \mid n$ then $n \cdot a = 0$ for every element $a$ of $R$.
2. (Agreement with the source's definition) If $\operatorname{char} R \ne 0$, then $\operatorname{char} R \ge 2$, and $\operatorname{char} R$ is the least natural number $n$ such that $n \cdot a = 0$ for every element $a$ of $R$. $\operatorname{char} R = 0$ exactly when there is no natural number $n$ such that $n \cdot a = 0$ for every element $a$ of $R$.
3. (Integral domains) If $R$ is an integral domain, then $\operatorname{char} R$ is $0$ or a prime. Moreover, for an element $a \ne 0$ of an integral domain $R$, $n \cdot a = 0$ exactly when $\operatorname{char} R \mid n$.
4. (Examples) The rings are those of the entry on examples of rings. $\operatorname{char} \mathbb{Z} = 0$ and $\operatorname{char} \mathbb{R} = 0$. For an integer $m \ge 2$, $\operatorname{char} \mathbb{Z}_m = m$. In particular $\operatorname{char} \mathbb{Z}_p = p$ for a prime $p$.
5. (Homomorphisms and subrings) Let $R'$ be a ring with unity $1'$ and $\varphi : R \to R'$ a ring homomorphism with $\varphi(1) = 1'$.
   - (i) $\operatorname{char} R' \mid \operatorname{char} R$.
   - (ii) If $\varphi$ is injective, then $\operatorname{char} R' = \operatorname{char} R$.
   - (iii) If $S$ is a subring of $R$ with $1 \in S$, then $S$ is a ring with unity $1$ and $\operatorname{char} S = \operatorname{char} R$.
6. (Rings of prime characteristic) If $\operatorname{char} R = p$ with $p$ prime, then $p \cdot a = 0$ and $p^k \cdot a = 0$ for every element $a$ of $R$ and every natural number $k$, where $p^k$ is the integer power of the entry on prime power divisors. Conversely, if $p$ is a prime with $p \cdot 1 = 0$, then $\operatorname{char} R = p$.
:::

## 직관

$1$을 거듭 더해 $1$, $1 + 1$, $1 + 1 + 1$, …을 만들어 갈 때 언젠가 $0$으로 돌아오는지를 재는 수가 표수입니다. 시계의 바늘을 한 칸씩 돌리는 것에 비유하면, $\mathbb{Z}_{12}$에서는 열두 칸을 돌리면 처음 자리로 돌아오므로 표수가 $12$입니다. 비유가 맞는 곳은 "처음으로 돌아오는 가장 적은 칸 수"가 위수라는 점이고, 맞지 않는 곳은 $\mathbb{Z}$나 $\mathbb{R}$처럼 끝없이 돌려도 돌아오지 않는 환이 있다는 점입니다. 그런 환의 표수를 $0$으로 정합니다.

$1$만 보면 충분한 까닭은 (1)의 $n \cdot a = (n \cdot 1)a$입니다. $1$을 $n$번 더한 것이 $0$이면 어떤 원소든 $n$번 더하면 $0$입니다. 그래서 단위원의 위수로 정한 이 항목의 정의가 "모든 원소를 $n$번 더하면 $0$"으로 정한 출처의 정의와 같습니다((2)).

정역에서 표수가 $6$처럼 합성수일 수 없는 것은 $6 \cdot 1 = (2 \cdot 1)(3 \cdot 1)$이 $0$이면 두 인수 가운데 하나가 $0$이어야 하기 때문입니다((3)).

## 증명

:::idea
표수는 덧셈군에서 $1$의 위수이므로 (1)은 위수의 성질에서 바로 나온다. 나머지는 (1)과 $n \cdot a = (n \cdot 1)a$를 되풀이해 쓴 것이다.
:::

:::hint
(3)에서 $\operatorname{char} R = c \ge 2$가 소수가 아니면 $c = de$이고 $1 < d < c$, $1 < e < c$이다. $c \cdot 1$을 두 정수배의 곱으로 나누어 본다.
:::

:::hint
(5)의 (i)은 $\varphi(n \cdot 1) = n \cdot 1'$에서 나온다.
:::

:::proof
**쓰는 사실.** [[order-of-an-element|원소의 위수]]의 (2), (4), (7)을 덧셈군 $(R, +)$에서 쓴다. [[ring-basic-properties|환의 기본 성질]]의 (6)은 $n \cdot a = (n \cdot 1)a$이고 $(m \cdot 1)(n \cdot 1) = (mn) \cdot 1$이다. 정수의 순서는 [[prime-number]]의 (Z1)–(Z4)와 그 진술의 "자연수 $n$의 양의 약수 $d$는 $1 \le d \le n$", [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓴다.

**1의 증명.** $\operatorname{char} R = c \ne 0$이면 $1$의 위수가 유한하고 $c = \operatorname{ord}(1)$이므로, 원소의 위수의 (7)과 (2)에 의해 $n \cdot 1 = 0$인 것은 정확히 $c \mid n$일 때이다. $\operatorname{char} R = 0$이면 $1$의 위수가 무한하므로 원소의 위수의 (4)에 의해 $n \cdot 1 = 0$인 것은 정확히 $n = 0$일 때이고, 나누어떨어짐의 정의에 의해 $0 \mid n$인 것은 $n = 0 \cdot t$인 정수 $t$가 있을 때, 곧 $n = 0$일 때이다. 둘째 문장은 환의 기본 성질의 (6)과 (1)에 의해 $n \cdot a = (n \cdot 1)a = 0 \cdot a = 0$이다.

**2의 증명.** $c = \operatorname{char} R \ne 0$이라 하자. $c$는 자연수이다. $c = 1$이면 $1 \cdot 1 = 1$이 $0$이어야 하는데([[ring|환]]의 정수배 $1 \cdot a = a$) 단위원을 갖는 환에서 $1 \ne 0$이므로 $c \ne 1$이고, (Z1)에 의해 $c \ge 2$이다. (1)에 의해 모든 $a$에서 $c \cdot a = 0$이다. 자연수 $n$이 모든 $a$에서 $n \cdot a = 0$을 만족하면 $n \cdot 1 = 0$이므로 (1)에 의해 $c \mid n$이고, $c$는 $n$의 양의 약수이므로 $c \le n$이다. 따라서 $c$가 가장 작은 것이다. $\operatorname{char} R = 0$이면, 모든 $a$에서 $n \cdot a = 0$인 자연수 $n$이 있다고 할 때 $n \cdot 1 = 0$이므로 (1)에 의해 $n = 0$이 되어 $n$이 자연수인 것과 어긋난다. 거꾸로 그런 자연수가 없으면 $\operatorname{char} R \ne 0$일 수 없다(앞의 경우에 $c$가 그런 자연수이다).

**3의 증명.** $c = \operatorname{char} R \ne 0$이라 하고 $c$가 소수가 아니라고 하자. (2)에 의해 $c \ge 2$이므로 [[prime-number|소수]]의 정의에 의해 $1$과 $c$가 아닌 양의 약수 $d$가 있고, $1 \le d \le c$에서 $1 < d < c$이다. $c = de$인 정수 $e$를 잡으면 $e > 0$이다($e \le 0$이면 (Z2)에 의해 $c \le 0$). $e$도 $c$의 양의 약수이므로 $1 \le e \le c$이고, $e = 1$이면 $c = d$, $e = c$이면 (Z4)에 의해 $d = 1$이 되어 둘 다 어긋나므로 $1 < e < c$이다. 환의 기본 성질의 (6)에 의해 $0 = c \cdot 1 = (d \cdot 1)(e \cdot 1)$이고, 정역에는 영인자가 없으므로([[integral-domain|정역]]의 정의) $d \cdot 1 = 0$이거나 $e \cdot 1 = 0$이다. 앞의 경우 (1)에 의해 $c \mid d$이고 $d$는 자연수이므로 $c \le d$인데 이것은 $d < c$와 어긋난다((L1)). 뒤의 경우도 같은 이유로 $c \le e < c$가 되어 어긋난다. 따라서 $c$는 소수이다. 둘째 문장: $a \ne 0$이면 $n \cdot a = (n \cdot 1)a$가 $0$인 것은 정역의 정의와 환의 기본 성질의 (1)에 의해 정확히 $n \cdot 1 = 0$일 때이고, (1)에 의해 정확히 $\operatorname{char} R \mid n$일 때이다.

**4의 증명.** 원소의 위수의 (7)에 의해 $(\mathbb{Z}, +)$에서 $1$의 위수는 무한하므로 $\operatorname{char} \mathbb{Z} = 0$이다. $m \ge 2$이면 [[ring-examples|환의 예]]의 (3)에 의해 $\mathbb{Z}_m$은 단위원 $[1]$을 갖는 환이고, 원소의 위수의 (7)에 의해 $\operatorname{ord}([1]) = m$이므로 $\operatorname{char} \mathbb{Z}_m = m$이다. [[subring|부분환]]의 (4)에 의해 $\mathbb{Z}$는 $\mathbb{R}$의 부분환이고 $1 \in \mathbb{Z}$이므로, 아래 (5)의 (iii)에 의해 $\operatorname{char} \mathbb{R} = \operatorname{char} \mathbb{Z} = 0$이다. ((5)의 증명은 (4)를 쓰지 않는다.)

**5의 증명.** [[ring-homomorphism|환 준동형]]의 (1)에 의해 모든 정수 $n$에서 $\varphi(n \cdot 1) = n \cdot \varphi(1) = n \cdot 1'$이다. (i) $c = \operatorname{char} R$에 대하여 (1)에 의해 $c \cdot 1 = 0$이므로 $c \cdot 1' = \varphi(0) = 0$이고, $R'$에서의 (1)에 의해 $\operatorname{char} R' \mid c$이다. (ii) $c' = \operatorname{char} R'$이라 하면 $\varphi(c' \cdot 1) = c' \cdot 1' = 0 = \varphi(0)$이고 $\varphi$가 단사이므로 $c' \cdot 1 = 0$, 곧 (1)에 의해 $c \mid c'$이다. (i)과 함께 $c \mid c'$이고 $c' \mid c$이다. $c = 0$이면 $c \mid c'$에서 $c' = 0$이다. $c \ne 0$이면 $c' \mid c$에서 $c' \ne 0$이고, 두 자연수가 서로의 양의 약수이므로 $c \le c'$이고 $c' \le c$이어서 (L2)에 의해 $c = c'$이다. (iii) 부분환의 (5)의 (i)에 의해 $S$는 단위원 $1$을 갖는 환이다. 환 준동형의 (7)의 (ii)에 의해 포함 함수 $S \to R$는 단사인 환 준동형이고 $1$을 $1$로 보내므로, (ii)에 의해 $\operatorname{char} R = \operatorname{char} S$이다.

**6의 증명.** $k \ge 1$이면 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (2)에 의해 $p \mid p^k$이므로, (1)에 의해 모든 $a$에서 $p^k \cdot a = 0$이다. $k = 1$이면 $p^1 = p$(같은 항목의 (1))이므로 $p \cdot a = 0$이다. 거꾸로 $p \cdot 1 = 0$이면 (1)에 의해 $\operatorname{char} R \mid p$이다. $\operatorname{char} R = 0$이면 $p = 0$이 되어 어긋나므로 $\operatorname{char} R$는 $p$의 양의 약수이고, 소수의 정의에 의해 $1$이거나 $p$이다. (2)에 의해 $\operatorname{char} R \ge 2$이므로 $\operatorname{char} R = p$이다.
:::

## 예시와 반례

:::example[법 12의 정수의 표수]
$\mathbb{Z}_{12}$에서 $[1]$을 거듭 더하면 $[1], [2], \dots, [11]$은 $[0]$이 아니고 $12 \cdot [1] = [12] = [0]$입니다. 그래서 $\operatorname{char} \mathbb{Z}_{12} = 12$입니다((4)). (1)에 의해 $n \cdot [1] = [0]$인 정수는 정확히 $12$의 배수이고, 예컨대 $18 \cdot [1] = [18] = [6] \ne [0]$입니다. 원소 $[3]$은 $4 \cdot [3] = [12] = [0]$이어서 $12$보다 적게 더해도 $0$이 되지만, 표수는 모든 원소에 대해 통하는 수이므로 $12$입니다.
:::

:::counterexample[정역이 아니면 표수가 합성수일 수 있다]
$\mathbb{Z}_{6}$의 표수는 $6$이고 $6$은 소수가 아닙니다. (3)의 증명처럼 $[0] = 6 \cdot [1] = (2 \cdot [1])(3 \cdot [1]) = [2][3]$이고 $[2] \ne [0]$, $[3] \ne [0]$입니다. $\mathbb{Z}_6$이 정역이 아니므로([[integral-domain|정역]]의 (3)) (3)과 어긋나지 않습니다.
:::

## 확인 질문

:::check[$\mathbb{Z}_{12}$의 표수는 무엇이고, 그 부분집합 $\{[0], [4], [8]\}$은 어떤가?]
$\mathbb{Z}_{12}$의 표수는 $12$입니다. $\{[0], [4], [8]\}$은 $[1]$을 포함하지 않으므로 (5)의 (iii)을 쓸 수 없습니다. 실제로 이 부분집합은 덧셈과 곱셈에 닫혀 있는 부분환이고 $[4][4] = [16] = [4]$, $[4][8] = [32] = [8]$이므로 $[4]$가 곱셈의 항등원이며 $[4] \ne [0]$입니다. 이 환에서 $[4]$를 거듭 더하면 $3 \cdot [4] = [0]$이므로 표수는 $3$이고, $12$와 다릅니다.
:::

:::check[단위원을 갖는 환 $R$에서 $10 \cdot 1 = 0$이고 $4 \cdot 1 \ne 0$이면 $\operatorname{char} R$는 무엇일 수 있는가?]
(1)에 의해 $\operatorname{char} R$는 $10$의 양의 약수이므로 $1$, $2$, $5$, $10$ 가운데 하나입니다. (2)에 의해 $1$은 아니고, $\operatorname{char} R = 2$이면 $2 \mid 4$이므로 $4 \cdot 1 = 0$이 되어 어긋납니다. 따라서 $5$이거나 $10$입니다. 둘 다 실제로 일어납니다($\mathbb{Z}_5$와 $\mathbb{Z}_{10}$).
:::
