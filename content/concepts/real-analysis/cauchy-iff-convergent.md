---
title: 코시 수열은 수렴한다
title_en: A Sequence Converges if and only if It Is Cauchy
aliases: [코시 판정법, 코시 완비성, 실수의 완비성, Cauchy criterion, Cauchy completeness, Cauchy sequences converge]
kind: theorem
field: real-analysis
msc: ["40A05", "26A03"]
level: undergrad
summary: 실수의 수열이 코시 수열인 것은 정확히 수렴할 때이다. 또 코시 수열의 부분수열 하나가 L 로 수렴하면 수열 전체가 L 로 수렴한다.
requires: [mathematical-induction, natural-numbers-are-infinite, recursion-theorem, real-number-arithmetic, order-properties-of-reals, archimedean-property, square-root-exists, absolute-value, triangle-inequality, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, geometric-sequence-limit, limit-of-sum-and-product, subsequence, bolzano-weierstrass-theorem, cauchy-sequence]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.4절 Theorem 2.4.5 와 그 증명, Remark 2.4.6 과 그 뒤 문단 (p.85)
    checked: original
    note: "출처의 Theorem 2.4.5(p.85)는 실수열이 코시 수열인 것은 정확히 수렴할 때라는 것이고, 이 항목의 (1)이다. 쉬운 방향(수렴하면 코시)은 cauchy-sequence 의 (3)에 두었다. 출처는 어려운 방향을 이렇게 증명한다. 코시 수열은 유계이므로 상극한 a 와 하극한 b 가 있고, Theorem 2.3.4 로 a 와 b 로 수렴하는 부분수열 둘을 잡은 뒤, M := max{M_1, M_2, M_3} 과 세 항의 삼각부등식으로 모든 ε 에서 |a − b| < ε 을 얻어 a = b 로 하고, Proposition 2.3.5 로 수렴을 얻는다. 이 항목은 다른 경로를 썼다. 볼차노–바이어슈트라스 정리로 수렴하는 부분수열 하나를 잡고, 코시 조건으로 수열 전체가 그 극한으로 수렴함을 보였다((2)). 이 경로는 두 수의 max 하나와 두 항의 삼각부등식만 쓴다. (2)는 출처에 명제로 없다(검색한 범위). 출처의 Remark 2.4.6(p.85)은 이 정리의 진술이 실수의 완비성을 정의하는 데 쓰이기도 한다고 적고, 모든 코시 수열이 그 집합 안의 무언가로 수렴하는 집합을 Cauchy-complete 라 부르며, 최소상계 성질을 가진 ℝ 이 Cauchy-complete 라는 것을 위에서 증명했다고 적는다. 이 항목은 '코시 완비성'이라는 이름만 그 Remark 를 따랐다. 출처는 그 뒤 문단(p.85)에서 이웃한 항의 차가 0 으로 가도 코시 조건보다 약하다는 것을 조화급수의 부분합으로 예고한다. 반례 '√n'은 같은 점을 다른 수열로 보인 것이다. 예시 '이웃한 항의 차가 2⁻ⁿ 이하인 수열'은 출처의 연습문제 2.4.2(|x_{n+1} − x_n| ≤ C|x_n − x_{n−1}| 이면 코시 수열)와 같은 발상이다. 확인 질문은 출처에 없다(검색한 범위). 이 항목은 유리수만으로는 이 정리가 성립하지 않는다는 것을 다루지 않는다."
status: source-checked
added: 2026-11-17
---

:::statement
수열은 [[sequence]]의 것이고, 수렴과 기호 $\lim$은 [[limit-of-sequence]]과 [[limit-is-unique]]의 것이며, 첨자열과 부분수열은 [[subsequence]]의 것이고, 코시 수열은 [[cauchy-sequence]]의 것이다. $(x_n)$을 수열이라 하자.

1. $(x_n)$이 코시 수열인 것은 정확히 $(x_n)$이 수렴할 때이다. 이 가운데 "코시 수열이면 수렴한다"는 성질을 실수의 **코시 완비성**(Cauchy completeness)이라 한다.
2. (부분수열 하나로 극한 정하기) $(x_n)$이 코시 수열이고, 어떤 첨자열 $(p_k)$에 대하여 $(x_{p_k})$가 실수 $L$로 수렴하면, $(x_n)$은 $L$로 수렴한다.
:::

:::english
Sequences are those of the entry on sequences, convergence and the symbol $\lim$ are those of the entries on the limit of a sequence and on uniqueness of limits, index sequences and subsequences are those of the entry on subsequences, and Cauchy sequences are those of the entry on Cauchy sequences. Let $(x_n)$ be a sequence.

1. $(x_n)$ is a Cauchy sequence exactly when $(x_n)$ converges. The property "every Cauchy sequence converges" is called the **Cauchy completeness** of the real numbers.
2. (Determining the limit by one subsequence) If $(x_n)$ is a Cauchy sequence and, for some index sequence $(p_k)$, $(x_{p_k})$ converges to a real number $L$, then $(x_n)$ converges to $L$.
:::

## 직관

코시 수열은 항들이 서로 가까워지는 수열이고, 수렴하는 수열은 어떤 수 가까이 모이는 수열입니다. 수렴하면 서로 가까워진다는 쪽은 쉽습니다([[cauchy-sequence|코시 수열]]의 (3)). 이 정리의 내용은 그 거꾸로, 서로 가까워지기만 하면 모이는 수가 실수 안에 반드시 있다는 것입니다.

증명은 두 단계입니다. 코시 수열은 유계이므로 [[bolzano-weierstrass-theorem|볼차노–바이어슈트라스 정리]]에 의해 어떤 수 $L$로 모이는 부분수열이 있습니다. 그런데 코시 수열에서는 뒤쪽의 모든 항이 서로 가까우므로, 그 부분수열의 항 하나가 $L$ 가까이에 있으면 같은 번호 이후의 다른 모든 항도 $L$ 가까이에 있게 됩니다. 이것이 (2)입니다. 줄지어 걷는 사람들이 모두 서로 가까이 걷고 있는데 그 가운데 몇 사람이 어느 문으로 다가간다면, 나머지 사람들도 그 문으로 다가가는 셈입니다.

최소상계 성질 (U)는 볼차노–바이어슈트라스 정리를 거쳐(상극한이 있다는 데에서) 쓰입니다. 이 정리가 "실수의 완비성"이라는 이름으로도 불리는 까닭입니다.

## 증명

:::idea
(2): $\varepsilon/2$에 대한 코시 조건의 번호와 부분수열의 수렴 번호 가운데 큰 것 $M$을 잡고, 부분수열의 $M$번째 항 $x_{p_M}$을 거쳐 $|x_n - L| \le |x_n - x_{p_M}| + |x_{p_M} - L|$로 누른다. (1)의 어려운 방향은 볼차노–바이어슈트라스 정리와 (2)이다.
:::

:::hint
[[subsequence|부분수열]]의 (1)에 의해 $p_M \ge M$이다. 그래서 $x_{p_M}$과 $x_n$($n \ge M$)은 둘 다 코시 조건의 번호 이후의 항이다.
:::

:::proof
"순서 성질 (1)의 (v)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호, "절댓값 (10)"은 [[absolute-value]]의 번호이다. 자연수는 양의 정수이다([[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 진술).

**2의 증명.** 양의 실수 $\varepsilon$을 잡는다. 순서 성질 (8)에 의해 $0 < \varepsilon/2$이다. $(x_n)$이 코시 수열이므로 $n \ge M_1$이고 $k \ge M_1$인 모든 자연수 $n$, $k$에서 $|x_n - x_k| < \varepsilon/2$인 자연수 $M_1$이 있다. $(x_{p_k})$가 $L$로 수렴하므로 $k \ge M_2$인 모든 자연수 $k$에서 $|x_{p_k} - L| < \varepsilon/2$인 자연수 $M_2$가 있다. $M = \max\{M_1, M_2\}$로 두면 절댓값 (10)에 의해 $M$은 $M_1$이거나 $M_2$이므로 자연수이고, $M_1 \le M$, $M_2 \le M$이다.

$n \ge M$인 자연수 $n$을 잡는다. $M \ge M_2$이므로 $|x_{p_M} - L| < \varepsilon/2$이다. [[subsequence]]의 (1)에 의해 $p_M \ge M$이므로 순서 성질 (1)의 (v)에 의해 $p_M \ge M_1$이고, 같은 이유로 $n \ge M_1$이다. 따라서 $|x_n - x_{p_M}| < \varepsilon/2$이다. [[triangle-inequality|삼각부등식]]의 (4)에 의해
$$
|x_n - L| \le |x_n - x_{p_M}| + |x_{p_M} - L| < \frac{\varepsilon}{2} + \frac{\varepsilon}{2} = \varepsilon
$$
이다(마지막 부등식은 순서 성질 (2)의 (iv)와 (1)의 (v)). $\varepsilon$은 임의의 양의 실수였으므로 $(x_n)$은 $L$로 수렴한다.

**1의 증명.** $(x_n)$이 수렴하면 [[cauchy-sequence]]의 (3)에 의해 코시 수열이다. 거꾸로 $(x_n)$이 코시 수열이면 [[cauchy-sequence]]의 (2)에 의해 유계이고, [[bolzano-weierstrass-theorem|볼차노–바이어슈트라스 정리]]의 (1)에 의해 첨자열 $(p_k)$가 있어 $(x_{p_k})$가 수렴한다. 그 극한을 $L$이라 하면 (2)에 의해 $(x_n)$은 $L$로 수렴한다. $\blacksquare$
:::

## 예시와 반례

:::example[이웃한 항의 차가 $(2^n)^{-1}$ 이하인 수열]
자연수 $n$에 대하여 $u_n = (2^n)^{-1}$로 둡니다([[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 $0 < 2^n$). 수열 $(x_n)$이 모든 자연수 $n$에서 $|x_{n+1} - x_n| \le u_n$을 만족하면 $(x_n)$은 수렴합니다. 극한이 무엇인지는 몰라도 됩니다.

먼저 $2^{k+1} = 2^k \cdot 2$이므로 [[real-number-arithmetic]]의 (K12)의 (vi)에 의해 $u_{k+1} = u_k \cdot 2^{-1}$, 곧 $u_k = 2u_{k+1}$입니다. 자연수 $n$을 고정하고, $k \ge n$인 모든 정수 $k$에서 $|x_k - x_n| \le 2u_n - 2u_k$임을 시작점이 $n$인 귀납법([[mathematical-induction]])으로 봅니다. $k = n$이면 양변이 $0$입니다. $k \ge n$에서 성립하면 [[triangle-inequality|삼각부등식]]의 (4)에 의해
$$
|x_{k+1} - x_n| \le |x_{k+1} - x_k| + |x_k - x_n| \le u_k + 2u_n - 2u_k = 2u_n - u_k = 2u_n - 2u_{k+1}
$$
입니다. $0 < u_k$이므로 $k \ge n$이면 $|x_k - x_n| \le 2u_n$입니다.

[[power-of-a-real-number|실수의 거듭제곱]]의 (3)에 의해 $u_n = (2^{-1})^n$이고 $|2^{-1}| < 1$이므로, [[geometric-sequence-limit|등비수열의 극한]]의 (1)에 의해 $(u_n)$은 $0$으로 수렴합니다. 양수 $\varepsilon$이 주어지면 $n \ge M$이면 $u_n = |u_n - 0| < \varepsilon/2$인 자연수 $M$이 있습니다. $n \ge M$, $k \ge M$일 때 $k \ge n$이면 $|x_k - x_n| \le 2u_n < \varepsilon$이고, $n > k$이면 같은 부등식을 $n$과 $k$를 바꾸어 써서 $|x_n - x_k| \le 2u_k < \varepsilon$입니다. [[absolute-value|절댓값]]의 (3)에 의해 $|x_n - x_k| = |x_k - x_n|$이므로 두 경우 모두 $|x_n - x_k| < \varepsilon$입니다. 따라서 $(x_n)$은 코시 수열이고, (1)에 의해 수렴합니다.

예컨대 $x_1 = 0$이고 $x_{n+1} = x_n + (-1)^n u_n$인 수열([[recursion-theorem|재귀 정리]]로 정해집니다)은 [[absolute-value|절댓값]]의 (4)와 거듭제곱의 (4), (5)에 의해 $|x_{n+1} - x_n| = u_n$이므로 수렴합니다.
:::

:::counterexample[이웃한 항의 차만 작아지는 $\sqrt{n}$]
$x_n = \sqrt{n}$([[square-root-exists|제곱근의 존재]])으로 둡니다. 이웃한 항의 차는 작아집니다. $(\sqrt{n+1} - \sqrt{n})(\sqrt{n+1} + \sqrt{n}) = (n + 1) - n = 1$이고 $0 < \sqrt{n} < \sqrt{n+1}$이므로 $x_{n+1} - x_n = (\sqrt{n+1} + \sqrt{n})^{-1}$이며, $0 < \sqrt{n} < \sqrt{n+1} + \sqrt{n}$이어서 [[order-properties-of-reals]]의 (6)의 (ii)에 의해 $0 < x_{n+1} - x_n < (\sqrt{n})^{-1}$입니다. 양수 $\varepsilon$이 주어지면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $\varepsilon^{-1}\varepsilon^{-1} < M$인 자연수 $M$이 있고, $n \ge M$이면 제곱근의 존재 (2)에 의해 $\varepsilon^{-1} = \sqrt{\varepsilon^{-1}\varepsilon^{-1}} < \sqrt{n}$이므로 $|x_{n+1} - x_n| < (\sqrt{n})^{-1} < \varepsilon$입니다.

그러나 이 수열은 수렴하지 않습니다. 실수 $B$가 주어지면 아르키메데스 성질의 (1)에 의해 $B < N$인 자연수 $N$이 있고, $NN$은 자연수이며 제곱근의 존재 (2)에 의해 $x_{NN} = \sqrt{NN} = N > B$입니다. 곧 $(x_n)$은 유계가 아니므로 [[cauchy-sequence]]의 (2)에 의해 코시 수열이 아니고, (1)에 의해 발산합니다. 코시 조건의 두 번호 $n$, $k$를 "$k = n + 1$"로 묶으면 조건이 약해져 이 정리가 성립하지 않습니다.
:::

## 확인 질문

:::check[코시 수열 $(x_n)$에서 $k$번째 항이 $x_{2k}$인 부분수열이 $3$으로 수렴하면 $(x_n)$은 어디로 수렴하는가?]
$3$으로 수렴합니다. $k$에서의 값이 $2k$인 함수는 첨자열이므로([[subsequence]]의 (2)) (2)에 의해 $\lim_{n \to \infty} x_n = 3$입니다.
:::

:::check[두 코시 수열 $(x_n)$, $(y_n)$의 합, 곧 $n$번째 항이 $x_n + y_n$인 수열은 코시 수열인가?]
그렇습니다. (1)에 의해 두 수열은 수렴하고, [[limit-of-sum-and-product|극한의 사칙연산]]의 (1)에 의해 합도 수렴하므로, (1)에 의해 합은 코시 수열입니다.
:::
