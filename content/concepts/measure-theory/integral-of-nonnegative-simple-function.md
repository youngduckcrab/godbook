---
title: 0 이상인 단순함수의 적분
title_en: Integral of Nonnegative Simple Functions
aliases: [단순함수의 적분, 단순함수의 르베그 적분, 가측집합 위의 단순함수의 적분, integral of a simple function, integral of nonnegative simple functions]
kind: definition
field: measure-theory
msc: ["28A25"]
level: undergrad
summary: "측도공간 위의 0 이상인 단순함수의 적분을 표준 표현의 값과 조각의 측도를 곱해 더한 [0, ∞] 의 원소로 정의하고, 서로소가 아니어도 되는 아무 표현으로 계산해도 같다는 것, 상수배·합·단조성, 가측집합 위의 적분이 측도를 정한다는 것을 증명한다."
requires: [set-operations, mathematical-induction, real-number-arithmetic, real-order-axioms, order-properties-of-reals, power-set, sigma-algebra, measurable-function, indicator-function, extended-nonnegative-reals, series-in-extended-nonnegative-reals, measure, measure-examples, simple-function-approximation]
sources:
  - ref: sandoval-romero-measure-and-integration
    loc: 5.1절 The integral of nonnegative simple functions, Definition 5.1, Proposition 5.2, Theorem 5.3, Proposition 5.4 (p.122–126), Definition 5.7, Theorem 5.8 (p.127); 3.1절 Proposition 3.15 (p.64–65); 5.5절 Exercise 5.1, 5.2 (p.155), Exercise 5.7 (p.156)
    checked: original
    note: "출처의 Definition 5.1(p.122)은 0 이상인 S-단순함수 s 의 표준 표현(canonical representation) s = Σ α_j χ_{A_j} 로 ∫_X s dµ := Σ α_j µ(A_j) 라 정의한다. 표준 표현은 출처 Proposition 3.15(p.64–65)의 것으로, 서로 다른 값 α_1, …, α_N 과 X 를 덮는 서로소인 A_j 로 쓴 것이며 증명은 A_j = s⁻¹({α_j}) 로 둔다. 이 항목은 단순함수와 단순함수로 근사하기의 표준 표현(값의 집합의 크기순 나열, 조각은 공집합이 아니다)을 쓰고, X = ∅ 일 때의 값 0 을 따로 정했다. 출처는 Definition 5.1 바로 뒤(p.122)에서 영함수의 표준 표현을 0 = 0·χ_X + 1·χ_∅ 로 적는데, 값 1 의 조각이 공집합이어서 Proposition 3.15 의 증명이 만드는 표현(값마다 그 값을 갖는 점들의 집합)과 다르다. 이 항목의 표준 표현에는 공집합인 조각이 없다. 출처는 이 항목처럼 [0, ∞] 의 곱으로 α_j µ(A_j) 를 계산하고 0·∞ = 0 은 출처 Definition 3.25(p.73)의 약속이다. 출처 Proposition 5.2(p.122–124)가 (3)의 (i)(ii)이다. 출처의 (b)의 증명은 공통 세분 A_j ∩ B_k 위의 값 α_j + β_k 가운데 서로 다른 것 c_ℓ 을 모아 s + t 의 표준 표현을 만든 뒤 계산한다. 이 항목은 그 대신 (1)(분할 위에서 상수인 함수는 그 분할로 계산해도 표준 표현으로 계산한 것과 같다)을 먼저 증명하고 공통 세분에 쓴다. 출처 Theorem 5.3(p.124–125)은 β_j > 0 이고 B_j 가 서로소가 아니어도 되는 표현으로 계산해도 같다는 것이고, 증명에서 귀납을 'Exercise 5.3' 으로 가리키지만 p.155 의 Exercise 5.3 은 δ_0, µ♯, λ 에 대한 적분값을 맞추는 단순함수를 찾는 문제이고, 유한 일차결합의 귀납은 p.124 에서 Exercise 5.7(p.156)로 돌린 것이다. 이 항목의 (4)는 β_j ≥ 0 으로 넓혀 (3)의 (iii)(출처의 Exercise 5.7 과 같은 진술)으로 증명한다. 출처 Proposition 5.4(p.125–126)가 (5)이고, 출처의 증명도 공통 세분 위에서 항마다 비교한다. 출처 Definition 5.7(p.127)은 ∫_A s dµ := ∫_X (s·χ_A) dµ := Σ α_j µ(A_j ∩ A) 로 정의하는데, 이 항목은 앞의 등식을 정의로 두고 뒤의 식을 (6)의 (i)로 증명했다. 출처 Theorem 5.8(p.127)이 (7)이고, 출처의 증명도 축약 측도의 일차결합(출처 Proposition 4.13)으로 한다. (2)의 ∫ χ_A dµ = µ(A) 는 출처 Exercise 5.1(p.155)이고, 상수함수의 적분 cµ(X) 는 출처 Exercise 5.2(p.155, c > 0)이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(출처 증명의 연습문제 번호와 Cor 5.18 마지막 줄을 원문 대조, 디랙 측도의 f(p) = ∞ 경우). 독립 검토 없음."
added: 2026-11-28
---

:::statement
측도공간, 측도의 성질, 유한 측도는 [[measure|측도와 측도공간]]의 것이고, 디랙 측도 $\delta_p$, 측도의 일차결합, 측도의 축약 $\mu^E$는 [[measure-examples|측도의 예]]의 것이다. $\mathcal{M}$-단순함수와 그 표준 표현, 공통 세분은 [[simple-function-approximation|단순함수와 단순함수로 근사하기]]의 것이고, 지시함수 $\chi_A$는 [[indicator-function|지시함수]]의 것이다. $[0, \infty]$와 그 순서, 덧셈, 곱셈($0 \cdot \infty = 0$)은 [[extended-nonnegative-reals|0 이상인 확장된 실수]]의 것이고, $[0, \infty]$의 원소의 유한 합 $\sum_{j=1}^{N}$은 [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 것이다. 아래에서 $(X, \mathcal{M}, \mu)$는 측도공간이다.

**0 이상인 단순함수.** $\mathcal{M}$-단순함수 $s$가 모든 $x \in X$에서 $0 \le s(x)$일 때 $s$를 **0 이상인 단순함수**라 한다. 그 값은 $[0, \infty)$의 원소이므로 $[0, \infty]$의 원소로도 본다.

**적분.** $s$가 0 이상인 단순함수라 하자. $X = \emptyset$이면 $\int s\,d\mu = 0$으로 정한다. $X \ne \emptyset$이면 $s$의 표준 표현 $N$, $\alpha_1 < \dots < \alpha_N$, $A_1, \dots, A_N$으로
$$
\int s\,d\mu = \sum_{j=1}^{N} \alpha_j\,\mu(A_j)
$$
로 정한다. 오른쪽의 곱과 합은 $[0, \infty]$의 것이다. 그래서 $\alpha_j = 0$이고 $\mu(A_j) = \infty$인 항은 $0$이다. 표준 표현은 $s$ 하나로 정해지므로 $\int s\,d\mu$는 $[0, \infty]$의 원소 하나로 정해진다. 이것을 $s$의 $\mu$에 대한 **적분**(integral)이라 한다.

**가측집합 위의 적분.** $A \in \mathcal{M}$이면 $x$에서의 값이 $s(x)\,\chi_A(x)$인 함수 $s\chi_A$는 아래 (6)의 (i)에 의해 0 이상인 단순함수이고,
$$
\int_A s\,d\mu = \int s\chi_A\,d\mu
$$
로 정한다. 이것을 $s$의 $A$ 위의 적분이라 한다.

다음이 성립한다. 아래에서 $s$, $t$는 0 이상인 단순함수이다.

1. (분할 위에서 상수인 함수) $K$, $L$이 자연수이고, $1 \le i \le K$, $1 \le j \le L$인 정수 $i$, $j$마다 $C_{i,j} \in \mathcal{M}$과 $0$ 이상인 실수 $\gamma_{i,j}$가 정해져 있으며, $X$의 각 원소가 이 $KL$개의 집합 가운데 정확히 하나에 속한다고 하자($C_{i,j}$가 비어 있거나 $\gamma_{i,j}$가 서로 같아도 된다). $x \in C_{i,j}$이면 $s(x) = \gamma_{i,j}$라 하자. 그러면
   $$
   \int s\,d\mu = \sum_{i=1}^{K} \sum_{j=1}^{L} \gamma_{i,j}\,\mu(C_{i,j})
   $$
   이다. $L = 1$이면 오른쪽은 $\sum_{i=1}^{K} \gamma_{i,1}\,\mu(C_{i,1})$이다.
2. (지시함수의 상수배) $c$가 $0$ 이상인 실수이고 $A \in \mathcal{M}$이면 $c\chi_A$는 0 이상인 단순함수이고 $\int c\chi_A\,d\mu = c\,\mu(A)$이다. 특히 $\int \chi_A\,d\mu = \mu(A)$이고, 값이 $c$인 상수함수의 적분은 $c\,\mu(X)$이며, 값이 $0$인 상수함수의 적분은 $0$이다.
3. (상수배, 합, 유한 일차결합)
   - (i) $c$가 $0$ 이상인 실수이면 $cs$는 0 이상인 단순함수이고 $\int cs\,d\mu = c \int s\,d\mu$이다.
   - (ii) $s + t$는 0 이상인 단순함수이고 $\int (s + t)\,d\mu = \int s\,d\mu + \int t\,d\mu$이다.
   - (iii) $N$이 $0$ 이상인 정수이고, $1 \le k \le N$인 정수 $k$마다 0 이상인 단순함수 $s_k$와 $0$ 이상인 실수 $c_k$가 정해져 있으면, $x$에서의 값이 $\sum_{k=1}^{N} c_k\,s_k(x)$인 함수는 0 이상인 단순함수이고 그 적분은 $\sum_{k=1}^{N} c_k \int s_k\,d\mu$이다.
4. (아무 표현으로 계산하기) $N$이 $0$ 이상인 정수이고, $1 \le j \le N$인 정수 $j$마다 $B_j \in \mathcal{M}$과 $0$ 이상인 실수 $\beta_j$가 정해져 있다고 하자($B_j$가 서로소가 아니거나 비어 있거나 $\beta_j$가 서로 같아도 된다). 모든 $x \in X$에서 $u(x) = \sum_{j=1}^{N} \beta_j\,\chi_{B_j}(x)$인 함수 $u : X \to \mathbb{R}$는 0 이상인 단순함수이고
   $$
   \int u\,d\mu = \sum_{j=1}^{N} \beta_j\,\mu(B_j)
   $$
   이다.
5. (단조성) 모든 $x \in X$에서 $s(x) \le t(x)$이면 $\int s\,d\mu \le \int t\,d\mu$이다.
6. (가측집합 위의 적분) $A$, $E$는 $\mathcal{M}$의 원소이다.
   - (i) $s\chi_A$는 0 이상인 단순함수이다. $N$, $B_j$, $\beta_j$가 (4)의 것이고 모든 $x \in X$에서 $s(x) = \sum_{j=1}^{N} \beta_j\,\chi_{B_j}(x)$이면 $\int_A s\,d\mu = \sum_{j=1}^{N} \beta_j\,\mu(B_j \cap A)$이다. $s$는 늘 이런 꼴로 쓰인다: $X \ne \emptyset$이면 표준 표현으로, $X = \emptyset$이면 $N = 0$으로.
   - (ii) $\int_X s\,d\mu = \int s\,d\mu$이다. $A \subseteq E$이면 $\int_A s\,d\mu \le \int_E s\,d\mu$이다. $\mu(A) = 0$이면 $\int_A s\,d\mu = 0$이다. $A$에 속하지 않는 모든 $x$에서 $s(x) = 0$이면 $\int_A s\,d\mu = \int s\,d\mu$이다.
7. (적분이 정하는 측도) $A \in \mathcal{M}$에서 값이 $\int_A s\,d\mu$인 함수 $\nu_s : \mathcal{M} \to [0, \infty]$는 $(X, \mathcal{M})$ 위의 측도이고 $\nu_s(X) = \int s\,d\mu$이다.
:::

:::english
Measure spaces, properties of measures and finite measures are as in the entry on measures; Dirac measures $\delta_p$, linear combinations of measures and contractions $\mu^E$ are as in the entry on examples of measures. $\mathcal{M}$-simple functions, their canonical representation and common refinements are as in the entry on simple functions, and $\chi_A$ is the indicator function. $[0, \infty]$ with its order, addition and multiplication ($0 \cdot \infty = 0$) and finite sums $\sum_{j=1}^{N}$ of its elements are as in the entries on $[0, \infty]$. Below, $(X, \mathcal{M}, \mu)$ is a measure space.

**Nonnegative simple functions.** An $\mathcal{M}$-simple function $s$ with $0 \le s(x)$ for all $x \in X$ is called a **nonnegative simple function**. Its values lie in $[0, \infty)$, so we also regard them as elements of $[0, \infty]$.

**Integral.** Let $s$ be a nonnegative simple function. If $X = \emptyset$, set $\int s\,d\mu = 0$. If $X \ne \emptyset$, let $N$, $\alpha_1 < \dots < \alpha_N$, $A_1, \dots, A_N$ be the canonical representation of $s$ and set
$$
\int s\,d\mu = \sum_{j=1}^{N} \alpha_j\,\mu(A_j).
$$
The products and the sum on the right are those of $[0, \infty]$, so a term with $\alpha_j = 0$ and $\mu(A_j) = \infty$ equals $0$. Since the canonical representation is determined by $s$, $\int s\,d\mu$ is a single element of $[0, \infty]$. It is called the **integral** of $s$ with respect to $\mu$.

**Integral over a measurable set.** If $A \in \mathcal{M}$, the function $s\chi_A$ whose value at $x$ is $s(x)\,\chi_A(x)$ is a nonnegative simple function by (6)(i) below, and we set
$$
\int_A s\,d\mu = \int s\chi_A\,d\mu.
$$
This is called the integral of $s$ over $A$.

The following hold. Below, $s$ and $t$ are nonnegative simple functions.

1. (Functions constant on the pieces of a partition) Let $K$, $L$ be natural numbers, and for integers $1 \le i \le K$, $1 \le j \le L$ let $C_{i,j} \in \mathcal{M}$ and nonnegative reals $\gamma_{i,j}$ be given such that every element of $X$ belongs to exactly one of these $KL$ sets (some $C_{i,j}$ may be empty and the $\gamma_{i,j}$ need not be distinct). Suppose $s(x) = \gamma_{i,j}$ whenever $x \in C_{i,j}$. Then
   $$
   \int s\,d\mu = \sum_{i=1}^{K} \sum_{j=1}^{L} \gamma_{i,j}\,\mu(C_{i,j}).
   $$
   If $L = 1$, the right-hand side is $\sum_{i=1}^{K} \gamma_{i,1}\,\mu(C_{i,1})$.
2. (Multiples of indicator functions) If $c$ is a nonnegative real and $A \in \mathcal{M}$, then $c\chi_A$ is a nonnegative simple function and $\int c\chi_A\,d\mu = c\,\mu(A)$. In particular $\int \chi_A\,d\mu = \mu(A)$, the integral of the constant function with value $c$ is $c\,\mu(X)$, and the integral of the constant function with value $0$ is $0$.
3. (Multiples, sums, finite linear combinations)
   - (i) If $c$ is a nonnegative real, then $cs$ is a nonnegative simple function and $\int cs\,d\mu = c \int s\,d\mu$.
   - (ii) $s + t$ is a nonnegative simple function and $\int (s + t)\,d\mu = \int s\,d\mu + \int t\,d\mu$.
   - (iii) If $N$ is a nonnegative integer and for each integer $1 \le k \le N$ a nonnegative simple function $s_k$ and a nonnegative real $c_k$ are given, then the function whose value at $x$ is $\sum_{k=1}^{N} c_k\,s_k(x)$ is a nonnegative simple function, and its integral is $\sum_{k=1}^{N} c_k \int s_k\,d\mu$.
4. (Computing with any representation) Let $N$ be a nonnegative integer, and for each integer $1 \le j \le N$ let $B_j \in \mathcal{M}$ and a nonnegative real $\beta_j$ be given (the $B_j$ need not be disjoint and may be empty, and the $\beta_j$ need not be distinct). The function $u : X \to \mathbb{R}$ with $u(x) = \sum_{j=1}^{N} \beta_j\,\chi_{B_j}(x)$ for all $x \in X$ is a nonnegative simple function and
   $$
   \int u\,d\mu = \sum_{j=1}^{N} \beta_j\,\mu(B_j).
   $$
5. (Monotonicity) If $s(x) \le t(x)$ for all $x \in X$, then $\int s\,d\mu \le \int t\,d\mu$.
6. (Integrals over measurable sets) $A$ and $E$ are elements of $\mathcal{M}$.
   - (i) $s\chi_A$ is a nonnegative simple function. If $N$, $B_j$, $\beta_j$ are as in (4) and $s(x) = \sum_{j=1}^{N} \beta_j\,\chi_{B_j}(x)$ for all $x \in X$, then $\int_A s\,d\mu = \sum_{j=1}^{N} \beta_j\,\mu(B_j \cap A)$. Such a form always exists: the canonical representation if $X \ne \emptyset$, and $N = 0$ if $X = \emptyset$.
   - (ii) $\int_X s\,d\mu = \int s\,d\mu$. If $A \subseteq E$, then $\int_A s\,d\mu \le \int_E s\,d\mu$. If $\mu(A) = 0$, then $\int_A s\,d\mu = 0$. If $s(x) = 0$ for all $x$ not in $A$, then $\int_A s\,d\mu = \int s\,d\mu$.
7. (The measure defined by the integral) The function $\nu_s : \mathcal{M} \to [0, \infty]$ whose value at $A \in \mathcal{M}$ is $\int_A s\,d\mu$ is a measure on $(X, \mathcal{M})$, and $\nu_s(X) = \int s\,d\mu$.
:::

## 직관

0 이상인 단순함수는 몇 개의 조각 위에서 각각 일정한 높이를 갖는 함수입니다. 그 적분은 조각마다 "높이 × 조각의 측도"를 구해 더한 것으로, 밑넓이와 높이로 기둥의 부피를 재는 것과 같습니다. 비유가 맞아떨어지는 곳은 높이가 실수이고 조각들이 서로 겹치지 않는다는 점이고, 다른 곳은 밑넓이 자리에 측도가 들어가 $\infty$일 수 있다는 점입니다. 높이가 $0$인 조각은 밑넓이가 $\infty$여도 부피가 $0$이어야 하므로 $0 \cdot \infty = 0$을 씁니다.

정의는 표준 표현, 곧 "값마다 그 값을 갖는 점들의 집합"을 쓰므로 하나로 정해집니다. 하지만 계산할 때는 단순함수가 다른 꼴로 주어지는 일이 많습니다. 예를 들어 $2\chi_B + 3\chi_C$처럼 겹치는 집합의 지시함수를 더한 꼴입니다. (4)는 그런 꼴에서 바로 "계수 × 측도"를 더해도 된다는 것입니다. 증명의 열쇠는 (1)입니다. 표준 표현의 조각과 주어진 분할의 조각을 겹쳐 자르면, 잘린 조각 위에서는 두 쪽의 높이가 같으므로 같은 양을 두 가지 순서로 더한 것이 됩니다.

계수는 $0$ 이상이어야 합니다. 음의 계수를 허락하면 $\infty$에서 $\infty$를 빼는 식이 나올 수 있기 때문입니다(아래 반례). 마지막 (7)은 단순함수 하나가 집합마다 "그 집합 위의 부피"를 주는 측도를 정한다는 것으로, 다음 항목들에서 단조 수렴 정리를 증명할 때 이 측도의 연속성을 씁니다.

## 성질의 증명

:::proof
측도의 성질은 [[measure|측도와 측도공간]]의 번호로, 단순함수의 성질은 [[simple-function-approximation|단순함수와 단순함수로 근사하기 항목]]의 번호로, $[0, \infty]$의 성질은 [[extended-nonnegative-reals|0 이상인 확장된 실수 항목]]의 번호로, 유한 합의 성질은 [[series-in-extended-nonnegative-reals|확장된 실수의 합 항목]]의 (1)의 번호로, σ-대수의 성질은 [[sigma-algebra|σ-대수와 가측공간]]의 번호로, 지시함수의 성질은 [[indicator-function|지시함수 항목]]의 번호로 인용한다. 0 이상인 실수의 합과 곱은 [[real-number-arithmetic]], [[real-order-axioms]], [[order-properties-of-reals]]에 의해 $0$ 이상인 실수이고, $[0, \infty]$의 정의에 의해 실수끼리의 합과 곱은 실수의 합과 곱이며, 모든 항이 실수인 유한 합은 실수의 유한 합이다. 이것을 아래에서 "실수의 계산"이라 부른다. $X = \emptyset$이면 $\int s\,d\mu = 0$인 것을 "빈 공간의 약속"이라 부른다.

**(1)** $X = \emptyset$이면 모든 $C_{i,j}$는 공집합이므로 (M1)에 의해 $\mu(C_{i,j}) = 0$이고 $[0, \infty]$의 (4)의 (i)에 의해 $\gamma_{i,j}\,\mu(C_{i,j}) = 0$이다. 유한 합의 (iv)에 의해 안쪽 합과 바깥쪽 합이 모두 $0$이고, 빈 공간의 약속에 의해 왼쪽도 $0$이다.

$X \ne \emptyset$이라 하고 $s$의 표준 표현을 $N$, $\alpha_m$, $A_m$($1 \le m \le N$)이라 하자. $D_{m,i,j} = A_m \cap C_{i,j}$로 두면 σ-대수의 (1)에 의해 $D_{m,i,j} \in \mathcal{M}$이다.

(가) $\alpha_m\,\mu(D_{m,i,j}) = \gamma_{i,j}\,\mu(D_{m,i,j})$이다. $D_{m,i,j}$에 원소 $x$가 있으면 표준 표현의 정의에 의해 $s(x) = \alpha_m$이고 가정에 의해 $s(x) = \gamma_{i,j}$이므로 $\alpha_m = \gamma_{i,j}$이다. $D_{m,i,j} = \emptyset$이면 (M1)과 $[0, \infty]$의 (4)의 (i)에 의해 두 쪽 모두 $0$이다.

(나) 각 $m$에서 $\mu(A_m) = \sum_{i=1}^{K} \sum_{j=1}^{L} \mu(D_{m,i,j})$이다. $m$과 $i$를 고정하면 $X$의 각 원소가 $C_{i,1}, \dots, C_{i,L}$ 가운데 많아야 하나에 속하므로 $D_{m,i,1}, \dots, D_{m,i,L}$은 서로소이다. 측도의 (1)의 (ii)의 기호로 $R_{m,i} = \bigcup_{j=1}^{L} D_{m,i,j}$로 두면, 그 항목의 (1)의 (ii)에 의해 $R_{m,i}$는 $\emptyset$으로 채운 집합열의 합집합이어서 (σ3)에 의해 $\mathcal{M}$의 원소이고 $\mu(R_{m,i}) = \sum_{j=1}^{L} \mu(D_{m,i,j})$이다. $i \ne i'$이면 $R_{m,i} \cap R_{m,i'} = \emptyset$이다: 공통 원소 $x$가 있으면 $x \in C_{i,j}$이고 $x \in C_{i',j'}$인 $j$, $j'$이 있어 $x$가 두 집합에 속하게 되어 가정에 어긋난다. 또 $\bigcup_{i=1}^{K} R_{m,i} = A_m$이다: 각 $R_{m,i}$는 $A_m$에 포함되고, $x \in A_m$이면 $x$는 어떤 $C_{i,j}$에 속하므로 $x \in D_{m,i,j} \subseteq R_{m,i}$이다. 측도의 (1)의 (ii)에 의해 $\mu(A_m) = \sum_{i=1}^{K} \mu(R_{m,i})$이고, 앞의 등식을 넣으면 된다.

(다) 각 $i$, $j$에서 $\mu(C_{i,j}) = \sum_{m=1}^{N} \mu(D_{m,i,j})$이다. 단순함수의 (2)에 의해 $X$의 각 원소는 $A_1, \dots, A_N$ 가운데 정확히 하나에 속하므로 $D_{1,i,j}, \dots, D_{N,i,j}$는 서로소이고 그 합집합(측도의 (1)의 (ii)의 기호)은 $C_{i,j}$이다. 측도의 (1)의 (ii)를 쓴다.

이제 정의, (나), 유한 합의 (iii)(상수배, 두 번), (가)와 유한 합의 (ii)에 의해
$$
\begin{aligned}
\int s\,d\mu &= \sum_{m=1}^{N} \alpha_m\,\mu(A_m) \\
&= \sum_{m=1}^{N} \sum_{i=1}^{K} \sum_{j=1}^{L} \alpha_m\,\mu(D_{m,i,j}) \\
&= \sum_{m=1}^{N} \sum_{i=1}^{K} \sum_{j=1}^{L} \gamma_{i,j}\,\mu(D_{m,i,j})
\end{aligned}
$$
이다. 유한 합의 (vii)을 $m$, $i$에 쓰고, 이어서 $i$마다 $m$, $j$에 쓰면 이 합은 $\sum_{i=1}^{K} \sum_{j=1}^{L} \sum_{m=1}^{N} \gamma_{i,j}\,\mu(D_{m,i,j})$이다. 유한 합의 (iii)과 (다)에 의해 안쪽 합은 $\gamma_{i,j} \sum_{m=1}^{N} \mu(D_{m,i,j}) = \gamma_{i,j}\,\mu(C_{i,j})$이다. $L = 1$일 때의 문장은 유한 합의 (i)의 $\sum_{j=1}^{1} t_j = t_1$이다.

**(2)** 단순함수의 (5)에 의해 $\chi_A$와 $c\chi_A$는 단순함수이고, 지시함수의 (1)에 의해 값이 $c$이거나 $0$이므로 0 이상인 단순함수이다. σ-대수의 (1)에 의해 $X - A \in \mathcal{M}$이고 $X$의 각 원소는 $A$와 $X - A$ 가운데 정확히 하나에 속한다. $K = 2$, $L = 1$, $C_{1,1} = A$, $C_{2,1} = X - A$, $\gamma_{1,1} = c$, $\gamma_{2,1} = 0$으로 (1)을 쓰면 유한 합의 (i)과 $[0, \infty]$의 (3)의 (i), (4)의 (i)에 의해
$$
\begin{aligned}
\int c\chi_A\,d\mu &= c\,\mu(A) + 0 \cdot \mu(X - A) \\
&= c\,\mu(A)
\end{aligned}
$$
이다. $c = 1$이면 $1\mu(A) = \mu(A)$이다. 값이 $c$인 상수함수는 지시함수의 (1)에 의해 $c\chi_X$이고, $c = 0$이면 $0 \cdot \mu(X) = 0$이다.

**(3)** (i) $X = \emptyset$이면 빈 공간의 약속에 의해 두 쪽이 $0$과 $c \cdot 0 = 0$이다. $X \ne \emptyset$이라 하고 $s$의 표준 표현을 $N$, $\alpha_m$, $A_m$이라 하자. 단순함수의 (5)에 의해 $cs$는 단순함수이고 실수의 계산에 의해 값이 $0$ 이상이다. 단순함수의 (2)에 의해 $X$의 각 원소는 $A_1, \dots, A_N$ 가운데 정확히 하나에 속하고 $A_m$ 위에서 $cs = c\alpha_m$이므로, $K = N$, $L = 1$, $C_{m,1} = A_m$, $\gamma_{m,1} = c\alpha_m$으로 (1)을 쓰면 $[0, \infty]$의 (4)의 (i)과 유한 합의 (iii)에 의해 $\int cs\,d\mu = \sum_{m=1}^{N} c\,\alpha_m\,\mu(A_m) = c \sum_{m=1}^{N} \alpha_m\,\mu(A_m) = c\int s\,d\mu$이다.

(ii) 단순함수의 (5)와 실수의 계산에 의해 $s + t$는 0 이상인 단순함수이다. $X = \emptyset$이면 세 적분이 모두 $0$이다. $X \ne \emptyset$이라 하고 $s$, $t$의 표준 표현을 $N$, $\alpha_i$, $A_i$와 $M$, $\beta_j$, $B_j$라 하자. 단순함수의 (4)(공통 세분)에 의해 $C_{i,j} = A_i \cap B_j$는 $\mathcal{M}$의 원소이고, $X$의 각 원소는 이 $NM$개의 집합 가운데 정확히 하나에 속하며, $C_{i,j}$ 위에서 $s = \alpha_i$, $t = \beta_j$, $s + t = \alpha_i + \beta_j$이다. (1)을 $s$, $t$, $s + t$에 같은 $C_{i,j}$로 쓰면
$$
\begin{aligned}
&\int s\,d\mu = \sum_{i=1}^{N} \sum_{j=1}^{M} \alpha_i\,\mu(C_{i,j}), \\
&\int t\,d\mu = \sum_{i=1}^{N} \sum_{j=1}^{M} \beta_j\,\mu(C_{i,j}), \\
&\int (s + t)\,d\mu \\
&\quad = \sum_{i=1}^{N} \sum_{j=1}^{M} (\alpha_i + \beta_j)\,\mu(C_{i,j})
\end{aligned}
$$
이다. $[0, \infty]$의 (4)의 (i)(ii)에 의해 $(\alpha_i + \beta_j)\,\mu(C_{i,j}) = \alpha_i\,\mu(C_{i,j}) + \beta_j\,\mu(C_{i,j})$이고, 유한 합의 (iii)(항별 합)을 안쪽과 바깥쪽에 쓰면 셋째 줄이 앞의 두 줄의 합이다.

(iii) $N$과 $s_k$, $c_k$를 고정하고, $0 \le n \le N$인 정수 $n$에 대하여 $u_n(x) = \sum_{k=1}^{n} c_k\,s_k(x)$인 함수 $u_n$이 0 이상인 단순함수이고 $\int u_n\,d\mu = \sum_{k=1}^{n} c_k \int s_k\,d\mu$임을 $n$에 대한 [[mathematical-induction|수학적 귀납법]]으로 보인다. $n = 0$이면 유한 합의 (i)에 의해 $u_0$은 값이 $0$인 상수함수이고, (2)에 의해 그 적분은 $0$이며 오른쪽도 빈 합 $0$이다. $n < N$에서 성립하면 유한 합의 (i)에 의해 모든 $x$에서 $u_{n+1}(x) = u_n(x) + c_{n+1}\,s_{n+1}(x)$이다. (i)에 의해 $c_{n+1}s_{n+1}$은 0 이상인 단순함수이고 적분이 $c_{n+1}\int s_{n+1}\,d\mu$이므로, (ii)와 귀납 가정과 유한 합의 (i)에 의해 $u_{n+1}$은 0 이상인 단순함수이고 $\int u_{n+1}\,d\mu = \sum_{k=1}^{n} c_k \int s_k\,d\mu + c_{n+1} \int s_{n+1}\,d\mu = \sum_{k=1}^{n+1} c_k \int s_k\,d\mu$이다.

**(4)** (2)에 의해 $\chi_{B_j}$는 0 이상인 단순함수이고 $\int \chi_{B_j}\,d\mu = \mu(B_j)$이다. (3)의 (iii)을 $s_j = \chi_{B_j}$, $c_j = \beta_j$로 쓰면 그 함수가 $u$이다.

**(5)** $X = \emptyset$이면 두 쪽이 $0$이다. $X \ne \emptyset$이면 (3)의 (ii)의 증명처럼 표준 표현과 공통 세분 $C_{i,j} = A_i \cap B_j$를 잡고 (1)을 쓰면 $\int s\,d\mu = \sum_{i}\sum_{j} \alpha_i\,\mu(C_{i,j})$, $\int t\,d\mu = \sum_{i}\sum_{j} \beta_j\,\mu(C_{i,j})$이다. 항마다 $\alpha_i\,\mu(C_{i,j}) \le \beta_j\,\mu(C_{i,j})$이다: $C_{i,j}$에 원소 $x$가 있으면 $\alpha_i = s(x) \le t(x) = \beta_j$이므로 $[0, \infty]$의 (4)의 (i)(iii)에 의해 그렇고, $C_{i,j} = \emptyset$이면 두 쪽이 $0$이다. 유한 합의 (iii)(비교)을 안쪽과 바깥쪽에 쓴다.

**(6)** (i) 모든 $x$에서 지시함수의 (3)에 의해 $\chi_{B_j}(x)\,\chi_A(x) = \chi_{B_j \cap A}(x)$이고, $\chi_A(x)$는 $0$ 이상인 실수이므로 유한 합의 (iii)과 실수의 계산에 의해
$$
s(x)\,\chi_A(x) = \sum_{j=1}^{N} \beta_j\,\chi_{B_j \cap A}(x)
$$
이다. σ-대수의 (1)에 의해 $B_j \cap A \in \mathcal{M}$이므로 (4)에 의해 $s\chi_A$는 0 이상인 단순함수이고 $\int_A s\,d\mu = \int s\chi_A\,d\mu = \sum_{j=1}^{N} \beta_j\,\mu(B_j \cap A)$이다. $X \ne \emptyset$이면 단순함수의 (2)가 표준 표현으로 이 꼴을 주고, $X = \emptyset$이면 $X$에 원소가 없으므로 $N = 0$인 꼴이 모든 $x \in X$에서 성립한다.

(ii) 지시함수의 (1)에 의해 $\chi_X(x) = 1$이므로 $s\chi_X = s$이고 $\int_X s\,d\mu = \int s\,d\mu$이다. $A \subseteq E$이면 지시함수의 (2)에 의해 $\chi_A(x) \le \chi_E(x)$이고 $s(x) \ge 0$이므로 실수의 계산에 의해 $s(x)\chi_A(x) \le s(x)\chi_E(x)$이며, (5)를 쓴다. $\mu(A) = 0$이면 (i)의 꼴에서 측도의 (2)에 의해 $\mu(B_j \cap A) \le \mu(A) = 0$이므로 $[0, \infty]$의 (2)의 (ii)(iv)에 의해 $\mu(B_j \cap A) = 0$이고, 각 항 $\beta_j \cdot 0 = 0$이므로 유한 합의 (iv)에 의해 합이 $0$이다. 끝으로 $A$ 밖에서 $s = 0$이면, $x \in A$에서 $s(x)\chi_A(x) = s(x)$, $x \notin A$에서 $s(x)\chi_A(x) = 0 = s(x)$이므로 $s\chi_A = s$이다.

**(7)** (6)의 (i)의 꼴 $N$, $\beta_j$, $B_j$를 잡자. [[measure-examples|측도의 예]]의 (6)의 (i)에 의해 축약 $\mu^{B_j}$는 $(X, \mathcal{M})$ 위의 측도이고 $\mu^{B_j}(A) = \mu(B_j \cap A)$이므로, 모든 $A \in \mathcal{M}$에서 $\nu_s(A) = \sum_{j=1}^{N} \beta_j\,\mu^{B_j}(A)$이다. 각 $\beta_j$는 $[0, \infty]$의 원소이므로 같은 항목의 (5)의 (iii)에 의해 $\nu_s$는 측도이다($N = 0$이면 영측도). $\nu_s(X) = \int_X s\,d\mu = \int s\,d\mu$는 (6)의 (ii)이다.
:::

## 예시와 반례

:::example[겹치는 두 집합으로 쓴 단순함수]
$X = \{1, 2, 3\}$, $\mathcal{M} = \mathscr{P}(X)$([[sigma-algebra|σ-대수]]의 (5))로 두고, [[measure-examples|측도의 예]]의 (2)의 디랙 측도와 (5)의 (iii)의 일차결합으로 $\mu = \delta_1 + 2\delta_2 + \infty\,\delta_3$을 잡습니다. 그러면 $\mu(\{1\}) = 1$, $\mu(\{2\}) = 2$, $\mu(\{3\}) = \infty$, $\mu(\{1, 2\}) = 1 + 2 + \infty \cdot 0 = 3$입니다.

$s = 2\chi_{\{1, 2\}} + 3\chi_{\{1\}}$은 $s(1) = 5$, $s(2) = 2$, $s(3) = 0$인 함수입니다. 값의 크기순 나열은 $0 < 2 < 5$이므로 표준 표현의 조각은 $\{3\}$, $\{2\}$, $\{1\}$이고, 정의에 의해
$$
\int s\,d\mu = 0 \cdot \infty + 2 \cdot 2 + 5 \cdot 1 = 9
$$
입니다. 첫 항은 $0 \cdot \infty = 0$입니다. (4)로 주어진 꼴에서 바로 계산하면 $2\,\mu(\{1, 2\}) + 3\,\mu(\{1\}) = 2 \cdot 3 + 3 \cdot 1 = 9$로 같습니다. (6)의 (i)로 $\{2, 3\}$ 위의 적분을 구하면 $2\,\mu(\{2\}) + 3\,\mu(\emptyset) = 4$이고, 표준 표현으로 구해도 $0 \cdot \mu(\{3\}) + 2\,\mu(\{2\}) + 5\,\mu(\emptyset) = 4$입니다.
:::

:::counterexample[음의 계수를 쓴 표현]
위 예시의 측도 $\mu$에서 $\chi_{\{1, 2\}}$는 모든 점에서 $\chi_X - \chi_{\{3\}}$과 값이 같습니다. 이 꼴에 (4)의 식을 흉내 내어 쓰면 $1 \cdot \mu(X) + (-1) \cdot \mu(\{3\})$이 되는데, $\mu(X) = \mu(\{3\}) = \infty$이고 $[0, \infty]$에는 음수도 뺄셈도 없으므로 이 식에는 값이 없습니다. 바른 값은 (2)에 의해 $\int \chi_{\{1, 2\}}\,d\mu = \mu(\{1, 2\}) = 3$입니다. (4)가 계수를 $0$ 이상으로 둔 것은 이 때문입니다.
:::

## 확인 질문

:::check[유한 측도이면 0 이상인 단순함수의 적분은 늘 실수인가?]
그렇습니다. $X = \emptyset$이면 적분은 $0$입니다. $X \ne \emptyset$이면 표준 표현의 각 $\mu(A_j)$는 [[measure|측도]]의 (2)의 (iii)에 의해 실수이고 $\alpha_j$도 실수이므로 곱 $\alpha_j\,\mu(A_j)$는 실수입니다. [[series-in-extended-nonnegative-reals|확장된 실수의 합]]의 (1)의 (iv)에 의해 실수인 항의 유한 합은 실수입니다.
:::

:::check[$s \le t$이고 $s \ne t$인데 적분이 같을 수 있는가?]
그럴 수 있습니다. $X = \{1, 2\}$, $\mathcal{M} = \mathscr{P}(X)$, $\mu = \delta_1$이라 하고 $s = \chi_{\{1\}}$, $t = \chi_X$로 두면 $s(2) = 0 < 1 = t(2)$이지만, (2)와 [[measure-examples|측도의 예]]의 (2)에 의해 $\int s\,d\mu = \delta_1(\{1\}) = 1$이고 $\int t\,d\mu = \delta_1(X) = 1$입니다. 두 함수가 다른 점 $2$의 측도가 $\delta_1(\{2\}) = 0$이기 때문입니다.
:::
