---
title: 이항급수
title_en: Binomial Series
aliases: [일반화한 이항계수, 이항급수의 수렴 반지름, (1 + x) 의 실수 거듭제곱의 멱급수, binomial series, generalized binomial coefficient]
kind: theorem
field: real-analysis
msc: ["40A30", "26A09"]
level: undergrad
summary: 실수 α 에 대하여 일반화한 이항계수를 재귀로 정의하고, 그것을 계수로 하는 중심 0 의 멱급수(이항급수)가 α 가 0 이상의 정수이면 모든 실수에서, 그렇지 않으면 반지름 1 로 수렴함을 보인 뒤, |x| < 1 에서 그 합 f 가 (1 + x)f′(x) = αf(x) 를 만족하고 (1 + x) 의 α 제곱과 같다는 것을 증명한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, mathematical-induction, recursion-theorem, real-number-arithmetic, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, sequence, limit-of-sequence, basic-limits, tail-of-a-sequence, limit-of-sum-and-product, comparison-with-null-sequence, interval, real-valued-function, function-composition, derivative, derivative-rules, chain-rule, derivative-and-monotonicity, natural-logarithm, real-power, series-indexed-from-zero, power-series, radius-of-convergence, ratio-formula-for-radius, power-series-examples, termwise-differentiation-of-power-series, algebra-of-power-series]
proof: full
sources:
  - ref: lebl-basic-analysis-2
    loc: "11.3.6절 Exercises 의 Exercise 11.3.9 (p.162)"
    checked: original
    note: "출처 II 권 Exercise 11.3.9(p.162)는 복소수 α 와 k = 0, 1, 2, … 에 대하여 이항계수를 α(α − 1)⋯(α − k + 1)/k! 로 정의하고, a) f(z) = Σ (α choose k) zᵏ 이 |z| < 1 에서 수렴하며, α = 0, 1, 2, … 이면 반지름이 ∞, 그 밖의 α 이면 1 임을 보이고, b) 실수 x, |x| < 1 에서 (1 + x)f′(x) = αf(x) 임을 보이라고 한 뒤 '곧 f(x) = (1 + x)^α' 라고 적는다. 이 항목은 실수 α 만 다루고 증명을 썼다. 이항계수는 이 사이트에 실수의 유한 곱 α(α − 1)⋯(α − k + 1) 이 선행으로 없으므로 출처의 식 대신 그것과 같은 재귀식 (α choose k+1) = (α choose k)(α − k)/(k + 1) 로 정의했다. 반지름은 ∞ 대신 '모든 실수에서 수렴하는 멱급수'로 적었고 비로 구하는 수렴 반지름(ratio-formula-for-radius)으로 구했다. 출처가 '곧(meaning that)'으로 넘어가는 마지막 단계, 곧 (1 + x)f′ = αf 에서 f(x) = (1 + x)^α 로 가는 단계는 f(x)(1 + x)^{−α} 의 도함수가 0 이라는 것으로 (4)에서 메웠다. '이항계수', '이항급수'(binomial)라는 이름은 두 권 모두에 나오지 않는다(I 권·II 권 'binomial' 0건, I 권 'choose' 5건은 모두 동사). 출처 Exercise 11.3.9 는 기호 (α k) 를 이름 없이 정의한다. 예시와 확인 질문의 α = −1, 1/2, 0, 2 의 계산은 이 연습문제의 정의를 그 값에 넣은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(로그 급수의 나머지 적분과 어림 재계산, 이항급수 유일성의 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
멱급수와 그 수렴·합은 [[power-series]]의 것이고, 수렴 반지름, 모든 실수에서 수렴하는 멱급수, 집합 $I$와 멱급수가 나타내는 함수는 [[radius-of-convergence]]의 것이다. 양수 밑의 실수 거듭제곱 $b^y$는 [[real-power]], 0 이상인 정수 지수의 거듭제곱은 [[power-of-a-real-number]]의 것이고, 미분가능과 도함수는 [[derivative]]의 것이다.

$\alpha$를 실수라 하자.

**일반화한 이항계수.** [[recursion-theorem|재귀 정리]]에 의해 $0$ 이상인 정수 $k$마다 실수 $\binom{\alpha}{k}$가 정확히 하나씩 정해져
$$
\begin{gathered}
\binom{\alpha}{0} = 1, \\
\binom{\alpha}{k+1} = \binom{\alpha}{k} \cdot \frac{\alpha - k}{k + 1}
\end{gathered}
$$
를 만족한다(아래 증명). $\binom{\alpha}{k}$를 **일반화한 이항계수**(generalized binomial coefficient)라 한다. 중심이 $0$이고 계수가 $\bigl(\binom{\alpha}{k}\bigr)_{k \ge 0}$인 멱급수를 **이항급수**(binomial series)라 한다.

다음이 성립한다.

1. (이항계수의 값)
   - (i) $\binom{\alpha}{1} = \alpha$이고 $\binom{\alpha}{2} = \alpha(\alpha - 1)\, 2^{-1}$이다.
   - (ii) $\alpha$가 $0$ 이상인 정수 $m$이면 $k > m$인 모든 정수 $k$에서 $\binom{\alpha}{k} = 0$이다.
   - (iii) $\alpha$가 $0$ 이상인 정수가 아니면 $0$ 이상인 모든 정수 $k$에서 $\binom{\alpha}{k} \ne 0$이다.
2. (반지름)
   - (i) $\alpha$가 $0$ 이상인 정수 $m$이면 이항급수는 모든 실수에서 수렴하는 멱급수이고, 모든 실수 $x$에서 그 합은 $\sum_{k=0}^{m} \binom{m}{k} x^k$이다.
   - (ii) $\alpha$가 $0$ 이상인 정수가 아니면 이항급수의 수렴 반지름은 $1$이다.
   두 경우 모두 이항급수는 $|x| < 1$인 모든 $x$에서 수렴한다. 그 합으로 정한 함수를 $f(x) = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k$ ($|x| < 1$)라 하자.
3. (미분방정식) $f$는 $(-1, 1)$ 위의 미분가능한 함수이고, $|x| < 1$인 모든 $x$에서
   $$
   (1 + x)\, f'(x) = \alpha\, f(x)
   $$
   이다. 또 $f(0) = 1$이다.
4. (이항급수의 합) $|x| < 1$인 모든 실수 $x$에서
   $$
   (1 + x)^\alpha = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k
   $$
   이다. 왼쪽은 밑 $1 + x$가 양수이므로 [[real-power|양수 밑의 실수 거듭제곱]]으로 정해진 수이다.
:::

:::english
Power series, their convergence and sums are as in the entry on power series; the radius of convergence, power series converging at every real number, the set $I$ and the function a power series represents are as in the entry on the radius of convergence. Real powers $b^y$ with positive base, powers with integer exponent $\ge 0$, differentiability and derivatives are as in their entries.

Let $\alpha$ be a real number.

**Generalized binomial coefficients.** By the recursion theorem, for every integer $k \ge 0$ exactly one real number $\binom{\alpha}{k}$ is determined so that
$$
\begin{gathered}
\binom{\alpha}{0} = 1, \\
\binom{\alpha}{k+1} = \binom{\alpha}{k} \cdot \frac{\alpha - k}{k + 1}
\end{gathered}
$$
(proved below). $\binom{\alpha}{k}$ is called a **generalized binomial coefficient**. The power series with center $0$ and coefficients $\bigl(\binom{\alpha}{k}\bigr)_{k \ge 0}$ is called the **binomial series**.

The following hold.

1. (Values of the coefficients)
   - (i) $\binom{\alpha}{1} = \alpha$ and $\binom{\alpha}{2} = \alpha(\alpha - 1)\, 2^{-1}$.
   - (ii) If $\alpha$ is an integer $m \ge 0$, then $\binom{\alpha}{k} = 0$ for every integer $k > m$.
   - (iii) If $\alpha$ is not an integer $\ge 0$, then $\binom{\alpha}{k} \ne 0$ for every integer $k \ge 0$.
2. (Radius)
   - (i) If $\alpha$ is an integer $m \ge 0$, the binomial series converges at every real number, and for every real $x$ its sum is $\sum_{k=0}^{m} \binom{m}{k} x^k$.
   - (ii) If $\alpha$ is not an integer $\ge 0$, the radius of convergence of the binomial series is $1$.
   In both cases the binomial series converges at every $x$ with $|x| < 1$. Let $f(x) = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k$ ($|x| < 1$) be the function defined by its sum.
3. (Differential equation) $f$ is a differentiable function on $(-1, 1)$, and for every $x$ with $|x| < 1$
   $$
   (1 + x)\, f'(x) = \alpha\, f(x).
   $$
   Moreover $f(0) = 1$.
4. (Sum of the binomial series) For every real $x$ with $|x| < 1$,
   $$
   (1 + x)^\alpha = \sum_{k=0}^{\infty} \binom{\alpha}{k} x^k.
   $$
   The left side is the real power, with positive base $1 + x$, of the entry on real powers.
:::

## 직관

$(1 + x)^\alpha$를 중심 $0$의 멱급수로 나타내면 계수가 무엇이어야 할까요. $g(x) = (1 + x)^\alpha$는 $(1 + x)\,g'(x) = \alpha\, g(x)$와 $g(0) = 1$을 만족합니다. 계수가 $\gamma_k$인 멱급수가 이 식을 만족하려면 $x^k$의 계수를 견주어 $(k + 1)\,\gamma_{k+1} + k\,\gamma_k = \alpha\, \gamma_k$, 곧 $\gamma_{k+1} = \gamma_k (\alpha - k)/(k + 1)$이어야 합니다. 이것이 일반화한 이항계수의 재귀식입니다. 이 항목은 거꾸로 그 재귀식으로 계수를 정하고, 그 멱급수의 합이 정말 $(1 + x)^\alpha$임을 보입니다.

$\alpha$가 $0$ 이상의 정수 $m$이면 재귀식의 인수 $\alpha - k$가 $k = m$에서 $0$이 되어 그 뒤의 계수가 모두 $0$이고, 멱급수는 차수 $m$ 이하의 유한 합입니다. 그 밖의 $\alpha$에서는 계수가 $0$이 되지 않고 이웃한 계수의 비 $|\alpha - k|/(k + 1)$이 $1$로 가므로 반지름이 $1$입니다.

비유하자면 출발점과 걷는 규칙만 알려 주고 길을 그려 보게 하는 일입니다. "$(1 + x)f' = \alpha f$"가 규칙이고 "$f(0) = 1$"이 출발점입니다. 같은 규칙과 출발점을 가진 두 길, 곧 $f$와 $(1 + x)^\alpha$는 $(-1, 1)$에서 같은 길이라는 것이 (4)의 마지막 단계입니다. 비유가 맞지 않는 곳은 끝점입니다. 규칙이 같아도 멱급수는 $|x| < 1$ 밖에서는 수렴하지 않을 수 있습니다(아래 반례).

## 증명

:::idea
항별 미분과 $(x - 0)$을 곱한 멱급수로 $(1 + x)f'(x)$의 계수를 계산하면 재귀식에 의해 $\alpha \binom{\alpha}{k}$이다. 그러면 $\varphi(x) = f(x)(1 + x)^{-\alpha}$의 도함수가 $0$이고 $\varphi(0) = 1$이다.
:::

:::hint
$(k + 1)\binom{\alpha}{k+1} = (\alpha - k)\binom{\alpha}{k}$이고, $k \ge 1$이면 $k \binom{\alpha}{k} = (\alpha - k + 1)\binom{\alpha}{k-1}$이다.
:::

:::hint
반지름에는 $\bigl|\,|\alpha - k| - (k + 1)\,\bigr| \le |\alpha + 1|$(역삼각부등식)을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이고, "순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고 순서 성질 (10)에 의해 실수의 부등식으로 써도 된다. 거듭제곱 $b^n$은 [[power-of-a-real-number|실수의 거듭제곱]]의 것이다.

**이항계수가 정해진다는 것.** [[recursion-theorem|재귀 정리]]의 (1)과 (3)을 $g(j, y) = y\,(\alpha - j + 1)\, j^{-1}$로 정한 함수 $g : \mathbb{N} \times \mathbb{R} \to \mathbb{R}$에 쓰면, $x(1) = 1$이고 모든 자연수 $j$에서 $x(j + 1) = x(j)(\alpha - j + 1)\, j^{-1}$인 수열이 정확히 하나 있다. $\binom{\alpha}{k} = x(k + 1)$로 두면 $k = j - 1$로 바꾸어 읽어 재귀식을 얻는다. 같은 재귀식을 만족하는 두 0부터 번호가 붙은 수열은 [[mathematical-induction|수학적 귀납법]]에 의해 같다. 아래에서 $\gamma_k = \binom{\alpha}{k}$로 줄여 쓴다. 재귀식에서 (K2), (K4)와 역수의 정의에 의해
$$
(k + 1)\, \gamma_{k+1} = (\alpha - k)\, \gamma_k
$$
이다($k \ge 0$). 이것을 "재귀식의 곱 꼴"이라 부른다.

**1의 증명.** (i) 재귀식에 $k = 0$, $k = 1$을 넣으면 $\gamma_1 = 1 \cdot \alpha \cdot 1^{-1} = \alpha$이고 $\gamma_2 = \alpha(\alpha - 1)\, 2^{-1}$이다.

(ii) $\alpha = m$이면 재귀식에 $k = m$을 넣어 $\gamma_{m+1} = \gamma_m (m - m)(m + 1)^{-1} = 0$이다((K9), (K12)의 (v)). $k \ge m + 1$에서 $\gamma_k = 0$이면 $\gamma_{k+1} = 0 \cdot (\alpha - k)(k + 1)^{-1} = 0$이므로, 시작점이 $m + 1$인 [[mathematical-induction|수학적 귀납법]]에 의해 $k > m$인 모든 $k$에서 $\gamma_k = 0$이다((Z1)에 의해 $k > m$은 $k \ge m + 1$이다).

(iii) $\alpha$가 $0$ 이상인 정수가 아니면 $0$ 이상인 모든 정수 $k$에서 $\alpha \ne k$이므로 $\alpha - k \ne 0$이다((K12)의 (v)). $\gamma_0 = 1 \ne 0$이고 $\gamma_k \ne 0$이면 (K12)의 (vi)에 의해 $\gamma_{k+1} = \gamma_k (\alpha - k)(k + 1)^{-1} \ne 0$이므로, 귀납법에 의해 모든 $\gamma_k$가 $0$이 아니다.

**2의 증명.** (i) (1)의 (ii)에 의해 $k \ge m + 1$에서 $\gamma_k = 0$이므로 [[power-series-examples|멱급수의 예]]의 (7)을 $N = m + 1$에 쓰면 결론이다.

(ii) (1)의 (iii)에 의해 모든 $k$에서 $\gamma_k \ne 0$이므로 [[ratio-formula-for-radius|비로 구하는 수렴 반지름]]을 $N = 1$로 쓸 수 있고, 자연수 $j$에서 [[absolute-value|절댓값]]의 (4), (9)와 재귀식에 의해
$$
q_j = |\gamma_{j+1}|\,|\gamma_j|^{-1} = |\alpha - j|\,(j + 1)^{-1}
$$
이다. [[triangle-inequality|삼각부등식]]의 (2)를 $\alpha - j$와 $-(j + 1)$에 쓰면, 절댓값의 (1)에 의해 $|-(j + 1)| = j + 1$이므로 $\bigl|\,|\alpha - j| - (j + 1)\,\bigr| \le |(\alpha - j) + (j + 1)| = |\alpha + 1|$이다. 양변에 $(j + 1)^{-1} > 0$을 곱하면 절댓값의 (4), (1)과 순서 성질 (4)의 (iii)에 의해 $|q_j - 1| \le |\alpha + 1|\,(j + 1)^{-1}$이다. $(j + 1)^{-1}$의 수열은 [[basic-limits]]의 (2)와 [[tail-of-a-sequence]]의 (1)에 의해 $0$으로 수렴하고, [[limit-of-sum-and-product]]의 (5)에 의해 오른쪽의 수열도 $0$으로 수렴한다. [[comparison-with-null-sequence|0 으로 수렴하는 수열과의 비교]]의 (3)에 의해 $(q_j)$는 $1$로 수렴하고, [[ratio-formula-for-radius]]의 (2)에 의해 수렴 반지름은 $1^{-1} = 1$이다.

마지막 문장: (i)의 경우는 [[radius-of-convergence]]의 (4)로, (ii)의 경우는 같은 항목의 (2)로 $|x| < 1$에서 수렴한다. 어느 경우든 [[radius-of-convergence]]의 (7)의 $I$는 $(-1, 1)$을 포함하고($\mathbb{R}$이거나 $(-1, 1)$), $f$는 이항급수가 $I$ 위에 나타내는 함수를 $(-1, 1)$로 제한한 것이다.

**3의 증명.** $J = (-1, 1)$로 두고, 이항급수가 $I$ 위에 나타내는 함수를 $F$라 하자. [[termwise-differentiation-of-power-series|멱급수의 항별 미분]]의 (2)에 의해 $F$는 미분가능한 함수이고 $I$의 모든 $x$에서 $F'(x) = \sum_{k=0}^{\infty} u_k x^k$이다. 여기서 $u_k = (k + 1)\, \gamma_{k+1}$은 항별 미분한 멱급수의 계수이고, 재귀식의 곱 꼴에 의해 $u_k = (\alpha - k)\, \gamma_k$이다. [[derivative]]의 (2)에 의해 $f = F|_J$는 미분가능한 함수이고 $J$에서 $f' = F'$이다.

$x \in J$라 하자. 항별 미분한 멱급수는 $x$에서 수렴한다(같은 항목의 (1)에 의해 $I$가 같다). [[algebra-of-power-series|멱급수의 합과 곱]]의 (4)를 중심 $0$과 계수 $(u_k)$에 쓰면, $v_0 = 0$, 자연수 $k$에서 $v_k = u_{k-1}$인 계수의 멱급수가 $x$에서 수렴하고 $\sum_{k=0}^{\infty} v_k x^k = x\, f'(x)$이다($x - 0 = x$). 자연수 $k$에서 재귀식의 곱 꼴을 $k - 1$에 쓰면 $v_k = u_{k-1} = k\, \gamma_k$이고, $v_0 = 0 = 0 \cdot \gamma_0$이므로 모든 $k$에서 $v_k = k\, \gamma_k$이다. 같은 항목의 (1)을 상수 $1$로 쓰면 계수가 $u_k + v_k$인 멱급수가 $x$에서 수렴하고 합은 $f'(x) + x f'(x) = (1 + x) f'(x)$이다((K3), (K4)). 한편 (K3), (K12)의 (i)에 의해
$$
u_k + v_k = (\alpha - k)\, \gamma_k + k\, \gamma_k = \alpha\, \gamma_k
$$
이고, 같은 항목의 (1)의 상수배에 의해 계수가 $\alpha\, \gamma_k$인 멱급수의 $x$에서의 합은 $\alpha f(x)$이다. 두 멱급수의 계수가 같으므로 합도 같고, $(1 + x) f'(x) = \alpha f(x)$이다. $f(0) = \gamma_0 = 1$은 [[radius-of-convergence]]의 (7)의 (ii)이다.

**4의 증명.** $x \in J$이면 $0 < 1 + x$이므로 $\ell(x) = 1 + x$로 정한 함수 $\ell : J \to \mathbb{R}$의 값은 $\mathbb{R}_{>0}$([[natural-logarithm]]의 진술)에 든다. [[real-power]]의 (7)의 (ii)를 $r = -\alpha$에 쓰면 $w(y) = y^{-\alpha}$로 정한 $w : \mathbb{R}_{>0} \to \mathbb{R}$는 미분가능하고 $w'(y) = -\alpha\, y^{-\alpha - 1}$이다. [[derivative]]의 (1)에 의해 $\ell$은 미분가능하고 $\ell' = 1$이므로, [[chain-rule|연쇄법칙]]의 (3)과 (2)에 의해 $w \circ \ell$은 $J$ 위의 미분가능한 함수이고 $(w \circ \ell)'(x) = -\alpha (1 + x)^{-\alpha - 1}$이다. $\varphi = f \cdot (w \circ \ell)$, 곧 $\varphi(x) = f(x)(1 + x)^{-\alpha}$로 두면 [[derivative-rules|미분법]]의 (6)에 의해
$$
\begin{aligned}
\varphi'(x) &= f'(x)(1 + x)^{-\alpha} \\
&\qquad - \alpha f(x)(1 + x)^{-\alpha - 1}
\end{aligned}
$$
이다. [[real-power]]의 (4)의 (ii)의 $a^y a = a^{y + 1}$을 $a = 1 + x$, $y = -\alpha - 1$에 쓰면 $(1 + x)^{-\alpha} = (1 + x)^{-\alpha - 1}(1 + x)$이므로, (3)에 의해
$$
\begin{aligned}
\varphi'(x) &= (1 + x)^{-\alpha - 1} \\
&\qquad \cdot \bigl((1 + x) f'(x) \\
&\qquad\quad - \alpha f(x)\bigr) = 0
\end{aligned}
$$
이다((K3), (K9)). [[derivative-and-monotonicity|도함수와 증가·감소]]의 (1)에 의해 $\varphi$는 상수함수이고, (3)과 [[real-power]]의 (4)의 (iv)에 의해 $\varphi(0) = f(0) \cdot 1^{-\alpha} = 1$이다. 따라서 $J$의 모든 $x$에서 $f(x)(1 + x)^{-\alpha} = 1$이다. 양변에 $(1 + x)^\alpha$를 곱하면, [[real-power]]의 (4)의 (ii)와 (1)에 의해 $(1 + x)^{-\alpha}(1 + x)^{\alpha} = (1 + x)^0 = 1$이므로 $f(x) = (1 + x)^\alpha$이다. $\blacksquare$
:::

## 예시와 반례

:::example[α = −1 과 α = 1/2 의 이항계수]
$\alpha = -1$이면 재귀식은 $\binom{-1}{k+1} = \binom{-1}{k}(-1 - k)(k + 1)^{-1} = -\binom{-1}{k}$이므로 귀납법으로 $\binom{-1}{k} = (-1)^k$입니다. (4)는 $|x| < 1$에서 $(1 + x)^{-1} = \sum_{k=0}^{\infty} (-x)^k$라는 것이고, [[real-power]]의 (2)에 의해 왼쪽은 역수 $(1 + x)^{-1}$이므로 공비가 $-x$인 등비급수의 합([[series-indexed-from-zero]]의 (13)의 (ii))과 맞습니다.

$\alpha = 1/2$이면 $\binom{1/2}{1} = 1/2$, $\binom{1/2}{2} = (1/2)(-1/2)\,2^{-1} = -1/8$, $\binom{1/2}{3} = (-1/8)(-3/2)\,3^{-1} = 1/16$입니다. [[real-power]]의 (3)에 의해 $(1 + x)^{1/2} = \sqrt{1 + x}$이므로, (4)에 의해 $|x| < 1$에서 $\sqrt{1 + x} = \sum_{k=0}^{\infty} \binom{1/2}{k} x^k$이고 그 처음 네 계수는 $1$, $1/2$, $-1/8$, $1/16$입니다.
:::

:::counterexample[(1 + x) 의 거듭제곱이 정해져도 이항급수는 발산할 수 있다]
$\alpha = -1$, $x = 1$이면 $(1 + 1)^{-1} = 1/2$는 정해지지만, 이항급수의 항은 $(-1)^k 1^k = (-1)^k$이고 [[power-of-a-real-number]]의 (5)와 [[basic-limits]]의 (3)에 의해 이 수열은 $0$으로 수렴하지 않으므로 [[power-series]]의 (5)에 의해 발산합니다. (2)의 (ii)대로 반지름이 $1$이고 $x = 1$은 끝점입니다. 그래서 (4)는 $|x| < 1$에서만 진술합니다.
:::

## 확인 질문

:::check[α = 0 이면 이항급수는 무엇이고 (4)는 무엇을 말하는가?]
$\binom{0}{0} = 1$이고 (1)의 (ii)에 의해 $k \ge 1$에서 $\binom{0}{k} = 0$이므로, 이항급수는 모든 실수에서 수렴하고 합이 늘 $1$입니다((2)의 (i)). (4)는 $|x| < 1$에서 $(1 + x)^0 = 1$이라는 것이고, 이것은 [[real-power]]의 (1)의 $a^0 = 1$과 맞습니다.
:::

:::check[α = 2 이면 이항계수는 무엇인가?]
$\binom{2}{0} = 1$, $\binom{2}{1} = 2$, $\binom{2}{2} = 2 \cdot 1 \cdot 2^{-1} = 1$이고 $k \ge 3$에서 $0$입니다((1)). (2)의 (i)와 (4)에 의해 $|x| < 1$에서 $(1 + x)^2 = 1 + 2x + x^2$이고, [[real-power]]의 (1)에 의해 왼쪽은 거듭제곱 $(1 + x)(1 + x)$와 같으므로 전개한 것과 맞습니다.
:::
