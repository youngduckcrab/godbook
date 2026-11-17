---
title: 등비수열의 극한
title_en: Limit of a Geometric Sequence
aliases: [cⁿ 의 극한, 거듭제곱 수열의 극한, geometric sequence, limit of c to the n]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수 c 에 대하여 n 번째 항이 cⁿ 인 수열은 |c| < 1 이면 0 으로 수렴하고, c = 1 이면 1 로 수렴하며, c = −1 이면 발산하고, |c| > 1 이면 유계가 아니어서 발산한다.
requires: [proof-by-contradiction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, basic-limits, convergent-sequence-is-bounded, monotone-convergence-theorem, tail-of-a-sequence, comparison-with-null-sequence, limit-of-sum-and-product]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.2.4절 Proposition 2.2.11 과 그 증명 (p.68)
    checked: original
    note: "출처의 Proposition 2.2.11(p.68)은 c > 0 일 때 (i) c < 1 이면 lim cⁿ = 0, (ii) c > 1 이면 {cⁿ} 이 유계가 아니라는 것이다. 출처는 c > 0 인 경우만 다루고, 이 항목은 c ≤ 0 과 c = ±1 을 더해 모든 실수 c 로 넓혔다. 음의 공비와 c = 0 은 |cⁿ| = |c|ⁿ(power-of-a-real-number 의 (4))과 comparison-with-null-sequence 의 (2)로, c = −1 은 power-of-a-real-number 의 (5)와 basic-limits 의 (3)으로 다룬다. (1)의 0 < c < 1 인 경우의 증명은 출처와 같은 경로(cⁿ > 0 과 c^{n+1} < cⁿ, 단조수렴정리, 1-꼬리, x = cx)이다. 출처는 cⁿ > 0 을 '귀납법으로'라고만 하는데, 이 항목은 power-of-a-real-number 의 (6)을 인용한다. (3)의 |c| > 1 인 경우도 출처처럼 (1/c)ⁿ = 1/cⁿ 이 0 으로 감을 쓰지만, 출처는 B > 0 인 상계만 보고 이 항목은 상계 B 가 |c| 이상이어서 양수임을 먼저 보인다. 유계가 아니면 발산한다는 것은 convergent-sequence-is-bounded 의 (2)이다. 직관의 'c = 2 에서도 x = cx 를 풀면 x = 0 이 나온다'는 경고는 출처 Example 2.2.9(p.67, 극한이 있다고 함부로 가정하면 안 된다)와 같은 취지이다. 예시와 확인 질문은 출처에 없다(검색한 범위). 출처의 연습문제 2.1.4({2^{−n}} 의 수렴)와 확인 질문 '(2⁻¹)ⁿ + (3⁻¹)ⁿ'은 1 보다 작은 양수의 거듭제곱을 보는 같은 종류이다."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 유계, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 거듭제곱은 [[power-of-a-real-number]]의 것이다. 실수 $c$에 대하여 $n$번째 항이 $c^n$인 수열 $(c^n)$을 생각한다(첨자 $n$은 자연수이다).

1. $|c| < 1$이면 $(c^n)$은 $0$으로 수렴한다. 곧 $\lim_{n \to \infty} c^n = 0$이다.
2. $c = 1$이면 $(c^n)$은 $1$로 수렴한다.
3. $|c| > 1$이면 $(c^n)$은 유계가 아니고, 따라서 발산한다.
4. $c = -1$이면 $(c^n)$은 발산한다.

따라서 $(c^n)$이 수렴하는 것은 정확히 $-1 < c \le 1$일 때이다.
:::

:::english
Sequences, boundedness, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and powers are those of the entry on powers of a real number. For a real number $c$, consider the sequence $(c^n)$ whose $n$th term is $c^n$ (the index $n$ is a natural number).

1. If $|c| < 1$, then $(c^n)$ converges to $0$. That is, $\lim_{n \to \infty} c^n = 0$.
2. If $c = 1$, then $(c^n)$ converges to $1$.
3. If $|c| > 1$, then $(c^n)$ is not bounded, and hence diverges.
4. If $c = -1$, then $(c^n)$ diverges.

Hence $(c^n)$ converges exactly when $-1 < c \le 1$.
:::

## 직관

종이를 반으로 접기를 되풀이하면 두께는 커지지만, 반으로 자르기를 되풀이하면 조각은 끝없이 작아집니다. $0 < c < 1$이면 $c^n$은 매번 같은 비율로 줄어 $0$으로 가고, $c > 1$이면 매번 같은 비율로 커져 어떤 수로도 누를 수 없습니다. 비유가 맞지 않는 곳은 음의 공비입니다. $c < 0$이면 부호가 번갈아 바뀌므로 크기 $|c^n| = |c|^n$만 보고 판단합니다.

$0 < c < 1$의 증명에서는 극한이 있다는 것을 먼저 [[monotone-convergence-theorem|단조수렴정리]]로 보이고, 극한 $x$를 $c^{n+1} = c \cdot c^n$의 양변에 대어 $x = cx$를 얻습니다. 이때 $c \ne 1$이 쓰여 $x = 0$이 됩니다. 극한이 있는지 모르는 채로 $x = cx$를 풀면 안 됩니다. $c = 2$이면 같은 식에서 $x = 0$이 나오지만 $(2^n)$은 발산합니다.

$|c| > 1$은 $|c|^{-1} < 1$의 경우로 바꿉니다. $(|c|^{-1})^n = (|c|^n)^{-1}$이 $0$으로 가므로, $|c|^n$은 어떤 수보다도 커지게 됩니다.

## 증명

:::idea
$0 < c < 1$이면 $(c^n)$이 단조감소이고 아래로 유계여서 수렴하고, 극한 $x$는 $x = cx$에서 $0$이다. 일반의 $|c| < 1$은 $|c^n| = |c|^n$으로 이 경우로 옮긴다. $|c| > 1$이면 $(|c|^{-1})^n \to 0$을 써서 유계라는 가정에 모순을 낸다.
:::

:::hint
$n$번째 항이 $c^{n+1}$인 수열은 $(c^n)$의 $1$-꼬리이면서, $n$번째 항이 $c \cdot c^n$인 수열이다.
:::

:::hint
$|c^n| \le B$이면 $(|c^n|)^{-1} \ge B^{-1}$이다. 이것을 $(|c|^{-1})^n$이 $0$으로 간다는 것과 맞세운다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (6)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (2)"는 [[absolute-value]]의 번호, "거듭제곱 (6)"은 [[power-of-a-real-number]]의 번호, "비교 (2)"는 [[comparison-with-null-sequence]]의 번호, "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. 자연수는 $0$ 이상인 정수이므로 거듭제곱의 진술을 자연수 지수에 쓸 수 있다.

**1의 증명.** 먼저 $0 < c < 1$인 경우를 보인다. 거듭제곱 (6)의 (i), (iv)에 의해 모든 자연수 $n$에서 $0 < c^n$이고 $(c^n)$은 단조감소이다. $0$이 하계이므로 $(c^n)$은 아래로 유계이고, [[monotone-convergence-theorem|단조수렴정리]]의 (2)에 의해 수렴한다. $x = \lim_{n \to \infty} c^n$으로 둔다. 거듭제곱 (1)에 의해 $c^{n+1} = c \cdot c^n$이다. $n$번째 항이 $c^{n+1}$인 수열은 $(c^n)$의 $1$-꼬리이므로 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $x$로 수렴하고, 같은 수열의 $n$번째 항은 $c \cdot c^n$이므로 사칙연산 (5)에 의해 $cx$로 수렴한다. [[limit-is-unique]]에 의해 $x = cx$이다. (K4), (K12)의 (i), (ii)에 의해 $x - cx = 1 \cdot x - cx = (1 - c)x$이므로 (K12)의 (v)에 의해 $(1 - c)x = 0$이다. $c < 1$이므로 순서 성질 (3)의 (i)에 의해 $0 < 1 - c$, 곧 $1 - c \ne 0$이고, (K10)에 의해 $x = 0$이다.

이제 $|c| < 1$이라 하자. 거듭제곱 (4)에 의해 모든 $n$에서 $|c^n| = |c|^n$이다. 절댓값 (2)에 의해 $0 \le |c|$이므로 순서 성질 (1)의 (iii)과 (ii)에 의해 $|c| = 0$이거나 $0 < |c|$이다.

- $|c| = 0$이면 거듭제곱 (2)의 (iv)에 의해 자연수 $n$에서 $|c|^n = 0^n = 0$이므로, $n$번째 항이 $|c^n|$인 수열은 모든 항이 $0$인 상수 수열이고 [[basic-limits]]의 (1)에 의해 $0$으로 수렴한다.
- $0 < |c| < 1$이면 앞 문단을 $|c|$에 써서 $n$번째 항이 $|c|^n = |c^n|$인 수열이 $0$으로 수렴한다.

어느 경우든 비교 (2)에 의해 $(c^n)$은 $0$으로 수렴한다.

**2의 증명.** 거듭제곱 (2)의 (iv)에 의해 모든 $n$에서 $1^n = 1$이므로 $(1^n)$은 모든 항이 $1$인 상수 수열이고, [[basic-limits]]의 (1)에 의해 $1$로 수렴한다.

**3의 증명.** $1 < |c|$라 하자. $(c^n)$이 유계라고 가정하고 모순을 이끈다. 모든 자연수 $n$에서 $|c^n| \le B$인 실수 $B$가 있다. $n = 1$에서 거듭제곱 (1)에 의해 $|c| = |c^1| \le B$이고, 순서 성질 (5)의 (ii)와 (W2), (1)의 (v)에 의해 $0 < 1 < |c| \le B$에서 $0 < B$이다.

$d = |c|^{-1}$로 둔다. $0 < 1 < |c|$이므로 순서 성질 (6)의 (ii)와 (K8)의 (iii)에 의해 $0 < d < 1^{-1} = 1$이고, 절댓값 (1)에 의해 $|d| = d < 1$이다. 1의 증명에 의해 $(d^n)$은 $0$으로 수렴한다. 순서 성질 (6)의 (i)에 의해 $0 < B^{-1}$이므로, $|d^M - 0| < B^{-1}$인 자연수 $M$이 있다(수렴의 정의에서 $\varepsilon = B^{-1}$로 두고 $n = M$을 잡는다). 거듭제곱 (6)의 (i)에 의해 $0 < d^M$이므로 절댓값 (1)에 의해 $d^M < B^{-1}$이다.

한편 거듭제곱 (3)과 (4)에 의해 $d^M = (|c|^{-1})^M = (|c|^M)^{-1} = |c^M|^{-1}$이다. 거듭제곱 (6)의 (i)에 의해 $0 < |c|^M = |c^M|$이고 $|c^M| \le B$이므로, $|c^M| < B$이면 순서 성질 (6)의 (ii)에 의해, $|c^M| = B$이면 그대로 $B^{-1} \le |c^M|^{-1} = d^M$이다. 이것은 $d^M < B^{-1}$과 순서 성질 (1)의 (i)에 어긋난다. 따라서 $(c^n)$은 유계가 아니다. [[convergent-sequence-is-bounded|수렴하는 수열이 유계라는 정리]]의 (2)에 의해 수렴하는 수열은 유계이므로, $(c^n)$은 수렴하지 않는다.

**4의 증명.** 거듭제곱 (5)에 의해 $((-1)^n)$은 [[basic-limits]]의 (3)의 수열과 같고, 그 수열은 발산한다.

**마지막 문장의 증명.** 순서 성질 (1)의 (iii)과 (ii)를 $-1$, $1$과의 비교에 차례로 쓰면 $c < -1$, $c = -1$, $-1 < c < 1$, $c = 1$, $1 < c$ 가운데 하나이다. $-1 < c < 1$이면 절댓값 (7)에 의해 $|c| < 1$이므로 (1)에 의해 수렴하고, $c = 1$이면 (2)에 의해 수렴한다. $c = -1$이면 (4)에 의해 발산한다. $c < -1$이면 순서 성질 (3)의 (iii)에 의해 $1 < -c$이고 절댓값 (1)에 의해 $|c| = -c$이므로 $|c| > 1$이며, $1 < c$이면 $|c| = c > 1$이다. 두 경우 모두 (3)에 의해 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $(-2^{-1})^n$인 수열]
$-2^{-1} < 0$이므로 절댓값의 정의와 (K9)에 의해 $|-2^{-1}| = 2^{-1}$이고, [[order-properties-of-reals]]의 (8)에 의해 $0 < 2^{-1} < 1$입니다. 이 항목의 (1)에 의해 이 수열은 $0$으로 수렴합니다. 항의 부호는 [[power-of-a-real-number|거듭제곱]]의 (2)의 (iii)과 (5)에 의해 $(-2^{-1})^n = (-1)^n (2^{-1})^n$으로 번갈아 바뀌므로 단조수렴정리를 바로 쓸 수는 없고, 절댓값으로 옮기는 단계가 필요합니다.
:::

:::example[$n$번째 항이 $(1 + 3^n)(3^n)^{-1}$인 수열]
(K12)의 (i), (K8)의 (iii)과 거듭제곱의 (3)에 의해 $(1 + 3^n)(3^n)^{-1} = (3^n)^{-1} + 1 = (3^{-1})^n + 1$입니다. $0 < 3^{-1} < 1$이므로([[order-properties-of-reals]]의 (10), (6)의 (ii)) 이 항목의 (1)에 의해 $\lim_{n \to \infty} (3^{-1})^n = 0$이고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)에 의해 이 수열은 $1 + 0 = 1$로 수렴합니다((K1)).
:::

## 확인 질문

:::check[$n$번째 항이 $(2^{-1})^n + (3^{-1})^n$인 수열의 극한은?]
$0$입니다. $0 < 2^{-1} < 1$, $0 < 3^{-1} < 1$이므로 이 항목의 (1)에 의해 두 수열은 모두 $0$으로 수렴하고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (1)에 의해 합의 수열은 $0 + 0 = 0$으로 수렴합니다.
:::

:::check[$c = -1$일 때 $(c^n)$은 유계인가?]
유계입니다. [[power-of-a-real-number|거듭제곱]]의 (4)와 (2)의 (iv)에 의해 모든 $n$에서 $|(-1)^n| = |-1|^n = 1^n = 1$이므로 $B = 1$로 두면 유계의 정의를 만족합니다. 그래도 (4)에 의해 발산합니다. $|c| > 1$인 경우와 달리, $c = -1$에서 발산하는 까닭은 유계가 아니어서가 아니라 진동하기 때문입니다.
:::
