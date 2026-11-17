---
title: 수열의 극한
title_en: Limit of a Sequence
aliases: [수열의 수렴, 수렴, 발산, 극한, 수렴하는 수열, 발산하는 수열, 엡실론-엠 정의, limit of a sequence, convergence, convergent sequence, divergent sequence, converges to]
kind: definition
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 수열이 실수 L 로 수렴한다는 것은 모든 양수 ε 에 대하여 자연수 M 이 있어 M 이상의 모든 n 에서 |x_n − L| < ε 인 것이다. 이를 한정 기호로 쓰고, 그 부정(L 로 수렴하지 않는다, 발산한다)을 같은 꼴로 풀어 적는다.
requires: [conditional-statement, logical-connectives, quantifiers, negation-of-quantified-statements, negation-of-conditional, natural-numbers-are-infinite, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, archimedean-property, absolute-value, sequence]
sources:
  - ref: lebl-basic-analysis
    loc: 2.1절 Definition 2.1.2 와 그 뒤 설명 (p.52–53), Example 2.1.3, 2.1.4, 2.1.5 (p.53); 1.2절의 ε 에 관한 약속 (p.29)
    checked: original
    note: "출처의 Definition 2.1.2(p.52)는 수열 {x_n} 이 수 x ∈ ℝ 로 수렴하는 것을 '모든 ε > 0 에 대하여 M ∈ ℕ 이 있어 n ≥ M 인 모든 n 에서 |x_n − x| < ε'로 정의하고, x 를 수열의 a limit 라 부르며, 극한이 하나뿐임을 뒤에서 증명할 것이므로 lim_{n→∞} x_n := x 로 쓴다고 적는다. 어떤 수로 수렴하면 convergent, 그렇지 않으면 diverges 또는 divergent 라 한다. 출처는 유일성(Proposition 2.1.6) 앞의 예들에서 '극한이 하나뿐임을 이미 증명했다고 치자'고 적는다(p.52). 이 항목은 극한을 L 로 쓰고(출처는 수열의 이름과 극한에 같은 글자 x 를 쓴다), 한 수열이 두 실수로 수렴할 수 있는지를 다루지 않으므로 lim 기호를 쓰지 않는다. ε 가 실수라는 것은 출처가 p.29 에서 'ε > 0 이라고 쓰면 ε ∈ ℝ 을 뜻한다'고 정한 약속이고, 이 항목은 진술에 '모든 양의 실수 ε'로 적었다. 출처는 p.53 에서 M 이 ε 에 따라 달라도 된다고 적는다. 한정 기호로 쓴 꼴, (1), (2), (3)은 출처에 진술로 없다(검색한 범위). (1)은 출처의 연습문제 1.3.1 의 꼴을 정의에 적용한 것이다. 예시 '상수 수열'은 출처 Example 2.1.3(상수 수열 1, M = 1)과 같은 발상이고, 예시 'n⁻¹'은 출처 Example 2.1.4(아르키메데스 성질로 M 을 고른다)와 같은 내용이다. 예시 '번갈아 바뀌는 수열'은 출처 Example 2.1.5 의 수열 {(−1)ⁿ}과 같은 수열이다. 출처는 극한 x 가 있다고 가정하고 ε = 1/2 과 짝수 n ≥ M, 그다음 항 n + 1 에 삼각부등식을 써서 모순을 얻는다. 이 항목은 (2)의 꼴을 ε = 1 로 직접 확인하고, L 의 부호에 따라 n = 2M 또는 n = 2M + 1 을 고른다. 반례(한정 기호의 순서를 바꾼 명제)와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열과 그 항은 [[sequence]]의 것이고, 절댓값은 [[absolute-value]]의 것이다. $(x_n)$을 수열, $L$을 실수라 하자.

**수렴과 극한.** $(x_n)$이 $L$로 **수렴한다**(converges to $L$)는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $|x_n - L| < \varepsilon$일 때이다. [[quantifiers|한정 기호]]로 쓰면, $(x_n)$이 $L$로 수렴하는 것은 정확히
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists M \in \mathbb{N},\ \forall n \in \mathbb{N},\ (n \ge M \Rightarrow |x_n - L| < \varepsilon)\bigr)\Bigr)
$$
가 참일 때이다. 한정 기호는 이 순서로 읽으므로, $M$은 $\varepsilon$마다 따로 골라도 된다. $L$이 $(x_n)$의 **극한**(limit)인 것은 정확히 $(x_n)$이 $L$로 수렴할 때이다.

$(x_n)$이 **수렴한다**(converges)는 것은 정확히 $(x_n)$이 어떤 실수로 수렴할 때이고, 그런 수열을 **수렴하는 수열**(convergent sequence)이라 한다. $(x_n)$이 **발산한다**(diverges)는 것은 정확히 $(x_n)$이 수렴하지 않을 때이고, 그런 수열을 **발산하는 수열**(divergent sequence)이라 한다. 이 항목은 한 수열이 서로 다른 두 실수로 수렴할 수 있는지를 다루지 않으며, 극한을 나타내는 기호를 정하지 않는다.

다음이 성립한다.

1. (두 부등식으로 쓰기) 실수 $\varepsilon$과 자연수 $n$에 대하여 $|x_n - L| < \varepsilon$인 것은 정확히 $L - \varepsilon < x_n < L + \varepsilon$일 때이다. 따라서 $(x_n)$이 $L$로 수렴하는 것은 정확히, 모든 양의 실수 $\varepsilon$에 대하여 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $L - \varepsilon < x_n < L + \varepsilon$일 때이다.
2. ($L$로 수렴하지 않는다는 것) $(x_n)$이 $L$로 수렴하지 않는 것은 정확히
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \bigl(\forall M \in \mathbb{N},\ \exists n \in \mathbb{N},\ (n \ge M \land |x_n - L| \ge \varepsilon)\bigr)\Bigr)
   $$
   가 참일 때이다. 곧 어떤 양의 실수 $\varepsilon$이 있어, 모든 자연수 $M$에 대하여 $n \ge M$이고 $|x_n - L| \ge \varepsilon$인 자연수 $n$이 있을 때이다.
3. (발산한다는 것) $(x_n)$이 발산하는 것은 정확히 모든 실수 $L$에 대하여 $(x_n)$이 $L$로 수렴하지 않을 때, 곧 모든 실수 $L$에 대하여 (2)의 조건이 성립할 때이다.
:::

:::english
Sequences and their terms are those of the entry on sequences, and the absolute value is the one in the entry on absolute value. Let $(x_n)$ be a sequence and $L$ a real number.

**Convergence and limits.** We say that $(x_n)$ **converges to** $L$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $|x_n - L| < \varepsilon$ for every natural number $n$ with $n \ge M$. In terms of quantifiers, $(x_n)$ converges to $L$ exactly when
$$
\forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\exists M \in \mathbb{N},\ \forall n \in \mathbb{N},\ (n \ge M \Rightarrow |x_n - L| < \varepsilon)\bigr)\Bigr)
$$
is true. Since the quantifiers are read in this order, $M$ may be chosen separately for each $\varepsilon$. $L$ is a **limit** of $(x_n)$ exactly when $(x_n)$ converges to $L$.

We say that $(x_n)$ **converges** exactly when $(x_n)$ converges to some real number, and such a sequence is called a **convergent sequence**. We say that $(x_n)$ **diverges** exactly when $(x_n)$ does not converge, and such a sequence is called a **divergent sequence**. This entry does not address whether a sequence can converge to two different real numbers, and it introduces no symbol for the limit.

The following hold.

1. (Writing it as two inequalities) For a real number $\varepsilon$ and a natural number $n$, $|x_n - L| < \varepsilon$ exactly when $L - \varepsilon < x_n < L + \varepsilon$. Hence $(x_n)$ converges to $L$ exactly when for every positive real number $\varepsilon$ there is a natural number $M$ such that $L - \varepsilon < x_n < L + \varepsilon$ for every natural number $n$ with $n \ge M$.
2. (Not converging to $L$) $(x_n)$ does not converge to $L$ exactly when
   $$
   \exists \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \land \bigl(\forall M \in \mathbb{N},\ \exists n \in \mathbb{N},\ (n \ge M \land |x_n - L| \ge \varepsilon)\bigr)\Bigr)
   $$
   is true; that is, exactly when there is a positive real number $\varepsilon$ such that for every natural number $M$ there is a natural number $n$ with $n \ge M$ and $|x_n - L| \ge \varepsilon$.
3. (Diverging) $(x_n)$ diverges exactly when $(x_n)$ does not converge to $L$ for any real number $L$, that is, exactly when the condition in (2) holds for every real number $L$.
:::

## 직관

공장에서 같은 부품을 끝없이 만든다고 해 봅시다. $n$번째 부품의 길이가 $x_n$이고 목표 길이가 $L$입니다. 검사관이 허용 오차 $\varepsilon$을 아무리 작게 정해도, "몇 번째 부품부터는 모두 오차가 $\varepsilon$ 미만"이라고 말할 수 있는 번호 $M$이 있으면 이 생산은 $L$로 수렴합니다. 허용 오차가 작아지면 그만큼 뒤의 번호부터 세어야 할 수 있으므로, $M$은 $\varepsilon$을 받은 다음에 고릅니다. 정의의 한정 기호의 순서 "모든 $\varepsilon$, 어떤 $M$, 모든 $n$"이 이 순서를 그대로 적은 것입니다.

비유가 맞는 곳과 맞지 않는 곳을 짚어 둡니다. 허용 오차는 $\varepsilon$, 검사를 시작하는 번호는 $M$, "그 뒤의 모든 부품"은 $n \ge M$인 모든 $n$에 해당합니다. 그러나 실제 공장은 유한 개만 만들고, 수렴은 어떤 부품도 정확히 $L$이 될 필요가 없다는 점에서 "목표에 도달한다"와 다릅니다. 아래 예시의 $n^{-1}$은 어느 항도 $0$이 아니지만 $0$으로 수렴합니다.

수렴하지 않는다는 것은 정의를 부정해 얻은 (2)로 확인합니다. "어떤 허용 오차 $\varepsilon$에 대해서는, 검사를 몇 번째부터 시작하든 그 뒤에 오차가 $\varepsilon$ 이상인 부품이 또 나온다"는 뜻입니다.

## 성질의 증명

:::proof
(K…)는 [[real-number-arithmetic]], (W…)는 [[real-order-axioms]]의 진술이다. "순서 성질 (1)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (8)"처럼 쓴 것은 [[absolute-value]]의 번호, "이 항목의 (2)"는 위 진술의 번호이다.

**1의 증명.** 절댓값 (8)의 첫 문장을 $x = L$, $y = x_n$에 쓰면, $|x_n - L| < \varepsilon$인 것은 정확히 $L - \varepsilon < x_n < L + \varepsilon$일 때이다. 정의의 "$|x_n - L| < \varepsilon$"을 이것으로 바꾸면 둘째 문장을 얻는다. 한정 명제의 참·거짓은 [[quantifiers]]의 규칙에 의해 안쪽의 열린 문장이 각 값에서 갖는 진릿값으로만 정해지고, $\Rightarrow$, $\land$, $\lnot$으로 만든 명제의 참·거짓은 진리표([[conditional-statement]], [[logical-connectives]])에 의해 각 부분의 진릿값으로만 정해진다. 따라서 명제의 한 부분을 모든 값에서 진릿값이 같은 열린 문장으로 바꾸어도 전체의 진릿값은 바뀌지 않는다.

**2의 증명.** 정의의 명제를 바깥부터 차례로 부정한다. 각 단계에서 바꾸는 것은 명제의 한 부분(한정 기호 밑이나 $\Rightarrow$, $\land$, $\lnot$의 안에 든 열린 문장)이고, 1의 증명에서 말한 이유로 전체의 진릿값은 그대로이다. $\varepsilon$, $M$, $n$을 정해 두었을 때 다음과 같다.

- [[negation-of-quantified-statements]]의 1에 의해, "$\forall \varepsilon \in \mathbb{R},\ (\varepsilon > 0 \Rightarrow \cdots)$"의 부정은 "$\exists \varepsilon \in \mathbb{R},\ \lnot(\varepsilon > 0 \Rightarrow \cdots)$"와 진릿값이 같다.
- [[negation-of-conditional]]에 의해, "$\lnot(\varepsilon > 0 \Rightarrow \exists M \in \mathbb{N},\ \cdots)$"는 "$\varepsilon > 0 \land \lnot(\exists M \in \mathbb{N},\ \cdots)$"와 진릿값이 같다.
- [[negation-of-quantified-statements]]의 2에 의해, "$\lnot(\exists M \in \mathbb{N},\ \forall n \in \mathbb{N},\ \cdots)$"는 "$\forall M \in \mathbb{N},\ \lnot(\forall n \in \mathbb{N},\ \cdots)$"와 진릿값이 같다.
- [[negation-of-quantified-statements]]의 1에 의해, "$\lnot(\forall n \in \mathbb{N},\ (n \ge M \Rightarrow |x_n - L| < \varepsilon))$"는 "$\exists n \in \mathbb{N},\ \lnot(n \ge M \Rightarrow |x_n - L| < \varepsilon)$"와 진릿값이 같다.
- [[negation-of-conditional]]에 의해, "$\lnot(n \ge M \Rightarrow |x_n - L| < \varepsilon)$"는 "$n \ge M \land \lnot(|x_n - L| < \varepsilon)$"와 진릿값이 같다.
- 순서 성질 (1)의 (iii)에 의해 "$|x_n - L| < \varepsilon$"이 성립하지 않는 것은 정확히 $\varepsilon \le |x_n - L|$일 때이고, [[real-order-axioms]]의 기호에 의해 이것은 $|x_n - L| \ge \varepsilon$이다.

이 여섯 단계를 이어 붙이면 (2)의 명제를 얻는다.

**3의 증명.** $(x_n)$이 수렴한다는 것은 정의에 의해 "$\exists L \in \mathbb{R}$, $(x_n)$이 $L$로 수렴한다"가 참이라는 것이다. $(x_n)$이 발산하는 것은 정확히 이 명제가 거짓일 때이고, [[negation-of-quantified-statements]]의 2에 의해 이것은 정확히 "$\forall L \in \mathbb{R}$, $(x_n)$이 $L$로 수렴하지 않는다"가 참일 때이다. 이 항목의 (2)에 의해 "$(x_n)$이 $L$로 수렴하지 않는다"는 (2)의 조건과 같다. $\blacksquare$
:::

## 예시와 반례

:::example[상수 수열은 그 값으로 수렴한다]
실수 $c$의 상수 수열은 $c$로 수렴합니다. 양의 실수 $\varepsilon$이 주어지면 $M = 1$로 둡니다. $1 \le n$인 모든 자연수 $n$에서 $x_n = c$이고, $-c$의 정의((K8)의 (ii))에 의해 $c - c = 0$이며, [[absolute-value|절댓값]]의 (2)에 의해 $|0| = 0$이므로 $|x_n - c| = 0 < \varepsilon$입니다. 여기서는 어떤 $\varepsilon$에 대해서도 같은 $M = 1$이 통합니다.
:::

:::example[$n$번째 항이 $n^{-1}$인 수열은 $0$으로 수렴한다]
양의 실수 $\varepsilon$이 주어졌다고 합시다. [[archimedean-property]]의 (3)에 의해 $\dfrac{1}{M} < \varepsilon$인 자연수 $M$이 있고, $M$ 이상인 모든 자연수 $n$에 대해서도 $\dfrac{1}{n} < \varepsilon$입니다. (K1)과 (K4)에 의해 $\dfrac{1}{n} = 1 \cdot n^{-1} = n^{-1}$입니다.

이제 $n \ge M$인 자연수 $n$을 잡습니다. (K4)의 $0 + 0 = 0$과 (K8)의 (ii)에 의해 $-0 = 0$이므로 $n^{-1} - 0 = n^{-1} + 0 = n^{-1}$입니다. [[order-properties-of-reals]]의 (10)에 의해 $0 < n^{-1}$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|n^{-1} - 0| = n^{-1} < \varepsilon$입니다. 따라서 이 수열은 $0$으로 수렴합니다. $\varepsilon$이 작을수록 아르키메데스 성질이 주는 $M$은 커질 수 있습니다.
:::

:::example[번갈아 바뀌는 수열은 발산한다]
자연수 $n$이 짝수이면 $a_n = 1$, 홀수이면 $a_n = -1$인 수열 $(a_n)$을 생각합니다. [[even-and-odd]]에서 받아들인 사실(모든 정수는 짝수이거나 홀수이고 둘 다인 것은 없다)에 의해 각 항이 하나씩 정해지므로, [[sequence]]의 (1)에 의해 이것은 수열입니다. 실수 $L$을 아무것이나 잡고, 이 항목의 (2)의 조건이 $\varepsilon = 1$로 성립함을 보입니다. [[order-properties-of-reals]]의 (5)의 (ii)에 의해 $1 > 0$입니다. 아래에서 "순서 성질"은 그 항목의 번호입니다.

자연수 $M$을 하나 잡습니다. $M$은 양의 정수이므로([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]) [[well-ordering-principle]]의 (Z7)에 의해 $M = 0 + M < M + M = 2M$이고, (L3)에 의해 $2M < 2M + 1$입니다. $2M$과 $2M + 1$은 정수이고(정수의 합은 정수, [[even-and-odd]]), (Z6)에 의해 $M < 2M + 1$이며 $0 < M$에서 $0 < 2M$, $0 < 2M + 1$이므로 둘 다 양의 정수, 곧 자연수이고 $M$ 이상입니다. $2M = 2 \cdot M$은 짝수이고 $2M + 1$은 홀수이므로 $a_{2M} = 1$, $a_{2M+1} = -1$입니다. 순서 성질 (1)의 (iii)에 의해 $L \le 0$이거나 $0 < L$입니다.

- $L \le 0$이면 $n = 2M$을 고릅니다. 순서 성질 (3)의 (iii)에 의해 $-0 \le -L$이고 위의 예시에서 본 대로 $-0 = 0$이므로 $0 \le -L$이며, 순서 성질 (2)의 (i)로 $1$을 더하면 (K1), (K4)에 의해 $1 \le 1 - L$입니다. $0 < 1$과 순서 성질 (1)의 (v)에 의해 $0 \le 1 - L$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|a_n - L| = |1 - L| = 1 - L \ge 1$입니다.
- $0 < L$이면 $n = 2M + 1$을 고릅니다. (K12)의 (iv)에 의해 $-1 - L = (-1) + (-L) = -(1 + L)$이므로 [[absolute-value|절댓값]]의 (3)에 의해 $|a_n - L| = |-(1 + L)| = |1 + L|$입니다. 순서 성질 (2)의 (ii)로 $0 < L$의 양변에 $1$을 더하면 (K1), (K4)에 의해 $1 < 1 + L$이고, $0 < 1$과 (W2)에 의해 $0 < 1 + L$이므로 $|1 + L| = 1 + L$이며, $1 < 1 + L$이므로 $|a_n - L| \ge 1$입니다.

어느 경우든 $n \ge M$이고 $|a_n - L| \ge 1$인 자연수 $n$이 있습니다. $M$은 임의였으므로 (2)에 의해 $(a_n)$은 $L$로 수렴하지 않고, $L$도 임의였으므로 (3)에 의해 $(a_n)$은 발산합니다.
:::

:::counterexample[한정 기호의 순서를 바꾸면 다른 명제가 된다]
정의에서 "$\forall \varepsilon$"와 "$\exists M$"의 순서를 바꾼 명제
$$
\exists M \in \mathbb{N},\ \forall \varepsilon \in \mathbb{R},\ \Bigl(\varepsilon > 0 \Rightarrow \bigl(\forall n \in \mathbb{N},\ (n \ge M \Rightarrow |x_n - L| < \varepsilon)\bigr)\Bigr)
$$
는 "하나의 $M$이 모든 $\varepsilon$에 통한다"는 뜻입니다. $n$번째 항이 $n^{-1}$인 수열과 $L = 0$에 대해 이 명제는 거짓입니다. 자연수 $M$을 아무것이나 잡으면 [[order-properties-of-reals]]의 (10)에 의해 $\varepsilon = M^{-1}$은 양의 실수이고, $n = M$에서 위의 예시와 같은 계산으로 $|n^{-1} - 0| = M^{-1}$인데 (W1)에 의해 $M^{-1} < M^{-1}$은 성립하지 않습니다. 그러나 위의 예시에서 본 대로 이 수열은 $0$으로 수렴합니다. 따라서 바꾼 명제는 수렴의 정의와 같은 뜻이 아닙니다.
:::

## 확인 질문

:::check[$n$번째 항이 $2n^{-1}$인 수열은 $0$으로 수렴하는가? 주어진 $\varepsilon$에 대해 $M$을 어떻게 고르는가?]
수렴합니다. 양의 실수 $\varepsilon$이 주어지면 [[order-properties-of-reals]]의 (8)에 의해 $0 < \dfrac{\varepsilon}{2}$이므로, [[archimedean-property]]의 (3)을 $\dfrac{\varepsilon}{2}$에 써서 $M$ 이상인 모든 자연수 $n$에서 $\dfrac{1}{n} < \dfrac{\varepsilon}{2}$인 자연수 $M$을 고릅니다. (K1), (K4)에 의해 $\dfrac{1}{n} = n^{-1}$입니다. $n \ge M$이면 [[order-properties-of-reals]]의 (10)에 의해 $0 < 2$이고 $0 < n^{-1}$이므로 (W4)에 의해 $0 < 2n^{-1}$이고, [[order-properties-of-reals]]의 (4)의 (i)과 (K1)에 의해 $2n^{-1} = n^{-1} \cdot 2 < \dfrac{\varepsilon}{2} \cdot 2 = \varepsilon$입니다((K2), (K1), (K8)의 (iii), (K4)로 $(\varepsilon \cdot 2^{-1}) \cdot 2 = \varepsilon$). $-0 = 0$이므로 [[absolute-value|절댓값]]의 (1)에 의해 $|2n^{-1} - 0| = 2n^{-1} < \varepsilon$입니다. 곧 $\varepsilon$의 절반에 대해 아르키메데스 성질이 주는 $M$을 고르면 됩니다.
:::

:::check[모든 항이 $5$인 상수 수열은 $6$으로 수렴하는가?]
수렴하지 않습니다. 이 항목의 (2)를 $\varepsilon = 1$로 확인합니다. 자연수 $M$을 아무것이나 잡고 $n = M$으로 두면, 정수의 계산((K7))으로 $5 - 6 = -1$이고, [[order-properties-of-reals]]의 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0$이므로 절댓값의 정의와 (K9)에 의해 $|x_n - 6| = |-1| = -(-1) = 1 \ge 1$입니다. 이 수열은 $5$로는 수렴하므로 수렴하는 수열이지만, $6$으로는 수렴하지 않습니다.
:::
