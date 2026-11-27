---
title: 유한 합의 재배열과 이중 합
title_en: Rearranging Finite Sums and Double Sums
aliases: [합의 재배열, 합 뒤집기, 이중 합의 순서 바꾸기, 삼각형 이중 합, 두 합의 곱, rearrangement of a finite sum, reversing a finite sum, interchange of double sums, triangular double sum, product of two sums]
kind: theorem
field: ring-theory
msc: ["13", "20K99"]
level: undergrad
summary: 덧셈 표기로 쓰는 아벨군에서 항의 순서를 바꾸어도 유한 합이 같다는 것, 합을 뒤집기, 직사각형과 삼각형 모양의 이중 합의 순서 바꾸기, 그리고 환에서 두 유한 합의 곱을 이중 합으로 펼치는 것을 보인다.
requires: [function, injective-surjective-bijective, function-composition, composition-preserves-injectivity-and-surjectivity, finite-set, mathematical-induction, prime-number, well-ordering-principle, even-and-odd, group, ring, ring-examples, finite-product-in-a-group, finite-sums-in-a-ring]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "17.1절 Polynomial Rings, Theorem 17.3 의 증명 (p.211)과 Theorem 17.5 의 증명 (p.212)"
    checked: original
    note: "출처는 Theorem 17.3(R[x] 는 단위원을 갖는 가환환)의 증명(p.211)에서 세 다항식의 곱의 계수를 Σ_{j=0}^i (Σ_{k=0}^j a_k b_{j−k}) c_{i−j} 에서 Σ_{j+k+l=i} a_j b_k c_l 을 거쳐 Σ_{j=0}^i a_j (Σ_{k=0}^{i−j} b_k c_{i−j−k}) 로 바꾸어 쓰고, Theorem 17.5 의 증명(p.212)에서 (Σ a_i α^i)(Σ b_i α^i) 를 Σ_{i=0}^{m+n} (Σ_{k=0}^i a_k b_{i−k}) α^i 로 바꾸어 쓴다. 두 곳 모두 합의 재배열과 이중 합의 순서 바꾸기를 이름 없이 쓴다. 출처에서 이런 성질을 진술한 명제를 찾지 못했다(검색어 'rearrang' 6건은 소인수의 순서(p.22), 도형의 대칭(p.31), 18장과 23장의 증명 안에서 원소의 번호를 바꾸는 것, 'interchang' 과 'order of summation' 과 'double sum' 은 합에 관해 0건). 이 항목의 진술과 증명은 이 사이트가 썼다. (5)의 (ii)는 출처 p.211 의 계산에서 가운데의 Σ_{j+k+l=i} 를 거치지 않고 바로 바꾸는 꼴이다. 증명의 본보기는 정수론 입문의 rearranging-a-finite-product 와 해석학 쪽의 rearranging-a-finite-sum 이다."
status: reviewed
review_note: "2026-11-27 자기 검토(docs/self-review.md)와 지휘자의 확인(이항계수 (5)(6) 과 표수 (3) 에 경계값, 2·7단원 경로 대조). 독립 검토는 거치지 않았다."
added: 2026-11-27
---

:::statement
$A$는 덧셈 표기로 쓰는 [[group|아벨군]]이고, 열의 합 $a_1 + \cdots + a_n$, 합의 기호 $\sum_{k=m}^{n}$, 빈 합은 [[finite-sums-in-a-ring|환의 유한 합]]의 것이다. $\{1, \dots, n\}$은 [[finite-set|유한집합]]의 것이고, 단사·전사·전단사는 [[injective-surjective-bijective|단사, 전사, 전단사]] 항목의 것이다. 열 $a_1, \dots, a_n$과 함수 $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$에 대하여 $\sum_{k=1}^{n} a_{\sigma(k)}$는 $1 \le k \le n$에서 정해진 항 $a_{\sigma(k)}$의 합이다. 다음이 성립한다.

1. ($k$번째 항을 맨 뒤로) $n$이 $0$ 이상인 정수이고 $b_1, \dots, b_{n+1}$이 $A$의 원소의 열이며 $k \in \{1, \dots, n+1\}$이라 하자. 길이 $n$인 열 $c_1, \dots, c_n$을 $j < k$이면 $c_j = b_j$, $k \le j \le n$이면 $c_j = b_{j+1}$로 정하면
   $$
   \begin{aligned}
   &b_1 + \cdots + b_{n+1} \\
   &\quad = (c_1 + \cdots + c_n) + b_k
   \end{aligned}
   $$
   이다.
2. (재배열) $n$이 $0$ 이상인 정수이고 $a_1, \dots, a_n$이 $A$의 원소의 열이며 $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$이 전단사이면
   $$
   \sum_{k=1}^{n} a_{\sigma(k)} = \sum_{k=1}^{n} a_k
   $$
   이다.
3. (뒤집기) $m$, $n$이 $m - 1 \le n$인 정수이고 $m \le k \le n$인 정수 $k$마다 $a_k \in A$가 정해져 있으면, $m \le k \le n$일 때 $m \le m + n - k \le n$이고
   $$
   \sum_{k=m}^{n} a_k = \sum_{k=m}^{n} a_{m+n-k}
   $$
   이다.
4. (직사각형 이중 합) $m - 1 \le n$, $p - 1 \le q$인 정수 $m$, $n$, $p$, $q$와, $m \le j \le n$이고 $p \le k \le q$인 정수의 쌍 $(j, k)$마다 정해진 $t_{j,k} \in A$에 대하여
   $$
   \sum_{j=m}^{n} \sum_{k=p}^{q} t_{j,k} = \sum_{k=p}^{q} \sum_{j=m}^{n} t_{j,k}
   $$
   이다. 왼쪽은 $j$번째 항이 $\sum_{k=p}^{q} t_{j,k}$인 합이고, 오른쪽은 $k$번째 항이 $\sum_{j=m}^{n} t_{j,k}$인 합이다.
5. (삼각형 이중 합) $n$이 $-1$ 이상인 정수라 하자.
   - (i) $0 \le j \le k \le n$인 정수의 쌍 $(j, k)$마다 $t_{j,k} \in A$가 정해져 있으면
     $$
     \sum_{k=0}^{n} \sum_{j=0}^{k} t_{j,k} = \sum_{j=0}^{n} \sum_{k=j}^{n} t_{j,k}
     $$
     이다.
   - (ii) $0 \le j$, $0 \le k$, $j + k \le n$인 정수의 쌍 $(j, k)$마다 $u_{j,k} \in A$가 정해져 있으면
     $$
     \sum_{l=0}^{n} \sum_{j=0}^{l} u_{j,\,l-j} = \sum_{j=0}^{n} \sum_{k=0}^{n-j} u_{j,k}
     $$
     이다.
6. (두 합의 곱) $R$이 [[ring|환]]이고, $m - 1 \le n$, $p - 1 \le q$인 정수와, $m \le j \le n$에서 정해진 $a_j \in R$, $p \le k \le q$에서 정해진 $b_k \in R$에 대하여
   $$
   \Bigl(\sum_{j=m}^{n} a_j\Bigr)\Bigl(\sum_{k=p}^{q} b_k\Bigr) = \sum_{j=m}^{n} \sum_{k=p}^{q} a_j b_k
   $$
   이다. 왼쪽의 곱과 오른쪽의 $a_j b_k$는 환 $R$의 곱이다.
:::

:::english
$A$ is an abelian group written additively, and sums of sequences $a_1 + \cdots + a_n$, the summation notation $\sum_{k=m}^{n}$ and the empty sum are those of the entry on finite sums in a ring. The set $\{1, \dots, n\}$ is that of the entry on finite sets, and injective, surjective and bijective maps are as in the entry on them. For a sequence $a_1, \dots, a_n$ and a function $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$, $\sum_{k=1}^{n} a_{\sigma(k)}$ is the sum of the terms $a_{\sigma(k)}$ given for $1 \le k \le n$. The following hold.

1. (Moving the $k$th term to the end) Let $n$ be an integer $\ge 0$, let $b_1, \dots, b_{n+1}$ be a sequence of elements of $A$, and let $k \in \{1, \dots, n+1\}$. If the sequence $c_1, \dots, c_n$ of length $n$ is defined by $c_j = b_j$ for $j < k$ and $c_j = b_{j+1}$ for $k \le j \le n$, then
   $$
   \begin{aligned}
   &b_1 + \cdots + b_{n+1} \\
   &\quad = (c_1 + \cdots + c_n) + b_k.
   \end{aligned}
   $$
2. (Rearrangement) If $n$ is an integer $\ge 0$, $a_1, \dots, a_n$ is a sequence of elements of $A$ and $\sigma : \{1, \dots, n\} \to \{1, \dots, n\}$ is a bijection, then
   $$
   \sum_{k=1}^{n} a_{\sigma(k)} = \sum_{k=1}^{n} a_k.
   $$
3. (Reversal) If $m$, $n$ are integers with $m - 1 \le n$ and $a_k \in A$ is given for each integer $m \le k \le n$, then $m \le m + n - k \le n$ whenever $m \le k \le n$, and
   $$
   \sum_{k=m}^{n} a_k = \sum_{k=m}^{n} a_{m+n-k}.
   $$
4. (Rectangular double sums) For integers $m$, $n$, $p$, $q$ with $m - 1 \le n$ and $p - 1 \le q$, and elements $t_{j,k} \in A$ given for each pair of integers $(j, k)$ with $m \le j \le n$ and $p \le k \le q$,
   $$
   \sum_{j=m}^{n} \sum_{k=p}^{q} t_{j,k} = \sum_{k=p}^{q} \sum_{j=m}^{n} t_{j,k}.
   $$
   The left side is the sum whose $j$th term is $\sum_{k=p}^{q} t_{j,k}$, and the right side is the sum whose $k$th term is $\sum_{j=m}^{n} t_{j,k}$.
5. (Triangular double sums) Let $n$ be an integer $\ge -1$.
   - (i) If $t_{j,k} \in A$ is given for each pair of integers $(j, k)$ with $0 \le j \le k \le n$, then
     $$
     \sum_{k=0}^{n} \sum_{j=0}^{k} t_{j,k} = \sum_{j=0}^{n} \sum_{k=j}^{n} t_{j,k}.
     $$
   - (ii) If $u_{j,k} \in A$ is given for each pair of integers $(j, k)$ with $0 \le j$, $0 \le k$ and $j + k \le n$, then
     $$
     \sum_{l=0}^{n} \sum_{j=0}^{l} u_{j,\,l-j} = \sum_{j=0}^{n} \sum_{k=0}^{n-j} u_{j,k}.
     $$
6. (Product of two sums) If $R$ is a ring, then for integers with $m - 1 \le n$ and $p - 1 \le q$, elements $a_j \in R$ given for $m \le j \le n$ and $b_k \in R$ given for $p \le k \le q$,
   $$
   \Bigl(\sum_{j=m}^{n} a_j\Bigr)\Bigl(\sum_{k=p}^{q} b_k\Bigr) = \sum_{j=m}^{n} \sum_{k=p}^{q} a_j b_k,
   $$
   where the product on the left and $a_j b_k$ on the right are products in the ring $R$.
:::

## 직관

덧셈이 교환되므로 두 항의 순서는 바꿀 수 있습니다. (2)는 이것을 항이 몇 개이든 순서를 어떻게 섞든 되풀이할 수 있다는 말입니다. 카드 더미의 숫자를 모두 더할 때 카드를 어떤 순서로 집어 들어도 합계가 같은 것과 같습니다. 비유가 맞는 곳은 "어떤 카드도 빠지거나 두 번 세지 않는다"는 점이고, 이것이 $\sigma$가 전단사라는 조건입니다. 전단사가 아니면 같은 카드를 두 번 세거나 한 장을 빠뜨리게 됩니다.

이중 합은 표의 칸을 모두 더하는 것입니다. 직사각형 표는 행마다 더해 합쳐도, 열마다 더해 합쳐도 같습니다((4)). 칸이 $j \le k$인 곳에만 있는 삼각형 표에서는 순서를 바꿀 때 안쪽 합의 범위가 함께 바뀝니다. $k$열에는 $j = 0$부터 $k$까지의 칸이 있고, $j$행에는 $k = j$부터 $n$까지의 칸이 있습니다((5)의 (i)). (5)의 (ii)는 같은 표를 "$j + k$가 같은 칸끼리" 묶은 것으로, 두 합의 곱을 차수별로 다시 묶을 때 쓰는 꼴입니다.

## 증명

:::idea
(1)은 합을 $k$번째 항의 앞뒤에서 쪼개고 아벨군의 교환법칙을 쓰는 것이다. (2)는 길이에 대한 귀납법으로, 맨 뒤로 가야 할 항을 (1)로 떼어 낸다. (3)–(5)는 (2)와 끝항 떼기의 귀납법이고, (6)은 분배를 두 번 쓴 것이다.
:::

:::hint
(2)의 귀납 단계에서 $\sigma(k) = n + 1$인 $k$를 찾고, 나머지 항의 번호를 $\{1, \dots, n\}$의 전단사로 다시 매긴다.
:::

:::hint
(5)의 (i)은 $n$에 대한 귀납법이다. 끝 번호를 $n + 1$로 늘리면 왼쪽에는 $k = n + 1$인 열 하나가, 오른쪽에는 각 행의 끝 칸과 $j = n + 1$인 행 하나가 더해진다.
:::

:::proof
**쓰는 사실.** "합의 (n)"은 [[finite-sums-in-a-ring|환의 유한 합]]의 (n)이다. 귀납법은 [[mathematical-induction|수학적 귀납법]](시작점이 정수인 꼴)이다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)을 쓰고, 정수끼리의 계산은 그 진술에서 받아들인 계산 법칙, 정수끼리의 합과 차가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실이다. 아벨군의 계산은 [[group|군]]의 결합법칙, 항등원, 역원과 교환법칙을 쓴다.

**1의 증명.** 합의 (1)에 의해 $b_1 + \cdots + b_{n+1} = \sum_{j=1}^{n+1} b_j$이고 $c_1 + \cdots + c_n = \sum_{j=1}^{n} c_j$이다. $1 \le k \le n + 1$이므로 $0 \le k - 1 \le n$이다. 합의 (4)를 $l = k - 1$에서 쓰고 합의 (2)의 둘째 등식을 $\sum_{j=k}^{n+1} b_j$에 쓰면($k \le n + 1$)
$$
\sum_{j=1}^{n+1} b_j = \sum_{j=1}^{k-1} b_j + \Bigl(b_k + \sum_{j=k+1}^{n+1} b_j\Bigr)
$$
이다. 한편 합의 (4)를 $l = k - 1$에서 쓰면 $\sum_{j=1}^{n} c_j = \sum_{j=1}^{k-1} c_j + \sum_{j=k}^{n} c_j$이다. $1 \le j \le k - 1$이면 $c_j = b_j$이므로 합의 (3)에 의해 첫째 합은 $\sum_{j=1}^{k-1} b_j$이다. $k \le j \le n$이면 $c_j = b_{j+1}$이므로 합의 (3)과, 합의 (5)를 $t = 1$에서 쓴 것에 의해 둘째 합은 $\sum_{j=k}^{n} b_{j+1} = \sum_{j=k+1}^{n+1} b_{(j-1)+1} = \sum_{j=k+1}^{n+1} b_j$이다. 따라서 아벨군의 결합법칙과 교환법칙에 의해
$$
\begin{aligned}
\sum_{j=1}^{n+1} b_j &= \Bigl(\sum_{j=1}^{k-1} b_j + \sum_{j=k+1}^{n+1} b_j\Bigr) + b_k \\
&= \sum_{j=1}^{n} c_j + b_k
\end{aligned}
$$
이다.

**2의 증명.** $0$ 이상인 정수 $n$에 대한 명제 $S_n$을 "길이 $n$인 $A$의 원소의 모든 열 $a$와 $\{1, \dots, n\}$의 모든 전단사 $\sigma$에 대하여 $\sum_{k=1}^{n} a_{\sigma(k)} = \sum_{k=1}^{n} a_k$이다"로 두고 시작점이 $0$인 귀납법을 쓴다.

*기초 단계.* $n = 0$이면 양쪽이 모두 빈 합 $0$이다.

*귀납 단계.* $S_n$이 참이라 하고, 길이 $n + 1$인 열 $a$와 $\{1, \dots, n+1\}$의 전단사 $\sigma$를 잡는다. $\sigma$가 전사이므로 $\sigma(k) = n + 1$인 $k \in \{1, \dots, n+1\}$이 있다.

먼저 $\tau : \{1, \dots, n\} \to \{1, \dots, n\}$을 $j < k$이면 $\tau(j) = \sigma(j)$, $k \le j \le n$이면 $\tau(j) = \sigma(j + 1)$로 정하고 이것이 전단사임을 보인다. 함수 $r$을 $j \in \{1, \dots, n\}$에서 $j < k$이면 $r(j) = j$, $k \le j$이면 $r(j) = j + 1$로 정한다((Z5)에 의해 두 경우 가운데 정확히 하나이다). $j < k$이면 $1 \le j < k \le n + 1$이고, $k \le j$이면 $1 \le j + 1 \le n + 1$이므로((L3), (Z6), (Z7)) $r$의 값은 $\{1, \dots, n+1\}$에 있다. $j < k$이면 $r(j) = j \ne k$이고, $k \le j$이면 $r(j) = j + 1 > k$이므로((L3), (Z6)) 언제나 $r(j) \ne k$이다. $r$은 단사이다. 두 값이 같을 때 둘 다 $k$보다 작은 경우와 둘 다 $k$ 이상인 경우는 (Z7)로 $j = j'$이고, $j < k \le j'$이면 $r(j) = j < k < j' + 1 = r(j')$이고, $j' < k \le j$이면 $r(j') = j' < k < j + 1 = r(j)$이어서 두 경우 모두 값이 다르다. $\sigma$가 단사이고 $r(j) \ne k$이므로 $\sigma(r(j)) \ne \sigma(k) = n + 1$이고, [[finite-set|유한집합]]의 (F1)에 의해 $\sigma(r(j)) \in \{1, \dots, n\}$이다. 따라서 $\tau = \sigma \circ r$은 $\{1, \dots, n\}$에서 $\{1, \dots, n\}$으로의 함수이고, [[composition-preserves-injectivity-and-surjectivity|합성에 관한 정리]]에 의해 단사인 함수의 [[function-composition|합성]]이므로 단사이다. $\tau$는 전사이다. $i \in \{1, \dots, n\}$이면 $\sigma(l) = i$인 $l \in \{1, \dots, n+1\}$이 있고, $i \ne n + 1$이므로 $l \ne k$이다. $l < k$이면 (Z1)과 (Z7)에 의해 $l \le n$이고 $\tau(l) = \sigma(l) = i$이다. $l > k$이면 (Z1)에 의해 $k \le l - 1 \le n$이고 $\tau(l - 1) = \sigma(l) = i$이다.

이제 $b_j = a_{\sigma(j)}$로 두고 (1)을 쓰면, $c_j = b_j$ ($j < k$), $c_j = b_{j+1}$ ($k \le j \le n$)인 열 $c$에 대하여 $\sum_{j=1}^{n+1} b_j = \sum_{j=1}^{n} c_j + b_k$이다. $b_k = a_{n+1}$이고, $j < k$이면 $c_j = a_{\sigma(j)} = a_{\tau(j)}$, $k \le j \le n$이면 $c_j = a_{\sigma(j+1)} = a_{\tau(j)}$이다. $a$의 처음 $n$개의 열에 $S_n$을 $\tau$와 함께 쓰면 $\sum_{j=1}^{n} c_j = \sum_{j=1}^{n} a_j$이다. 따라서 합의 (2)에 의해 $\sum_{j=1}^{n+1} a_{\sigma(j)} = \sum_{j=1}^{n} a_j + a_{n+1} = \sum_{j=1}^{n+1} a_j$이다. 귀납법에 의해 모든 $n \ge 0$에서 $S_n$이 참이다.

**3의 증명.** $m \le k \le n$이면 (Z7)에 의해 $m \le m + n - k \le n$이다. $N = n - m + 1$이라 하고, 왼쪽 합의 열을 $c$($c_j = a_{m+j-1}$, $1 \le j \le N$)라 하자. 오른쪽 합의 열의 $j$번째 항은 $a_{m+n-(m+j-1)} = a_{n+1-j}$이고, $\sigma(j) = N + 1 - j$로 두면 $c_{\sigma(j)} = a_{m+(N+1-j)-1} = a_{n+1-j}$이다. $1 \le j \le N$이면 $1 \le N + 1 - j \le N$이므로 $\sigma$는 $\{1, \dots, N\}$에서 $\{1, \dots, N\}$으로의 함수이고, $\sigma(\sigma(j)) = j$이다. 따라서 $\sigma(j) = \sigma(j')$이면 $j = \sigma(\sigma(j)) = \sigma(\sigma(j')) = j'$이어서 단사이고, 각 $i$는 $\sigma(\sigma(i))$이므로 전사이다. 합의 (1)과 (2)에 의해 오른쪽은 $\sum_{j=1}^{N} c_{\sigma(j)} = \sum_{j=1}^{N} c_j$, 곧 왼쪽과 같다.

**4의 증명.** 끝 번호 $n$에 대하여 시작점이 $m - 1$인 귀납법을 쓴다. $n = m - 1$이면 왼쪽은 빈 합 $0$이다. 오른쪽의 각 항 $\sum_{j=m}^{m-1} t_{j,k}$는 빈 합 $0$이므로 합의 (3)과 (6)의 (iv)에 의해 오른쪽도 $0$이다. $n$에서 성립하고 $t_{j,k}$가 $m \le j \le n + 1$에서 정해졌다고 하자. 합의 (2), 귀납 가정, 합의 (6)의 (i), 다시 합의 (2)와 (3)에 의해
$$
\begin{aligned}
&\sum_{j=m}^{n+1} \sum_{k=p}^{q} t_{j,k} \\
&\quad = \sum_{j=m}^{n} \sum_{k=p}^{q} t_{j,k} + \sum_{k=p}^{q} t_{n+1,k} \\
&\quad = \sum_{k=p}^{q} \sum_{j=m}^{n} t_{j,k} + \sum_{k=p}^{q} t_{n+1,k} \\
&\quad = \sum_{k=p}^{q} \Bigl(\sum_{j=m}^{n} t_{j,k} + t_{n+1,k}\Bigr) \\
&\quad = \sum_{k=p}^{q} \sum_{j=m}^{n+1} t_{j,k}
\end{aligned}
$$
이다.

**5의 (i)의 증명.** $n$에 대하여 시작점이 $-1$인 귀납법을 쓴다. $n = -1$이면 양쪽 모두 빈 합 $0$이다. $n$에서 성립하고 $t_{j,k}$가 $0 \le j \le k \le n + 1$에서 정해졌다고 하자. 왼쪽에 합의 (2)를 쓰고, 귀납 가정을 $k \le n$인 항들에 쓰면 왼쪽은
$$
\sum_{j=0}^{n} \sum_{k=j}^{n} t_{j,k} + \sum_{j=0}^{n+1} t_{j,n+1}
$$
이다. 합의 (2)에 의해 $\sum_{j=0}^{n+1} t_{j,n+1} = \sum_{j=0}^{n} t_{j,n+1} + t_{n+1,n+1}$이다. 아벨군의 결합법칙과 합의 (6)의 (i)로 앞의 두 합을 묶으면 $\sum_{j=0}^{n} \bigl(\sum_{k=j}^{n} t_{j,k} + t_{j,n+1}\bigr)$이고, $0 \le j \le n$이면 $j - 1 \le n$이므로 합의 (2)와 (3)에 의해 이것은 $\sum_{j=0}^{n} \sum_{k=j}^{n+1} t_{j,k}$이다. 또 합의 (1)에 의해 $t_{n+1,n+1} = \sum_{k=n+1}^{n+1} t_{n+1,k}$이다. 따라서 합의 (2)에 의해 왼쪽은 $\sum_{j=0}^{n+1} \sum_{k=j}^{n+1} t_{j,k}$이다.

**5의 (ii)의 증명.** $0 \le j \le l \le n$이면 $0 \le l - j$이고 $j + (l - j) = l \le n$이므로 $t_{j,l} = u_{j,\,l-j}$가 정해진다. (i)을 이 $t$에 쓰면(첨자 $k$ 대신 $l$)
$$
\sum_{l=0}^{n} \sum_{j=0}^{l} u_{j,\,l-j} = \sum_{j=0}^{n} \sum_{l=j}^{n} u_{j,\,l-j}
$$
이다. $0 \le j \le n$일 때 안쪽 합에 합의 (5)를 $t = -j$에서 쓰면 $\sum_{l=j}^{n} u_{j,\,l-j} = \sum_{k=0}^{n-j} u_{j,\,(k+j)-j} = \sum_{k=0}^{n-j} u_{j,k}$이고, 합의 (3)에 의해 바깥 합도 같다.

**6의 증명.** 합의 (9)의 둘째 등식($c = \sum_{k=p}^{q} b_k$를 오른쪽에 곱하기)에 의해 왼쪽은 $\sum_{j=m}^{n} a_j \bigl(\sum_{k=p}^{q} b_k\bigr)$이고, 각 $j$에서 합의 (9)의 첫 등식에 의해 $a_j \bigl(\sum_{k=p}^{q} b_k\bigr) = \sum_{k=p}^{q} a_j b_k$이다. 합의 (3)에 의해 결론이 나온다.
:::

## 예시와 반례

:::example[두 항짜리 합 둘의 곱]
환 $\mathbb{Z}$([[ring-examples|환의 예]]의 (1))에서 $a_0 = 2$, $a_1 = 3$, $b_0 = 1$, $b_1 = 4$라 합시다. 왼쪽은 $(2 + 3)(1 + 4) = 25$입니다. (6)의 오른쪽은 $(2 \cdot 1 + 2 \cdot 4) + (3 \cdot 1 + 3 \cdot 4) = 10 + 15 = 25$입니다. (4)로 순서를 바꾼 $(2 \cdot 1 + 3 \cdot 1) + (2 \cdot 4 + 3 \cdot 4) = 5 + 20$도 $25$입니다.
:::

:::counterexample[삼각형 이중 합에서 안쪽 범위를 그대로 두면 틀릴 수 있다]
환 $\mathbb{Z}$에서 $0 \le j \le k \le 1$인 칸에 $t_{j,k} = j$를 두면, (5)의 (i)의 왼쪽은 $\sum_{k=0}^{1} \sum_{j=0}^{k} j = 0 + (0 + 1) = 1$이고 오른쪽 $\sum_{j=0}^{1} \sum_{k=j}^{1} j = (0 + 0) + 1 = 1$입니다. 안쪽 범위를 바꾸지 않고 글자만 바꾼 $\sum_{j=0}^{1} \sum_{k=0}^{j} j$는 $0 + (1 + 1) = 2$입니다. 이 식은 $t_{1,0}$처럼 $j > k$인 칸을 쓰므로, 같은 칸을 더한 것이 아닙니다.
:::

## 확인 질문

:::check[$\sum_{k=0}^{n} a_k = \sum_{k=0}^{n} a_{n-k}$는 어느 번호에서 나오는가?]
(3)을 $m = 0$에 쓴 것입니다. 그때 $a_{m+n-k} = a_{n-k}$입니다.
:::

:::check[(4)에서 $m = 1$, $n = 0$이면 두 쪽은 각각 무엇인가?]
둘 다 $0$입니다. 왼쪽은 바깥 합이 빈 합이고, 오른쪽은 각 항 $\sum_{j=1}^{0} t_{j,k}$가 빈 합 $0$이므로 모든 항이 $0$인 합입니다.
:::
