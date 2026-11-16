---
title: 산술의 기본 정리
title_en: Fundamental Theorem of Arithmetic
aliases: [소인수분해의 유일성, 소인수분해 정리, unique prime factorization, fundamental theorem of arithmetic]
kind: theorem
field: number-theory
msc: ["11A51"]
level: undergrad
summary: 2 이상의 모든 정수는 작은 것부터 늘어놓은 소수들의 곱으로 쓰이고, 그렇게 늘어놓은 소수의 열은 하나뿐이다.
requires: [strong-induction, mathematical-induction, well-ordering-principle, prime-number, divisibility, divisibility-is-transitive, finite-product, euclids-lemma, integer-cancellation, even-and-odd]
proof: full
sources:
  - ref: stein-elementary-number-theory
    loc: 1.1.1절 Theorem 1.1.6 (Fundamental Theorem of Arithmetic), p.3. 증명은 1.1.4절, p.10. 존재는 1.1.3절 Proposition 1.1.20, p.7. 서문 p.ix
    checked: original
    note: "출처의 진술은 'Every natural number can be written as a product of primes uniquely up to order'이고 소수는 인수가 하나인 곱, 1은 빈 곱이라고 덧붙인다(p.3). 출처의 유일성 증명(p.10)은 n = p₁p₂⋯p_d와 n = q₁q₂⋯q_m에서 p₁ | q₁(q₂⋯q_m)이므로 Euclid's theorem에 의해 p₁ = q₁이거나 p₁ | q₂⋯q_m이고, 'By induction, we see that p₁ = qᵢ for some i'라 한 뒤 'Now cancel p₁ and qᵢ, and repeat the above argument. Eventually, we find that, up to order, the two factorizations are the same'라고 쓴다. 지우는 단계의 근거와 '순서를 빼면 같다'의 뜻은 적지 않는다. 출처의 존재 증명(Proposition 1.1.20, p.7)은 합성수 n = ab (a, b < n)에 귀납법을 쓰며 소수들의 곱이 어떤 순서로 놓이는지는 말하지 않는다. 이 사이트는 재배열(곱의 순서 바꿈)을 다루지 않으므로 진술을 작은 것부터 늘어놓은 소수의 열이라는 꼴로 바꾸었다. 존재도 작은 것부터 늘어놓은 꼴로 따로 증명했다(가장 작은 소인수를 떼는 강한 귀납법). 유일성의 증명은 맨 앞 소수가 같음을 보이고 (P3)으로 맨 앞을 떼어 소거 법칙으로 지우는 귀납법이다. 이 증명 경로는 출처에 없고 이 사이트가 썼다. 출처의 1은 빈 곱이라는 약속은 쓰지 않는다. 이 항목은 n ≥ 2만 다룬다. 예시와 반례는 새로 만들었다."
  - ref: hammack-book-of-proof
    loc: 10.4절 The Fundamental Theorem of Arithmetic, Theorem 10.1, p.192
    checked: original
    note: "출처의 진술은 1보다 큰 정수 n이 n = p₁⋯p_k = a₁⋯a_ℓ로 두 소인수분해를 가지면 k = ℓ이고 소수 pᵢ와 aᵢ는 'except that they may be in different orders' 같다는 것이다(p.192). 출처는 '순서를 빼면 같다'를 정의하지 않는다. 증명은 존재(강한 귀납법)와 유일성(최소 반례)으로 나뉜다. 유일성은 p₁ | a₁⋯a_ℓ에서 10.1절의 Proposition 10.1(p.186)로 p₁ | aᵢ를 얻어 p₁ = aᵢ로 보고, 양변을 p₁으로 나누어 p₂⋯p_k = a₁⋯a_{i−1}a_{i+1}⋯a_ℓ을 얻고 이것이 더 작은 수의 서로 다른 두 분해라 모순이라고 한다. 곱의 가운데 인수를 지우는 단계와 k = 1이거나 ℓ = 1이라 한쪽이 빈 곱이 되는 경우를 출처는 따로 다루지 않는다. 이 항목은 정렬된 꼴로 진술하고 맨 앞 인수만 떼므로 가운데 인수를 지우지 않는다. 길이가 1인 경우는 (P5)로 따로 다룬다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회. 수학적 오류 없음. 유한 곱의 정의와 성질을 보강하고 정렬된 꼴로 진술, 직관의 거짓 문장과 출처 기록 정정. 마지막 표현 수정은 지휘자가 변경분으로 확인."
added: 2026-11-16
---

:::statement
길이 $k$인 정수의 열 $p_1, p_2, \dots, p_k$가 **작은 것부터 늘어놓였다**(sorted)는 것은 정확히 $1 \le i \le j \le k$인 모든 $i$, $j$에 대하여 $p_i \le p_j$일 때이다. 모든 $p_i$가 소수인 열을 **소수의 열**이라 한다. 열의 곱은 [[finite-product|유한 곱]]이다. 이 사이트는 곱의 인수의 순서를 바꾸는 것(재배열)을 다루지 않으므로, 소인수분해의 "순서"는 작은 것부터 늘어놓는 것으로 정해서 다음과 같이 진술한다.

1. (존재) $n \ge 2$인 모든 정수 $n$에 대하여, 작은 것부터 늘어놓인 소수의 열 $p_1, \dots, p_k$($k \ge 1$)이 있어 $n = p_1 p_2 \cdots p_k$이다.
2. (유일성) $p_1, \dots, p_k$와 $q_1, \dots, q_\ell$($k, \ell \ge 1$)이 작은 것부터 늘어놓인 소수의 열이고 $p_1 \cdots p_k = q_1 \cdots q_\ell$이면, $k = \ell$이고 모든 $i \in \{1, \dots, k\}$에 대하여 $p_i = q_i$이다.
:::

:::english
A sequence of integers $p_1, p_2, \dots, p_k$ of length $k$ is **sorted** (listed from smallest to largest) exactly when $p_i \le p_j$ for all $i$, $j$ with $1 \le i \le j \le k$. A sequence all of whose terms are primes is called a **sequence of primes**. The product of a sequence is the finite product. Since this site does not treat the reordering of factors of a product (rearrangement), the "order" in a prime factorization is fixed by listing the primes from smallest to largest, and the theorem is stated as follows.

1. (Existence) For every integer $n \ge 2$ there is a sorted sequence of primes $p_1, \dots, p_k$ ($k \ge 1$) such that $n = p_1 p_2 \cdots p_k$.
2. (Uniqueness) If $p_1, \dots, p_k$ and $q_1, \dots, q_\ell$ ($k, \ell \ge 1$) are sorted sequences of primes and $p_1 \cdots p_k = q_1 \cdots q_\ell$, then $k = \ell$ and $p_i = q_i$ for every $i \in \{1, \dots, k\}$.
:::

## 직관

레고 블록으로 만든 모양을 더 쪼갤 수 없는 블록들로 끝까지 쪼갠다고 합시다. 소수는 더 쪼갤 수 없는 블록이고, $360$을 쪼개면 $2$가 세 개, $3$이 두 개, $5$가 한 개 나옵니다. 쪼개는 길이 달라도 같은 블록이 나올 것 같다는 느낌이 이 정리의 바탕입니다. 이 사이트의 도구로 이 느낌을 정확히 말한 것이 이 정리입니다. 블록을 작은 것부터 늘어놓기로 정하면, 그렇게 늘어놓은 블록의 줄은 하나뿐입니다. 당연해 보이지만 증명이 필요하고, 아래 증명은 [[euclids-lemma|유클리드 보조정리]]를 씁니다.

흔히 이 정리는 "소인수분해는 순서를 빼면 하나뿐이다"라고 말합니다. 이 사이트는 곱의 인수를 재배열해도 곱이 같다는 것을 증명하지 않았습니다. 그래서 순서를 "작은 것부터"로 정해 두고, 그렇게 늘어놓은 소수의 열이 존재하고 하나뿐이라고 진술합니다. 이 정리가 말하는 것은 작은 것부터 늘어놓은 소수의 열이 있고 하나뿐이라는 것입니다. 인수를 임의의 순서로 쓴 두 분해가 어떤 관계인지는 이 정리가 말하지 않습니다. 재배열이 곱을 바꾸지 않는다는 주장은 이 항목에서 증명하지 않았고 쓰지도 않습니다.

앞 강의의 [[prime-factorization-exists]]는 $2$ 이상의 정수가 소수들의 곱이라는 것만 보였고, 그 곱의 인수가 어떻게 늘어놓였는지는 말하지 않았습니다. 이 항목의 존재 부분은 작은 것부터 늘어놓은 꼴을 따로 증명한 것입니다.

## 증명

:::idea
(존재) $n$을 나누는 $2$ 이상의 수 가운데 가장 작은 $p$가 소수이고, $n = pm$의 $m$에 귀납 가정을 쓴 뒤 $p$를 맨 앞에 붙인다. (유일성) 맨 앞 소수는 두 열에서 같고, 맨 앞을 떼어 소거 법칙으로 지운 뒤 귀납법을 쓴다.
:::

:::hint
(존재) $n$의 약수 가운데 $2$ 이상인 것의 집합에 [[well-ordering-principle|정렬 원리]]를 쓰세요. 그 최소 원소가 소수임을 보이려면 그 약수의 약수가 어디에 속하는지 보면 됩니다.
:::

:::hint
(유일성) $p_1$이 곱 $q_1 \cdots q_\ell$을 나눕니다. [[euclids-lemma|유클리드 보조정리]]와 소수의 양의 약수가 $1$과 자기 자신뿐이라는 사실로 $p_1$이 어떤 $q_j$와 같음을 보고, 두 열이 작은 것부터 늘어놓였다는 것으로 $p_1 = q_1$을 얻으세요.
:::

:::hint
(유일성) $p_1 = q_1$을 얻은 뒤에는 [[finite-product]]의 (P3)으로 곱에서 맨 앞 인수를 떼고 [[integer-cancellation|소거 법칙]]으로 양변에서 지워 귀납 가정을 쓰세요. 길이가 $1$인 열이 끼는 경우는 따로 따져야 합니다.
:::

:::proof
이 증명이 쓰는 성질은 [[prime-number]]의 (Z1)–(Z3), [[well-ordering-principle]]의 (Z5)–(Z7), (L1), (L2)와 같은 항목에서 증명 없이 쓰기로 한 정수의 계산 법칙, 그리고 정수의 합·차·곱은 정수라는 기본 성질([[even-and-odd]]에서 증명 없이 받아들임)이다.

**준비 (가) 소수는 $2$ 이상이다.** $p$가 소수이면 자연수이므로 (Z1)에 의해 $p \ge 1$이다. $1$은 소수가 아니라고 [[prime-number]]의 진술에 적혀 있으므로 $p \ne 1$이고 $p > 1$이다. (Z1)에 의해 $p \ge 1 + 1 = 2$이다.

**준비 (나) 소수 $p$, $q$에 대하여 $p \mid q$이면 $p = q$이다.** (가)에 의해 $p$는 양의 정수이고 $p \mid q$이므로 $p$는 $q$의 양의 약수이다. $q$는 소수이므로 [[prime-number]]의 진술에 의해 $q$의 양의 약수는 $1$과 $q$뿐이다. (가)에 의해 $p \ge 2 > 1$이므로 $p \ne 1$이고, 따라서 $p = q$이다.

**준비 (다) 정렬된 열의 앞 항.** 작은 것부터 늘어놓인 열 $r_1, \dots, r_s$에서 모든 $j \in \{1, \dots, s\}$에 대하여 $r_1 \le r_j$이다. $i = 1$을 정의에 넣은 것이다. 또 $s \ge 2$이면 $b_j = r_{j+1}$ ($j = 1, \dots, s - 1$)로 정한 열 $b_1, \dots, b_{s-1}$도 작은 것부터 늘어놓였다. $1 \le i \le j \le s - 1$이면 $2 \le i + 1 \le j + 1 \le s$이므로 정의에 의해 $b_i = r_{i+1} \le r_{j+1} = b_j$이다.

### (존재)

$n \ge 2$인 정수 $n$에 대한 명제 $S_n$을 "$n$은 작은 것부터 늘어놓인 소수의 열의 곱이다"로 둔다. 강한 귀납법([[strong-induction]], 시작점 $2$)으로 증명한다. 아래에서 $n \ge 2$를 하나 잡고 $2 \le m < n$인 모든 정수 $m$에 대하여 $S_m$이 참이라고 가정한 채 $S_n$을 보인다. ($n = 2$이면 이 가정은 빈 가정이고 이 경우가 기초 단계 $S_2$이다. $n = k + 1$($k \ge 2$)이면 (Z1)과 (Z7)에 의해 $m < k + 1$은 $m \le k$와 같으므로, 이 가정은 강한 귀납법의 귀납 가정 "$S_2, \dots, S_k$가 모두 참"이다.)

$D = \{d \in \mathbb{N} : d \ge 2$이고 $d \mid n\}$이라 한다. $n \ge 2 > 0$이고 $n = n \cdot 1$이므로 $n \in D$이다. 따라서 $D$는 $\mathbb{N}$의 공집합이 아닌 부분집합이고, [[well-ordering-principle]]에 의해 최소 원소 $p$를 갖는다. 곧 $p \ge 2$, $p \mid n$이고, $D$의 모든 원소 $d$에 대하여 $p \le d$이다.

*$p$는 소수이다.* $1$과 $p$는 $p$의 양의 약수이고 $p \ge 2$이므로 서로 다르다. $d$가 $p$의 양의 약수라 하자. $d \ge 1$이다. $d \ge 2$이면, $d \mid p$이고 $p \mid n$이므로 [[divisibility-is-transitive]]에 의해 $d \mid n$이어서 $d \in D$이고 $p \le d$이다. 또 [[prime-number]]의 진술에 의해 $d \le p$이다. (L2)에 의해 $d = p$이다. $d \ge 2$가 아니면 (Z5)에 의해 $d < 2$이고, (Z1)에 의해 $d + 1 \le 2$이므로 (Z7)에 의해 $d \le 1$이다. $d \ge 1$이므로 (L2)에 의해 $d = 1$이다. 따라서 $p$의 양의 약수는 정확히 $1$과 $p$이고 $p$는 소수이다.

*경우 1: $n = p$.* 길이 $1$인 열 $p$는 $i = j = 1$뿐이므로 작은 것부터 늘어놓였고, 소수의 열이며 곱은 $p = n$이다. $S_n$이 참이다.

*경우 2: $n \ne p$.* $p \mid n$이므로 $n = pm$인 정수 $m$이 있다. $m > 0$이다. $m \le 0$이면 $p > 0$이므로 (Z2)에 의해 $pm \le 0$인데 $pm = n > 0$이어서 (L1)에 의해 모순이다. $m \ne 1$이다. $m = 1$이면 $n = p \cdot 1 = p$이기 때문이다. 따라서 (Z1)에 의해 $m \ge 1$이고 $m \ne 1$이므로 $m > 1$이고 $m \ge 2$이다. 또 (가)에 의해 $p \ge 2$이고 $m > 0$이므로 (Z3)에 의해 $2m \le pm = n$이다. $2m = m + m$이고 $m > 0$이므로 (Z7)에 의해 $m + m > m + 0 = m$이다. (Z6)에 의해 $m < n$이다. 곧 $2 \le m < n$이다.

귀납 가정 $S_m$에 의해 작은 것부터 늘어놓인 소수의 열 $q_1, \dots, q_t$($t \ge 1$)가 있어 $m = q_1 \cdots q_t$이다. 각 $j \in \{1, \dots, t\}$에 대하여 [[finite-product]]의 (P4)에 의해 $q_j \mid m$이고, $n = pm = mp$이므로 $m \mid n$이다. [[divisibility-is-transitive]]에 의해 $q_j \mid n$이다. (가)에 의해 $q_j \ge 2$이고 $q_j$는 자연수이므로 $q_j \in D$이고, $p$가 $D$의 최소 원소이므로 $p \le q_j$이다.

길이 $t + 1$인 열 $r_1, \dots, r_{t+1}$을 $r_1 = p$, $r_{1+j} = q_j$ ($j = 1, \dots, t$)로 정한다. 모든 항이 소수이다. 작은 것부터 늘어놓였음을 보인다. $1 \le i \le j \le t + 1$이라 하자. $i = 1$이면 $j = 1$일 때 $r_1 \le r_1$이고 $j \ge 2$일 때 $r_1 = p \le q_{j-1} = r_j$이다. $i \ge 2$이면 $1 \le i - 1 \le j - 1 \le t$이고 $q_1, \dots, q_t$가 작은 것부터 늘어놓였으므로 $r_i = q_{i-1} \le q_{j-1} = r_j$이다.

$t + 1 \ge 2$이므로 [[finite-product]]의 (P3)을 열 $r$에 쓸 수 있다. $b_j = r_{j+1} = q_j$이므로 $b$는 열 $q_1, \dots, q_t$와 같은 열이고, $r_2 \cdots r_{t+1} = q_1 \cdots q_t = m$이다. (P3)에 의해 $r_1 \cdots r_{t+1} = r_1 \cdot (r_2 \cdots r_{t+1}) = p \cdot m = n$이다. 따라서 $S_n$이 참이다.

두 경우 모두 $S_n$이 참이므로 강한 귀납법에 의해 $n \ge 2$인 모든 정수 $n$에 대하여 $S_n$이 참이다.

### (유일성)

먼저 다음을 보인다. **(★)** $p_1, \dots, p_k$와 $q_1, \dots, q_\ell$($k, \ell \ge 1$)이 작은 것부터 늘어놓인 소수의 열이고 $p_1 \cdots p_k = q_1 \cdots q_\ell$이면 $p_1 = q_1$이다.

곱을 $M$이라 쓴다. [[finite-product]]의 (P4)에 의해 $p_1 \mid M = q_1 \cdots q_\ell$이다. $p_1$은 소수이므로 [[euclids-lemma]]의 (2)에 의해 어떤 $j$에 대하여 $p_1 \mid q_j$이다. 준비 (나)에 의해 $p_1 = q_j$이다. 준비 (다)에 의해 $q_1 \le q_j = p_1$이다. 같은 논증을 두 열의 역할을 바꾸어 되풀이한다. (P4)에 의해 $q_1 \mid M = p_1 \cdots p_k$이고, [[euclids-lemma]]의 (2)와 (나)에 의해 $q_1 = p_i$인 $i$가 있으며, (다)에 의해 $p_1 \le p_i = q_1$이다. $q_1 \le p_1$과 $p_1 \le q_1$이므로 (L2)에 의해 $p_1 = q_1$이다.

이제 길이 $k$에 대한 귀납법([[mathematical-induction]])으로 증명한다. $S_k$를 "모든 자연수 $\ell$과 길이 $k$, 길이 $\ell$인 작은 것부터 늘어놓인 소수의 열 $p$, $q$에 대하여 $p_1 \cdots p_k = q_1 \cdots q_\ell$이면 $k = \ell$이고 모든 $i$에서 $p_i = q_i$이다"로 둔다.

*기초 단계 $k = 1$.* $p_1 \cdots p_k = p_1$이다. $\ell \ge 2$라 하자. 모든 $q_j$는 (가)에 의해 $2$ 이상이므로 [[finite-product]]의 (P5)의 둘째 주장에 의해 $q_1 < q_1 \cdots q_\ell = p_1$이다. 그런데 (★)에 의해 $p_1 = q_1$이므로 $q_1 < q_1$이고 이는 (L1)에 어긋난다. 따라서 $\ell = 1$이다. 이때 (★)에 의해 $p_1 = q_1$이다. $S_1$이 참이다.

*귀납 단계.* $S_k$가 참이라 하고, 길이 $k + 1$인 열 $p$와 길이 $\ell$인 열 $q$가 $p_1 \cdots p_{k+1} = q_1 \cdots q_\ell$을 만족한다고 하자. $\ell = 1$이라 하면 $k + 1 \ge 2$이고 모든 $p_i \ge 2$이므로 (P5)의 둘째 주장에 의해 $p_1 < p_1 \cdots p_{k+1} = q_1$이다. (★)에 의해 $p_1 = q_1$이므로 $p_1 < p_1$이고 (L1)에 어긋난다. 따라서 $\ell \ge 2$이다. (★)에 의해 $p_1 = q_1$이다.

$k + 1 \ge 2$이고 $\ell \ge 2$이므로 (P3)에 의해 $p_1 \cdot (p_2 \cdots p_{k+1}) = q_1 \cdot (q_2 \cdots q_\ell)$이다. 여기서 $p_2 \cdots p_{k+1}$, $q_2 \cdots q_\ell$은 (P3)의 표기대로 한 칸씩 당긴 열의 곱이고 (P1)에 의해 정수이다. $p_1 = q_1$이므로 $p_1 \cdot x = p_1 \cdot y$ 꼴이다. $p_1 \ge 2$이므로 $p_1 \ne 0$이고, [[integer-cancellation]]의 (2)에 의해 $p_2 \cdots p_{k+1} = q_2 \cdots q_\ell$이다.

한 칸씩 당긴 열 $p_2, \dots, p_{k+1}$(길이 $k$)과 $q_2, \dots, q_\ell$(길이 $\ell - 1 \ge 1$)은 모두 소수의 열이고, 준비 (다)에 의해 작은 것부터 늘어놓였다. 곱이 같으므로 귀납 가정 $S_k$에 의해 $k = \ell - 1$이고 $i = 1, \dots, k$에 대하여 $p_{i+1} = q_{i+1}$이다. 따라서 $k + 1 = \ell$이고, $p_1 = q_1$과 합쳐 모든 $i \in \{1, \dots, k + 1\}$에서 $p_i = q_i$이다. $S_{k+1}$이 참이다.

귀납법의 원리에 의해 모든 자연수 $k$에 대하여 $S_k$가 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[작은 것부터 늘어놓은 소인수분해]
$360 = 8 \cdot 9 \cdot 5$이고 $8 = 2 \cdot 2 \cdot 2$, $9 = 3 \cdot 3$이므로 $360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5$입니다. 열 $2, 2, 2, 3, 3, 5$는 작은 것부터 늘어놓였고 곱은 $((((2 \cdot 2) \cdot 2) \cdot 3) \cdot 3) \cdot 5 = 8 \cdot 3 \cdot 3 \cdot 5 = 24 \cdot 3 \cdot 5 = 72 \cdot 5 = 360$입니다. 정리에 의해 $360$을 곱으로 하는 작은 것부터 늘어놓인 소수의 열은 이것뿐입니다.

$1001 = 7 \cdot 11 \cdot 13$입니다($7 \cdot 11 = 77$, $77 \cdot 13 = 1001$). 열 $7, 11, 13$이 유일한 답입니다. $13$은 소수이어서 길이 $1$인 열 $13$ 하나입니다. $13$의 양의 약수 $d$는 $d \le 13$이고, $d = 2, \dots, 12$마다 $13$이 $d$의 이웃한 두 배수 사이에 있어 나누어떨어지지 않습니다. $2$는 $12 < 13 < 14$, $3$은 $12 < 13 < 15$, $4$는 $12 < 13 < 16$, $5$는 $10 < 13 < 15$, $6$은 $12 < 13 < 18$, $7$은 $7 < 13 < 14$, $8$은 $8 < 13 < 16$, $9$는 $9 < 13 < 18$, $10$은 $10 < 13 < 20$, $11$은 $11 < 13 < 22$, $12$는 $12 < 13 < 24$입니다. 따라서 $13$의 양의 약수는 $1$, $13$뿐입니다.

증명의 존재 부분을 $n = 360$에 따라가 보면, $360$의 $2$ 이상인 약수 가운데 가장 작은 것은 $2$이고 $360 = 2 \cdot 180$입니다. $180$의 열은 $2, 2, 3, 3, 5$이고 $2 \le$ 모든 항이므로 앞에 $2$를 붙이면 열 $2, 2, 2, 3, 3, 5$가 됩니다.
:::

:::counterexample[조건 하나씩을 빼면 깨진다]
소수가 아닌 인수를 허용하면 유일하지 않습니다. $12 = 2 \cdot 6 = 3 \cdot 4 = 2 \cdot 2 \cdot 3$이고 열 $2, 6$과 열 $3, 4$는 둘 다 작은 것부터 늘어놓였지만 길이와 항이 다릅니다. $6$과 $4$는 소수가 아닙니다.

$1$을 소수로 치면 유일하지 않습니다. $6 = 2 \cdot 3 = 1 \cdot 2 \cdot 3$이고 열 $2, 3$과 열 $1, 2, 3$은 둘 다 작은 것부터 늘어놓였지만 길이가 다릅니다. 소수의 정의가 $1$을 제외하는 까닭의 하나입니다.

늘어놓는 순서를 정하지 않으면 열이 둘이 됩니다. 열 $2, 3$과 열 $3, 2$의 곱은 둘 다 $6$입니다. 정리의 유일성에서 "작은 것부터 늘어놓인" 가정이 필요한 까닭입니다. 열 $3, 2$는 $3 \le 2$가 아니어서 작은 것부터 늘어놓인 열이 아닙니다.
:::

## 역사와 맥락

Stein은 서문에서 유클리드가 소수가 무한히 많다는 것을 증명하고 모든 양의 정수가 소수의 곱으로 유일하게 인수분해된다는 산술의 기본 정리도 영리하게(cleverly) 이끌어냈다고 적는다(p.ix). Stein은 이 책의 산술의 기본 정리의 증명에 Stein이 "(Euclid)"라고 표시한 Theorem 1.1.19, 곧 [[euclids-lemma|유클리드 보조정리]]가 필요하다고 적는다(p.7).

## 확인 질문

:::check[$504$의 작은 것부터 늘어놓인 소인수분해를 구하고 곱을 검산하라.]
$504 = 8 \cdot 63 = 8 \cdot 9 \cdot 7$이므로 $504 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 7$입니다. 열 $2, 2, 2, 3, 3, 7$은 작은 것부터 늘어놓였습니다. 곱을 앞에서부터 계산하면 $2 \cdot 2 = 4$, $4 \cdot 2 = 8$, $8 \cdot 3 = 24$, $24 \cdot 3 = 72$, $72 \cdot 7 = 504$입니다. 유일성에 의해 이것이 유일한 열입니다.
:::

:::check[$n = p_1 \cdots p_k$가 작은 것부터 늘어놓인 소수의 열의 곱이고 $p_1$이 열의 맨 앞이라 하자. 소수 $q$가 $n$을 나눈다면 $q$와 $p_1$ 사이에는 어떤 부등식이 성립하는가?]
$q \mid p_1 \cdots p_k$이므로 [[euclids-lemma]]의 (2)에 의해 $q \mid p_i$인 $i$가 있고, $p_i$가 소수이므로 $q = p_i$입니다. 열이 작은 것부터 늘어놓였으므로 $p_1 \le p_i = q$입니다. 곧 $n$을 나누는 소수 가운데 $p_1$이 가장 작습니다. 예를 들어 $n = 90 = 2 \cdot 3 \cdot 3 \cdot 5$이면 $90$을 나누는 소수는 $2, 3, 5$이고 $p_1 = 2$가 가장 작습니다.
:::
