---
title: 급수의 선형성
title_en: Linearity of Series
aliases: [급수의 상수배, 급수의 합과 차, linearity of series]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 두 수열의 급수가 수렴하면 상수배, 항끼리의 합, 항끼리의 차로 얻은 수열의 급수도 수렴하고 합은 각각 합의 상수배, 합, 차이다. 부분합도 상수배, 합, 차가 되며, 수렴하는 급수와 발산하는 급수의 항끼리의 합은 발산한다.
requires: [proof-by-contradiction, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, sequence, limit-of-sequence, limit-is-unique, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, series-and-partial-sums]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.3절 Proposition 2.5.12 와 그 증명 (p.91), 그 뒤 문단 (p.91–92)
    checked: original
    note: "출처의 Proposition 2.5.12(p.91)는 α ∈ ℝ 와 수렴하는 두 급수에 대해 (i) αx_n 의 급수가 수렴하고 합이 α 배이며 (ii) x_n + y_n 의 급수가 수렴하고 합이 두 합의 합이라는 것이다. 출처는 k 번째 부분합에 대한 유한 합의 등식(증명 없음)을 쓰고 수열의 극한의 성질로 극한을 취한다. 이 항목은 부분합이 상수배·합·차가 된다는 것((1))을 series-and-partial-sums 의 (1)(재귀 정리의 유일성)로 보이고, 극한은 limit-of-sum-and-product 로 취한다. 차 (4)와 수렴하는 급수와 발산하는 급수의 합에 관한 (5)는 출처에 없다(검색한 범위). 출처는 p.92 에서 급수의 곱은 합보다 간단하지 않고 항별로 곱하지 않으며, 유한 합에서도 (a + b)(c + d) ≠ ac + bd 라고 적는다. 반례 '항끼리 곱한 수열의 급수'는 이 경고를 a = b = c = d = 1 로 두어 처음 두 항만 1 인 수열에 옮긴 것이다. 출처의 연습문제 2.5.9 c)(p.98)는 무한히 많은 항이 0 이 아닌 절대수렴하는 급수로 같은 것을 보이라고 한다. 예시 '상수배로 합 구하기'의 앞뒤 항이 지워지는 급수는 출처의 연습문제 2.5.1(p.97, k 번째 부분합이 k/(k+1) 인 급수), 2.5.3 d)(p.97)와 5.5.3 b)(p.224)의 1/(n(n+1)) 의 급수와 같다(n⁻¹ − (n+1)⁻¹ = (n(n+1))⁻¹). 반례 '합의 급수가 수렴해도'와 확인 질문은 출처에 없다(검색한 범위)."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. 아래에서 "$n$번째 항이 $c\,x_n$인 수열"처럼 식으로 쓴 수열은 [[sequence]]의 (1)로 정한 것이다. $(x_n)$, $(y_n)$을 수열, $(s_n)$, $(t_n)$을 각각의 부분합 수열, $c$를 실수라 하자.

1. (부분합) $n$번째 항이 $c\,x_n$, $x_n + y_n$, $x_n - y_n$인 수열의 부분합 수열은 각각 $n$번째 항이 $c\,s_n$, $s_n + t_n$, $s_n - t_n$인 수열이다. 이것은 급수가 수렴하는지와 상관없이 성립한다.
2. (상수배) $(x_n)$의 급수가 수렴하고 그 합이 $S$이면, $n$번째 항이 $c\,x_n$인 수열의 급수도 수렴하고 그 합은 $cS$이다.
3. (합) $(x_n)$의 급수와 $(y_n)$의 급수가 수렴하고 그 합이 각각 $S$, $T$이면, $n$번째 항이 $x_n + y_n$인 수열의 급수도 수렴하고 그 합은 $S + T$이다.
4. (차) $(x_n)$의 급수와 $(y_n)$의 급수가 수렴하고 그 합이 각각 $S$, $T$이면, $n$번째 항이 $x_n - y_n$인 수열의 급수도 수렴하고 그 합은 $S - T$이다.
5. (수렴하는 급수와 발산하는 급수) $(x_n)$의 급수가 수렴하고 $(y_n)$의 급수가 발산하면, $n$번째 항이 $x_n + y_n$인 수열의 급수는 발산한다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits, and sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums. Below, a sequence described by a formula, such as "the sequence whose $n$th term is $c\,x_n$", is the one given by item (1) of the entry on sequences. Let $(x_n)$, $(y_n)$ be sequences, $(s_n)$, $(t_n)$ their respective sequences of partial sums, and $c$ a real number.

1. (Partial sums) The sequences of partial sums of the sequences whose $n$th terms are $c\,x_n$, $x_n + y_n$ and $x_n - y_n$ are the sequences whose $n$th terms are $c\,s_n$, $s_n + t_n$ and $s_n - t_n$, respectively. This holds whether or not the series converge.
2. (Constant multiples) If the series of $(x_n)$ converges with sum $S$, then the series of the sequence whose $n$th term is $c\,x_n$ also converges, and its sum is $cS$.
3. (Sums) If the series of $(x_n)$ and of $(y_n)$ converge with sums $S$ and $T$ respectively, then the series of the sequence whose $n$th term is $x_n + y_n$ also converges, and its sum is $S + T$.
4. (Differences) If the series of $(x_n)$ and of $(y_n)$ converge with sums $S$ and $T$ respectively, then the series of the sequence whose $n$th term is $x_n - y_n$ also converges, and its sum is $S - T$.
5. (A convergent and a divergent series) If the series of $(x_n)$ converges and the series of $(y_n)$ diverges, then the series of the sequence whose $n$th term is $x_n + y_n$ diverges.
:::

## 직관

두 사람이 날마다 같은 통장에 돈을 넣는다고 해 봅시다. 첫째 사람이 $n$째 날에 $x_n$, 둘째 사람이 $y_n$을 넣으면 그날 들어온 돈은 $x_n + y_n$이고, 어느 날까지의 잔고는 두 사람이 각자 그날까지 넣은 돈의 합 $s_n + t_n$입니다. 날마다 넣는 돈을 모두 $c$배로 하면 잔고도 $c$배가 됩니다. 이것이 (1)이고, 잔고가 다가가는 값에 대해서도 같은 관계가 성립한다는 것이 (2)–(4)입니다. 이 비유는 부분합에 대해서는 그대로 맞고, 합에 대해서는 두 잔고가 모두 어떤 값으로 다가갈 때만 맞습니다.

(5)는 (4)에서 나옵니다. $y_n$은 $x_n + y_n$에서 $x_n$을 뺀 것이므로, $x_n + y_n$의 급수와 $x_n$의 급수가 모두 수렴한다면 $y_n$의 급수도 수렴해야 합니다.

곱에 대해서는 이런 관계가 없습니다. 항끼리 곱한 수열의 부분합은 일반적으로 부분합끼리의 곱이 아닙니다(아래 반례). 두 수의 합끼리의 곱을 펼치면 엇갈린 곱도 나오기 때문입니다.

## 증명

:::idea
부분합 수열이 상수배·합·차가 된다는 것은 처음 값과 한 걸음씩의 규칙을 확인해 [[series-and-partial-sums|급수와 부분합]]의 (1)로 보인다. 그다음 수열의 극한의 성질로 극한을 취한다.
:::

:::hint
$n$번째 항이 $s_n + t_n$인 수열 $(v_n)$이 $v_1 = x_1 + y_1$, $v_{n+1} = v_n + (x_{n+1} + y_{n+1})$을 만족하는지 본다.
:::

:::hint
(5)는 귀류법으로, $y_n = (x_n + y_n) - x_n$에 (4)를 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "부분합 (1)"처럼 쓴 것은 [[series-and-partial-sums]]의 번호, "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. 두 수열이 같다는 것은 [[sequence]]의 수열의 같음, 곧 모든 항이 같다는 뜻이다.

**1의 증명.** 상수배. $v_n = c\,s_n$으로 둔다. $v_1 = c\,s_1 = c\,x_1$이고, 자연수 $n$에서 (K3)에 의해
$$
v_{n+1} = c\,(s_n + x_{n+1}) = c\,s_n + c\,x_{n+1} = v_n + c\,x_{n+1}
$$
이다. 부분합 (1)을 $n$번째 항이 $c\,x_n$인 수열에 쓰면 $(v_n)$은 그 부분합 수열이다.

합. $v_n = s_n + t_n$으로 둔다. $v_1 = x_1 + y_1$이고, 자연수 $n$에서 (K1), (K2)에 의해
$$
v_{n+1} = (s_n + x_{n+1}) + (t_n + y_{n+1}) = (s_n + t_n) + (x_{n+1} + y_{n+1}) = v_n + (x_{n+1} + y_{n+1})
$$
이다. 부분합 (1)에 의해 $(v_n)$은 $n$번째 항이 $x_n + y_n$인 수열의 부분합 수열이다.

차. $v_n = s_n - t_n$으로 둔다. $v_1 = x_1 - y_1$이다. 자연수 $n$에서 (K12)의 (iv)에 의해 $-(t_n + y_{n+1}) = (-t_n) + (-y_{n+1})$이므로, (K1), (K2)에 의해
$$
v_{n+1} = (s_n + x_{n+1}) + \bigl((-t_n) + (-y_{n+1})\bigr) = \bigl(s_n + (-t_n)\bigr) + \bigl(x_{n+1} + (-y_{n+1})\bigr) = v_n + (x_{n+1} - y_{n+1})
$$
이다. 부분합 (1)에 의해 $(v_n)$은 $n$번째 항이 $x_n - y_n$인 수열의 부분합 수열이다.

**2의 증명.** $(s_n)$이 $S$로 수렴하므로 사칙연산 (5)에 의해 $(c\,s_n)$은 $cS$로 수렴한다. (1)에 의해 $(c\,s_n)$은 $n$번째 항이 $c\,x_n$인 수열의 부분합 수열이므로, 그 급수는 수렴하고 합은 $cS$이다.

**3의 증명.** $(s_n)$이 $S$로, $(t_n)$이 $T$로 수렴하므로 사칙연산 (1)에 의해 $(s_n + t_n)$은 $S + T$로 수렴한다. (1)에 의해 이것이 $n$번째 항이 $x_n + y_n$인 수열의 부분합 수열이므로 결론이 나온다.

**4의 증명.** 사칙연산 (2)에 의해 $(s_n - t_n)$은 $S - T$로 수렴하고, (1)에 의해 이것이 $n$번째 항이 $x_n - y_n$인 수열의 부분합 수열이다.

**5의 증명.** $n$번째 항이 $x_n + y_n$인 수열을 $(z_n)$이라 하고, $(z_n)$의 급수가 수렴한다고 가정한다([[proof-by-contradiction|귀류법]]). (4)를 $(z_n)$과 $(x_n)$에 쓰면 $n$번째 항이 $z_n - x_n$인 수열의 급수가 수렴한다. (K1), (K2), (K8)의 (ii), (K4)에 의해 $z_n - x_n = (x_n + y_n) + (-x_n) = (y_n + x_n) + (-x_n) = y_n + (x_n + (-x_n)) = y_n$이므로 이 수열은 $(y_n)$이고, $(y_n)$의 급수가 수렴하게 되어 가정에 어긋난다. 따라서 $(z_n)$의 급수는 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[상수배로 합 구하기]
$p_n = n^{-1} - (n+1)^{-1}$로 둡니다. $n$번째 항이 $1 - (n+1)^{-1}$인 수열 $(v_n)$은 (K8)의 (iii)에 의해 $1^{-1} = 1$이므로 $v_1 = 1 - 2^{-1} = p_1$이고, (K1), (K2), (K8)의 (ii)로 정리하면
$$
v_n + p_{n+1} = \bigl(1 - (n+1)^{-1}\bigr) + \bigl((n+1)^{-1} - (n+2)^{-1}\bigr) = 1 - (n+2)^{-1} = v_{n+1}
$$
입니다. [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 $(v_n)$이 $(p_n)$의 부분합 수열입니다. [[basic-limits]]의 (2)와 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $((n+1)^{-1})$은 $0$으로 수렴하고, (K9)에 의해 $v_n = 1 + (-1)(n+1)^{-1}$이므로 [[limit-of-sum-and-product|극한의 사칙연산]]의 (5)를 두 번 써서 $(v_n)$은 $1 + (-1) \cdot 0 = 1$로 수렴합니다. 따라서 $(p_n)$의 급수의 합은 $1$입니다.

이제 이 항목의 (2)에 의해 $n$번째 항이 $3p_n$인 수열의 급수는 수렴하고 합은 $3 \cdot 1 = 3$이며, (1)에 의해 그 부분합은 $3v_n = 3 - 3(n+1)^{-1}$입니다.
:::

:::example[수렴하는 급수에 모든 항이 $1$인 급수를 더하면]
위의 $(p_n)$에 대하여 $n$번째 항이 $p_n + 1$인 수열의 급수를 봅니다. 모든 항이 $1$인 수열의 부분합은 $n$입니다. $n$번째 항이 $n$인 수열 $(w_n)$은 $w_1 = 1$, $w_{n+1} = n + 1 = w_n + 1$을 만족하므로 [[series-and-partial-sums|급수와 부분합]]의 (1)이 그렇게 말합니다. [[basic-limits]]의 (4)에 의해 이 수열은 발산하므로 모든 항이 $1$인 수열의 급수는 발산하고, 이 항목의 (5)에 의해 $(p_n + 1)$의 급수도 발산합니다.
:::

:::counterexample[항끼리 곱한 수열의 급수]
자연수 $n$이 $n \le 2$이면 $x_n = 1$, $n \ge 3$이면 $x_n = 0$인 수열을 봅니다. [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)에 의해 자연수는 $n \le 2$이거나 $n \ge 3$이고, (L1)에 의해 둘 다는 아닙니다. 또 (Z1), (Z5), (L2)에 의해 $n \le 2$인 자연수는 $1$, $2$뿐이므로 $x_1 = x_2 = 1$입니다. $v_1 = 1$이고 $n \ge 2$에서 $v_n = 2$인 수열 $(v_n)$은 $v_1 = x_1$, $v_2 = 2 = 1 + 1 = v_1 + x_2$이고, $n \ge 2$에서 (Z7)에 의해 $n + 1 \ge 3$이므로 $v_{n+1} = 2 = 2 + 0 = v_n + x_{n+1}$입니다. [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 이것이 부분합 수열입니다. 자연수 $n$에서 (Z7)에 의해 $n + 1 \ge 2$이므로 그 $1$-꼬리는 모든 항이 $2$인 상수 수열이고, [[basic-limits]]의 (1)과 [[tail-of-a-sequence|수열의 꼬리]]의 (1)에 의해 $(v_n)$은 $2$로 수렴하고, $(x_n)$의 급수의 합은 $2$입니다.

항끼리 곱한 수열 $(x_n x_n)$은 $1 \cdot 1 = 1$, $0 \cdot 0 = 0$((K9))이므로 $(x_n)$ 자신과 같고, 그 급수의 합도 $2$입니다. 그런데 두 합의 곱은 $2 \cdot 2 = 4 \ne 2$입니다. 항끼리 곱한 수열의 급수의 합은 두 급수의 합의 곱과 다를 수 있습니다.
:::

:::counterexample[합의 급수가 수렴해도 각 급수는 발산할 수 있다]
모든 항이 $1$인 수열 $(x_n)$과 모든 항이 $-1$인 수열 $(y_n)$을 봅니다. (K8)의 (ii)에 의해 $x_n + y_n = 1 + (-1) = 0$이고, 모든 항이 $0$인 수열의 부분합은 모두 $0$입니다(모든 항이 $0$인 수열 $(w_n)$이 $w_1 = 0$, $w_{n+1} = 0 = 0 + 0 = w_n + 0$을 만족하므로 [[series-and-partial-sums|급수와 부분합]]의 (1)). 따라서 $(x_n + y_n)$의 급수는 [[basic-limits]]의 (1)에 의해 수렴하고 합은 $0$입니다.

그러나 $(x_n)$의 급수는 발산합니다. $n$번째 항이 $n$인 수열 $(w_n)$이 $w_1 = 1$, $w_{n+1} = n + 1 = w_n + 1$을 만족하므로 [[series-and-partial-sums|급수와 부분합]]의 (1)에 의해 부분합이 $n$이고, [[basic-limits]]의 (4)에 의해 이 수열은 발산하기 때문입니다. $(y_n)$의 급수도 발산합니다. $(y_n)$의 급수가 수렴한다면 이 항목의 (2)를 $c = -1$에 써서 $n$번째 항이 $(-1)(-1) = 1$인 수열((K12)의 (iii), (K4)), 곧 $(x_n)$의 급수도 수렴하게 되기 때문입니다. (3)의 역은 성립하지 않습니다.
:::

## 확인 질문

:::check[$n$번째 항이 $x_n + y_n$인 수열과 $x_n - y_n$인 수열의 급수가 모두 수렴하고 합이 각각 $A$, $B$이면 $(x_n)$의 급수는 어떠한가?]
수렴하고 합은 $2^{-1}(A + B)$입니다. (3)에 의해 $n$번째 항이 $(x_n + y_n) + (x_n - y_n)$인 수열의 급수는 합 $A + B$로 수렴합니다. (K1), (K2), (K8)의 (ii), (K4)에 의해 $(x_n + y_n) + (x_n - y_n) = x_n + x_n$이고, (K4), (K12)의 (i)과 (K7)의 $1 + 1 = 2$에 의해 $x_n + x_n = 2x_n$이므로, 이것은 $n$번째 항이 $2x_n$인 수열입니다. (2)를 $c = 2^{-1}$에 쓰면, (K2), (K8)의 (iii), (K4)에 의해 $2^{-1}(2x_n) = x_n$이므로 $(x_n)$의 급수가 합 $2^{-1}(A + B)$로 수렴합니다.
:::

:::check[$(x_n)$의 급수가 수렴하고 $(y_n)$의 급수가 발산하면 $n$번째 항이 $x_n - y_n$인 수열의 급수는 어떠한가?]
발산합니다. $n$번째 항이 $-y_n$인 수열의 급수는 발산합니다. 수렴한다면 (2)를 $c = -1$에 써서 $n$번째 항이 $(-1)(-y_n) = y_n$인 수열((K12)의 (iii), (K4))의 급수가 수렴하게 되기 때문입니다. $x_n - y_n = x_n + (-y_n)$이므로 (5)를 $(x_n)$과 $(-y_n)$에 쓰면 발산합니다.
:::
