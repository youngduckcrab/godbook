---
title: 계단함수와 그 적분
title_en: Step Functions and Their Integrals
aliases: [계단함수, 계단함수의 적분, 반열린 구간의 길이, 표준 계단 꼴, 표준 조각열, step function, integral of a step function, length of a half-open interval]
kind: definition
field: measure-theory
msc: ["26A42", "28A25"]
level: undergrad
summary: a ≤ b 인 [a, b) 와 그 길이를 정하고, [a, b) 꼴 집합의 지시함수를 유한 개 일차결합한 함수를 계단함수라 한다. 계단 꼴과 불연속점으로 정한 표준 계단 꼴, 리만 적분으로 정한 적분과 그 성질, 지시함수가 계단함수인 집합의 표준 조각열, 높이 t 위의 집합과 유한 덮개의 길이를 증명한다.
requires: [set, subset, set-operations, function, recursion-theorem, mathematical-induction, finite-set, number-of-elements-is-unique, subset-of-finite-set, maximum-of-finite-set, increasing-listing-of-finite-set, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, interval, real-valued-function, continuous-function, finite-sum-of-reals, linearity-and-order-of-finite-sums, splitting-and-shifting-finite-sums, telescoping-sum, riemann-integral, additivity-of-the-integral, changing-finitely-many-values, linearity-of-the-integral, monotonicity-of-the-integral, sequence-of-sets, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals]
sources:
  - ref: blackstone-mikusinski-daniell-integral
    loc: 2절 Daniell Spaces, Example 2.4 (p.2)
    checked: original
    note: "출처 Example 2.4(p.2)는 ℝ^N 의 반열린 상자 [a_1, b_1) × ⋯ × [a_N, b_N) 의 지시함수의 유한 일차결합을 'simple function' 이라 부르고, 그 적분을 계수와 상자의 부피의 곱의 합으로 정의한 뒤 'It is clear that S(R^N) is a Riesz space and that condition I is satisfied' 라고 적는다. 이 항목은 N = 1 만 다루고, 이 강의의 약속에 따라 'simple function' 을 '계단함수'라 부른다. 출처는 이 자리에서 같은 함수의 다른 일차결합이 같은 적분을 준다는 것을 따로 적지 않고, 7절(p.16)에서 측도공간판의 simple function 에 대해 'A standard argument shows that the integral of a simple function is well defined' 라고 적는다. 이 항목은 적분을 리만 적분으로 정의해 (4)에서 꼴에 따라 달라지지 않음을 얻고, (6)의 (iv)에서 출처의 식이 그 값임을 증명한다. 출처가 'clear' 라고 적는 최대·최소에 닫혀 있음은 (5), 조건 I(0 이상이면 적분이 0 이상)은 (6)의 (ii)이다. 계단 꼴, 불연속점으로 정한 표준 계단 꼴, 표준 조각열((2), (3), (7)), 높이 t 위의 집합((8)), 유한 덮개의 길이((9))는 뒤 항목의 증명에서 n 마다 분해를 고르지 않으려고 이 항목이 진술에 둔 것이다."
  - ref: lebl-basic-analysis
    loc: 5.2.5 소절, Exercise 5.2.12, 5.2.13 (p.198–199)
    checked: original
    note: "출처는 5.2.5 소절(p.198)에서 유계인 구간 I 의 지시함수 φ_I 를 'elementary step function' 이라 부르고, 유계인 구간들의 φ_{I_k} 의 일차결합을 'step function' 이라 부르며, Exercise 5.2.12, 5.2.13(p.198–199)에서 그것이 [a, b] 에서 적분가능함을 보이고 적분을 구하라고 한다. 출처의 step function 은 닫힌구간·열린구간의 지시함수도 쓰므로 이 항목의 계단함수보다 넓다(이 항목의 반례 '왼쪽 끝이 빠진 구간의 지시함수의 예'는 출처의 뜻으로는 step function 이다). (4)의 (i)과 (6)의 (iv)는 반열린구간에 대해 그 두 연습문제가 묻는 결론이다. 예시 '겹치는 세 지시함수의 일차결합'의 적분 계산은 그 연습문제와 같은 종류이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(영집합 (6)(i) 의 덮개열 구성 통독, 균등 분할 어림과 (6)(iii) 의 경계값). 독립 검토 없음."
added: 2026-11-28
---

:::statement
집합과 부분집합, 합집합·교집합·차집합은 [[set]], [[subset]], [[set-operations|집합의 연산]]의 것이고, 함수는 [[function]], 실함수와 그 합·차·곱·상수배·절댓값, 제한, 영함수(모든 점에서 값이 $0$인 상수함수)는 [[real-valued-function|실함수와 그 연산]]의 것이다. 연속과 불연속은 [[continuous-function]]의 것이고, 리만 적분가능, "$[c, d]$에서 적분가능"과 $\int_c^d$는 [[riemann-integral]]의 것이다(그 항목의 (4)). 유한집합과 원소의 개수는 [[finite-set]]와 [[number-of-elements-is-unique]], 크기순 나열은 [[increasing-listing-of-finite-set]]의 것이고, "0 부터 번호가 붙은 실수" $t_0, \dots, t_m$은 [[telescoping-sum|망원 합]]의 것이다. 실수의 유한 합 $\sum_{i=1}^{N}$은 [[finite-sum-of-reals]]의 것이다. 두 수의 최대·최소는 [[absolute-value]]의 것이다. $X = \mathbb{R}$ 위의 지시함수 $\chi_A$는 [[indicator-function]]의 것이고, 집합열과 그 합집합은 [[sequence-of-sets|집합열]], $[0, \infty]$와 그 원소열의 합 $\sum_{i=1}^{\infty}$은 [[extended-nonnegative-reals]]와 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 것이다.

**기호 $[a, b)$와 길이.** $a \le b$인 실수 $a$, $b$에 대하여
$$
[a, b) = \{x \in \mathbb{R} : a \le x < b\}
$$
로 쓴다. $a < b$이면 이것은 [[interval|구간]]의 반열린구간 $[a, b)$와 같은 집합이다. 그 항목은 이 기호를 $a < b$일 때만 쓰지만, 이 강의는 $a = b$일 때에도 쓰고 그때 아래 (1)에 의해 $[a, a) = \emptyset$이다. 아래 (1)에 의해, $\mathbb{R}$의 부분집합 $I$가 $a \le b$인 어떤 실수 $a$, $b$로 $I = [a, b)$라 쓰이면 $b - a$는 $I$만으로 정해진다. 이 수를 $I$의 **길이**(length)라 하고 $\ell(I)$로 쓴다. 곧 $\ell([a, b)) = b - a$이고 $\ell(\emptyset) = 0$이다. 복소해석의 경로의 길이 $\ell(\gamma)$와 같은 글자이지만, 이것은 $[a, b)$ 꼴의 집합에 정한 수이다.

**계단함수.** 함수 $\varphi : \mathbb{R} \to \mathbb{R}$가 **계단함수**(step function)인 것은 정확히, $0$ 이상인 정수 $N$과, $1 \le i \le N$인 정수 $i$마다 실수 $\lambda_i$와 $a_i \le b_i$인 실수 $a_i$, $b_i$가 있어 모든 실수 $x$에서
$$
\varphi(x) = \sum_{i=1}^{N} \lambda_i \, \chi_{[a_i, b_i)}(x)
$$
일 때이다. 이 식을 $\varphi$의 **일차결합 꼴**이라 한다. $N = 0$이면 빈 합이므로 $\varphi$는 영함수이다.

**계단 꼴.** $m$을 자연수, $t_0, \dots, t_m$을 $0 \le j < k \le m$이면 $t_j < t_k$인 실수, $v_1, \dots, v_m$을 실수라 하자. 함수 $\varphi : \mathbb{R} \to \mathbb{R}$가 **점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴**을 갖는다는 것은 정확히, $1 \le j \le m$인 모든 정수 $j$와 $t_{j-1} \le x < t_j$인 모든 실수 $x$에서 $\varphi(x) = v_j$이고, $x < t_0$이거나 $t_m \le x$인 모든 실수 $x$에서 $\varphi(x) = 0$일 때이다.

**불연속점의 집합.** 함수 $\varphi : \mathbb{R} \to \mathbb{R}$에 대하여 $D_\varphi = \{x \in \mathbb{R} : \varphi\text{는 } x\text{에서 불연속}\}$으로 쓴다.

다음이 성립한다.

1. (기호 $[a, b)$) $a \le b$, $a' \le b'$인 실수 $a$, $b$, $a'$, $b'$에 대하여 다음이 성립한다.
   - (i) $[a, b) = \emptyset$인 것은 정확히 $a = b$일 때이다.
   - (ii) $[a, b) = [a', b')$이면 $b - a = b' - a'$이다.
   - (iii) $\alpha = \max\{a, a'\}$, $\beta = \max\{\alpha, \min\{b, b'\}\}$로 두면 $\alpha \le \beta$이고 $[a, b) \cap [a', b') = [\alpha, \beta)$이다.
2. (계단 꼴) 함수 $\varphi : \mathbb{R} \to \mathbb{R}$가 계단함수인 것은 정확히 $\varphi$가 어떤 점과 값의 계단 꼴을 가질 때이다. $\varphi$가 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 가지면 다음이 성립한다.
   - (i) $t_0 \le x < t_m$인 모든 실수 $x$에 대하여 $t_{j-1} \le x < t_j$인 정수 $j$($1 \le j \le m$)가 정확히 하나 있다.
   - (ii) 모든 실수 $x$에서 $\varphi(x) = \sum_{j=1}^{m} v_j \, \chi_{[t_{j-1}, t_j)}(x)$이고 $|\varphi(x)| \le \sum_{j=1}^{m} |v_j|$이다. 특히 계단함수는 유계이고, $\varphi$는 $[t_0, t_m]$ 밖에서 $0$이다(곧 $t_0 < t_m$이고, $x \notin [t_0, t_m]$인 모든 $x$에서 $\varphi(x) = 0$이다).
   - (iii) 모든 실수 $x$에 대하여 양의 실수 $\delta$가 있어 $x \le y < x + \delta$인 모든 $y$에서 $\varphi(y) = \varphi(x)$이다.
3. (불연속점과 표준 계단 꼴) $\varphi$를 계단함수라 하자.
   - (i) $\varphi$가 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 갖고 $v_0 = v_{m+1} = 0$으로 두면
     $D_\varphi$는 $0 \le j \le m$인 정수 $j$ 가운데 $v_j \ne v_{j+1}$인 것들의 $t_j$ 전체의 집합이다. 따라서 $D_\varphi$는 유한집합이다.
   - (ii) $D_\varphi = \emptyset$인 것은 정확히 $\varphi$가 영함수일 때이다.
   - (iii) $\varphi$가 영함수가 아니면, 어떤 자연수 $r$에 대하여 $D_\varphi$는 원소를 $r + 1$개 갖는다. $D_\varphi$의 크기순 나열로 $D_\varphi$의 원소를 $d_0 < d_1 < \dots < d_r$로 쓰면, $\varphi$는 점 $d_0, \dots, d_r$과 값 $\varphi(d_0), \dots, \varphi(d_{r-1})$의 계단 꼴을 갖는다. 이 계단 꼴을 $\varphi$의 **표준 계단 꼴**이라 한다. 그 점과 값은 $\varphi$만으로 정해진다.
4. (적분) $\varphi$를 계단함수라 하자.
   - (i) $c < d$인 실수 $c$, $d$에 대하여 $\varphi$가 $[c, d]$ 밖에서 $0$이면, $\varphi$는 $[c, d]$에서 리만 적분가능하고, $\int_c^d \varphi$는 그런 $c$, $d$에 따라 달라지지 않는다. 이 값을 $\varphi$의 **적분**이라 하고 $\int_{\mathbb{R}} \varphi$로 쓴다. (2)의 (ii)에 의해 그런 $c$, $d$가 있다.
   - (ii) $\varphi$가 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 가지면 $\int_{\mathbb{R}} \varphi = \sum_{j=1}^{m} v_j (t_j - t_{j-1})$이다.
   - (iii) $a \le b$이면 $\chi_{[a, b)}$는 계단함수이고 $\int_{\mathbb{R}} \chi_{[a, b)} = \ell([a, b)) = b - a$이다. 영함수의 적분은 $0$이다.
5. (계단함수끼리의 연산) $\varphi$, $\psi$가 계단함수이고 $k$가 실수이면 $\varphi + \psi$, $\varphi - \psi$, $k\varphi$, $\varphi\psi$, $|\varphi|$는 계단함수이고, $x$에서의 값이 $\max\{\varphi(x), \psi(x)\}$, $\min\{\varphi(x), \psi(x)\}$인 함수 $\max\{\varphi, \psi\}$, $\min\{\varphi, \psi\}$도 계단함수이다. 또 $K$가 $0$ 이상인 정수이고 $1 \le k \le K$인 정수 $k$마다 계단함수 $\varphi_k$가 정해져 있으면, $x$에서의 값이 $\sum_{k=1}^{K} \varphi_k(x)$인 함수 $\sum_{k=1}^{K} \varphi_k$는 계단함수이다.
6. (적분의 성질) $\varphi$, $\psi$가 계단함수이고 $k$가 실수라 하자.
   - (i) $\int_{\mathbb{R}} (\varphi + \psi) = \int_{\mathbb{R}} \varphi + \int_{\mathbb{R}} \psi$, $\int_{\mathbb{R}} (\varphi - \psi) = \int_{\mathbb{R}} \varphi - \int_{\mathbb{R}} \psi$, $\int_{\mathbb{R}} k\varphi = k \int_{\mathbb{R}} \varphi$이다. (5)의 $\varphi_1, \dots, \varphi_K$에 대하여 $\int_{\mathbb{R}} \sum_{k=1}^{K} \varphi_k = \sum_{k=1}^{K} \int_{\mathbb{R}} \varphi_k$이다.
   - (ii) 모든 실수 $x$에서 $\varphi(x) \le \psi(x)$이면 $\int_{\mathbb{R}} \varphi \le \int_{\mathbb{R}} \psi$이다. 특히 모든 $x$에서 $0 \le \varphi(x)$이면 $0 \le \int_{\mathbb{R}} \varphi$이다.
   - (iii) $\left| \int_{\mathbb{R}} \varphi \right| \le \int_{\mathbb{R}} |\varphi|$이다.
   - (iv) $\varphi$의 일차결합 꼴이 위의 정의의 식이면 $\int_{\mathbb{R}} \varphi = \sum_{i=1}^{N} \lambda_i (b_i - a_i)$이다. 따라서 이 값은 일차결합 꼴에 따라 달라지지 않는다.
7. (지시함수가 계단함수인 집합) $A$를 $\mathbb{R}$의 부분집합이라 하자.
   - (i) $0$ 이상인 정수 $N$과 $a_i \le b_i$인 실수 $a_i$, $b_i$($1 \le i \le N$)에 대하여, $x \in A$인 것이 정확히 $x \in [a_i, b_i)$인 $i$가 있을 때이면 $\chi_A$는 계단함수이다.
   - (ii) $\chi_A$가 계단함수라 하자. 자연수 $i$마다 실수 $p_i$, $q_i$를 다음과 같이 정한다. $A = \emptyset$이면 모든 $i$에서 $p_i = q_i = 0$이다. $A \ne \emptyset$이면 $\chi_A$는 영함수가 아니므로, 그 표준 계단 꼴의 점을 $d_0, \dots, d_r$로 두고, $i \le r$이고 $\chi_A(d_{i-1}) = 1$이면 $(p_i, q_i) = (d_{i-1}, d_i)$, $i \le r$이고 $\chi_A(d_{i-1}) = 0$이면 $(p_i, q_i) = (d_{i-1}, d_{i-1})$, $r < i$이면 $(p_i, q_i) = (0, 0)$이다. 이 두 실수열의 쌍을 $A$의 **표준 조각열**이라 한다. 그러면 모든 자연수 $i$에서 $p_i \le q_i$이고 $[p_i, q_i) \subseteq A$이며, $i \ne i'$이면 $[p_i, q_i) \cap [p_{i'}, q_{i'}) = \emptyset$이고,
     $$
     \begin{gathered} A = \bigcup_{i=1}^{\infty} [p_i, q_i), \\ \sum_{i=1}^{\infty} (q_i - p_i) = \int_{\mathbb{R}} \chi_A \end{gathered}
     $$
     이다. 왼쪽 합은 $[0, \infty]$의 합이다. 표준 조각열은 $A$만으로 정해진다.
8. (높이 $t$ 위의 집합) $\varphi$가 계단함수이고 $t$가 양의 실수이면, $A = \{x \in \mathbb{R} : \varphi(x) > t\}$와 $B = \{x \in \mathbb{R} : \varphi(x) \ge t\}$의 지시함수 $\chi_A$, $\chi_B$는 계단함수이다. 이에 더해 모든 $x$에서 $0 \le \varphi(x)$이면
   $$
   t \int_{\mathbb{R}} \chi_A \le t \int_{\mathbb{R}} \chi_B \le \int_{\mathbb{R}} \varphi
   $$
   이다.
9. (유한 개의 $[a_i, b_i)$의 길이) $N$을 $0$ 이상인 정수, $a_i \le b_i$($1 \le i \le N$)와 $c \le d$를 실수라 하자.
   - (i) $[c, d)$의 모든 원소가 어떤 $[a_i, b_i)$의 원소이면 $d - c \le \sum_{i=1}^{N} (b_i - a_i)$이다.
   - (ii) $i \ne i'$이면 $[a_i, b_i) \cap [a_{i'}, b_{i'}) = \emptyset$이고 모든 $[a_i, b_i)$가 $[c, d)$의 부분집합이면 $\sum_{i=1}^{N} (b_i - a_i) \le d - c$이다.
:::

:::english
Sets, subsets, unions, intersections, and differences are as in the entries on sets and set operations; real-valued functions with their sums, differences, products, scalar multiples, absolute values, restrictions, and the zero function (the constant function with value $0$) are as in the entry on real-valued functions. Continuity and discontinuity are as in the entry on continuous functions, and Riemann integrability, "integrable on $[c, d]$", and $\int_c^d$ are as in the entry on the Riemann integral (its item (4)). Finite sets and numbers of elements, listings in increasing order, and "reals indexed from $0$" $t_0, \dots, t_m$ are as in the corresponding entries. Finite sums of reals, the maximum and minimum of two numbers, the indicator function $\chi_A$ on $X = \mathbb{R}$, sequences of sets and their unions, and $[0, \infty]$ with sums of its sequences are as in the corresponding entries.

**The symbol $[a, b)$ and length.** For real numbers $a \le b$ we write
$$
[a, b) = \{x \in \mathbb{R} : a \le x < b\}.
$$
If $a < b$, this is the same set as the half-open interval $[a, b)$ of the entry on intervals. That entry uses the symbol only when $a < b$, but this course also uses it when $a = b$, and then $[a, a) = \emptyset$ by (1) below. By (1), if a subset $I$ of $\mathbb{R}$ can be written as $I = [a, b)$ for some reals $a \le b$, then $b - a$ is determined by $I$ alone. This number is called the **length** of $I$ and denoted $\ell(I)$. Thus $\ell([a, b)) = b - a$ and $\ell(\emptyset) = 0$. The letter is the same as for the length $\ell(\gamma)$ of a path in complex analysis, but here it is a number assigned to a set of the form $[a, b)$.

**Step functions.** A function $\varphi : \mathbb{R} \to \mathbb{R}$ is a **step function** precisely when there are an integer $N \ge 0$ and, for each integer $i$ with $1 \le i \le N$, a real number $\lambda_i$ and real numbers $a_i \le b_i$ such that for every real $x$
$$
\varphi(x) = \sum_{i=1}^{N} \lambda_i \, \chi_{[a_i, b_i)}(x).
$$
This formula is called a **linear-combination form** of $\varphi$. If $N = 0$, the sum is empty and $\varphi$ is the zero function.

**Step forms.** Let $m$ be a natural number, $t_0, \dots, t_m$ reals with $t_j < t_k$ whenever $0 \le j < k \le m$, and $v_1, \dots, v_m$ reals. A function $\varphi : \mathbb{R} \to \mathbb{R}$ has the **step form with points $t_0, \dots, t_m$ and values $v_1, \dots, v_m$** precisely when $\varphi(x) = v_j$ for every integer $j$ with $1 \le j \le m$ and every real $x$ with $t_{j-1} \le x < t_j$, and $\varphi(x) = 0$ for every real $x$ with $x < t_0$ or $t_m \le x$.

**The set of discontinuities.** For a function $\varphi : \mathbb{R} \to \mathbb{R}$ we write $D_\varphi = \{x \in \mathbb{R} : \varphi \text{ is discontinuous at } x\}$.

The following hold.

1. (The symbol $[a, b)$) For reals $a \le b$ and $a' \le b'$:
   - (i) $[a, b) = \emptyset$ precisely when $a = b$.
   - (ii) If $[a, b) = [a', b')$, then $b - a = b' - a'$.
   - (iii) With $\alpha = \max\{a, a'\}$ and $\beta = \max\{\alpha, \min\{b, b'\}\}$ we have $\alpha \le \beta$ and $[a, b) \cap [a', b') = [\alpha, \beta)$.
2. (Step forms) A function $\varphi : \mathbb{R} \to \mathbb{R}$ is a step function precisely when it has the step form with some points and values. If $\varphi$ has the step form with points $t_0, \dots, t_m$ and values $v_1, \dots, v_m$, then:
   - (i) For every real $x$ with $t_0 \le x < t_m$ there is exactly one integer $j$ ($1 \le j \le m$) with $t_{j-1} \le x < t_j$.
   - (ii) For every real $x$, $\varphi(x) = \sum_{j=1}^{m} v_j \, \chi_{[t_{j-1}, t_j)}(x)$ and $|\varphi(x)| \le \sum_{j=1}^{m} |v_j|$. In particular, step functions are bounded, and $\varphi$ is $0$ outside $[t_0, t_m]$ (that is, $t_0 < t_m$ and $\varphi(x) = 0$ for every $x \notin [t_0, t_m]$).
   - (iii) For every real $x$ there is a positive real $\delta$ such that $\varphi(y) = \varphi(x)$ for every $y$ with $x \le y < x + \delta$.
3. (Discontinuities and the standard step form) Let $\varphi$ be a step function.
   - (i) If $\varphi$ has the step form with points $t_0, \dots, t_m$ and values $v_1, \dots, v_m$, and we put $v_0 = v_{m+1} = 0$, then
     $D_\varphi$ is the set of all $t_j$ for the integers $j$ with $0 \le j \le m$ and $v_j \ne v_{j+1}$. Hence $D_\varphi$ is a finite set.
   - (ii) $D_\varphi = \emptyset$ precisely when $\varphi$ is the zero function.
   - (iii) If $\varphi$ is not the zero function, then $D_\varphi$ has $r + 1$ elements for some natural number $r$. Writing the elements of $D_\varphi$ as $d_0 < d_1 < \dots < d_r$ by its listing in increasing order, $\varphi$ has the step form with points $d_0, \dots, d_r$ and values $\varphi(d_0), \dots, \varphi(d_{r-1})$. This step form is called the **standard step form** of $\varphi$. Its points and values are determined by $\varphi$ alone.
4. (Integral) Let $\varphi$ be a step function.
   - (i) For reals $c < d$ such that $\varphi$ is $0$ outside $[c, d]$, $\varphi$ is Riemann integrable on $[c, d]$, and $\int_c^d \varphi$ does not depend on the choice of such $c$, $d$. This value is called the **integral** of $\varphi$ and denoted $\int_{\mathbb{R}} \varphi$. Such $c$, $d$ exist by (2)(ii).
   - (ii) If $\varphi$ has the step form with points $t_0, \dots, t_m$ and values $v_1, \dots, v_m$, then $\int_{\mathbb{R}} \varphi = \sum_{j=1}^{m} v_j (t_j - t_{j-1})$.
   - (iii) If $a \le b$, then $\chi_{[a, b)}$ is a step function and $\int_{\mathbb{R}} \chi_{[a, b)} = \ell([a, b)) = b - a$. The integral of the zero function is $0$.
5. (Operations on step functions) If $\varphi$, $\psi$ are step functions and $k$ is real, then $\varphi + \psi$, $\varphi - \psi$, $k\varphi$, $\varphi\psi$, and $|\varphi|$ are step functions, and so are the functions $\max\{\varphi, \psi\}$, $\min\{\varphi, \psi\}$ whose values at $x$ are $\max\{\varphi(x), \psi(x)\}$ and $\min\{\varphi(x), \psi(x)\}$. Moreover, if $K \ge 0$ is an integer and a step function $\varphi_k$ is given for each integer $k$ with $1 \le k \le K$, then the function $\sum_{k=1}^{K} \varphi_k$ whose value at $x$ is $\sum_{k=1}^{K} \varphi_k(x)$ is a step function.
6. (Properties of the integral) Let $\varphi$, $\psi$ be step functions and $k$ real.
   - (i) $\int_{\mathbb{R}} (\varphi + \psi) = \int_{\mathbb{R}} \varphi + \int_{\mathbb{R}} \psi$, $\int_{\mathbb{R}} (\varphi - \psi) = \int_{\mathbb{R}} \varphi - \int_{\mathbb{R}} \psi$, and $\int_{\mathbb{R}} k\varphi = k \int_{\mathbb{R}} \varphi$. For $\varphi_1, \dots, \varphi_K$ as in (5), $\int_{\mathbb{R}} \sum_{k=1}^{K} \varphi_k = \sum_{k=1}^{K} \int_{\mathbb{R}} \varphi_k$.
   - (ii) If $\varphi(x) \le \psi(x)$ for every real $x$, then $\int_{\mathbb{R}} \varphi \le \int_{\mathbb{R}} \psi$. In particular, if $0 \le \varphi(x)$ for every $x$, then $0 \le \int_{\mathbb{R}} \varphi$.
   - (iii) $\left| \int_{\mathbb{R}} \varphi \right| \le \int_{\mathbb{R}} |\varphi|$.
   - (iv) If the formula in the definition above is a linear-combination form of $\varphi$, then $\int_{\mathbb{R}} \varphi = \sum_{i=1}^{N} \lambda_i (b_i - a_i)$. Hence this value does not depend on the linear-combination form.
7. (Sets whose indicator function is a step function) Let $A$ be a subset of $\mathbb{R}$.
   - (i) If $N \ge 0$ is an integer, $a_i \le b_i$ ($1 \le i \le N$) are reals, and $x \in A$ holds precisely when $x \in [a_i, b_i)$ for some $i$, then $\chi_A$ is a step function.
   - (ii) Suppose $\chi_A$ is a step function. For each natural number $i$ define reals $p_i$, $q_i$ as follows. If $A = \emptyset$, then $p_i = q_i = 0$ for all $i$. If $A \ne \emptyset$, then $\chi_A$ is not the zero function; let $d_0, \dots, d_r$ be the points of its standard step form, and put $(p_i, q_i) = (d_{i-1}, d_i)$ if $i \le r$ and $\chi_A(d_{i-1}) = 1$, $(p_i, q_i) = (d_{i-1}, d_{i-1})$ if $i \le r$ and $\chi_A(d_{i-1}) = 0$, and $(p_i, q_i) = (0, 0)$ if $r < i$. This pair of real sequences is called the **standard piece sequence** of $A$. Then $p_i \le q_i$ and $[p_i, q_i) \subseteq A$ for every natural number $i$, $[p_i, q_i) \cap [p_{i'}, q_{i'}) = \emptyset$ whenever $i \ne i'$, and
     $$
     \begin{gathered} A = \bigcup_{i=1}^{\infty} [p_i, q_i), \\ \sum_{i=1}^{\infty} (q_i - p_i) = \int_{\mathbb{R}} \chi_A, \end{gathered}
     $$
     where the sum on the left is the sum in $[0, \infty]$. The standard piece sequence is determined by $A$ alone.
8. (Sets above height $t$) If $\varphi$ is a step function and $t$ is a positive real, then the indicator functions $\chi_A$, $\chi_B$ of $A = \{x \in \mathbb{R} : \varphi(x) > t\}$ and $B = \{x \in \mathbb{R} : \varphi(x) \ge t\}$ are step functions. If moreover $0 \le \varphi(x)$ for every $x$, then
   $$
   t \int_{\mathbb{R}} \chi_A \le t \int_{\mathbb{R}} \chi_B \le \int_{\mathbb{R}} \varphi.
   $$
9. (Lengths of finitely many $[a_i, b_i)$) Let $N \ge 0$ be an integer and let $a_i \le b_i$ ($1 \le i \le N$) and $c \le d$ be reals.
   - (i) If every element of $[c, d)$ belongs to some $[a_i, b_i)$, then $d - c \le \sum_{i=1}^{N} (b_i - a_i)$.
   - (ii) If $[a_i, b_i) \cap [a_{i'}, b_{i'}) = \emptyset$ whenever $i \ne i'$ and every $[a_i, b_i)$ is a subset of $[c, d)$, then $\sum_{i=1}^{N} (b_i - a_i) \le d - c$.
:::

## 직관

계단함수는 수직선을 유한 개의 칸으로 나누어 칸마다 한 값을 주고, 칸 밖에서는 $0$인 함수입니다. 칸은 왼쪽 끝을 포함하고 오른쪽 끝을 빼는 $[a, b)$ 꼴이어서, 칸을 이어 붙여도 겹치거나 빈틈이 생기지 않습니다. 그래프를 그리면 층계처럼 보입니다. 적분은 각 칸의 값과 너비를 곱해 더한 수이고(값이 양수이면 넓이입니다), (4)는 이 넓이를 리만 적분으로 정의하면 함수를 어떻게 지시함수의 합으로 썼는지와 상관없이 같은 값이 나온다는 것을 말합니다.

같은 계단함수를 쓰는 방법은 여러 가지입니다. $\chi_{[0, 2)}$는 $\chi_{[0, 1)} + \chi_{[1, 2)}$로도 쓸 수 있고, 계단 꼴의 점에 $1$을 넣어도 빼도 됩니다. 뒤 항목들은 자연수마다 계단함수가 하나씩 주어진 열을 다루는데, 그때 함수마다 쓰는 방법을 하나씩 고르면 끝없이 많은 선택을 하게 됩니다. (3)의 표준 계단 꼴은 함수가 실제로 끊어지는 점, 곧 불연속점만으로 칸을 나누므로, 영함수가 아닌 계단함수에서는 함수만 보면 하나로 정해집니다(영함수에는 불연속점이 없어 표준 계단 꼴을 정하지 않습니다). (7)의 표준 조각열도 그렇게 정해지므로, 뒤 항목은 집합마다 그 조각을 고르지 않고 식으로 늘어놓을 수 있습니다.

비유하자면 계단함수는 층마다 높이가 적힌 건물의 단면도입니다. 같은 건물을 "1층부터 3층까지 높이 2"처럼 여러 층을 묶어 적어도 되고 층마다 적어도 되지만, 바닥 높이가 실제로 바뀌는 곳은 건물만 보면 정해집니다. 비유가 맞지 않는 곳도 있습니다. 계단함수의 값은 음수일 수 있고, 높이가 같은 두 칸 사이의 경계는 불연속점이 아니어서 표준 계단 꼴에는 나타나지 않습니다.

## 증명

:::idea
일차결합 꼴의 끝점을 모두 모아 크기순으로 늘어놓으면 칸마다 값이 일정해 계단 꼴이 된다. 적분은 $x \ge a$에서 $1$인 함수의 리만 적분과 선형성으로 계산하고, 값이 $0$인 곳으로 구간을 넓혀도 적분이 변하지 않음을 보인다. 표준 계단 꼴은 계단 꼴의 점 가운데 양쪽 값이 다른 점만 남긴 것이다.
:::

:::hint
$a \le s \le u$이면 $\chi_{[s, u)}(x)$는 "$s \le x$이면 $1$"인 함수에서 "$u \le x$이면 $1$"인 함수를 뺀 값이다.
:::

:::hint
계단 꼴의 점 $t_j$에서 왼쪽 칸의 값과 오른쪽 칸의 값이 같으면 $t_j$ 둘레에서 함수가 일정하다. 다르면 두 값의 차를 $\varepsilon$으로 잡는다.
:::

:::proof
아래에서 "순서 성질"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 유한 합은 [[finite-sum-of-reals]]의 것이며 범위에서만 정해진 항에도 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (8)에 의해 같은 진술을 쓴다. 먼저 유한 합의 두 가지 작은 사실을 보인다. $n$은 자연수, $1 \le k \le n$이고 $t_i$($1 \le i \le n$)는 실수이다.

- (가) 모든 $i$에서 $0 \le t_i$이면 $t_k \le \sum_{i=1}^{n} t_i$이다.
- (나) $i \ne k$인 모든 $i$에서 $t_i = 0$이면 $\sum_{i=1}^{n} t_i = t_k$이다.

[[splitting-and-shifting-finite-sums|유한 합의 쪼개기]]의 (1)을 두 번 쓰고 [[finite-sum-of-reals]]의 (2)를 쓰면 $\sum_{i=1}^{n} t_i = \sum_{i=1}^{k-1} t_i + t_k + \sum_{i=k+1}^{n} t_i$이다. (가)에서는 유한 합의 선형성과 부등식의 (6)에 의해 양 끝의 두 합이 $0$ 이상이므로 순서 성질 (2)에 의해 $t_k$ 이상이다. (나)에서는 그 항목의 (2)에 의해 양 끝의 두 합이 모든 항이 $0$인 합이므로 $0$이다.

또 실수 $s$에 대하여, $x$에서의 값이 "$s \le x$이면 $1$, $x < s$이면 $0$"인 함수를 $h_s : \mathbb{R} \to \mathbb{R}$라 하자([[real-valued-function]]의 (1)). $s \le u$이면 모든 실수 $x$에서
$$
\chi_{[s, u)}(x) = h_s(x) - h_u(x)
$$
이다. 실제로 $x < s$이면 $x < u$이므로 양변이 $0 - 0 = 0$이고, $s \le x < u$이면 $1 - 0 = 1$이며, $u \le x$이면 $s \le x$이므로 $0 = 1 - 1$이다([[indicator-function|지시함수]]의 (1)). 이 식을 (다)라 부른다.

**(1)** (i) $a = b$이면 $a \le x < a$인 실수 $x$는 순서 성질 (1)의 (i)에 의해 없으므로 $[a, a) = \emptyset$이다. $a < b$이면 $a \le a < b$이므로 $a \in [a, b)$이고 $[a, b) \ne \emptyset$이다.

(ii) $[a, b) = [a', b') = \emptyset$이면 (i)에 의해 $a = b$이고 $a' = b'$이므로 두 차가 $0$이다. 그렇지 않으면 (i)에 의해 $a < b$이고 $a' < b'$이다. $a \in [a', b')$이므로 $a' \le a$이고, $a' \in [a, b)$이므로 $a \le a'$이어서 순서 성질 (1)의 (ii)에 의해 $a = a'$이다. $b < b'$이라 하면 $a' = a < b < b'$이므로 $b \in [a', b')$인데 $b \notin [a, b)$이어서 모순이다. 같은 방법으로 $b' < b$도 아니므로 순서 성질 (1)의 (iii)에 의해 $b = b'$이다. 따라서 $b - a = b' - a'$이다.

(iii) $\mu = \min\{b, b'\}$로 두자. [[absolute-value|절댓값]]의 (10)에 의해 $\alpha \le \beta$이다. 같은 (10)에 의해 실수 $x$가 $a \le x$이고 $a' \le x$인 것은 정확히 $\alpha \le x$일 때이고($\alpha$는 $a$ 또는 $a'$이고 둘 다 이상이다), $x < b$이고 $x < b'$인 것은 정확히 $x < \mu$일 때이다($\mu$는 $b$ 또는 $b'$이고 둘 다 이하이다). 따라서 $x \in [a, b) \cap [a', b')$인 것은 정확히 $\alpha \le x < \mu$일 때이다. $\alpha \le \mu$이면 $\beta = \mu$이므로 이 집합은 $[\alpha, \beta)$이다. $\mu < \alpha$이면 $\alpha \le x < \mu$인 $x$가 없으므로 교집합은 공집합이고, $\beta = \alpha$이므로 (i)에 의해 $[\alpha, \beta) = \emptyset$이다.

**(2)의 (i)** $t_0 \le x < t_m$이라 하자. $\{k \in \{1, \dots, m\} : x < t_k\}$는 $m$을 원소로 가지므로 [[well-ordering-principle|정렬 원리]]에 의해 최소 원소 $j$가 있다. $j = 1$이면 $t_0 \le x$이고, $j \ge 2$이면 $j - 1$은 그 집합에 속하지 않으므로 $t_{j-1} \le x$이다. 어느 경우든 $t_{j-1} \le x < t_j$이다. $j < k$인 두 정수가 모두 그렇다면 $j \le k - 1$이므로 $t_j \le t_{k-1} \le x < t_j$가 되어 모순이다.

**(2)의 (ii)** $x$가 $t_0 \le x < t_m$이면 (i)의 $j$에서만 $\chi_{[t_{j-1}, t_j)}(x) = 1$이고 다른 항의 지시함수 값은 $0$이므로, (나)에 의해 오른쪽 합은 $v_j = \varphi(x)$이다. $x < t_0$이거나 $t_m \le x$이면 모든 $[t_{j-1}, t_j)$에 $x$가 속하지 않으므로 오른쪽 합은 $0 = \varphi(x)$이다. 부등식은 $\varphi(x) = v_j$이면 (가)에 의해 $|v_j| \le \sum_{k=1}^{m} |v_k|$이고, $\varphi(x) = 0$이면 유한 합의 선형성과 부등식의 (6)에 의해 $0 \le \sum_{k=1}^{m} |v_k|$이기 때문이다. $t_0 < t_m$이고, $x \notin [t_0, t_m]$이면 $x < t_0$이거나 $t_m < x$이므로 $\varphi(x) = 0$이다.

**(2)의 (iii)** $x < t_0$이면 $\delta = t_0 - x$, $t_m \le x$이면 $\delta = 1$로 두면 그 범위의 $y$에서 $\varphi(y) = 0 = \varphi(x)$이다. $t_0 \le x < t_m$이면 (i)의 $j$에 대하여 $\delta = t_j - x$로 두면 $x \le y < x + \delta$인 $y$는 $t_{j-1} \le y < t_j$이므로 $\varphi(y) = v_j = \varphi(x)$이다.

**(2)의 첫 문장** 계단 꼴을 가지면 (ii)의 식이 일차결합 꼴이므로 $\varphi$는 계단함수이다. 거꾸로 $\varphi$가 정의의 일차결합 꼴을 갖는다고 하자. $0 \le k \le N$인 정수 $k$마다 $E_k = \{0, 1\} \cup \{a_i : 1 \le i \le k\} \cup \{b_i : 1 \le i \le k\}$로 두면 $E_0 = \{0, 1\}$은 원소를 $2$개 갖는 유한집합이고, $E_k = E_{k-1} \cup (\{a_k\} \cup \{b_k\})$이므로 [[maximum-of-finite-set|유한집합의 최댓값과 최솟값]]의 (4)와 $k$에 관한 [[mathematical-induction|수학적 귀납법]]에 의해 모든 $E_k$가 공집합이 아닌 유한집합이다. $E = E_N$으로 두면 $\{0, 1\} \subseteq E$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $E$의 원소의 개수는 $2$ 이상이다. 그 개수를 $m + 1$로 쓰면 $m$은 자연수이다. $u$를 $E$의 크기순 나열이라 하고 $0 \le j \le m$에서 $t_j = u(j + 1)$로 두면, [[increasing-listing-of-finite-set|크기순 나열]]의 (2)에 의해 $j < k$이면 $t_j < t_k$이다. 또 $1 \le j \le m$이면 $E$의 모든 원소 $e$는 $e \le t_{j-1}$이거나 $t_j \le e$이다. 실제로 $e = u(k)$인 $k$가 있고, 같은 (2)에 의해 $k \le j$이면 $u(k) \le u(j) = t_{j-1}$이며 $j + 1 \le k$이면 $t_j = u(j + 1) \le u(k)$이다.

이제 $1 \le j \le m$이고 $t_{j-1} \le x < t_j$라 하자. 각 $i$에서 $a_i \in E$이므로 $a_i \le t_{j-1}$이거나 $t_j \le a_i$이고, 앞의 경우 $a_i \le x$, 뒤의 경우 $x < a_i$이다. 따라서 $a_i \le x$인 것은 정확히 $a_i \le t_{j-1}$일 때이다. 마찬가지로 $b_i \le t_{j-1}$이면 $b_i \le x$이고, $t_j \le b_i$이면 $x < b_i$이므로, $x < b_i$인 것은 정확히 $t_{j-1} < b_i$일 때이다. 이 두 조건은 $x$를 $t_{j-1}$로 바꾸어도 같으므로 모든 $i$에서 $\chi_{[a_i, b_i)}(x) = \chi_{[a_i, b_i)}(t_{j-1})$이고 $\varphi(x) = \varphi(t_{j-1})$이다. $v_j = \varphi(t_{j-1})$로 둔다. $x < t_0$이면, $t_0 = \min E$([[increasing-listing-of-finite-set|크기순 나열]]의 (2))이고 $a_i \in E$이므로 $x < a_i$이어서 모든 지시함수 값이 $0$이고 $\varphi(x) = 0$이다. $t_m \le x$이면 $t_m = \max E$이므로 $b_i \le x$이어서 역시 $\varphi(x) = 0$이다. 따라서 $\varphi$는 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 갖는다.

**(3)의 (i)** $0 \le j \le m$인 $j$마다 양의 실수 $\delta_j$를 $j = 0$이면 $t_1 - t_0$, $j = m$이면 $t_m - t_{m-1}$, $0 < j < m$이면 $\min\{t_j - t_{j-1}, t_{j+1} - t_j\}$로 둔다($m = 1$이면 $\delta_0 = \delta_1 = t_1 - t_0$이다). 그러면 $t_j - \delta_j < y < t_j$이면 $\varphi(y) = v_j$이고, $t_j \le y < t_j + \delta_j$이면 $\varphi(y) = v_{j+1}$이다. 실제로 $j = 0$이면 앞의 $y$는 $y < t_0$이므로 $\varphi(y) = 0 = v_0$이고 뒤의 $y$는 $t_0 \le y < t_1$이다. $j \ge 1$이면 앞의 $y$는 $t_{j-1} \le t_j - \delta_j < y < t_j$이다. $j = m$이면 뒤의 $y$는 $t_m \le y$이므로 $\varphi(y) = 0 = v_{m+1}$이고, $j < m$이면 뒤의 $y$는 $t_j \le y < t_{j+1}$이다.

$v_j = v_{j+1}$이면 $|y - t_j| < \delta_j$인 모든 $y$에서 $\varphi(y) = v_j = \varphi(t_j)$이므로, 모든 양수 $\varepsilon$에 $\delta = \delta_j$가 [[continuous-function]]의 연속의 정의를 만족한다. $v_j \ne v_{j+1}$이면 $\varepsilon = |v_j - v_{j+1}|$은 양수이고, 양수 $\delta$마다 $y = t_j - \min\{\delta, \delta_j\}/2$는 $|y - t_j| < \delta$이고 $t_j - \delta_j < y < t_j$이므로 $|\varphi(y) - \varphi(t_j)| = |v_j - v_{j+1}| = \varepsilon$이다. continuous-function 의 (1)에 의해 $\varphi$는 $t_j$에서 불연속이다.

$x$가 어느 $t_j$와도 다르면 $\varphi$는 $x$에서 연속이다. $x < t_0$이면 $\delta = t_0 - x$로, $t_m < x$이면 $\delta = x - t_m$으로 두면 $|y - x| < \delta$인 $y$에서 $\varphi(y) = 0 = \varphi(x)$이다. $t_0 < x < t_m$이면 (2)의 (i)의 $j$에 대하여 $x \ne t_{j-1}$이므로 $t_{j-1} < x < t_j$이고, $\delta = \min\{x - t_{j-1}, t_j - x\}$로 두면 $|y - x| < \delta$인 $y$에서 $\varphi(y) = v_j = \varphi(x)$이다. 어느 경우든 모든 양수 $\varepsilon$에 이 $\delta$가 연속의 정의를 만족한다. 이로써 식이 증명되었다. 오른쪽 집합은 $\{t_0, \dots, t_m\}$의 부분집합이고 이 집합은 크기순 나열에 의해 원소를 $m + 1$개 가지므로, [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $D_\varphi$는 유한집합이다.

**(3)의 (ii)** 영함수는 상수함수이므로 [[continuous-function]]의 (4)에 의해 연속이고 $D_\varphi = \emptyset$이다. 거꾸로 $D_\varphi = \emptyset$이면 (i)에 의해 $0 \le j \le m$인 모든 $j$에서 $v_j = v_{j+1}$이므로, $j$에 관한 귀납법으로 모든 $j$에서 $v_j = v_0 = 0$이다. 따라서 $\varphi$는 모든 칸과 칸 밖에서 $0$이다.

**(3)의 (iii)** $\varphi$의 계단 꼴(점 $t_0, \dots, t_m$, 값 $v_1, \dots, v_m$)을 하나 잡고 $v_0 = v_{m+1} = 0$으로 두자. $J = \{j : 0 \le j \le m,\ v_j \ne v_{j+1}\}$은 정수의 유한집합이다. $J$의 원소가 하나 이하라고 하자. $J = \emptyset$이면 (ii)의 증명처럼 $\varphi$가 영함수이다. $J = \{p\}$이면 $j < p$에서 $v_j = v_{j+1}$이므로 $v_p = v_0 = 0$이고, $p < j \le m$에서 $v_j = v_{j+1}$이므로 $v_{p+1} = v_{m+1} = 0$이어서 $v_p = v_{p+1}$이 되어 $p \in J$와 모순이다. 따라서 $J$는 원소를 $r + 1$개 갖고 $r$은 자연수이다. $J$의 크기순 나열로 $J$의 원소를 $j_0 < \dots < j_r$로 쓰고 $d_i = t_{j_i}$로 두면 $i$에서의 값이 $d_i$인 함수는 순증가하고 그 값의 집합은 (i)에 의해 $D_\varphi$이므로, [[increasing-listing-of-finite-set|크기순 나열]]의 (1)에 의해 $D_\varphi$는 원소를 $r + 1$개 갖고 $d_0 < \dots < d_r$가 그 크기순 나열이다.

$1 \le i \le r$이고 $d_{i-1} \le x < d_i$라 하자. $x$는 $t_{j_{i-1}} \le x < t_{j_i}$이므로 (2)의 (i)에 의해 $j_{i-1} < k \le j_i$인 $k$로 $t_{k-1} \le x < t_k$이고 $\varphi(x) = v_k$이다. $j_{i-1} < j' < j_i$인 $j'$은 $J$에 속하지 않으므로 $v_{j'} = v_{j'+1}$이고, 귀납법으로 $v_{j_{i-1}+1} = v_k$이다. $d_{i-1} = t_{j_{i-1}}$에서의 값도 $v_{j_{i-1}+1}$이므로 $\varphi(x) = \varphi(d_{i-1})$이다. $x < d_0$이면, $x < t_0$이어서 $\varphi(x) = 0$이거나, $t_{k-1} \le x < t_k$인 $k \le j_0$이 있고 $0 \le j' < j_0$에서 $v_{j'} = v_{j'+1}$이므로 $v_k = v_0 = 0$이다. $d_r \le x$이면, $t_m \le x$이어서 $\varphi(x) = 0$이거나, $t_{k-1} \le x < t_k$인 $k \ge j_r + 1$이 있고 $j_r < j' \le m$에서 $v_{j'} = v_{j'+1}$이므로 $v_k = v_{m+1} = 0$이다. 따라서 $\varphi$는 점 $d_0, \dots, d_r$과 값 $\varphi(d_0), \dots, \varphi(d_{r-1})$의 계단 꼴을 갖는다. $D_\varphi$는 $\varphi$만으로 정해지는 집합이고 크기순 나열은 그 항목의 (1)에 의해 하나뿐이므로, 점과 값은 $\varphi$만으로 정해진다.

**(4)** 먼저 두 가지를 보인다. 아래에서 $c' < d'$이다.

- (라) $c' \le s \le d'$이면 $h_s$는 $[c', d']$에서 적분가능하고 $\int_{c'}^{d'} h_s = d' - s$이다. $c' < s < d'$이면, $[c', s]$에서 $h_s$는 $s$에서만 $0$이 아닐 수 있으므로 값이 $0$인 상수함수에 [[changing-finitely-many-values|유한 개의 값을 바꾼 함수의 적분]]의 (4)를 쓰면 적분가능하고 적분이 $0$이며([[riemann-integral]]의 (5)), $[s, d']$에서 $h_s$는 값이 $1$인 상수함수이므로 적분이 $d' - s$이다. [[additivity-of-the-integral|적분의 구간 덧셈]]의 (1)과 (5)에 의해 결론이 나온다. $s = c'$이면 $h_s$는 $[c', d']$에서 값이 $1$이고, $s = d'$이면 $[c', d']$에서 $d'$에서만 $0$이 아닐 수 있으므로 같은 방법으로 적분이 각각 $d' - c'$, $0 = d' - d'$이다.
- (마) $c' \le c < d \le d'$이고 $g : \mathbb{R} \to \mathbb{R}$가 $[c, d]$ 밖에서 $0$이며 $[c', d']$에서 적분가능하면, $g$는 $[c, d]$에서 적분가능하고 $\int_{c'}^{d'} g = \int_c^d g$이다. 적분의 구간 덧셈의 (2)와 (5)에 의해 $g$는 $[c, d]$에서 적분가능하다. $c' < c$이면 $[c', c]$에서 $g$는 $c$에서만 $0$이 아닐 수 있으므로 (라)와 같은 방법으로 적분가능하고 적분이 $0$이며, $d < d'$이면 $[d, d']$에서도 그렇다. 적분의 구간 덧셈의 (1)과 (5)를 있는 쪽에 쓰면 $\int_{c'}^{d'} g = 0 + \int_c^d g + 0$이다.

이제 $\varphi$가 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 갖고, $c < d$이며 $\varphi$가 $[c, d]$ 밖에서 $0$이라 하자. $c' = \min\{c, t_0\}$, $d' = \max\{d, t_m\}$로 두면 $c' \le c < d \le d'$이고 $c' \le t_j \le d'$이다. (2)의 (ii)와 (다)에 의해 모든 실수 $x$에서 $\varphi(x) = \sum_{j=1}^{m} v_j \bigl(h_{t_{j-1}}(x) - h_{t_j}(x)\bigr)$이므로, (라)와 [[linearity-of-the-integral|적분의 선형성]]의 (4)를 $m$에 관한 귀납법으로 쓰면 $\varphi$는 $[c', d']$에서 적분가능하고
$$
\begin{aligned} \int_{c'}^{d'} \varphi &= \sum_{j=1}^{m} v_j \bigl( (d' - t_{j-1}) \\ &\qquad - (d' - t_j) \bigr) \\ &= \sum_{j=1}^{m} v_j (t_j - t_{j-1}) \end{aligned}
$$
이다. (마)에 의해 $\varphi$는 $[c, d]$에서 적분가능하고 $\int_c^d \varphi$는 이 값과 같다. 이 값은 $c$, $d$를 쓰지 않으므로 (i)의 독립성이 나오고, (2)에 의해 $\varphi$에는 계단 꼴이 있으므로 (i)이 증명되었으며, 같은 $c$, $d$에서 두 계단 꼴의 값이 같아야 하므로 (ii)도 증명되었다. (iii): $a < b$이면 $\chi_{[a, b)}$는 점 $a$, $b$와 값 $1$의 계단 꼴을 가지므로 (ii)에 의해 적분이 $b - a$이다. $a = b$이면 $\chi_{[a, a)} = \chi_{\emptyset}$은 영함수이다. 영함수는 점 $0$, $1$과 값 $0$의 계단 꼴을 가지므로 적분이 $0 = b - a$이다.

**(5)** $\varphi = \sum_{i=1}^{N} \lambda_i \chi_{[a_i, b_i)}$, $\psi = \sum_{l=1}^{L} \mu_l \chi_{[a'_l, b'_l)}$을 일차결합 꼴이라 하자. 합: [[splitting-and-shifting-finite-sums|유한 합의 쪼개기]]의 (3)으로 두 합을 이어 붙인 $N + L$개 항의 합이 $\varphi(x) + \psi(x)$이므로 일차결합 꼴이다. 상수배: 유한 합의 선형성과 부등식의 (1)에 의해 $k\varphi(x) = \sum_{i=1}^{N} (k\lambda_i) \chi_{[a_i, b_i)}(x)$이다. 차는 $\varphi + (-1)\psi$이다. 유한 개의 합은 $K$에 관한 귀납법으로 나온다($K = 0$이면 영함수이고 $N = 0$인 일차결합 꼴을 갖는다). 절댓값: (2)에 의해 $\varphi$가 점 $t_0, \dots, t_m$과 값 $v_1, \dots, v_m$의 계단 꼴을 가지면 $|\varphi|$는 같은 점과 값 $|v_1|, \dots, |v_m|$의 계단 꼴을 갖는다($|0| = 0$). 최대와 최소: 실수 $p$, $q$에 대하여
$$
\begin{gathered} \max\{p, q\} = \tfrac{1}{2}\bigl((p + q) + |p - q|\bigr), \\ \min\{p, q\} = \tfrac{1}{2}\bigl((p + q) - |p - q|\bigr) \end{gathered}
$$
이다. $p \le q$이면 $p - q \le 0$이므로 $|p - q| = q - p$이고 두 식은 $q$와 $p$이며, $q < p$이면 $|p - q| = p - q$이고 두 식은 $p$와 $q$이기 때문이다([[absolute-value|절댓값]]의 정의). 따라서 $\max\{\varphi, \psi\}$와 $\min\{\varphi, \psi\}$는 앞의 연산으로 얻는 계단함수이다. 곱: 먼저 $a \le b$이면 [[indicator-function|지시함수]]의 (3)과 (1)의 (iii)에 의해 $\chi_{[a_i, b_i)}(x)\chi_{[a, b)}(x) = \chi_{[\alpha_i, \beta_i)}(x)$인 $\alpha_i \le \beta_i$가 있으므로, 유한 합의 선형성과 부등식의 (1)에 의해 $\varphi(x)\chi_{[a, b)}(x) = \sum_{i=1}^{N} \lambda_i \chi_{[\alpha_i, \beta_i)}(x)$이고, $x$에서의 값이 $\varphi(x)\chi_{[a, b)}(x)$인 함수는 계단함수이다. 같은 (1)에 의해 $\varphi(x)\psi(x) = \sum_{l=1}^{L} \mu_l \, \varphi(x)\chi_{[a'_l, b'_l)}(x)$이므로 $\varphi\psi$는 계단함수 $L$개의 합이고, 앞에서 보인 것에 의해 계단함수이다.

**(6)** (2)의 (ii)에 의해 $\varphi$는 어떤 $[c_1, d_1]$ 밖에서, $\psi$는 어떤 $[c_2, d_2]$ 밖에서 $0$이다. $c = \min\{c_1, c_2\}$, $d = \max\{d_1, d_2\}$로 두면 $c < d$이고 $\varphi$, $\psi$, $\varphi \pm \psi$, $k\varphi$, $|\varphi|$가 모두 $[c, d]$ 밖에서 $0$이다. (4)의 (i)에 의해 이 함수들의 $\int_{\mathbb{R}}$은 모두 $\int_c^d$이고, [[real-valued-function]]의 (6)에 의해 제한한 함수들 사이에도 같은 연산이 성립한다. (i)은 [[linearity-of-the-integral|적분의 선형성]]의 (4)이고, 유한 개의 합은 $K$에 관한 귀납법으로 나온다. (ii)는 [[monotonicity-of-the-integral|적분의 단조성]]의 (3)과 (4)의 (iii)(영함수의 적분)이고, (iii)은 그 항목의 (5)이다. (iv): (4)의 (iii)에 의해 각 $\lambda_i\chi_{[a_i, b_i)}$는 계단함수이고 적분이 $\lambda_i(b_i - a_i)$이므로 (i)에서 나온다.

**(7)** (i): $0 \le k \le N$마다 $A_k = \{x : x \in [a_i, b_i) \text{인 } i \le k \text{가 있다}\}$로 두면 $\chi_{A_0} = \chi_{\emptyset}$은 영함수이고, $A_k = A_{k-1} \cup [a_k, b_k)$이므로 지시함수의 (3)에 의해 $\chi_{A_k}$의 값은 $\max\{\chi_{A_{k-1}}(x), \chi_{[a_k, b_k)}(x)\}$이다. (5)와 귀납법으로 $\chi_A = \chi_{A_N}$은 계단함수이다.

(ii): $A = \emptyset$이면 모든 조각이 공집합이고 합은 $0$이며 $\chi_A$는 영함수이므로 (4)의 (iii)에 의해 결론이 성립한다. $A \ne \emptyset$이면 $A$의 원소에서 $\chi_A$의 값이 $1$이므로 $\chi_A$는 영함수가 아니고 (3)의 (iii)이 쓰인다. 정의에서 늘 $p_i \le q_i$이다. $\chi_A(d_{i-1})$은 지시함수의 (1)에 의해 $0$이거나 $1$이다. $i \le r$이고 $\chi_A(d_{i-1}) = 1$이면 $[d_{i-1}, d_i)$의 모든 점에서 $\chi_A$의 값이 $1$이므로 $[p_i, q_i) \subseteq A$이고, 나머지 경우는 (1)의 (i)에 의해 $[p_i, q_i) = \emptyset \subseteq A$이다. $i \ne i'$이면, 둘 다 $r$ 이하일 때 $[p_i, q_i) \subseteq [d_{i-1}, d_i)$이고 (2)의 (i)에 의해 $[d_{i-1}, d_i)$와 $[d_{i'-1}, d_{i'})$는 서로소이며, 하나가 $r$보다 크면 그 조각이 공집합이다. 합집합: [[sequence-of-sets|집합열]]의 (2)에 의해 $\bigcup_{i=1}^{\infty} [p_i, q_i) \subseteq A$이다. $x \in A$이면 $\chi_A(x) = 1 \ne 0$이므로 $d_0 \le x < d_r$이고, (2)의 (i)의 $i$로 $d_{i-1} \le x < d_i$이며 $\chi_A(d_{i-1}) = \chi_A(x) = 1$이므로 $x \in [p_i, q_i)$이다. 합: $i \le r$에서 $q_i - p_i = \chi_A(d_{i-1})(d_i - d_{i-1})$이고 $r < i$에서 $0$이므로, [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (4)와 (1)의 정의에 의해 $\sum_{i=1}^{\infty} (q_i - p_i) = \sum_{i=1}^{r} \chi_A(d_{i-1})(d_i - d_{i-1})$이고, (4)의 (ii)를 표준 계단 꼴에 쓰면 이것이 $\int_{\mathbb{R}} \chi_A$이다. 표준 계단 꼴은 $\chi_A$, 곧 $A$만으로 정해지므로 표준 조각열도 그렇다.

**(8)** $\varphi$의 계단 꼴(점 $t_0, \dots, t_m$, 값 $v_1, \dots, v_m$)에 대하여 $w_j$를 $v_j > t$이면 $1$, 아니면 $0$으로 두자. $t_{j-1} \le x < t_j$이면 $x \in A$인 것은 정확히 $v_j > t$일 때이므로 $\chi_A(x) = w_j$이고, 칸 밖에서는 $\varphi(x) = 0 < t$이므로 $\chi_A(x) = 0$이다. 따라서 $\chi_A$는 같은 점과 값 $w_1, \dots, w_m$의 계단 꼴을 갖는다. $B$도 $>$를 $\ge$로 바꾸어 같다($0 \ge t$는 거짓이다). 모든 $x$에서 $0 \le \varphi(x)$이면, $A \subseteq B$이므로 지시함수의 (2)에 의해 $\chi_A \le \chi_B$이고, $x \in B$이면 $t\chi_B(x) = t \le \varphi(x)$, $x \notin B$이면 $t\chi_B(x) = 0 \le \varphi(x)$이다. (6)의 (i), (ii)와 순서 성질 (4)의 (iii)에 의해 부등식이 나온다.

**(9)** $\theta(x) = \sum_{i=1}^{N} \chi_{[a_i, b_i)}(x)$로 정한 함수 $\theta$는 일차결합 꼴을 가지므로 계단함수이고 (6)의 (iv)에 의해 $\int_{\mathbb{R}} \theta = \sum_{i=1}^{N} (b_i - a_i)$이며, (4)의 (iii)에 의해 $\int_{\mathbb{R}} \chi_{[c, d)} = d - c$이다. (i): $x \in [c, d)$이면 $x \in [a_k, b_k)$인 $k$가 있고 모든 항이 $0$ 이상이므로 (가)에 의해 $\theta(x) \ge 1 = \chi_{[c, d)}(x)$이다. $x \notin [c, d)$이면 유한 합의 선형성과 부등식의 (6)에 의해 $\chi_{[c, d)}(x) = 0 \le \theta(x)$이다. (6)의 (ii)에서 결론이 나온다. (ii): 자연수 $n$마다 $n \le N$이면 $[a_n, b_n)$, $N < n$이면 $\emptyset$을 항으로 하는 집합열은 서로소이므로, 지시함수의 (6)의 (i)에 의해 $\theta(x) = \chi_{U}(x)$이다. 여기서 $U = \bigcup_{n=1}^{N} [a_n, b_n) \subseteq [c, d)$이므로([[sequence-of-sets|집합열]]의 (2)) 지시함수의 (2)에 의해 $\theta(x) \le \chi_{[c, d)}(x)$이다. (6)의 (ii)에서 결론이 나온다. $\blacksquare$
:::

## 예시와 반례

:::example[겹치는 세 지시함수의 일차결합]
$\varphi = 2\chi_{[0, 3)} - \chi_{[1, 3)} + \chi_{[3, 4)}$라 합시다. 끝점을 모으면 $\{0, 1, 3, 4\}$이고, $x$가 $[0, 1)$이면 $\varphi(x) = 2$, $[1, 3)$이면 $2 - 1 = 1$, $[3, 4)$이면 $1$, 그 밖에서는 $0$입니다. 그래서 $\varphi$는 점 $0, 1, 3, 4$와 값 $2, 1, 1$의 계단 꼴을 갖습니다(이 항목의 (2)).

(3)의 (i)로 불연속점을 찾습니다. $v_0 = 0$, $v_1 = 2$, $v_2 = 1$, $v_3 = 1$, $v_4 = 0$이므로 $v_j \ne v_{j+1}$인 $j$는 $0$, $1$, $3$이고 $D_\varphi = \{0, 1, 4\}$입니다. 점 $3$의 양쪽 값이 둘 다 $1$이므로 $3$은 불연속점이 아닙니다. 표준 계단 꼴은 점 $0, 1, 4$와 값 $\varphi(0) = 2$, $\varphi(1) = 1$입니다.

적분은 세 가지 꼴 어느 것으로 계산해도 같습니다. 일차결합 꼴로는 (6)의 (iv)에 의해 $2 \cdot 3 - 1 \cdot 2 + 1 \cdot 1 = 5$, 계단 꼴로는 (4)의 (ii)에 의해 $2 \cdot 1 + 1 \cdot 2 + 1 \cdot 1 = 5$, 표준 계단 꼴로는 $2 \cdot 1 + 1 \cdot 3 = 5$입니다.
:::

:::example[지시함수가 계단함수인 집합의 표준 조각열]
$A = [0, 1) \cup [1, 2) \cup [5, 6)$의 지시함수는 (7)의 (i)에 의해 계단함수입니다. $\chi_A$는 $[0, 2)$에서 $1$, $[5, 6)$에서 $1$, 나머지에서 $0$이므로 점 $0, 2, 5, 6$과 값 $1, 0, 1$의 계단 꼴을 갖고, 값이 모두 이웃끼리 다르므로 이것이 표준 계단 꼴입니다($1$은 불연속점이 아닙니다). 표준 조각열은 $(p_1, q_1) = (0, 2)$, $(p_2, q_2) = (2, 2)$, $(p_3, q_3) = (5, 6)$이고 $i \ge 4$에서 $(0, 0)$입니다. 조각은 $[0, 2)$, $\emptyset$, $[5, 6)$, $\emptyset, \dots$이고 길이의 합은 $2 + 0 + 1 = 3 = \int_{\mathbb{R}} \chi_A$입니다. 처음에 $A$를 쓸 때 $[0, 1)$과 $[1, 2)$로 나눈 것은 조각열에 남지 않습니다.
:::

:::counterexample[왼쪽 끝이 빠진 구간의 지시함수의 예]
$C = \{x \in \mathbb{R} : 0 < x \le 1\}$의 지시함수 $\chi_C$는 값이 $0$과 $1$ 두 가지뿐이지만 계단함수가 아닙니다. 계단함수라면 (2)의 (iii)에 의해 양수 $\delta$가 있어 $0 \le y < \delta$인 모든 $y$에서 $\chi_C(y) = \chi_C(0) = 0$이어야 합니다. 그런데 $y = \min\{\delta, 1\}/2$는 $0 < y \le 1$이므로 $\chi_C(y) = 1$입니다. 계단함수의 칸은 늘 왼쪽 끝을 포함하므로, 어떤 점 $x$의 오른쪽 아무리 가까이에도 $\varphi(x)$와 다른 값을 갖는 점이 있는 함수 $\varphi$는 (2)의 (iii)에 의해 계단함수가 아닙니다.
:::

:::counterexample[유계가 아닌 집합의 지시함수의 예]
$P = \{x \in \mathbb{R} : 0 \le x\}$의 지시함수 $\chi_P$도 계단함수가 아닙니다. 계단함수는 (2)의 (ii)에 의해 어떤 $[c, d]$ 밖에서 $0$인데, $\chi_P$는 $\max\{d, 0\} + 1$에서 값이 $1$입니다. 그래서 $\chi_P$는 $\chi_{[0, n)}$ $(n = 1, 2, \dots)$의 점마다의 극한이면서도 이 항목의 적분을 갖지 않습니다.
:::

## 확인 질문

:::check[0 에서 2 까지의 지시함수에서 1 에서 2 까지의 지시함수를 뺀 함수의 불연속점과 표준 계단 꼴은?]
$\varphi = \chi_{[0, 2)} - \chi_{[1, 2)}$라 합시다. $x \in [0, 1)$이면 $\varphi(x) = 1 - 0 = 1$, $x \in [1, 2)$이면 $1 - 1 = 0$, 그 밖에서는 $0$입니다. 점 $0, 1, 2$와 값 $1, 0$의 계단 꼴에서 $v_0 = 0$, $v_1 = 1$, $v_2 = 0$, $v_3 = 0$이므로 (3)의 (i)에 의해 $D_\varphi = \{0, 1\}$입니다. 표준 계단 꼴은 점 $0, 1$과 값 $1$이고, $\varphi = \chi_{[0, 1)}$입니다. 일차결합 꼴의 끝점 $2$는 불연속점이 아닙니다.
:::

:::check[0 에서 2 까지와 1 에서 3 까지의 두 지시함수의 최대와 곱의 적분은?]
두 함수는 $\chi_{[0, 2)}$, $\chi_{[1, 3)}$입니다. $x$에서 두 값 가운데 큰 것은 $x \in [0, 3)$이면 $1$, 아니면 $0$이므로 최대는 $\chi_{[0, 3)}$이고 적분은 $3$입니다. 곱은 지시함수의 (3)에 의해 $\chi_{[0, 2) \cap [1, 3)}$이고, (1)의 (iii)에서 $\alpha = \max\{0, 1\} = 1$, $\beta = \max\{1, \min\{2, 3\}\} = 2$이므로 $\chi_{[1, 2)}$이며 적분은 $1$입니다. 두 함수의 적분의 합 $2 + 2 = 4$는 최대의 적분 $3$과 곱의 적분 $1$의 합과 같습니다.
:::
