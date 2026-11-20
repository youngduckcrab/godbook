---
title: 유한 합의 선형성과 부등식
title_en: Linearity and Order Properties of Finite Sums
aliases: [유한 합의 선형성, 합의 선형성, 상수의 합, 항별 비교, 유한 합의 삼각부등식, linearity of finite sums, sum of a constant, termwise comparison of sums, triangle inequality for finite sums]
kind: proposition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 유한 합은 상수배와 합을 보존하고, 같은 수 c 를 더한 합은 (n − m + 1)c 이며, 항별로 작으면 합도 작고(한 항이 진짜로 작으면 합도 진짜로 작다), 합의 절댓값은 절댓값의 합 이하이다. 이 성질들과 쪼개기 규칙을 범위에서만 정해진 항에 그대로 쓸 수 있음을 함께 진술한다.
requires: [even-and-odd, prime-number, well-ordering-principle, mathematical-induction, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, sequence, real-valued-function, series-and-partial-sums, finite-sum-of-reals, splitting-and-shifting-finite-sums]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5절(2.5.3 소절) Proposition 2.5.10 앞 문단 (p.91), 2.5.4 소절 Proposition 2.5.15 의 증명 (p.92); 5.1절(5.1.1 소절) Proposition 5.1.2 의 증명 (p.182), 5.1.4 소절 연습문제 5.1.15 (p.190); 5.2절(5.2.2 소절) Proposition 5.2.4 의 증명 (p.193), 5.2.3 소절 Lemma 5.2.7 의 증명 (p.195)
    checked: original
    note: "출처는 유한 합의 이 성질들을 명제로 진술하지 않고 증명 안에서 말없이 쓴다. 이 항목의 진술과 증명은 이 사이트가 썼다. 출처는 2.5.3 소절(p.91)에서 'Like finite sums, convergent series behave linearly'라고 적어 유한 합의 선형성을 알려진 것으로 다루고, Proposition 2.5.15 의 증명(p.92)에서 'the triangle inequality for a finite sum' 으로 (5)를 쓴다. Proposition 5.1.2 의 증명(p.182)은 m(b − a) = mΣΔx_i = ΣmΔx_i ≤ Σm_iΔx_i ≤ ΣM_iΔx_i ≤ ΣMΔx_i 로 (1)의 상수배와 (3)의 항별 비교를 쓰고, Proposition 5.2.4 의 증명(p.193)은 Σαm_iΔx_i = αΣm_iΔx_i 로 (1)을, Lemma 5.2.7 의 증명(p.195)은 Σ(M_i − m_i)Δx_i < (ε/(b − a))ΣΔx_i 로 (1)과 (7)의 진짜 부등식을 쓴다. 연습문제 5.1.15(p.190, L(P, f) = U(P, f) 이면 f 는 상수함수)는 (6)이나 (7)을 쓰는 물음이다. 해석학 입문의 series-and-partial-sums (4)–(6)과 linearity-of-series (1)은 1 부터의 부분합에 대한 같은 꼴의 사실이고, 이 항목은 그것들을 인용하지 않고 끝 번호에 대한 귀납법으로 다시 증명한다(범위 안의 항에 대한 가정만 쓰기 위해서다)."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 엉킨 증명 근거 1건과 모호하거나 근거 없는 설명 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
수열, 유한 합 $\sum_{i=m}^{n} x_i$와 빈 합, 범위에서만 정해진 항의 합은 [[sequence|수열 항목]]과 [[finite-sum-of-reals|실수의 유한 합 항목]]의 것이고, 쪼개기와 첨자 옮기기는 [[splitting-and-shifting-finite-sums]]의 것이며, 절댓값은 [[absolute-value]]의 것이다. 정수 $n - m + 1$은 실수로 본다([[real-number-arithmetic]]의 (K7)). 아래 (1)–(7)에서 $(x_i)$, $(y_i)$는 수열, $c$, $a$, $b$는 실수이고, $m$, $n$은 $1 \le m$이고 $m - 1 \le n$인 정수이다.

1. (선형성) 다음이 성립한다.
   $$
   \begin{aligned}
   \sum_{i=m}^{n} (c\,x_i + y_i) &= c \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i, \\
   \sum_{i=m}^{n} (x_i - y_i) &= \sum_{i=m}^{n} x_i - \sum_{i=m}^{n} y_i .
   \end{aligned}
   $$
   특히 $\sum_{i=m}^{n} c\,x_i = c \sum_{i=m}^{n} x_i$이고 $\sum_{i=m}^{n} (x_i + y_i) = \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i$이다.
2. (상수의 합) 모든 항이 $c$인 수열의 합은 $\sum_{i=m}^{n} c = (n - m + 1)\,c$이다.
3. (항별 비교) $m \le i \le n$인 모든 정수 $i$에서 $x_i \le y_i$이면 $\sum_{i=m}^{n} x_i \le \sum_{i=m}^{n} y_i$이다.
4. (상수로 누르기) $m \le i \le n$인 모든 정수 $i$에서 $a \le x_i \le b$이면
   $$
   (n - m + 1)\,a \le \sum_{i=m}^{n} x_i \le (n - m + 1)\,b
   $$
   이다. 한쪽 부등식만 가정하면 그쪽 결론만 성립한다.
5. (절댓값) $\left| \sum_{i=m}^{n} x_i \right| \le \sum_{i=m}^{n} |x_i|$이다. 여기서 오른쪽은 $i$번째 항이 $|x_i|$인 수열의 합이다.
6. (부호) $m \le i \le n$인 모든 정수 $i$에서 $0 \le x_i$이면 $0 \le \sum_{i=m}^{n} x_i$이다. 이에 더해 $m \le k \le n$이고 $0 < x_k$인 정수 $k$가 있으면 $0 < \sum_{i=m}^{n} x_i$이다.
7. (진짜 부등식) $m \le i \le n$인 모든 정수 $i$에서 $x_i \le y_i$이고, $m \le k \le n$이고 $x_k < y_k$인 정수 $k$가 있으면 $\sum_{i=m}^{n} x_i < \sum_{i=m}^{n} y_i$이다.
8. (범위에서만 정해진 항) $1 \le p$이고 $p - 1 \le q$인 정수 $p$, $q$와, $p \le i \le q$인 정수 $i$마다 정해진 실수 $t_i$를 생각하고, $(z_i)$를 $t_i$를 $0$으로 채운 수열([[finite-sum-of-reals]]의 범위에서만 정해진 항의 합의 약속)이라 하자. 그러면 $p \le m$이고 $m - 1 \le n \le q$인 모든 정수 $m$, $n$에서, $m \le i \le n$의 항 $t_i$의 합은
   $$
   \sum_{i=m}^{n} t_i = \sum_{i=m}^{n} z_i
   $$
   이다. 따라서 [[finite-sum-of-reals]]의 (2)–(4), [[splitting-and-shifting-finite-sums]]의 (1)–(4), 이 항목의 (1)–(7)은 수열 대신 범위에서만 정해진 항으로 써도 성립한다. 이때 진술에 나오는 항마다 그 번호가 그 항이 정해진 범위 안에 있고, 합마다 시작 번호와 끝 번호가 위의 $m$, $n$처럼 그 항들이 정해진 범위 $p$, $q$에 대해 $p \le m$, $n \le q$를 만족해야 한다. 앞으로 이렇게 쓸 때는 "채운 수열"을 따로 말하지 않는다.
:::

:::english
Sequences, finite sums $\sum_{i=m}^{n} x_i$ and the empty sum, and sums of terms given only on a range are those of the entries on sequences and on finite sums of real numbers; splitting and shifting are those of the entry on splitting and shifting finite sums; the absolute value is that of the entry on absolute value. The integer $n - m + 1$ is regarded as a real number (item (K7) of the entry on real number arithmetic). In (1)–(7) below, $(x_i)$ and $(y_i)$ are sequences, $c$, $a$, $b$ are real numbers, and $m$, $n$ are integers with $1 \le m$ and $m - 1 \le n$.

1. (Linearity) The following hold.
   $$
   \begin{aligned}
   \sum_{i=m}^{n} (c\,x_i + y_i) &= c \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i, \\
   \sum_{i=m}^{n} (x_i - y_i) &= \sum_{i=m}^{n} x_i - \sum_{i=m}^{n} y_i .
   \end{aligned}
   $$
   In particular $\sum_{i=m}^{n} c\,x_i = c \sum_{i=m}^{n} x_i$ and $\sum_{i=m}^{n} (x_i + y_i) = \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i$.
2. (Sum of a constant) The sum of the sequence all of whose terms are $c$ is $\sum_{i=m}^{n} c = (n - m + 1)\,c$.
3. (Termwise comparison) If $x_i \le y_i$ for every integer $i$ with $m \le i \le n$, then $\sum_{i=m}^{n} x_i \le \sum_{i=m}^{n} y_i$.
4. (Bounding by constants) If $a \le x_i \le b$ for every integer $i$ with $m \le i \le n$, then
   $$
   (n - m + 1)\,a \le \sum_{i=m}^{n} x_i \le (n - m + 1)\,b .
   $$
   If only one of the inequalities is assumed, only the corresponding conclusion holds.
5. (Absolute values) $\left| \sum_{i=m}^{n} x_i \right| \le \sum_{i=m}^{n} |x_i|$, where the right-hand side is the sum of the sequence whose $i$th term is $|x_i|$.
6. (Sign) If $0 \le x_i$ for every integer $i$ with $m \le i \le n$, then $0 \le \sum_{i=m}^{n} x_i$. If in addition there is an integer $k$ with $m \le k \le n$ and $0 < x_k$, then $0 < \sum_{i=m}^{n} x_i$.
7. (Strict inequality) If $x_i \le y_i$ for every integer $i$ with $m \le i \le n$, and there is an integer $k$ with $m \le k \le n$ and $x_k < y_k$, then $\sum_{i=m}^{n} x_i < \sum_{i=m}^{n} y_i$.
8. (Terms given only on a range) Let $p$, $q$ be integers with $1 \le p$ and $p - 1 \le q$, let $t_i$ be a real number given for each integer $i$ with $p \le i \le q$, and let $(z_i)$ be the sequence obtained by filling $t_i$ with $0$ (the convention for sums of terms given only on a range in the entry on finite sums of real numbers). Then for all integers $m$, $n$ with $p \le m$ and $m - 1 \le n \le q$, the sum of the terms $t_i$ for $m \le i \le n$ is
   $$
   \sum_{i=m}^{n} t_i = \sum_{i=m}^{n} z_i .
   $$
   Hence items (2)–(4) of the entry on finite sums of real numbers, items (1)–(4) of the entry on splitting and shifting finite sums, and items (1)–(7) of this entry also hold with terms given only on a range in place of sequences. Here every term appearing in the statement must have its index in the range on which that term is given, and every sum must have its starting and ending indices satisfying $p \le m$ and $n \le q$, like $m$, $n$ above, for the range $p$, $q$ on which its terms are given. From now on, the "filled sequence" is not mentioned separately when the statements are used in this way.
:::

## 직관

유한 합은 "차례로 더해 가기"이므로, 더하는 수 하나하나에 대해 성립하는 계산 규칙과 부등식이 합 전체로 옮겨 갑니다. 모든 항에 $c$를 곱하면 합도 $c$배가 되고, 두 열을 항끼리 더하면 합끼리 더한 것이 되며, 항마다 작으면 합도 작습니다. 장을 보며 물건마다 값을 적어 둔다고 할 때, 모든 물건이 $3$개씩이면 총액은 한 개씩 산 총액의 $3$배이고, 물건마다 다른 가게보다 싸면 총액도 쌉니다. 비유와 맞지 않는 곳은 $c$가 음수이거나 항이 음수일 수 있다는 점입니다. 선형성은 그때도 성립하지만, 음수를 곱하면 부등식의 방향은 바뀝니다.

(6)과 (7)은 "진짜로" 작다는 것이 합으로 옮겨 가는 조건입니다. 모든 항이 $0$ 이상이라는 것만으로는 합이 $0$일 수도 있습니다(모든 항이 $0$이면 그렇습니다). 한 항이라도 진짜로 양수이면 합은 양수입니다.

(8)은 쓰는 사람의 수고를 덜기 위한 진술입니다. 몇 개의 번호에서만 정해진 수의 합은 범위 밖을 $0$으로 채운 수열의 합으로 정의했으므로, 원칙대로라면 쪼개기나 항별 비교를 쓸 때마다 채운 수열을 만들어야 합니다. (8)은 그 일을 한 번에 해 두고, 진술에 나오는 번호가 범위 안에 있기만 하면 채운 수열을 말하지 않고 그대로 써도 된다고 정합니다.

## 증명

:::idea
(1), (2), (3), (5)는 끝 번호 $n$에 대한 귀납법으로, 빈 합에서 시작해 끝항 떼기([[finite-sum-of-reals|유한 합]]의 (3))를 쓴다. (4)는 (2)와 (3)을, (6)은 (4)와 쪼개기를, (7)은 (6)을 차 $y_i - x_i$에 쓴 것이다. (8)은 범위 안의 항에만 의존한다는 성질(유한 합의 (4))이다.
:::

:::hint
(5)의 귀납 단계는 $\left| \sum_{i=m}^{n} x_i + x_{n+1} \right| \le \left| \sum_{i=m}^{n} x_i \right| + |x_{n+1}|$에서 시작한다.
:::

:::hint
(6)의 둘째 문장: 합을 $k$ 앞, $k$번째 항, $k$ 뒤의 세 조각으로 쪼갠다. 앞뒤 조각은 첫 문장에 의해 $0$ 이상이다.
:::

:::proof
"합 (3)"처럼 쓴 것은 [[finite-sum-of-reals]]의 번호, "쪼개기 (1)"은 [[splitting-and-shifting-finite-sums]]의 번호, (K…)는 [[real-number-arithmetic]]의 진술, "순서 (2)의 (iii)"처럼 쓴 것은 [[order-properties-of-reals]]의 번호이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로 다루고, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]의 받아들인 사실이다. 귀납법은 [[mathematical-induction]]의 시작점이 정수 $m - 1$인 꼴이고, 각 명제 $S_n$에서 $m$과 수열, 실수는 고정한다. 귀납 단계에서 $n \ge m - 1$이면 (Z7)에 의해 $m \le n + 1$이므로, 가정 "$m \le i \le n + 1$에서 …"는 $i = n + 1$에도 쓰이고, (L3)과 (Z6)에 의해 $m \le i \le n$에도 쓰인다. 기초 단계 $n = m - 1$에서는 합 (2)에 의해 모든 합이 $0$이다.

**1의 증명.** $S_n$: $\sum_{i=m}^{n} (c\,x_i + y_i) = c \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i$. 기초 단계에서 양변은 $0$과 $c \cdot 0 + 0$이고 (K9), (K4)에 의해 같다. $S_n$이 참이면 합 (3)과 (K1)–(K3)에 의해
$$
\begin{aligned}
\sum_{i=m}^{n+1} (c\,x_i + y_i) &= \Bigl(c \sum_{i=m}^{n} x_i + \sum_{i=m}^{n} y_i\Bigr) + (c\,x_{n+1} + y_{n+1}) \\
&= c\Bigl(\sum_{i=m}^{n} x_i + x_{n+1}\Bigr) + \Bigl(\sum_{i=m}^{n} y_i + y_{n+1}\Bigr) = c \sum_{i=m}^{n+1} x_i + \sum_{i=m}^{n+1} y_i
\end{aligned}
$$
이다. 차의 식: (K9)에 의해 $x_i - y_i = (-1)y_i + x_i$이므로 첫 식을 $c = -1$, 두 수열 $(y_i)$, $(x_i)$에 쓰면 $\sum_{i=m}^{n}(x_i - y_i) = (-1)\sum_{i=m}^{n} y_i + \sum_{i=m}^{n} x_i = \sum_{i=m}^{n} x_i - \sum_{i=m}^{n} y_i$이다. "특히"의 첫 식은 첫 식을 모든 항이 $0$인 수열 $(y_i)$에 쓴 것이다. 이때 아래 (2)와 (K9)에 의해 $\sum_{i=m}^{n} 0 = (n - m + 1) \cdot 0 = 0$이다((2)의 증명은 (1)을 쓰지 않는다). 둘째 식은 첫 식을 $c = 1$에 쓰고 (K4)로 $1 \cdot x_i = x_i$, $1 \cdot \sum_{i=m}^{n} x_i = \sum_{i=m}^{n} x_i$로 읽은 것이다.

**2의 증명.** $S_n$: $\sum_{i=m}^{n} c = (n - m + 1)c$. 기초 단계에서 $(m - 1) - m + 1 = 0$이고 (K9)에 의해 $0 \cdot c = 0$이다. $S_n$이 참이면 합 (3), (K4), (K12)의 (i)과 정수의 계산에 의해 $\sum_{i=m}^{n+1} c = (n - m + 1)c + 1 \cdot c = \bigl((n - m + 1) + 1\bigr)c = \bigl((n + 1) - m + 1\bigr)c$이다.

**3의 증명.** $S_n$: "$m \le i \le n$에서 $x_i \le y_i$이면 $\sum_{i=m}^{n} x_i \le \sum_{i=m}^{n} y_i$". 기초 단계는 $0 \le 0$이다. $S_n$이 참이고 $m \le i \le n + 1$에서 $x_i \le y_i$이면, $S_n$과 $x_{n+1} \le y_{n+1}$, 순서 (2)의 (iii)과 합 (3)에 의해 $\sum_{i=m}^{n+1} x_i = \sum_{i=m}^{n} x_i + x_{n+1} \le \sum_{i=m}^{n} y_i + y_{n+1} = \sum_{i=m}^{n+1} y_i$이다.

**4의 증명.** $a \le x_i$($m \le i \le n$)이면 (3)을 모든 항이 $a$인 수열과 $(x_i)$에 쓰고 (2)를 쓰면 $(n - m + 1)a = \sum_{i=m}^{n} a \le \sum_{i=m}^{n} x_i$이다. $x_i \le b$이면 같은 방식으로 $\sum_{i=m}^{n} x_i \le (n - m + 1)b$이다.

**5의 증명.** $S_n$: $\left|\sum_{i=m}^{n} x_i\right| \le \sum_{i=m}^{n} |x_i|$. 기초 단계는 [[absolute-value]]의 (1)에 의해 $|0| = 0 \le 0$이다. $S_n$이 참이면 합 (3), [[triangle-inequality]]의 (1), 순서 (2)의 (iii)에 의해
$$
\left|\sum_{i=m}^{n+1} x_i\right| = \left|\sum_{i=m}^{n} x_i + x_{n+1}\right| \le \left|\sum_{i=m}^{n} x_i\right| + |x_{n+1}| \le \sum_{i=m}^{n} |x_i| + |x_{n+1}| = \sum_{i=m}^{n+1} |x_i|
$$
이다.

**6의 증명.** 첫 문장은 (4)를 $a = 0$에 쓰면 (K9)에 의해 $(n - m + 1) \cdot 0 = 0$이므로 나온다. 둘째 문장: $m \le k \le n$이므로 $m - 1 \le k - 1 \le n$이고, 쪼개기 (1)을 $k - 1$에서 쓰고 다시 $\sum_{i=k}^{n} x_i$를 $k$에서 쓰면($k - 1 \le k \le n$) 합 (2)에 의해
$$
\sum_{i=m}^{n} x_i = A + (x_k + B), \qquad A = \sum_{i=m}^{k-1} x_i, \quad B = \sum_{i=k+1}^{n} x_i
$$
이다. 두 합의 범위는 $m \le i \le n$ 안에 있으므로 첫 문장에 의해 $0 \le A$, $0 \le B$이다. 순서 (2)의 (iv)에 의해 $0 + 0 < x_k + B$이고, 다시 같은 (iv)와 (K1), (K4)에 의해 $0 < (x_k + B) + A = A + (x_k + B)$이다.

**7의 증명.** $d_i = y_i - x_i$인 수열을 $(d_i)$라 하자([[sequence]]의 (1)). 순서 (3)의 (i)에 의해 $m \le i \le n$에서 $0 \le d_i$이고 $0 < d_k$이므로, (6)에 의해 $0 < \sum_{i=m}^{n} d_i$이다. (1)에 의해 $\sum_{i=m}^{n} d_i = \sum_{i=m}^{n} y_i - \sum_{i=m}^{n} x_i$이므로 순서 (3)의 (i)에 의해 $\sum_{i=m}^{n} x_i < \sum_{i=m}^{n} y_i$이다.

**8의 증명.** $p \le m$이고 $m - 1 \le n \le q$이면 $1 \le m$이므로 두 합이 정의된다. 왼쪽은 [[finite-sum-of-reals]]의 약속에 의해, $m \le i \le n$에서 $t_i$이고 그 밖에서 $0$인 수열 $(w_i)$의 합이다. $m \le i \le n$인 정수 $i$는 $p \le i \le q$이므로((Z6)) $z_i = t_i = w_i$이고, 합 (4)에 의해 $\sum_{i=m}^{n} w_i = \sum_{i=m}^{n} z_i$이다.

이제 나열한 진술 하나를 범위에서만 정해진 항들로 쓴 꼴을 보자. 항의 모임마다 그것을 $0$으로 채운 수열을 만들어 원래 진술(수열에 관한 것)을 쓴다. 진술의 가정은 정해진 범위 안의 번호의 항에 대한 것이므로, 그 번호에서 채운 수열의 항이 원래 항과 같아 가정이 그대로 성립한다. 결론에 나오는 합은 모두 범위 안의 시작 번호와 끝 번호를 가지므로 위의 등식에 의해 범위에서만 정해진 항의 합과 같고, 결론에 나오는 항도 범위 안의 번호이므로 원래 항과 같다. 따라서 결론이 범위에서만 정해진 항으로 쓴 꼴로 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[몇 개의 번호에서만 주어진 수의 비교]
$t_1 = 2$, $t_2 = -1$, $t_3 = 4$와 $u_1 = 2$, $u_2 = 0$, $u_3 = 5$가 번호 $1$, $2$, $3$에서만 주어졌다고 합시다. $1 \le i \le 3$에서 $t_i \le u_i$이고 $t_2 < u_2$이므로 (8)과 (7)에 의해 $\sum_{i=1}^{3} t_i < \sum_{i=1}^{3} u_i$입니다. 실제로 끝항을 차례로 더하면 왼쪽은 $2 + (-1) + 4 = 5$, 오른쪽은 $2 + 0 + 5 = 7$입니다. (1)에 의해 차의 합은 $\sum_{i=1}^{3} (u_i - t_i) = 0 + 1 + 1 = 2 = 7 - 5$입니다.

같은 항에 (5)를 쓰면 $\left|\sum_{i=1}^{3} t_i\right| = 5 \le 2 + 1 + 4 = 7 = \sum_{i=1}^{3} |t_i|$이고, (4)를 $a = -1$, $b = 4$에 쓰면 $3 \cdot (-1) = -3 \le 5 \le 12 = 3 \cdot 4$입니다.
:::

:::counterexample[항이 모두 0 이상이어도 합이 0 일 수 있다]
(6)의 둘째 문장에서 "진짜로 양수인 항이 있다"는 가정을 빼면 결론이 깨질 수 있습니다. 모든 항이 $0$인 수열은 모든 항이 $0$ 이상이지만, (2)에 의해 $\sum_{i=1}^{4} 0 = 4 \cdot 0 = 0$이어서 합이 양수가 아닙니다. 같은 까닭으로 (7)에서도 모든 항에서 $x_i = y_i$이면 $x_i \le y_i$이지만 두 합은 같습니다.
:::

:::counterexample[음수를 곱한 비교]
(3)과 (1)을 함께 쓸 때 상수배는 부등식의 방향을 바꿀 수 있습니다. $x_i = 1$, $y_i = 2$($i = 1, 2$)이면 $\sum_{i=1}^{2} x_i = 2 \le 4 = \sum_{i=1}^{2} y_i$이지만, 항에 $-1$을 곱하면 (1)에 의해 합은 $-2$와 $-4$가 되어 $-2 > -4$입니다. 항별로도 $-1 > -2$이므로 (3)과 어긋나지는 않습니다.
:::

## 확인 질문

:::check[$m \le i \le n$에서 $|x_i| \le b$이면 $\left|\sum_{i=m}^{n} x_i\right|$를 무엇으로 누를 수 있는가?]
$(n - m + 1)b$로 누를 수 있습니다. (5)에 의해 $\left|\sum_{i=m}^{n} x_i\right| \le \sum_{i=m}^{n} |x_i|$이고, (4)를 $i$번째 항이 $|x_i|$인 수열에 쓰면(위쪽 부등식만) $\sum_{i=m}^{n} |x_i| \le (n - m + 1)b$입니다. 빈 합($n = m - 1$)이면 양쪽이 모두 $0$입니다.
:::

:::check[$1 \le i \le n$에서 $0 \le x_i$이고 $\sum_{i=1}^{n} x_i = 0$이면 각 $x_i$는 무엇인가?]
모두 $0$입니다. 어떤 $k$에서 $0 < x_k$라면 (6)의 둘째 문장에 의해 합이 양수가 되어 $0$이라는 데 어긋납니다. 따라서 모든 $k$에서 $0 < x_k$가 아니고, [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $x_k \le 0$이며, $0 \le x_k$와 같은 항목의 (1)의 (ii)에 의해 $x_k = 0$입니다.
:::
