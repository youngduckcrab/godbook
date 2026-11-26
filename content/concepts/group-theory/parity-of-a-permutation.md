---
title: 치환의 홀짝
title_en: Parity of a Permutation
aliases: [짝치환, 홀치환, 치환의 짝홀, 짝순열, 홀순열, even permutation, odd permutation, parity]
kind: theorem
field: group-theory
msc: ["20B30"]
level: undergrad
summary: 유한집합의 치환을 짝수 개의 호환의 곱으로 쓸 수 있으면 짝치환, 홀수 개의 호환의 곱으로 쓸 수 있으면 홀치환이라 한다. 호환의 개수와 |X|에서 궤도의 개수를 뺀 수의 홀짝이 늘 같으므로, 모든 치환은 짝치환과 홀치환 가운데 정확히 하나이다.
requires: [set, finite-set, number-of-elements-is-unique, mathematical-induction, even-and-odd, well-ordering-principle, group, symmetric-group, finite-product-in-a-group, orbits-of-a-permutation, cycle-permutation, product-of-transpositions, transposition-changes-orbit-count]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 5.1절 Transpositions, Example 5.13(p.63), Lemma 5.14(p.63–64), Theorem 5.15 와 짝치환·홀치환의 정의(p.64), Theorem 5.16 의 증명(p.64); 5.4절 Exercises, 연습문제 3, 22, 24, 34, 36(p.71–73)
    checked: original
    note: "출처는 Theorem 5.15(p.64)에서 '짝수 개의 호환의 곱으로 쓸 수 있는 치환을 호환의 곱으로 쓰면 언제나 짝수 개이고, 홀수 개도 마찬가지'라고 진술한 뒤, 그 정리에 비추어 짝수 개(홀수 개)의 호환의 곱으로 쓸 수 있는 치환을 짝치환(홀치환)이라 정의한다. 이 항목의 정의는 이것과 같다. 출처는 정리를 Lemma 5.14(p.63, 항등치환을 r 개의 호환의 곱으로 쓰면 r 은 짝수)로 증명하는데, 그 Lemma 는 마지막 두 호환을 네 가지 꼴로 바꿔 쓰며 a 의 마지막 출현을 왼쪽으로 옮기는 과정으로 증명하고, Theorem 5.15 의 홀수 경우는 연습문제(5.22, p.72)로 둔다. 이 항목은 대신 transposition-changes-orbit-count 의 (4)로 '호환의 개수와 |X| − |Orb(σ)| 의 홀짝이 같다'를 보여 (1)을 얻고, 짝수와 홀수 두 경우를 함께 다룬다. 출처의 증명은 위의 Lemma 5.14 의 길이다. '모든 치환은 짝치환이거나 홀치환이다'는 출처가 Proposition 5.12(p.63, 원소가 둘 이상인 유한집합의 치환은 호환의 곱)로 말없이 쓰는 것이고, 이 항목은 그 사이트판인 product-of-transpositions 의 (2)와 이 항목의 (1)로 보인다. (3)의 '길이 k 인 순환치환은 k 가 홀수일 때 정확히 짝치환'은 출처 연습문제 5.24(p.72, 3-순환치환은 짝치환)를 넓힌 것이다. (4)의 곱은 출처 Theorem 5.16 의 증명(p.64)의 '짝치환 둘의 곱은 짝치환'과 역의 계산과 같고, 역에 관한 것은 연습문제 5.34(p.73)와 같다. 출처 10.1절 Example 10.5(p.126)도 S_3/A_3 에 대해 '짝 둘이나 홀 둘의 곱은 짝, 홀과 짝의 곱은 홀'이라고 적고, 11.1절 첫머리(p.133)는 S_n 의 짝·홀의 곱셈표를 Z_2 와 같은 구조의 예로 든다. 짝·홀의 뜻은 5.3절 Reading Question 3(p.70)이 묻는다. 예시 '$(1\\\\ 2)(3\\\\ 4\\\\ 5)$의 홀짝'은 출처 연습문제 5.3(p.71)이 치환을 호환의 곱으로 쓰고 짝·홀을 가리게 하는 것과 같은 종류의 물음이다. 반례 '호환의 개수가 다른 두 분해의 예'는 출처 Example 5.13(p.63)이 항등치환을 (1 2)(1 2) 와 (1 3)(2 4)(1 3)(2 4) 로, (1 6) 을 호환 셋과 일곱의 곱으로 쓰는 것과 같은 발상이다. 첫째 확인 질문 '$S_6$의 $(1\\\\ 2\\\\ 3\\\\ 4\\\\ 5\\\\ 6)$은 짝치환인가?'는 연습문제 5.3(p.71)과 같은 종류의 물음이다. 둘째 확인 질문 '$\\\\sigma$가 홀치환이면 $\\\\sigma\\\\sigma$는 짝치환인가?'는 출처 연습문제 5.36(p.73, α⁻¹β⁻¹αβ 는 짝치환)과 같은 종류의 물음이다."
status: reviewed
review_note: "2026-11-26 자기 검토(docs/self-review.md)와 지휘자의 확인(궤도 개수·홀짝 판정에 경계값, A₄ 논법 통독, 빠진 겹침(11.1절 곱셈표)을 돌려보내 반영). 독립 검토는 거치지 않았다."
added: 2026-11-26
---

:::statement
$X$가 [[finite-set|유한집합]]이라 하자. $S_X$와 그 곱, 항등치환 $i_X$는 [[symmetric-group|대칭군]], 유한 곱과 빈 곱은 [[finite-product-in-a-group|군의 유한 곱]], 호환과 길이 $k$인 순환치환은 [[cycle-permutation|순환치환]], 궤도 전체의 집합 $\operatorname{Orb}(\sigma)$와 궤도의 개수 $|\operatorname{Orb}(\sigma)|$는 [[transposition-changes-orbit-count|호환을 곱하면 궤도의 개수가 하나 바뀐다]]의 것이다. 짝수와 홀수는 [[even-and-odd|짝수와 홀수]]의 것이다.

호환의 열은 [[product-of-transpositions|호환의 곱]]의 것(모든 항이 호환인 $S_X$의 원소의 열)이다. $\sigma \in S_X$가 **길이 $r$인 호환의 열의 곱**이라는 것은 길이 $r$($r \ge 0$)인 호환의 열 $\tau_1, \dots, \tau_r$이 있어 $\sigma = \tau_1 \cdots \tau_r$일 때이다. $\sigma$가 **짝치환**(even permutation)인 것은 정확히 어떤 짝수 $r$에 대하여 $\sigma$가 길이 $r$인 호환의 열의 곱일 때이고, **홀치환**(odd permutation)인 것은 정확히 어떤 홀수 $r$에 대하여 그럴 때이다. (열의 길이이므로 $r \ge 0$이다.)

다음이 성립한다. 아래에서 $\sigma, \pi \in S_X$이다.

1. (호환의 개수의 홀짝) $\sigma$가 길이 $r$인 호환의 열의 곱이면 $r - (|X| - |\operatorname{Orb}(\sigma)|)$는 짝수이다.
2. (잘 정해짐) 모든 치환은 짝치환과 홀치환 가운데 정확히 하나이다. $\sigma$가 짝치환인 것은 정확히 $|X| - |\operatorname{Orb}(\sigma)|$가 짝수일 때이다. 따라서 $\sigma$가 길이 $r$인 호환의 열의 곱이면, $\sigma$가 짝치환일 때 $r$은 짝수이고 홀치환일 때 $r$은 홀수이다.
3. (예) $i_X$는 짝치환이고, 호환은 홀치환이다. $k \ge 2$일 때 길이 $k$인 순환치환이 짝치환인 것은 정확히 $k$가 홀수일 때이다.
4. (곱과 역) $\sigma$와 $\pi$가 둘 다 짝치환이거나 둘 다 홀치환이면 $\sigma\pi$는 짝치환이고, 하나는 짝치환이고 다른 하나는 홀치환이면 $\sigma\pi$는 홀치환이다. $\sigma^{-1}$은 $\sigma$가 짝치환일 때 짝치환, 홀치환일 때 홀치환이다.

증명에서 정수의 계산에 관하여 [[well-ordering-principle]]의 진술에서 받아들인 계산 법칙을 쓰고, 정수끼리의 합과 차가 정수라는 것과 모든 정수가 짝수와 홀수 가운데 정확히 하나라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
Let $X$ be a finite set. $S_X$, its product and the identity permutation $i_X$ are as in the entry on the symmetric group; finite products and the empty product are as in the entry on finite products in a group; transpositions and cycles of length $k$ are as in the entry on cycles; and the set of orbits $\operatorname{Orb}(\sigma)$ and the number of orbits $|\operatorname{Orb}(\sigma)|$ are as in the entry on how multiplying by a transposition changes the number of orbits. Even and odd integers are as in the entry on even and odd integers.

Sequences of transpositions are as in the entry on products of transpositions (sequences of elements of $S_X$ all of whose terms are transpositions). We say that $\sigma \in S_X$ is **the product of a sequence of $r$ transpositions** if there is a sequence of transpositions $\tau_1, \dots, \tau_r$ of length $r$ ($r \ge 0$) with $\sigma = \tau_1 \cdots \tau_r$. The permutation $\sigma$ is an **even permutation** exactly when it is the product of a sequence of $r$ transpositions for some even $r$, and an **odd permutation** exactly when this holds for some odd $r$. (Being the length of a sequence, $r \ge 0$.)

The following hold, where $\sigma, \pi \in S_X$.

1. (Parity of the number of transpositions) If $\sigma$ is the product of a sequence of $r$ transpositions, then $r - (|X| - |\operatorname{Orb}(\sigma)|)$ is even.
2. (Well-definedness) Every permutation is exactly one of an even permutation and an odd permutation. $\sigma$ is even exactly when $|X| - |\operatorname{Orb}(\sigma)|$ is even. Hence, if $\sigma$ is the product of a sequence of $r$ transpositions, then $r$ is even when $\sigma$ is even and odd when $\sigma$ is odd.
3. (Examples) $i_X$ is even and every transposition is odd. For $k \ge 2$, a cycle of length $k$ is even exactly when $k$ is odd.
4. (Products and inverses) If $\sigma$ and $\pi$ are both even or both odd, then $\sigma\pi$ is even; if one is even and the other is odd, then $\sigma\pi$ is odd. $\sigma^{-1}$ is even when $\sigma$ is even and odd when $\sigma$ is odd.

The proof uses, for integer arithmetic, the arithmetic laws accepted in the statement of the well-ordering principle, and the facts accepted in the entry on even and odd integers that sums and differences of integers are integers and that every integer is exactly one of even and odd.
:::

## 직관

같은 치환을 호환의 곱으로 쓰는 방법은 여러 가지이고, 호환의 개수도 하나로 정해지지 않습니다. 그래도 개수의 홀짝은 정해진다는 것이 이 항목의 내용입니다. 궤도를 원탁으로 보면, 호환 하나를 곱할 때마다 탁자의 수가 정확히 하나 늘거나 줄어듭니다. 항등치환(탁자 $|X|$개)에서 출발해 호환을 $r$번 곱해 $\sigma$에 이르렀다면, 탁자의 수는 $|X|$에서 $r$번 하나씩 바뀌어 $|\operatorname{Orb}(\sigma)|$가 된 것입니다.

한 걸음마다 수가 $1$만큼 바뀌면 걸음 수와 바뀐 양의 차이는 늘 짝수입니다. 계단을 한 칸씩 오르내리는 사람이 $r$걸음 뒤에 처음보다 $m$칸 아래에 있다면, $r$과 $m$의 홀짝이 같은 것과 같습니다. 여기서 "$m$칸"이 $|X| - |\operatorname{Orb}(\sigma)|$이고, 이 수는 $\sigma$만 보고 정해지므로 $r$의 홀짝도 $\sigma$만으로 정해집니다. 비유가 맞지 않는 곳은, 계단에서는 어느 쪽으로 갈지 마음대로 정하지만 치환에서는 맞바꾸는 두 점이 같은 궤도에 있는지가 방향을 정한다는 것입니다.

$X$가 공집합이거나 원소가 하나이면 호환이 없고 치환은 $i_X$ 하나뿐이며, 그것은 빈 곱으로 짝치환입니다.

## 증명

:::idea
호환의 열을 끝에서부터 하나씩 늘리며 귀납한다. 오른쪽에 호환을 곱할 때마다 궤도의 개수가 $1$ 늘거나 줄므로 $r - (|X| - |\operatorname{Orb}(\sigma)|)$는 $0$이나 $2$만큼 바뀐다.
:::

:::hint
$r - (|X| - |\operatorname{Orb}(\sigma)|)$가 짝수 $2t$일 때, $r$에 $1$을 더하고 $|\operatorname{Orb}(\sigma)|$에 $1$이나 $-1$을 더하면 무엇이 되는가?
:::

:::hint
짝치환이면서 홀치환이라고 하면, (1)을 두 분해에 각각 써서 두 길이의 차가 짝수임을 얻는다.
:::

:::proof
궤도의 개수에 관한 사실은 [[transposition-changes-orbit-count|호환을 곱하면 궤도의 개수가 하나 바뀐다]]의 번호로 인용한다. 정수가 짝수이거나 홀수이고 둘 다는 아니라는 것은 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실이다.

**(1)** $r$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로, "길이 $r$인 모든 호환의 열 $\tau_1, \dots, \tau_r$에 대하여 $\sigma = \tau_1 \cdots \tau_r$이면 $r - (|X| - |\operatorname{Orb}(\sigma)|)$는 짝수이다"를 보인다.

$r = 0$이면 [[finite-product-in-a-group|군의 유한 곱]]의 (1)에 의해 $\sigma$는 빈 곱, 곧 $S_X$의 항등원 $i_X$이다. 궤도의 개수의 (2)에 의해 $|\operatorname{Orb}(i_X)| = |X|$이므로 $0 - 0 = 0 = 2 \cdot 0$은 짝수이다.

$r \ge 0$에서 진술이 참이라 하고 $\tau_1, \dots, \tau_{r+1}$이 호환의 열이라 하자. $\sigma' = \tau_1 \cdots \tau_r$(처음 $r$개의 곱)이라 하면 군의 유한 곱의 (2)에 의해 $\sigma = \tau_1 \cdots \tau_{r+1} = \sigma'\tau_{r+1}$이다. 귀납 가정에 의해 $r - (|X| - |\operatorname{Orb}(\sigma')|) = 2t$인 정수 $t$가 있다. $\tau_{r+1} = (a\ b)$($a \ne b$)라 하면 궤도의 개수의 (4)에 의해 $|\operatorname{Orb}(\sigma)| = |\operatorname{Orb}(\sigma')| + \varepsilon$이고 $\varepsilon$은 $1$이거나 $-1$이다. 따라서
$$(r + 1) - (|X| - |\operatorname{Orb}(\sigma)|) = 2t + 1 + \varepsilon$$
이고, $\varepsilon = 1$이면 이것은 $2(t + 1)$, $\varepsilon = -1$이면 $2t$이다. 어느 경우든 짝수이다.

**(2)** $n = |X| - |\operatorname{Orb}(\sigma)|$라 하자. [[product-of-transpositions|호환의 곱]]의 (2)에 의해 $\sigma$는 어떤 길이 $r$인 호환의 열의 곱이고, (1)에 의해 $r - n = 2p$인 정수 $p$가 있다. $n = 2t$이면 $r = 2(t + p)$는 짝수이므로 정의에 의해 $\sigma$는 짝치환이다. $n$이 짝수가 아니면 $n = 2t + 1$인 정수 $t$가 있고 $r = 2(t + p) + 1$은 홀수이므로 $\sigma$는 홀치환이다. 따라서 모든 치환은 짝치환이거나 홀치환이다.

$\sigma$가 짝치환이면서 홀치환이라 하자. 그러면 $\sigma$는 어떤 짝수 $r = 2u$에 대하여 길이 $r$인 호환의 열의 곱이고, 어떤 홀수 $s = 2v + 1$에 대하여 길이 $s$인 호환의 열의 곱이다. (1)에 의해 $r - n = 2p$, $s - n = 2q$인 정수 $p$, $q$가 있으므로 $r - s = 2(p - q)$는 짝수이다. 한편 $r - s = 2u - 2v - 1 = 2(u - v - 1) + 1$은 홀수이므로 받아들인 사실과 어긋난다. 따라서 짝치환이면서 홀치환인 치환은 없다.

$n$이 짝수이면 위에서 $\sigma$는 짝치환이다. 거꾸로 $\sigma$가 짝치환인데 $n$이 짝수가 아니면 위에서 $\sigma$는 홀치환이기도 하므로 어긋난다. 따라서 $\sigma$가 짝치환인 것은 정확히 $n$이 짝수일 때이다. 끝으로 $\sigma$가 길이 $r$인 호환의 열의 곱이면, $r$이 짝수이면 $\sigma$는 짝치환이고 $r$이 홀수이면 홀치환이므로, 정확히 하나라는 것에 의해 $\sigma$가 짝치환일 때 $r$은 홀수일 수 없어 짝수이고, 홀치환일 때 $r$은 홀수이다.

**(3)** $i_X$는 길이 $0$인 열의 곱(빈 곱)이고 $0 = 2 \cdot 0$은 짝수이므로 짝치환이다. 호환 $\tau$는 길이 $1$인 열 $\tau$의 곱이고(군의 유한 곱의 (1)) $1 = 2 \cdot 0 + 1$은 홀수이므로 홀치환이다. $\sigma$가 길이 $k$인 순환치환이면 궤도의 개수의 (5)에 의해 $|X| - |\operatorname{Orb}(\sigma)| = |X| - (|X| - k + 1) = k - 1$이다. (2)에 의해 $\sigma$가 짝치환인 것은 정확히 $k - 1$이 짝수일 때이고, $k - 1 = 2u$인 것은 정확히 $k = 2u + 1$일 때이므로 정확히 $k$가 홀수일 때이다.

**(4)** (2)에 의해 $\sigma$는 길이 $r$인 호환의 열 $\tau_1, \dots, \tau_r$의 곱이고, $\pi$는 길이 $s$인 호환의 열 $\tau'_1, \dots, \tau'_s$의 곱이며, $r$과 $s$의 홀짝은 각각 $\sigma$와 $\pi$의 짝·홀과 같다. 군의 유한 곱의 (3)에 의해 $\sigma\pi$는 두 열을 이어 붙인 길이 $r + s$인 열의 곱이고, 그 열의 항은 모두 호환이다. $r = 2u$, $s = 2v$이면 $r + s = 2(u + v)$, $r = 2u + 1$, $s = 2v + 1$이면 $r + s = 2(u + v + 1)$, 한쪽만 홀수이면 $r + s = 2(u + v) + 1$이다. 정의에 의해 첫 두 경우 $\sigma\pi$는 짝치환이고 셋째 경우 홀치환이다.

호환의 곱의 (3)에 의해 $\sigma^{-1} = \tau_r \cdots \tau_1$, 곧 $j$번째 항이 $\tau_{r+1-j}$인 길이 $r$인 호환의 열의 곱이다. 따라서 $\sigma^{-1}$은 길이 $r$인 호환의 열의 곱이고, $r$의 홀짝에 따라 $\sigma$와 같은 쪽이다.
:::

## 예시와 반례

:::example[$(1\ 2)(3\ 4\ 5)$의 홀짝]
$X = \{1, 2, 3, 4, 5\}$에서 $\sigma = (1\ 2)(3\ 4\ 5)$라 합시다. $\sigma$는 $1$과 $2$를 맞바꾸고 $3$, $4$, $5$를 각각 $4$, $5$, $3$으로 보내므로, 궤도는 $\{1, 2\}$와 $\{3, 4, 5\}$ 둘입니다. $|X| - |\operatorname{Orb}(\sigma)| = 5 - 2 = 3$은 홀수이므로 (2)에 의해 $\sigma$는 홀치환입니다. (3)과 (4)로도 같은 답이 나옵니다. $(1\ 2)$는 홀치환이고 $(3\ 4\ 5)$는 길이가 홀수인 순환치환이라 짝치환이므로, 그 곱은 홀치환입니다.
:::

:::counterexample[호환의 개수가 다른 두 분해의 예]
호환의 개수 자체는 치환으로 정해지지 않습니다. $X = \{1, 2, 3, 4\}$에서 $(1\ 2\ 3) = (1\ 3)(1\ 2)$이고, 또 $(1\ 2\ 3) = (1\ 2)(2\ 4)(2\ 3)(3\ 4)$입니다. 둘째 등식은 오른쪽의 호환부터 차례로 적용해 확인합니다. $1$은 $1, 1, 1, 2$로, $2$는 $2, 3, 3, 3$으로, $3$은 $4, 4, 2, 1$로, $4$는 $3, 2, 4, 4$로 옮겨 가므로 곱은 $1$, $2$, $3$을 각각 $2$, $3$, $1$로 보내고 $4$를 고정합니다. 두 분해의 길이 $2$와 $4$는 다르지만 둘 다 짝수이고, (1)의 $|X| - |\operatorname{Orb}(\sigma)| = 4 - 2 = 2$와 홀짝이 같습니다.
:::

## 확인 질문

:::check[$S_6$의 $(1\ 2\ 3\ 4\ 5\ 6)$은 짝치환인가?]
아닙니다. 길이 $6$인 순환치환이고 $6$은 짝수이므로 (3)에 의해 홀치환입니다. 궤도의 개수로 보면 궤도는 $\{1, \dots, 6\}$ 하나이고 $6 - 1 = 5$가 홀수입니다.
:::

:::check[$\sigma$가 홀치환이면 $\sigma\sigma$는 짝치환인가?]
그렇습니다. (4)에서 $\pi = \sigma$로 두면 둘 다 홀치환이므로 $\sigma\sigma$는 짝치환입니다. 예컨대 호환 $\tau$에서 $\tau\tau = i_X$는 짝치환입니다.
:::
