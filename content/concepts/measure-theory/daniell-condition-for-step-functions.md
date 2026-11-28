---
title: 감소하여 0 으로 가는 계단함수열의 적분
title_en: Integrals of Step Functions Decreasing to Zero
aliases: [다니엘 조건, 계단함수의 다니엘 조건, 감소하는 계단함수열, Daniell condition, condition II, decreasing sequence of step functions]
kind: theorem
field: measure-theory
msc: ["28A25", "26A42"]
level: undergrad
summary: 계단함수의 열이 점마다 감소하며 모든 점에서 0 으로 수렴하면 모든 항이 0 이상이고 적분의 수열도 0 으로 수렴한다는 것을, 집합마다 조각을 고르지 않고 표준 조각열과 길이의 가산 가법성으로 증명한다.
requires: [set, subset, set-operations, function, recursion-theorem, mathematical-induction, archimedean-property, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, monotone-convergence-theorem, finite-sum-of-reals, pointwise-convergence, sequence-of-sets, indicator-function, pairing-of-natural-numbers, extended-nonnegative-reals, series-in-extended-nonnegative-reals, nonnegative-double-series, step-function, countable-additivity-of-length]
proof: full
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: 2절 Daniell Spaces, Definition 2.2 (p.1–2), Theorem 2.6 (p.3–4)
    checked: original
    note: "출처 Definition 2.2(p.1–2)의 조건 II 는 U 의 함수열이 감소하고 모든 점에서 0 으로 수렴하면 적분이 0 으로 수렴한다는 것이고, 음이 아님을 가정하지 않는다. 출처 Theorem 2.6(p.3–4)은 음이 아닌 계단함수(출처의 simple function)의 감소열에 대해 이것을 증명한다. 이 항목의 (1)은 음이 아님이 다른 가정에서 나온다는 것이고, (2)는 Theorem 2.6 의 N = 1 판이다. 증명의 뼈대(적분의 극한을 양수라 가정하고, 높이 α 아래의 집합 A_n 과 그 차 B_n 으로 [c, d) 를 서로소로 나누고, Lemma 2.5 로 길이의 합을 얻은 뒤, 꼬리가 작은 번호에서 함수를 둘로 나누어 모순을 끌어내는 것)는 출처와 같다. 출처는 B_n 이 'finite unions of disjoint semi-open intervals, say B_n = I_{n,1} ∪ ⋯ ∪ I_{n,k_n}' 이라 적어 n 마다 분해를 하나 잡고, 그 구간들을 I_{1,1}, …, I_{1,k_1}, …, I_{n,1}, …, I_{n,k_n}, … 의 차례로 적어 Lemma 2.5 에 넣는다. 이 항목은 n 마다 step-function 의 (7)의 표준 조각열을 쓰고, 짝짓기 함수 π 의 역함수로 한 줄로 늘어놓으며, 두 겹의 합을 nonnegative-double-series 의 (2)로 바꾼다. 출처의 극한의 이름 ε 은 이 항목에서 L 로, 출처의 max|f_1| 은 step-function 의 (2)의 (ii)가 주는 상계에 1 을 더한 K 로 바꾸었다(f_1 이 영함수일 때에도 K 가 양수이게)."
  - ref: lebl-basic-analysis
    loc: 6.2.1 소절, Example 6.2.1 (p.234); 6.2.2 소절, Example 6.2.3 (p.236); 6.2.5 소절, Exercise 6.2.9, 6.2.10 (p.244)
    checked: original
    note: "출처 Exercise 6.2.10(p.244)은 디니 정리, 곧 [a, b] 위의 연속함수열이 0 ≤ f_{n+1} ≤ f_n 이고 점마다 0 으로 가면 고르게 0 으로 간다는 것을 묻는다. 이 항목과 가정의 꼴(점마다 감소하고 점마다 0 으로 간다)이 같고 결론은 적분에 대한 것이다. 반례 '감소하지 않는 열의 예'와 확인 질문 '0 이상 n 미만의 칸에서 1/n 이고 나머지에서 0 인 계단함수열의 적분은 무엇이고, (2)가 쓰이지 않는 까닭은?'은 출처 Example 6.2.3(p.236, 0 < x < 1/n 에서 n − n²x 이고 나머지에서 0 인 함수열이 점마다 0 으로 가지만 적분은 모두 1/2 이다)과 같은 결론(점마다 0 으로 가지만 적분이 0 으로 가지 않는 열)을 보이는 예이고, Exercise 6.2.9(p.244)는 적분이 ∞ 로 가는 그런 열을 찾으라고 한다. 예시 '오른쪽 끝으로 좁아지는 칸'은 받침이 한 점 쪽으로 좁아지는 열이라는 점에서 출처 Example 6.2.1(p.234)의 1 − nx 꼴의 열과 모양이 비슷하다(출처의 열은 0 에서 1 로 간다)."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
계단함수, 그 적분 $\int_{\mathbb{R}}$, $[a, b)$와 길이, 표준 조각열은 [[step-function|계단함수와 그 적분]]의 것이다. $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열과 $x$에서의 값의 수열 $(\varphi_n(x))$는 [[pointwise-convergence|사상의 열과 점별 수렴]]의 것이고, 실수열의 수렴과 단조감소는 [[limit-of-sequence|수열의 극한 항목]]과 [[sequence]]의 것이다. 아래에서 $(\varphi_n)$은 $\mathbb{R}$에서 $\mathbb{R}$로의 사상의 열로서 모든 자연수 $n$에서 $\varphi_n$이 계단함수이고, 다음 두 가정을 만족한다.

- (가정 1) 모든 자연수 $n$과 모든 실수 $x$에서 $\varphi_{n+1}(x) \le \varphi_n(x)$이다.
- (가정 2) 모든 실수 $x$에서 실수열 $(\varphi_n(x))$가 $0$으로 수렴한다.

그러면 다음이 성립한다.

1. (모든 항이 0 이상) 모든 자연수 $n$과 모든 실수 $x$에서 $0 \le \varphi_n(x)$이다.
2. (적분의 극한) $n$번째 항이 $\int_{\mathbb{R}} \varphi_n$인 실수열은 단조감소하고 $0$으로 수렴한다. 곧 $\lim_{n \to \infty} \int_{\mathbb{R}} \varphi_n = 0$이다.
:::

:::english
Step functions, their integrals $\int_{\mathbb{R}}$, the sets $[a, b)$ with their lengths, and standard piece sequences are as in the entry on step functions. Sequences of maps from $\mathbb{R}$ to $\mathbb{R}$ and the value sequence $(\varphi_n(x))$ at $x$ are as in the entry on sequences of maps and pointwise convergence, and convergence and monotone decrease of real sequences are as in the corresponding entries. Below, $(\varphi_n)$ is a sequence of maps from $\mathbb{R}$ to $\mathbb{R}$ such that $\varphi_n$ is a step function for every natural number $n$ and the following two hypotheses hold.

- (Hypothesis 1) $\varphi_{n+1}(x) \le \varphi_n(x)$ for every natural number $n$ and every real $x$.
- (Hypothesis 2) For every real $x$, the real sequence $(\varphi_n(x))$ converges to $0$.

Then the following hold.

1. (All terms are nonnegative) $0 \le \varphi_n(x)$ for every natural number $n$ and every real $x$.
2. (Limit of the integrals) The real sequence whose $n$-th term is $\int_{\mathbb{R}} \varphi_n$ is monotonically decreasing and converges to $0$. That is, $\lim_{n \to \infty} \int_{\mathbb{R}} \varphi_n = 0$.
:::

## 직관

물이 빠지는 웅덩이를 떠올려 봅시다. 시간이 갈수록 어느 곳의 수위도 올라가지 않고(가정 1), 어느 곳이든 결국 물이 다 빠진다면(가정 2), 웅덩이에 남은 물의 양도 $0$으로 줄어야 할 것 같습니다. 비유에서 수위는 $\varphi_n(x)$, 남은 물의 양은 $\int_{\mathbb{R}} \varphi_n$, 시간은 번호 $n$입니다. 비유와 다른 점도 있습니다. 가정 2는 점마다 따로 말하는 것이어서, 물이 빠지는 빠르기가 점마다 다를 수 있습니다. 모든 점에서 한꺼번에 낮아진다는 보장이 없으므로 결론은 당연하지 않습니다.

증명은 결론이 틀렸다고, 곧 적분이 어떤 양수 $L$ 아래로 내려가지 않는다고 가정합니다. $[c, d)$를 $\varphi_1$이 그 밖에서 $0$인 칸이라 하면, $[c, d)$에서 높이 $\alpha$보다 낮아진 점의 집합 $A_n$은 $n$에 따라 커지고, 그 합집합은 $[c, d)$ 전체입니다. 이때 $A_n$의 길이가 $d - c$에 가까워진다는 것이 [[countable-additivity-of-length|길이의 가산 가법성]]이고, 이것이 이 정리의 핵심입니다. 그러면 어느 번호 $N$에서 $\varphi_N$은 길이가 $d - c$에 가까운 $A_N$ 위에서는 $\alpha$보다 낮고, 남은 짧은 부분 위에서는 $\varphi_1$의 상계를 넘지 않아 적분이 $L$보다 작아집니다.

가산 가법성을 쓰려면 $A_n$의 차 $A_n - A_{n-1}$을 $[a, b)$ 꼴의 조각들로 나누어 늘어놓아야 합니다. 이 조각들을 $n$마다 하나씩 고르지 않고, [[step-function|계단함수]]의 표준 조각열로 정합니다.

## 증명

:::idea
극한 $L$이 양수라 가정한다. 높이 $\alpha = L/(2(d - c))$ 아래의 집합 $A_n$은 증가하며 $[c, d)$를 채우고, 그 차들의 표준 조각열을 짝짓기 함수로 늘어놓으면 가산 가법성에 의해 $A_n$의 길이가 $d - c$로 간다. 길이가 $d - c$에 충분히 가까운 번호에서 $\varphi_N$의 적분이 $L$보다 작아져 모순이다.
:::

:::hint
$\varphi_N = \varphi_N \chi_{A_N} + \varphi_N (1 - \chi_{A_N})$으로 나누면, 앞의 것은 $\alpha\chi_{[c, d)}$ 이하이고 뒤의 것은 $K(\chi_{[c, d)} - \chi_{A_N})$ 이하이다.
:::

:::hint
$\chi_{A_N}$의 적분은 $A_1, A_2 - A_1, \dots, A_N - A_{N-1}$의 지시함수의 적분의 합이다.
:::

:::proof
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, "계단함수 항목"은 [[step-function]], "합 항목"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]이다. 먼저 가정 1과 $k$에 관한 [[mathematical-induction|수학적 귀납법]]으로, $n \le k$인 모든 자연수 $n$, $k$와 모든 실수 $x$에서 $\varphi_k(x) \le \varphi_n(x)$이다(순서 성질 (1)의 (v)).

**(1)** 어떤 $n$과 $x$에서 $\varphi_n(x) < 0$이라 하자. $\varepsilon = -\varphi_n(x)$는 양수이므로 가정 2와 [[limit-of-sequence|수열의 극한]]의 정의에 의해 자연수 $M$이 있어 $M \le k$인 모든 $k$에서 $|\varphi_k(x)| < \varepsilon$이다. $k = \max\{n, M\}$이면 $\varphi_k(x) \le \varphi_n(x) = -\varepsilon$이므로 $\varepsilon \le -\varphi_k(x) \le |\varphi_k(x)|$이 되어([[absolute-value|절댓값]]의 (6)과 순서 성질 (3)의 (iii)) 모순이다.

**(2)** 계단함수 항목의 (6)의 (ii)와 (1)에 의해 모든 $n$에서 $\int_{\mathbb{R}} \varphi_{n+1} \le \int_{\mathbb{R}} \varphi_n$이고 $0 \le \int_{\mathbb{R}} \varphi_n$이다. 따라서 이 수열은 단조감소하고 아래로 유계이므로, [[monotone-convergence-theorem|단조 수렴 정리]]의 (2)에 의해 그 하한 $L$로 수렴하고, $0$은 하계이므로 $0 \le L$이며, 모든 $n$에서 $L \le \int_{\mathbb{R}} \varphi_n$이다. $0 < L$이라 가정해 모순을 끌어낸다.

*준비.* 계단함수 항목의 (2)에 의해 $\varphi_1$은 어떤 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 갖는다. $c = t_0$, $d = t_m$으로 두면 $c < d$이고, $x \notin [c, d)$이면 $\varphi_1(x) = 0$이다. 그 (2)의 (ii)의 $\sum_{j=1}^{m} |v_j|$에 $1$을 더한 수를 $K$로 두면 $K$는 양수이고 모든 $x$에서 $\varphi_1(x) \le K$이다. 모든 $n$과 $x$에서 $0 \le \varphi_n(x) \le \varphi_1(x)$이므로, $x \notin [c, d)$이면 $\varphi_n(x) = 0$이고 모든 $x$에서 $\varphi_n(x) \le K$이다. 이제
$$
\alpha = \frac{L}{2(d - c)}, \qquad \delta = \frac{L}{2K}
$$
로 두면 둘 다 양수이다.

*집합 $A_n$.* 자연수 $n$마다 $A_n = \{x \in [c, d) : \varphi_n(x) < \alpha\}$로 두고 $n$번째 항이 $A_n$인 집합열을 생각한다([[sequence-of-sets|집합열]]의 정의). $B'_n = \{x \in \mathbb{R} : \varphi_n(x) \ge \alpha\}$로 두면, $\alpha > 0$이고 $[c, d)$ 밖에서 $\varphi_n = 0$이므로 $B'_n \subseteq [c, d)$이고 $A_n = [c, d) - B'_n$이다. [[indicator-function|지시함수]]의 (3)과 (2), (4)에 의해 $\chi_{A_n}(x) = \chi_{[c, d)}(x)\bigl(1 - \chi_{B'_n}(x)\bigr) = \chi_{[c, d)}(x) - \chi_{B'_n}(x)$이다(뒤의 등식은 $\chi_{[c, d)}\chi_{B'_n} = \chi_{[c, d) \cap B'_n} = \chi_{B'_n}$이기 때문이다). 계단함수 항목의 (8), (4)의 (iii), (5)에 의해 $\chi_{A_n}$은 계단함수이다. 가정 1에 의해 $\varphi_n(x) < \alpha$이면 $\varphi_{n+1}(x) < \alpha$이므로 $(A_n)$은 증가한다. 또 $x \in [c, d)$이면 가정 2와 수열의 극한의 정의를 $\varepsilon = \alpha$에 쓰면 $|\varphi_n(x)| < \alpha$인 $n$이 있으므로 $x \in A_n$이다. 따라서 집합열의 (1)에 의해 $\bigcup_{n=1}^{\infty} A_n = [c, d)$이다.

*서로소인 차.* 집합열의 (7)의 $E_n = A_n - \bigcup_{i=1}^{n-1} A_i$를 쓰면, 그 (7)과 (6)에 의해 $(E_n)$은 서로소이고, $E_1 = A_1$, $n \ge 2$이면 $E_n = A_n - A_{n-1}$이며, $\bigcup_{n=1}^{\infty} E_n = [c, d)$이고, 모든 자연수 $N$에서 $\bigcup_{n=1}^{N} E_n = \bigcup_{n=1}^{N} A_n = A_N$이다. $n \ge 2$이면 $A_{n-1} \subseteq A_n$이므로 위와 같은 계산으로 $\chi_{E_n} = \chi_{A_n} - \chi_{A_{n-1}}$이고, 계단함수 항목의 (5)에 의해 모든 $\chi_{E_n}$은 계단함수이다. 지시함수의 (6)의 (i)과 계단함수 항목의 (6)의 (i)에 의해 모든 자연수 $N$에서
$$
\int_{\mathbb{R}} \chi_{A_N} = \sum_{n=1}^{N} \int_{\mathbb{R}} \chi_{E_n}
$$
이다. 이 수를 $s_N$이라 하자.

*조각을 늘어놓기.* 자연수 $n$마다 $E_n$의 표준 조각열을 $(p_{n,i})_i$, $(q_{n,i})_i$로 쓴다. 계단함수 항목의 (7)의 (ii)에 의해 이것은 $E_n$만으로 정해지므로 $p_{n,i}$와 $q_{n,i}$는 $n$과 $i$에 대한 이미 정해진 실수이다([[recursion-theorem|재귀 정리]]의 (1)). 짝짓기 함수 $\pi$와 그 역함수의 성분 $\kappa_1$, $\kappa_2$([[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 (1))로 자연수 $k$마다
$$
c_k = p_{\kappa_1(k), \kappa_2(k)}, \qquad d_k = q_{\kappa_1(k), \kappa_2(k)}
$$
로 둔다. 모든 $k$에서 $c_k \le d_k$이다. $k \ne k'$이면 짝짓기 함수의 (1)에 의해 $(\kappa_1(k), \kappa_2(k)) \ne (\kappa_1(k'), \kappa_2(k'))$이다. 첫 성분이 같으면 같은 $E_n$의 서로 다른 조각이므로 서로소이고, 첫 성분이 다르면 두 조각이 서로소인 두 $E_n$에 각각 포함되므로 서로소이다. 따라서 $k$번째 항이 $[c_k, d_k)$인 집합열은 서로소이다. 또 그 합집합은 $[c, d)$이다. 각 조각은 어떤 $E_n \subseteq [c, d)$에 포함되고, 거꾸로 $x \in [c, d)$이면 $x \in E_n$인 $n$이 있고 $x \in [p_{n,i}, q_{n,i})$인 $i$가 있으므로 $k = \pi(n, i)$에서 $x \in [c_k, d_k)$이기 때문이다(집합열의 (1)). [[countable-additivity-of-length|길이의 가산 가법성]]의 (3)에 의해
$$
\sum_{k=1}^{\infty} (d_k - c_k) = d - c
$$
이다. 왼쪽은 $(n, i)$에서의 값이 $q_{n,i} - p_{n,i}$인 이중첨수 원소열을 $\pi$로 한 줄로 늘어놓은 원소열의 합이므로, [[nonnegative-double-series|0 이상인 이중급수]]의 (2)와 계단함수 항목의 (7)의 (ii)에 의해
$$
\begin{aligned} d - c &= \sum_{n=1}^{\infty} \sum_{i=1}^{\infty} (q_{n,i} - p_{n,i}) \\ &= \sum_{n=1}^{\infty} \int_{\mathbb{R}} \chi_{E_n} \end{aligned}
$$
이다. 곧 $[0, \infty]$의 합의 정의에 의해 $d - c$는 부분합 $s_N$들의 상한이다.

*모순.* $b = \max\{d - c - \delta, 0\}$으로 두면 $b$는 $[0, \infty)$의 원소이고 $b < d - c$이다($\delta > 0$이고 $d - c > 0$이다). [[extended-nonnegative-reals]]의 (5)의 (v)에 의해 $b < s_N$인 자연수 $N$이 있고, 그러면 $d - c - \delta \le b < s_N$이다. $g(x) = \varphi_N(x)\chi_{A_N}(x)$, $h(x) = \varphi_N(x) - g(x)$로 정한 함수 $g$, $h$는 계단함수 항목의 (5)에 의해 계단함수이고 $\varphi_N = g + h$이다. 모든 실수 $x$에서 다음이 성립한다.

- $g(x) \le \alpha\chi_{[c, d)}(x)$이다. $x \in A_N$이면 $g(x) = \varphi_N(x) < \alpha$이고 $A_N \subseteq [c, d)$이며, $x \notin A_N$이면 $g(x) = 0$이기 때문이다.
- $h(x) \le K\bigl(\chi_{[c, d)}(x) - \chi_{A_N}(x)\bigr)$이다. $x \in A_N$이면 양변이 $0$이고, $x \in [c, d) - A_N$이면 $h(x) = \varphi_N(x) \le K$이며, $x \notin [c, d)$이면 $\varphi_N(x) = 0$이어서 양변이 $0$이기 때문이다.

계단함수 항목의 (6)의 (i), (ii)와 (4)의 (iii)에 의해
$$
\begin{aligned} \int_{\mathbb{R}} \varphi_N &= \int_{\mathbb{R}} g + \int_{\mathbb{R}} h \\ &\le \alpha(d - c) \\ &\quad + K\bigl((d - c) - s_N\bigr) \\ &< \frac{L}{2} + K\delta = L \end{aligned}
$$
이다. 이것은 $L \le \int_{\mathbb{R}} \varphi_N$과 모순이다. 따라서 $L = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[오른쪽 끝으로 좁아지는 칸]
$\varphi_n = \chi_{[1 - 1/n, 1)}$이라 합시다. $n = 1$이면 $\chi_{[0, 1)}$, $n = 2$이면 $\chi_{[1/2, 1)}$입니다. $1 - 1/n$은 증가하므로 칸이 줄어들어 가정 1이 성립합니다. $x < 1$이면 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 $1/n < 1 - x$인 $n$이 있고 그 뒤로 $\varphi_n(x) = 0$이며, $1 \le x$이면 처음부터 $\varphi_n(x) = 0$이므로 가정 2도 성립합니다. 적분은 $1/n$이고 $0$으로 갑니다. 그런데 모든 $n$에서 $\varphi_n$의 값 가운데 가장 큰 것은 $1$입니다. 이 예처럼 함수의 값이 모든 점에서 한꺼번에 작아지지 않아도 적분은 $0$으로 갈 수 있습니다.
:::

:::counterexample[감소하지 않는 열의 예]
$\varphi_n = \chi_{[n, n+1)}$은 모든 점에서 $0$으로 수렴합니다. $x$보다 큰 $n$부터는 $\varphi_n(x) = 0$이기 때문입니다. 그러나 적분은 늘 $1$입니다. 이 열은 가정 1을 만족하지 않습니다. 예를 들어 $\varphi_1(5/2) = 0 < 1 = \varphi_2(5/2)$입니다. 칸이 오른쪽으로 옮겨 가며 사라지는 것은 감소가 아닙니다.
:::

## 확인 질문

:::check[0 이상 n 미만의 칸에서 1/n 이고 나머지에서 0 인 계단함수열의 적분은 무엇이고, (2)가 쓰이지 않는 까닭은?]
이 열은 $\varphi_n = (1/n)\chi_{[0, n)}$입니다. 적분은 계단함수 항목의 (4)의 (iii)과 (6)의 (i)에 의해 $(1/n) \cdot n = 1$이어서 $0$으로 가지 않습니다. 모든 $x$에서 $\varphi_n(x)$는 $0$으로 수렴하지만($0 \le \varphi_n(x) \le 1/n$), 가정 1이 깨집니다. $x = 3/2$에서 $\varphi_1(3/2) = 0$이고 $\varphi_2(3/2) = 1/2$입니다.
:::

:::check[가정 1과 가정 2를 만족하는 계단함수열에서 $\varphi_3(x) = -1$인 점이 있을 수 있는가?]
없습니다. (1)에 의해 모든 항이 모든 점에서 $0$ 이상입니다. 그런 점이 있다면 그 점에서 $\varphi_4, \varphi_5, \dots$가 모두 $-1$ 이하여서 $0$으로 수렴할 수 없습니다.
:::
