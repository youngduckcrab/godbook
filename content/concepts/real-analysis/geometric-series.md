---
title: 등비급수
title_en: Geometric Series
aliases: [등비급수의 합, 공비, 기하급수, geometric series, common ratio]
kind: proposition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수 a, r 에 대하여 n 번째 항이 a·r^(n−1) 인 수열의 급수를 등비급수라 한다. r ≠ 1 이면 n 번째 부분합은 a(1 − rⁿ)/(1 − r) 이고, |r| < 1 이면 급수는 수렴하며 합은 a/(1 − r) 이다. 등비급수의 K-꼬리의 급수는 첫째 항이 a·r^K 인 등비급수이다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, limits-preserve-inequalities, tail-of-a-sequence, limit-of-sum-and-product, geometric-sequence-limit, series-and-partial-sums, tail-of-a-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.1절 Proposition 2.5.5 와 그 뒤 문단 (p.88–89), Example 2.5.4 (p.88), Proposition 2.5.12 뒤의 공식 (p.91–92), 0.3.2절 Example 0.3.8 (p.13), 연습문제 2.5.2 (p.97)
    checked: original
    note: "출처의 Proposition 2.5.5(p.88)는 −1 < r < 1 이면 첨자 0 부터의 급수 Σ_{n=0}^∞ rⁿ 이 수렴하고 합이 1/(1 − r) 이라는 것이다. 출처는 증명을 'Details of the proof are left as an exercise'(p.89)라 하고, 첨자 0 부터 k − 1 까지의 합이 (1 − r^k)/(1 − r) 임을 보이고 극한을 취하면 된다고만 적는다. 그 연습문제 2.5.2(p.97)의 힌트가 가리키는 Example 0.3.8(p.13)은 c ≠ 1 이면 1 + c + ⋯ + cⁿ = (1 − c^{n+1})/(1 − c) 임을 귀납법으로 보인다. 이 항목의 (1)은 그 계산과 같은 발상을 series-and-partial-sums 의 (1)로 쓴 것이다. 출처의 첨자 0 부터의 급수(Remark 2.5.2, p.87 의 Σ_{n=0}^∞ rⁿ = Σ_{n=1}^∞ r^{n−1})는 이 항목에서 a = 1 이고 n 번째 항이 r^{n−1} 인 수열의 급수이다. 출처는 첫째 항이 1 인 경우만 진술하고, 이 항목은 첫째 항 a 를 두었다. r = 1 인 부분합은 이 사이트가 덧붙였다. (2)를 일반 a 에 대한 a/(1 − r) 꼴로 쓴 것은 이 사이트가 덧붙였다(출처 p.91–92 에 a = rⁱ 인 경우가 있다). (3)은 출처가 p.91–92 에서 |r| < 1, i ∈ ℕ 일 때 첨자 i 부터의 급수의 합이 r^i/(1 − r) 임을 상수배(2.5.12)로 보이는 공식에 해당한다. 출처의 첨자 i 부터의 급수는 a = 1 이고 n 번째 항이 r^{n−1} 인 수열의 K = i 인 K-꼬리의 급수이다. 출처는 공비의 절댓값이 1 이상인 경우의 발산을 Example 2.5.10(p.90)에서 Proposition 2.5.9 뒤에 다루며, 이 사이트도 그것을 terms-of-convergent-series-tend-to-zero 에 둔다. 예시 '첫째 항과 공비가 모두 2⁻¹ 인 등비급수'는 출처의 Example 2.5.4(p.88, 1/2ⁿ 의 급수의 합이 1)와 같은 급수이다. 예시 '공비가 음수인 등비급수'와 확인 질문은 출처에 없다(검색한 범위). 반례의 급수(공비 2)가 발산한다는 것은 출처 Example 2.5.10(p.90)에 있고, 공식을 그대로 쓰면 −1 이 나온다는 비교는 출처에 없다(검색한 범위). '공비'(common ratio)라는 용어는 출처에 나오지 않는다(출처는 p.96 에서 이웃한 두 항의 비 r 이라고만 쓴다). 출처는 0⁰ = 1 을 p.106 의 거듭제곱급수 문단에서 약속하고, 이 사이트는 power-of-a-real-number 에서 a⁰ = 1(0⁰ = 1 포함)로 정의했다."
status: source-checked
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 거듭제곱은 [[power-of-a-real-number]]의 것이며, 수열의 $K$-꼬리는 [[tail-of-a-sequence]]의 것이고, 부분합 수열, 급수의 수렴, 급수의 합은 [[series-and-partial-sums]]의 것이다. 실수의 나눗셈 $p/q$는 $q \ne 0$일 때 $p \cdot q^{-1}$이다.

**등비급수.** $a$, $r$을 실수라 하자. 자연수 $n$에 대하여 $n - 1$은 $0$ 이상인 정수이므로 $r^{n-1}$이 정해지고($r^0 = 1$, 특히 $0^0 = 1$), [[sequence]]의 (1)에 의해 $n$번째 항이 $a r^{n-1}$인 수열이 있다. 이 수열의 첫째 항은 $a r^0 = a$이다. 이 수열의 급수를 첫째 항이 $a$이고 **공비**(common ratio)가 $r$인 **등비급수**(geometric series)라 한다. 그 부분합 수열을 $(s_n)$이라 하자.

1. (부분합) $r \ne 1$이면 모든 자연수 $n$에서
$$
s_n = \frac{a(1 - r^n)}{1 - r}
$$
이다. $r = 1$이면 모든 자연수 $n$에서 $s_n = na$이다.
2. (수렴과 합) $|r| < 1$이면 등비급수는 수렴하고, 그 합은 $\dfrac{a}{1 - r}$이다.
3. (등비급수의 꼬리) 자연수 $K$에 대하여, $n$번째 항이 $a r^{n-1}$인 수열의 $K$-꼬리는 $n$번째 항이 $(a r^K) r^{n-1}$인 수열이다. 곧 $K$-꼬리의 급수는 첫째 항이 $a r^K$이고 공비가 $r$인 등비급수이다. 따라서 $|r| < 1$이면 $K$-꼬리의 급수는 수렴하고, 그 합은 $\dfrac{a r^K}{1 - r}$이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; powers are those of the entry on powers of a real number; the $K$-tail of a sequence is that of the entry on tails of sequences; and sequences of partial sums, convergence of series and sums of series are those of the entry on series and partial sums. Division $p/q$ of real numbers means $p \cdot q^{-1}$ for $q \ne 0$.

**Geometric series.** Let $a$ and $r$ be real numbers. For each natural number $n$, the number $n - 1$ is an integer at least $0$, so $r^{n-1}$ is defined ($r^0 = 1$, in particular $0^0 = 1$), and by item (1) of the entry on sequences there is a sequence whose $n$th term is $a r^{n-1}$. The first term of this sequence is $a r^0 = a$. The series of this sequence is called the **geometric series** with first term $a$ and **common ratio** $r$. Let $(s_n)$ be its sequence of partial sums.

1. (Partial sums) If $r \ne 1$, then for every natural number $n$
$$
s_n = \frac{a(1 - r^n)}{1 - r}.
$$
If $r = 1$, then $s_n = na$ for every natural number $n$.
2. (Convergence and sum) If $|r| < 1$, the geometric series converges, and its sum is $\dfrac{a}{1 - r}$.
3. (Tails of a geometric series) For a natural number $K$, the $K$-tail of the sequence whose $n$th term is $a r^{n-1}$ is the sequence whose $n$th term is $(a r^K) r^{n-1}$. That is, the series of the $K$-tail is the geometric series with first term $a r^K$ and common ratio $r$. Hence if $|r| < 1$, the series of the $K$-tail converges, and its sum is $\dfrac{a r^K}{1 - r}$.
:::

## 직관

공을 떨어뜨리면 튀어 오를 때마다 높이가 일정한 비율로 줄어든다고 해 봅시다. 처음에 $a$만큼 움직이고 매번 직전의 $r$배만큼 움직이면, $n$번째 움직임은 $a r^{n-1}$입니다. 등비급수의 부분합은 $n$번째까지 움직인 거리의 합이고, $a > 0$이고 $0 < r < 1$이면 이 거리는 계속 늘지만 $\dfrac{a}{1 - r}$을 넘지 않고 그 값으로 다가갑니다. 비유가 맞지 않는 곳은 $r$이 음수이거나 $a$가 음수인 경우로, 이때는 "움직인 거리"가 아니라 방향이 있는 이동으로 읽어야 합니다.

(1)의 식은 부분합에 $r$을 곱하면 항이 한 칸씩 밀린다는 데서 나옵니다. $s_n$과 $r s_n$은 처음 항 $a$와 마지막 항 $a r^n$만 다르므로 $(1 - r)s_n = a - a r^n$입니다. 이 사이트에서는 이 계산을 처음 값과 한 걸음씩의 규칙을 확인하는 [[series-and-partial-sums|급수와 부분합]]의 (1)로 바꾸어 증명합니다. $|r| < 1$이면 [[geometric-sequence-limit|등비수열의 극한]]에 의해 $r^n$이 $0$으로 가므로 부분합은 $\dfrac{a}{1 - r}$로 갑니다. 이 공식을 $|r| < 1$이 아닌 경우에 쓰면 틀린 값이 나올 수 있습니다(아래 반례).

## 증명

:::idea
$r \ne 1$이면 $n$번째 항이 $\dfrac{a(1 - r^n)}{1 - r}$인 수열이 처음 값 $a$와 규칙 "다음 값 = 지금 값 + $a r^n$"을 만족함을 계산해 [[series-and-partial-sums|급수와 부분합]]의 (1)을 쓴다. $|r| < 1$이면 $r^n$이 $0$으로 수렴하므로 극한의 사칙연산으로 합을 얻는다.
:::

:::hint
$\dfrac{a(1 - r^n)}{1 - r} + a r^n = \dfrac{a(1 - r^n) + a r^n (1 - r)}{1 - r}$이고, $r^n \cdot r = r^{n+1}$이다.
:::

:::hint
$K$-꼬리의 $n$번째 항은 $a r^{(n+K)-1}$이고, 지수 $(n + K) - 1$은 $K + (n - 1)$이다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "거듭제곱 (1)"처럼 쓴 것은 [[power-of-a-real-number]]의 번호, "순서 성질 (1)"은 [[order-properties-of-reals]]의 번호, "부분합 (1)"은 [[series-and-partial-sums]]의 번호, "사칙연산 (5)"는 [[limit-of-sum-and-product]]의 번호이다. 자연수는 양의 정수이고([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]), 정수끼리의 합과 차는 정수이며([[even-and-odd]]), 정수의 계산은 [[well-ordering-principle]]의 진술에 따라 계산으로 쓰고, (K7)에 의해 실수로서의 계산과 같다.

**진술 첫 문단의 확인.** 자연수 $n$은 [[prime-number]]의 (Z1)에 의해 $1 \le n$이므로, 양변에서 $1$을 빼면 (Z7)에 의해 $0 \le n - 1$이다. 따라서 $r^{n-1}$은 거듭제곱의 정의로 정해진 실수이고 $a r^{n-1}$도 실수이다. $n = 1$이면 $r^0 = 1$이므로 (K4)에 의해 첫째 항은 $a \cdot 1 = a$이다. 이 수열을 $(x_n)$이라 하자. 자연수 $n$에서 $(n + 1) - 1 = n$이므로 $x_{n+1} = a r^n$이다.

**1의 증명.** $r \ne 1$이라 하자. (K12)의 (v)에 의해 $1 - r \ne 0$이므로 $(1 - r)^{-1}$이 있다. $d = (1 - r)^{-1}$로 두고, $n$번째 항이 $v_n = a(1 - r^n)d$인 수열 $(v_n)$을 생각한다. 거듭제곱 (1)에 의해 $r^1 = r$이므로 (K8)의 (iii)과 (K4)에 의해
$$
v_1 = a\bigl((1 - r)d\bigr) = a \cdot 1 = a = x_1
$$
이다((K2)). 자연수 $n$에서 $(1 - r)d = 1$과 (K4)에 의해 $a r^n = a r^n (1 - r) d$이므로, (K1)–(K3), (K12)의 (i), (ii)로 정리하면
$$
v_n + x_{n+1} = a(1 - r^n)d + a r^n (1 - r) d = a\bigl((1 - r^n) + (r^n - r^n r)\bigr) d = a(1 - r^n r)d
$$
이다. 마지막 등식은 $(1 - r^n) + (r^n - r^n r) = 1 + \bigl((-r^n) + r^n\bigr) + (-r^n r) = 1 - r^n r$((K1), (K2), (K8)의 (ii), (K4))이다. 거듭제곱 (1)에 의해 $r^n r = r^{n+1}$이므로 $v_n + x_{n+1} = a(1 - r^{n+1})d = v_{n+1}$이다. 부분합 (1)에 의해 $(v_n)$은 $(x_n)$의 부분합 수열이고, 모든 자연수 $n$에서 $s_n = a(1 - r^n)(1 - r)^{-1}$이다.

$r = 1$이라 하자. 거듭제곱 (2)의 (iv)에 의해 $0$ 이상인 모든 정수 $m$에서 $1^m = 1$이므로 모든 자연수 $n$에서 $x_n = a \cdot 1 = a$이다. $n$번째 항이 $na$인 수열 $(w_n)$은 (K1), (K4)에 의해 $w_1 = 1 \cdot a = a = x_1$이고, (K7), (K12)의 (i), (K4)에 의해 $w_{n+1} = (n + 1)a = na + a = w_n + x_{n+1}$이다. 부분합 (1)에 의해 $s_n = na$이다.

**2의 증명.** $|r| < 1$이라 하자. [[absolute-value|절댓값]]의 (6)에 의해 $r \le |r|$이므로 순서 성질 (1)의 (v)에 의해 $r < 1$이고, 순서 성질 (1)의 (i)에 의해 $r \ne 1$이다. 따라서 (1)이 성립한다. [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $n$번째 항이 $r^n$인 수열은 $0$으로 수렴한다. (K9)에 의해 $1 - r^n = 1 + (-1)r^n$이므로, 사칙연산 (5)를 상수배 $-1$과 상수 더하기 $1$에 차례로 쓰면 $n$번째 항이 $1 - r^n$인 수열은 $1 + (-1) \cdot 0 = 1$로 수렴한다((K9), (K4)). (K1), (K2)에 의해 $s_n = (ad)(1 - r^n)$이므로, 사칙연산 (5)를 상수배 $ad$에 쓰면 $(s_n)$은 $(ad) \cdot 1 = ad = \dfrac{a}{1 - r}$로 수렴한다. 따라서 등비급수는 수렴하고 합은 $\dfrac{a}{1 - r}$이다.

**3의 증명.** 자연수 $K$와 $n$에 대하여 $K$-꼬리의 $n$번째 항은 $x_{n+K}$이다. $n + K$는 자연수이고([[tail-of-a-sequence]]의 진술), 정수의 계산으로 $(n + K) - 1 = K + (n - 1)$이며 $K \ge 0$, $n - 1 \ge 0$이다. 거듭제곱 (2)의 (i)에 의해 $r^{K + (n-1)} = r^K r^{n-1}$이므로, (K2)에 의해
$$
x_{n+K} = a r^{(n+K)-1} = a\,(r^K r^{n-1}) = (a r^K) r^{n-1}
$$
이다. [[sequence]]의 수열의 같음에 의해 $K$-꼬리는 $n$번째 항이 $(a r^K) r^{n-1}$인 수열이고, 그 급수는 첫째 항이 $a r^K$이고 공비가 $r$인 등비급수이다. $|r| < 1$이면 (2)를 첫째 항 $a r^K$에 써서 $K$-꼬리의 급수는 수렴하고 합은 $\dfrac{a r^K}{1 - r}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[공비가 음수인 등비급수]
첫째 항이 $2$이고 공비가 $-3^{-1}$인 등비급수를 봅니다. [[absolute-value|절댓값]]의 (3), (1)과 [[order-properties-of-reals]]의 (6)의 (i)에 의해 $|-3^{-1}| = |3^{-1}| = 3^{-1}$이고, $0 < 1 < 3$이므로 그 항목의 (10)과 (6)의 (ii)에 의해 $3^{-1} < 1^{-1} = 1$입니다. 따라서 (2)에 의해 이 급수는 수렴하고, (K9)와 (K12)의 (i)에 의해 $1 - (-3^{-1}) = 1 + 3^{-1} = (3 + 1) \cdot 3^{-1} = 4 \cdot 3^{-1}$이므로 (K12)의 (vi)와 (K8)의 (iii)(곧 $(3^{-1})^{-1} = 3$), $6 = 3 \cdot 2$, $4 = 2 \cdot 2$에 의해 합은
$$
\frac{2}{4 \cdot 3^{-1}} = 2 \cdot 3 \cdot 4^{-1} = \frac{3}{2}
$$
입니다. (1)에 의해 부분합은 $s_n = \dfrac{3}{2}\bigl(1 - (-3^{-1})^n\bigr)$이고, 처음 세 개는 $s_1 = 2$, $s_2 = 2 - 2 \cdot 3^{-1} = 4 \cdot 3^{-1}$, $s_3 = 4 \cdot 3^{-1} + 2 \cdot 9^{-1} = 14 \cdot 9^{-1}$입니다. 식으로도 $s_2 = \dfrac{3}{2} \cdot \dfrac{8}{9} = \dfrac{4}{3}$, $s_3 = \dfrac{3}{2} \cdot \dfrac{28}{27} = \dfrac{14}{9}$로 맞습니다. 부분합은 $\dfrac{3}{2}$보다 크고 작기를 번갈아 하며 다가가므로 단조가 아닙니다.
:::

:::example[첫째 항과 공비가 모두 $2^{-1}$인 등비급수]
$n$번째 항은 거듭제곱 (1)과 (2)의 (i)에 의해 $2^{-1}(2^{-1})^{n-1} = (2^{-1})^n$입니다. $0 < 2^{-1} < 1$이므로 (2)에 의해 이 급수는 수렴합니다. $1 - 2^{-1} = 2^{-1}$이므로(양변에 $2$를 곱하면 $2 - 1 = 1$) 합은 $2^{-1}(2^{-1})^{-1} = 1$이고, (1)에 의해 부분합은 $s_n = \dfrac{2^{-1}\bigl(1 - (2^{-1})^n\bigr)}{2^{-1}} = 1 - (2^{-1})^n$입니다. 부분합과 합의 차 $1 - s_n = (2^{-1})^n$이 매번 반으로 줄어듭니다.
:::

:::counterexample[공비가 $2$이면 $\dfrac{a}{1 - r}$은 합이 아니다]
첫째 항이 $1$이고 공비가 $2$인 등비급수에 공식 $\dfrac{a}{1 - r}$을 그대로 쓰면 $\dfrac{1}{1 - 2} = -1$이 나옵니다. 그러나 항 $2^{n-1}$은 모두 양수이므로([[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)) [[series-and-partial-sums|급수와 부분합]]의 (3)에 의해 부분합 수열은 단조증가이고, [[sequence]]의 (4)에 의해 모든 $n$에서 $s_n \ge s_1 = 1$입니다. 부분합 수열이 수렴한다고 해도 [[limits-preserve-inequalities|극한과 부등식]]의 (3)에 의해 그 극한은 $1$ 이상이어야 하므로 $-1$일 수 없습니다. (1)에 의해 실제 부분합은 $s_n = \dfrac{1 - 2^n}{1 - 2} = 2^n - 1$입니다.
:::

## 확인 질문

:::check[공비가 $0$인 등비급수의 부분합과 합은 무엇인가?]
첫째 항을 $a$라 하면 모든 부분합이 $a$이고 합도 $a$입니다. $r = 0 \ne 1$이므로 (1)에 의해 $s_n = \dfrac{a(1 - 0^n)}{1 - 0}$이고, 거듭제곱 (2)의 (iv)에 의해 자연수 $n$에서 $0^n = 0$이므로 $s_n = a$입니다. 항으로 보아도 $0^0 = 1$이므로 첫째 항은 $a$이고, $n \ge 2$에서는 $n - 1 \ge 1$이어서 $a \cdot 0^{n-1} = 0$입니다. $|0| < 1$이므로 (2)의 합 $\dfrac{a}{1 - 0} = a$와도 맞습니다.
:::

:::check[$|r| < 1$일 때 (3)의 꼬리의 합을 [[tail-of-a-series|급수의 꼬리]]의 (3)으로 구하면 같은 값이 나오는가?]
나옵니다. 그 항목의 (3)에 의해 $K$-꼬리의 급수의 합은 $S - s_K$이고, (1)과 (2)에 의해
$$
S - s_K = \frac{a}{1 - r} - \frac{a(1 - r^K)}{1 - r} = \frac{a - a + a r^K}{1 - r} = \frac{a r^K}{1 - r}
$$
입니다. (3)의 값과 같습니다.
:::
