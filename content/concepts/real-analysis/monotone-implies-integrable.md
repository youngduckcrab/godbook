---
title: 단조함수의 적분가능성
title_en: Monotone Functions Are Integrable
aliases: [단조함수, 단조인 함수, 단조함수는 적분가능하다, monotone functions are Riemann integrable]
kind: theorem
field: real-analysis
msc: ["26A42"]
level: undergrad
summary: "단조증가이거나 단조감소인 함수를 단조함수라 한다. [a, b] 위의 단조함수는 유계이고, 작은 구간마다 하한과 상한이 양 끝점의 값이며, n 등분 균등 분할에서 상합과 하합의 차가 |f(b) − f(a)|(b − a)/n 이므로 리만 적분가능하다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, archimedean-property, upper-bound-and-supremum, real-valued-function, bounded-function, interval, sequence, derivative-and-monotonicity, finite-sum-of-reals, linearity-and-order-of-finite-sums, telescoping-sum, partition-of-an-interval, uniform-partition, darboux-sums, riemann-integral, integrability-criterion]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.2절(5.2.4 소절) Proposition 5.2.11 과 그 앞 문단 (p.197); 5.2.5 소절 연습문제 5.2.14 (p.199); 3.6절 Definition 3.6.1 과 그 뒤 문단 (p.149), 3.6.3 소절 연습문제 3.6.1 (p.153); 5.1.2 소절 Example 5.1.14 (p.187–188)
    checked: original
    note: "(4)는 출처의 Proposition 5.2.11 이다. 출처는 증명을 연습문제 5.2.14 a)(증가함수, 힌트: 균등 분할)와 b)(a)를 써서 감소함수)로 돌린다. 출처의 b)는 감소함수를 a)로 돌리라고 하지만, 이 항목은 −f 의 다르부 합을 아직 쓸 수 없어(선형성은 뒤 단원) 단조감소를 따로 증명한다. (1)의 '단조함수는 유계'는 출처 3.6.3 소절 연습문제 3.6.1(p.153, [0, 1] 위의 단조함수는 유계임을 보이라)을 [a, b] 로 넓힌 것이고, 출처의 Proposition 5.2.11 의 진술(p.197)은 유계를 따로 말하지 않는다. 출처 3.6 절 Definition 3.6.1 뒤 문단(p.149)은 'If a function is either increasing or decreasing, we say it is monotone' 이라 하고, 이 항목의 '단조'의 정의와 같다. 단조증가와 단조감소는 해석학 입문 derivative-and-monotonicity 의 정의를 쓴다. (2)의 '작은 구간의 하한·상한이 끝점의 값'과 (3)의 망원 합은 출처 Example 5.1.14(p.187–188, 감소함수 1/(1 + x) 에서 m_i, M_i 가 끝점의 값이고 균등 분할에서 U − L 이 망원 합으로 계산된다)와 같은 발상이다. 예시 '정수 부분 함수' 의 함수(x 이하인 가장 큰 정수)는 출처 3.6 절 Example 3.6.5(p.151)가 ⌊x⌋ 로 쓰는 함수이다. 반례 '왼쪽 끝이 빠진 구간 위의 −1/x' 의 함수는 유계가 아닌 단조함수의 예이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 출처 메모의 틀린 부정 주장 1건과 넘겨짚은 일반 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
실함수와 제한은 [[real-valued-function]]의 것이고, 단조증가와 단조감소는 [[derivative-and-monotonicity|도함수와 증가·감소]]의 것이다. $[a, b]$의 분할과 그 점은 [[partition-of-an-interval]]의 것이고, 균등 분할 $P_n$과 $h_n = (b - a)/n$은 [[uniform-partition]]의 것이며, 다르부 합과 $m_i$, $M_i$는 [[darboux-sums]]의 것이고, 리만 적분가능은 [[riemann-integral]]의 것이다.

**단조함수.** $S$를 $\mathbb{R}$의 부분집합이라 하자. $S$ 위의 실함수 $f$가 **단조**(monotone)인 것은 정확히 $f$가 단조증가이거나 단조감소일 때이다. 이때 $f$를 **단조함수**(monotone function)라 한다. 상수함수는 단조증가이면서 단조감소이다.

다음이 성립한다. (1)–(4)에서 $a$, $b$는 $a < b$인 실수이다.

1. (유계) $f : [a, b] \to \mathbb{R}$가 단조증가이면 $[a, b]$의 모든 $x$에서 $f(a) \le f(x) \le f(b)$이고, 단조감소이면 $f(b) \le f(x) \le f(a)$이다. 따라서 $[a, b]$ 위의 단조함수는 유계이다.
2. (작은 구간의 하한과 상한) $f : [a, b] \to \mathbb{R}$가 단조이고 $P$가 점이 $x_0, \dots, x_n$인 $[a, b]$의 분할이라 하자. $1 \le i \le n$인 모든 정수 $i$에서, $f$가 단조증가이면 $m_i = f(x_{i-1})$이고 $M_i = f(x_i)$이며, $f$가 단조감소이면 $m_i = f(x_i)$이고 $M_i = f(x_{i-1})$이다. 따라서 단조증가이면
   $$
   \begin{aligned}
   &U(P, f) - L(P, f) \\
   &\quad = \sum_{i=1}^{n} \bigl(f(x_i) - f(x_{i-1})\bigr)\Delta x_i
   \end{aligned}
   $$
   이고, 단조감소이면 같은 식에서 $f(x_i) - f(x_{i-1})$ 대신 $f(x_{i-1}) - f(x_i)$이다.
3. (균등 분할에서의 차) $f : [a, b] \to \mathbb{R}$가 단조이고 $n$이 자연수이면
   $$
   \begin{aligned}
   &U(P_n, f) - L(P_n, f) \\
   &\quad = |f(b) - f(a)|\,h_n \\
   &\quad = \frac{|f(b) - f(a)|\,(b - a)}{n}
   \end{aligned}
   $$
   이다. 단조증가이면 $|f(b) - f(a)| = f(b) - f(a)$이고, 단조감소이면 $|f(b) - f(a)| = f(a) - f(b)$이다.
4. (적분가능) $[a, b]$ 위의 단조함수는 리만 적분가능하다. 또 $[a, b] \subseteq S \subseteq \mathbb{R}$이고 $f : S \to \mathbb{R}$가 단조이면 $f$는 $[a, b]$에서 리만 적분가능하다.
5. (수열의 단조와의 일치) 수열 $(x_n)$, 곧 함수 $\mathbb{N} \to \mathbb{R}$를 $\mathbb{N}$ 위의 실함수로 보면, 위의 뜻으로 단조인 것은 정확히 [[sequence]]의 뜻으로 단조일 때이다.
:::

:::english
Real-valued functions and restrictions are as in the entry on real-valued functions, and increasing and decreasing functions are as in the entry on the derivative and monotonicity. Partitions of $[a, b]$ and their points are as in the entry on partitions of an interval; the uniform partition $P_n$ and $h_n = (b - a)/n$ are as in the entry on uniform partitions; Darboux sums and $m_i$, $M_i$ are as in the entry on Darboux sums; Riemann integrability is as in the entry on the Riemann integral.

**Monotone functions.** Let $S$ be a subset of $\mathbb{R}$. A real-valued function $f$ on $S$ is **monotone** exactly when $f$ is increasing or decreasing. Such an $f$ is called a **monotone function**. A constant function is both increasing and decreasing.

The following hold. In (1)–(4), $a$ and $b$ are real numbers with $a < b$.

1. (Boundedness) If $f : [a, b] \to \mathbb{R}$ is increasing, then $f(a) \le f(x) \le f(b)$ for all $x$ in $[a, b]$; if it is decreasing, then $f(b) \le f(x) \le f(a)$. Hence a monotone function on $[a, b]$ is bounded.
2. (Infimum and supremum on subintervals) Let $f : [a, b] \to \mathbb{R}$ be monotone and let $P$ be a partition of $[a, b]$ with points $x_0, \dots, x_n$. For every integer $i$ with $1 \le i \le n$: if $f$ is increasing, then $m_i = f(x_{i-1})$ and $M_i = f(x_i)$; if $f$ is decreasing, then $m_i = f(x_i)$ and $M_i = f(x_{i-1})$. Hence, if $f$ is increasing,
   $$
   \begin{aligned}
   &U(P, f) - L(P, f) \\
   &\quad = \sum_{i=1}^{n} \bigl(f(x_i) - f(x_{i-1})\bigr)\Delta x_i,
   \end{aligned}
   $$
   and if $f$ is decreasing, the same formula holds with $f(x_{i-1}) - f(x_i)$ in place of $f(x_i) - f(x_{i-1})$.
3. (The difference for uniform partitions) If $f : [a, b] \to \mathbb{R}$ is monotone and $n$ is a natural number, then
   $$
   \begin{aligned}
   &U(P_n, f) - L(P_n, f) \\
   &\quad = |f(b) - f(a)|\,h_n \\
   &\quad = \frac{|f(b) - f(a)|\,(b - a)}{n}.
   \end{aligned}
   $$
   If $f$ is increasing, $|f(b) - f(a)| = f(b) - f(a)$; if it is decreasing, $|f(b) - f(a)| = f(a) - f(b)$.
4. (Integrability) A monotone function on $[a, b]$ is Riemann integrable. Moreover, if $[a, b] \subseteq S \subseteq \mathbb{R}$ and $f : S \to \mathbb{R}$ is monotone, then $f$ is Riemann integrable on $[a, b]$.
5. (Agreement with monotone sequences) Viewing a sequence $(x_n)$, that is, a function $\mathbb{N} \to \mathbb{R}$, as a real-valued function on $\mathbb{N}$, it is monotone in the sense above exactly when it is monotone in the sense of the entry on sequences.
:::

## 직관

단조증가인 함수의 그래프는 오른쪽으로 가면서 내려가지 않습니다. 그래서 작은 구간 $[x_{i-1}, x_i]$에서 가장 낮은 값은 왼쪽 끝에서, 가장 높은 값은 오른쪽 끝에서 나옵니다((2)). 상합과 하합의 차, 곧 그래프 둘레의 틈은 작은 구간마다 "높이 차 × 폭"인 직사각형들의 넓이입니다. 균등 분할에서는 폭이 모두 $h_n$이므로 이 직사각형들을 옆으로 밀어 한 줄로 쌓을 수 있고, 높이 차를 모두 더하면 $f(b) - f(a)$가 됩니다(망원 합). 그래서 틈의 넓이는 $(f(b) - f(a))\,h_n$이고, $n$을 키우면 얼마든지 작아집니다.

이 논법은 $f$가 연속인지를 묻지 않습니다. 아래 예시처럼 뛰는 점이 여럿 있어도 단조이기만 하면 적분가능합니다. 반대로 단조라는 가정이 빠지면, 디리클레 함수처럼 유계이면서 적분가능하지 않은 함수가 있습니다([[riemann-integral]]의 (5)).

## 증명

:::idea
단조증가이면 작은 구간의 왼쪽 끝 값은 그 구간의 하계이면서 함숫값이므로 하한이고, 오른쪽 끝 값은 같은 이유로 상한이다. 그러면 상합과 하합의 차는 망원 합이 되어 균등 분할에서 $(f(b) - f(a))h_n$이고, 아르키메데스 성질로 $n$을 키워 판정을 쓴다.
:::

:::hint
[[darboux-sums]]의 (1)은 "작은 구간의 모든 $x$에서 $c \le f(x)$이면 $c \le m_i$"와 "$m_i \le f(x)$"를 줍니다. $c = f(x_{i-1})$로 두면 두 부등식에서 무엇이 나올까요?
:::

:::hint
$\sum_{i=1}^{n} (f(x_i) - f(x_{i-1}))h_n$에서 $h_n$을 합 밖으로 꺼내면 남는 합은 [[telescoping-sum|망원 합]]입니다.
:::

:::proof
번호만 쓴 "(1)의 (ii)" 같은 것은 [[order-properties-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 번호이며, "이 항목의 (n)"은 위 진술의 번호이다. 단조증가의 정의는 $x < y$일 때만 $f(x) \le f(y)$를 말하지만, $x = y$이면 (1)의 (iv)에 의해 $f(x) \le f(y)$이다. 그래서 단조증가이면 $x \le y$인 모든 $x$, $y$에서 $f(x) \le f(y)$이고, 단조감소이면 $x \le y$인 모든 $x$, $y$에서 $f(y) \le f(x)$이다. 이것을 (가)라 부른다. 상수함수 $f$는 모든 $x$, $y$에서 $f(x) = f(y)$이므로 (1)의 (iv)에 의해 단조증가이면서 단조감소이다.

**이 항목의 (1).** $x \in [a, b]$이면 $a \le x \le b$이므로 (가)에 의해, 단조증가이면 $f(a) \le f(x) \le f(b)$이고 단조감소이면 $f(b) \le f(x) \le f(a)$이다. 어느 경우든 $f$는 위로 유계이고 아래로 유계이므로 [[bounded-function]]의 (2)에 의해 유계이다.

**이 항목의 (2).** (1)에 의해 $f$는 유계이므로 다르부 합이 정의된다. $f$가 단조증가라 하자. $x$가 $i$번째 작은 구간의 점이면 $x_{i-1} \le x \le x_i$이므로 (가)에 의해 $f(x_{i-1}) \le f(x) \le f(x_i)$이다. [[darboux-sums]]의 (1)의 "모든 $x$에서 $c \le f(x)$이면 $c \le m_i$"를 $c = f(x_{i-1})$에 쓰면 $f(x_{i-1}) \le m_i$이고, 같은 (1)의 "$m_i \le f(x)$"를 작은 구간의 점 $x_{i-1}$([[partition-of-an-interval]]의 (2))에 쓰면 $m_i \le f(x_{i-1})$이다. (1)의 (ii)에 의해 $m_i = f(x_{i-1})$이다. 같은 방법으로 $f(x) \le f(x_i)$에서 $M_i \le f(x_i)$이고 $f(x_i) \le M_i$이므로 $M_i = f(x_i)$이다. 단조감소이면 (가)에 의해 작은 구간의 점 $x$에서 $f(x_i) \le f(x) \le f(x_{i-1})$이고, 같은 논법으로 $m_i = f(x_i)$, $M_i = f(x_{i-1})$이다.

[[darboux-sums]]의 (3)에 의해 $U(P, f) - L(P, f) = \sum_{i=1}^{n} (M_i - m_i)\Delta x_i$이고, 여기에 위의 값을 넣으면 진술의 식이 된다([[finite-sum-of-reals]]의 (4)와 [[linearity-and-order-of-finite-sums]]의 (8), 범위 안의 항이 같으면 합이 같다).

**이 항목의 (3).** [[uniform-partition]]의 (1)에 의해 $P_n$의 점은 $x_i = a + i h_n$($0 \le i \le n$)이고 모든 작은 구간의 길이는 $h_n$이며, [[partition-of-an-interval]]의 (1)에 의해 $x_0 = a$, $x_n = b$이다. $f$가 단조증가라 하자. (2)와 [[linearity-and-order-of-finite-sums]]의 (1), (8)에 의해
$$
U(P_n, f) - L(P_n, f) = \sum_{i=1}^{n} \bigl(f(x_i) - f(x_{i-1})\bigr)h_n = h_n \sum_{i=1}^{n} \bigl(f(x_i) - f(x_{i-1})\bigr)
$$
이다((K1)). $c_i = f(x_i)$($0 \le i \le n$)로 두면 [[telescoping-sum]]의 (1)에 의해 오른쪽의 합은 $c_n - c_0 = f(b) - f(a)$이다. (1)에 의해 $f(a) \le f(b)$이므로 [[absolute-value]]의 (1)과 (3)의 (i)에 의해 $|f(b) - f(a)| = f(b) - f(a)$이다. $f$가 단조감소이면 같은 계산과 [[telescoping-sum]]의 (2)에 의해 차는 $h_n(f(a) - f(b))$이고, $f(b) \le f(a)$이므로 [[absolute-value]]의 (1), (3)에 의해 $|f(b) - f(a)| = |f(a) - f(b)| = f(a) - f(b)$이다. 마지막 식은 $h_n = (b - a)/n$과 (K1), (K2)에서 나온다.

**이 항목의 (4).** $f : [a, b] \to \mathbb{R}$가 단조이면 (1)에 의해 유계이다. $d = |f(b) - f(a)|(b - a)$로 두면 [[absolute-value]]의 (2)와 (4)의 (iv)에 의해 $0 \le d$이다. 양수 $\varepsilon$이 주어지면 [[archimedean-property]]의 (2)에 의해 $d < n\varepsilon$인 자연수 $n$이 있다. (10)에 의해 $0 < n^{-1}$이므로 (4)의 (i)과 (K2), (K4), (K8)의 (iii)에 의해 $d \cdot n^{-1} < \varepsilon$이고, 이것은 (3)에 의해 $U(P_n, f) - L(P_n, f)$이다. [[integrability-criterion|리만 적분가능성의 판정]]의 (6)의 첫 문장에 의해 $f$는 적분가능하다.

$f : S \to \mathbb{R}$가 단조이고 $[a, b] \subseteq S$이면 제한 $f|_{[a, b]}$는 [[real-valued-function]]의 (6)에 의해 $[a, b]$의 모든 $x$에서 $f|_{[a, b]}(x) = f(x)$이므로, $f$와 같은 쪽으로 단조이다. 위에 의해 $f|_{[a, b]}$는 적분가능하고, [[riemann-integral]]의 (4)에 의해 $f$는 $[a, b]$에서 적분가능하다.

**이 항목의 (5).** [[derivative-and-monotonicity|도함수와 증가·감소]]의 (5)에 의해 수열은 $\mathbb{N}$ 위의 실함수로서 단조증가인 것이 정확히 [[sequence]]의 뜻으로 단조증가일 때이고 단조감소도 같다. [[sequence]]의 단조는 "단조증가이거나 단조감소"이므로 두 뜻의 단조가 같다. $\blacksquare$
:::

## 예시와 반례

:::example[정수 부분 함수]
실수 $x$마다 [[archimedean-property]]의 (4)에 의해 $n - 1 \le x < n$인 정수 $n$이 정확히 하나 있고, $n - 1$은 $x$ 이하인 정수 가운데 가장 큰 것입니다. 이 정수 $n - 1$을 $g(x)$로 정한 함수 $g : [0, 3] \to \mathbb{R}$를 봅시다([[real-valued-function]]의 (1)). $0 \le x < 1$이면 $g(x) = 0$, $1 \le x < 2$이면 $1$, $2 \le x < 3$이면 $2$이고 $g(3) = 3$입니다.

$g$는 단조증가입니다. $x < y$이면 $g(x) \le x < y$이므로 $g(x)$는 $y$ 이하인 정수이고, $g(y)$는 그런 정수 가운데 가장 큰 것이므로 $g(x) \le g(y)$입니다. (3)에 의해 $U(P_n, g) - L(P_n, g) = (3 - 0) \cdot 3/n = 9/n$이고, (4)에 의해 $g$는 $[0, 3]$에서 적분가능합니다. $g$는 $1$, $2$, $3$에서 값이 뛰지만 그것이 적분가능성을 막지 않습니다. 예컨대 $n = 3$이면 $P_3 = \{0, 1, 2, 3\}$이고 (2)에 의해 $m_i = i - 1$, $M_i = i$이므로 $L(P_3, g) = 0 + 1 + 2 = 3$, $U(P_3, g) = 1 + 2 + 3 = 6$이며 차는 $3 = 9/3$입니다.
:::

:::counterexample[왼쪽 끝이 빠진 구간 위의 −1/x]
$T = \{x \in \mathbb{R} : 0 < x \le 1\}$ 위에서 $f(x) = -x^{-1}$로 정한 함수는 단조증가입니다. $0 < x < y$이면 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $y^{-1} < x^{-1}$이고, (3)의 (iii)에 의해 $-x^{-1} < -y^{-1}$이기 때문입니다. 그러나 $f$는 아래로 유계가 아닙니다. 실수 $B$가 주어지면 $t = |B| + 1$로 둡니다. $1 \le t$이므로 $x = t^{-1}$은 $0 < x \le 1$을 만족하고($t = 1$이면 $x = 1$, $1 < t$이면 (6)의 (ii)), $f(x) = -t = -|B| - 1 < -|B| \le B$입니다([[absolute-value]]의 (6)). 정의역에 왼쪽 끝 $0$이 없어서 (1)의 "$f(a) \le f(x)$"를 쓸 수 없는 경우입니다. (1)과 (4)는 닫힌구간 $[a, b]$ 위의 함수만 다룹니다.
:::

## 확인 질문

:::check[$[a, b]$ 위의 상수함수에 (3)을 쓰면 무엇이 나오는가?]
상수함수는 단조증가이면서 단조감소이고 $f(b) = f(a)$이므로, 두 꼴 모두 $U(P_n, f) - L(P_n, f) = 0 \cdot h_n = 0$입니다. 모든 $n$에서 상합과 하합이 같습니다.
:::

:::check[단조증가인 $f$와 분할 $\{a, b\}$에 (2)를 쓰면 상합과 하합의 차는?]
$n = 1$이고 $x_0 = a$, $x_1 = b$이므로 $m_1 = f(a)$, $M_1 = f(b)$이고 차는 $(f(b) - f(a))(b - a)$입니다. 이것은 (3)의 $n = 1$인 경우($P_1 = \{a, b\}$)와 같습니다.
:::
