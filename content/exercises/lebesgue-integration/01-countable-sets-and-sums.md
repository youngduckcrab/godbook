---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "2.6절 Exercises, Exercise 2.35 (b) (p.56) — 문제 1 과 같은 발상(지수 (−1)^k 로 두 꼴이 번갈아 나오는 구간의 열의 상극한·하극한)"
  - ref: sandoval-romero-measure-and-integration
    loc: "2.6절 Exercises, Exercise 2.30 (b) (p.55) — 문제 3 과 같은 대상(상극한의 원소는 끝없이 많은 항에 속하는 점)"
added: 2026-11-28
---

:::exercise[번갈아 두 꼴이 나오는 구간의 열의 상극한과 하극한]
$X = \mathbb{R}$이고, 자연수 $n$에서
$$
\begin{aligned}
A_n = \{&x \in \mathbb{R} : \\
&(-1)^n \le x \le 1 + n^{-1}\}
\end{aligned}
$$
인 집합열 $(A_n)$을 생각한다.

1. $\limsup_{n \to \infty} A_n = \{x \in \mathbb{R} : -1 \le x \le 1\}$임을 보여라.
2. $\liminf_{n \to \infty} A_n = \{1\}$임을 보여라.
3. $n$번째 항이 $\mathbb{R} - A_n$인 집합열의 하극한을 구하라.
:::

:::solution
상극한, 하극한과 그 원소 판정은 [[sequence-of-sets|집합열과 그 합집합·교집합]]의 것이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. [[power-of-a-real-number|실수의 거듭제곱]]의 (5)에 의해 $n$이 짝수이면 $(-1)^n = 1$, 홀수이면 $(-1)^n = -1$이다. 순서 (10)에 의해 자연수 $n$은 양수이고 $0 < n^{-1}$이므로, 순서 (2)의 (ii)에 의해 모든 자연수 $n$에서 $1 < 1 + n^{-1}$이다.

**1.** *($\supseteq$)* $-1 \le x \le 1$이라 하고 자연수 $M$을 아무것이나 잡는다. $n = 2M + 1$은 홀수이고 $M \le n$이며, $(-1)^n = -1 \le x$이고 $x \le 1 < 1 + n^{-1}$이므로(순서 (1)의 (v)) $x \in A_n$이다. 모든 $M$에서 그런 $n$이 있으므로 집합열의 (8)에 의해 $x \in \limsup_{n \to \infty} A_n$이다.

*($\subseteq$)* $x \in \limsup_{n \to \infty} A_n$이라 하자. 집합열의 (8)을 $M = 1$에 쓰면 $x \in A_n$인 자연수 $n$이 있고, $(-1)^n$은 $1$이거나 $-1$이므로 $-1 \le (-1)^n \le x$이다. 이제 $1 < x$라 가정하자. 순서 (3)의 (i)에 의해 $0 < x - 1$이므로 [[archimedean-property|아르키메데스 성질]]의 (3)에 의해 자연수 $M$이 있어 $M$ 이상인 모든 자연수 $n$에서 $n^{-1} < x - 1$, 곧 $1 + n^{-1} < x$이다. 그런 $n$은 $A_n$에 속하지 않으므로, 이 $M$에 대해서는 $M \le n$이고 $x \in A_n$인 $n$이 없다. 이것은 집합열의 (8)과 어긋난다. 따라서 순서 (1)의 (iii)에 의해 $x \le 1$이다.

**2.** 모든 자연수 $n$에서 $(-1)^n \le 1$이고 $1 < 1 + n^{-1}$이므로 $1 \in A_n$이다. 집합열의 (8)을 $M = 1$에 쓰면 $1 \in \liminf_{n \to \infty} A_n$이다.

거꾸로 $x \in \liminf_{n \to \infty} A_n$이라 하자. 집합열의 (8)에 의해 자연수 $M$이 있어 $M \le n$인 모든 자연수 $n$에서 $x \in A_n$이다. $n = 2M$은 짝수이고 $M \le 2M$이므로 $x \in A_{2M}$이고 $1 = (-1)^{2M} \le x$이다. 또 집합열의 (8)의 마지막 문장에 의해 $x \in \limsup_{n \to \infty} A_n$이므로 1에 의해 $x \le 1$이다. 순서 (1)의 (ii)에 의해 $x = 1$이다.

**3.** 집합열의 (4)의 마지막 등식에서 $\liminf_{n \to \infty} (\mathbb{R} - A_n) = \mathbb{R} - \limsup_{n \to \infty} A_n$이다. 1과 순서 (1)의 (iii)에 의해 이것은 $\{x \in \mathbb{R} : x < -1 \text{ 또는 } 1 < x\}$이다.
:::

:::exercise[세 자연수의 순서쌍에 번호 붙이기]
$\pi$, $\kappa_1$, $\kappa_2$는 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 것이다. 자연수 $m$에서의 값이
$$
\begin{gathered}
\sigma(m) = \bigl( (\kappa_1(a), \kappa_2(a)),\ \kappa_2(m) \bigr), \\
a = \kappa_1(m)
\end{gathered}
$$
인 함수 $\sigma : \mathbb{N} \to (\mathbb{N} \times \mathbb{N}) \times \mathbb{N}$을 생각한다.

1. $\sigma(96)$을 구하고, $\sigma(m) = \bigl((2, 3), 1\bigr)$인 자연수 $m$을 구하라.
2. $\sigma$가 전단사임을 보여라. 따라서 $(\mathbb{N} \times \mathbb{N}) \times \mathbb{N}$은 가산 무한이다.
:::

:::solution
아래에서 "짝짓기 (n)"은 [[pairing-of-natural-numbers|ℕ × ℕ 과 ℕ 의 전단사]]의 번호이다. 짝짓기 (1)에 의해 $\pi^{-1}(a) = (\kappa_1(a), \kappa_2(a))$이므로 $\sigma(m) = \bigl(\pi^{-1}(\kappa_1(m)), \kappa_2(m)\bigr)$이다.

**1.** $96 = 2^5 \cdot 3$이고 $3$은 홀수이므로 짝짓기 (5)의 쌍은 $(r, o) = (5, 3)$이고, $\kappa_1(96) = 6$, $2\kappa_2(96) - 1 = 3$에서 $\kappa_2(96) = 2$이다. 다시 $6 = 2^1 \cdot 3$이므로 $\kappa_1(6) = 2$, $\kappa_2(6) = 2$이다. 따라서 $\sigma(96) = \bigl((2, 2), 2\bigr)$이다. 검산하면 $\pi(2, 2) = 2 \cdot 3 = 6$이고 $\pi(6, 2) = 2^5 \cdot 3 = 96$이다.

$\sigma(m) = \bigl((2, 3), 1\bigr)$이면 [[cartesian-product|곱집합]]의 순서쌍의 같음에 의해 $\pi^{-1}(\kappa_1(m)) = (2, 3)$이고 $\kappa_2(m) = 1$이다. 앞의 것에서 $\kappa_1(m) = \pi(2, 3) = 2 \cdot 5 = 10$이고(짝짓기 (1)의 첫 등식), 다시 짝짓기 (1)의 첫 등식에 의해 $m = \pi(\kappa_1(m), \kappa_2(m)) = \pi(10, 1) = 2^9 \cdot 1 = 512$이다. 거꾸로 $512 = 2^9 \cdot 1$이므로 $\pi^{-1}(512) = (10, 1)$이고 $10 = 2^1 \cdot 5$이므로 $\pi^{-1}(10) = (2, 3)$이어서 $\sigma(512) = \bigl((2, 3), 1\bigr)$이다. 구하는 $m$은 $512$ 하나뿐이다.

**2.** 함수 $\Psi : \mathbb{N} \times \mathbb{N} \to (\mathbb{N} \times \mathbb{N}) \times \mathbb{N}$을 $\Psi(a, l) = (\pi^{-1}(a), l)$로 정하면, 모든 자연수 $m$에서 $\sigma(m) = \Psi(\kappa_1(m), \kappa_2(m)) = \Psi(\pi^{-1}(m))$이므로 $\sigma = \Psi \circ \pi^{-1}$이다([[function-composition|함수의 합성]]).

*$\Psi$는 단사이다.* $\Psi(a, l) = \Psi(a', l')$이면 순서쌍의 같음에 의해 $l = l'$이고 $\pi^{-1}(a) = \pi^{-1}(a')$이다. 짝짓기 (1)의 첫 등식에 의해 $a = \pi(\pi^{-1}(a)) = \pi(\pi^{-1}(a')) = a'$이다. 따라서 $(a, l) = (a', l')$이다.

*$\Psi$는 전사이다.* $(\mathbb{N} \times \mathbb{N}) \times \mathbb{N}$의 원소 $((j, k), l)$을 잡고 $a = \pi(j, k)$로 두면, 짝짓기 (1)의 나머지 두 등식에 의해 $\pi^{-1}(a) = (\kappa_1(\pi(j, k)), \kappa_2(\pi(j, k))) = (j, k)$이므로 $\Psi(a, l) = ((j, k), l)$이다.

짝짓기 (1)에 의해 $\pi^{-1} : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$은 전단사이고 위에서 $\Psi$도 전단사이므로, [[composition-preserves-injectivity-and-surjectivity|합성과 단사·전사]]의 (3)에 의해 $\sigma = \Psi \circ \pi^{-1}$은 전단사이다. [[countably-infinite-set|가산 무한 집합]]의 정의에 의해 $(\mathbb{N} \times \mathbb{N}) \times \mathbb{N}$은 가산 무한이다.
:::

:::exercise[끝없이 많은 항에 속하는 점과 지시함수의 합]
$X$를 집합, $(A_n)$을 $X$의 집합열, $x$를 $X$의 원소라 하자. $n$번째 항이 $\chi_{A_n}(x)$인 $[0, \infty]$의 원소열의 합을 $\sum_{n=1}^{\infty} \chi_{A_n}(x)$로 쓴다(합은 [[series-in-extended-nonnegative-reals|0 이상인 확장된 실수의 항의 합]]의 뜻이다).

1. $x \in \limsup_{n \to \infty} A_n$인 것은 정확히 $\sum_{n=1}^{\infty} \chi_{A_n}(x) = \infty$일 때임을 보여라.
2. $x \in \liminf_{n \to \infty} A_n$인 것은 정확히 $\sum_{n=1}^{\infty} \chi_{X - A_n}(x) < \infty$일 때임을 보여라.
:::

:::solution
지시함수는 [[indicator-function|지시함수]]의 것이고, 그 (1)에 의해 $\chi_{A_n}(x)$는 $0$이나 $1$이므로 $[0, \infty]$의 실수인 원소이다. 상극한·하극한과 그 원소 판정은 [[sequence-of-sets|집합열]]의 것이다. "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호, "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호이다. $s_N = \sum_{n=1}^{N} \chi_{A_n}(x)$로 둔다.

**1.** *($\Rightarrow$)* $x \in \limsup_{n \to \infty} A_n$이라 하자. 먼저 "모든 자연수 $M$에 대하여 $M \le s_N$인 자연수 $N$이 있다"를 $M$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다.

- $M = 1$: 집합열의 (8)을 $M = 1$에 쓰면 $x \in A_n$인 자연수 $n$이 있다. 지시함수의 (1)에 의해 $\chi_{A_n}(x) = 1$이고, 합 (1)의 (iv)에 의해 $1 = \chi_{A_n}(x) \le s_n$이다.
- $M$에서 $M + 1$로: $M \le s_N$인 $N$이 있다고 하자. 집합열의 (8)을 $N + 1$에 쓰면 $N + 1 \le n$이고 $x \in A_n$인 자연수 $n$이 있다. $J = n - N$으로 두면 $J$는 자연수이고, 합 (1)의 (v)에 의해 $s_n = s_N + \sum_{j=1}^{J} \chi_{A_{N+j}}(x)$이다. 합 (1)의 (iv)를 $k = J$에 쓰면 $\chi_{A_n}(x) = 1 \le \sum_{j=1}^{J} \chi_{A_{N+j}}(x)$이므로, 확장 (3)의 (ii)에 의해 $M + 1 \le s_N + 1 \le s_n$이다.

합 (2)에 의해 모든 $N$에서 $s_N \le \sum_{n=1}^{\infty} \chi_{A_n}(x)$이다. 이 합이 실수라고 하면, 위의 사실과 확장 (2)의 (i), (ii)에 의해 모든 자연수 $M$에서 $M \le \sum_{n=1}^{\infty} \chi_{A_n}(x)$이 되어 $\mathbb{N}$이 실수에서 위로 유계가 되는데, 이것은 [[archimedean-property|아르키메데스 성질]]의 (1)과 어긋난다. 따라서 확장 (1)의 (ii)에 의해 그 합은 $\infty$이다.

*($\Leftarrow$)* 대우를 보인다. $x \notin \limsup_{n \to \infty} A_n$이라 하자. 집합열의 (8)과 [[negation-of-quantified-statements|한정 명제의 부정]]에 의해 자연수 $M$이 있어 $M \le n$인 모든 자연수 $n$에서 $x \notin A_n$, 곧 지시함수의 (1)에 의해 $\chi_{A_n}(x) = 0$이다. $K = M - 1$은 $0$ 이상인 정수이고 $K$보다 큰 모든 $n$에서 항이 $0$이므로, 합 (4)에 의해 $\sum_{n=1}^{\infty} \chi_{A_n}(x) = s_K$이다. $s_K$의 항은 모두 실수이므로 합 (1)의 (iv)에 의해 $s_K < \infty$이고, 합은 $\infty$가 아니다.

**2.** 집합열의 (4)에 의해 $X - \liminf_{n \to \infty} A_n = \limsup_{n \to \infty} (X - A_n)$이다. $x \in X$이므로 $x \in \liminf_{n \to \infty} A_n$인 것은 정확히 $x \notin \limsup_{n \to \infty} (X - A_n)$일 때이고, 1을 $n$번째 항이 $X - A_n$인 집합열에 쓰면 이것은 정확히 $\sum_{n=1}^{\infty} \chi_{X - A_n}(x) \ne \infty$일 때이다. 확장 (2)의 (iv)에 의해 $[0, \infty]$의 원소가 $\infty$가 아닌 것은 정확히 그 원소가 $\infty$보다 작을 때이다.
:::

:::exercise[두 부분집합 위의 합의 포함–배제 등식]
$(a_n)$을 $[0, \infty]$의 원소열이라 하고 $A$, $B$를 $\mathbb{N}$의 부분집합이라 하자.

1. 다음 등식을 보여라.
   $$
   \begin{aligned}
   &\sum_{n \in A \cup B} a_n + \sum_{n \in A \cap B} a_n \\
   &\quad = \sum_{n \in A} a_n + \sum_{n \in B} a_n
   \end{aligned}
   $$
2. $A \cap B = \emptyset$이면 $\sum_{n \in A \cup B} a_n = \sum_{n \in A} a_n + \sum_{n \in B} a_n$임을 1에서 끌어내라.
:::

:::solution
부분집합 위의 합 $\sum_{n \in A}$과 "$A$ 밖에서 $0$으로 채운 원소열"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이고, 아래에서 "합 (n)"은 그 번호, "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호이다. 지시함수는 [[indicator-function|지시함수]]의 것이고 $\mathbb{N}$ 위에서 생각한다.

**채운 원소열을 곱으로 쓰기.** $\mathbb{N}$의 부분집합 $C$와 자연수 $n$에 대하여 $\chi_C(n)$은 $0$이나 $1$이고(지시함수의 (1)), $[0, \infty]$의 원소로서 $\chi_C(n)\,a_n$을 생각한다. $n \in C$이면 확장 (4)의 (i)의 $1a = a$에 의해 이것은 $a_n$이고, $n \notin C$이면 $0a = 0$에 의해 $0$이다. 따라서 $n$번째 항이 $\chi_C(n)\,a_n$인 원소열은 $(a_n)$을 $C$ 밖에서 $0$으로 채운 원소열이고, 정의에 의해 $\sum_{n \in C} a_n = \sum_{n=1}^{\infty} \chi_C(n)\,a_n$이다.

**1.** 지시함수의 (3)의 첫째와 둘째 등식에 의해, 모든 자연수 $n$에서 실수로서
$$
\begin{aligned}
&\chi_{A \cup B}(n) + \chi_{A \cap B}(n) \\
&\quad = \chi_A(n) + \chi_B(n) \\
&\qquad - \chi_A(n)\chi_B(n) + \chi_A(n)\chi_B(n) \\
&\quad = \chi_A(n) + \chi_B(n)
\end{aligned}
$$
이다. 양쪽은 $0$ 이상인 실수이고, 실수끼리의 $[0, \infty]$의 덧셈은 실수의 덧셈이므로 이것은 $[0, \infty]$의 등식이기도 하다. 확장 (4)의 (i)의 교환법칙과 (ii)의 분배법칙에 의해
$$
\begin{aligned}
&\chi_{A \cup B}(n)\,a_n + \chi_{A \cap B}(n)\,a_n \\
&\quad = \bigl(\chi_{A \cup B}(n) + \chi_{A \cap B}(n)\bigr)\,a_n \\
&\quad = \bigl(\chi_A(n) + \chi_B(n)\bigr)\,a_n \\
&\quad = \chi_A(n)\,a_n + \chi_B(n)\,a_n
\end{aligned}
$$
이다. 곧 두 원소열의 $n$번째 항이 모든 $n$에서 같으므로 두 합도 같다. 합 (5)의 첫 등식을 양쪽에 쓰면
$$
\begin{aligned}
&\sum_{n=1}^{\infty} \chi_{A \cup B}(n)\,a_n + \sum_{n=1}^{\infty} \chi_{A \cap B}(n)\,a_n \\
&\quad = \sum_{n=1}^{\infty} \chi_A(n)\,a_n + \sum_{n=1}^{\infty} \chi_B(n)\,a_n
\end{aligned}
$$
이고, 앞 문단에 의해 이것이 구하는 등식이다.

**2.** $A \cap B = \emptyset$이면 합 (7)의 (i)에 의해 $\sum_{n \in A \cap B} a_n = \sum_{n \in \emptyset} a_n = 0$이고, 확장 (3)의 (i)의 $a + 0 = a$에 의해 1의 왼쪽은 $\sum_{n \in A \cup B} a_n$이다.

$[0, \infty]$에는 뺄셈이 없으므로 1을 $\sum_{n \in A \cup B} a_n$에 대해 풀어 쓰지 않는다. 예를 들어 모든 $a_n$이 $1$이고 $A = B = \mathbb{N}$이면 1의 네 합이 모두 $\infty$이다(합 (7)의 (iv)).
:::

:::exercise[토넬리 정리로 구하는 급수의 합]
$a_{k,l}$을 $k \le l$이면 $(1/2)^l$, $l < k$이면 $0$으로 정한 $[0, \infty]$의 이중첨수 원소열이라 하자.

1. 모든 자연수 $k$에서 $\sum_{l=1}^{\infty} a_{k,l} = (1/2)^{k-1}$이고, 모든 자연수 $l$에서 $\sum_{k=1}^{\infty} a_{k,l} = l\,(1/2)^l$임을 보여라.
2. $l$번째 항이 $l\,(1/2)^l$인 수열의 급수가 수렴하고 $\sum_{l=1}^{\infty} l\,(1/2)^l = 2$임을 보여라.
:::

:::solution
이중첨수 원소열과 두 반복합은 [[nonnegative-double-series|0 이상인 이중급수의 합의 순서 바꾸기]]의 것이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다. $r = 1/2$로 두면 $|r| < 1$이고, [[power-of-a-real-number|실수의 거듭제곱]]의 (6)의 (i)에 의해 모든 $a_{k,l}$은 $0$ 이상인 실수이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**1.** *행마다.* 자연수 $k$를 고정한다. $K = k - 1$은 $0$ 이상인 정수이고 $1 \le l \le K$이면 $l < k$이므로 $a_{k,l} = 0$이다. 합 (4)와 (1)의 (iv)(항이 모두 $0$인 유한 합은 $0$)에 의해
$$
\sum_{l=1}^{\infty} a_{k,l} = 0 + \sum_{l=k}^{\infty} a_{k,l} = \sum_{l=k}^{\infty} r^l
$$
이다. 마지막 등식은 $l \ge k$에서 $a_{k,l} = r^l$이라는 것과 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (3)의 (i)이다. 급수 (6)의 (iii)에 의해 $l \ge k$에서 정해진 항 $r^l$의 급수는 수렴하고 그 합은 $r^k (1 - r)^{-1} = (1/2)^k \cdot 2 = (1/2)^{k-1}$이다(거듭제곱의 (1)의 $a^{n+1} = a^n a$). 합 (3)의 (iii)에 의해 위의 합도 이 실수이다.

*열마다.* 자연수 $l$을 고정한다. $k \le l$이면 $a_{k,l} = r^l$이고 $l < k$이면 $a_{k,l} = 0$이므로, 합 (4)를 $K = l$에 쓰고 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)(모든 항이 $r^l$인 합)를 쓰면
$$
\sum_{k=1}^{\infty} a_{k,l} = \sum_{k=1}^{l} r^l = l\,r^l
$$
이다. 첫 등식의 유한 합은 항이 모두 실수이므로 합 (1)의 정의에 의해 실수의 유한 합이다.

**2.** 이중급수의 (2)에 의해 두 반복합은 같다. 1에 의해 행마다 더한 반복합은 $k$번째 항이 $(1/2)^{k-1}$인 원소열의 합이고, 급수 (6)의 (i)을 $a = 1$, $r = 1/2$에 쓰면 그 수열의 급수는 수렴하여 합이 $(1 - 1/2)^{-1} = 2$이며, 합 (3)의 (i)에 의해 이 반복합도 $2$이다. 따라서 열마다 더한 반복합
$$
\sum_{l=1}^{\infty} l\,(1/2)^l = 2
$$
이다(합은 확장된 실수의 합의 뜻). 항 $l\,(1/2)^l$은 모두 실수이고 이 합이 $\infty$보다 작으므로, 합 (3)의 (i)에 의해 $l$번째 항이 $l\,(1/2)^l$인 수열의 급수는 수렴하고 그 합도 [[sum-of-a-series|급수의 합의 기호]]의 뜻으로 $2$이다.

검산으로 처음 네 항은 $\tfrac12, \tfrac12, \tfrac38, \tfrac14$이고 넷째 부분합은 $\tfrac{13}{8} < 2$이다.
:::

:::exercise[항마다 작고 합이 같은 두 원소열]
$(a_n)$, $(b_n)$을 $[0, \infty]$의 원소열이라 하고 모든 자연수 $n$에서 $a_n \le b_n$이라 하자.

1. $\sum_{n=1}^{\infty} a_n = \sum_{n=1}^{\infty} b_n < \infty$이면 모든 자연수 $n$에서 $a_n = b_n$임을 보여라.
2. 1에서 "$< \infty$"를 빼면 결론이 성립하지 않는 예를 들어라.
:::

:::solution
"확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호, "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호이다.

**1.** 두 합의 공통의 값을 $S$라 하자. $S < \infty$이므로 합 (2)의 마지막 문장에 의해 모든 $b_n$은 실수이고, $a_n \le b_n$이므로 확장 (2)의 (iv)에 의해 모든 $a_n$도 실수이다. 합 (3)의 (i)에 의해 $(a_n)$의 급수와 $(b_n)$의 급수는 수렴하고 두 합은 [[sum-of-a-series|급수의 합의 기호]]의 뜻으로 모두 실수 $S$이다. 급수 (3)에 의해 $n$번째 항이 $d_n = b_n - a_n$인 수열의 급수도 수렴하고 그 합은 $S - S = 0$이다. 확장 (2)의 (i)과 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (i)에 의해 모든 $d_n$은 $0$ 이상인 실수이므로 $(d_n)$은 $[0, \infty]$의 원소열이고, 합 (3)의 (i)에 의해 확장된 실수의 합으로도 $\sum_{n=1}^{\infty} d_n = 0$이다. 합 (2)에 의해 모든 $d_n$은 $0$이고, 곧 모든 $n$에서 $a_n = b_n$이다.

**2.** 모든 $n$에서 $a_n = 1$, $b_n = 2$라 하자. $a_n \le b_n$이고 $a_1 \ne b_1$이다. $N$번째 부분합 $\sum_{n=1}^{N} 1$은 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)에 의해 $N$이고, 부분합의 집합 $\mathbb{N}$은 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 실수에서 위로 유계가 아니며 $\infty$를 원소로 갖지 않으므로, 확장 (5)의 (iv)에 의해 $\sum_{n=1}^{\infty} a_n = \infty$이다. 합 (5)의 상수배와 확장 (4)의 (i)($0 < 2$이므로 $2\infty = \infty$)에 의해 $\sum_{n=1}^{\infty} b_n = 2 \sum_{n=1}^{\infty} a_n = 2\infty = \infty$이다. 두 합은 같지만 모든 항이 다르다. 1의 증명에서 실수의 뺄셈 $S - S$를 쓴 자리가 $S = \infty$이면 쓸 수 없는 곳이다.
:::
