---
written_by: Claude
status: reviewed
sources: []
added: 2026-11-28
---

:::exercise[역수 함수의 표준 근사열]
$X = \mathbb{N}$에 σ-대수 $\mathscr{P}(\mathbb{N})$을 주고, $f(n) = n^{-1}$로 정한 $[0, \infty]$ 값 함수 $f$를 생각한다.

1. $s_2^f$와 $s_3^f$의 값을 모든 자연수 $n$에서 구하라.
2. $s_2^f$의 표준 표현을 구하고, $\{s_2^f = \tfrac{1}{4}\}$를 [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 (6)의 (i)의 식으로도 구하라.
3. $9$ 이상인 자연수 $n$에서 $f(n) - s_3^f(n) < 2^{-3}$임을 확인하라.
:::

:::solution
표준 근사열 $s_k^f$와 표준 표현은 [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 것이고, 아래에서 "근사 (n)"은 그 번호이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. [[sigma-algebra|σ-대수와 가측공간]]의 (5)에 의해 $\mathscr{P}(\mathbb{N})$은 σ-대수이고, $\mathbb{N}$의 모든 부분집합이 그 원소이므로 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 정의에 의해 $f$는 가측이다.

**1.** 순서 (10)과 (6)의 (ii)에 의해 모든 자연수 $n$에서 $0 < n^{-1} \le 1$이므로, $k = 2, 3$에서 $f(n) < k$이고 $s_k^f(n) = j/2^k$이다. 여기서 $j$는 $j \le 2^k n^{-1} < j + 1$인 정수이다.

- $k = 2$: $4n^{-1}$은 $n = 1, 2, 3, 4$에서 $4, 2, \tfrac43, 1$이고, $n \ge 5$이면 $0 < 4n^{-1} < 1$이다(순서 (6)의 (ii)에 의해 $n^{-1} < 4^{-1}$). 따라서 $j$는 차례로 $4, 2, 1, 1$이고 $n \ge 5$에서 $0$이며,
  $$
  \begin{gathered}
  s_2^f(1) = 1, \quad s_2^f(2) = \tfrac{1}{2}, \\
  s_2^f(3) = s_2^f(4) = \tfrac{1}{4}
  \end{gathered}
  $$
  이고 $n \ge 5$이면 $s_2^f(n) = 0$이다.
- $k = 3$: $8n^{-1}$은 $n = 1, 2, 3, 4$에서 $8, 4, \tfrac83, 2$이고, $5 \le n \le 8$이면 $1 \le 8n^{-1} \le \tfrac85 < 2$, $n \ge 9$이면 $0 < 8n^{-1} < 1$이다. 따라서
  $$
  \begin{gathered}
  s_3^f(1) = 1, \quad s_3^f(2) = \tfrac{1}{2}, \\
  s_3^f(3) = s_3^f(4) = \tfrac{1}{4}, \\
  s_3^f(5) = \dots = s_3^f(8) = \tfrac{1}{8}
  \end{gathered}
  $$
  이고 $n \ge 9$이면 $s_3^f(n) = 0$이다.

**2.** 1에서 $s_2^f(\mathbb{N}) = \{0, \tfrac14, \tfrac12, 1\}$은 원소가 $4$개이고, 크기순 나열은 $\alpha_1 = 0 < \alpha_2 = \tfrac14 < \alpha_3 = \tfrac12 < \alpha_4 = 1$이다. 따라서 표준 표현은 $N = 4$와
$$
\begin{gathered}
A_1 = \{n \in \mathbb{N} : 5 \le n\}, \\
A_2 = \{3, 4\}, \quad A_3 = \{2\}, \\
A_4 = \{1\}
\end{gathered}
$$
이다. 근사 (6)의 (i)을 $k = 2$, $j = 1$에 쓰면($0 \le 1 \le 2 \cdot 4 - 1$)
$$
\Bigl\{s_2^f = \tfrac{1}{4}\Bigr\} = \Bigl\{f \ge \tfrac{1}{4}\Bigr\} \cap \Bigl\{f < \tfrac{1}{2}\Bigr\}
$$
이다. 순서 (6)의 (iv)를 써서 양변에 $4n$, $2n$을 곱해 보면 $\tfrac14 \le n^{-1}$인 것은 정확히 $n \le 4$일 때이고 $n^{-1} < \tfrac12$인 것은 정확히 $2 < n$일 때이므로, 오른쪽은 $\{3, 4\} = A_2$이다. 두 계산이 맞는다.

**3.** 1에 의해 $n \ge 9$이면 $s_3^f(n) = 0$이므로 $f(n) - s_3^f(n) = n^{-1}$이고, 순서 (6)의 (ii)에 의해 $n^{-1} \le 9^{-1} < 8^{-1} = 2^{-3}$이다. 이것은 근사 (6)의 (iii)의 어림($f(n) < 3$이므로 $0 \le f(n) - s_3^f(n) < 2^{-3}$)과 맞는다. 또 1의 값에서 모든 $n$에서 $s_2^f(n) \le s_3^f(n) \le f(n)$이고, 이것은 근사 (6)의 (ii)와 맞는다.
:::

:::exercise[유리수 끝점의 반직선이 생성하는 σ-대수]
$\mathbb{R}$의 집합족 $\mathcal{Q}_4 = \bigl\{\{x \in \mathbb{R} : x \le c\} : c \in \mathbb{Q}\bigr\}$를 생각한다(식으로 정한 집합족). $\sigma(\mathcal{Q}_4) = \mathscr{B}(\mathbb{R})$임을 보여라.
:::

:::solution
생성한 σ-대수는 [[generated-sigma-algebra|생성한 σ-대수]]의 것이고 "생성 (n)"은 그 번호이다. $\mathscr{B}(\mathbb{R})$와 집합족 $\mathcal{R}_4 = \bigl\{\{x \in \mathbb{R} : x \le c\} : c \in \mathbb{R}\bigr\}$는 [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 것이고 "보렐 (n)"은 그 번호이다.

*($\subseteq$)* 유리수는 실수이므로 $\mathcal{Q}_4 \subseteq \mathcal{R}_4$이고, 생성 (3)의 (i)과 보렐 (3)의 (vi)에 의해 $\sigma(\mathcal{Q}_4) \subseteq \sigma(\mathcal{R}_4) = \mathscr{B}(\mathbb{R})$이다.

*($\supseteq$)* 먼저 $\mathcal{R}_4 \subseteq \sigma(\mathcal{Q}_4)$를 보인다. 실수 $c$를 잡는다. $q : \mathbb{N} \to \mathbb{Q}$를 [[rationals-are-countable|유리수의 가산성]]의 (4)의 전사라 하고, 자연수 $m$에서 $c < q(m)$이면 $D_m = \{x \in \mathbb{R} : x \le q(m)\}$, 그렇지 않으면 $D_m = \mathbb{R}$로 둔다. $m$마다 $D_m$이 식으로 정해지므로 $m$번째 항이 $D_m$인 $\mathbb{R}$의 집합열이 있다([[sequence-of-sets|집합열]]). 생성 (2)의 (i)에 의해 $\mathcal{Q}_4 \subseteq \sigma(\mathcal{Q}_4)$이고 $\sigma(\mathcal{Q}_4)$는 σ-대수이므로 (σ1)에 의해 $\mathbb{R} \in \sigma(\mathcal{Q}_4)$이다. 따라서 모든 $D_m$은 $\sigma(\mathcal{Q}_4)$의 원소이고, [[sigma-algebra|σ-대수]]의 (2)에 의해 $\bigcap_{m=1}^{\infty} D_m \in \sigma(\mathcal{Q}_4)$이다. 이 교집합이 $\{x \in \mathbb{R} : x \le c\}$임을 집합열의 (1)로 보인다.

- $x \le c$이면, 각 $m$에서 $D_m = \mathbb{R}$이면 $x \in D_m$이고, $c < q(m)$이면 $x \le c < q(m)$이므로 $x \in D_m$이다. 따라서 $x$는 교집합에 속한다.
- $c < x$이면 [[rationals-are-dense|유리수의 조밀성]]의 (2)에 의해 $c < r < x$인 유리수 $r$이 있고, $q$가 전사이므로 $q(m) = r$인 자연수 $m$이 있다. 그러면 $D_m = \{y \in \mathbb{R} : y \le r\}$이고 $r < x$이므로 $x \notin D_m$이다. 따라서 $x$는 교집합에 속하지 않는다.

$c$는 아무 실수였으므로 $\mathcal{R}_4 \subseteq \sigma(\mathcal{Q}_4)$이다. 생성 (3)의 (iv)에 의해 $\sigma(\mathcal{R}_4) \subseteq \sigma(\mathcal{Q}_4)$이고, 보렐 (3)의 (vi)에 의해 $\mathscr{B}(\mathbb{R}) \subseteq \sigma(\mathcal{Q}_4)$이다. 두 포함에서 $\sigma(\mathcal{Q}_4) = \mathscr{B}(\mathbb{R})$이다.
:::

:::exercise[제곱과 양수인 점의 집합으로 하는 가측성 판정]
$(X, \mathcal{M})$을 가측공간, $f$를 $X$ 위의 실숫값 함수라 하자. $ff$가 $\mathcal{M}$-가측이고 $\{f > 0\} \in \mathcal{M}$이면 $f$는 $\mathcal{M}$-가측임을 보여라.
:::

:::solution
실숫값 함수와 집합의 기호, 가측의 판정은 [[measurable-function|가측함수]]의 것이고 "가측 (n)"은 그 번호이다. "순서 (n)"은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호이고, 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다. $P = \{f > 0\}$으로 둔다. 가측 (2)에 의해 모든 실수 $c$에서 $\{f > c\} \in \mathcal{M}$임을 보이면 된다. $ff$가 가측이므로 같은 (2)에 의해 실수 $t$마다 $\{ff > t\}$와 $\{ff < t\}$는 $\mathcal{M}$의 원소이다.

**$0 \le c$일 때.** $\{f > c\} = P \cap \{ff > cc\}$임을 보인다. $c < f(x)$이면 $0 \le c < f(x)$이므로 $x \in P$이고, 순서 (7)의 (i)에 의해 $cc < f(x)f(x)$이다. 거꾸로 $0 < f(x)$이고 $cc < f(x)f(x)$이면, $0 \le c$와 $0 \le f(x)$에서 순서 (7)의 (iii)에 의해 $c < f(x)$이다.

**$c < 0$일 때.** $\{f > c\} = P \cup \bigl((X - P) \cap \{ff < cc\}\bigr)$임을 보인다. $x \in X - P$이면 순서 (1)의 (iii)에 의해 $f(x) \le 0$이고, 순서 (3)의 (iii)에 의해 $0 \le -f(x)$, $0 < -c$이다. 또 $(-f(x))(-f(x)) = f(x)f(x)$이고 $(-c)(-c) = cc$이다.

- $c < f(x)$라 하자. $0 < f(x)$이면 $x \in P$이다. 그렇지 않으면 $x \in X - P$이고, 순서 (3)의 (iii)에 의해 $-f(x) < -c$이므로 순서 (7)의 (i)에 의해 $f(x)f(x) < cc$이다.
- 거꾸로 $x \in P$이면 $c < 0 < f(x)$이다. $x \in X - P$이고 $f(x)f(x) < cc$이면 $(-f(x))(-f(x)) < (-c)(-c)$이므로 순서 (7)의 (iii)에 의해 $-f(x) < -c$이고, 순서 (3)의 (iii)에 의해 $c < f(x)$이다.

$P \in \mathcal{M}$이므로 (σ2)에 의해 $X - P \in \mathcal{M}$이고, [[sigma-algebra|σ-대수]]의 (1)에 의해 두 경우의 오른쪽 집합은 $\mathcal{M}$의 원소이다. 따라서 모든 실수 $c$에서 $\{f > c\} \in \mathcal{M}$이고, 가측 (2)의 (b)에서 (a)로 $f$는 $\mathcal{M}$-가측이다.
:::

:::exercise[반직선의 지시함수를 모두 더한 함수]
$\mathbb{R}$에 보렐 σ-대수 $\mathscr{B}(\mathbb{R})$를 주고, 자연수 $k$에서 $H_k = \{x \in \mathbb{R} : k \le x\}$로 둔다. $x \in \mathbb{R}$에서의 값이
$$
F(x) = \sum_{k=1}^{\infty} \chi_{H_k}(x)
$$
인 $[0, \infty]$ 값 함수 $F$를 생각한다(합은 [[series-in-extended-nonnegative-reals|0 이상인 확장된 실수의 항의 합]]의 뜻이다).

1. $F$가 $\mathscr{B}(\mathbb{R})$-가측임을 보여라.
2. $x < 1$이면 $F(x) = 0$이고, $1 \le x$이면 $F(x)$가 $x$ 이하인 정수 가운데 가장 큰 것임을 보여라.
3. $F$의 값은 모두 실수이고, $F$를 실숫값 함수로 보아도 보렐 가측임을 보여라.
:::

:::solution
지시함수는 [[indicator-function|지시함수]]의 것이고, 그 (1)에 의해 $\chi_{H_k}(x)$는 $0$이나 $1$이므로 $[0, \infty]$의 원소이다. "합 (n)"은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 번호이다.

**1.** [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (4)의 (i)에 의해 각 $H_k$는 보렐 집합이고, [[measurable-function|가측함수]]의 (6)에 의해 $\chi_{H_k}$는 $\mathscr{B}(\mathbb{R})$-가측인 실숫값 함수이다. 값이 $0$ 이상이므로 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 $[0, \infty]$ 값 함수로도 가측이다. 순서쌍 $(k, x)$에서 값이 $\chi_{H_k}(x)$인 $[0, \infty]$ 값 함수열의 모든 항이 가측이므로, [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (5)에 의해 $F = \sum_{k=1}^{\infty} \chi_{H_k}$는 가측이다.

**2.** *$x < 1$일 때.* 모든 자연수 $k$에서 $x < 1 \le k$이므로 $x \notin H_k$이고 지시함수의 (1)에 의해 모든 항이 $0$이다. 합 (2)에 의해 $F(x) = 0$이다.

*$1 \le x$일 때.* [[archimedean-property|아르키메데스 성질]]의 (4)에 의해 $n - 1 \le x < n$인 정수 $n$이 정확히 하나 있고, $m = n - 1$이 $x$ 이하인 정수 가운데 가장 큰 것이다. $1$은 $x$ 이하인 정수이므로 $1 \le m$이고 $m$은 자연수이다. 자연수 $k$에 대하여, $k \le m$이면 $k \le m \le x$이므로 $x \in H_k$이고, $m < k$이면 [[prime-number|소수]]의 (Z1)에 의해 $m + 1 \le k$, 곧 $x < n \le k$이므로 $x \notin H_k$이다. 따라서 $k \le m$에서 항은 $1$이고 $m < k$에서 $0$이다. 합 (4)를 $K = m$에 쓰고 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)를 쓰면
$$
F(x) = \sum_{k=1}^{m} 1 = m
$$
이다(항이 모두 실수인 유한 합은 실수의 유한 합이다).

**3.** 2에 의해 $F$의 값은 $0$이거나 자연수이므로 모두 $0$ 이상인 실수이다. 그래서 같은 집합 $F$를 값이 $0$ 이상인 실숫값 함수 $\mathbb{R} \to \mathbb{R}$로 볼 수 있고, 1과 [[extended-measurable-function|∞ 까지의 값을 갖는 가측함수]]의 (3)의 (i)에 의해 그 뜻으로도 $\mathscr{B}(\mathbb{R})$-가측, 곧 보렐 가측이다. 예를 들어 [[measurable-function|가측함수]]의 (3)에 의해 $\{F = 3\} = \{x \in \mathbb{R} : 3 \le x < 4\}$는 보렐 집합이고, 이것은 [[borel-sigma-algebra-on-reals|ℝ 의 보렐 σ-대수]]의 (4)의 (i)과도 맞는다.
:::

:::exercise[합과 곱은 가측이지만 두 함수는 가측이 아닌 예]
1. $X = \{1, 2, 3\}$에 $\mathcal{M} = \{\emptyset, \{1, 2\}, \{3\}, X\}$를 주고 $f = \chi_{\{1\}}$, $g = \chi_{\{2\}}$로 둔다. $\mathcal{M}$이 σ-대수이고, $f + g$와 $fg$는 $\mathcal{M}$-가측이지만 $f$와 $g$는 $\mathcal{M}$-가측이 아님을 보여라.
2. 일반의 가측공간 $(X, \mathcal{M})$에서, 실숫값 함수 $f$, $g$에 대하여 $f + g$와 $f - g$가 $\mathcal{M}$-가측이면 $f$와 $g$는 $\mathcal{M}$-가측임을 보여라.
:::

:::solution
실숫값 함수의 연산과 가측은 [[measurable-function|가측함수]]의 것이고 "가측 (n)"은 그 번호이다. 지시함수는 [[indicator-function|지시함수]]의 것이다.

**1.** [[generated-sigma-algebra|생성한 σ-대수]]의 (4)를 $A = \{1, 2\}$에 쓰면 $\sigma(\{\{1, 2\}\}) = \{\emptyset, \{1, 2\}, X - \{1, 2\}, X\} = \mathcal{M}$이므로, 같은 항목의 (2)의 (i)에 의해 $\mathcal{M}$은 σ-대수이다. $\{1\} \cap \{2\} = \emptyset$이므로 지시함수의 (5)에 의해 모든 $x \in X$에서 $f(x) + g(x) = \chi_{\{1, 2\}}(x)$이고, 지시함수의 (3)과 (1)에 의해 $f(x)g(x) = \chi_{\emptyset}(x) = 0$이다. $\{1, 2\} \in \mathcal{M}$이므로 가측 (6)에 의해 $f + g = \chi_{\{1, 2\}}$는 가측이고, $fg$는 값이 $0$인 상수함수이므로 가측 (6)에 의해 가측이다. 한편 $\{1\}$과 $\{2\}$는 $\mathcal{M}$의 원소가 아니므로, 가측 (6)의 지시함수의 판정에 의해 $f$와 $g$는 가측이 아니다. 그래서 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)의 거꾸로, 곧 "$f + g$와 $fg$가 가측이면 $f$, $g$가 가측이다"는 이 가측공간에서 성립하지 않는다. 이때 $f - g$는 $1$에서 $1$, $2$에서 $-1$, $3$에서 $0$이므로 $\{f - g > 0\} = \{1\}$이 $\mathcal{M}$의 원소가 아니어서, 가측 (2)에 의해 $f - g$는 가측이 아니다. 이것은 2와 맞는다.

**2.** $u = f + g$, $v = f - g$로 두면 모든 $x \in X$에서 실수의 계산으로
$$
\begin{aligned}
f(x) &= 2^{-1}\bigl(u(x) + v(x)\bigr), \\
g(x) &= 2^{-1}\bigl(u(x) - v(x)\bigr)
\end{aligned}
$$
이다([[real-number-arithmetic|실수의 계산 법칙]]). $u$, $v$가 가측이므로 [[operations-on-measurable-functions|가측함수의 연산과 극한]]의 (3)에 의해 $u + v$와 $u - v$는 가측이고, 가측 (5)의 $cf$를 $c = 2^{-1}$에 쓰면 $2^{-1}(u + v) = f$와 $2^{-1}(u - v) = g$는 가측이다.
:::
