---
title: 리만 재배열 정리
title_en: Riemann Rearrangement Theorem
aliases: [리만의 재배열 정리, 리만 급수 정리, 조건수렴하는 급수의 재배열, Riemann series theorem, Riemann rearrangement theorem]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 조건수렴하는 급수와 실수 L 에 대하여 합이 L 인 재배열이 있다. 부분합이 어떤 수보다도 커지거나 어떤 수보다도 작아지는 재배열도 있다. 따라서 급수가 절대수렴하는 것은 정확히 모든 재배열의 급수가 수렴할 때이다. 재배열은 고르기 없이 재귀 정리로 정한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, recursion-theorem, set, cartesian-product, function, injective-surjective-bijective, inverse-function, real-number-arithmetic, order-properties-of-reals, absolute-value, archimedean-property, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, convergent-sequence-is-bounded, subsequence, series-and-partial-sums, linearity-of-series, absolute-convergence, alternating-series-test, finite-sum-of-reals, linearity-and-order-of-finite-sums, sum-of-a-series, positive-and-negative-parts, rearrangement-of-absolutely-convergent-series]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.3절 Rearrangements, 첫 문단 (p.102), Example 2.6.4 (p.103–104). 2.6.6절 Exercise 2.6.3, Exercise 2.6.4 (p.110)
    checked: original
    note: "출처 Example 2.6.4(p.103–104)는 교대 조화급수 Σ(−1)^{n+1}/n 과 임의의 실수 L 에 대하여, σ(1) = 1 로 두고 지금까지의 부분합이 L 이하이면 아직 쓰지 않은 가장 작은 홀수를, 아니면 아직 쓰지 않은 가장 작은 짝수를 다음 σ 의 값으로 삼아 합이 L 인 재배열을 만들고, L = 1.2 일 때의 처음 항들을 그림 2.9 와 함께 적는다. Exercise 2.6.3(p.110, Challenging)은 일반 조건수렴 급수와 임의의 실수에 대하여 같은 것을 보이라는 연습문제이고, 이 항목의 (1)은 그 진술이다. Exercise 2.6.4(p.110)는 교대 조화급수의 재배열로 모든 구간에 부분합이 들어가는 것을 찾고 그것이 수렴하지 않음을 보이라는 것이다. 이 항목의 증명은 출처의 생각(부분합이 L 이하이면 0 이상인 항을, 크면 음의 항을 더한다)을 따르되, 출처의 '아직 쓰지 않은 가장 작은 홀수'는 지금까지 정한 σ 의 값 전체에 기대어 재귀 정리의 꼴이 아니므로, 상태 (쓴 0 이상인 항의 수, 쓴 음의 항의 수, 부분합)를 재귀 정리로 함께 넘기고 positive-and-negative-parts 의 (5)의 번호열로 다음 항을 정한다. 출처가 증명 없이 넘어가는 곳('eventually we pass L', '𝜎(N) → ∞', 'prove this!')은 positive-and-negative-parts 의 (5)와 이 항목의 (라)–(사)에서 증명한다. Exercise 2.6.4 a)–b) 는 교대 조화급수의 재배열 가운데 부분합이 모든 열린구간에 들어가서 수렴하지 않는 것을 묻는다. 이 항목의 (2)의 재배열도 급수가 수렴하지 않지만, 부분합이 한없이 커지거나 한없이 작아지는 꼴이다. (3)은 출처 2.6.3절 첫 문단(p.102)의 'absolutely convergent series can be summed in any order whatsoever. Nothing of the sort holds for conditionally convergent series'를 동치로 진술한 것이다. '리만 재배열 정리'라는 이름은 출처에 나오지 않는다(검색어 'Riemann', 'rearrang', 'series theorem'. 출처에서 Riemann 이라는 이름은 리만 적분과 리만 합, Riemann–Lebesgue 보조정리, 2.5.5절 p.95 의 제타 함수, 5.1절 p.181 의 생애를 적은 각주에 나오고 재배열에는 나오지 않는다). 예시 '교대 조화급수를 합이 0 이 되게 재배열하기'는 Example 2.6.4 와 같은 급수에 같은 규칙을 L = 0 으로 쓴 것이다(이 사이트의 교대 조화급수는 부호가 반대여서 0 이상인 항이 짝수 번째이다). 확인 질문 '수렴하는 급수에 합이 서로 다른 두 재배열이 있으면 그 급수는 어떤 급수인가?'는 위 p.102 첫 문단의 문장과 같은 내용을 묻는다. 반례 '공비가 1/2 인 등비급수의 재배열은 합이 모두 1 이다'의 급수는 출처 Example 2.5.4(p.88)의 Σ 1/2ⁿ = 1 이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리만 재배열의 재귀 상태와 단계 구성 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열, 위로 유계, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 부분합 수열, 급수의 수렴과 발산은 [[series-and-partial-sums]], 절대수렴과 조건수렴은 [[absolute-convergence]], 급수의 합의 기호 $\sum_{n=1}^{\infty}$는 [[sum-of-a-series]], 재배열은 [[rearrangement-of-absolutely-convergent-series]], 유한 합은 [[finite-sum-of-reals]]의 것이다. $(x_n)$을 수열이라 하자.

1. (**리만 재배열 정리**, Riemann rearrangement theorem) $(x_n)$의 급수가 조건수렴하고 $L$이 실수이면, 전단사 $\sigma : \mathbb{N} \to \mathbb{N}$으로서 재배열 $(x_{\sigma(n)})$의 급수가 수렴하고
   $$
   \sum_{n=1}^{\infty} x_{\sigma(n)} = L
   $$
   인 것이 있다.
2. (부분합이 한없이 커지거나 작아지는 재배열) $(x_n)$의 급수가 조건수렴하면, 전단사 $\sigma : \mathbb{N} \to \mathbb{N}$과 $\tau : \mathbb{N} \to \mathbb{N}$으로서 다음을 만족하는 것이 있다. 모든 실수 $M$에 대하여 자연수 $N_0$이 있어 $N_0$ 이상인 모든 자연수 $N$에서 $\sum_{n=1}^{N} x_{\sigma(n)} > M$이고, 모든 실수 $M$에 대하여 자연수 $N_0'$이 있어 $N_0'$ 이상인 모든 자연수 $N$에서 $\sum_{n=1}^{N} x_{\tau(n)} < -M$이다. 특히 두 재배열 $(x_{\sigma(n)})$, $(x_{\tau(n)})$의 급수는 발산한다.
3. (절대수렴의 판정) 다음 세 명제는 서로 동치이다.
   - (i) $(x_n)$의 급수가 절대수렴한다.
   - (ii) $(x_n)$의 모든 재배열의 급수가 수렴하고, 그 합이 모두 같다.
   - (iii) $(x_n)$의 모든 재배열의 급수가 수렴한다.
:::

:::english
Sequences, being bounded above, convergence, and the notation $\lim_{n \to \infty}$ are as in the entries on sequences, limits of sequences, and uniqueness of limits; sequences of partial sums and convergence and divergence of series are as in the entry on series and partial sums, absolute and conditional convergence as in the entry on absolute convergence, the notation $\sum_{n=1}^{\infty}$ as in the entry on the notation for the sum of a series, rearrangements as in the entry on rearrangements of absolutely convergent series, and finite sums as in the entry on finite sums of reals. Let $(x_n)$ be a sequence.

1. (**Riemann rearrangement theorem**) If the series of $(x_n)$ converges conditionally and $L$ is a real number, then there is a bijection $\sigma : \mathbb{N} \to \mathbb{N}$ such that the series of the rearrangement $(x_{\sigma(n)})$ converges and
   $$
   \sum_{n=1}^{\infty} x_{\sigma(n)} = L .
   $$
2. (Rearrangements whose partial sums grow or decrease without bound) If the series of $(x_n)$ converges conditionally, then there are bijections $\sigma : \mathbb{N} \to \mathbb{N}$ and $\tau : \mathbb{N} \to \mathbb{N}$ such that: for every real number $M$ there is a natural number $N_0$ with $\sum_{n=1}^{N} x_{\sigma(n)} > M$ for every natural number $N \ge N_0$, and for every real number $M$ there is a natural number $N_0'$ with $\sum_{n=1}^{N} x_{\tau(n)} < -M$ for every natural number $N \ge N_0'$. In particular, the series of the two rearrangements $(x_{\sigma(n)})$ and $(x_{\tau(n)})$ diverge.
3. (A criterion for absolute convergence) The following three statements are equivalent.
   - (i) The series of $(x_n)$ converges absolutely.
   - (ii) The series of every rearrangement of $(x_n)$ converges, and all their sums are equal.
   - (iii) The series of every rearrangement of $(x_n)$ converges.
:::

## 직관

조건수렴하는 급수의 $0$ 이상인 항만 모아 더하면 한없이 커지고, 음의 항만 모아 더하면 한없이 작아집니다([[positive-and-negative-parts|양의 부분과 음의 부분]]의 (3)). 그러면서 항 자체는 $0$으로 갑니다. 이 두 사실만으로 합을 원하는 곳에 맞출 수 있습니다. 지금까지의 합이 목표 $L$ 이하이면 아직 쓰지 않은 $0$ 이상인 항 가운데 번호가 가장 작은 것을 더하고, $L$보다 크면 아직 쓰지 않은 음의 항 가운데 번호가 가장 작은 것을 더합니다.

온도 조절기를 떠올리면 됩니다. 방이 목표 온도 이하이면 난방을 켜고, 넘으면 끕니다. 온도는 목표를 넘나들지만, 한 번에 바뀌는 폭이 점점 작아지면 목표 근처에 머뭅니다. 여기서 "한 번에 바뀌는 폭"이 더하는 항의 크기이고, 그것이 $0$으로 가는 것은 급수가 수렴하기 때문입니다. 난방을 계속 켜 두면 언젠가 목표를 넘는다는 것이 $0$ 이상인 항의 합이 한없이 커진다는 것에 해당하고, 이것은 급수가 절대수렴하지 않기 때문에 성립합니다. 증명에서 절대수렴하지 않는다는 가정은 두 번호열이 있다는 것과 (라)(쓴 항의 수가 한없이 커져 모든 항을 언젠가 쓴다)에서, 급수가 수렴한다는 가정은 항이 $0$으로 간다는 것으로 (사)(목표 근처에 머문다)와 (아)에서 쓰입니다.

목표를 고정하지 않고 쓴 음의 항의 개수만큼으로 올려 가면, 합은 그 목표를 따라 한없이 커집니다((2)). 절대수렴하는 급수에서는 이런 일이 일어나지 않으므로([[rearrangement-of-absolutely-convergent-series|절대수렴하는 급수의 재배열]]), 재배열에 대한 성질로 절대수렴을 판정할 수 있습니다((3)).

## 증명

:::idea
$0$ 이상인 항의 번호열 $(p_k)$와 음의 항의 번호열 $(q_k)$를 쓴다. 상태 "(쓴 $0$ 이상인 항의 수, 쓴 음의 항의 수, 지금까지의 부분합)"을 재귀 정리로 정하고, 부분합이 문턱 이하이면 다음 $0$ 이상인 항을, 문턱보다 크면 다음 음의 항을 더한다. 문턱이 $L$이면 (1), 쓴 음의 항의 수이면 (2)를 얻는다. 단사는 두 번호열이 겹치지 않고 각 수가 한 걸음에 $1$씩만 늘어나는 데서, 전사는 두 수가 한없이 커지는 데서, 수렴은 항이 $0$으로 가는 데서 나온다.
:::

:::hint
$\sigma(n)$을 "아직 쓰지 않은 가장 작은 번호"로 정하면 지금까지의 값 전체에 기대게 되어 재귀 정리의 꼴이 아닙니다. 대신 지금까지 $0$ 이상인 항을 $u$개 썼다면 다음은 $p_{u+1}$이라는 것을 쓰세요. 상태에 $u$와 함께 부분합도 넣으면 다음 상태가 지금의 상태 하나로 정해집니다.
:::

:::hint
문턱보다 큰 부분합에서 음의 항 $x_q$를 더하면 $s - \varepsilon < s + x_q < s$이고, 문턱 이하의 부분합에서 $0$ 이상인 항을 더하면 $s \le s + x_p < s + \varepsilon$입니다. 한 번 $L$ 근처 $\varepsilon$ 안에 들어온 부분합이 다시는 나가지 않는다는 것을 보이세요.
:::

:::proof
아래에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 쓰고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다. 정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽고, 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]). $W = \{i \in \mathbb{Z} : 0 \le i\}$로 둔다.

(1)과 (2)의 증명에서는 $(x_n)$의 급수가 조건수렴한다고 하고, [[positive-and-negative-parts]]의 (5)의 첨자열 $(p_k)$($0 \le x_n$인 번호를 차례로 늘어놓은 것)와 $(q_k)$($x_n < 0$인 번호를 차례로 늘어놓은 것)를 쓴다. 두 첨자열은 그 항목의 (4)에 의해 하나로 정해진 대상이다. 그 항목의 (5)의 (i)–(iv)를 아래에서 "(5)의 (i)" 등으로 부른다.

**(가) 문턱과 상태.** 함수 $\theta : W \to \mathbb{R}$가 $v \le v'$인 모든 $v, v' \in W$에서 $\theta(v) \le \theta(v')$를 만족한다고 하자(이것을 **문턱**이라 부른다). $X = (W \times W) \times \mathbb{R}$([[cartesian-product]])로 두고, $n \in \mathbb{N}$과 $((u, v), s) \in X$에 대하여 함수 $g$를 다음과 같이 정한다. $s \le \theta(v)$이면
$$
\begin{aligned}
&g\bigl(n, ((u, v), s)\bigr) \\
&\quad = \bigl((u + 1, v),\ s + x_{p_{u+1}}\bigr)
\end{aligned}
$$
이고, $\theta(v) < s$이면
$$
\begin{aligned}
&g\bigl(n, ((u, v), s)\bigr) \\
&\quad = \bigl((u, v + 1),\ s + x_{q_{v+1}}\bigr)
\end{aligned}
$$
이다. [[order-properties-of-reals]]의 (1)의 (iii)에 의해 두 경우 가운데 정확히 하나가 성립하고, $u \ge 0$이면 (Z7)과 (Z8)에 의해 $u + 1 \ge 1$이어서 $p_{u+1}$이 정해지며 $u + 1, v + 1 \in W$이다. 따라서 [[recursion-theorem|재귀 정리]]의 (1)에 의해 $g$는 $\mathbb{N} \times X$에서 $X$로의 함수이다. 재귀 정리에 의해 $\varphi(1) = ((0, 0), 0)$이고 모든 자연수 $n$에서 $\varphi(n + 1) = g(n, \varphi(n))$인 함수 $\varphi : \mathbb{N} \to X$가 정확히 하나 있다. 순서쌍의 성분은 순서쌍으로 정해지므로([[cartesian-product]]), $\varphi(n) = ((u(n), v(n)), s(n))$으로 정한 함수 $u, v : \mathbb{N} \to W$와 $s : \mathbb{N} \to \mathbb{R}$이 있다(재귀 정리의 (1)). 자연수 $n$이 **양의 걸음**이라는 것은 $s(n) \le \theta(v(n))$일 때이고, **음의 걸음**이라는 것은 $\theta(v(n)) < s(n)$일 때이다. 각 $n$은 정확히 하나이다. 이제 $\sigma : \mathbb{N} \to \mathbb{N}$을, $n$이 양의 걸음이면 $\sigma(n) = p_{u(n)+1}$, 음의 걸음이면 $\sigma(n) = q_{v(n)+1}$로 정한다.

**(나) 상태의 성질.** $g$의 정의에 의해 모든 자연수 $n$에서 다음이 성립한다.

- (ㄱ) $n$이 양의 걸음이면 $u(n + 1) = u(n) + 1$, $v(n + 1) = v(n)$이고, 음의 걸음이면 $u(n + 1) = u(n)$, $v(n + 1) = v(n) + 1$이다. 어느 경우든 $s(n + 1) = s(n) + x_{\sigma(n)}$이다. 또 $u(1) = v(1) = 0$, $s(1) = 0$이다.
- (ㄴ) (ㄱ)과 (L3)에 의해 $u(n) \le u(n + 1)$이고 $v(n) \le v(n + 1)$이다. $u$와 $v$를 정수를 값으로 갖는 수열로 보면 단조증가이므로, [[sequence]]의 (4)에 의해 $n \le m$인 자연수 $n$, $m$에서 $u(n) \le u(m)$, $v(n) \le v(m)$이다.
- (ㄷ) 모든 자연수 $N$에서 $\sum_{k=1}^{N} x_{\sigma(k)} = s(N + 1)$이다. $N$번째 항이 $s(N + 1)$인 수열을 $(t_N)$이라 하면 (ㄱ)에 의해 $t_1 = s(2) = 0 + x_{\sigma(1)} = x_{\sigma(1)}$이고 $t_{N+1} = s(N + 2) = t_N + x_{\sigma(N+1)}$이므로, [[series-and-partial-sums]]의 (1)에 의해 $(t_N)$은 $(x_{\sigma(n)})$의 부분합 수열이고, [[finite-sum-of-reals]]의 (1)에 의해 그 $N$번째 항은 $\sum_{k=1}^{N} x_{\sigma(k)}$이다.

아래 (다)–(바)에서는 두 경우를 함께 다룬다. $(h, r)$을 $(u, p)$ 또는 $(v, q)$라 하고, 첫째 경우에는 양의 걸음을, 둘째 경우에는 음의 걸음을 "**$h$의 걸음**"이라 부른다. 두 경우 모두 $h(1) = 0$이고, $n$이 $h$의 걸음이면 $h(n + 1) = h(n) + 1$이고 $\sigma(n) = r_{h(n)+1}$이며, $h$의 걸음이 아니면 $h(n + 1) = h(n)$이다((ㄱ)).

**(다) $\sigma$는 단사이다.** 자연수 $n < m$에서 $\sigma(n) = \sigma(m)$이라 하자. $n$과 $m$ 가운데 하나가 양의 걸음이고 다른 하나가 음의 걸음이면, 이 수는 어떤 $p_k$이면서 어떤 $q_{k'}$이어서 (5)의 (ii)와 어긋난다. 따라서 둘은 같은 $h$의 걸음이고 $r_{h(n)+1} = r_{h(m)+1}$이다. (5)의 (ii)에 의해 $h(n) + 1 = h(m) + 1$이고, (Z7)에 의해 $h(n) = h(m)$이다. 그런데 (Z1)에 의해 $n + 1 \le m$이므로 (ㄴ)에 의해 $h(n) + 1 = h(n + 1) \le h(m) = h(n)$이고, 이것은 (L3)과 (L1)에 의해 일어날 수 없다. 따라서 $\sigma$는 단사이다.

**(라) $u$와 $v$는 위로 유계가 아니다.** 곧 모든 정수 $d$에 대하여 $h(n) > d$인 자연수 $n$이 있다. 먼저 정수의 집합 $\{h(n) : n \in \mathbb{N}\}$이 위로 유계라면, 이 집합은 공집합이 아니므로 [[well-ordering-principle]]의 4번 (나)에 의해 최대 원소 $h(n_0)$을 갖고, $n \ge n_0$이면 (ㄴ)에 의해 $h(n_0) \le h(n) \le h(n_0)$이어서 (L2)에 의해 $h(n) = h(n_0)$이다. 그러면 $n \ge n_0$인 $n$은 $h$의 걸음이 아니다. $h$의 걸음이면 $h(n + 1) = h(n_0) + 1$이 최대 원소보다 크기 때문이다((L3), (L1)).

- $v$가 위로 유계라 하자. 위에 의해 $n \ge n_0$이면 $v(n) = v(n_0)$이고 $n$은 양의 걸음이므로 $s(n) \le \theta(v(n_0))$이다. $u_0 = u(n_0)$으로 두면, $0$ 이상인 모든 정수 $t$에서
  $$
  \begin{gathered}
  u(n_0 + t) = u_0 + t, \\
  s(n_0 + t) = s(n_0) + \sum_{k=u_0+1}^{u_0+t} x_{p_k}
  \end{gathered}
  $$
  이다. $t = 0$이면 둘째 합은 빈 합이다. $t$에서 성립하면 $n_0 + t$는 양의 걸음이므로 (ㄱ)과 [[finite-sum-of-reals]]의 (3)에 의해 $u(n_0 + t + 1) = u_0 + t + 1$이고 $s(n_0 + t + 1) = s(n_0 + t) + x_{p_{u_0+t+1}} = s(n_0) + \sum_{k=u_0+1}^{u_0+t+1} x_{p_k}$이다([[mathematical-induction]]의 시작점이 $0$인 꼴). (5)의 (iv)를 $M = \theta(v(n_0)) - s(n_0)$, $K_0 = u_0$에 쓰면 $u_0 \le K$이고 $\sum_{k=u_0+1}^{K} x_{p_k} > \theta(v(n_0)) - s(n_0)$인 정수 $K$가 있다. $t = K - u_0 \ge 0$으로 두면 $s(n_0 + t) > \theta(v(n_0))$인데, $n_0 + t \ge n_0$이므로 $s(n_0 + t) \le \theta(v(n_0))$이어서 [[order-properties-of-reals]]의 (1)의 (i)에 의해 모순이다.
- $u$가 위로 유계라 하자. 위에 의해 $n \ge n_0$이면 $u(n) = u(n_0)$이고 $n$은 음의 걸음이다. $c = \theta(v(n_0))$로 두면, $n \ge n_0$에서 (ㄴ)에 의해 $v(n_0) \le v(n)$이고 문턱의 성질에 의해 $c \le \theta(v(n)) < s(n)$이다. $v_0 = v(n_0)$으로 두면, 위와 같은 귀납법으로 $0$ 이상인 모든 정수 $t$에서 $v(n_0 + t) = v_0 + t$이고 $s(n_0 + t) = s(n_0) + \sum_{k=v_0+1}^{v_0+t} x_{q_k}$이다($n_0 + t$가 음의 걸음이므로 (ㄱ)에 의해 $s(n_0 + t + 1) = s(n_0 + t) + x_{q_{v_0+t+1}}$). (5)의 (iv)를 $M = s(n_0) - c$, $K_0 = v_0$에 쓰면 $v_0 \le K'$이고 $\sum_{k=v_0+1}^{K'} x_{q_k} < c - s(n_0)$인 정수 $K'$이 있다. $t = K' - v_0$으로 두면 $s(n_0 + t) < c$인데, 위에서 $c < s(n_0 + t)$이므로 모순이다.

**(마) $h$의 값과 $h$의 걸음.** $0$ 이상인 모든 정수 $a$에 대하여, $h(n) = a$이고 $h$의 걸음인 자연수 $n$이 있다. 이때 $\sigma(n) = r_{a+1}$이다. (라)에 의해 $\{m \in \mathbb{N} : a < h(m)\}$은 공집합이 아니므로 [[well-ordering-principle]]의 2번에 의해 최소 원소 $n'$을 갖는다. $h(1) = 0 \le a$이므로 $n' \ne 1$이고, $n = n' - 1$은 자연수이다. $n < n'$이므로 $n$은 이 집합에 속하지 않고((L1)) $h(n) \le a$이다((Z5)). $h(n + 1) = h(n') > a \ge h(n)$이므로 $h(n + 1) \ne h(n)$이고, 따라서 $n$은 $h$의 걸음이며 $h(n + 1) = h(n) + 1$이다. $a < h(n) + 1$에서 (Z1)과 (Z7)에 의해 $a \le h(n)$이고, (L2)에 의해 $h(n) = a$이다.

또 모든 자연수 $m$에 대하여 $m \le n$이고 $h$의 걸음인 자연수 $n$이 있다. 위의 것을 $a = h(m)$에 쓰면 $h(n) = h(m)$이고 $h$의 걸음인 $n$이 있다. $n < m$이면 $n + 1 \le m$이므로 (ㄴ)에 의해 $h(m) + 1 = h(n) + 1 = h(n + 1) \le h(m)$이어서 (L3), (L1)과 어긋난다. 따라서 (Z5)에 의해 $m \le n$이다.

**(바) $\sigma$는 전단사이다.** 자연수 $k$에 대하여 $a = k - 1 \ge 0$이다. (마)를 $(h, r) = (u, p)$에 쓰면 $\sigma(n) = p_k$인 $n$이 있고, $(v, q)$에 쓰면 $\sigma(n') = q_k$인 $n'$이 있다. (5)의 (ii)에 의해 모든 자연수는 어떤 $p_k$이거나 어떤 $q_k$이므로 $\sigma : \mathbb{N} \to \mathbb{N}$은 전사이다. (다)와 함께 $\sigma$는 전단사이다.

**(사) (1)의 증명.** 실수 $L$에 대하여 모든 $v \in W$에서 $\theta(v) = L$인 문턱으로 (가)–(바)를 쓴다. 상수함수이므로 문턱의 성질을 만족한다. $\varepsilon$을 양의 실수라 하자. (5)의 (iii)과 수열의 극한의 정의([[limit-of-sequence]])에 의해, $k \ge K_1$이면 $|x_{p_k}| < \varepsilon$인 자연수 $K_1$과 $k \ge K_2$이면 $|x_{q_k}| < \varepsilon$인 자연수 $K_2$가 있다. $K = K_1 + K_2$로 두면 $k \ge K$에서 두 부등식이 모두 성립한다. (마)에 의해 $u(n_u) = K$인 $n_u$와 $v(n_v) = K$인 $n_v$가 있고, $n_1 = n_u + n_v$로 두면 (ㄴ)에 의해 $u(n_1) \ge K$, $v(n_1) \ge K$이다.

$n \ge n_1$이면 $u(n) + 1 > K$, $v(n) + 1 > K$이다. 따라서 [[absolute-value]]의 (8)과 (5)의 (iii)의 부호에 의해, $n$이 양의 걸음이면 $0 \le x_{\sigma(n)} < \varepsilon$이고 $s(n) \le L$이므로 $s(n) \le s(n + 1) < s(n) + \varepsilon$이며, $n$이 음의 걸음이면 $-\varepsilon < x_{\sigma(n)} < 0$이고 $L < s(n)$이므로 $s(n) - \varepsilon < s(n + 1) < s(n)$이다. 이것을 (★)이라 하자.

*한 번 들어오면 나가지 않는다.* $n \ge n_1$이고 $|s(n) - L| < \varepsilon$이면 $|s(n + 1) - L| < \varepsilon$이다. [[absolute-value]]의 (8)에 의해 $L - \varepsilon < s(n) < L + \varepsilon$이다. 양의 걸음이면 (★)에 의해 $L - \varepsilon < s(n) \le s(n + 1) < s(n) + \varepsilon \le L + \varepsilon$이다. 음의 걸음이면 $L < s(n)$이므로 (★)에 의해 $L - \varepsilon < s(n) - \varepsilon < s(n + 1) < s(n) < L + \varepsilon$이다.

*언젠가 들어온다.* (마)의 둘째 문단을 $(u, p)$와 $m = n_1$에 쓰면 $n_a \ge n_1$인 양의 걸음 $n_a$가 있고, 다시 $(v, q)$와 $m = n_a$에 쓰면 $n_a$ 이상인 음의 걸음이 있다. [[well-ordering-principle]]의 2번에 의해 $n_a$ 이상인 음의 걸음 가운데 가장 작은 것 $n_2$가 있다. $n_a$는 양의 걸음이므로 $n_2 \ne n_a$이고 $n_a < n_2$, 곧 $n_a \le n_2 - 1$이다. $n_2 - 1$은 $n_2$보다 작으므로 음의 걸음이 아니고, 따라서 양의 걸음이다. $n_2 - 1 \ge n_1$이므로 (★)에 의해 $s(n_2) < s(n_2 - 1) + \varepsilon \le L + \varepsilon$이고, $n_2$는 음의 걸음이므로 $L - \varepsilon < L < s(n_2)$이다. 따라서 $|s(n_2) - L| < \varepsilon$이다.

$n_2 \ge n_1$이므로 앞 문단과 시작점이 $n_2$인 귀납법에 의해 $n \ge n_2$인 모든 $n$에서 $|s(n) - L| < \varepsilon$이다. 그러면 $N \ge n_2$인 모든 자연수 $N$에서 $N + 1 \ge n_2$이므로 (ㄷ)에 의해 $\bigl| \sum_{k=1}^{N} x_{\sigma(k)} - L \bigr| = |s(N + 1) - L| < \varepsilon$이다. $\varepsilon$은 임의의 양수이므로 $(x_{\sigma(n)})$의 부분합 수열은 $L$로 수렴하고, (바)에 의해 $\sigma$는 전단사이므로 $\sigma$가 (1)의 전단사이다.

**(아) (2)의 증명.** 모든 $v \in W$에서 $\theta(v) = v$인 문턱으로 (가)–(바)를 쓰고 얻은 전단사를 $\sigma$라 하자. $v \le v'$이면 $\theta(v) \le \theta(v')$이므로 문턱의 성질을 만족한다. (5)의 (iii)에 의해 $k \ge K$이면 $|x_{q_k}| < 1$인 자연수 $K$가 있다. (마)에 의해 $v(n_v) = K$인 $n_v$가 있고, (마)의 둘째 문단에 의해 $n_v$ 이상인 음의 걸음 $m$이 있다.

*아래로 누르기.* $n \ge m + 1$인 모든 자연수 $n$에서 $s(n) > v(n) - 2$이다. $n \ge m$이면 (ㄴ)에 의해 $v(n) \ge K$이고 $v(n) + 1 > K$이므로, $n$이 음의 걸음일 때 $x_{\sigma(n)} = x_{q_{v(n)+1}} > -1$이다. $m$은 음의 걸음이므로 $v(m) < s(m)$이고, (ㄱ)에 의해 $s(m + 1) > v(m) - 1 = v(m + 1) - 2$이다. $n \ge m + 1$에서 성립한다고 하자. $n$이 양의 걸음이면 $0 \le x_{\sigma(n)}$이므로 $s(n + 1) \ge s(n) > v(n) - 2 = v(n + 1) - 2$이다. 음의 걸음이면 $v(n) < s(n)$이므로 $s(n + 1) > s(n) - 1 > v(n) - 1 = v(n + 1) - 2$이다. 시작점이 $m + 1$인 귀납법으로 주장이 성립한다.

*$M$을 넘기.* 실수 $M$이 주어졌다고 하자. [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $M + 2 < a$인 자연수 $a$가 있고, (마)에 의해 $v(n_a) = a$인 $n_a$가 있다. $N_0 = n_a + m$으로 두자. $N \ge N_0$이면 $N + 1 \ge m + 1$이고 $N + 1 \ge n_a$이므로, (ㄷ), 앞 문단, (ㄴ)에 의해
$$
\begin{aligned}
\sum_{k=1}^{N} x_{\sigma(k)} &= s(N + 1) \\
&> v(N + 1) - 2 \\
&\ge a - 2 > M
\end{aligned}
$$
이다.

*$\tau$.* $n$번째 항이 $-x_n$인 수열의 급수는 [[linearity-of-series]]의 (2)($c = -1$)와 [[real-number-arithmetic]]의 (K9)에 의해 수렴하고, [[absolute-value]]의 (3)에 의해 $|-x_n| = |x_n|$이므로 절대수렴하지 않는다. 곧 조건수렴한다. 위의 것을 이 수열에 쓰면, 전단사 $\tau$로서 모든 실수 $M$에 대하여 자연수 $N_0'$이 있어 $N \ge N_0'$에서 $\sum_{k=1}^{N} (-x_{\tau(k)}) > M$인 것이 있다. [[linearity-and-order-of-finite-sums]]의 (1)($c = -1$)에 의해 왼변은 $-\sum_{k=1}^{N} x_{\tau(k)}$이고, [[order-properties-of-reals]]의 (3)의 (iii)에 의해 $\sum_{k=1}^{N} x_{\tau(k)} < -M$이다.

*발산.* $(x_{\sigma(n)})$의 급수가 수렴한다면 [[convergent-sequence-is-bounded|수렴하는 수열은 유계이다]]의 (2)에 의해 모든 $N$에서 $\bigl| \sum_{k=1}^{N} x_{\sigma(k)} \bigr| \le B$인 실수 $B$가 있다. $M = B$에 위의 것을 쓰면 $N \ge N_0$에서 $\sum_{k=1}^{N} x_{\sigma(k)} > B$인데, [[absolute-value]]의 (6)에 의해 이 합은 $B$ 이하이므로 모순이다. $(x_{\tau(n)})$의 급수가 수렴한다면 같은 $B$로 $N \ge N_0'$에서 $\sum_{k=1}^{N} x_{\tau(k)} < -B$인데, [[absolute-value]]의 (6)과 (7)에 의해 이 합은 $-B$ 이상이므로 모순이다.

**(자) (3)의 증명.** (i)에서 (ii): [[rearrangement-of-absolutely-convergent-series]]의 (4)에 의해 모든 재배열의 급수가 수렴하고 합이 모두 $\sum_{n=1}^{\infty} x_n$이다. (ii)에서 (iii)은 (ii)의 앞부분이다. (iii)에서 (i): 그 항목의 (1)에 의해 항등함수 $i_{\mathbb{N}}$로 얻은 재배열은 $(x_n)$ 자신이므로, (iii)에 의해 $(x_n)$의 급수가 수렴한다. 절대수렴하지 않는다면 조건수렴하므로 (2)에 의해 급수가 발산하는 재배열이 있어 (iii)과 어긋난다. 따라서 $(x_n)$의 급수는 절대수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[교대 조화급수를 합이 0 이 되게 재배열하기]
$x_n = (-1)^n n^{-1}$이라 합시다. [[alternating-series-test|교대급수 판정법]]의 (4)에 의해 이 급수는 조건수렴합니다. 자연수 $k$에서 $2k$는 짝수, $2k - 1$은 홀수이므로([[even-and-odd]]) [[power-of-a-real-number]]의 (5)에 의해 $x_{2k} = (2k)^{-1} > 0$이고 $x_{2k-1} = -(2k - 1)^{-1} < 0$이며, [[alternating-series-test]]의 (2)에 의해 모든 자연수는 이 두 꼴 가운데 정확히 하나입니다. 그래서 $0 \le x_n$인 번호의 집합은 짝수인 자연수 전체이고 $x_n < 0$인 번호의 집합은 홀수인 자연수 전체입니다. $k$에서의 값이 $2k$인 함수와 $2k - 1$인 함수는 첨자열이고 값의 집합이 각각 이 두 집합이므로, [[positive-and-negative-parts]]의 (4)의 (iv)에 의해 증명의 번호열은 $p_k = 2k$, $q_k = 2k - 1$입니다. 증명의 구성을 $L = 0$으로 따라가면 다음과 같습니다. 각 줄의 $s$는 그 걸음 전의 부분합입니다.

| $n$ | $s(n)$ | 걸음 | $\sigma(n)$ | $x_{\sigma(n)}$ |
|---|---|---|---|---|
| $1$ | $0$ | 양 | $p_1 = 2$ | $1/2$ |
| $2$ | $1/2$ | 음 | $q_1 = 1$ | $-1$ |
| $3$ | $-1/2$ | 양 | $p_2 = 4$ | $1/4$ |
| $4$ | $-1/4$ | 양 | $p_3 = 6$ | $1/6$ |
| $5$ | $-1/12$ | 양 | $p_4 = 8$ | $1/8$ |
| $6$ | $1/24$ | 음 | $q_2 = 3$ | $-1/3$ |
| $7$ | $-7/24$ | 양 | $p_5 = 10$ | $1/10$ |

$s(1) = 0 \le 0$에서 시작하므로 첫 항은 $0$ 이상인 항 가운데 번호가 가장 작은 $x_2 = 1/2$입니다. 부분합은 $1/2$, $-1/2$, $-1/4$, $-1/12$, $1/24$, $-7/24$, $-23/120$으로 $0$을 넘나들고, 넘는 폭은 더한 항의 크기 이하입니다.
:::

:::counterexample[공비가 1/2 인 등비급수의 재배열은 합이 모두 1 이다]
$x_n = (1/2)^n$이면 항이 모두 양수이고 [[sum-of-a-series]]의 (6)의 (iii)에 의해 $\sum_{n=1}^{\infty} x_n = (1/2)(1 - 1/2)^{-1} = 1$입니다. 이 급수는 절대수렴하므로 [[rearrangement-of-absolutely-convergent-series]]의 (4)에 의해 모든 재배열의 합이 $1$입니다. 그래서 $L = 2$인 재배열은 없습니다. (1)에서 조건수렴이라는 가정을 뺄 수 없다는 것을 보여 줍니다.
:::

## 확인 질문

:::check[수렴하는 급수에 합이 서로 다른 두 재배열이 있으면 그 급수는 어떤 급수인가?]
조건수렴하는 급수입니다. 절대수렴한다면 (3)의 (ii)에 의해 모든 재배열의 합이 같아야 하기 때문입니다. 수렴한다고 가정했으므로 조건수렴입니다.
:::

:::check[모든 항이 $0$인 수열에 (1)을 쓸 수 있는가? 이 수열의 재배열의 합은 무엇인가?]
쓸 수 없습니다. 모든 항의 절댓값이 $0$이므로 이 급수는 절대수렴하고 조건수렴하지 않습니다. 실제로 모든 재배열도 모든 항이 $0$인 수열이어서 부분합이 모두 $0$이고, 합은 $0$뿐입니다. 음의 항이 없으므로 $x_n < 0$인 번호의 집합은 공집합이고, 증명이 쓰는 번호열 $(q_k)$도 없습니다.
:::
