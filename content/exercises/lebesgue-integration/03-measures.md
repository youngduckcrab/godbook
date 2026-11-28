---
written_by: Claude
status: reviewed
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: "4.1절, Example 4.20 (p.101–102) — 문제 4 의 2 와 같은 대상(셈측도와 꼬리 집합 {k, k + 1, …}의 감소열에서 모든 항의 측도가 ∞)"
  - ref: sandoval-romero-measure-and-integration
    loc: "4.1절, Corollary 4.15 (b) (p.99)와 4.5절 Exercise 4.23 (3) (p.116) — 문제 5 와 같은 발상(유한 측도에서 상극한의 측도는 측도들의 아래 한계보다 작지 않고, 무한 측도에서는 깨질 수 있다)"
added: 2026-11-28
---

:::exercise[짝수와 3의 배수에 주는 등비 가중치의 측도]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu$를 $x_n = (1/2)^n$으로 정한 가중 셈측도라 하자. $A = \{2j : j \in \mathbb{N}\}$, $B = \{3j : j \in \mathbb{N}\}$으로 둔다.

1. $\mu(A)$, $\mu(B)$, $\mu(A \cap B)$를 구하라.
2. $\mu(A \cup B)$, $\mu(A - B)$, $\mu(\mathbb{N} - (A \cup B))$를 구하라.
:::

:::solution
가중 셈측도는 [[measure-examples|측도의 예]]의 (3)의 것이고 그 값은 $\mu(C) = \sum_{n \in C} x_n$이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호, "급수 (n)"은 [[sum-of-a-series|급수의 합의 기호]]의 번호, "측도 (n)"은 [[measure|측도와 측도공간]]의 번호이다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**준비: 배수 전체 위의 합.** 자연수 $d$와 $C_d = \{dj : j \in \mathbb{N}\}$에 대하여 $p_j = dj$는 $p_j < p_{j+1}$이므로 [[subsequence|부분수열]]의 (2)에 의해 첨자열이고 그 값의 집합이 $C_d$이다. 합 (7)의 (iii)과 [[power-of-a-real-number|실수의 거듭제곱]]의 (2)의 (ii)에 의해
$$
\begin{gathered}
\mu(C_d) = \sum_{j=1}^{\infty} \Bigl(\frac{1}{2}\Bigr)^{dj} = \sum_{j=1}^{\infty} r_d^{\,j}, \\
r_d = \Bigl(\frac{1}{2}\Bigr)^{d}
\end{gathered}
$$
이다. 거듭제곱의 (6)의 (iv)에 의해 $0 < r_d < 1$이므로 급수 (6)의 (iii)을 $m = 1$에 쓰면 이 실수의 급수는 수렴하여 합이 $r_d (1 - r_d)^{-1}$이고, 합 (3)의 (i)에 의해 $\mu(C_d)$도 이 실수이다.

**1.** $A = C_2$, $B = C_3$이고 $r_2 = \tfrac14$, $r_3 = \tfrac18$이므로 $\mu(A) = \tfrac14 \cdot \tfrac43 = \tfrac13$, $\mu(B) = \tfrac18 \cdot \tfrac87 = \tfrac17$이다.

$A \cap B = C_6$임을 보인다. $n = 6c$이면 $n = 2(3c) = 3(2c)$이므로 $n \in A \cap B$이다. 거꾸로 $n \in A \cap B$이면 $n = 2a = 3b$인 자연수 $a$, $b$가 있다. $b$가 홀수, 곧 $b = 2c + 1$인 정수 $c$가 있다면 $n = 3b = 2(3c + 1) + 1$은 홀수인데 $n = 2a$는 짝수이므로 [[even-and-odd|짝수와 홀수]]에서 받아들인 사실(둘 다인 정수는 없다)에 어긋난다. 같은 사실에 의해 $b$는 짝수이고 $b = 2c$인 정수 $c$가 있으며 $n = 6c$이다. $0 < n$이므로 $0 < c$이고 $c$는 자연수이다. 따라서 $A \cap B = C_6$이고 $r_6 = \tfrac{1}{64}$에서 $\mu(A \cap B) = \tfrac{1}{64} \cdot \tfrac{64}{63} = \tfrac{1}{63}$이다.

**2.** 측도 (3)에 의해 $\mu(A \cup B) + \mu(A \cap B) = \mu(A) + \mu(B)$이고 네 값이 모두 실수이다(오른쪽이 실수 $\tfrac13 + \tfrac17$이고, [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (3)의 (ii)에 의해 $\mu(A \cup B) \le \mu(A \cup B) + \mu(A \cap B)$이므로 같은 항목의 (2)의 (iv)에 의해 $\mu(A \cup B)$도 실수이다). 따라서
$$
\begin{aligned}
\mu(A \cup B) &= \frac{1}{3} + \frac{1}{7} - \frac{1}{63} \\
&= \frac{21 + 9 - 1}{63} = \frac{29}{63}
\end{aligned}
$$
이다. $A \cap B \subseteq A$이고 $A - (A \cap B) = A - B$이며 $\mu(A) < \infty$이므로 측도 (2)의 (i)에 의해 $\mu(A - B) = \tfrac13 - \tfrac{1}{63} = \tfrac{20}{63}$이다. 또 $C_1 = \mathbb{N}$이고 $r_1 = \tfrac12$이므로 준비에 의해 $\mu(\mathbb{N}) = \tfrac12 \cdot 2 = 1$이고, $A \cup B \subseteq \mathbb{N}$에서 측도 (2)의 (i)에 의해 $\mu(\mathbb{N} - (A \cup B)) = 1 - \tfrac{29}{63} = \tfrac{34}{63}$이다.
:::

:::exercise[두 점에 질량을 둔 측도와 거의 어디서나 0 인 함수]
$X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$이고 $\mu = \delta_1 + 3\delta_4$, 곧 $A \subseteq \mathbb{N}$에서 $\mu(A) = \delta_1(A) + 3\,\delta_4(A)$인 측도라 하자.

1. $\mu(\mathbb{N})$을 구하고, $A \subseteq \mathbb{N}$이 측도가 0 인 집합인 것은 정확히 $1 \notin A$이고 $4 \notin A$일 때임을 보여라.
2. $f(n) = (n - 1)(n - 4)$로 정한 실숫값 함수 $f$는 영함수가 아니지만 $f = 0$ $\mu$-거의 어디서나임을 보여라.
3. 열린 문장 "$2 \le x$"는 $\mu$-거의 어디서나 성립하는가?
:::

:::solution
디랙 측도, 측도의 일차결합은 [[measure-examples|측도의 예]]의 (2)와 (5)의 (iii)의 것이고, 그에 의해 $\mu$는 측도이다. 측도가 0 인 집합과 μ-거의 어디서나는 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 것이고 "거의 (n)"은 그 번호이다. "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호이다.

**1.** 측도의 예의 (2)에 의해 $\delta_p(A)$는 $p \in A$이면 $1$, 아니면 $0$이다. $\mu(\mathbb{N}) = 1 + 3 \cdot 1 = 4$이다. $\mathcal{M} = \mathscr{P}(\mathbb{N})$이므로 $\mathbb{N}$의 모든 부분집합이 가측이다. 확장 (3)의 (iii)에 의해 $\mu(A) = 0$인 것은 정확히 $\delta_1(A) = 0$이고 $3\,\delta_4(A) = 0$일 때이고, 확장 (4)의 (iv)와 $3 \ne 0$에 의해 뒤의 것은 $\delta_4(A) = 0$과 같다. 측도의 예의 (2)에 의해 이것은 정확히 $1 \notin A$이고 $4 \notin A$일 때이다.

**2.** $f(2) = 1 \cdot (-2) = -2 \ne 0$이므로 $f$는 영함수가 아니다. 열린 문장 $f(x) = 0$의 예외 집합은 $E = \{n \in \mathbb{N} : (n - 1)(n - 4) \ne 0\}$이다. 실수의 곱이 $0$인 것은 정확히 두 인수 가운데 하나가 $0$일 때이므로([[real-number-arithmetic|실수의 계산 법칙]]), $(1 - 1)(1 - 4) = 0$, $(4 - 1)(4 - 4) = 0$에서 $1 \notin E$, $4 \notin E$이다. 1에 의해 $E$는 측도가 0 인 집합이고, 거의 (2)의 (i)에 의해 $f = 0$ $\mu$-거의 어디서나이다. 실제로 $E = \mathbb{N} - \{1, 4\}$이고, $f$의 값은 $n = 2, 3, 5$에서 $-2, -2, 4$이다.

**3.** 성립하지 않는다. 예외 집합은 $\{x \in \mathbb{N} : x < 2\} = \{1\}$이고([[prime-number|소수]]의 (Z1)에 의해 자연수 $x < 2$는 $x = 1$), 가측이며 1에 의해 측도가 0 이 아니다(실제로 $\mu(\{1\}) = 1$). 거의 (2)의 (i)에 의해 "$2 \le x$"는 $\mu$-거의 어디서나 성립하지 않는다. 반면 "$x \ne 2$"는 예외 집합 $\{2\}$가 1에 의해 측도가 0 인 집합이므로 $\mu$-거의 어디서나 성립한다.
:::

:::exercise[대칭차의 측도로 두 측도값의 차를 누르기]
$(X, \mathcal{M}, \mu)$를 측도공간, $A$, $B$를 $\mathcal{M}$의 원소라 하고 $A \mathbin{\triangle} B = (A - B) \cup (B - A)$로 둔다.

1. $\mu(A) \le \mu(B) + \mu(A - B)$임을 보여라.
2. $\mu(A)$와 $\mu(B)$가 실수이면 $|\mu(A) - \mu(B)| \le \mu(A \mathbin{\triangle} B)$임을 보여라.
3. $\mu(A \mathbin{\triangle} B) = 0$이면 $\mu(A) = \mu(B)$임을 보여라. 여기서는 $\mu(A)$, $\mu(B)$가 실수라고 가정하지 않는다.
:::

:::solution
"측도 (n)"은 [[measure|측도와 측도공간]]의 번호, "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호이다. [[sigma-algebra|σ-대수]]의 (1)에 의해 $A - B$, $B - A$, $A \cup B$와 아래의 집합들은 $\mathcal{M}$의 원소이다.

**1.** $A$의 원소는 $B$에 속하거나 $A - B$에 속하므로 $A \subseteq B \cup (A - B)$이고, $B$와 $A - B$는 서로소이다. 측도 (2)의 단조성과 (1)의 (iii)에 의해
$$
\begin{aligned}
\mu(A) &\le \mu\bigl(B \cup (A - B)\bigr) \\
&= \mu(B) + \mu(A - B)
\end{aligned}
$$
이다.

**2.** $A - B$와 $B - A$는 서로소이므로 측도 (1)의 (iii)에 의해 $\mu(A \mathbin{\triangle} B) = \mu(A - B) + \mu(B - A)$이다. $A - B \subseteq A$이므로 측도 (2)에 의해 $\mu(A - B) \le \mu(A) < \infty$이고, 확장 (2)의 (iv)에 의해 $\mu(A - B)$는 실수이다. 같은 방식으로 $\mu(B - A)$도 실수이고 $\mu(A \mathbin{\triangle} B)$도 실수이다. 1과 확장 (2)의 (i)에서 실수의 부등식 $\mu(A) - \mu(B) \le \mu(A - B)$를 얻고, $A$와 $B$를 바꾼 1에서 $\mu(B) - \mu(A) \le \mu(B - A)$를 얻는다. $0 \le \mu(B - A)$, $0 \le \mu(A - B)$이므로
$$
\begin{gathered}
\mu(A) - \mu(B) \le \mu(A \mathbin{\triangle} B), \\
-\bigl(\mu(A) - \mu(B)\bigr) \le \mu(A \mathbin{\triangle} B)
\end{gathered}
$$
이다. 둘째 부등식은 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (iii)에 의해 $-\mu(A \mathbin{\triangle} B) \le \mu(A) - \mu(B)$와 같으므로, [[absolute-value|절댓값]]의 (7)에 의해 $|\mu(A) - \mu(B)| \le \mu(A \mathbin{\triangle} B)$이다.

**3.** $A - B \subseteq A \mathbin{\triangle} B$이므로 측도 (2)에 의해 $\mu(A - B) \le 0$이고 $\mu(A - B) = 0$이다. 1과 확장 (3)의 (i)에 의해 $\mu(A) \le \mu(B) + 0 = \mu(B)$이다. 같은 방식으로 $\mu(B) \le \mu(A)$이고, 확장 (2)의 (ii)에 의해 $\mu(A) = \mu(B)$이다. 실수의 뺄셈을 쓰지 않았으므로 $\mu(A) = \mu(B) = \infty$이어도 된다. 예를 들어 $X = \mathbb{N}$ 위의 디랙 측도 $\delta_1$과 $A = \{1, 2\}$, $B = \{1, 3\}$에서 $A \mathbin{\triangle} B = \{2, 3\}$의 측도가 $0$이고 $\mu(A) = \mu(B) = 1$이다.
:::

:::exercise[유한 측도에서 함수가 큰 값을 갖는 집합의 측도]
$(X, \mathcal{M}, \mu)$를 측도공간, $f$를 $\mathcal{M}$-가측인 실숫값 함수라 하고, 자연수 $k$에서 $B_k = \{x \in X : k < |f(x)|\}$로 둔다.

1. $\mu$가 유한 측도이면 $(\mu(B_k))$는 $0$으로 수렴하는 실수열임을 보여라.
2. 1에서 $\mu$가 유한 측도라는 가정을 뺄 수 없는 예를 들어라.
:::

:::solution
"측도 (n)"은 [[measure|측도와 측도공간]]의 번호이고, 측도의 연속성은 [[properties-of-measures|측도의 연속성]]의 것이다.

**1.** [[measurable-function|가측함수]]의 (5)에 의해 $|f|$는 가측이고, 같은 항목의 (2)에 의해 모든 $B_k = \{|f| > k\}$는 $\mathcal{M}$의 원소이다. $x \in B_{k+1}$이면 $k < k + 1 < |f(x)|$이므로 $x \in B_k$이고, $(B_k)$는 감소하는 집합열이다([[sequence-of-sets|집합열]]). 또 각 $x \in X$에서 [[archimedean-property|아르키메데스 성질]]의 (1)에 의해 $|f(x)| < k$인 자연수 $k$가 있고, 그 $k$에서 $x \notin B_k$이므로 집합열의 (1)에 의해 $\bigcap_{k=1}^{\infty} B_k = \emptyset$이다. $\mu$가 유한 측도이므로 측도 (2)의 단조성에 의해 $\mu(B_1) \le \mu(X) < \infty$이다. 측도의 연속성의 (2)의 (ii)를 $m = 1$에 쓰면 모든 $\mu(B_k)$는 실수이고 실수열 $(\mu(B_k))$는 $\mu(\emptyset)$으로 수렴하며, (M1)에 의해 $\mu(\emptyset) = 0$이다.

**2.** $X = \mathbb{N}$, $\mathcal{M} = \mathscr{P}(\mathbb{N})$, $\mu = \mu^{\sharp}$(셈측도, [[measure-examples|측도의 예]]의 (4))로 두고 $f(n) = n$이라 하자. $\mathbb{N}$의 모든 부분집합이 가측이므로 $f$는 가측이다. $B_k = \{n \in \mathbb{N} : k < n\}$이고, $j$에서의 값이 $j + k$인 함수 $\mathbb{N} \to B_k$는 단사이고([[real-number-arithmetic|실수의 계산 법칙]]으로 $j + k = j' + k$이면 $j = j'$) 전사이다($n \in B_k$이면 [[prime-number|소수]]의 (Z1)에 의해 $k + 1 \le n$이어서 $n - k$는 자연수이다). 따라서 $B_k$는 [[countably-infinite-set|가산 무한]]이고 [[natural-numbers-are-infinite|자연수의 집합에 관한 정리]]의 (3)에 의해 무한집합이므로, 측도의 예의 (4)에 의해 모든 $k$에서 $\mu^{\sharp}(B_k) = \infty$이다. 1의 결론은 성립하지 않는다. 이때 $\mu^{\sharp}(\mathbb{N}) = \infty$이고 측도의 연속성의 (2)의 (ii)의 조건 "$\mu(B_m) < \infty$인 $m$"이 없다.
:::

:::exercise[측도가 일정 이상인 집합들의 상극한]
$(X, \mathcal{M}, \mu)$를 측도공간, $(A_n)$을 $\mathcal{M}$의 원소로 된 집합열이라 하고, 양의 실수 $\varepsilon$이 있어 모든 자연수 $n$에서 $\varepsilon \le \mu(A_n)$이라 하자.

1. $\mu$가 유한 측도이면 $\varepsilon \le \mu\bigl(\limsup_{n \to \infty} A_n\bigr)$임을 보여라.
2. $X = \mathbb{N}$ 위의 셈측도와 $A_n = \{n\}$에서 1의 결론이 성립하지 않음을 보여라.
:::

:::solution
상극한과 그 원소 판정은 [[sequence-of-sets|집합열과 그 합집합·교집합]]의 것이고, "측도 (n)"은 [[measure|측도와 측도공간]]의 번호, "확장 (n)"은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 번호이다.

**1.** 자연수 $M$에서 $C_M = \bigcup_{n=M}^{\infty} A_n$으로 두면 [[sigma-algebra|σ-대수]]의 (2)에 의해 $C_M \in \mathcal{M}$이고, 상극한의 정의에 의해 $\limsup_{n \to \infty} A_n = \bigcap_{M=1}^{\infty} C_M$이다. $\{n \in \mathbb{N} : M + 1 \le n\} \subseteq \{n \in \mathbb{N} : M \le n\}$이므로 집합열의 (2)에 의해 $C_{M+1} \subseteq C_M$이고 $(C_M)$은 감소한다. 같은 (2)에 의해 $A_M \subseteq C_M$이므로 측도 (2)의 단조성에 의해 $\varepsilon \le \mu(A_M) \le \mu(C_M)$이다. 곧 $\varepsilon$은 $\{\mu(C_M) : M \in \mathbb{N}\}$의 하계이고, 확장 (5)의 하한의 정의에 의해 $\varepsilon \le \inf\{\mu(C_M) : M \in \mathbb{N}\}$이다.

$\mu$가 유한 측도이므로 $\mu(C_1) \le \mu(X) < \infty$이다. [[properties-of-measures|측도의 연속성]]의 (2)의 (ii)를 $m = 1$에 쓰면
$$
\begin{aligned}
&\mu\bigl(\limsup_{n \to \infty} A_n\bigr) \\
&\quad = \inf\{\mu(C_M) : M \in \mathbb{N}\} \ge \varepsilon
\end{aligned}
$$
이다.

**2.** [[measure-examples|측도의 예]]의 (4)에 의해 $\mu^{\sharp}(\{n\}) = 1$이므로 $\varepsilon = 1$로 가정이 성립한다. 자연수 $x$가 $A_n = \{n\}$에 속하는 것은 $n = x$일 때뿐이므로, 집합열의 (8)을 $M = x + 1$에 쓰면 $M \le n$이고 $x \in A_n$인 $n$이 없어 $x$는 상극한에 속하지 않는다. 따라서 상극한은 $\emptyset$이고 그 측도는 $0 < 1$이다. 이 셈측도는 $\mu^{\sharp}(\mathbb{N}) = \infty$여서 유한 측도가 아니고, 1의 증명에서 측도의 연속성의 (2)의 (ii)를 쓴 자리가 이 경우에 막힌다. 실제로 모든 $M$에서 $C_M = \{n \in \mathbb{N} : M \le n\}$은 무한집합이어서 $\mu^{\sharp}(C_M) = \infty$이다.
:::

:::exercise[측도의 합이 실수인 집합열에 속하는 횟수]
$(X, \mathcal{M}, \mu)$를 측도공간, $(A_n)$을 $\mathcal{M}$의 원소로 된 집합열이라 하고 $\sum_{n=1}^{\infty} \mu(A_n) < \infty$라 하자. $x \in X$에서의 값이 $N(x) = \sum_{n=1}^{\infty} \chi_{A_n}(x)$인 $[0, \infty]$ 값 함수 $N$을 생각한다.

1. $N$이 $\mathcal{M}$-가측임을 보여라.
2. $N(x) < \infty$가 $\mu$-거의 어디서나 성립함을 보이고, $\mu(\{N = \infty\}) = 0$임을 보여라.
:::

:::solution
지시함수는 [[indicator-function|지시함수]]의 것이고, $N(x)$의 합은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이며 "합 (n)"은 그 번호이다. "거의 (n)"은 [[measure-zero-and-almost-everywhere|측도가 0 인 집합과 μ-거의 어디서나]]의 번호이다.

**1.** [[measurable-function|가측함수]]의 (6)에 의해 각 $\chi_{A_n}$은 가측인 실숫값 함수이고, 값이 $0$ 이상이므로 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $[0, \infty]$ 값 함수로도 가측이다. 순서쌍 $(n, x)$에서 값이 $\chi_{A_n}(x)$인 함수열에 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (5)를 쓰면 $N$은 가측이다.

**2.** 열린 문장 $P(x)$를 "어떤 자연수 $M$이 있어 $M \le n$인 모든 자연수 $n$에서 $x \notin A_n$"이라 하고 $Q(x)$를 "$N(x) < \infty$"라 하자. [[borel-cantelli-lemma|보렐–칸텔리 보조정리]]의 (1)의 (ii)에 의해 $P(x)$는 $\mu$-거의 어디서나 성립한다.

$P(x)$가 참인 $x$에서 $Q(x)$가 참임을 보인다. 그런 $M$을 잡으면 $K = M - 1$은 $0$ 이상인 정수이고, $K$보다 큰 모든 $n$에서 $x \notin A_n$이므로 지시함수의 (1)에 의해 $\chi_{A_n}(x) = 0$이다. 합 (4)에 의해 $N(x) = \sum_{n=1}^{K} \chi_{A_n}(x)$이고, 항이 모두 실수이므로 합 (1)의 (iv)에 의해 $N(x) < \infty$이다. 거의 (3)의 (iii)에 의해 $Q(x)$는 $\mu$-거의 어디서나 성립한다.

$Q$의 예외 집합은 $\{N = \infty\}$이다([[extended-nonnegative-reals|0 이상인 확장된 실수]]의 (2)의 (iv)에 의해 $N(x) < \infty$가 거짓인 것은 정확히 $N(x) = \infty$일 때이다). 1과 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (2)에 의해 이 집합은 $\mathcal{M}$의 원소이므로, 거의 (2)의 (i)에 의해 $\mu(\{N = \infty\}) = 0$이다.
:::
