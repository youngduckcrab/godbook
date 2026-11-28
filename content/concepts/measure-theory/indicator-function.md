---
title: 지시함수
title_en: Indicator Function
aliases: [특성함수, 집합의 지시함수, indicator function, characteristic function of a set]
kind: definition
field: measure-theory
msc: ["28A05", "26A99"]
level: undergrad
summary: 집합 X 의 부분집합 A 에 대해 A 의 점에서 1, 나머지 점에서 0 인 함수 X → ℝ 를 A 의 지시함수라 하고, 포함·교집합·합집합·여집합·서로소인 합집합과 지시함수의 값 사이의 관계, 서로소인 집합열의 지시함수의 급수를 증명한다.
requires: [set, subset, set-operations, function, function-composition, image-and-preimage, mathematical-induction, recursion-theorem, sequence-of-sets, natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, sequence, limit-of-sequence, series-and-partial-sums, sum-of-a-series, finite-sum-of-reals, rational-and-irrational-numbers, real-valued-function, dirichlet-function, even-and-odd, archimedean-property, convergent-sequence-is-bounded]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 3.1절 Definition and examples, Definition 3.12 (p.63) 와 Proposition 3.15 (p.64); 2.6절 Exercise 2.2 (p.51); 3.5절 Exercise 3.3 (p.82); 1장 Proposition 1.6 의 증명 (p.13); 1.1절 Example 1.10 (p.17–19); 5.1절 Example 5.5 (p.126); 5.3절 Theorem 5.17 뒤의 문단 (p.138); 5.4절 Example 5.31 (p.147)
    checked: original
    note: "출처 Definition 3.12 는 X 의 부분집합 A 의 characteristic function(indicator function) χ_A : X → {0, 1} 을 x ∈ A 이면 1, 아니면 0 으로 정의한다. 이 항목은 같은 함수를 공역 ℝ 로 선언한다(값의 계산과 급수에 쓰기 위해서이다). Exercise 2.2 도 같은 정의를 적고 χ_A + χ_B ≡ χ_{A△B}, χ_A·χ_B ≡ χ_{A∩B} (mod 2) 를 힌트로 든다. Exercise 3.3 은 (a) A ⊂ B ⇔ χ_A ≤ χ_B, (b) χ_{A∩B} = χ_A·χ_B = min, (c) χ_{A∪B} = χ_A + χ_B − χ_A·χ_B = max = 1 − (1 − χ_A)(1 − χ_B), (d) χ_{X∖A} = 1 − χ_A, (e) χ_{A△B} = |χ_A − χ_B| 를 증명하라고 한다. 이 항목의 (2)(3)은 (a)–(d)를 값의 등식으로 적고 차집합의 식을 더한 것이고, (4)는 (b)에서 B = A 로 둔 꼴이다. 출처 Definition 3.12 바로 뒤의 Proposition 3.13(χ_A 가 가측인 것과 A 가 가측인 것의 동치)은 이 항목에 두지 않는다. 출처 Proposition 3.15(p.64)는 단순함수가 서로소인 집합들의 지시함수의 일차결합이라는 것을 진술한다. 예시 '한 점 집합들의 지시함수의 급수'의 한 점 집합 {n} 의 지시함수들은 출처가 셈측도의 적분을 계산하며 ℕ 위의 함수를 x_k 와 한 점 집합 {k} 의 지시함수의 곱의 합으로 쓰는 곳(Example 5.5 의 p.126, Theorem 5.17 뒤 문단의 p.138)과 같은 대상이다. 예시 '유리수의 지시함수'에서 디리클레 함수와의 관계는 출처의 Example 1.10(p.17–19)이 유리수의 열거로 만든 함수들의 극한이 [0, 1] 위의 디리클레 함수라는 것과 같은 대상이다. 출처 Proposition 1.6 의 증명(p.13)은 그 디리클레 함수 D 를 [0, 1] 의 유리수에서 1, 나머지에서 0 으로 정의하고, Example 5.31(p.147)은 같은 함수를 f := χ_Q̃ (Q̃ 은 [0, 1] 의 유리수 전체)로 쓴다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 표본 확인(러셀의 논법, Kanovei–Katz 인용 대조, min·max 와 1 의 합의 경계 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
집합과 부분집합, 두 집합의 합집합·교집합·차집합은 [[set]], [[subset]], [[set-operations|집합의 연산]]의 것이고, 함수와 함수의 같음은 [[function]], 합성은 [[function-composition|함수의 합성]], 역상은 [[image-and-preimage|상과 역상]]의 것이다. 집합열, 서로소인 집합열, $\bigcup_{n=1}^{N} A_n$과 $\bigcup_{n=1}^{\infty} A_n$은 [[sequence-of-sets|집합열]]의 것이다. 실수의 계산과 순서는 [[real-number-arithmetic]], [[real-order-axioms]]의 것이고, 두 수의 최대 $\max\{a, b\}$와 최소 $\min\{a, b\}$는 [[absolute-value]]의 것이다. 유한 합 $\sum_{n=1}^{N}$은 [[finite-sum-of-reals]], 급수의 수렴과 합의 기호 $\sum_{n=1}^{\infty}$는 [[series-and-partial-sums|급수와 부분합]]과 [[sum-of-a-series]]의 것이다. 아래에서 $X$는 집합이다.

**지시함수.** $A$를 $X$의 부분집합이라 하자. $X$의 각 원소 $x$는 $x \in A$와 $x \notin A$ 가운데 정확히 하나를 만족하므로, [[recursion-theorem|재귀 정리]]의 (1)에 의해 다음 함수가 정해진다.
$$
\begin{gathered} \chi_A : X \to \mathbb{R}, \\ \chi_A(x) = \begin{cases} 1 & (x \in A \text{ 일 때}) \\ 0 & (x \notin A \text{ 일 때}) \end{cases} \end{gathered}
$$
이 함수를 ($X$ 위의) $A$의 **지시함수**(indicator function)라 한다. 지시함수는 정의역 $X$를 함께 정해야 뜻이 정해진다. 같은 $A$라도 $X$를 바꾸면 정의역이 다른 함수가 된다.

다음이 성립한다. 아래에서 $A$, $B$는 $X$의 부분집합이고 $x$는 $X$의 원소이다.

1. (값) $\chi_A(x) = 1$인 것은 정확히 $x \in A$일 때이고, $\chi_A(x) = 0$인 것은 정확히 $x \notin A$일 때이다. $\chi_A(x)$는 $0$이거나 $1$이고, $0 \le \chi_A(x) \le 1$이다. $\chi_{\emptyset}$은 모든 점에서 값이 $0$이고 $\chi_X$는 모든 점에서 값이 $1$이다.
2. (포함과 같음) $A \subseteq B$인 것은 정확히 $X$의 모든 원소 $y$에서 $\chi_A(y) \le \chi_B(y)$일 때이다. $A = B$인 것은 정확히 $\chi_A = \chi_B$일 때이다.
3. (교집합, 합집합, 여집합, 차집합)
   $$
   \begin{aligned}
   \chi_{A \cap B}(x) &= \chi_A(x)\,\chi_B(x) \\
   &= \min\{\chi_A(x), \chi_B(x)\}, \\
   \chi_{A \cup B}(x) &= \max\{\chi_A(x), \chi_B(x)\} \\
   &= \chi_A(x) + \chi_B(x) \\
   &\qquad - \chi_A(x)\,\chi_B(x), \\
   \chi_{X - A}(x) &= 1 - \chi_A(x), \\
   \chi_{A - B}(x) &= \chi_A(x)\bigl(1 - \chi_B(x)\bigr)
   \end{aligned}
   $$
   이다.
4. (제곱) $\chi_A(x)\,\chi_A(x) = \chi_A(x)$이다.
5. (서로소인 두 집합) $A \cap B = \emptyset$이면 $\chi_{A \cup B}(x) = \chi_A(x) + \chi_B(x)$이다.
6. (서로소인 집합열) $(A_n)$이 $X$의 서로소인 집합열이라 하자.
   - (i) $0$ 이상인 모든 정수 $N$에서 $\chi_{\bigcup_{n=1}^{N} A_n}(x) = \sum_{n=1}^{N} \chi_{A_n}(x)$이다.
   - (ii) $n$번째 항이 $\chi_{A_n}(x)$인 수열의 급수는 수렴하고
     $$
     \sum_{n=1}^{\infty} \chi_{A_n}(x) = \chi_{\bigcup_{n=1}^{\infty} A_n}(x)
     $$
     이다. 더 자세히, $x \notin \bigcup_{n=1}^{\infty} A_n$이면 모든 항이 $0$이고, $x \in A_m$이면 $n \ne m$인 모든 $n$에서 $\chi_{A_n}(x) = 0$이고 $\chi_{A_m}(x) = 1$이며, $N$번째 부분합은 $N < m$이면 $0$, $m \le N$이면 $1$이다.
7. (역상) $Y$가 집합이고 $f : Y \to X$가 함수이면, 모든 $y \in Y$에서 $(\chi_A \circ f)(y) = \chi_{f^{-1}(A)}(y)$이다. 곧 $\chi_A \circ f$는 $Y$ 위의 $f^{-1}(A)$의 지시함수이다.
:::

:::english
Sets and subsets, and the union, intersection, and difference of two sets are as in the entries on sets, subsets, and set operations; functions and equality of functions are as in the entry on functions, composition as in the entry on composition, and preimages as in the entry on images and preimages. Sequences of sets, pairwise disjoint sequences of sets, $\bigcup_{n=1}^{N} A_n$ and $\bigcup_{n=1}^{\infty} A_n$ are as in the entry on sequences of sets. Arithmetic and order of real numbers are as in the entries on real arithmetic and the order axioms, and the maximum $\max\{a, b\}$ and minimum $\min\{a, b\}$ of two numbers are as in the entry on absolute value. The finite sum $\sum_{n=1}^{N}$ is as in the entry on finite sums of reals, and convergence of series and the notation $\sum_{n=1}^{\infty}$ for the sum are as in the entries on series and on the sum of a series. Throughout, $X$ is a set.

**Indicator function.** Let $A$ be a subset of $X$. Each element $x$ of $X$ satisfies exactly one of $x \in A$ and $x \notin A$, so by (1) of the recursion theorem the following function is determined.
$$
\begin{gathered} \chi_A : X \to \mathbb{R}, \\ \chi_A(x) = \begin{cases} 1 & (\text{if } x \in A) \\ 0 & (\text{if } x \notin A) \end{cases} \end{gathered}
$$
This function is called the **indicator function** of $A$ (on $X$). The indicator function is determined only once the domain $X$ is fixed as well: for the same $A$, changing $X$ gives a function with a different domain.

The following hold. Below, $A$ and $B$ are subsets of $X$ and $x$ is an element of $X$.

1. (Values) $\chi_A(x) = 1$ exactly when $x \in A$, and $\chi_A(x) = 0$ exactly when $x \notin A$. The value $\chi_A(x)$ is $0$ or $1$, and $0 \le \chi_A(x) \le 1$. The function $\chi_{\emptyset}$ takes the value $0$ at every point, and $\chi_X$ takes the value $1$ at every point.
2. (Inclusion and equality) $A \subseteq B$ exactly when $\chi_A(y) \le \chi_B(y)$ for every element $y$ of $X$. $A = B$ exactly when $\chi_A = \chi_B$.
3. (Intersection, union, complement, difference)
   $$
   \begin{aligned}
   \chi_{A \cap B}(x) &= \chi_A(x)\,\chi_B(x) \\
   &= \min\{\chi_A(x), \chi_B(x)\}, \\
   \chi_{A \cup B}(x) &= \max\{\chi_A(x), \chi_B(x)\} \\
   &= \chi_A(x) + \chi_B(x) \\
   &\qquad - \chi_A(x)\,\chi_B(x), \\
   \chi_{X - A}(x) &= 1 - \chi_A(x), \\
   \chi_{A - B}(x) &= \chi_A(x)\bigl(1 - \chi_B(x)\bigr).
   \end{aligned}
   $$
4. (Idempotence) $\chi_A(x)\,\chi_A(x) = \chi_A(x)$.
5. (Two disjoint sets) If $A \cap B = \emptyset$, then $\chi_{A \cup B}(x) = \chi_A(x) + \chi_B(x)$.
6. (Pairwise disjoint sequences of sets) Let $(A_n)$ be a pairwise disjoint sequence of subsets of $X$.
   - (i) For every integer $N \ge 0$, $\chi_{\bigcup_{n=1}^{N} A_n}(x) = \sum_{n=1}^{N} \chi_{A_n}(x)$.
   - (ii) The series of the sequence whose $n$th term is $\chi_{A_n}(x)$ converges, and
     $$
     \sum_{n=1}^{\infty} \chi_{A_n}(x) = \chi_{\bigcup_{n=1}^{\infty} A_n}(x).
     $$
     More precisely, if $x \notin \bigcup_{n=1}^{\infty} A_n$, then every term is $0$; if $x \in A_m$, then $\chi_{A_n}(x) = 0$ for every $n \ne m$ and $\chi_{A_m}(x) = 1$, and the $N$th partial sum is $0$ if $N < m$ and $1$ if $m \le N$.
7. (Preimages) If $Y$ is a set and $f : Y \to X$ is a function, then $(\chi_A \circ f)(y) = \chi_{f^{-1}(A)}(y)$ for every $y \in Y$. That is, $\chi_A \circ f$ is the indicator function of $f^{-1}(A)$ on $Y$.
:::

## 직관

지시함수는 "이 점이 $A$에 들어 있는가"라는 물음에 $1$(예)이나 $0$(아니오)으로 답하는 함수입니다. 집합에 관한 사실을 수의 계산으로 옮겨 적을 수 있다는 것이 쓸모입니다. 두 조건을 모두 만족하는지는 두 답을 곱해서, 적어도 하나를 만족하는지는 두 답 가운데 큰 것을 골라서 알 수 있습니다((3)). 출석부에 출석한 사람은 $1$, 결석한 사람은 $0$을 적는 것과 같습니다. 출석부는 사람마다 칸이 있어야 하듯, 지시함수도 정의역 $X$의 모든 점에서 값을 가집니다.

서로소인 집합의 지시함수는 더해도 됩니다((5)). 두 집합이 겹치지 않으면 한 점은 많아야 하나의 집합에 들어 있으므로, 더한 값이 $1$을 넘지 않습니다. 집합이 겹치면 겹친 점에서 합이 $2$가 되어 합집합의 지시함수와 다를 수 있습니다(아래 반례). 서로소인 집합이 끝없이 이어져도 한 점은 많아야 하나의 $A_m$에만 들어 있으므로, 그 점에서의 급수는 $0$이 아닌 항이 많아야 하나이고 그 합이 합집합의 지시함수의 값입니다((6)).

## 성질의 증명

:::proof
**준비.** 정수 $0$, $1$은 실수이고 [[real-number-arithmetic]]의 (K7)에 의해 정수로서의 계산과 실수로서의 계산이 같다. $0 < 1$이다([[order-properties-of-reals]]의 (5)의 (ii)). $0 \cdot 0 = 0$, $0 \cdot 1 = 1 \cdot 0 = 0$, $1 \cdot 1 = 1$, $0 + 0 = 0$, $0 + 1 = 1 + 0 = 1$은 실수의 계산이다.

**(1)** 정의에서 $x \in A$이면 $\chi_A(x) = 1$, $x \notin A$이면 $\chi_A(x) = 0$이다. 거꾸로 $\chi_A(x) = 1$인데 $x \notin A$이면 $\chi_A(x) = 0$이 되어 $0 = 1$이 되는데, $0 < 1$이므로 [[order-properties-of-reals]]의 (1)의 (i)에 의해 $0 \ne 1$이어서 어긋난다. 따라서 $x \in A$이다. $\chi_A(x) = 0$인 경우도 같다. 따라서 값은 $0$이거나 $1$이고, $0 \le 0 \le 1$, $0 \le 1 \le 1$이다. $\emptyset$에는 원소가 없으므로 모든 $x$에서 $x \notin \emptyset$이고 $\chi_{\emptyset}(x) = 0$이다. 모든 $x \in X$는 $x \in X$이므로 $\chi_X(x) = 1$이다.

**(2)** $A \subseteq B$라 하고 $y \in X$라 하자. $y \in A$이면 $y \in B$이므로 $\chi_A(y) = 1 = \chi_B(y)$이다. $y \notin A$이면 $\chi_A(y) = 0 \le \chi_B(y)$이다((1)). 거꾸로 모든 $y$에서 $\chi_A(y) \le \chi_B(y)$라 하고 $y \in A$라 하자. $\chi_A(y) = 1$이므로 $1 \le \chi_B(y)$이다. (1)에 의해 $\chi_B(y)$는 $0$이거나 $1$인데, $0$이면 $1 \le 0$이 되어 $0 < 1$과 함께 [[order-properties-of-reals]]의 (1)의 (i)($0 < 1$과 $1 \le 0$은 함께 성립하지 않는다)에 어긋나므로 $\chi_B(y) = 1$이고, (1)에 의해 $y \in B$이다. 따라서 $A \subseteq B$이다. 같음: $A = B$이면 두 함수는 정의역 $X$가 같고 모든 점에서 값이 같으므로 [[function]]의 함수의 같음에 의해 $\chi_A = \chi_B$이다. 거꾸로 $\chi_A = \chi_B$이면 모든 점에서 $\chi_A(y) \le \chi_B(y)$이고 $\chi_B(y) \le \chi_A(y)$이므로 앞 문장에 의해 $A \subseteq B$이고 $B \subseteq A$이다.

**(3)** $x$가 $A$, $B$에 속하는지에 따라 네 경우 가운데 정확히 하나이다. 각 경우에 (1)로 값을 구하면 다음과 같다. 표의 칸은 왼쪽부터 $\chi_A(x)$, $\chi_B(x)$, $\chi_{A \cap B}(x)$, $\chi_{A \cup B}(x)$, $\chi_{X - A}(x)$, $\chi_{A - B}(x)$이다.

| 경우 | $\chi_A$ | $\chi_B$ | $\chi_{A \cap B}$ | $\chi_{A \cup B}$ | $\chi_{X - A}$ | $\chi_{A - B}$ |
|---|---|---|---|---|---|---|
| $x \in A$, $x \in B$ | 1 | 1 | 1 | 1 | 0 | 0 |
| $x \in A$, $x \notin B$ | 1 | 0 | 0 | 1 | 0 | 1 |
| $x \notin A$, $x \in B$ | 0 | 1 | 0 | 1 | 1 | 0 |
| $x \notin A$, $x \notin B$ | 0 | 0 | 0 | 0 | 1 | 0 |

각 줄에서 등식의 오른쪽을 계산한다. 첫째 줄: $1 \cdot 1 = 1$, $\min\{1, 1\} = 1$, $\max\{1, 1\} = 1$, $1 + 1 - 1 = 1$, $1 - 1 = 0$, $1 \cdot (1 - 1) = 0$. 둘째 줄: $1 \cdot 0 = 0$, $\min\{1, 0\} = 0$, $\max\{1, 0\} = 1$, $1 + 0 - 0 = 1$, $1 - 1 = 0$, $1 \cdot (1 - 0) = 1$. 셋째 줄: $0 \cdot 1 = 0$, $\min\{0, 1\} = 0$, $\max\{0, 1\} = 1$, $0 + 1 - 0 = 1$, $1 - 0 = 1$, $0 \cdot (1 - 1) = 0$. 넷째 줄: $0 \cdot 0 = 0$, $\min\{0, 0\} = 0$, $\max\{0, 0\} = 0$, $0 + 0 - 0 = 0$, $1 - 0 = 1$, $0 \cdot (1 - 0) = 0$. 최대와 최소는 [[absolute-value]]의 정의로 구했다($0 \le 1$이므로 $\max\{0, 1\} = \max\{1, 0\} = 1$이고 $\min\{0, 1\} = \min\{1, 0\} = 0$. 같은 두 수의 최대와 최소는 그 수이다). 모든 줄에서 오른쪽 값이 표의 왼쪽 값과 같다.

**(4)** (1)에 의해 $\chi_A(x)$는 $0$이거나 $1$이고 $0 \cdot 0 = 0$, $1 \cdot 1 = 1$이다.

**(5)** $A \cap B = \emptyset$이면 $\chi_{A \cap B}(x) = \chi_{\emptyset}(x) = 0$이므로 (3)에 의해 $\chi_A(x)\,\chi_B(x) = 0$이고, (3)의 둘째 등식에서 $\chi_{A \cup B}(x) = \chi_A(x) + \chi_B(x) - 0 = \chi_A(x) + \chi_B(x)$이다.

**(6)** (i) $N$에 관한 [[mathematical-induction|수학적 귀납법]]으로 보인다(정확히는 자연수 $j$에 대한 명제 "$N = j - 1$에서 성립한다"에 쓴다). $N = 0$이면 [[sequence-of-sets|집합열]]의 (3)에 의해 $\bigcup_{n=1}^{0} A_n = \emptyset$이므로 왼쪽은 $0$이고, 오른쪽은 빈 합이라 [[finite-sum-of-reals]]의 (2)에 의해 $0$이다. $N$에서 성립한다고 하자. $C = \bigcup_{n=1}^{N} A_n$이라 하면 [[sequence-of-sets|집합열]]의 (3)에 의해 $\bigcup_{n=1}^{N+1} A_n = C \cup A_{N+1}$이다. $a \in C \cap A_{N+1}$이면 [[sequence-of-sets|집합열]]의 (1)에 의해 $a \in A_n$인 $n \in \{1, \dots, N\}$이 있고, $n \le N < N + 1$이므로 $n \ne N + 1$이어서 $a \in A_n \cap A_{N+1} = \emptyset$이 되어 어긋난다. 따라서 $C \cap A_{N+1} = \emptyset$이고 (5)와 귀납 가정, [[finite-sum-of-reals]]의 (3)에 의해
$$
\begin{aligned}
\chi_{\bigcup_{n=1}^{N+1} A_n}(x) &= \chi_C(x) + \chi_{A_{N+1}}(x) \\
&= \sum_{n=1}^{N} \chi_{A_n}(x) + \chi_{A_{N+1}}(x) \\
&= \sum_{n=1}^{N+1} \chi_{A_n}(x)
\end{aligned}
$$
이다.

(ii) $n$번째 항이 $\chi_{A_n}(x)$인 수열은 [[sequence]]의 (1)로 정한 수열이다. 그 $N$번째 부분합을 $s_N$이라 하면 [[finite-sum-of-reals]]의 (1)과 (i)에 의해 $s_N = \chi_{\bigcup_{n=1}^{N} A_n}(x)$이다.

첫째 경우: $x \notin \bigcup_{n=1}^{\infty} A_n$이라 하자. [[sequence-of-sets|집합열]]의 (1)에 의해 모든 $n$에서 $x \notin A_n$이므로 모든 항이 $0$이다. 또 [[sequence-of-sets|집합열]]의 (2)에 의해 $\bigcup_{n=1}^{N} A_n \subseteq \bigcup_{n=1}^{\infty} A_n$이므로 $x \notin \bigcup_{n=1}^{N} A_n$이고 모든 $N$에서 $s_N = 0$이다. 모든 양의 실수 $\varepsilon$과 모든 자연수 $N$에서 $|s_N - 0| = 0 < \varepsilon$이므로 [[limit-of-sequence|수열의 극한]]의 정의에 의해 $(s_N)$은 $0$으로 수렴한다. 따라서 급수는 수렴하고 그 합은 $0 = \chi_{\bigcup_{n=1}^{\infty} A_n}(x)$이다.

둘째 경우: $x \in \bigcup_{n=1}^{\infty} A_n$이라 하자. [[sequence-of-sets|집합열]]의 (1)에 의해 $x \in A_m$인 자연수 $m$이 있다. $n \ne m$이면 $A_n \cap A_m = \emptyset$이므로 $x \notin A_n$이고 $\chi_{A_n}(x) = 0$이다. $\chi_{A_m}(x) = 1$이다. $N < m$이면, $n \in \{1, \dots, N\}$은 $n \le N < m$이라 $n \ne m$이므로 $x \notin A_n$이고, [[sequence-of-sets|집합열]]의 (1)에 의해 $x \notin \bigcup_{n=1}^{N} A_n$이어서 $s_N = 0$이다. $m \le N$이면 $m \in \{1, \dots, N\}$이므로 $x \in \bigcup_{n=1}^{N} A_n$이고 $s_N = 1$이다. 모든 양의 실수 $\varepsilon$에 대하여, $m$ 이상인 모든 자연수 $N$에서 $|s_N - 1| = 0 < \varepsilon$이므로 $(s_N)$은 $1$로 수렴한다. 따라서 급수는 수렴하고 그 합은 $1 = \chi_{\bigcup_{n=1}^{\infty} A_n}(x)$이다.

두 경우 모두 [[sum-of-a-series]]의 기호로 $\sum_{n=1}^{\infty} \chi_{A_n}(x) = \chi_{\bigcup_{n=1}^{\infty} A_n}(x)$이다.

**(7)** [[image-and-preimage]]의 (2)에 의해 $f^{-1}(A)$는 $Y$의 부분집합이므로 $Y$ 위의 지시함수 $\chi_{f^{-1}(A)}$가 정해진다. $y \in Y$라 하자. $y \in f^{-1}(A)$인 것은 정확히 $f(y) \in A$일 때이다. 따라서 $y \in f^{-1}(A)$이면 $(\chi_A \circ f)(y) = \chi_A(f(y)) = 1 = \chi_{f^{-1}(A)}(y)$이고, $y \notin f^{-1}(A)$이면 $f(y) \notin A$이므로 두 값이 모두 $0$이다. 두 함수는 정의역이 $Y$로 같고 모든 점에서 값이 같으므로 같은 함수이다.
:::

## 예시와 반례

:::example[유리수의 지시함수]
$X = \mathbb{R}$, $A = \mathbb{Q}$([[rational-and-irrational-numbers|유리수와 무리수]])라 하면 $\chi_{\mathbb{Q}}(x)$는 $x$가 유리수이면 $1$, 무리수이면 $0$입니다. $a < b$인 실수 $a$, $b$에 대하여 [[real-valued-function]]의 (6)의 제한 $\chi_{\mathbb{Q}}|_{[a, b]}$는 [[dirichlet-function|디리클레 함수]]의 진술의 $[a, b]$ 위의 디리클레 함수 $D$와 정의역이 같고 모든 점에서 값이 같으므로 같은 함수입니다. (3)에 의해 $\chi_{\mathbb{R} - \mathbb{Q}}(x) = 1 - \chi_{\mathbb{Q}}(x)$는 무리수에서 $1$, 유리수에서 $0$인 함수입니다.
:::

:::example[한 점 집합들의 지시함수의 급수]
$X = \mathbb{N}$이고 $A_n = \{n\}$이라 합시다. $n \ne m$이면 $\{n\} \cap \{m\} = \emptyset$이므로 $(A_n)$은 서로소이고, 자연수 $k$는 $A_k$에 속하므로 $\bigcup_{n=1}^{\infty} A_n = \mathbb{N}$입니다. (6)에 의해 모든 $k \in \mathbb{N}$에서 $\sum_{n=1}^{\infty} \chi_{\{n\}}(k) = \chi_{\mathbb{N}}(k) = 1$입니다. 예를 들어 $k = 3$에서 항은 $0, 0, 1, 0, 0, \dots$이고 부분합은 $0, 0, 1, 1, 1, \dots$입니다.
:::

:::counterexample[겹치는 두 집합에서는 지시함수의 합이 2가 될 수 있다]
$X = \{1, 2, 3\}$, $A = \{1, 2\}$, $B = \{2, 3\}$이라 합시다. $A \cup B = X$이므로 $\chi_{A \cup B}(2) = 1$이지만 $\chi_A(2) + \chi_B(2) = 1 + 1 = 2$입니다. (5)의 가정 $A \cap B = \emptyset$이 깨지는 곳($A \cap B = \{2\}$)에서 합집합의 지시함수와 두 지시함수의 합이 다릅니다. (3)에 따라 곱 $\chi_A(2)\,\chi_B(2) = 1$을 빼면 $2 - 1 = 1$로 맞습니다.
:::

:::counterexample[서로소가 아닌 집합열에서는 급수가 발산할 수 있다]
$X = \mathbb{N}$이고 모든 $n$에서 $A_n = \mathbb{N}$이라 합시다. 이 열은 서로소가 아닙니다($A_1 \cap A_2 = \mathbb{N} \ne \emptyset$). 점 $1$에서 항은 모두 $1$이고 [[finite-sum-of-reals]]의 (3)과 귀납법에 의해 $N$번째 부분합은 $N$입니다. 실수 $B$를 아무것이나 잡으면 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $B < N$인 자연수 $N$이 있으므로 부분합 수열은 유계가 아니고, [[convergent-sequence-is-bounded|수렴하는 수열은 유계]]의 (2)에 의해 수렴하지 않습니다. 따라서 급수는 발산하고, (6)의 등식의 왼쪽은 정해지지 않습니다. 합집합의 지시함수의 값은 $\chi_{\mathbb{N}}(1) = 1$입니다.
:::

## 확인 질문

:::check[$X = \mathbb{R}$, $A = \{x : x \le 1\}$, $B = \{x : 0 \le x\}$일 때 $\chi_A(x) + \chi_B(x) - 1$은 어떤 집합의 지시함수의 값인가?]
$A \cup B = \mathbb{R}$입니다(실수 $x$는 $x \le 1$이거나 $1 < x$이고, 뒤의 경우 $0 \le x$). 따라서 (1)에 의해 $\chi_{A \cup B}(x) = 1$이고, (3)의 둘째 등식에서 $\chi_A(x) + \chi_B(x) - \chi_A(x)\chi_B(x) = 1$, 곧 $\chi_A(x) + \chi_B(x) - 1 = \chi_A(x)\chi_B(x) = \chi_{A \cap B}(x)$입니다. 답은 $A \cap B = \{x : 0 \le x \le 1\}$의 지시함수입니다. 예를 들어 $x = 5$에서 $0 + 1 - 1 = 0$이고 $5 \notin A \cap B$입니다.
:::

:::check[$f : \mathbb{N} \to \mathbb{N}$을 $f(n) = 2n$으로 정하고 $A$를 짝수인 자연수 전체라 하자. $\chi_A \circ f$는 어떤 함수인가?]
모든 자연수 $n$에서 $f(n) = 2n$은 [[even-and-odd|짝수]]이므로 $f^{-1}(A) = \mathbb{N}$입니다. (7)에 의해 $\chi_A \circ f = \chi_{\mathbb{N}}$이고, (1)에 의해 모든 점에서 값이 $1$인 함수입니다. 실제로 $(\chi_A \circ f)(3) = \chi_A(6) = 1$입니다.
:::
