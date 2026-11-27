---
title: 체 위의 차원
title_en: Dimension over a Field
aliases: [체 위의 유한차원, 교환 보조정리 (체), dim_F, dimension over a field, exchange lemma over a field]
kind: theorem
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 길이 p 인 열의 일차결합으로 주어진 p 개보다 많은 벡터는 일차종속이라는 것과 체 위의 교환 보조정리를 증명하고, 그로부터 기저의 길이가 하나로 정해진다는 것, 유한차원과 차원 dim_F 의 정의, 일차독립인 열과 생성하는 열의 길이를 차원과 비교하는 부등식, Fⁿ 의 차원, ℝ 위에서는 선형대수 강의의 차원과 같다는 것을 보인다.
requires: [set, function, recursion-theorem, finite-set, mathematical-induction, prime-number, well-ordering-principle, proof-by-contradiction, proof-by-contrapositive, group, finite-product-in-a-group, ring, ring-basic-properties, field, finite-integral-domain-is-a-field, integers-modulo-n, finite-sums-in-a-ring, rearranging-finite-sums-in-a-ring, vector-space-over-a-field, span-and-independence-over-a-field, basis-over-a-field, vector-space, linear-combination-and-span, dimension]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "20.3절 Linear Independence, Proposition 20.11 (p.255), Proposition 20.14 (p.256), 차원의 정의 (번호 없음, p.256); 20.5절 Exercises, 연습문제 6, 13, 14 (p.257)"
    checked: original
    note: "출처의 Proposition 20.11 은 '벡터공간 V 가 n 개의 벡터로 생성되면 m > n 개의 벡터의 집합은 일차종속' 이고, 출처는 이것이 '미지수가 식보다 많은 동차 연립일차방정식은 자명하지 않은 해를 갖는다' 의 따름이라고만 적고 증명을 연습문제 14 로 둔다(p.255, p.257). 이 항목의 (5)의 (iv)가 이 명제이다. 이 항목은 연립방정식을 쓰지 않고 (1)을 생성하는 열의 길이에 대한 귀납으로 증명하며, (1)은 계수를 미리 주어진 꼴로 진술한다. 생성하는 열의 계수가 하나로 정해지지 않으므로, 벡터마다 계수를 고르지 않으려고 (2)와 (5)의 (iv)는 기저(계수가 하나뿐인 열)를 거친다. Proposition 20.14(기저의 길이가 같다, p.256)는 (3)이고, 출처의 증명은 20.11 을 두 번 쓰는 것으로 이 항목의 증명과 같은 발상이다. 출처는 기저 {e_1, …, e_n} 이 있을 때 차원을 n 이라 정의하고(p.256), 유한차원(finite dimensional)이라는 낱말은 연습문제 16, 18(p.258)과 21장(p.264)에서 정의 없이 쓴다(검색어 'finite dimensional', 'infinite dimensional'). 이 항목은 선형대수 강의처럼 유한차원을 생성하는 열의 존재로 정의하고 기저의 존재와 같다는 것을 (4)로 보인다. (2)의 교환 보조정리는 출처 Proposition 20.11(연습문제 14)에서 바로 나온다(일차독립인 b 가 생성하는 공간에서 p 개보다 많은 벡터는 일차종속). 출처는 이것을 따로 명제로 두지 않는다. 이 항목은 (1)을 먼저 증명하고 (2)를 그 따름으로 얻는다. (6)의 dim_F Fⁿ = n 은 연습문제 6, dim{0} = 0 은 연습문제 13 의 뒤 절반이다. 예시 '$\\mathbb{Z}_3^2$의 세 벡터' 는 출처 Proposition 20.11 을 n = 2, m = 3 에 쓴 것과 같은 내용이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(출처 주장 검색 — 연습문제의 따름인 '명제로 없다' 5건을 겹침으로 고침, 반례 대입). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$F$가 [[field|체]]이고 $V$가 $F$ 위의 [[vector-space-over-a-field|벡터공간]]이라 하자. 벡터의 열, 스칼라의 열, 합의 기호 $\sum$은 [[vector-space-over-a-field|체 위의 벡터공간]]의 것이고, 생성 $\operatorname{span}_F$, 생성한다, 일차독립, 일차종속은 [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]의 것이며, 기저와 부분열은 [[basis-over-a-field|체 위의 기저와 좌표]]의 것이다. 아래에서 $n$, $m$, $p$, $d$는 $0$ 이상인 정수이다.

1. (주어진 계수의 일차결합) $m > p$이고, $b_1, \dots, b_p$가 길이 $p$인 벡터의 열이며, $j \in \{1, \dots, m\}$과 $k \in \{1, \dots, p\}$의 쌍마다 스칼라 $a_{j,k}$가 정해져 있다고 하자. $j \in \{1, \dots, m\}$마다
   $$
   w_j = \sum_{k=1}^{p} a_{j,k} b_k
   $$
   로 둔 길이 $m$인 열 $w_1, \dots, w_m$은 일차종속이다.
2. (교환 보조정리) $b_1, \dots, b_p$가 길이 $p$인 일차독립인 열이고 $w_1, \dots, w_m$이 길이 $m$인 일차독립인 열이며, 모든 $j \in \{1, \dots, m\}$에서 $w_j \in \operatorname{span}_F(b_1, \dots, b_p)$이면 $m \le p$이다.
3. (기저의 길이) 길이 $n$인 열과 길이 $m$인 열이 둘 다 $V$의 기저이면 $m = n$이다.

**유한차원.** $V$가 ($F$ 위에서) **유한차원**(finite-dimensional)인 것은 정확히 어떤 $n \ge 0$과 $V$를 생성하는 길이 $n$인 벡터의 열이 있을 때이다. 유한차원이 아닌 $F$ 위의 벡터공간을 ($F$ 위에서) **무한차원**(infinite-dimensional)이라 한다.

4. (차원) $V$가 유한차원인 것은 정확히 $V$의 기저가 있을 때이다. $V$가 유한차원이면 길이가 $n$인 $V$의 기저가 있는 정수 $n \ge 0$이 꼭 하나 있다. 이 $n$을 $V$의 ($F$ 위의) **차원**(dimension)이라 하고 $\dim_F V$로 쓴다. 곧 $\dim_F V = n$인 것은 정확히 $V$에 길이 $n$인 기저가 있을 때이고, 이때 $V$의 모든 기저의 길이가 $n$이다. "$V$는 $F$ 위에서 $n$차원이다"는 $V$가 유한차원이고 $\dim_F V = n$이라는 뜻이다. 무한차원인 벡터공간의 차원은 정의하지 않는다.
5. (길이와 차원의 비교) $V$가 유한차원이고 $\dim_F V = d$라 하자.
   - (i) $V$의 길이 $m$인 열이 일차독립이면 $m \le d$이다.
   - (ii) $V$의 길이 $m$인 열이 $V$를 생성하면 $d \le m$이다.
   - (iii) 길이가 $d$보다 큰 $V$의 열은 일차종속이다.
   - (iv) $V$가 길이 $n$인 열로 생성되면 $V$는 유한차원이고 $\dim_F V \le n$이며, 길이가 $n$보다 큰 $V$의 열은 일차종속이다.
6. (예) $V = \{0_V\}$인 것은 정확히 $V$가 유한차원이고 $\dim_F V = 0$일 때이다. 자연수 $n$에 대하여 $F^n$([[vector-space-over-a-field|체 위의 벡터공간]]의 (3))은 $F$ 위에서 $n$차원이고, $F$ 자신은 $F$ 위에서 $1$차원이다.
7. (실수의 경우) $V$가 [[vector-space|벡터공간]]이고 [[vector-space-over-a-field|체 위의 벡터공간]]의 (2)에 의해 $\mathbb{R}$ 위의 벡터공간으로 본다고 하자. $V$가 이 항목의 뜻에서 $\mathbb{R}$ 위에서 유한차원인 것은 정확히 [[dimension|차원]]의 뜻에서 유한차원일 때이고, 그때 $\dim_{\mathbb{R}} V$는 그 항목의 $\dim V$와 같다.
:::

:::english
Let $F$ be a field and $V$ a vector space over $F$. Sequences of vectors and of scalars and the summation sign $\sum$ are those of the entry on vector spaces over a field; the span $\operatorname{span}_F$, "spans", linear independence and linear dependence are those of the entry on span and linear independence over a field; bases and subsequences are those of the entry on bases and coordinates over a field. Below, $n$, $m$, $p$, $d$ are integers $\ge 0$.

1. (Linear combinations with given coefficients) Suppose $m > p$, $b_1, \dots, b_p$ is a sequence of vectors of length $p$, and a scalar $a_{j,k}$ is given for each pair of $j \in \{1, \dots, m\}$ and $k \in \{1, \dots, p\}$. The sequence $w_1, \dots, w_m$ of length $m$ defined for each $j \in \{1, \dots, m\}$ by
   $$
   w_j = \sum_{k=1}^{p} a_{j,k} b_k
   $$
   is linearly dependent.
2. (Exchange lemma) If $b_1, \dots, b_p$ is a linearly independent sequence of length $p$, $w_1, \dots, w_m$ is a linearly independent sequence of length $m$, and $w_j \in \operatorname{span}_F(b_1, \dots, b_p)$ for every $j \in \{1, \dots, m\}$, then $m \le p$.
3. (Lengths of bases) If a sequence of length $n$ and a sequence of length $m$ are both bases of $V$, then $m = n$.

**Finite dimension.** $V$ is **finite-dimensional** (over $F$) exactly when for some $n \ge 0$ there is a sequence of vectors of length $n$ that spans $V$. A vector space over $F$ that is not finite-dimensional is called **infinite-dimensional** (over $F$).

4. (Dimension) $V$ is finite-dimensional exactly when $V$ has a basis. If $V$ is finite-dimensional, there is exactly one integer $n \ge 0$ such that $V$ has a basis of length $n$. This $n$ is called the **dimension** of $V$ (over $F$) and written $\dim_F V$. Thus $\dim_F V = n$ exactly when $V$ has a basis of length $n$, and then every basis of $V$ has length $n$. "$V$ is $n$-dimensional over $F$" means that $V$ is finite-dimensional and $\dim_F V = n$. The dimension of an infinite-dimensional vector space is not defined.
5. (Comparing lengths with the dimension) Let $V$ be finite-dimensional with $\dim_F V = d$.
   - (i) If a sequence of length $m$ in $V$ is linearly independent, then $m \le d$.
   - (ii) If a sequence of length $m$ in $V$ spans $V$, then $d \le m$.
   - (iii) Every sequence in $V$ of length greater than $d$ is linearly dependent.
   - (iv) If $V$ is spanned by a sequence of length $n$, then $V$ is finite-dimensional with $\dim_F V \le n$, and every sequence in $V$ of length greater than $n$ is linearly dependent.
6. (Examples) $V = \{0_V\}$ exactly when $V$ is finite-dimensional and $\dim_F V = 0$. For a natural number $n$, $F^n$ ((3) of the entry on vector spaces over a field) is $n$-dimensional over $F$, and $F$ itself is $1$-dimensional over $F$.
7. (The real case) Let $V$ be a vector space in the sense of the linear algebra course, regarded as a vector space over $\mathbb{R}$ by (2) of the entry on vector spaces over a field. $V$ is finite-dimensional over $\mathbb{R}$ in the sense of this entry exactly when it is finite-dimensional in the sense of the entry on dimension, and then $\dim_{\mathbb{R}} V$ equals the $\dim V$ of that entry.
:::

## 직관

$p$개의 재료로 만든 벡터를 $p$개보다 많이 늘어놓으면, 그 가운데 어딘가에 겹치는 정보가 있어 일차종속이 된다는 것이 (1)입니다. 재료가 $p$가지뿐인데 서로 다른 방향을 $p$개보다 많이 낼 수는 없다는 뜻입니다. 비유가 맞는 곳은 "재료의 수"가 생성하는 열의 길이이고 "서로 다른 방향"이 일차독립이라는 점입니다.

(1)에서 기저의 길이가 하나로 정해지고((3)), 그 길이가 차원입니다. 차원은 공간마다 하나로 정해지는 수이고, 일차독립인 열은 차원보다 길 수 없으며 생성하는 열은 차원보다 짧을 수 없습니다((5)). 선형대수 강의의 교환 보조정리와 같은 귀납을 쓰지만, 쓰는 것은 체의 계산 법칙뿐이므로 $\mathbb{Z}_p$ 위에서도 그대로 성립합니다.

(1)이 계수를 미리 주어진 꼴로 말하는 까닭은, 생성하는 열의 일차결합으로 쓰는 방법이 여러 가지일 수 있기 때문입니다. 계수가 하나로 정해지는 기저를 거치면((2), (5)의 (iv)) 벡터마다 계수를 고르지 않아도 됩니다.

## 증명

:::idea
(1)은 $p$에 대한 귀납이다. $b_{p+1}$의 계수가 모두 $0$이면 바로 귀납 가정을 쓰고, 어떤 $w_l$에서 $0$이 아니면 나머지 $w_j$에서 $w_l$의 알맞은 배를 빼서 $b_{p+1}$을 지운 $m - 1$개의 벡터에 귀납 가정을 쓴다.
:::

:::hint
(1)의 귀납 단계에서 $a_{l,p+1} \ne 0$이면 $j \ne l$마다 $w_j - (a_{j,p+1} a_{l,p+1}^{-1}) w_l$을 생각한다. 이 벡터의 $b_{p+1}$의 계수는 $0$이다.
:::

:::hint
(2)는 $b$가 일차독립이라서 각 $w_j$의 계수가 하나로 정해진다는 것과 (1)의 대우이다.
:::

:::proof
**쓰는 사실.** [[vector-space-over-a-field|체 위의 벡터공간]]을 "벡터공간 항목", [[span-and-independence-over-a-field|체 위의 생성과 일차독립]]을 "생성 항목", [[basis-over-a-field|체 위의 기저와 좌표]]를 "기저 항목"으로 줄여 부르고 그 번호로 인용한다. 합의 성질은 [[finite-sums-in-a-ring|환의 유한 합]]과 [[rearranging-finite-sums-in-a-ring|유한 합의 재배열]]의 번호로 인용한다. 정수의 순서는 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)–(L3)으로 다룬다. 스칼라의 열과 벡터의 열을 자리마다 식이나 이미 정해진 대상으로 정할 때는 [[recursion-theorem|재귀 정리]]의 (1)을 쓴다.

**1의 증명.** $p \ge 0$에 대한 귀납법으로 다음 명제 $S_p$를 보인다.

> $S_p$: $m > p$인 모든 정수 $m$, 길이 $p$인 모든 벡터의 열 $b$, 쌍 $(j, k)$ ($1 \le j \le m$, $1 \le k \le p$)마다 정해진 모든 스칼라 $a_{j,k}$에 대하여, $w_j = \sum_{k=1}^{p} a_{j,k} b_k$로 둔 열 $w_1, \dots, w_m$은 일차종속이다.

*기초 단계 $p = 0$.* 모든 $w_j$는 빈 합 $0_V$이다. $m > 0$이므로 (Z1)에 의해 $m \ge 1$이고 $w_1 = 0_V$이므로, 생성 항목의 (3)의 (i)에 의해 $w$는 일차종속이다.

*귀납 단계.* $S_p$가 참이라 하고, $m > p + 1$, 길이 $p + 1$인 열 $b$, 스칼라 $a_{j,k}$ ($1 \le k \le p + 1$)가 주어졌다고 하자. 환의 유한 합의 (2)에 의해 모든 $j$에서
$$
w_j = \sum_{k=1}^{p} a_{j,k} b_k + a_{j,p+1} b_{p+1}
$$
이다. 처음 $p$개의 열 $b_1, \dots, b_p$를 $b'$이라 하자.

*경우 1: 모든 $j$에서 $a_{j,p+1} = 0$.* 벡터공간 항목의 (1)의 (i)에 의해 $w_j = \sum_{k=1}^{p} a_{j,k} b_k$이다. $m > p + 1 > p$이므로 (Z6)에 의해 $m > p$이고, $S_p$를 $m$, $b'$, $a_{j,k}$ ($k \le p$)에 쓰면 $w$는 일차종속이다.

*경우 2: 어떤 $l \in \{1, \dots, m\}$에서 $a_{l,p+1} \ne 0$.* 그런 $l$을 하나 잡고 $c = a_{l,p+1}^{-1}$로 둔다. $i \in \{1, \dots, m - 1\}$에 대하여 $i < l$이면 $j(i) = i$, $l \le i$이면 $j(i) = i + 1$로 둔다((Z5)에 의해 둘 가운데 하나이다). 그러면 $j(i) \in \{1, \dots, m\}$이고 $j(i) \ne l$이다. 각 $i$에 대하여 $t_i = a_{j(i),p+1} c$로 두고
$$
d_i = w_{j(i)} - t_i w_l
$$
라 하자. 벡터공간 항목의 (4)의 (iv), (iii)에 의해
$$
d_i = \sum_{k=1}^{p+1} \bigl(a_{j(i),k} - t_i a_{l,k}\bigr) b_k
$$
이고, 마지막 계수는 $a_{j(i),p+1} - a_{j(i),p+1} c\, a_{l,p+1} = a_{j(i),p+1} - a_{j(i),p+1} = 0$이다. 따라서 환의 유한 합의 (2)와 벡터공간 항목의 (1)의 (i)에 의해 $d_i = \sum_{k=1}^{p} a'_{i,k} b_k$이고, 여기서 $a'_{i,k} = a_{j(i),k} - t_i a_{l,k}$이다. $m > p + 1$이므로 (Z7)에 의해 $m - 1 > p$이고, $S_p$에 의해 열 $d_1, \dots, d_{m-1}$은 일차종속이다. 곧 $\sum_{i=1}^{m-1} \beta_i d_i = 0_V$이고 어떤 $i_0$에서 $\beta_{i_0} \ne 0$인 스칼라의 열 $\beta$가 있다.

벡터공간 항목의 (1)의 (iv), 스칼라배의 조건 (i), 환의 유한 합의 (6)의 (ii), 벡터공간 항목의 (4)의 (ii)에 의해
$$
\begin{aligned}
0_V &= \sum_{i=1}^{m-1} \beta_i d_i \\
&= \sum_{i=1}^{m-1} \bigl(\beta_i w_{j(i)} - (\beta_i t_i) w_l\bigr) \\
&= \sum_{i=1}^{m-1} \beta_i w_{j(i)} - \tau w_l
\end{aligned}
$$
이다. 여기서 $\tau = \sum_{i=1}^{m-1} \beta_i t_i$이다. 이제 길이 $m$인 스칼라의 열 $\gamma$를 $j < l$이면 $\gamma_j = \beta_j$, $\gamma_l = -\tau$, $j > l$이면 $\gamma_j = \beta_{j-1}$로 정한다. 그러면 모든 $i$에서 $\gamma_{j(i)} = \beta_i$이다($i < l$이면 $j(i) = i < l$이고, $i \ge l$이면 $j(i) - 1 = i$이다). [[rearranging-finite-sums-in-a-ring|유한 합의 재배열]]의 (1)을 길이 $m = (m - 1) + 1$인 열 $\gamma_1 w_1, \dots, \gamma_m w_m$과 자리 $l$에 쓰면(지운 열의 $i$번째 항이 $\gamma_{j(i)} w_{j(i)}$이다), 벡터공간 항목의 (1)의 (iii)과 함께
$$
\begin{aligned}
\sum_{j=1}^{m} \gamma_j w_j &= \sum_{i=1}^{m-1} \beta_i w_{j(i)} + (-\tau) w_l \\
&= \sum_{i=1}^{m-1} \beta_i w_{j(i)} - \tau w_l \\
&= 0_V
\end{aligned}
$$
이다. $\gamma_{j(i_0)} = \beta_{i_0} \ne 0$이므로 $w$는 일차종속이다.

두 경우 가운데 하나는 반드시 일어나므로 $S_{p+1}$이 참이다. 귀납법의 원리에 의해 모든 $p \ge 0$에서 $S_p$가 참이다.

**2의 증명.** $b$가 일차독립이므로 생성 항목의 (3)의 (iv)에 의해 각 $w_j$를 $w_j = \sum_{k=1}^{p} \alpha_k b_k$로 나타내는 스칼라의 열 $\alpha$는 하나뿐이다. 그 열의 $k$번째 항을 $a_{j,k}$로 두면 쌍 $(j, k)$마다 스칼라가 하나로 정해지고 $w_j = \sum_{k} a_{j,k} b_k$이다. $m > p$라고 가정하면 (1)에 의해 $w$가 일차종속이 되어 가정과 어긋난다([[proof-by-contradiction|귀류법]]). 따라서 (Z5)에 의해 $m \le p$이다.

**3의 증명.** 길이 $n$인 기저 $v$와 길이 $m$인 기저 $w$는 둘 다 일차독립이다. $v$가 $V$를 생성하므로 모든 $w_j$는 $\operatorname{span}_F(v_1, \dots, v_n) = V$에 속하고, (2)에 의해 $m \le n$이다. 두 열의 자리를 바꾸어 같은 논법으로 $n \le m$이다. (L2)에 의해 $m = n$이다.

**4의 증명.** $V$가 유한차원이면 $V$를 생성하는 열이 있고, 기저 항목의 (6)에 의해 그 부분열 가운데 기저가 있다. 거꾸로 기저는 $V$를 생성하는 열이므로 $V$는 유한차원이다. $V$가 유한차원이면 기저가 있으므로 그 길이 $n$이 하나 있고, (3)에 의해 모든 기저의 길이가 $n$이므로 그런 $n$은 하나뿐이다. 나머지 문장은 이것을 풀어 쓴 것이다.

**5의 증명.** (4)에 의해 길이 $d$인 기저 $b$가 있다. (i) 일차독립인 열 $w$의 모든 항은 $V = \operatorname{span}_F(b_1, \dots, b_d)$에 속하므로 (2)에 의해 $m \le d$이다. (ii) 생성하는 열 $v$에는 기저 항목의 (6)에 의해 기저인 부분열 $v \circ s$가 있고, $s : \{1, \dots, r\} \to \{1, \dots, m\}$이면 기저 항목의 (5)의 (i)에 의해 $r \le m$이다. (4)에 의해 $r = d$이므로 $d \le m$이다. (iii) 길이가 $d$보다 큰 열이 일차독립이면 (i)에 의해 그 길이가 $d$ 이하가 되어 어긋난다((L1)). 따라서 일차종속이다. (iv) $V$는 정의에 의해 유한차원이고, (ii)에 의해 $\dim_F V \le n$이다. 길이 $m > n$인 열은 (Z6)에 의해 길이가 $\dim_F V$보다 크므로 (iii)에 의해 일차종속이다.

**6의 증명.** 기저 항목의 (2)에 의해 빈 열이 기저인 것은 정확히 $V = \{0_V\}$일 때이다. $V = \{0_V\}$이면 빈 열이 길이 $0$인 기저이므로 (4)에 의해 $\dim_F V = 0$이다. 거꾸로 $\dim_F V = 0$이면 길이 $0$인 기저, 곧 빈 열이 기저이므로 $V = \{0_V\}$이다. 기저 항목의 (4)에 의해 $F^n$에는 길이 $n$인 기저(표준기저)가 있고, $F$에는 길이 $1$인 기저가 있으므로 (4)에 의해 차원은 각각 $n$, $1$이다.

**7의 증명.** [[linear-combination-and-span|일차결합과 생성]]의 정의와 생성 항목의 (6)에 의해, 실수의 열 $v$가 선형대수 강의의 뜻에서 $V$를 생성하는 것은 정확히 $\operatorname{span}_{\mathbb{R}}(v) = V$일 때이다. 두 쪽의 유한차원의 정의는 모두 "생성하는 열이 있다"이므로 같은 조건이다. 유한차원이면 [[dimension|차원]]의 (2)에 의해 그 항목의 $\dim V = n$인 것은 정확히 선형대수 강의의 뜻에서 길이 $n$인 기저가 있을 때이고, 기저 항목의 (7)에 의해 이것은 이 항목의 뜻에서 $\mathbb{R}$ 위의 길이 $n$인 기저가 있을 때, 곧 (4)에 의해 $\dim_{\mathbb{R}} V = n$일 때이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_3^2$의 세 벡터]
$\mathbb{Z}_3^2$는 $\mathbb{Z}_3$ 위에서 $2$차원이므로((6)) 길이 $3$인 열은 모두 일차종속이다((5)의 (iii)). 예컨대 $v_1 = ([1], [0])$, $v_2 = ([1], [1])$, $v_3 = ([1], [2])$이면
$$
v_1 + v_2 + v_3 = ([3], [3]) = ([0], [0])
$$
이므로 계수 $[1], [1], [1]$이 영벡터를 나타낸다. 한편 $v_1, v_2$는 일차독립이다. $\alpha v_1 + \beta v_2 = (\alpha + \beta, \beta)$가 영벡터이면 $\beta = [0]$이고 $\alpha = [0]$이다.
:::

:::example[계수가 주어진 꼴의 (1)]
$p = 1$, $m = 2$이고 $b_1$이 $\mathbb{Z}_5$ 위의 벡터공간의 벡터, $w_1 = [2]b_1$, $w_2 = [3]b_1$이라 하자. (1)에 의해 $w_1, w_2$는 일차종속이다. 실제로 증명의 경우 2를 $l = 1$로 따라가면 $c = [2]^{-1} = [3]$, $t_1 = [3][3] = [9] = [4]$이고 $d_1 = w_2 - [4]w_1 = [3]b_1 - [8]b_1 = [-5]b_1 = 0_V$이다. 이때 $\beta_1 = [1]$로 $\tau = [4]$이고, $\gamma = (-[4], [1]) = ([1], [1])$에 대하여 $[1]w_1 + [1]w_2 = [5]b_1 = 0_V$이다.
:::

:::counterexample[교환 보조정리에서 둘째 열이 일차독립이 아닌 경우의 예]
(2)는 $w$가 일차독립이라는 가정을 쓴다. 이 가정을 빼면 결론이 깨질 수 있다. $b_1 = e_1 \in \mathbb{Z}_3^2$이고 $w_1 = w_2 = e_1$이면, 모든 $w_j$가 $\operatorname{span}_F(b_1)$에 속하고 $b$는 일차독립이지만 $m = 2 > 1 = p$이다. 이 $w$는 같은 벡터가 두 자리에 나오므로 일차종속이다([[span-and-independence-over-a-field|생성과 일차독립]]의 (3)의 (ii)).
:::

## 확인 질문

:::check[$\dim_F V = 3$이면 길이 $2$인 열이 $V$를 생성할 수 있는가?]
없다. (5)의 (ii)에 의해 $V$를 생성하는 열의 길이는 $3$ 이상이다.
:::

:::check[$\mathbb{Z}_7^4$에서 일차독립인 열의 길이는 얼마까지 될 수 있는가?]
$4$까지이다. (6)에 의해 $\dim_{\mathbb{Z}_7} \mathbb{Z}_7^4 = 4$이므로 (5)의 (i)에 의해 일차독립인 열의 길이는 $4$ 이하이고, 표준기저 $e_1, e_2, e_3, e_4$가 길이 $4$인 일차독립인 열이다.
:::
