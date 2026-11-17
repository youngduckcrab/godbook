---
title: 절대수렴
title_en: Absolute Convergence
aliases: [절대수렴하는 급수, 조건수렴, 급수의 삼각부등식, absolute convergence, absolutely convergent series, conditional convergence, triangle inequality for series]
kind: definition
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 수열 (x_n) 의 급수는 (|x_n|) 의 급수가 수렴할 때 절대수렴한다고 하고, 수렴하지만 절대수렴하지 않을 때 조건수렴한다고 한다. 절대수렴하는 급수는 수렴하고 그 합의 절댓값은 (|x_n|) 의 급수의 합 이하이며, 항이 모두 0 이상이면 수렴과 절대수렴은 같다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, power-of-a-real-number, sequence, limit-of-sequence, limit-is-unique, limits-preserve-inequalities, limit-of-absolute-value-and-square-root, series-and-partial-sums, linearity-of-series, geometric-series, comparison-test, cauchy-criterion-for-series]
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.4절 Definition 2.5.14, Proposition 2.5.15 와 그 증명 (p.92), 그 뒤 문단 (p.93), 연습문제 2.5.10 (p.98)
    checked: original
    note: "출처의 Definition 2.5.14(p.92)는 |x_n| 의 급수가 수렴하면 급수가 converges absolutely 라 하고, 수렴하지만 절대수렴하지 않으면 converges conditionally 라 한다. 출처의 Proposition 2.5.15(p.92)는 절대수렴하면 수렴한다는 것이고, 출처는 |x_n| 의 급수가 코시이므로 첨자 k + 1 부터 n 까지의 |x_i| 의 합이 ε 보다 작고 'the triangle inequality for a finite sum'으로 x_i 의 합의 절댓값도 그 이하이므로 코시라고 증명한다. 이 항목의 (1)은 같은 경로이고, 유한 합의 삼각부등식 대신 series-and-partial-sums 의 (6)(|s_k − s_n| ≤ u_k − u_n)을 쓰며, 코시 판정은 cauchy-criterion-for-series 의 (2)이다. (2)는 출처가 p.93 에서 '급수판 삼각부등식'이라 부르며 증명을 연습문제(2.5.10, p.98)로 두는 것이고, 이 항목은 series-and-partial-sums 의 (6)의 |s_n| ≤ u_n 에서 극한을 취해 증명한다. (3)은 출처에 명제로 없다(검색한 범위). 출처는 p.93 에서 (−1)ⁿ/n 의 급수를 조건수렴하는 급수로 들지만, 그 수렴은 연습문제로 둔다. 이 사이트는 그 예를 alternating-series-test 에서 다룬다. 예시 '(−1)ⁿ(n²)⁻¹'의 급수는 출처의 연습문제 2.5.3 c)(p.97)의 급수이다. 예시 '|r| < 1 인 등비급수'와 반례 '(2)에서 등호가 아닐 수 있다', 확인 질문은 출처에 없다(검색한 범위). 출처는 p.93 에서 절대수렴하는 급수의 합과 |x_n| 의 급수의 합이 일반적으로 다르다고 적는다. 반례는 그 한 예이다."
status: reviewed
review_note: "2026-11-17 독립 검토 2회(전반 1회, 후반과 전반 재확인 1회). 증명의 수학 오류 없음. Σ 와 유한 합 없이 재귀로 정한 부분합으로 증명. 첫째 항이 0 인 경우를 빼먹은 설명 문장과 출처 메모를 고침"
added: 2026-11-17
---

:::statement
수열, 수렴과 기호 $\lim_{n \to \infty}$는 [[sequence]], [[limit-of-sequence]], [[limit-is-unique]]의 것이고, 절댓값은 [[absolute-value]]의 것이며, 부분합 수열, 급수의 수렴과 발산, 급수의 합은 [[series-and-partial-sums]]의 것이다. $(x_n)$을 수열, $(s_n)$을 그 부분합 수열이라 하고, $n$번째 항이 $|x_n|$인 수열([[sequence]]의 (1))을 $(|x_n|)$, 그 부분합 수열을 $(u_n)$이라 하자.

**절대수렴과 조건수렴.**

- $(x_n)$의 급수가 **절대수렴한다**(converges absolutely)는 것은 정확히 $(|x_n|)$의 급수가 수렴할 때이다.
- $(x_n)$의 급수가 **조건수렴한다**(converges conditionally)는 것은 정확히 $(x_n)$의 급수가 수렴하고 절대수렴하지 않을 때이다.

다음이 성립한다.

1. $(x_n)$의 급수가 절대수렴하면 $(x_n)$의 급수는 수렴한다.
2. (급수의 삼각부등식) $(x_n)$의 급수가 절대수렴하고, $(x_n)$의 급수의 합을 $S$, $(|x_n|)$의 급수의 합을 $U$라 하면 $|S| \le U$이다.
3. 모든 자연수 $n$에서 $0 \le x_n$이면, $(x_n)$의 급수가 절대수렴하는 것은 정확히 $(x_n)$의 급수가 수렴할 때이다.
:::

:::english
Sequences, convergence and the symbol $\lim_{n \to \infty}$ are those of the entries on sequences, on the limit of a sequence, and on uniqueness of limits; the absolute value is that of the entry on absolute value; and sequences of partial sums, convergence and divergence of series, and sums of series are those of the entry on series and partial sums. Let $(x_n)$ be a sequence and $(s_n)$ its sequence of partial sums, and let $(|x_n|)$ denote the sequence whose $n$th term is $|x_n|$ (item (1) of the entry on sequences), with sequence of partial sums $(u_n)$.

**Absolute and conditional convergence.**

- The series of $(x_n)$ **converges absolutely** exactly when the series of $(|x_n|)$ converges.
- The series of $(x_n)$ **converges conditionally** exactly when the series of $(x_n)$ converges and does not converge absolutely.

The following hold.

1. If the series of $(x_n)$ converges absolutely, then the series of $(x_n)$ converges.
2. (Triangle inequality for series) If the series of $(x_n)$ converges absolutely, $S$ is the sum of the series of $(x_n)$ and $U$ is the sum of the series of $(|x_n|)$, then $|S| \le U$.
3. If $0 \le x_n$ for every natural number $n$, then the series of $(x_n)$ converges absolutely exactly when the series of $(x_n)$ converges.
:::

## 직관

길을 걸으며 앞뒤로 오간다고 해 봅시다. $x_n$은 $n$째 걸음의 방향 있는 이동, $|x_n|$은 그 걸음의 길이입니다. 걸은 길이의 합 $u_n$이 어떤 값 $U$에 머물러 있다면, 오가며 도착한 자리 $s_n$도 한없이 헤매지 않고 한 자리로 다가간다는 것이 (1)이고, 출발점에서 도착 자리까지의 거리 $|S|$가 걸은 길이 $U$를 넘지 않는다는 것이 (2)입니다. 비유가 맞는 곳은 [[series-and-partial-sums|급수와 부분합]]의 (6), 곧 두 자리 사이의 거리 $|s_k - s_n|$이 그 사이에 걸은 길이 $u_k - u_n$ 이하라는 것입니다.

(1)의 증명은 합이 될 수를 모르는 채 [[cauchy-criterion-for-series|급수의 코시 판정법]]으로 수렴을 보입니다. 길이의 합이 수렴하면 그 부분합끼리의 차가 작아지고, (6)에 의해 도착 자리끼리의 차도 작아지기 때문입니다.

## 성질의 증명

:::proof
"순서 성질 (1)"처럼 쓴 것은 [[order-properties-of-reals]], "절댓값 (6)"은 [[absolute-value]], "부분합 (6)"은 [[series-and-partial-sums]]의 번호이다.

**1의 증명.** $(|x_n|)$의 급수가 수렴하므로 [[cauchy-criterion-for-series|급수의 코시 판정법]]의 (2)를 $(|x_n|)$에 쓴다. 양의 실수 $\varepsilon$에 대하여 $M \le n < k$인 모든 자연수 $n$, $k$에서 $|u_k - u_n| < \varepsilon$인 자연수 $M$이 있다. 그런 $n$, $k$에서 부분합 (6)과 절댓값 (6)에 의해
$$
|s_k - s_n| \le u_k - u_n \le |u_k - u_n| < \varepsilon
$$
이고, 순서 성질 (1)의 (v)에 의해 $|s_k - s_n| < \varepsilon$이다. 같은 판정법의 (2)를 $(x_n)$에 쓰면 $(x_n)$의 급수는 수렴한다.

**2의 증명.** (1)에 의해 $(s_n)$은 $S$로, 가정에 의해 $(u_n)$은 $U$로 수렴한다. [[limit-of-absolute-value-and-square-root|절댓값과 제곱근의 극한]]의 (1)에 의해 $n$번째 항이 $|s_n|$인 수열은 $|S|$로 수렴한다. 부분합 (6)에 의해 모든 $n$에서 $|s_n| \le u_n$이므로 [[limits-preserve-inequalities|극한과 부등식]]의 (1)에 의해 $|S| \le U$이다.

**3의 증명.** 모든 $n$에서 $0 \le x_n$이면 절댓값 (1)에 의해 $|x_n| = x_n$이므로, [[sequence]]의 수열의 같음에 의해 $(|x_n|) = (x_n)$이다. 따라서 $(|x_n|)$의 급수가 수렴하는 것과 $(x_n)$의 급수가 수렴하는 것은 같은 말이다. $\blacksquare$
:::

## 예시와 반례

:::example[$|r| < 1$인 등비급수]
첫째 항이 $a$이고 공비가 $r$인 등비급수에서 $|r| < 1$이라 합시다. [[absolute-value|절댓값]]의 (4)와 [[power-of-a-real-number|실수의 거듭제곱]]의 (4)에 의해 $|a r^{n-1}| = |a|\,|r|^{n-1}$이므로, $(|x_n|)$은 첫째 항이 $|a|$이고 공비가 $|r|$인 등비급수의 항의 수열입니다. 절댓값 (2), (1)과 $|r| < 1$에서 $\bigl||r|\bigr| = |r| < 1$이므로 [[geometric-series|등비급수]]의 (2)에 의해 그 급수는 수렴하고, 따라서 원래 등비급수는 절대수렴합니다. 예컨대 첫째 항이 $1$이고 공비가 $-2^{-1}$이면 합은 $S = (1 + 2^{-1})^{-1} = 2 \cdot 3^{-1}$이고, $U = (1 - 2^{-1})^{-1} = 2$입니다.
:::

:::example[$n$번째 항이 $(-1)^n (n^2)^{-1}$인 수열]
[[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $(-1)^n$은 $1$이거나 $-1$이므로 [[absolute-value|절댓값]]의 (3), (1), (4)에 의해 $|(-1)^n (n^2)^{-1}| = (n^2)^{-1}$입니다. [[comparison-test|비교 판정법]]의 (6)에 의해 $\bigl((n^2)^{-1}\bigr)$의 급수가 수렴하므로 이 급수는 절대수렴하고, (1)에 의해 수렴합니다.
:::

:::counterexample[(2)에서 등호가 아닐 수 있다]
첫 번째 예시의 등비급수(첫째 항 $1$, 공비 $-2^{-1}$)에서 $|S| = 2 \cdot 3^{-1}$이고 $U = 2$입니다. $2 \cdot 3^{-1} < 2$이므로 $|S| < U$입니다. 절댓값의 급수의 합을 알아도 원래 급수의 합은 알 수 없고, (2)는 위쪽 경계만 줍니다.
:::

## 확인 질문

:::check[$(x_n)$의 급수와 $(y_n)$의 급수가 모두 절대수렴하면, $n$번째 항이 $x_n + y_n$인 수열의 급수도 절대수렴하는가?]
그렇습니다. [[triangle-inequality|삼각부등식]]의 (1)에 의해 $0 \le |x_n + y_n| \le |x_n| + |y_n|$이고, [[linearity-of-series|급수의 선형성]]의 (3)에 의해 $n$번째 항이 $|x_n| + |y_n|$인 수열의 급수는 수렴합니다. [[comparison-test|비교 판정법]]의 (2)에 의해 $(|x_n + y_n|)$의 급수가 수렴합니다.
:::

:::check[$(x_n)$의 급수가 절대수렴하고 모든 $n$에서 $|y_n| \le |x_n|$이면 $(y_n)$의 급수는 어떠한가?]
절대수렴하고, 따라서 수렴합니다. $0 \le |y_n| \le |x_n|$이고 $(|x_n|)$의 급수가 수렴하므로 [[comparison-test|비교 판정법]]의 (2)에 의해 $(|y_n|)$의 급수가 수렴합니다. (1)에 의해 $(y_n)$의 급수도 수렴합니다.
:::
