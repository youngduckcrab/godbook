---
title: 망원 합
title_en: Telescoping Sums
aliases: [망원급수의 부분합, 이웃한 차의 합, 0 부터 번호가 붙은 실수, telescoping sum, sum of consecutive differences]
kind: proposition
field: real-analysis
msc: ["26"]
level: undergrad
summary: 0 부터 n 까지의 번호에서 정해진 실수 c_0, …, c_n 에 대해 이웃한 차 c_i − c_(i−1) 을 i = j + 1 부터 k 까지 더하면 c_k − c_j 이고, 특히 i = 1 부터 n 까지의 합은 c_n − c_0 이다. 수열에서 x_(i+1) − x_i 를 더한 꼴도 함께 진술한다.
requires: [even-and-odd, prime-number, well-ordering-principle, mathematical-induction, natural-numbers-are-infinite, recursion-theorem, real-number-arithmetic, order-properties-of-reals, sequence, finite-sum-of-reals, linearity-and-order-of-finite-sums, power-of-a-real-number]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 5.1절(5.1.1 소절) Proposition 5.1.2 의 증명 (p.182), 5.1.2 소절 Example 5.1.14 (p.187–188); 5.3절(5.3.1 소절) Theorem 5.3.1 의 증명 (p.201); 5.5절 연습문제 5.5.3 b) (5.5.2 Exercises, p.224)
    checked: original
    note: "출처는 망원 합을 명제로 진술하지 않고 말로만 쓴다. Example 5.1.14(p.188)는 1/(1 + x) 의 하합과 상합의 차를 계산하며 'The sum telescopes—the terms successively cancel each other, something we have seen before'라고 적고, Theorem 5.3.1 의 증명(p.201)은 Σ(F(x_i) − F(x_{i−1})) 에 대해 'all the terms except the first and last cancel'이라고 적어 F(b) − F(a) 를 얻으며, 연습문제 5.5.3 b)(p.224)의 힌트도 'The sum telescopes'이다. Proposition 5.1.2 의 증명(p.182)은 Σ_{i=1}^n Δx_i = b − a 를 근거 없이 쓴다. 이 항목은 이 쓰임들을 0 부터 번호가 붙은 실수 c_0, …, c_n 에 대한 진술로 올리고 끝 번호에 대한 귀납법으로 증명했다. '망원 합'이라는 이름은 출처의 'telescopes'를 옮긴 것이다. 예시 '네 점 사이의 간격'은 출처 Proposition 5.1.2 의 Σ Δx_i = b − a 를 구체적인 수로 쓴 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-20 자기 검토(docs/self-review.md)와 지휘자의 표본 검사를 거쳤다. 본문의 독립 검토는 거치지 않았다. 자기 검토에서 엉킨 증명 근거 1건과 모호하거나 근거 없는 설명 문장 5건을 고쳤다."
added: 2026-11-20
---

:::statement
유한 합과 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이고, 그런 항에 [[finite-sum-of-reals|실수의 유한 합 항목]]과 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식 항목]]의 진술을 쓰는 것은 [[linearity-and-order-of-finite-sums]]의 (8)에 의한 것이다.

**0 부터 번호가 붙은 실수.** 정수 $n \ge 0$에 대하여 $0 \le i \le n$인 정수 $i$마다 실수 $c_i$가 $i$에 대한 식이나 이미 정해진 대상으로 하나씩 정해져 있을 때, 이것을 $c_0, c_1, \dots, c_n$으로 쓴다. 곧 이것은 집합 $\{i \in \mathbb{Z} : 0 \le i \le n\}$에서 $\mathbb{R}$로의 함수([[recursion-theorem]]의 (1))이고, $i$에서의 값을 $c_i$로 쓴 것이다. 줄임표 $c_0, c_1, \dots, c_n$은 이 함수를 가리키는 이름일 뿐이고 합을 뜻하지 않는다. $1 \le i \le n$인 정수 $i$에서는 $0 \le i - 1 \le n$이므로 $c_i - c_{i-1}$은 $1 \le i \le n$에서만 정해진 항이다.

다음이 성립한다.

1. (망원 합) $c_0, c_1, \dots, c_n$이 위와 같고 $0 \le j \le k \le n$인 정수 $j$, $k$에 대하여
   $$
   \sum_{i=j+1}^{k} (c_i - c_{i-1}) = c_k - c_j
   $$
   이다. 특히 $\sum_{i=1}^{n} (c_i - c_{i-1}) = c_n - c_0$이다.
2. (차의 순서를 바꾼 꼴) 같은 가정 아래 $\sum_{i=j+1}^{k} (c_{i-1} - c_i) = c_j - c_k$이고, 특히 $\sum_{i=1}^{n} (c_{i-1} - c_i) = c_0 - c_n$이다.
3. (수열의 꼴) $(x_i)$가 수열이고 $m$, $n$이 $1 \le m$이고 $m - 1 \le n$인 정수이면
   $$
   \sum_{i=m}^{n} (x_{i+1} - x_i) = x_{n+1} - x_m
   $$
   이다. 여기서 왼쪽은 $i$번째 항이 $x_{i+1} - x_i$인 수열의 합이다.
:::

:::english
Finite sums and sums of terms given only on a range are those of the entry on finite sums of real numbers, and applying the statements of the entries on finite sums of real numbers and on linearity and order of finite sums to such terms is justified by item (8) of the latter.

**Real numbers indexed from 0.** For an integer $n \ge 0$, when a real number $c_i$ is given, by an expression in $i$ or by an already determined object, for each integer $i$ with $0 \le i \le n$, we write this as $c_0, c_1, \dots, c_n$. That is, it is a function from the set $\{i \in \mathbb{Z} : 0 \le i \le n\}$ to $\mathbb{R}$ (item (1) of the recursion theorem), with its value at $i$ written $c_i$. The ellipsis in $c_0, c_1, \dots, c_n$ is only a name for this function and does not denote a sum. For integers $i$ with $1 \le i \le n$ we have $0 \le i - 1 \le n$, so $c_i - c_{i-1}$ is a term given only for $1 \le i \le n$.

The following hold.

1. (Telescoping sum) If $c_0, c_1, \dots, c_n$ are as above and $j$, $k$ are integers with $0 \le j \le k \le n$, then
   $$
   \sum_{i=j+1}^{k} (c_i - c_{i-1}) = c_k - c_j .
   $$
   In particular, $\sum_{i=1}^{n} (c_i - c_{i-1}) = c_n - c_0$.
2. (Differences in reversed order) Under the same assumptions, $\sum_{i=j+1}^{k} (c_{i-1} - c_i) = c_j - c_k$; in particular $\sum_{i=1}^{n} (c_{i-1} - c_i) = c_0 - c_n$.
3. (Sequence form) If $(x_i)$ is a sequence and $m$, $n$ are integers with $1 \le m$ and $m - 1 \le n$, then
   $$
   \sum_{i=m}^{n} (x_{i+1} - x_i) = x_{n+1} - x_m ,
   $$
   where the left-hand side is the sum of the sequence whose $i$th term is $x_{i+1} - x_i$.
:::

## 직관

계단을 오르내리며 층마다 높이가 얼마나 바뀌었는지 적어 두었다고 합시다. 바뀐 양을 모두 더하면 마지막 층의 높이에서 처음 층의 높이를 뺀 것이 됩니다. 중간 층의 높이는 한 번은 더해지고(그 층에 올라설 때) 한 번은 빠지므로(그 층을 떠날 때) 지워지기 때문입니다. 접어 넣는 망원경처럼 가운데가 모두 겹쳐 들어가고 양 끝만 남는다고 해서 망원 합이라 부릅니다. 비유가 정의와 맞는 곳은 "층"이 번호 $i$, "높이"가 $c_i$라는 것이고, 높이가 내려가는 층(차가 음수)이 있어도 그대로 성립합니다.

"가운데가 지워진다"는 말을 줄임표 없이 증명하려면 끝 번호에 대한 귀납법을 씁니다. 끝항 $c_{k+1} - c_k$를 하나 더하면 앞의 끝값 $c_k$가 지워지고 새 끝값 $c_{k+1}$이 남습니다.

번호를 $0$부터 붙이는 까닭은 구간 $[a, b]$를 나누는 점들처럼 처음 값 $c_0$이 차의 수보다 하나 많은 자리에 쓰이기 때문입니다. 이 사이트의 수열과 유한 합은 번호 $1$부터 시작하므로, $c_0$은 수열의 항이 아니라 "$0$부터 $n$까지의 정수에서 정해진 수"로 따로 읽고, 합에는 차 $c_i - c_{i-1}$($1 \le i \le n$)만 들어갑니다. 홀수를 작은 것부터 더한 합에 관한 [[sum-of-first-odd-numbers|홀수의 합]]도 아래 예시처럼 이 항목으로 다시 얻을 수 있습니다. 그 항목은 줄임표로 쓴 합을 쓰고, 이 항목은 그것을 고치지 않고 같은 등식을 $\Sigma$로 보입니다.

## 증명

:::idea
$j$를 고정하고 끝 번호 $k$에 대한 귀납법을 쓴다. 빈 합에서 시작해 끝항 $c_{k+1} - c_k$를 더하면 $c_k$가 지워진다. (2)는 (1)에 $-1$을 곱한 것이고, (3)은 같은 귀납법을 수열에 그대로 쓴 것이다.
:::

:::hint
$k = j$이면 왼쪽은 빈 합이고 오른쪽은 $c_j - c_j$이다.
:::

:::hint
귀납 단계에서 $(c_k - c_j) + (c_{k+1} - c_k) = c_{k+1} - c_j$를 계산 법칙으로 확인한다.
:::

:::proof
"합 (2)"처럼 쓴 것은 [[finite-sum-of-reals]]의 번호이고 "선형 (1)"은 [[linearity-and-order-of-finite-sums]]의 번호이다. 범위에서만 정해진 항 $c_i - c_{i-1}$($1 \le i \le n$)에 이 진술들을 쓰는 것은 선형 (8)에 의한 것이고, 아래의 모든 합의 시작 번호는 $1$ 이상, 끝 번호는 $n$ 이하이다. (K…)는 [[real-number-arithmetic]]의 진술이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L3)으로 다룬다.

**1의 증명.** $j$($0 \le j \le n$)를 고정하고, $k \ge j$인 정수 $k$에 대한 명제 $S_k$를 "$k \le n$이면 $\sum_{i=j+1}^{k} (c_i - c_{i-1}) = c_k - c_j$이다"로 두자. 합의 시작 번호 $j + 1$은 $1$ 이상이고 $(j + 1) - 1 = j \le k$이므로 합이 정의된다. [[mathematical-induction]]의 시작점이 $j$인 꼴을 쓴다.

기초 단계: $k = j$이면 왼쪽은 빈 합이므로 합 (2)에 의해 $0$이고, 오른쪽은 (K5)와 (K8)의 (ii)에 의해 $c_j + (-c_j) = 0$이다.

귀납 단계: $k \ge j$에서 $S_k$가 참이라 하고 $k + 1 \le n$이라 하자. (L3)과 (Z6)에 의해 $k \le n$이므로 $S_k$에 의해 $\sum_{i=j+1}^{k} (c_i - c_{i-1}) = c_k - c_j$이다. $j \le k$이므로 합 (3)을 시작 번호 $j + 1$, 끝 번호 $k$에 쓸 수 있고, $1 \le k + 1 \le n$이므로 항 $c_{k+1} - c_k$가 정해진다. 합 (3)과 (K1), (K2), (K5)에 의해
$$
\sum_{i=j+1}^{k+1} (c_i - c_{i-1}) = (c_k - c_j) + (c_{k+1} - c_k) = c_{k+1} + \bigl(c_k + (-c_k)\bigr) + (-c_j) = c_{k+1} - c_j
$$
이다. 따라서 $S_{k+1}$이 참이고, $k \ge j$인 모든 정수 $k$에서 $S_k$가 참이다. "특히"는 $j = 0$, $k = n$으로 둔 것이다.

**2의 증명.** $1 \le i \le n$에서 (K9)와 (K12)의 (iv)에 의해 $c_{i-1} - c_i = -(c_i - c_{i-1}) = (-1)(c_i - c_{i-1})$이다. 선형 (1)의 상수배와 (1)에 의해 $\sum_{i=j+1}^{k} (c_{i-1} - c_i) = (-1)(c_k - c_j) = c_j - c_k$이다.

**3의 증명.** $m$과 수열을 고정하고, $n \ge m - 1$인 정수 $n$에 대한 명제 $T_n$을 $\sum_{i=m}^{n} (x_{i+1} - x_i) = x_{n+1} - x_m$으로 두어 시작점이 $m - 1$인 귀납법을 쓴다. $n = m - 1$이면 왼쪽은 빈 합 $0$이고 오른쪽은 $x_m - x_m = 0$이다. $T_n$이 참이면 합 (3)과 (K1), (K2), (K5)에 의해
$$
\sum_{i=m}^{n+1} (x_{i+1} - x_i) = (x_{n+1} - x_m) + (x_{n+2} - x_{n+1}) = x_{n+2} - x_m
$$
이므로 $T_{n+1}$이 참이다. $\blacksquare$
:::

## 예시와 반례

:::example[네 점 사이의 간격]
$c_0 = 1$, $c_1 = 3$, $c_2 = 4$, $c_3 = 7$이라 합시다. 이웃한 차는 $c_1 - c_0 = 2$, $c_2 - c_1 = 1$, $c_3 - c_2 = 3$이고, (1)에 의해 그 합은 $\sum_{i=1}^{3} (c_i - c_{i-1}) = c_3 - c_0 = 6$입니다. 끝항을 차례로 더해도 $2 + 1 + 3 = 6$입니다. $j = 1$, $k = 3$으로 두면 $\sum_{i=2}^{3} (c_i - c_{i-1}) = c_3 - c_1 = 4 = 1 + 3$입니다. 수직선 위의 점 $1 < 3 < 4 < 7$ 사이의 간격을 모두 더하면 양 끝 사이의 거리가 된다는 것입니다.
:::

:::example[홀수의 합]
자연수 $n$과 $0 \le i \le n$인 정수 $i$에 대해 $c_i = i^2$으로 둡니다([[power-of-a-real-number]]의 (1)에 의해 $i^2 = i\,i$). $1 \le i \le n$에서 (K3), (K9), (K12)와 정수의 계산으로 $(i - 1)^2 = i^2 - 2i + 1$이므로 $c_i - c_{i-1} = i^2 - (i^2 - 2i + 1) = 2i - 1$입니다. (1)에 의해
$$
\sum_{i=1}^{n} (2i - 1) = c_n - c_0 = n^2 - 0^2 = n^2
$$
입니다($0^2 = 0 \cdot 0 = 0$). $n = 3$이면 $1 + 3 + 5 = 9$입니다.
:::

:::counterexample[두 칸 떨어진 차의 합]
차를 이웃한 두 값이 아니라 두 칸 떨어진 값으로 잡으면 양 끝 하나씩만 남지 않을 수 있습니다. $c_0 = 0$, $c_1 = 1$, $c_2 = 4$, $c_3 = 9$에서 $\sum_{i=2}^{3} (c_i - c_{i-2}) = (4 - 0) + (9 - 1) = 12$인데, $c_3 - c_0 = 9$입니다. 이 합에서는 $c_3 + c_2 - c_1 - c_0 = 9 + 4 - 1 - 0 = 12$처럼 양쪽 끝에서 두 값씩 남습니다.
:::

## 확인 질문

:::check[$n = 1$일 때 (1)은 무엇을 말하는가?]
$\sum_{i=1}^{1} (c_i - c_{i-1}) = c_1 - c_0$입니다. [[finite-sum-of-reals|유한 합]]의 (2)에 의해 한 항의 합은 그 항이므로, 왼쪽은 정의 그대로 $c_1 - c_0$입니다. $n = 0$이면 왼쪽은 빈 합이고 오른쪽은 $c_0 - c_0 = 0$입니다.
:::

:::check[수열 $x_i = i$에 (3)을 쓰면 무엇을 얻는가?]
$x_{i+1} - x_i = (i + 1) - i = 1$이므로 $\sum_{i=m}^{n} 1 = (n + 1) - m$을 얻습니다. 이것은 [[linearity-and-order-of-finite-sums|유한 합의 선형성과 부등식]]의 (2)를 $c = 1$에 쓴 $(n - m + 1) \cdot 1$과 같습니다.
:::
