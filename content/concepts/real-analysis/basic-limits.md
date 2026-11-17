---
title: 기본적인 극한
title_en: Basic Limits
aliases: [상수 수열의 극한, 1/n 의 극한, 발산하는 수열의 예, basic limits, limit of 1/n]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 상수 수열의 극한은 그 상수이고, n 번째 항이 1/n 인 수열의 극한은 0 이다. 항이 1 과 −1 로 번갈아 바뀌는 수열과 n 번째 항이 n 인 수열은 발산한다.
requires: [natural-numbers-are-infinite, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, sequence, limit-of-sequence, limit-is-unique]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.1절 Example 2.1.3, 2.1.4, 2.1.5 (p.53), 연습문제 2.1.2 (p.59)
    checked: original
    note: "이 항목의 (1)–(3)은 출처의 Example 2.1.3(상수 수열 1 은 1 로 수렴, M = 1), Example 2.1.4(lim 1/n = 0, 아르키메데스 성질로 1/M < ε 인 M), Example 2.1.5({(−1)ⁿ} 은 발산)를 명제로 올린 것이다. (1)은 출처가 상수 1 로 든 것을 모든 실수 c 로 적었다. (3)의 수열은 이 사이트에 실수의 거듭제곱이 없으므로 홀짝으로 정의했다. 출처는 (3)을 극한 x 가 있다고 가정하고 ε = 1/2, 짝수 n ≥ M 과 n + 1 에 삼각부등식을 써서 모순을 얻는다. 이 항목은 limit-of-sequence 의 (2), (3)의 꼴을 ε = 1 로 확인하고 L 의 부호에 따라 n = 2M 이나 n = 2M + 1 을 고른다. (4)는 출처의 연습문제 2.1.2(p.59, {n} 은 수렴하는가)이고, 출처는 p.51 에서 {n} 이 유계가 아니라고 'why?'로 남긴다. 이 항목은 (4)를 아르키메데스 성질로 직접 증명한다(수렴하는 수열이 유계라는 출처의 Proposition 2.1.7 을 쓰지 않는다). (1)–(3)은 limit-of-sequence 의 예시에서 정의로 확인한 것과 같은 내용이고, 뒤 항목이 번호로 인용할 수 있도록 이 항목에서 다시 증명한다. 반례는 출처 p.62(Corollary 2.2.4 뒤)의 예 y_n = 1/n(모든 항이 양수이지만 극한은 0. 극한을 취하면 엄격한 부등식이 엄격하지 않은 부등식이 될 수 있다)과 같은 수열, 같은 내용이다. 예시 '2 + n⁻¹'은 출처의 연습문제 2.1.10({(n+1)/n}, 곧 1 + 1/n 의 극한을 구하라)과 같은 발상이다. 확인 질문은 출처에 없다(검색한 범위)."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 수학 오류 없음. 출처 메모 보완, 수열 (1)의 전제를 좁힘, 근거 인용 보완"
added: 2026-11-17
---

:::statement
수열, 수렴, 발산과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이다. 다음이 성립한다.

1. (상수 수열) 실수 $c$에 대하여, 모든 항이 $c$인 상수 수열은 $c$로 수렴한다. 곧 $\lim_{n \to \infty} c = c$이다.
2. $n$번째 항이 $n^{-1}$인 수열은 $0$으로 수렴한다. 곧 $\lim_{n \to \infty} n^{-1} = 0$이다.
3. (번갈아 바뀌는 수열) 자연수 $n$이 짝수이면 $a_n = 1$, 홀수이면 $a_n = -1$인 수열 $(a_n)$은 발산한다.
4. $n$번째 항이 $n$인 수열은 발산한다.
:::

:::english
Sequences, convergence, divergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits. The following hold.

1. (Constant sequences) For a real number $c$, the constant sequence all of whose terms equal $c$ converges to $c$; that is, $\lim_{n \to \infty} c = c$.
2. The sequence whose $n$th term is $n^{-1}$ converges to $0$; that is, $\lim_{n \to \infty} n^{-1} = 0$.
3. (The alternating sequence) The sequence $(a_n)$ with $a_n = 1$ when the natural number $n$ is even and $a_n = -1$ when $n$ is odd diverges.
4. The sequence whose $n$th term is $n$ diverges.
:::

## 직관

수렴의 정의를 처음 쓸 때 늘 보게 되는 네 수열입니다. 상수 수열은 처음부터 극한 위에 머물러 있으므로 어떤 $\varepsilon$에도 $M = 1$이 통합니다. $n^{-1}$은 $0$에 닿지는 않지만 얼마든지 가까워지고, 얼마나 뒤에서부터 가까워지는지는 아르키메데스 성질이 알려 줍니다.

발산하는 두 수열은 서로 다른 이유로 발산합니다. 번갈아 바뀌는 수열은 $1$과 $-1$ 사이를 오가며 어느 한 수 가까이에 머물지 않고, $n$번째 항이 $n$인 수열은 어떤 수에서든 결국 멀어집니다. 앞의 것은 유계이고 뒤의 것은 위로 유계가 아닙니다([[sequence|수열]] 항목의 예시와 확인 질문 참고).

비유를 들면, 수렴은 "반경을 얼마나 작게 잡든, 어느 순간 이후로는 정해진 자리의 그 반경 안에서 벗어나지 않는 것"입니다. 시계추처럼 두 자리를 끝없이 오가는 것도, 한쪽으로 끝없이 걸어가는 것도 이 뜻의 수렴이 아닙니다. 비유가 맞지 않는 곳은 시계추가 두 자리 사이를 연속으로 지나간다는 점입니다. 수열에는 항과 항 사이가 없습니다.

## 증명

:::idea
(1), (2)는 정의에 맞는 $M$을 직접 고른다. (3), (4)는 [[limit-of-sequence]]의 (2), (3)의 꼴, 곧 "어떤 $\varepsilon$에 대해서는 몇 번째부터 보아도 멀리 떨어진 항이 있다"를 $\varepsilon = 1$로 확인한다.
:::

:::hint
(2)에서는 [[archimedean-property]]의 (3)을 본다.
:::

:::hint
(3)에서 $L \le 0$이면 짝수 번째 항 $1$이, $0 < L$이면 홀수 번째 항 $-1$이 $L$에서 $1$ 이상 떨어져 있다. (4)에서는 $M$과 $L + 1$보다 모두 큰 자연수를 아르키메데스 성질로 찾는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (10)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (1)"은 [[absolute-value]]의 번호, "극한 (2)"는 [[limit-of-sequence]]의 번호이다. 각 경우에 수렴을 보이면 [[limit-is-unique]]에 의해 기호로 쓴 등식이 성립한다. (K4)의 $0 + 0 = 0$과 (K8)의 (ii)에 의해 $-0 = 0$이고, 따라서 실수 $a$에 대하여 $a - 0 = a + 0 = a$이다.

**1의 증명.** 양의 실수 $\varepsilon$이 주어지면 $M = 1$로 둔다. $n \ge 1$인 모든 자연수 $n$에서 $n$번째 항은 $c$이고, $-c$의 정의((K8)의 (ii))에 의해 $c - c = 0$이며, 절댓값 (2)에 의해 $|0| = 0$이므로 $|c - c| = 0 < \varepsilon$이다. 따라서 상수 수열은 $c$로 수렴한다.

**2의 증명.** 양의 실수 $\varepsilon$이 주어졌다고 하자. [[archimedean-property]]의 (3)에 의해 $\dfrac{1}{M} < \varepsilon$인 자연수 $M$이 있고, $M$ 이상인 모든 자연수 $n$에 대해서도 $\dfrac{1}{n} < \varepsilon$이다. 여기서 (K1), (K4)에 의해 $\dfrac{1}{n} = 1 \cdot n^{-1} = n^{-1}$이다. $n \ge M$인 자연수 $n$을 잡는다. $n^{-1} - 0 = n^{-1}$이고, 순서 성질 (10)에 의해 $0 < n^{-1}$이므로 절댓값 (1)에 의해 $|n^{-1} - 0| = n^{-1} < \varepsilon$이다. 따라서 이 수열은 $0$으로 수렴한다.

**3의 증명.** [[even-and-odd]]에서 받아들인 사실(모든 정수는 짝수이거나 홀수이고 둘 다인 정수는 없다)에 의해 각 $n$마다 $a_n$이 하나로 정해지므로, [[sequence]]의 (1)에 의해 $(a_n)$은 수열이다. 실수 $L$을 아무것이나 잡고, 극한 (2)의 조건이 $\varepsilon = 1$로 성립함을 보인다. 순서 성질 (5)의 (ii)에 의해 $0 < 1$이다.

자연수 $M$을 잡는다. [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술에 의해 $M$은 양의 정수이다. [[well-ordering-principle]]의 (Z7)에 의해 $M = 0 + M < M + M = 2M$이고, (L3)에 의해 $2M < 2M + 1$이다. $2M$과 $2M + 1$은 정수이고([[even-and-odd]]의 정수의 합), (Z6)에 의해 $0 < M < 2M < 2M + 1$이므로 둘 다 $M$보다 큰 양의 정수, 곧 자연수이다. $2M = 2 \cdot M$은 짝수이고 $2M + 1$은 홀수이므로 $a_{2M} = 1$, $a_{2M+1} = -1$이다. 순서 성질 (1)의 (iii)에 의해 $L \le 0$이거나 $0 < L$이다.

- $L \le 0$이면 $n = 2M$으로 둔다. 순서 성질 (3)의 (iii)에 의해 $-0 \le -L$, 곧 $0 \le -L$이고, 순서 성질 (2)의 (i)로 양변에 $1$을 더하면 (K1), (K4)에 의해 $1 \le 1 - L$이다. $0 < 1$과 순서 성질 (1)의 (v)에 의해 $0 \le 1 - L$이므로 절댓값 (1)에 의해 $|a_n - L| = |1 - L| = 1 - L \ge 1$이다.
- $0 < L$이면 $n = 2M + 1$로 둔다. 뺄셈의 정의와 (K12)의 (iv)에 의해 $-1 - L = (-1) + (-L) = -(1 + L)$이므로 절댓값 (3)에 의해 $|a_n - L| = |1 + L|$이다. 순서 성질 (2)의 (ii)로 $0 < L$의 양변에 $1$을 더하면 (K1), (K4)에 의해 $1 < 1 + L$이고, $0 < 1$과 (W2)에 의해 $0 < 1 + L$이므로 절댓값 (1)에 의해 $|1 + L| = 1 + L$이다. 따라서 $|a_n - L| \ge 1$이다.

어느 경우든 $n \ge M$이고 $|a_n - L| \ge 1$인 자연수 $n$이 있다. $M$은 임의였으므로 극한 (2)에 의해 $(a_n)$은 $L$로 수렴하지 않고, $L$도 임의였으므로 극한 (3)에 의해 $(a_n)$은 발산한다.

**4의 증명.** $n$번째 항이 $n$인 수열을 $(x_n)$이라 하자. [[sequence]]의 (1)에 의해 이것은 수열이다. 실수 $L$을 아무것이나 잡고, 극한 (2)의 조건이 $\varepsilon = 1$로 성립함을 보인다. 자연수 $M$을 잡고 $t = \max\{M, L + 1\}$로 둔다. [[archimedean-property]]의 (1)에 의해 $t < n$인 자연수 $n$이 있다. 절댓값 (10)에 의해 $M \le t$이고 $L + 1 \le t$이므로, 순서 성질 (1)의 (v)에 의해 $M < n$이고 $L + 1 < n$이다. 따라서 $n \ge M$이다. 또 순서 성질 (2)의 (ii)로 $L + 1 < n$의 양변에 $-L$을 더하면 (K1), (K2), $-L$의 정의, (K4)에 의해 $1 < n - L$이다. $0 < 1$과 (W2)에 의해 $0 < n - L$이므로 절댓값 (1)에 의해 $|x_n - L| = |n - L| = n - L$이고, $1 < n - L$이므로 $|x_n - L| \ge 1$이다. $M$은 임의였으므로 극한 (2)에 의해 $(x_n)$은 $L$로 수렴하지 않고, $L$도 임의였으므로 극한 (3)에 의해 $(x_n)$은 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[$n$번째 항이 $2 + n^{-1}$인 수열]
이 수열은 $2$로 수렴합니다. 양의 실수 $\varepsilon$에 대해 (2)의 증명과 같이 [[archimedean-property]]의 (3)이 주는 자연수 $M$을 잡으면, $n \ge M$일 때 $n^{-1} < \varepsilon$입니다. (K1), (K2), $-2$의 정의, (K4)에 의해 $(2 + n^{-1}) - 2 = n^{-1}$이고 $0 < n^{-1}$이므로 $|(2 + n^{-1}) - 2| = n^{-1} < \varepsilon$입니다. 따라서 $\lim_{n \to \infty} (2 + n^{-1}) = 2$입니다. 수열의 합의 극한에 관한 일반적인 규칙 없이, 정의로 직접 보였습니다.
:::

:::counterexample[모든 항이 양수여도 극한은 $0$일 수 있다]
(2)의 수열은 [[order-properties-of-reals]]의 (10)에 의해 모든 항이 양수입니다. 그러나 극한은 $0$이고, $0$은 양수가 아닙니다((W1)에 의해 $0 < 0$은 성립하지 않습니다). "모든 항이 $0$보다 크면 극한도 $0$보다 크다"는 이 수열에서 성립하지 않습니다. 이 수열에서 항이 극한과 같아지는 일도 없습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $-n$인 수열은 수렴하는가?]
수렴하지 않습니다. (4)의 증명과 같은 방식으로, 실수 $L$과 자연수 $M$에 대해 $t = \max\{M, 1 - L\}$보다 큰 자연수 $n$을 [[archimedean-property]]의 (1)로 잡습니다. 그러면 $n \ge M$이고 $1 - L < n$이므로 $1 < n + L$입니다. $-n - L = -(n + L)$이고 $0 < n + L$이므로 $|-n - L| = |n + L| = n + L \ge 1$입니다([[absolute-value|절댓값]]의 (3), (1)). [[limit-of-sequence]]의 (2), (3)에 의해 이 수열은 발산합니다.
:::

:::check[$n$이 짝수이면 $0$, 홀수이면 $n^{-1}$인 수열은 $0$으로 수렴하는가?]
수렴합니다. 양의 실수 $\varepsilon$에 대해 (2)의 증명에서처럼 $n \ge M$이면 $n^{-1} < \varepsilon$인 자연수 $M$을 잡습니다. $n \ge M$일 때 $n$이 짝수이면 $|0 - 0| = 0 < \varepsilon$이고, 홀수이면 $|n^{-1} - 0| = n^{-1} < \varepsilon$입니다. 어느 경우든 $n$번째 항과 $0$의 거리가 $\varepsilon$보다 작습니다.
:::
