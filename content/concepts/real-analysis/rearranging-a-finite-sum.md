---
title: 유한 합의 재배열
title_en: Rearranging a Finite Sum
aliases: [유한 합의 순서 바꾸기, 합의 재배열, 항의 순서 바꾸기, 합 뒤집기, rearrangement of a finite sum, reordering a finite sum, reversing a finite sum]
kind: theorem
field: real-analysis
msc: ["40A05"]
level: undergrad
summary: 실수의 유한 합은 항의 순서를 {1, …, n} 의 전단사로 바꾸어도 변하지 않는다. k 번째 항을 맨 뒤로 보내는 보조 사실, 항이 0 이상일 때 단사로 고른 항의 합은 전체 합 이하라는 부등식, 순서를 뒤집은 합(0부터의 합 포함)도 함께 진술한다.
requires: [natural-numbers-are-infinite, prime-number, well-ordering-principle, even-and-odd, mathematical-induction, function, injective-surjective-bijective, function-composition, composition-preserves-injectivity-and-surjectivity, recursion-theorem, finite-set, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, sequence, real-valued-function, series-and-partial-sums, finite-sum-of-reals, splitting-and-shifting-finite-sums, linearity-and-order-of-finite-sums, series-indexed-from-zero]
proof: full
sources:
  - ref: lebl-basic-analysis
    loc: 2.6.3절 Rearrangements, Proposition 2.6.3 의 증명 (p.102–103). 2.6.4절 Multiplication of series, Theorem 2.6.5 의 증명 (p.105)
    checked: original
    note: "출처는 유한 합의 재배열을 명제로 진술하지 않고 증명 안에서 근거를 따로 적지 않고 쓴다. Proposition 2.6.3 의 증명(p.103)은 재배열한 급수의 N 번째 부분합을 Σ_{n=1}^{M} x_n 과 σ(n) > M 인 항의 합 Σ_{n≤N, σ(n)>M} x_{σ(n)} 으로 나누어 쓰고(σ(n) ≤ M 인 항들이 x_1, …, x_M 을 재배열한 것이라는 데 기댄다), 뒤의 것의 절댓값의 합을 Σ_{n=M+1}^{Q} |x_n| (Q = max σ({1, …, N})) 이하로 누른다. 앞의 단계는 이 항목의 (2)가, 뒤의 단계는 (3)이 다루는 일이다. Theorem 2.6.5 의 증명(p.105)은 'We rearrange the mth partial sum' 이라 적고 이중 합의 순서를 바꾼다. 이 항목의 진술과 증명(한 자리를 빼는 함수, k 번째 항을 맨 뒤로 보내는 (1), 항의 개수에 대한 귀납)은 이 사이트가 썼고, 정수론 입문의 유한 곱의 재배열과 같은 방식이다. 출처에서 유한 합의 재배열을 명제로 진술한 곳을 찾은 검색어: 'rearrang'(책 전체 14건, 모두 급수의 재배열과 위의 증명), 'finite sum'(4건), 'reorder', 'permut', 'order of summ'(0건), 'commutativ'(1.2절의 체의 공리 3건). 2.6.6절 연습문제 2.6.1–2.6.15 와 2.5.7절 연습문제는 처음부터 읽었다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(리만 재배열의 재귀 상태와 단계 구성 대조). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
수열과 값으로 정한 수열은 [[sequence]]의 것이고, 유한 합 $\sum_{i=m}^{n}$, 빈 합, 범위에서만 정해진 항의 합은 [[finite-sum-of-reals]]의 것이며, 쪼개기와 첨자 옮기기는 [[splitting-and-shifting-finite-sums]], 범위에서만 정해진 항에 대한 규칙은 [[linearity-and-order-of-finite-sums]]의 (8)의 것이다. 0부터의 합 $\sum_{i=0}^{k}$와 그 범위에서만 정해진 항의 합은 [[series-indexed-from-zero]]의 것이다. 집합 $\{1, \dots, n\}$은 [[finite-set]]의 것이고, 단사·전사·전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]] 항목, 합성은 [[function-composition]]의 것이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)으로 다룬다.

**재배열한 항의 합.** $n$을 $0$ 이상인 정수, $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$을 함수, $(x_i)$를 수열이라 하자. $1 \le i \le n$인 정수 $i$마다 $\sigma(i)$는 자연수이므로 $x_{\sigma(i)}$는 $1 \le i \le n$에서 정해진 실수이고, $\sum_{i=1}^{n} x_{\sigma(i)}$는 이 범위에서만 정해진 항의 합이다. $n = 0$이면 $\{1, \dots, 0\}$은 공집합이고 이 합은 빈 합 $0$이다. 같은 방식으로, $0$ 이상인 정수 $N$, $Q$와 함수 $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$와 수열 $(y_i)$에 대하여 $\sum_{k=1}^{N} y_{\tau(k)}$는 $1 \le k \le N$에서 정해진 항 $y_{\tau(k)}$의 합이다.

다음이 성립한다. 아래에서 $(x_i)$, $(y_i)$, $(z_i)$는 수열이다.

1. ($k$번째 항을 맨 뒤로) $n$이 $0$ 이상인 정수이고 $k \in \{1, \dots, n+1\}$이라 하자. $1 \le i \le k - 1$인 모든 정수 $i$에서 $z_i = y_i$이고, $k \le i \le n$인 모든 정수 $i$에서 $z_i = y_{i+1}$이면
   $$
   \sum_{i=1}^{n+1} y_i = \sum_{i=1}^{n} z_i + y_k
   $$
   이다. 이런 수열 $(z_i)$는 언제나 있다. 예컨대 $i < k$이면 $y_i$, $k \le i$이면 $y_{i+1}$로 정한 수열이 그렇다.
2. (재배열) $n$이 $0$ 이상인 정수이고 $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$이 전단사이면
   $$
   \sum_{i=1}^{n} x_{\sigma(i)} = \sum_{i=1}^{n} x_i
   $$
   이다.
3. (단사로 고른 항의 합) $N$, $Q$가 $0$ 이상인 정수이고 $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$가 단사이며, $1 \le i \le Q$인 모든 정수 $i$에서 $0 \le y_i$이면
   $$
   \sum_{k=1}^{N} y_{\tau(k)} \le \sum_{i=1}^{Q} y_i
   $$
   이다.
4. (뒤집기)
   - (i) $m$, $n$이 $1 \le m$이고 $m - 1 \le n$인 정수이고, $m \le i \le n$인 정수 $i$마다 실수 $t_i$가 정해져 있다고 하자. $m \le i \le n$이면 $m \le m + n - i \le n$이므로 $t_{m+n-i}$는 $m \le i \le n$에서 정해진 실수이고
     $$
     \sum_{i=m}^{n} t_i = \sum_{i=m}^{n} t_{m+n-i}
     $$
     이다.
   - (ii) $k$가 $-1$ 이상인 정수이고, $0 \le i \le k$인 정수 $i$마다 실수 $c_i$가 정해져 있다고 하자. $0 \le i \le k$이면 $0 \le k - i \le k$이므로 $c_{k-i}$는 $0 \le i \le k$에서 정해진 실수이고
     $$
     \sum_{i=0}^{k} c_i = \sum_{i=0}^{k} c_{k-i}
     $$
     이다.
:::

:::english
Sequences and sequences defined by their values are as in the entry on sequences; finite sums $\sum_{i=m}^{n}$, the empty sum, and sums of terms defined only on a range are as in the entry on finite sums of reals; splitting and shifting are as in the entry on splitting and shifting finite sums, and the rules for terms defined only on a range are (8) of the entry on linearity and order of finite sums. Sums from zero $\sum_{i=0}^{k}$ and their version for terms defined only on a range are as in the entry on sums of sequences indexed from zero. The set $\{1, \dots, n\}$ is as in the entry on finite sets; injective, surjective, and bijective maps are as in the entry on those notions, and composition is as in the entry on composition. The order of the integers is handled by (Z1) of the entry on prime numbers and (Z5)–(Z8), (L1)–(L3) of the entry on the well-ordering principle.

**Sums of rearranged terms.** Let $n$ be an integer with $n \ge 0$, let $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$ be a function, and let $(x_i)$ be a sequence. For each integer $i$ with $1 \le i \le n$, $\sigma(i)$ is a natural number, so $x_{\sigma(i)}$ is a real number defined for $1 \le i \le n$, and $\sum_{i=1}^{n} x_{\sigma(i)}$ is the sum of these terms defined only on this range. If $n = 0$, then $\{1, \dots, 0\}$ is empty and this sum is the empty sum $0$. In the same way, for integers $N, Q \ge 0$, a function $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$, and a sequence $(y_i)$, $\sum_{k=1}^{N} y_{\tau(k)}$ is the sum of the terms $y_{\tau(k)}$ defined for $1 \le k \le N$.

The following hold. Below, $(x_i)$, $(y_i)$, $(z_i)$ are sequences.

1. (Moving the $k$-th term to the end) Let $n$ be an integer with $n \ge 0$ and let $k \in \{1, \dots, n+1\}$. If $z_i = y_i$ for every integer $i$ with $1 \le i \le k - 1$ and $z_i = y_{i+1}$ for every integer $i$ with $k \le i \le n$, then
   $$
   \sum_{i=1}^{n+1} y_i = \sum_{i=1}^{n} z_i + y_k .
   $$
   Such a sequence $(z_i)$ always exists; for example, the sequence defined by $y_i$ for $i < k$ and $y_{i+1}$ for $k \le i$.
2. (Rearrangement) If $n$ is an integer with $n \ge 0$ and $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$ is a bijection, then
   $$
   \sum_{i=1}^{n} x_{\sigma(i)} = \sum_{i=1}^{n} x_i .
   $$
3. (Sums of terms picked by an injection) If $N$ and $Q$ are integers with $N, Q \ge 0$, $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$ is injective, and $0 \le y_i$ for every integer $i$ with $1 \le i \le Q$, then
   $$
   \sum_{k=1}^{N} y_{\tau(k)} \le \sum_{i=1}^{Q} y_i .
   $$
4. (Reversal)
   - (i) Let $m$, $n$ be integers with $1 \le m$ and $m - 1 \le n$, and suppose a real number $t_i$ is given for each integer $i$ with $m \le i \le n$. If $m \le i \le n$, then $m \le m + n - i \le n$, so $t_{m+n-i}$ is a real number defined for $m \le i \le n$, and
     $$
     \sum_{i=m}^{n} t_i = \sum_{i=m}^{n} t_{m+n-i} .
     $$
   - (ii) Let $k$ be an integer with $k \ge -1$, and suppose a real number $c_i$ is given for each integer $i$ with $0 \le i \le k$. If $0 \le i \le k$, then $0 \le k - i \le k$, so $c_{k-i}$ is a real number defined for $0 \le i \le k$, and
     $$
     \sum_{i=0}^{k} c_i = \sum_{i=0}^{k} c_{k-i} .
     $$
:::

## 직관

종이에 적힌 수들을 계산기로 더할 때 어느 것부터 누르든 마지막 값은 같습니다. 그런데 [[finite-sum-of-reals|실수의 유한 합]]은 부분합, 곧 "앞에서부터 하나씩 더하는" 순서로 정의되어 있으므로, 순서를 바꿔도 같다는 것은 정의에서 바로 나오지 않고 증명해야 합니다. 이 항목이 그 증명입니다.

방법은 맨 뒤 자리 하나를 기준으로 삼는 것입니다. (1)은 $k$번째 항을 빼내 맨 뒤로 보내도 합이 같다는 것입니다. (2)의 증명은 순서를 바꾼 합에서 원래의 마지막 항 $x_{n+1}$이 놓인 자리를 찾아 (1)로 맨 뒤로 보내고, 나머지 $n$개는 항이 하나 적은 같은 문제로 돌립니다. (3)은 항이 모두 $0$ 이상일 때, 자리를 겹치지 않게 골라 더한 합이 모두 더한 합을 넘지 않는다는 것입니다. 고르지 않은 항은 $0$ 이상이므로 빠져도 합이 늘지 않기 때문입니다. 항에 음수가 있으면 이 부등식은 깨질 수 있습니다(아래 반례).

(4)는 (2)의 한 경우로, 항을 끝에서부터 거꾸로 더해도 합이 같다는 것입니다. 1부터의 합과 0부터의 합 둘 다로 적어 둡니다.

## 증명

:::idea
"한 자리를 빼는 함수" $r$로 $k$번째 자리를 건너뛰어 번호를 다시 붙인다. (1)은 쪼개기와 첨자 옮기기로 바로 나오고, (2)와 (3)은 $\sigma$나 $\tau$가 맨 끝 번호를 보내는 자리를 (1)로 떼어 내는 귀납법이다. (4)는 $i$를 $n + 1 - i$로 보내는 전단사에 (2)를 쓴 것이다.
:::

:::hint
(1)에서 경우를 나눌 필요는 없습니다. $\sum_{i=1}^{n+1} y_i$를 $\sum_{i=1}^{k-1}$, $y_k$, $\sum_{i=k+1}^{n+1}$의 세 토막으로 쪼개고, $k = 1$이나 $k = n + 1$이면 토막이 빈 합이 된다는 것을 보세요.
:::

:::hint
(2)의 귀납 단계에서는 $\sigma(k) = n + 1$인 $k$를 잡고, $i < k$이면 $\sigma(i)$, $k \le i \le n$이면 $\sigma(i + 1)$을 값으로 갖는 함수가 $\{1, \dots, n\}$의 전단사임을 먼저 보이세요. (3)은 $Q$에 대한 귀납법이고, $Q + 1$이 $\tau$의 값인지 아닌지로 나눕니다.
:::

:::proof
아래에서 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓰고, 정수 사이의 부등식은 [[order-properties-of-reals]]의 (10)에 의해 실수의 부등식으로 읽어도 된다. 함수를 경우를 나눈 식으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)을 쓰고, 경우가 정확히 하나로 갈린다는 것은 (Z5)로 본다. 범위에서만 정해진 항의 합은 그 항을 $0$으로 채운 수열의 합이므로([[finite-sum-of-reals]]의 범위에서만 정해진 항의 합의 약속), 범위 안의 항이 같은 두 합은 같다(그 약속과 [[finite-sum-of-reals]]의 (4)). 아래에서 이것을 "범위 안의 항이 같으므로"라고 짧게 쓴다.

**(가) 한 자리를 빼는 함수.** $N$을 자연수, $k \in \{1, \dots, N\}$이라 하고 $r : \{1, \dots, N-1\} \to \{1, \dots, N\}$을 $i < k$이면 $r(i) = i$, $k \le i$이면 $r(i) = i + 1$로 정한다. 다음을 보인다. ($N = 1$이면 $\{1, \dots, 0\}$은 공집합이고([[finite-set]]의 (F1)) $r$는 공집합인 함수이다.)

- (ㄱ) $r$의 값은 $\{1, \dots, N\}$에 있고 $k$가 아니다. $i \in \{1, \dots, N-1\}$이라 하자. $i < k$이면 $1 \le i < k \le N$이므로 (Z6)에 의해 $i \in \{1, \dots, N\}$이고, (Z5)에 의해 $i \ne k$이다. $k \le i$이면 (L3)과 (Z6)에 의해 $1 \le k < i + 1$이고, $i \le N - 1$에 (Z7)로 $1$을 더하면 $i + 1 \le N$이므로 $i + 1 \in \{1, \dots, N\}$이며, (Z5)에 의해 $i + 1 \ne k$이다.
- (ㄴ) $r$는 단사이다. $r(i) = r(i')$라 하자. 둘 다 $k$보다 작으면 $i = r(i) = r(i') = i'$이다. 둘 다 $k$ 이상이면 $i + 1 = i' + 1$이고 (Z7)에 의해 $i = i'$이다. $i < k \le i'$이면 $r(i) = i < k < i' + 1 = r(i')$이므로((Z6), (L3)) (Z5)에 의해 $r(i) \ne r(i')$이어서 이 경우는 일어나지 않는다. $i' < k \le i$인 경우도 $i$와 $i'$의 이름만 바꾼 같은 부등식 $r(i') = i' < k < i + 1 = r(i)$에 의해 일어나지 않는다.
- (ㄷ) $l \in \{1, \dots, N\}$이고 $l \ne k$이면 $r(i) = l$인 $i \in \{1, \dots, N-1\}$이 있다. (Z5)에 의해 $l < k$이거나 $k < l$이다. $l < k$이면 (Z1)과 (Z7)에 의해 $l \le k - 1 \le N - 1$이므로 $l \in \{1, \dots, N-1\}$이고 $r(l) = l$이다. $k < l$이면 (Z1)에 의해 $k + 1 \le l$이고 (Z7)에 의해 $k \le l - 1$이다. 또 $1 \le k$이고 $l \le N$에서 $l - 1 \le N - 1$이므로 $l - 1 \in \{1, \dots, N-1\}$이고, $k \le l - 1$이므로 $r(l - 1) = (l - 1) + 1 = l$이다.

이제 $B$를 집합, $\varphi : \{1, \dots, N\} \to B$를 단사, $b = \varphi(k)$라 하고 $\varphi' = \varphi \circ r : \{1, \dots, N-1\} \to B$로 두자([[function-composition]]). 그러면 다음이 성립한다.

- (ㄹ) $\varphi'$은 단사이고 그 값은 $b$가 아니다. 단사인 것은 (ㄴ)과 [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]의 1번에 의해서이다. $i \in \{1, \dots, N-1\}$이면 (ㄱ)에 의해 $r(i) \ne k$이고 $\varphi$가 단사이므로 $\varphi'(i) = \varphi(r(i)) \ne \varphi(k) = b$이다.
- (ㅁ) $\varphi : \{1, \dots, N\} \to B$가 전단사이면, $b$가 아닌 $B$의 모든 원소는 $\varphi'$의 값이다. $c \in B$이고 $c \ne b$라 하자. 전사이므로 $\varphi(l) = c$인 $l \in \{1, \dots, N\}$이 있고, $c \ne b = \varphi(k)$이므로 $l \ne k$이다. (ㄷ)에 의해 $r(i) = l$인 $i$가 있고 $\varphi'(i) = \varphi(l) = c$이다.

또 $\varphi'(i)$는 $i < k$이면 $\varphi(i)$이고, $k \le i \le N - 1$이면 $\varphi(i + 1)$이다.

**(1)의 증명.** $1 \le k \le n + 1$이므로 (Z7)에 의해 $0 \le k - 1 \le n$이다. [[splitting-and-shifting-finite-sums]]의 (1)을 $m = 1$과 가운데 번호 $k - 1$에 쓰고($0 \le k - 1 \le n + 1$), 다시 $m = k$와 가운데 번호 $k$에 쓰면($k - 1 \le k \le n + 1$)
$$
\begin{aligned}
\sum_{i=1}^{n+1} y_i &= \sum_{i=1}^{k-1} y_i + \sum_{i=k}^{n+1} y_i \\
&= \sum_{i=1}^{k-1} y_i + \Bigl( \sum_{i=k}^{k} y_i + \sum_{i=k+1}^{n+1} y_i \Bigr)
\end{aligned}
$$
이고, [[finite-sum-of-reals]]의 (2)에 의해 $\sum_{i=k}^{k} y_i = y_k$이다. 오른쪽의 세 토막을 차례로 바꾼다. 첫째, $1 \le i \le k - 1$에서 $z_i = y_i$이므로 [[finite-sum-of-reals]]의 (4)에 의해 $\sum_{i=1}^{k-1} y_i = \sum_{i=1}^{k-1} z_i$이다. 셋째, $k + 1 \le i \le n + 1$이면 $k \le i - 1 \le n$이므로 가정에 의해 $z_{i-1} = y_i$이다. [[splitting-and-shifting-finite-sums]]의 (2)를 시작 번호 $k + 1$, 끝 번호 $n + 1$, $r = -1$에 쓰면($1 \le (k + 1) - 1$이고 $k \le n + 1$이다) $\sum_{i=k+1}^{n+1} y_i = \sum_{j=k}^{n} z_j$이다. 한편 [[splitting-and-shifting-finite-sums]]의 (1)을 $m = 1$과 가운데 번호 $k - 1$에 쓰면($0 \le k - 1 \le n$) $\sum_{i=1}^{n} z_i = \sum_{i=1}^{k-1} z_i + \sum_{i=k}^{n} z_i$이다. 따라서 실수의 덧셈의 결합법칙과 교환법칙([[real-number-arithmetic]]의 (K1), (K2))에 의해
$$
\begin{aligned}
\sum_{i=1}^{n+1} y_i &= \sum_{i=1}^{k-1} z_i + y_k + \sum_{i=k}^{n} z_i \\
&= \sum_{i=1}^{n} z_i + y_k
\end{aligned}
$$
이다. $k = 1$이면 $\sum_{i=1}^{0}$이, $k = n + 1$이면 $\sum_{i=n+2}^{n+1}$과 $\sum_{i=n+1}^{n}$이 빈 합이 되지만, 위에서 쓴 쪼개기와 첨자 옮기기는 빈 합을 포함해 성립하므로 따로 다루지 않아도 된다. 말미의 수열은 각 자연수 $i$마다 (Z5)에 의해 $i < k$와 $k \le i$ 가운데 정확히 하나가 성립하므로 [[sequence]]의 (1)로 정해지고, $1 \le i \le k - 1$이면 $i < k$이므로 $y_i$, $k \le i \le n$이면 $y_{i+1}$이 그 값이어서 가정을 만족한다.

**(2)의 증명.** $0$ 이상인 정수 $n$에 대한 명제 $S_n$을 "모든 수열 $(x_i)$와 $\{1, \dots, n\}$에서 $\{1, \dots, n\}$으로의 모든 전단사 $\sigma$에 대하여 $\sum_{i=1}^{n} x_{\sigma(i)} = \sum_{i=1}^{n} x_i$이다"로 두고, 시작점이 $0$인 [[mathematical-induction|수학적 귀납법]]으로 증명한다.

*기초 단계.* $n = 0$이면 두 합은 모두 빈 합이므로([[finite-sum-of-reals]]의 (2)와 [[linearity-and-order-of-finite-sums]]의 (8)) 둘 다 $0$이다.

*귀납 단계.* $n \ge 0$에서 $S_n$이 참이라 하고, 수열 $(x_i)$와 $\{1, \dots, n+1\}$의 전단사 $\sigma$를 잡는다. $\sigma$가 전사이고 $n + 1 \in \{1, \dots, n+1\}$이므로 $\sigma(k) = n + 1$인 $k \in \{1, \dots, n+1\}$이 있다. (가)를 $N = n + 1$, 이 $k$, $B = \{1, \dots, n+1\}$, $\varphi = \sigma$, $b = n + 1$에 쓰고 $\tau = \sigma \circ r$로 둔다. (ㄹ)에 의해 $\tau$는 단사이고 그 값은 $n + 1$이 아니므로, [[finite-set]]의 (F1)에 의해 그 값은 $\{1, \dots, n\}$에 있다. 그래서 [[function]]의 진술에 의해 $\tau$를 $\{1, \dots, n\}$에서 $\{1, \dots, n\}$으로의 함수로 선언할 수 있다. (ㅁ)에 의해 $n + 1$이 아닌 $\{1, \dots, n+1\}$의 원소, 곧 (F1)에 의해 $\{1, \dots, n\}$의 모든 원소는 $\tau$의 값이므로 $\tau : \{1, \dots, n\} \to \{1, \dots, n\}$은 전사이다. 따라서 $\tau$는 전단사이다.

$(y_i)$를 $1 \le i \le n + 1$이면 $x_{\sigma(i)}$, 그 밖에는 $0$으로 정한 수열이라 하자([[real-valued-function]]의 (1)을 $\mathbb{N}$ 위에 쓴 것). 범위 안의 항이 같으므로 $\sum_{i=1}^{n+1} x_{\sigma(i)} = \sum_{i=1}^{n+1} y_i$이다. (1)을 $(y_i)$, $n$, $k$에 쓰고 $(z_i)$를 (1)의 말미의 수열로 두면 $\sum_{i=1}^{n+1} y_i = \sum_{i=1}^{n} z_i + y_k$이다. 여기서 $y_k = x_{\sigma(k)} = x_{n+1}$이다. $1 \le i \le n$이면 $z_i = x_{\tau(i)}$이다. $i < k$이면 $i \le n + 1$이어서 $z_i = y_i = x_{\sigma(i)} = x_{\tau(i)}$이고, $k \le i \le n$이면 $i + 1 \le n + 1$이어서 $z_i = y_{i+1} = x_{\sigma(i+1)} = x_{\tau(i)}$이기 때문이다. 범위 안의 항이 같으므로 $\sum_{i=1}^{n} z_i = \sum_{i=1}^{n} x_{\tau(i)}$이고, $S_n$에 의해 이것은 $\sum_{i=1}^{n} x_i$이다. 따라서 [[finite-sum-of-reals]]의 (3)에 의해
$$
\sum_{i=1}^{n+1} x_{\sigma(i)} = \sum_{i=1}^{n} x_i + x_{n+1} = \sum_{i=1}^{n+1} x_i
$$
이고 $S_{n+1}$이 참이다. 귀납법에 의해 $0$ 이상인 모든 정수 $n$에서 $S_n$이 참이다.

**(3)의 증명.** $0$ 이상인 정수 $Q$에 대한 명제 $T_Q$를 "$0$ 이상인 모든 정수 $N$, 모든 단사 $\tau : \{1, \dots, N\} \to \{1, \dots, Q\}$, $1 \le i \le Q$에서 $0 \le y_i$인 모든 수열 $(y_i)$에 대하여 $\sum_{k=1}^{N} y_{\tau(k)} \le \sum_{i=1}^{Q} y_i$이다"로 두고, 시작점이 $0$인 귀납법으로 증명한다.

*기초 단계.* $Q = 0$이면 (F1)에 의해 $\{1, \dots, 0\} = \emptyset$이다. $N \ge 1$이면 $1 \in \{1, \dots, N\}$이고 $\tau(1) \in \emptyset$이어야 하므로 그럴 수 없다. 따라서 (Z5)에 의해 $N < 1$이고, (Z1)에 의해 $N + 1 \le 1$, (Z7)에 의해 $N \le 0$이며, $0 \le N$과 (L2)에 의해 $N = 0$이다. 두 합은 빈 합이어서 $0 \le 0$이다.

*귀납 단계.* $Q \ge 0$에서 $T_Q$가 참이라 하고, $N \ge 0$, 단사 $\tau : \{1, \dots, N\} \to \{1, \dots, Q+1\}$, $1 \le i \le Q + 1$에서 $0 \le y_i$인 수열 $(y_i)$를 잡는다. $1 \le i \le Q$에서도 $0 \le y_i$이다.

- $Q + 1$이 $\tau$의 값이 아닌 경우. (F1)에 의해 $\tau$의 값은 모두 $\{1, \dots, Q\}$에 있으므로 $\tau$를 $\{1, \dots, N\}$에서 $\{1, \dots, Q\}$로의 단사로 선언할 수 있다([[function]]의 진술. 단사는 공역과 상관없다). $T_Q$에 의해 $\sum_{k=1}^{N} y_{\tau(k)} \le \sum_{i=1}^{Q} y_i$이다. $0 \le y_{Q+1}$이므로 [[order-properties-of-reals]]의 (2)의 (i)과 [[finite-sum-of-reals]]의 (3)에 의해 $\sum_{i=1}^{Q} y_i \le \sum_{i=1}^{Q} y_i + y_{Q+1} = \sum_{i=1}^{Q+1} y_i$이다. 두 부등식을 [[order-properties-of-reals]]의 (1)의 (v)로 잇는다.
- $\tau(k) = Q + 1$인 $k \in \{1, \dots, N\}$이 있는 경우. 이때 $N \ge 1$이다. (가)를 이 $N$, $k$, $B = \{1, \dots, Q+1\}$, $\varphi = \tau$, $b = Q + 1$에 쓰고 $\tau' = \tau \circ r$로 둔다. (ㄹ)에 의해 $\tau'$은 단사이고 그 값은 $Q + 1$이 아니므로, (F1)에 의해 $\tau'$은 $\{1, \dots, N-1\}$에서 $\{1, \dots, Q\}$로의 단사로 선언할 수 있다. $(w_i)$를 $1 \le i \le N$이면 $y_{\tau(i)}$, 그 밖에는 $0$으로 정한 수열이라 하자. 범위 안의 항이 같으므로 $\sum_{k=1}^{N} y_{\tau(k)} = \sum_{i=1}^{N} w_i$이다. (1)을 $(w_i)$, $n = N - 1$, $k$에 쓰고 $(v_i)$를 (1)의 말미의 수열로 두면 $\sum_{i=1}^{N} w_i = \sum_{i=1}^{N-1} v_i + w_k$이고 $w_k = y_{\tau(k)} = y_{Q+1}$이다. $1 \le i \le N - 1$이면 $v_i = y_{\tau'(i)}$이다. $i < k$이면 $v_i = w_i = y_{\tau(i)} = y_{\tau'(i)}$이고, $k \le i \le N - 1$이면 $v_i = w_{i+1} = y_{\tau(i+1)} = y_{\tau'(i)}$이기 때문이다. 범위 안의 항이 같으므로 $\sum_{i=1}^{N-1} v_i = \sum_{i=1}^{N-1} y_{\tau'(i)}$이고, $T_Q$에 의해 이것은 $\sum_{i=1}^{Q} y_i$ 이하이다. 따라서 [[order-properties-of-reals]]의 (2)의 (i)과 [[finite-sum-of-reals]]의 (3)에 의해
$$
\begin{aligned}
\sum_{k=1}^{N} y_{\tau(k)} &= \sum_{i=1}^{N-1} y_{\tau'(i)} + y_{Q+1} \\
&\le \sum_{i=1}^{Q} y_i + y_{Q+1} = \sum_{i=1}^{Q+1} y_i
\end{aligned}
$$
이다.

두 경우 모두 결론이 성립하므로 $T_{Q+1}$이 참이다. 귀납법에 의해 $0$ 이상인 모든 정수 $Q$에서 $T_Q$가 참이다.

**(4)의 증명.** (i) $m \le i \le n$이라 하자. $i \le n$의 양변에 (Z7)로 $m - i$를 더하면 $m \le m + n - i$이고, $m \le i$의 양변에 $n - i$를 더하면 $m + n - i \le n$이다. $l = n - m + 1$로 두면 $m - 1 \le n$에서 $0 \le l$이다. $\rho : \{1, \dots, l\} \to \{1, \dots, l\}$를 $\rho(j) = l + 1 - j$로 정한다. $1 \le j \le l$이면 (Z7)에 의해 $1 \le l + 1 - j \le l$이므로 값은 $\{1, \dots, l\}$에 있다. $\rho(j) = \rho(j')$이면 $l + 1 - j = l + 1 - j'$이고 (Z7)에 의해 $j = j'$이므로 $\rho$는 단사이다. $j' \in \{1, \dots, l\}$이면 $j = l + 1 - j' \in \{1, \dots, l\}$이고 $\rho(j) = j'$이므로 $\rho$는 전사이다. 따라서 $\rho$는 전단사이다.

$1 \le j \le l$에서 $u_j = t_{j+m-1}$로 두면 $m \le j + m - 1 \le n$이므로 이것은 정해진 실수이다. [[splitting-and-shifting-finite-sums]]의 (2)의 말미($r = 1 - m$)를 $t_i$와 $t_{m+n-i}$에 각각 쓰면
$$
\begin{gathered}
\sum_{i=m}^{n} t_i = \sum_{j=1}^{l} u_j, \\
\sum_{i=m}^{n} t_{m+n-i} = \sum_{j=1}^{l} t_{m+n-(j+m-1)}
\end{gathered}
$$
이다. $1 \le j \le l$에서 $m + n - (j + m - 1) = n + 1 - j = (l + 1 - j) + m - 1 = \rho(j) + m - 1$이므로 $t_{m+n-(j+m-1)} = u_{\rho(j)}$이다. $(w_j)$를 $1 \le j \le l$이면 $u_j$, 그 밖에는 $0$으로 정한 수열이라 하면, $1 \le j \le l$에서 $\rho(j) \in \{1, \dots, l\}$이므로 $w_{\rho(j)} = u_{\rho(j)}$이다. 범위 안의 항이 같으므로, 그리고 (2)를 $(w_j)$와 $\rho$에 써서
$$
\begin{aligned}
\sum_{j=1}^{l} u_{\rho(j)} &= \sum_{j=1}^{l} w_{\rho(j)} \\
&= \sum_{j=1}^{l} w_j = \sum_{j=1}^{l} u_j
\end{aligned}
$$
이다. 세 식을 이으면 $\sum_{i=m}^{n} t_i = \sum_{i=m}^{n} t_{m+n-i}$이다.

(ii) $0 \le i \le k$이면 (Z7)에 의해 $0 \le k - i \le k$이다. [[series-indexed-from-zero]]의 범위에서만 정해진 항의 합의 정의에 의해 $\sum_{i=0}^{k} c_i = \sum_{j=1}^{k+1} c_{j-1}$이고, $0 \le i \le k$에서 정해진 항 $c_{k-i}$의 합은 $\sum_{i=0}^{k} c_{k-i} = \sum_{j=1}^{k+1} c_{k-(j-1)}$이다. $1 \le j \le k + 1$에서 $t_j = c_{j-1}$로 두고 (i)을 $m = 1$, $n = k + 1$에 쓰면($0 \le k + 1$) $\sum_{j=1}^{k+1} t_j = \sum_{j=1}^{k+1} t_{k+2-j}$이고, $t_{k+2-j} = c_{k+1-j} = c_{k-(j-1)}$이다. 따라서 $\sum_{i=0}^{k} c_i = \sum_{i=0}^{k} c_{k-i}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[세 항의 합의 순서 바꾸기]
$x_1 = 3$, $x_2 = -1$, $x_3 = 4$이고 $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$이라 합시다. $\sigma$는 $\{1, 2, 3\}$의 세 원소를 서로 다른 세 원소로 보내므로 전단사입니다. 재배열한 항은 $x_{\sigma(1)} = -1$, $x_{\sigma(2)} = 4$, $x_{\sigma(3)} = 3$이고, 부분합대로 더하면 $-1 + 4 = 3$, $3 + 3 = 6$입니다. 원래 순서로는 $3 + (-1) = 2$, $2 + 4 = 6$으로 (2)대로 같습니다. 첫째와 둘째 부분합은 재배열한 쪽이 $-1$, $3$이고 원래 쪽이 $3$, $2$로 다르며, 세 항을 모두 더한 합만 같습니다.
:::

:::example[(1)의 수열 만들기]
$n = 3$, $k = 2$이고 $y_1 = 5$, $y_2 = -2$, $y_3 = 7$, $y_4 = 1$이면 (1)의 말미의 수열은 $z_1 = y_1 = 5$, $z_2 = y_3 = 7$, $z_3 = y_4 = 1$입니다. $\sum_{i=1}^{3} z_i + y_2 = 13 + (-2) = 11$이고, $\sum_{i=1}^{4} y_i = 5 - 2 + 7 + 1 = 11$로 같습니다.
:::

:::counterexample[음의 항이 있을 때 (3)의 부등식이 깨지는 예]
$Q = 2$, $y_1 = 1$, $y_2 = -1$이고 $N = 1$, $\tau(1) = 1$이라 합시다. $\tau : \{1\} \to \{1, 2\}$는 단사입니다. 그러나 $\sum_{k=1}^{1} y_{\tau(k)} = y_1 = 1$이고 $\sum_{i=1}^{2} y_i = 0$이어서 $1 \le 0$이 거짓입니다. 고르지 않은 항 $y_2$가 음수이므로, 빠지면 합이 오히려 커집니다.
:::

:::counterexample[단사가 아닐 때 (3)의 부등식이 깨지는 예]
$Q = 2$, $y_1 = 1$, $y_2 = 0$이고 $N = 2$, $\tau(1) = \tau(2) = 1$이라 합시다. 항은 모두 $0$ 이상이지만 $\tau$는 단사가 아닙니다. $\sum_{k=1}^{2} y_{\tau(k)} = 1 + 1 = 2$이고 $\sum_{i=1}^{2} y_i = 1$이어서 $2 \le 1$이 거짓입니다. 같은 항을 두 번 더했기 때문입니다.
:::

## 확인 질문

:::check[$\tau(1) = 3$, $\tau(2) = 1$로 정한 $\tau : \{1, 2\} \to \{1, 2, 3\}$과 $y_1 = 2$, $y_2 = 5$, $y_3 = 1$에 대하여 (3)의 양변을 구하라. 두 변의 차는 어느 항인가?]
$\tau$는 $\tau(1) \ne \tau(2)$이므로 단사이고 항은 모두 $0$ 이상입니다. 왼변은 $y_{\tau(1)} + y_{\tau(2)} = y_3 + y_1 = 1 + 2 = 3$이고 오른변은 $2 + 5 + 1 = 8$입니다. 차 $8 - 3 = 5$는 $\tau$의 값이 아닌 번호 $2$의 항 $y_2$입니다.
:::

:::check[$k = 2$이고 $c_i = 3^i$ ($0 \le i \le 2$)일 때 (4)의 (ii)의 두 합을 구하라.]
$c_0 = 3^0 = 1$, $c_1 = 3$, $c_2 = 9$입니다([[power-of-a-real-number|실수의 거듭제곱]]). [[series-indexed-from-zero]]의 (1)과 (2)를 거듭 쓰면 왼변은 $(1 + 3) + 9 = 13$이고, 같은 항목의 (4)(범위에서만 정해진 항)와 (1), (2)에 의해 오른변은 $c_{2-0} = 9$, $c_{2-1} = 3$, $c_{2-2} = 1$을 차례로 더한 $(9 + 3) + 1 = 13$입니다.
:::
