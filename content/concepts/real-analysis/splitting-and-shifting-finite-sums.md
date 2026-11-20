---
title: 유한 합의 쪼개기와 첨자 옮기기
title_en: Splitting and Shifting Finite Sums
aliases: [합 쪼개기, 첨자 옮기기, 첨자 바꾸기, 합 이어 붙이기, splitting a sum, index shift, reindexing a sum, concatenating sums]
kind: proposition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 유한 합은 가운데 번호에서 두 합으로 쪼갤 수 있고, 첨자를 정수만큼 옮겨도 같으며, 두 열을 이어 붙인 합은 두 합의 합이고, 한 항을 두 항으로 바꾸면 합은 그 차이만큼만 바뀐다.
requires: [even-and-odd, prime-number, well-ordering-principle, mathematical-induction, natural-numbers-are-infinite, real-number-arithmetic, real-order-axioms, order-properties-of-reals, sequence, real-valued-function, series-and-partial-sums, finite-sum-of-reals]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5절(2.5.1 소절) Remark 2.5.2 (p.87), Proposition 2.5.6 의 증명 (p.89); 5.1절(5.1.1 소절) Proposition 5.1.7 의 증명 (p.183–184); 5.2절(5.2.1 소절) Lemma 5.2.1 의 증명 (p.191)
    checked: original
    note: "출처는 이 성질들을 명제로 진술하지 않고 Σ 의 계산으로 말없이 쓴다. 이 항목의 진술과 증명은 이 사이트가 썼다. (1) 쪼개기는 출처의 Proposition 2.5.6 의 증명(p.89)이 부분합 Σ_{n=1}^k x_n 을 Σ_{n=1}^{M−1} x_n 과 Σ_{n=M}^k x_n 의 합으로 쓰는 것, Lemma 5.2.1 의 증명(p.191)이 Σ_{i=1}^n m_iΔx_i 를 Σ_{i=1}^k 와 Σ_{i=k+1}^n 으로 나누는 것에 해당한다. 같은 증명에서 [b, c] 의 분할 P_2 = {x_k, …, x_n} 의 하합을 L(P_2, f) 로 읽는 것은 첨자를 옮기는 (2)를, P = P_1 ∪ P_2 의 하합을 두 하합의 합으로 쓰는 것은 (3)을 말없이 쓴 것이다. (2) 첨자 옮기기는 Remark 2.5.2(p.87)가 급수에서 Σ_{n=0}^∞ rⁿ = Σ_{n=1}^∞ r^{n−1} 로 첨자를 하나 옮겨 쓰는 것과 같은 발상이다. (4)는 출처의 Proposition 5.1.7 의 증명(p.183–184)이 세분의 하합을 이중 합으로 다루는 것 대신, 점 하나를 더할 때 바뀌는 항만 비교할 수 있게 이 사이트가 세운 꼴이다. Example 2.5.11(2.5.3 소절, p.90)이 조화급수의 부분합 s_{2^k} 를 묶음 Σ_{m=2^{i−1}+1}^{2^i} 들로 나누어 쓰는 것은 (1)을 거듭 쓴 것과 같은 계산이다. 예시 '1 부터 5 까지의 합을 둘로 쪼개기'와 반례 '첨자 범위만 옮긴 합'의 항이 i 인 수열의 합은 출처 연습문제 5.3.13(p.206)의 Σ_{k=1}^n k^ℓ 에서 ℓ = 1 로 둔 것과 같은 대상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 경계 경우에서 거짓이던 설명 문장 6건과 증명 없던 주장을 고쳤다."
added: 2026-11-20
---

:::statement
수열, 부분합, 유한 합 $\sum_{i=m}^{n} x_i$와 빈 합, 범위에서만 정해진 항의 합은 [[sequence]], [[series-and-partial-sums]], [[finite-sum-of-reals]]의 것이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다룬다. 아래에서 $(x_i)$, $(y_i)$, $(z_i)$는 수열이다.

1. (쪼개기) $1 \le m$이고 $m - 1 \le k \le n$인 정수 $m$, $k$, $n$에 대하여
   $$
   \sum_{i=m}^{n} x_i = \sum_{i=m}^{k} x_i + \sum_{i=k+1}^{n} x_i
   $$
   이다.
2. (첨자 옮기기) $1 \le m$, $m - 1 \le n$이고 $1 \le m + r$인 정수 $m$, $n$, $r$에 대하여, $m \le i \le n$인 모든 정수 $i$에서 $y_{i+r} = x_i$이면
   $$
   \sum_{i=m}^{n} x_i = \sum_{j=m+r}^{n+r} y_j
   $$
   이다. 범위에서만 정해진 항으로 쓰면, $m \le i \le n$에서 정해진 실수 $t_i$에 대하여 $\sum_{i=m}^{n} t_i = \sum_{j=m+r}^{n+r} t_{j-r}$이다. 여기서 오른쪽은 $m + r \le j \le n + r$에서 정해진 항 $t_{j-r}$의 합이다. 특히 $r = 1 - m$으로 두면 $\sum_{i=m}^{n} t_i = \sum_{j=1}^{n-m+1} t_{j+m-1}$이다.
3. (이어 붙이기) $k \ge 0$, $l \ge 0$인 정수 $k$, $l$에 대하여, $1 \le i \le k$인 모든 정수 $i$에서 $z_i = x_i$이고 $1 \le j \le l$인 모든 정수 $j$에서 $z_{k+j} = y_j$이면
   $$
   \sum_{i=1}^{k+l} z_i = \sum_{i=1}^{k} x_i + \sum_{j=1}^{l} y_j
   $$
   이다. 이런 수열 $(z_i)$는 언제나 있다. 예컨대 $1 \le i \le k$이면 $x_i$, $k < i$이면 $y_{i-k}$로 정한 수열이 그렇다.
4. (한 항을 둘로 나누기) $1 \le k \le n$인 정수 $k$, $n$에 대하여, $1 \le i \le k - 1$인 모든 정수 $i$에서 $y_i = x_i$이고 $k + 1 \le i \le n$인 모든 정수 $i$에서 $y_{i+1} = x_i$이면
   $$
   \sum_{i=1}^{n+1} y_i = \sum_{i=1}^{n} x_i - x_k + (y_k + y_{k+1})
   $$
   이다. 곧 $\sum_{i=1}^{n+1} y_i - \sum_{i=1}^{n} x_i = (y_k + y_{k+1}) - x_k$이다.
:::

:::english
Sequences, partial sums, finite sums $\sum_{i=m}^{n} x_i$ and the empty sum, and sums of terms given only on a range are those of the entries on sequences, on series and partial sums, and on finite sums of real numbers. The order of the integers is handled with (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle. Below, $(x_i)$, $(y_i)$, $(z_i)$ are sequences.

1. (Splitting) For integers $m$, $k$, $n$ with $1 \le m$ and $m - 1 \le k \le n$,
   $$
   \sum_{i=m}^{n} x_i = \sum_{i=m}^{k} x_i + \sum_{i=k+1}^{n} x_i .
   $$
2. (Shifting the index) For integers $m$, $n$, $r$ with $1 \le m$, $m - 1 \le n$ and $1 \le m + r$, if $y_{i+r} = x_i$ for every integer $i$ with $m \le i \le n$, then
   $$
   \sum_{i=m}^{n} x_i = \sum_{j=m+r}^{n+r} y_j .
   $$
   In terms of terms given only on a range: for real numbers $t_i$ given for $m \le i \le n$, $\sum_{i=m}^{n} t_i = \sum_{j=m+r}^{n+r} t_{j-r}$, where the right-hand side is the sum of the terms $t_{j-r}$ given for $m + r \le j \le n + r$. In particular, taking $r = 1 - m$, $\sum_{i=m}^{n} t_i = \sum_{j=1}^{n-m+1} t_{j+m-1}$.
3. (Concatenation) For integers $k \ge 0$ and $l \ge 0$, if $z_i = x_i$ for every integer $i$ with $1 \le i \le k$ and $z_{k+j} = y_j$ for every integer $j$ with $1 \le j \le l$, then
   $$
   \sum_{i=1}^{k+l} z_i = \sum_{i=1}^{k} x_i + \sum_{j=1}^{l} y_j .
   $$
   Such a sequence $(z_i)$ always exists; for example, the sequence defined by $x_i$ if $1 \le i \le k$ and $y_{i-k}$ if $k < i$.
4. (Splitting one term into two) For integers $k$, $n$ with $1 \le k \le n$, if $y_i = x_i$ for every integer $i$ with $1 \le i \le k - 1$ and $y_{i+1} = x_i$ for every integer $i$ with $k + 1 \le i \le n$, then
   $$
   \sum_{i=1}^{n+1} y_i = \sum_{i=1}^{n} x_i - x_k + (y_k + y_{k+1}) ;
   $$
   that is, $\sum_{i=1}^{n+1} y_i - \sum_{i=1}^{n} x_i = (y_k + y_{k+1}) - x_k$.
:::

## 직관

줄을 선 사람들의 키를 모두 더한다고 해 봅시다. 앞에서 $k$번째 사람까지 더한 것과 그 뒤 사람들을 더한 것을 합치면 전체가 됩니다. 이것이 (1)입니다. 번호표를 모두 $r$씩 고쳐 달아도 사람은 그대로이므로 키의 합도 그대로입니다. 이것이 (2)이고, 번호표만 바꾼 것이므로 합의 첨자와 범위를 함께 옮겨야 합니다(아래 반례). 두 줄을 이어 한 줄로 세우면 뒷줄 사람의 번호는 앞줄 사람 수 $k$만큼 밀리고, 합은 두 줄의 합을 더한 것입니다. 이것이 (3)입니다. 비유와 다른 점은, 합에서는 항이 같은 수여도 되고 빈 줄($k = 0$이나 $l = 0$)도 허용한다는 것입니다.

(4)는 $k$번째 사람이 두 사람으로 갈라지는 경우입니다. 그 앞 사람들의 번호는 그대로이고 뒤 사람들의 번호는 하나씩 밀립니다. 그래서 전체 합에서 달라지는 것은 사라진 항 $x_k$와 새로 생긴 두 항 $y_k$, $y_{k+1}$뿐입니다. 증명은 두 합을 모두 "앞부분, 가운데, 뒷부분"으로 쪼개고((1)), 앞부분은 같은 항이어서 같고([[finite-sum-of-reals|유한 합]]의 (4)), 뒷부분은 첨자를 하나 옮긴 것이어서 같다((2))는 것으로 합니다.

## 증명

:::idea
(1)과 (2)는 끝 번호 $n$에 대한 귀납법으로, 끝항 떼기([[finite-sum-of-reals|유한 합]]의 (3))를 양쪽에 한 번씩 써서 증명한다. (3)과 (4)는 (1)로 쪼갠 조각마다 유한 합의 (4)나 (2)를 쓴다.
:::

:::hint
(1)에서 $m$과 $k$를 고정하고 $n \ge k$에 대한 귀납법을 쓴다. 기초 단계 $n = k$에서 오른쪽 둘째 합은 빈 합이다.
:::

:::hint
(4)에서 $\sum_{i=1}^{n} x_i$는 $k - 1$과 $k$에서, $\sum_{i=1}^{n+1} y_i$는 $k - 1$과 $k + 1$에서 쪼갠다. 마지막 조각끼리는 $r = 1$인 (2)로 비교한다.
:::

:::proof
"합 (2)"처럼 쓴 것은 [[finite-sum-of-reals]]의 번호이고, (K…)는 [[real-number-arithmetic]]의 진술이다. 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]], 정수의 계산 법칙은 [[well-ordering-principle]]의 진술에서 받아들인 것이다. 유한 합의 기호를 쓸 때마다 시작 번호가 $1$ 이상이고 (시작 번호) $-\,1 \le$ (끝 번호)인지 확인한다.

**1의 증명.** $m$, $k$와 수열 $(x_i)$를 고정하고, $n \ge k$인 정수 $n$에 대한 명제 $S_n$을 "$\sum_{i=m}^{n} x_i = \sum_{i=m}^{k} x_i + \sum_{i=k+1}^{n} x_i$"로 두자. $k \ge m - 1 \ge 0$이므로 (Z7)에 의해 $k + 1 \ge 1$이고 $(k + 1) - 1 = k \le n$이어서, 오른쪽 둘째 합이 정의된다. $m - 1 \le k \le n$이므로 (Z6)에 의해 왼쪽 합과 오른쪽 첫째 합도 정의된다. [[mathematical-induction]]의 시작점이 $k$인 꼴을 쓴다.

기초 단계: $n = k$이면 $\sum_{i=k+1}^{k} x_i$는 빈 합이므로 합 (2)와 (K4)에 의해 $S_k$가 참이다.

귀납 단계: $n \ge k$인 정수 $n$에서 $S_n$이 참이라 하자. $m - 1 \le n$이고 $(k + 1) - 1 \le n$이므로 합 (3)을 시작 번호 $m$과 $k + 1$에 각각 쓸 수 있다. 합 (3), $S_n$, (K2)에 의해
$$
\begin{aligned}
\sum_{i=m}^{n+1} x_i &= \sum_{i=m}^{n} x_i + x_{n+1} = \Bigl(\sum_{i=m}^{k} x_i + \sum_{i=k+1}^{n} x_i\Bigr) + x_{n+1} \\
&= \sum_{i=m}^{k} x_i + \Bigl(\sum_{i=k+1}^{n} x_i + x_{n+1}\Bigr) = \sum_{i=m}^{k} x_i + \sum_{i=k+1}^{n+1} x_i
\end{aligned}
$$
이므로 $S_{n+1}$이 참이다. 따라서 $n \ge k$인 모든 정수 $n$에서 $S_n$이 참이다.

**2의 증명.** $m$, $r$과 두 수열을 고정한다. $n \ge m - 1$인 정수 $n$에 대한 명제 $S_n$을 "$m \le i \le n$인 모든 정수 $i$에서 $y_{i+r} = x_i$이면 $\sum_{i=m}^{n} x_i = \sum_{j=m+r}^{n+r} y_j$이다"로 두자. $1 \le m + r$이고, $m - 1 \le n$에서 (Z7)에 의해 $(m + r) - 1 \le n + r$이므로 오른쪽 합이 정의된다. 시작점이 $m - 1$인 귀납법을 쓴다.

기초 단계: $n = m - 1$이면 $n + r = (m + r) - 1$이므로 두 합은 모두 빈 합이고, 합 (2)에 의해 둘 다 $0$이다.

귀납 단계: $n \ge m - 1$에서 $S_n$이 참이라 하고, $m \le i \le n + 1$인 모든 정수 $i$에서 $y_{i+r} = x_i$라 하자. 그러면 $m \le i \le n$에서도 그러하므로((L3), (Z6)) $S_n$에 의해 $\sum_{i=m}^{n} x_i = \sum_{j=m+r}^{n+r} y_j$이다. (Z7)에 의해 $m \le n + 1$이므로 $i = n + 1$에서 $y_{(n+1)+r} = x_{n+1}$이고, $(n + 1) + r = (n + r) + 1$이다. 합 (3)을 양쪽에 쓰면
$$
\begin{aligned}
\sum_{i=m}^{n+1} x_i &= \sum_{i=m}^{n} x_i + x_{n+1} \\
&= \sum_{j=m+r}^{n+r} y_j + y_{(n+r)+1} = \sum_{j=m+r}^{(n+r)+1} y_j
\end{aligned}
$$
이므로 $S_{n+1}$이 참이다. 따라서 (2)의 첫 문장이 성립한다.

범위에서만 정해진 항의 문장: $(x_i)$를 $t_i$를 $0$으로 채운 수열, $(y_j)$를 $m + r \le j \le n + r$에서 $t_{j-r}$을, 그 밖에서 $0$을 값으로 갖는 수열이라 하자. $m \le i \le n$이면 $m + r \le i + r \le n + r$이고 $(i + r) - r = i$이므로 $y_{i+r} = t_i = x_i$이다. 첫 문장과 범위에서만 정해진 항의 합의 정의에 의해 $\sum_{i=m}^{n} t_i = \sum_{i=m}^{n} x_i = \sum_{j=m+r}^{n+r} y_j = \sum_{j=m+r}^{n+r} t_{j-r}$이다. $r = 1 - m$이면 $m + r = 1$, $n + r = n - m + 1$, $j - r = j + m - 1$이다.

**3의 증명.** $k \ge 0$, $l \ge 0$이므로 $1 - 1 = 0 \le k \le k + l$이고 (1)을 $m = 1$에 쓸 수 있다. (1)에 의해
$$
\sum_{i=1}^{k+l} z_i = \sum_{i=1}^{k} z_i + \sum_{i=k+1}^{k+l} z_i
$$
이다. $1 \le i \le k$에서 $z_i = x_i$이므로 합 (4)에 의해 첫째 합은 $\sum_{i=1}^{k} x_i$이다. 둘째 합에 (2)를 시작 번호 $k + 1$, 끝 번호 $k + l$, $r = -k$로 쓴다. $(k + 1) + (-k) = 1$이고, $k + 1 \le i \le k + l$인 정수 $i$에 대해 $j = i - k$는 $1 \le j \le l$이므로 가정에 의해 $y_{i+(-k)} = y_j = z_{k+j} = z_i$이다. 따라서 둘째 합은 $\sum_{j=1}^{l} y_j$이다.

수열 $(z_i)$가 있다는 것: 각 자연수 $i$는 $i \le k$와 $k < i$ 가운데 정확히 하나에 들고((Z5)), $k < i$이면 (Z1)과 (Z7)에 의해 $i - k \ge 1$이어서 $y_{i-k}$가 정해진다. 따라서 [[real-valued-function]]의 (1)을 $\mathbb{N}$ 위에 쓰면 이 경우 나누기로 수열이 정해지고, $1 \le i \le k$에서 $z_i = x_i$, $1 \le j \le l$에서 $k < k + j$이므로 $z_{k+j} = y_{(k+j)-k} = y_j$이다.

**4의 증명.** $1 \le k \le n$이므로 $0 \le k - 1$이고, 수 $A = \sum_{i=1}^{k-1} x_i$, $B = \sum_{i=k+1}^{n} x_i$, $A' = \sum_{i=1}^{k-1} y_i$, $B' = \sum_{i=k+2}^{n+1} y_i$가 정의된다($k \le n$이므로 $(k + 2) - 1 \le n + 1$).

$\sum_{i=1}^{n} x_i$를 (1)로 $k - 1$에서 쪼개고($0 \le k - 1 \le n$), 남은 $\sum_{i=k}^{n} x_i$를 다시 $k$에서 쪼갠다($k - 1 \le k \le n$). 합 (2)에 의해 $\sum_{i=k}^{k} x_i = x_k$이므로 $\sum_{i=1}^{n} x_i = A + (x_k + B)$이다.

$\sum_{i=1}^{n+1} y_i$를 (1)로 $k - 1$에서 쪼개고($0 \le k - 1 \le n + 1$), 남은 $\sum_{i=k}^{n+1} y_i$를 $k + 1$에서 쪼갠다($k - 1 \le k + 1 \le n + 1$). 합 (3)과 (2)에 의해 $\sum_{i=k}^{k+1} y_i = \sum_{i=k}^{k} y_i + y_{k+1} = y_k + y_{k+1}$이므로 $\sum_{i=1}^{n+1} y_i = A' + \bigl((y_k + y_{k+1}) + B'\bigr)$이다.

$1 \le i \le k - 1$에서 $y_i = x_i$이므로 합 (4)에 의해 $A' = A$이다. $k + 1 \le i \le n$에서 $y_{i+1} = x_i$이고 $1 \le (k + 1) + 1$이므로, (2)를 시작 번호 $k + 1$, 끝 번호 $n$, $r = 1$에 쓰면 $B = \sum_{j=k+2}^{n+1} y_j = B'$이다. 따라서 (K1), (K2), (K5)와 뺄셈의 정의에 의해
$$
\begin{aligned}
\sum_{i=1}^{n} x_i - x_k + (y_k + y_{k+1}) &= \bigl(A + (x_k + B)\bigr) + (-x_k) + (y_k + y_{k+1}) \\
&= A + \bigl((y_k + y_{k+1}) + B\bigr) = \sum_{i=1}^{n+1} y_i
\end{aligned}
$$
이다. 양변에서 $\sum_{i=1}^{n} x_i$를 빼면 둘째 식을 얻는다. $\blacksquare$
:::

## 예시와 반례

:::example[1 부터 5 까지의 합을 둘로 쪼개기]
$i$번째 항이 $i$인 수열을 봅니다. 부분합은 $s_1 = 1$, $s_2 = 3$, $s_3 = 6$, $s_4 = 10$, $s_5 = 15$입니다. (1)을 $m = 1$, $k = 2$, $n = 5$에 쓰면 $\sum_{i=1}^{5} i = \sum_{i=1}^{2} i + \sum_{i=3}^{5} i$이고, [[finite-sum-of-reals|유한 합]]의 (1)에 의해 오른쪽은 $s_2 + (s_5 - s_2) = 3 + 12 = 15$로 왼쪽 $s_5 = 15$와 같습니다.

$\sum_{i=3}^{5} i$에 (2)를 $r = -2$로 쓰면, $y_j = j + 2$인 수열은 $3 \le i \le 5$에서 $y_{i-2} = (i - 2) + 2 = i$이므로 $\sum_{i=3}^{5} i = \sum_{j=1}^{3} (j + 2)$입니다. 오른쪽은 $3 + 4 + 5 = 12$로 끝항을 하나씩 더해 계산해도 같습니다. $k = 0$($= m - 1$)이나 $k = 5$($= n$)로 쪼개면 한쪽이 빈 합이 되어 (1)은 $15 = 0 + 15$, $15 = 15 + 0$이 됩니다.
:::

:::example[한 항을 둘로 나누기]
$n = 3$, $x_1 = 1$, $x_2 = 6$, $x_3 = 2$로 두고, 둘째 항 $6$을 $4$와 $2$로 나누어 $y_1 = 1$, $y_2 = 4$, $y_3 = 2$, $y_4 = 2$로 둡니다. $k = 2$에서 $1 \le i \le 1$이면 $y_i = x_i$이고, $3 \le i \le 3$이면 $y_{i+1} = y_4 = 2 = x_3$이므로 (4)의 가정이 성립합니다. (4)에 의해 $\sum_{i=1}^{4} y_i = \sum_{i=1}^{3} x_i - 6 + (4 + 2) = 9 - 6 + 6 = 9$이고, 직접 더해도 $1 + 4 + 2 + 2 = 9$입니다. 나눈 두 수의 합이 원래 항과 같으면 합이 바뀌지 않습니다. $y_2 = 5$, $y_3 = 3$으로 나누면 합은 $9 - 6 + 8 = 11$로 $2$만큼 커집니다.
:::

:::counterexample[첨자 범위만 옮긴 합]
(2)는 항과 첨자의 범위를 함께 옮깁니다. 항은 그대로 두고 범위만 옮기면 합이 달라질 수 있습니다. $i$번째 항이 $i$인 수열에서 $\sum_{i=1}^{3} i = 6$이지만 $\sum_{j=2}^{4} j = 2 + 3 + 4 = 9$입니다. (2)를 $r = 1$로 바르게 쓰면 $y_{i+1} = i$, 곧 $y_j = j - 1$이어야 하고, 실제로 $\sum_{j=2}^{4} (j - 1) = 1 + 2 + 3 = 6$입니다.
:::

## 확인 질문

:::check[(3)에서 $l = 0$이면 무엇을 말하는가?]
$1 \le i \le k$에서 $z_i = x_i$이면 $\sum_{i=1}^{k} z_i = \sum_{i=1}^{k} x_i + 0$이라는 것입니다. $1 \le j \le 0$인 $j$가 없으므로 둘째 가정은 저절로 성립하고, $\sum_{j=1}^{0} y_j$는 빈 합 $0$입니다. 이것은 [[finite-sum-of-reals|유한 합]]의 (4)와 같은 내용입니다.
:::

:::check[$1 \le m$, $m \le n$일 때 $\sum_{i=m}^{n} x_i$를 첫째 항과 나머지로 나누면?]
$\sum_{i=m}^{n} x_i = x_m + \sum_{i=m+1}^{n} x_i$입니다. (1)을 $k = m$에 쓰면($m - 1 \le m \le n$) $\sum_{i=m}^{m} x_i + \sum_{i=m+1}^{n} x_i$이고, [[finite-sum-of-reals|유한 합]]의 (2)에 의해 첫째 합은 $x_m$입니다. $n = m$이면 둘째 합은 빈 합입니다.
:::
