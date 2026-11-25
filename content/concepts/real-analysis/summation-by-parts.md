---
title: 부분합으로 바꾸어 더하기
title_en: Summation by Parts
aliases: [아벨의 합 공식, 아벨 변환, 부분 합산, summation by parts, Abel summation formula, Abel transformation]
kind: lemma
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 두 수열 (a_k), (b_k) 와 (a_k) 의 부분합 A_k 에 대하여, a_k b_k 의 k = m 부터 n 까지의 합은 A_n b_n − A_{m−1} b_m 에 A_k (b_k − b_{k+1}) 의 k = m 부터 n − 1 까지의 합을 더한 것과 같다(A_0 = 0). m = 1 이면 경계 항 A_0 b_1 이 사라진다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, sequence, series-and-partial-sums, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, sum-of-integers-and-squares]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.5.7절 Exercise 2.5.17 (p.99), 5.3.4절 Exercise 5.3.5 (p.205)
    checked: original
    note: "이 항등식은 출처에 명제로 없다. Lebl, Basic Analysis I 와 II 의 텍스트 전체를 검색어 'summation by parts', 'partial summation', 'by parts', 'Abel', 'summation' 으로 찾았고(I 권에서 'by parts' 는 적분의 부분적분 Exercise 5.3.5 와 색인뿐, 'Abel' 은 Exercise 2.5.17 과 색인뿐, II 권은 'by parts' 가 연습문제 9.1.4(p.68)의 '적분의 부분적분을 쓰지 말고' 1건이고 나머지는 0건), 2.5.7절과 2.6.6절의 연습문제를 처음부터 끝까지 읽었다. 출처 Exercise 2.5.17(p.99)은 부분합이 유계인 급수와 λ_n → 0, Σ |λ_{n+1} − λ_n| 수렴을 가정한 판정법('Abel's theorem')을 힌트 없이 증명하게 하는데, 이 항목은 그 증명(이 사이트의 dirichlet-test)에 쓰는 도구이다. 출처 Exercise 5.3.5(p.205)는 적분의 부분적분을 증명하게 하고, 직관 절은 두 식이 닮았다는 것만 말한다. 이름 '아벨의 합 공식'은 출처에 나오지 않는다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(아벨의 합 공식을 작은 경우에 대입, 예의 합의 어림 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열은 [[sequence]]의 것이고, 부분합은 [[series-and-partial-sums]]의 것이며, 유한 합 $\sum_{k=m}^{n}$, 빈 합과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이다.

$(a_k)$, $(b_k)$를 수열이라 하자. $0$ 이상인 정수 $k$에 대하여 $(a_k)$의 부분합을
$$
A_k = \sum_{i=1}^{k} a_i
$$
로 쓴다. 곧 $k \ge 1$이면 $A_k$는 $(a_k)$의 $k$번째 부분합이고, $A_0 = 0$은 빈 합이다.

1. (**부분합으로 바꾸어 더하기**, summation by parts) $1 \le m \le n$인 정수 $m$, $n$에 대하여
   $$
   \begin{aligned}
   &\sum_{k=m}^{n} a_k b_k \\
   &\quad = A_n b_n - A_{m-1} b_m \\
   &\qquad + \sum_{k=m}^{n-1} A_k (b_k - b_{k+1})
   \end{aligned}
   $$
   이다. $m = n$이면 오른쪽의 합은 빈 합 $0$이다.
2. (첫 항부터 더하는 경우) 자연수 $n$에 대하여
   $$
   \begin{aligned}
   &\sum_{k=1}^{n} a_k b_k \\
   &\quad = A_n b_n + \sum_{k=1}^{n-1} A_k (b_k - b_{k+1})
   \end{aligned}
   $$
   이다. $n = 1$이면 오른쪽의 합은 빈 합 $0$이다.
3. (항을 부분합의 차로 쓰기) 모든 자연수 $k$에서 $a_k = A_k - A_{k-1}$이다.
:::

:::english
Sequences are those of the entry on sequences, partial sums are those of the entry on series and partial sums, and the finite sum $\sum_{k=m}^{n}$, the empty sum and sums of terms defined only on a range are those of the entry on finite sums of reals.

Let $(a_k)$ and $(b_k)$ be sequences. For an integer $k \ge 0$ write the partial sum of $(a_k)$ as
$$
A_k = \sum_{i=1}^{k} a_i .
$$
That is, for $k \ge 1$, $A_k$ is the $k$th partial sum of $(a_k)$, and $A_0 = 0$ is the empty sum.

1. (**Summation by parts**) For integers $m$, $n$ with $1 \le m \le n$,
   $$
   \begin{aligned}
   &\sum_{k=m}^{n} a_k b_k \\
   &\quad = A_n b_n - A_{m-1} b_m \\
   &\qquad + \sum_{k=m}^{n-1} A_k (b_k - b_{k+1}) .
   \end{aligned}
   $$
   If $m = n$, the sum on the right is the empty sum $0$.
2. (Summing from the first term) For a natural number $n$,
   $$
   \begin{aligned}
   &\sum_{k=1}^{n} a_k b_k \\
   &\quad = A_n b_n + \sum_{k=1}^{n-1} A_k (b_k - b_{k+1}) .
   \end{aligned}
   $$
   If $n = 1$, the sum on the right is the empty sum $0$.
3. (Terms as differences of partial sums) For every natural number $k$, $a_k = A_k - A_{k-1}$.
:::

## 직관

곱 $a_k b_k$의 합에서 $a_k$의 합 $A_k$는 잘 알지만 $a_k$ 하나하나는 제멋대로일 때 쓰는 항등식입니다. $a_k$를 부분합의 차 $A_k - A_{k-1}$로 바꾸어 넣고, 같은 $A_k$가 붙은 항끼리 모으면 $A_k$에 $b_k - b_{k+1}$이 곱해집니다. 그러면 합이 "$a$의 부분합"과 "$b$의 차"의 곱의 합이 됩니다. 남는 것은 양 끝의 두 항 $A_n b_n$과 $A_{m-1} b_m$입니다.

비유하자면 계단을 오르내린 기록입니다. $a_k$가 $k$번째 걸음에 오르내린 높이이고 $A_k$가 그 걸음 뒤의 높이라 합시다. 걸음마다 $b_k$를 곱해 더하는 대신, 걸음 사이의 높이 $A_k$에 무게의 변화 $b_k - b_{k+1}$을 곱해 더해도 끝의 높이 항만 다르고 같은 값이 나옵니다. 높이 $A_k$가 유계이고 $b_k$가 조금씩만 변하면 오른쪽 합은 작게 누를 수 있는데, 이것이 이 단원의 디리클레 판정법에서 이 항등식을 쓰는 까닭입니다.

적분의 부분적분 $\int f g' = fg - \int f' g$와 모양이 닮아 "부분합으로 바꾸어 더하기"(summation by parts)라 부릅니다. $A_k$가 $f$, $b_k$가 $g$에 해당하고, 차 $b_k - b_{k+1}$이 도함수의 자리에 옵니다. 다만 이 항등식은 유한 합의 계산일 뿐이고 극한을 쓰지 않습니다.

## 증명

:::idea
$a_k = A_k - A_{k-1}$을 넣어 합을 둘로 나누고, $A_{k-1} b_k$의 합은 첨자를 한 칸 옮겨 $A_k b_{k+1}$의 합으로 바꾼 뒤, 같은 범위의 두 합을 하나로 모은다.
:::

:::hint
$A_{k-1}$은 $k = 1$에서 $A_0 = 0$이다. 첨자를 옮기기 전에 $k = m$인 항을 따로 떼어 두면 번호가 $0$ 이하로 내려가지 않는다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8)로 다루고, [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽어도 된다. 아래에서 $1 \le k \le n$ 같은 범위에서만 정해진 항(예: $A_{k-1} b_k$)의 합에 [[finite-sum-of-reals|실수의 유한 합]]과 [[splitting-and-shifting-finite-sums|유한 합의 쪼개기와 첨자 옮기기]], [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]] 항목의 진술을 쓰는 것은 [[linearity-and-order-of-finite-sums]]의 (8)에 의한 것이다.

$A_k$가 정해지는지 본다. $k \ge 1$이면 [[finite-sum-of-reals]]의 (1)에 의해 $A_k$는 $(a_k)$의 $k$번째 부분합이고, $k = 0$이면 같은 항목의 (2)에 의해 $A_0 = \sum_{i=1}^{0} a_i = 0$이다.

**3의 증명.** 자연수 $k$에 대하여 $k - 1 \ge 0$이므로 [[finite-sum-of-reals]]의 (3)을 시작 번호 $1$, 끝 번호 $k - 1$에 쓰면 $A_k = A_{k-1} + a_k$이다. (K5)와 뺄셈의 정의에 의해 $a_k = A_k - A_{k-1}$이다.

**1의 증명.** $1 \le m \le n$이라 하자. (3)과 (K3), (K12)의 (i), 뺄셈의 정의에 의해 $m \le k \le n$인 모든 $k$에서 $a_k b_k = A_k b_k - A_{k-1} b_k$이므로, [[linearity-and-order-of-finite-sums]]의 (1)에 의해
$$
\begin{aligned}
\sum_{k=m}^{n} a_k b_k &= \sum_{k=m}^{n} A_k b_k \\
&\qquad - \sum_{k=m}^{n} A_{k-1} b_k
\end{aligned}
$$
이다. 첫째 합은 [[finite-sum-of-reals]]의 (3)으로 끝항을 떼면($m - 1 \le n - 1$)
$$
\sum_{k=m}^{n} A_k b_k = \sum_{k=m}^{n-1} A_k b_k + A_n b_n
$$
이다. 둘째 합은 [[splitting-and-shifting-finite-sums]]의 (1)을 $k = m$에서 쪼개고 [[finite-sum-of-reals]]의 (2)로 한 항의 합을 쓰면
$$
\begin{aligned}
\sum_{k=m}^{n} A_{k-1} b_k &= A_{m-1} b_m \\
&\qquad + \sum_{k=m+1}^{n} A_{k-1} b_k
\end{aligned}
$$
이다. 마지막 합은 $m + 1 \le k \le n$에서 정해진 항 $A_{k-1} b_k$의 합이고, [[splitting-and-shifting-finite-sums]]의 (2)를 $r = -1$로 쓰면($1 \le m = (m + 1) + r$) $j = k - 1$로 옮긴
$$
\sum_{k=m+1}^{n} A_{k-1} b_k = \sum_{j=m}^{n-1} A_j b_{j+1}
$$
이다. 이 셋을 합치고 [[linearity-and-order-of-finite-sums]]의 (1)과 (K3), (K12)의 (ii)로 같은 범위의 두 합을 모으면
$$
\begin{aligned}
&\sum_{k=m}^{n} a_k b_k \\
&\quad = A_n b_n - A_{m-1} b_m \\
&\qquad + \sum_{k=m}^{n-1} (A_k b_k - A_k b_{k+1}) \\
&\quad = A_n b_n - A_{m-1} b_m \\
&\qquad + \sum_{k=m}^{n-1} A_k (b_k - b_{k+1})
\end{aligned}
$$
이다((K1), (K2), (K9)를 함께 쓴다). $m = n$이면 마지막 합은 시작 번호 $n$, 끝 번호 $n - 1$인 빈 합이다.

**2의 증명.** (1)을 $m = 1$에 쓰면 $A_{m-1} b_m = A_0 b_1 = 0 \cdot b_1 = 0$이므로((K9)) 주어진 식을 얻는다. $\blacksquare$
:::

## 예시와 반례

:::example[a_k 가 모두 1 이고 b_k = k 인 경우]
$a_k = 1$이면 $A_k = k$이고([[linearity-and-order-of-finite-sums]]의 (2)), $b_k = k$이면 $b_k - b_{k+1} = -1$입니다. (2)의 오른쪽은
$$
\begin{aligned}
&n \cdot n + \sum_{k=1}^{n-1} k \cdot (-1) \\
&\quad = n^2 - \frac{(n - 1)n}{2} = \frac{n(n + 1)}{2}
\end{aligned}
$$
입니다([[sum-of-integers-and-squares]]). 왼쪽은 $\sum_{k=1}^{n} 1 \cdot k = n(n + 1)/2$이므로 두 쪽이 같습니다. $n = 1$이면 왼쪽은 $1$, 오른쪽은 $1 \cdot 1 + 0 = 1$입니다.
:::

:::example[b_k 가 상수인 경우]
모든 $b_k$가 같은 수 $c$이면 $b_k - b_{k+1} = 0$이므로 (1)의 오른쪽 합은 $0$이고, (1)은 $\sum_{k=m}^{n} a_k c = (A_n - A_{m-1})\,c$가 됩니다. 이것은 [[finite-sum-of-reals]]의 (1)에 의해 $\sum_{k=m}^{n} a_k = A_n - A_{m-1}$에 $c$를 곱한 것과 같습니다. 특히 $c = 0$이면 두 쪽이 모두 $0$입니다.
:::

## 확인 질문

:::check[$a_k = (-1)^k$, $b_k = k$, $n = 4$일 때 (2)의 두 쪽을 계산하라.]
왼쪽은 $-1 + 2 - 3 + 4 = 2$입니다. 부분합은 $A_1 = -1$, $A_2 = 0$, $A_3 = -1$, $A_4 = 0$이고 $b_k - b_{k+1} = -1$이므로, 오른쪽은 $0 \cdot 4 + \bigl((-1)(-1) + 0 \cdot (-1) + (-1)(-1)\bigr) = 2$입니다.
:::

:::check[$m = n$일 때 (1)은 무엇을 말하는가?]
$a_n b_n = A_n b_n - A_{n-1} b_n$입니다. 오른쪽 합이 빈 합이기 때문입니다. 이것은 (3)의 $a_n = A_n - A_{n-1}$의 양변에 $b_n$을 곱한 것입니다.
:::
