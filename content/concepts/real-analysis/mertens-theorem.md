---
title: 메르텐스 정리
title_en: Mertens' Theorem
aliases: [메르텐스의 정리, 급수의 곱에 관한 메르텐스 정리, 코시 곱의 합, Mertens' theorem, Mertens theorem]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 0부터 번호가 붙은 두 수열의 급수가 수렴하고 그 가운데 적어도 하나가 절대수렴하면, 코시 곱의 급수도 수렴하고 그 합은 두 급수의 합의 곱이다. 두 급수가 수렴하기만 하면 성립하는 부분합의 차의 등식도 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, sequence, limit-of-sequence, limit-is-unique, convergent-sequence-is-bounded, series-and-partial-sums, terms-of-convergent-series-tend-to-zero, finite-sum-of-reals, linearity-and-order-of-finite-sums, sum-of-a-series, series-indexed-from-zero, cauchy-product]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.4절 Multiplication of series, Theorem 2.6.5 (Mertens' theorem) 와 각주 (p.104), 그 증명 (p.105–106). 2.6.5절 Power series, Proposition 2.6.12 뒤 문단 (p.109). 2.5.7절 Exercise 2.5.9 (p.98)
    checked: original
    note: "출처 Theorem 2.6.5(p.104)는 Σ_{n=0}^∞ a_n, Σ_{n=0}^∞ b_n 이 각각 A, B 로 수렴하고 적어도 하나가 절대수렴하면 Σ c_n 이 AB 로 수렴한다고 진술하고, 각주에서 Franz Mertens (1840–1927) 가 증명했다고 적는다. 출처의 증명(p.105–106, p.105 는 PDF 그림으로 대조)은 Σ a_n 이 절대수렴한다고 두고 다른 경우는 말하지 않는다. 부분합을 'We rearrange' 로 Σ_{n=0}^{m} B_n a_{m−n} 으로 바꾸고, Σ_{n=0}^{m} c_n − AB 를 Σ (B_n − B) a_{m−n} + B(A_m − A) 로 쓴 뒤, m ≥ 2K 에서 합을 n ≤ m − K 와 n > m − K 로 나누어 ε B_max + ε Σ|a_n| 로 누르고(B_max = sup |B_n − B|), 마지막에 ε 를 작게 잡는다. 이 항목의 증명은 같은 쪼개기를 따르되, 부분합의 등식은 cauchy-product 의 (3)으로, '다른 쪽이 절대수렴하는 경우'는 cauchy-product 의 (2)(대칭)로 채우고, 출처의 B_max 대신 수렴하는 수열이 유계라는 것(convergent-sequence-is-bounded)으로 얻은 실수 B 를 쓰며, 마지막에 ε 대신 ε(U + B + |T| + 1)⁻¹ 로 잡는다. 출처의 식은 x_i 와 Y_{m−i} 쪽을 묶는 순서가 이 항목과 반대이다(B_n a_{m−n}). (2)의 등식은 출처 증명의 첫 계산의 셋째 줄의 식(Σ (B_n − B) a_{m−n} + BA_m − AB)을 이 항목의 묶는 순서로 진술에 올린 것이다. Proposition 2.6.12 뒤 문단(p.109)은 멱급수의 곱에 이 정리를 쓴다. 반례 '항끼리 곱한 급수의 합이 두 합의 곱과 다른 예'는 출처 Exercise 2.5.9 c)(p.98, 'series are not multiplied term-by-term')와 같은 물음이고, 2.5.3절 Proposition 2.5.12 뒤 문단(p.92)도 급수를 항끼리 곱할 수 없으며 유한 합에서도 (a + b)(c + d) ≠ ac + bd 라고 적는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(메르텐스 증명의 구조와 예의 어림 재확인). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
0부터 번호가 붙은 수열, 그 유한 합과 급수, 급수의 합 $\sum_{n=0}^{\infty}$는 [[series-indexed-from-zero]]의 것이고, 코시 곱과 부분합 $X_m$, $Y_m$은 [[cauchy-product]]의 것이다. $(x_n)_{n \ge 0}$, $(y_n)_{n \ge 0}$을 0부터 번호가 붙은 수열, $(z_n)_{n \ge 0}$을 그 코시 곱이라 하자. 0부터 번호가 붙은 수열의 급수가 **절대수렴한다**는 것은 $n$에서의 값이 그 항의 절댓값인 0부터 번호가 붙은 수열의 급수가 수렴한다는 뜻이다.

1. (**메르텐스 정리**, Mertens' theorem) $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수가 수렴하고 그 가운데 적어도 하나가 절대수렴하면, 코시 곱 $(z_n)_{n \ge 0}$의 급수도 수렴하고
   $$
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr)
   $$
   이다.
2. (부분합의 차) $(x_n)_{n \ge 0}$의 급수와 $(y_n)_{n \ge 0}$의 급수가 수렴하고 그 합이 각각 $S$, $T$이면, $0$ 이상인 모든 정수 $m$에서
   $$
   \begin{aligned}
   \sum_{n=0}^{m} z_n - ST &= \sum_{i=0}^{m} x_i \bigl( Y_{m-i} - T \bigr) \\
   &\qquad + T\,(X_m - S)
   \end{aligned}
   $$
   이다.
:::

:::english
Sequences indexed from zero, their finite sums and series, and sums of series $\sum_{n=0}^{\infty}$ are as in the entry on sums of sequences indexed from zero, and the Cauchy product and the partial sums $X_m$, $Y_m$ are as in the entry on the Cauchy product. Let $(x_n)_{n \ge 0}$ and $(y_n)_{n \ge 0}$ be sequences indexed from zero, and let $(z_n)_{n \ge 0}$ be their Cauchy product. The series of a sequence indexed from zero **converges absolutely** means that the series of the sequence indexed from zero whose value at $n$ is the absolute value of its term converges.

1. (**Mertens' theorem**) If the series of $(x_n)_{n \ge 0}$ and the series of $(y_n)_{n \ge 0}$ converge and at least one of them converges absolutely, then the series of the Cauchy product $(z_n)_{n \ge 0}$ also converges and
   $$
   \sum_{n=0}^{\infty} z_n = \Bigl( \sum_{n=0}^{\infty} x_n \Bigr) \Bigl( \sum_{n=0}^{\infty} y_n \Bigr) .
   $$
2. (Difference of partial sums) If the series of $(x_n)_{n \ge 0}$ and the series of $(y_n)_{n \ge 0}$ converge with sums $S$ and $T$ respectively, then for every integer $m \ge 0$,
   $$
   \begin{aligned}
   \sum_{n=0}^{m} z_n - ST &= \sum_{i=0}^{m} x_i \bigl( Y_{m-i} - T \bigr) \\
   &\qquad + T\,(X_m - S) .
   \end{aligned}
   $$
:::

## 직관

두 급수의 합을 곱하는 것은 무한히 큰 곱셈표의 모든 칸 $x_i y_j$를 더하는 것과 같아 보입니다. 코시 곱은 이 칸들을 대각선($i + j = n$)마다 묶어 차례로 더하는 한 가지 방법입니다. 칸의 수가 무한하므로 묶는 방법에 따라 결과가 달라질 수 있고, 이 정리는 한쪽이 절대수렴하면 대각선 순서로 더해도 두 합의 곱이 나온다는 것입니다.

(2)의 등식이 증명의 뼈대입니다. 오른쪽 둘째 항 $T(X_m - S)$는 $X_m \to S$이므로 작아집니다. 첫째 항에서 $Y_{m-i} - T$는 $m - i$가 클 때, 곧 $i$가 작을 때 작고, $i$가 $m$에 가까울 때는 작지 않을 수 있습니다. 그런 $i$에서는 대신 $x_i$ 쪽이 작아야 하는데, 큰 번호의 $|x_i|$의 합이 작다는 것이 바로 $(x_n)_{n \ge 0}$의 절대수렴에서 나옵니다. 비유하자면 두 사람이 줄의 양 끝에서 서로 다가오는 셈입니다. 한쪽 끝에서는 $Y$ 쪽의 오차가, 다른 쪽 끝에서는 $x$ 쪽의 꼬리가 책임을 집니다. 절대수렴이 필요한 곳은 두 번째 책임자입니다.

## 증명

:::idea
[[cauchy-product|코시 곱]]의 (3)으로 부분합을 $\sum_{i} x_i Y_{m-i}$로 바꾸어 (2)를 얻는다. $(x_n)_{n \ge 0}$이 절대수렴하면, (2)의 첫째 합을 $i \le m - K$인 부분과 $i > m - K$인 부분으로 나누어 앞은 $|Y_{m-i} - T| < \varepsilon$으로, 뒤는 $|x_i|$의 꼬리의 합 $< \varepsilon$으로 누른다. 다른 쪽이 절대수렴하면 코시 곱의 대칭으로 두 수열의 자리를 바꾼다.
:::

:::hint
$(Y_m - T)$는 $0$으로 가는 수열이므로 유계입니다. 그 한계를 $B$라 하면 $i$가 $m$에 가까운 쪽의 합은 $B \sum |x_i|$ 이하입니다.
:::

:::hint
$m \ge 2K$이면 $m - K \ge K$입니다. 그래서 $i > m - K$인 $i$는 모두 $K$보다 크고, $i \le m - K$인 $i$에서는 $m - i \ge K$입니다.
:::

:::proof
정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽고, 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다룬다. 실수의 계산은 [[real-number-arithmetic]]의 (K1)–(K12)이다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]).

**부분합과 극한.** [[series-indexed-from-zero]]의 정의에 의해 $(x_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 부분합은 $X_{j-1}$이다. 따라서 $(x_n)_{n \ge 0}$의 급수가 $S$로 수렴한다는 것은 $j$번째 항이 $X_{j-1}$인 수열이 $S$로 수렴한다는 것이고, 수열의 극한의 정의([[limit-of-sequence]])로 쓰면 모든 양의 실수 $\varepsilon$에 대하여 자연수 $J$가 있어 $J - 1$ 이상인 모든 정수 $m$에서 $|X_m - S| < \varepsilon$이라는 것이다. $(y_n)_{n \ge 0}$, $Y_m$, $T$에 대해서도 같고, 코시 곱의 급수가 수렴하고 합이 $L$이라는 것도 같은 꼴이다.

**(2)의 증명.** [[cauchy-product]]의 (3)에 의해 $\sum_{n=0}^{m} z_n = \sum_{i=0}^{m} x_i Y_{m-i}$이다. $Y_{m-i} = (Y_{m-i} - T) + T$이므로 [[cauchy-product]]의 (5)의 (i)과 (K3)에 의해
$$
\begin{aligned}
\sum_{i=0}^{m} x_i Y_{m-i} &= \sum_{i=0}^{m} x_i (Y_{m-i} - T) \\
&\qquad + T \sum_{i=0}^{m} x_i \\
&= \sum_{i=0}^{m} x_i (Y_{m-i} - T) \\
&\qquad + T X_m
\end{aligned}
$$
이다. 양변에서 $ST$를 빼면 $T X_m - ST = T(X_m - S)$이므로 (2)를 얻는다.

**(1)의 증명.** $S = \sum_{n=0}^{\infty} x_n$, $T = \sum_{n=0}^{\infty} y_n$이라 하자.

*$(x_n)_{n \ge 0}$의 급수가 절대수렴하는 경우.* $U = \sum_{n=0}^{\infty} |x_n|$로 둔다.

- (가) (유계) $j$번째 항이 $Y_{j-1}$인 수열은 수렴하므로 [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (2)에 의해 모든 $j$에서 $|Y_{j-1}| \le B_0$인 실수 $B_0$이 있다. $B = B_0 + |T|$로 두면 [[triangle-inequality]]에 의해 $0$ 이상인 모든 정수 $n$에서 $|Y_n - T| \le |Y_n| + |T| \le B$이고, $0 \le |Y_0 - T| \le B$이므로 $0 \le B$이다.
- (나) (부분합의 어림) [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 $0$ 이상인 모든 정수 $k$에서 $\sum_{i=0}^{k} |x_i| \le U$이다.

$\varepsilon'$을 양의 실수라 하고 $\varepsilon = \varepsilon' (U + B + |T| + 1)^{-1}$로 두자. $U + B + |T| + 1 \ge 1 > 0$이므로 $\varepsilon$은 양수이다. 다음 세 자연수가 있다.

- $J_1$: $J_1 - 1$ 이상인 모든 정수 $n$에서 $|Y_n - T| < \varepsilon$(위의 부분합과 극한).
- $J_2$: $J_2 - 1$ 이상인 모든 정수 $m$에서 $|X_m - S| < \varepsilon$.
- $J_3$: [[series-indexed-from-zero]]의 (12)를 $n$에서의 값이 $|x_n|$인 수열(급수가 수렴한다)에 쓰면, $J_3 \le p < k$인 모든 정수 $p$, $k$에서 $\sum_{i=p+1}^{k} |x_i| < \varepsilon$이다(그 (12)의 $0$ 이상인 정수 $M$에 $1$을 더해 자연수로 잡는다. 합은 $0$ 이상이므로 절댓값을 뗄 수 있다).

$K = J_1 + J_2 + J_3$으로 두면 $K$는 자연수이고 세 수 이상이다. $m \ge 2K$인 정수 $m$을 잡는다. 그러면 $p = m - K$는 $K \le p < m$을 만족한다($K \ge 1$). [[series-indexed-from-zero]]의 (3)과 (4)로 (2)의 첫째 합을 $p$에서 나누면
$$
\begin{aligned}
&\sum_{i=0}^{m} x_i (Y_{m-i} - T) \\
&= \sum_{i=0}^{p} x_i (Y_{m-i} - T) \\
&\qquad + \sum_{i=p+1}^{m} x_i (Y_{m-i} - T)
\end{aligned}
$$
이다.

- 앞쪽. $0 \le i \le p$이면 $m - i \ge m - p = K \ge J_1$이므로 $|Y_{m-i} - T| < \varepsilon$이고, [[absolute-value]]의 (4)에 의해 $|x_i (Y_{m-i} - T)| \le \varepsilon |x_i|$이다. [[cauchy-product]]의 (5)의 (iii), (ii), (i)과 (나)에 의해 앞쪽의 절댓값은 $\varepsilon \sum_{i=0}^{p} |x_i| \le \varepsilon U$ 이하이다.
- 뒤쪽. $p + 1 \le i \le m$이면 (가)에 의해 $|x_i (Y_{m-i} - T)| \le B |x_i|$이다. 뒤쪽은 $p + 1 \le i \le m$에서 정해진 항의 1부터의 유한 합이므로 [[linearity-and-order-of-finite-sums]]의 (8)과 (5), (3), (1)에 의해 그 절댓값은 $B \sum_{i=p+1}^{m} |x_i|$ 이하이고, $J_3 \le K \le p < m$이므로 $\sum_{i=p+1}^{m} |x_i| < \varepsilon$이다. $0 \le B$이므로 뒤쪽의 절댓값은 $B\varepsilon$ 이하이다.
- 둘째 항. $m \ge K \ge J_2$이므로 $|T(X_m - S)| = |T|\,|X_m - S| \le |T|\varepsilon$이다.

(2)와 [[triangle-inequality]]에 의해
$$
\begin{aligned}
&\Bigl| \sum_{n=0}^{m} z_n - ST \Bigr| \\
&\quad \le \varepsilon U + B\varepsilon + |T|\varepsilon \\
&\quad < \varepsilon (U + B + |T| + 1) = \varepsilon'
\end{aligned}
$$
이다. 따라서 $j \ge 2K + 1$인 모든 자연수 $j$에서, $(z_n)_{n \ge 0}$을 한 칸 옮긴 수열의 $j$번째 부분합 $\sum_{n=0}^{j-1} z_n$과 $ST$의 차의 절댓값은 $\varepsilon'$보다 작다. $\varepsilon'$은 임의의 양수이므로 코시 곱의 급수는 $ST$로 수렴한다.

*$(y_n)_{n \ge 0}$의 급수가 절대수렴하는 경우.* [[cauchy-product]]의 (2)에 의해 $(z_n)_{n \ge 0}$은 $(y_n)_{n \ge 0}$과 $(x_n)_{n \ge 0}$의 코시 곱이다. 앞의 경우를 두 수열의 자리를 바꾸어 쓰면 코시 곱의 급수는 $TS$로 수렴하고, (K1)에 의해 $TS = ST$이다. $\blacksquare$
:::

## 예시와 반례

:::example[처음 두 항만 0 이 아닌 수열과의 코시 곱]
$x_0 = 1$, $x_1 = -1$이고 $n \ge 2$에서 $x_n = 0$이라 하고, $(y_n)_{n \ge 0}$을 급수가 $T$로 수렴하는 아무 0부터 번호가 붙은 수열이라 합시다. $(x_n)_{n \ge 0}$의 급수는 절대수렴하고 합은 $0$이므로, 정리에 의해 코시 곱의 급수는 $0 \cdot T = 0$으로 수렴합니다. 직접 보면 [[cauchy-product]]의 (3)에 의해 $m \ge 1$에서 $\sum_{n=0}^{m} z_n = \sum_{i=0}^{m} x_i Y_{m-i}$이고, $i \ge 2$인 항은 $x_i = 0$이어서 $0$이므로 이것은 $x_0 Y_m + x_1 Y_{m-1} = Y_m - Y_{m-1} = y_m$입니다([[series-indexed-from-zero]]의 (2)). 그리고 급수가 수렴하므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (1)을 한 칸 옮긴 수열에 써서 $y_m$은 $0$으로 갑니다. $(y_n)_{n \ge 0}$이 절대수렴하지 않아도 됩니다.
:::

:::counterexample[항끼리 곱한 급수의 합이 두 합의 곱과 다른 예]
$x_n = y_n = (1/2)^n$이면 [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 두 급수의 합은 모두 $(1 - 1/2)^{-1} = 2$이고, 정리에 의해 코시 곱의 급수의 합은 $4$입니다. 그러나 항끼리 곱한 $x_n y_n = (1/4)^n$의 급수의 합은 $(1 - 1/4)^{-1} = 4/3$입니다. 급수의 곱은 항끼리의 곱이 아니라 코시 곱으로 얻습니다.
:::

## 확인 질문

:::check[$x_n = (1/3)^n$, $y_n = (1/2)^n$일 때 코시 곱의 급수의 합은 얼마인가?]
두 급수는 항이 양수이고 수렴하므로 절대수렴합니다. [[series-indexed-from-zero]]의 (13)의 (ii)에 의해 합은 $(1 - 1/3)^{-1} = 3/2$와 $(1 - 1/2)^{-1} = 2$이므로, 정리에 의해 코시 곱의 급수의 합은 $(3/2) \cdot 2 = 3$입니다.
:::

:::check[$(x_n)_{n \ge 0}$의 급수가 절대수렴하고 $(y_n)_{n \ge 0}$의 급수가 수렴하여 합이 $0$이면 코시 곱의 급수의 합은?]
$0$입니다. 정리의 가정이 성립하므로 합은 $\bigl(\sum_{n=0}^{\infty} x_n\bigr) \cdot 0 = 0$입니다. $(y_n)_{n \ge 0}$이 절대수렴하는지는 상관없습니다.
:::
