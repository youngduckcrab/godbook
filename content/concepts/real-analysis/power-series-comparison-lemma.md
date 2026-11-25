---
title: 멱급수의 비교 보조정리
title_en: Comparison Lemma for Power Series
aliases: [아벨의 보조정리, 멱급수와 등비급수의 비교, Abel's lemma, comparison lemma for power series]
kind: lemma
field: real-analysis
msc: ["40A30"]
level: undergrad
summary: 멱급수의 중심에서 거리 s > 0 인 곳의 항 |c_n| sⁿ 이 유계이면, 중심에서 거리가 s 보다 작은 모든 점에서 멱급수가 등비급수와의 비교로 절대수렴하고, 중심에서 거리가 r < s 이하인 점들에서는 x 에 따르지 않는 누르기 |c_n(x − a)ⁿ| ≤ M(r/s)ⁿ 이 성립한다. 한 점에서 발산하면 중심에서 더 먼 점에서도 발산한다.
requires: [real-number-arithmetic, order-properties-of-reals, absolute-value, power-of-a-real-number, geometric-sequence-limit, comparison-test, terms-of-convergent-series-tend-to-zero, series-indexed-from-zero, power-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: 11.3.2절 Convergence of power series, Proposition 11.3.1 의 증명 뒤 문단 (p.155)
    checked: original
    note: "출처 II 권 p.155 는 Proposition 11.3.1 의 증명 뒤에, 멱급수가 어떤 z 에서 수렴하면 |w − a| < |z − a| 인 w 에서 절대수렴하고, 거꾸로 z 에서 발산하면 |w − a| > |z − a| 인 w 에서 발산한다고 적고, 그래서 수렴 반지름이 어떤 수 이상임을 보이려면 한 점에서의 수렴을 보이면 된다고 한다. 출처는 이 문단에 증명을 붙이지 않는다. 이 항목은 이것을 실수판으로 옮겨 (2), (3)으로 두고, 가정을 '한 점에서 수렴'에서 '한 점에서 항이 유계'로 넓혀 (1)로 두었으며, 증명은 등비급수와의 비교로 이 사이트가 썼다. '아벨의 보조정리'라는 이름은 출처에 없다(II 권 'Abel' 0건, I 권 'Abel' 은 Exercise 2.5.17 의 'Abel’s theorem' 과 색인뿐). 널리 쓰이는 이름이라 별칭으로만 둔다. 확인 질문 '중심이 $2$인 멱급수가 $x = 5$에서 발산한다는 것만 알 때 $x = -2$와 $x = 0$에서는 무엇을 말할 수 있는가?'의 결론은 이 문단의 '거꾸로' 문장과 같고, 그 답에 든 계수 (1/3)ⁿ 은 Example 11.3.3(p.155)의 계수 cⁿ⁺¹ 처럼 계수가 등비수열인 멱급수이다. 반례 '경계의 점에서는 수렴할 수도 발산할 수도 있다'의 첫째 멱급수(계수가 모두 1)는 Example 11.3.2(p.155)의 Σ zⁿ 과 같은 대상이다. 예시 '계수가 1 이하인 멱급수의 어림'의 어림 Σ|c_n||x|ⁿ ≤ 1/(1 − |x|) 은 Exercise 11.3.11(p.162, |c_n| ≤ 1 이면 단위 원판에서 |f(z)| ≤ 1/(1 − |z|))과 같은 발상이다."
  - ref: lebl-basic-analysis
    loc: 2.6.6절 Exercises, Exercise 2.6.6 (p.110), 6.2.4절 Convergence of power series, Proposition 6.2.11 의 증명 (p.241)
    checked: original
    note: "출처 I 권 Exercise 2.6.6(p.110)은 Σ a_n xⁿ 이 x = 1 에서 수렴할 때 수렴 반지름에 대해 무엇을 말할 수 있는지 묻는다. 이것은 (2)를 x₁ = 1 에 쓰는 것과 같은 물음이다. 출처 I 권은 이 보조정리를 따로 진술하지 않고, 2.6.5절 Proposition 2.6.10(p.107–108)을 근 판정법으로 증명한다. (4)의 x 에 따르지 않는 누르기는 Proposition 6.2.11 의 증명(p.241)이 [a − r, a + r] 위에서 |c_n||x − a|ⁿ ≤ |c_n| rⁿ 으로 누르는 것과 같은 발상이다(출처는 a + r 에서의 절대수렴을 쓰고, 이 항목은 a 에서 거리 s 인 곳의 항의 유계를 쓴다). 확인 질문 '중심 $0$, 계수 $3^n$인 멱급수에서 (4)의 누르기를 $s = 1/3$, $r = 1/6$으로 쓰면 무엇이 나오는가?'의 계수 3ⁿ 은 Exercise 2.6.5 a)(p.110)의 Σ 2ⁿ xⁿ 과 같은 꼴(계수가 kⁿ)이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(반지름의 sup 정의와 판정 (6)의 경계 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수, $x$에서의 항, $x$에서의 수렴·발산·절대수렴과 합, 0부터 번호가 붙은 수열의 유계는 [[power-series]]의 것이고, 0부터 번호가 붙은 수열의 급수와 합 $\sum_{n=0}^{\infty}$은 [[series-indexed-from-zero]]의 것이다. 거듭제곱은 [[power-of-a-real-number]], 절댓값은 [[absolute-value]]의 것이다.

$a$를 실수, $(c_n)_{n \ge 0}$을 0부터 번호가 붙은 수열이라 하고, "멱급수"는 중심이 $a$이고 계수가 $(c_n)_{n \ge 0}$인 멱급수라 하자. $s$를 양의 실수, $M$을 실수라 하고, $0$ 이상인 모든 정수 $n$에서 $|c_n|\, s^n \le M$이라 하자. 다음이 성립한다.

1. (안쪽의 절대수렴) $|x - a| < s$인 실수 $x$에 대하여 $q = |x - a|/s$로 두면 $0 \le q < 1$이고, $0$ 이상인 모든 정수 $n$에서 $|c_n (x - a)^n| \le M q^n$이다. 멱급수는 $x$에서 절대수렴하고, 따라서 수렴하며
   $$
   \sum_{n=0}^{\infty} |c_n (x - a)^n| \le \frac{M}{1 - q}
   $$
   이다.
2. (한 점에서 항이 유계인 경우) $x_1$이 $a$가 아닌 실수이고 $x_1$에서의 항이 유계이면, $|x_1 - a|$는 양수이고 $0$ 이상인 모든 정수 $n$에서 $|c_n|\,|x_1 - a|^n \le B$인 실수 $B$가 있다. 따라서 $|x - a| < |x_1 - a|$인 모든 실수 $x$에서 멱급수는 절대수렴한다. 특히 멱급수가 $a$가 아닌 실수 $x_1$에서 수렴하면, $|x - a| < |x_1 - a|$인 모든 실수 $x$에서 멱급수는 절대수렴한다.
3. (바깥쪽의 발산) 멱급수가 실수 $x_1$에서 발산하면, $|x - a| > |x_1 - a|$인 모든 실수 $x$에서 $x$에서의 항은 유계가 아니고 멱급수는 $x$에서 발산한다.
4. ($x$에 따르지 않는 누르기) $r$이 $0 \le r < s$인 실수이면 $0 \le r/s < 1$이고, $|x - a| \le r$인 모든 실수 $x$와 $0$ 이상인 모든 정수 $n$에서
   $$
   |c_n (x - a)^n| \le M \Bigl( \frac{r}{s} \Bigr)^n
   $$
   이다. $n$에서의 값이 $M (r/s)^n$인 0부터 번호가 붙은 수열의 급수는 수렴하고 그 합은 $\dfrac{M}{1 - r/s}$이다.
:::

:::english
Power series, the terms at $x$, convergence, divergence and absolute convergence at $x$ and the sum there, and boundedness of sequences indexed from zero are as in the entry on power series; series of sequences indexed from zero and the sum $\sum_{n=0}^{\infty}$ are as in the entry on sums of sequences indexed from zero. Powers and absolute values are as in their entries.

Let $a$ be a real number and $(c_n)_{n \ge 0}$ a sequence indexed from zero, and let "the power series" be the power series with center $a$ and coefficients $(c_n)_{n \ge 0}$. Let $s$ be a positive real number and $M$ a real number, and suppose that $|c_n|\, s^n \le M$ for every integer $n \ge 0$. The following hold.

1. (Absolute convergence inside) For a real number $x$ with $|x - a| < s$, put $q = |x - a|/s$. Then $0 \le q < 1$ and $|c_n (x - a)^n| \le M q^n$ for every integer $n \ge 0$. The power series converges absolutely at $x$, hence converges there, and
   $$
   \sum_{n=0}^{\infty} |c_n (x - a)^n| \le \frac{M}{1 - q}.
   $$
2. (Bounded terms at one point) If $x_1$ is a real number other than $a$ and the terms at $x_1$ are bounded, then $|x_1 - a|$ is positive and there is a real number $B$ with $|c_n|\,|x_1 - a|^n \le B$ for every integer $n \ge 0$. Hence the power series converges absolutely at every real $x$ with $|x - a| < |x_1 - a|$. In particular, if the power series converges at a real number $x_1 \ne a$, then it converges absolutely at every real $x$ with $|x - a| < |x_1 - a|$.
3. (Divergence outside) If the power series diverges at a real number $x_1$, then at every real $x$ with $|x - a| > |x_1 - a|$ the terms at $x$ are unbounded and the power series diverges at $x$.
4. (A bound independent of $x$) If $r$ is a real number with $0 \le r < s$, then $0 \le r/s < 1$, and for every real $x$ with $|x - a| \le r$ and every integer $n \ge 0$,
   $$
   |c_n (x - a)^n| \le M \Bigl( \frac{r}{s} \Bigr)^n.
   $$
   The series of the sequence indexed from zero with values $M (r/s)^n$ converges and its sum is $\dfrac{M}{1 - r/s}$.
:::

## 직관

가정 "$|c_n|\, s^n \le M$"은 중심에서 거리 $s$인 곳에서 멱급수의 항이 끝없이 커지지는 않는다는 것입니다. 중심에 더 가까운 점 $x$에서는 $q = |x - a|/s < 1$이고 $|x - a|^n = q^n s^n$이므로, 항의 크기가 $M q^n$ 이하로 눌립니다. 그러면 공비가 $q$인 등비급수와 비교해 절대수렴합니다. 거리 $s$에서는 항이 유계이기만 해도, 안으로 들어오면 항의 크기가 공비가 $1$보다 작은 등비수열로 눌린다는 것이 이 보조정리의 요점입니다.

비유하자면 연못에 던진 돌의 물결입니다. 거리 $s$에서 물결의 높이가 어떤 한계 $M$을 넘지 않는다고 하면, 그보다 안쪽에서 높이를 재는 대신 바깥 기준점의 한계에 $(|x - a|/s)^n$을 곱해 어림할 수 있습니다. 비유가 맞지 않는 곳은 방향입니다. 실제 물결은 바깥으로 갈수록 작아지지만, 같은 $n$에서 멱급수의 항의 크기 $|c_n|\,|x - a|^n$은 중심에서 멀어질수록 작아지지 않고 커질 수 있습니다. 그래서 (1)과 (4)는 기준점보다 안쪽만 말하고, 거리가 정확히 $s$인 점에서는 수렴도 발산도 말하지 않습니다(아래 반례).

(3)은 (2)에서 두 점의 역할을 바꾸어 얻습니다. $x$에서 항이 유계라면 $x_1$이 $x$보다 중심에 가까우므로 (2)에 의해 $x_1$에서 절대수렴해야 하기 때문입니다. (4)는 (1)의 누르기에서 $|x - a|$를 그 이상인 고정된 수 $r$로 바꾼 것으로, 누르는 수 $M (r/s)^n$이 $x$에 따르지 않습니다.

## 증명

:::idea
$|c_n (x - a)^n| = |c_n|\, s^n \cdot (|x - a|/s)^n \le M q^n$으로 쓰고, 공비가 $q < 1$인 등비급수와 비교한다.
:::

:::hint
$|x - a| \le r$이면 $|x - a|^n \le r^n$이고, $r = (r/s) \cdot s$이므로 $r^n = (r/s)^n s^n$입니다. (4)를 먼저 보이면 (1)은 $r = |x - a|$로 둔 경우입니다.
:::

:::hint
(3)은 귀류법으로 합니다. $x$에서 항이 유계라고 하면 $x \ne a$이고, (2)를 $x_1$ 대신 $x$에 쓸 수 있습니다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 나눗셈 $p/s$는 $p\,s^{-1}$이다.

**4의 증명.** $0 < s$이므로 순서 성질 (6)의 (i)에 의해 $0 < s^{-1}$이다. $0 \le r$이므로 순서 성질 (4)의 (iv)에 의해 $0 \le r s^{-1} = r/s$이고, $r < s$이므로 순서 성질 (4)의 (i)에 의해 $r s^{-1} < s s^{-1} = 1$이다((K8)의 (iii)). 또 (K2), (K8)의 (iii), (K4)에 의해 $(r/s)\, s = r (s^{-1} s) = r$이다.

$x$가 $|x - a| \le r$인 실수이고 $n$이 $0$ 이상인 정수라 하자. [[power-series]]의 (2)에 의해 $|c_n (x - a)^n| = |c_n|\,|x - a|^n$이다. [[absolute-value|절댓값]]의 (2)에 의해 $0 \le |x - a|$이므로 [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (ii)에 의해 $|x - a|^n \le r^n$이고, $0 \le |c_n|$이므로 순서 성질 (4)의 (iii)에 의해 $|c_n|\,|x - a|^n \le |c_n|\, r^n$이다. 거듭제곱의 (2)의 (iii)과 위의 등식에 의해 $r^n = \bigl((r/s)\, s\bigr)^n = (r/s)^n s^n$이므로, (K1), (K2)에 의해 $|c_n|\, r^n = (|c_n|\, s^n)(r/s)^n$이다. 거듭제곱의 (6)의 (i)에 의해 $0 \le (r/s)^n$이고 가정에 의해 $|c_n|\, s^n \le M$이므로, 순서 성질 (4)의 (iii)에 의해 $(|c_n|\, s^n)(r/s)^n \le M (r/s)^n$이다. 순서 성질 (1)의 (v)로 이 부등식들을 이으면
$$
|c_n (x - a)^n| \le M \Bigl( \frac{r}{s} \Bigr)^n
$$
이다. 마지막으로 $0 \le r/s < 1$이므로 절댓값의 (1)에 의해 $|r/s| = r/s < 1$이고, [[series-indexed-from-zero]]의 (13)의 (ii)를 첫째 수 $M$, 공비 $r/s$에 쓰면 $n$에서의 값이 $M (r/s)^n$인 0부터 번호가 붙은 수열의 급수는 수렴하고 합은 $M/(1 - r/s)$이다.

**1의 증명.** $r = |x - a|$로 두면 절댓값의 (2)에 의해 $0 \le r$이고 가정에 의해 $r < s$이며, $q = r/s$이다. (4)를 이 $r$와 이 $x$($|x - a| \le r$는 순서 성질 (1)의 (iv))에 쓰면 $0 \le q < 1$이고 $0$ 이상인 모든 $n$에서 $|c_n (x - a)^n| \le M q^n$이며, $n$에서의 값이 $M q^n$인 0부터 번호가 붙은 수열의 급수는 수렴하고 합은 $M/(1 - q)$이다. 절댓값의 (2)에 의해 $0 \le |c_n (x - a)^n|$이므로 [[series-indexed-from-zero]]의 (10)의 (iii)에 의해 $n$에서의 값이 $|c_n (x - a)^n|$인 0부터 번호가 붙은 수열의 급수는 수렴하고 그 합은 $M/(1 - q)$ 이하이다. 곧 멱급수는 $x$에서 절대수렴하고, [[power-series]]의 (4)에 의해 $x$에서 수렴한다.

**2의 증명.** $x_1 \ne a$이므로 (K12)의 (v)에 의해 $x_1 - a \ne 0$이고, 절댓값의 (2)에 의해 $0 \le |x_1 - a|$이고 $|x_1 - a| \ne 0$이므로 $0 < |x_1 - a|$이다. $x_1$에서의 항이 유계이므로 $0$ 이상인 모든 $n$에서 $|c_n (x_1 - a)^n| \le B$인 실수 $B$가 있고, [[power-series]]의 (2)에 의해 $|c_n (x_1 - a)^n| = |c_n|\,|x_1 - a|^n$이다. 따라서 $s = |x_1 - a|$, $M = B$에 대해 이 항목의 가정이 성립하고, (1)에 의해 $|x - a| < |x_1 - a|$인 모든 $x$에서 멱급수는 절대수렴한다. 멱급수가 $x_1$에서 수렴하면 [[power-series]]의 (5)에 의해 $x_1$에서의 항이 유계이므로 앞의 경우가 된다.

**3의 증명.** 멱급수가 $x_1$에서 발산하고 $|x - a| > |x_1 - a|$라 하자. 절댓값의 (2)에 의해 $0 \le |x_1 - a|$이므로 순서 성질 (1)의 (v)에 의해 $0 < |x - a|$이고, 절댓값의 (2)에 의해 $x - a \ne 0$, 곧 $x \ne a$이다. $x$에서의 항이 유계라고 가정하자. 그러면 (2)를 $x_1$ 대신 $x$에 쓸 수 있고, $|x_1 - a| < |x - a|$이므로 멱급수는 $x_1$에서 절대수렴하며 [[power-series]]의 (4)에 의해 수렴한다. 이것은 $x_1$에서 발산한다는 가정과 모순이다. 따라서 $x$에서의 항은 유계가 아니고, [[power-series]]의 (5)에 의해 멱급수는 $x$에서 발산한다. $\blacksquare$
:::

## 예시와 반례

:::example[계수가 1 이하인 멱급수의 어림]
중심 $a = 0$, 계수 $c_n = (n^2 + 1)^{-1}$인 멱급수를 봅시다. $0$ 이상인 정수 $n$에서 $n^2 \ge 0$이므로 $1 \le n^2 + 1$이고(순서 성질 (5)의 (iii)과 (2)의 (i)), $n^2 + 1$이 $1$이면 $c_n = 1$, $1$보다 크면 순서 성질 (6)의 (ii)에 의해 $c_n < 1^{-1} = 1$입니다. $c_n$은 양수이므로(순서 성질 (6)의 (i)) 절댓값의 (1)에 의해 $|c_n| = c_n$이고, $s = 1$, $M = 1$에 대해 $|c_n|\, 1^n = c_n \le 1$이어서 가정이 성립합니다.

(1)에 의해 $|x| < 1$인 모든 $x$에서 멱급수는 절대수렴하고 $\sum_{n=0}^{\infty} |c_n x^n| \le 1/(1 - |x|)$입니다. 예컨대 $x = -1/2$에서 절댓값의 급수의 합은 $1/(1 - 1/2) = 2$ 이하입니다. 한편 [[series-indexed-from-zero]]의 (10)의 (ii)에 의해 그 합은 처음 두 항의 합 $1 + (1/2)(1/2) = 5/4$ 이상이므로, 합은 $5/4$ 이상 $2$ 이하입니다.
:::

:::counterexample[경계의 점에서는 수렴할 수도 발산할 수도 있다]
두 멱급수 모두 중심 $a = 0$이고 $s = 1$, $M = 1$로 가정이 성립하지만, 거리가 정확히 $s = 1$인 점 $x = 1$에서 결과가 다릅니다.

- 모든 $n$에서 $c_n = 1$이면 $|c_n|\, 1^n = 1 \le 1$입니다. $x = 1$에서 항은 모두 $1$이고, 한 칸 옮긴 수열은 첫째 항이 $1$이고 공비가 $1$인 등비급수의 수열이므로 [[terms-of-convergent-series-tend-to-zero|수렴하는 급수의 항은 0 으로 수렴한다]]의 (3)에 의해 멱급수는 $x = 1$에서 발산합니다.
- $c_0 = 0$이고 자연수 $n$에서 $c_n = (n^2)^{-1}$이면, $n \ge 1$에서 거듭제곱의 (6)의 (ii)에 의해 $1 \le n^2$이므로 순서 성질 (6)의 (ii)에 의해 $0 < c_n \le 1$이고 가정이 성립합니다. $x = 1$에서 항은 $c_n$이고, [[comparison-test|비교 판정법]]의 (6)에 의해 $\bigl((n^2)^{-1}\bigr)_{n \ge 1}$의 급수는 수렴하므로 [[series-indexed-from-zero]]의 (8)에 의해 멱급수는 $x = 1$에서 수렴합니다.

그래서 (1)의 부등식 $|x - a| < s$를 $|x - a| \le s$로 바꿀 수는 없습니다.
:::

## 확인 질문

:::check[중심 $0$, 계수 $3^n$인 멱급수에서 (4)의 누르기를 $s = 1/3$, $r = 1/6$으로 쓰면 무엇이 나오는가?]
$|x| \le 1/6$인 모든 $x$에서 $|3^n x^n| \le (1/2)^n$이고, 누르는 수의 급수의 합은 $2$입니다. 실수의 거듭제곱의 (2)의 (iii)과 (iv)에 의해 $|3^n|\,(1/3)^n = (3 \cdot 1/3)^n = 1^n = 1$이므로 $M = 1$로 가정이 성립하고, $r/s = (1/6) \cdot 3 = 1/2$입니다. 합은 $1/(1 - 1/2) = 2$입니다.
:::

:::check[중심이 $2$인 멱급수가 $x = 5$에서 발산한다는 것만 알 때 $x = -2$와 $x = 0$에서는 무엇을 말할 수 있는가?]
$x = -2$에서는 발산하고, $x = 0$에서는 이것만으로 정할 수 없습니다. $|-2 - 2| = 4 > 3 = |5 - 2|$이므로 (3)에 의해 $x = -2$에서 발산합니다. $|0 - 2| = 2 < 3$이어서 (3)은 쓸 수 없습니다. 실제로 계수가 $(1/3)^n$이면 $x = 5$에서 항이 $1^n = 1$이어서 발산하고 $x = 0$에서 항이 $(-2/3)^n$이어서 절대수렴하지만, 계수가 모두 $1$이면 $x = 5$에서 항 $3^n$, $x = 0$에서 항 $(-2)^n$이 둘 다 유계가 아니어서 두 점에서 모두 발산합니다.
:::
