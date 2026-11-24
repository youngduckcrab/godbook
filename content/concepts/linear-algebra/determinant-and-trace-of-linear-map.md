---
title: 선형사상의 행렬식과 대각합
title_en: Determinant and Trace of a Linear Map
aliases: [선형사상의 행렬식, 선형사상의 대각합, 연산자의 행렬식, determinant of a linear map, trace of a linear map, determinant of an operator]
kind: definition
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: 차원이 1 이상인 유한차원 벡터공간 V 위의 선형사상 T 의 행렬식 det T 와 대각합 tr T 는 기저에 관한 행렬 [T]_ℬ 의 행렬식과 대각합이고, 기저를 어떻게 잡아도 같다. 합성, 항등함수, 가역성, 합과 스칼라배에 대한 성질을 함께 증명한다.
requires: [real-number-arithmetic, function, vector-space, vector-space-basic-properties, power-of-a-real-number, basis, standard-basis, dimension, linear-map, linear-map-examples, linear-maps-form-a-vector-space, composition-of-linear-maps, isomorphism, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-in-bases, change-of-basis-and-similarity, determinant, determinant-and-invertibility, determinant-of-product, trace, trace-of-product, similarity-invariants]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 1절, 1.3 Finding characteristic polynomial and eigenvalues of an abstract operator, p.101
    checked: original
    note: "출처는 4장 1.3(p.101)에서 추상 벡터공간의 연산자의 고윳값을 구하는 방법으로 '아무 기저를 잡아 그 기저에 관한 행렬의 고윳값을 구한다'를 들고, 두 기저에 관한 연산자의 행렬 [T]_AA 와 [T]_BB 가 닮았다는 것과 닮은 행렬의 행렬식이 같다는 것으로 연산자의 특성다항식이 기저에 따르지 않음을 보인다. 이 항목은 같은 논법으로 선형사상의 행렬식과 대각합을 정의한다. 출처에서 'determinant of (an|the) (operator|linear transformation)', 'trace of (an|the) (operator|linear)', 'det T', 'trace T' 로 책 전체를 찾았을 때 0건이었고, 4장 1.3 은 연산자에 대해 특성다항식만 정의한다. (2)–(6)의 진술과 증명은 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 어긋난 인용 번호 1건, 경계 경우에서 거짓이거나 넓던 설명 문장 3건, 뒤 단원을 예고하던 문장 1건, 겹치는 글자 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$V$가 유한차원 [[vector-space|벡터공간]]이고 $\dim V = n \ge 1$이라 하자([[dimension|유한차원과 차원]]). 그 항목의 (2)에 의해 $V$의 모든 [[basis|기저]]는 길이가 $n$이다. $T : V \to V$가 [[linear-map|선형사상]]이고 $\mathcal{B}$가 $V$의 기저이면 $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]에서 정한 $n \times n$ 행렬이다. $\det$는 [[determinant|행렬식]], $\operatorname{tr}$은 [[trace|대각합]]이다.

1. (기저와 무관) $\mathcal{A}$와 $\mathcal{B}$가 $V$의 기저이면 $\det [T]_{\mathcal{A}} = \det [T]_{\mathcal{B}}$이고 $\operatorname{tr} [T]_{\mathcal{A}} = \operatorname{tr} [T]_{\mathcal{B}}$이다.

$V$에는 기저가 있으므로(차원의 (1)), (1)에 의해 실수 $\det [T]_{\mathcal{B}}$는 $V$의 기저 $\mathcal{B}$를 어떻게 잡아도 같은 하나의 값이고, $\operatorname{tr} [T]_{\mathcal{B}}$도 그렇다. 이 두 값을 $T$의 **행렬식**(determinant)과 **대각합**(trace)이라 하고 $\det T$, $\operatorname{tr} T$로 쓴다. 곧 $V$의 모든 기저 $\mathcal{B}$에서 $\det T = \det [T]_{\mathcal{B}}$이고 $\operatorname{tr} T = \operatorname{tr} [T]_{\mathcal{B}}$이다. $\dim V = 0$인 공간의 선형사상에는 행렬식과 대각합을 정의하지 않는다. 합과 스칼라배 $S + T$, $cT$는 [[linear-maps-form-a-vector-space|선형사상의 공간]]의 것이고, $i_V$는 $V$ 위의 항등함수, $o$는 [[linear-map-examples|영사상]]이다.

2. ($\mathbb{R}^n$의 경우) $A$가 $n \times n$ [[matrix|행렬]]이고 $T_A : \mathbb{R}^n \to \mathbb{R}^n$이 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)에서 정한 선형사상이면 $\det T_A = \det A$이고 $\operatorname{tr} T_A = \operatorname{tr} A$이다.
3. (합성과 항등함수) $S$, $T : V \to V$가 선형사상이면 $\det(S \circ T) = \det S \cdot \det T$이고 $\operatorname{tr}(S \circ T) = \operatorname{tr}(T \circ S)$이다. 또 $\det i_V = 1$이고 $\operatorname{tr} i_V = n$이다.
4. (가역) $T$가 [[isomorphism|동형사상]](곧 전단사)인 것은 정확히 $\det T \ne 0$일 때이다.
5. (합과 스칼라배) $S$, $T : V \to V$가 선형사상이고 $c$가 실수이며 $\mathcal{B}$가 $V$의 기저이면 $[S + T]_{\mathcal{B}} = [S]_{\mathcal{B}} + [T]_{\mathcal{B}}$이고 $[cT]_{\mathcal{B}} = c[T]_{\mathcal{B}}$이다. 따라서 $\operatorname{tr}(S + T) = \operatorname{tr} S + \operatorname{tr} T$, $\operatorname{tr}(cT) = c \operatorname{tr} T$이고, $\det(cT) = c^n \det T$이다($c^n$은 [[power-of-a-real-number|실수의 거듭제곱]]). 특히 $[T - c\, i_V]_{\mathcal{B}} = [T]_{\mathcal{B}} - cI_n$이고 $\det(T - c\, i_V) = \det([T]_{\mathcal{B}} - cI_n)$이다. 또 $\det o = 0$이고 $\operatorname{tr} o = 0$이다.
6. ($\dim V = 1$) $n = 1$이면 $\det T = \operatorname{tr} T$이다.
:::

:::english
Let $V$ be a finite-dimensional vector space with $\dim V = n \ge 1$. By item (2) of the entry on dimension, every basis of $V$ has length $n$. If $T : V \to V$ is a linear map and $\mathcal{B}$ is a basis of $V$, then $[T]_{\mathcal{B}}$ is the $n \times n$ matrix defined in the entry on the matrix of a linear map with respect to bases. $\det$ is the determinant and $\operatorname{tr}$ is the trace.

1. (Independence of the basis) If $\mathcal{A}$ and $\mathcal{B}$ are bases of $V$, then $\det [T]_{\mathcal{A}} = \det [T]_{\mathcal{B}}$ and $\operatorname{tr} [T]_{\mathcal{A}} = \operatorname{tr} [T]_{\mathcal{B}}$.

Since $V$ has a basis (item (1) of the entry on dimension), by (1) the real number $\det [T]_{\mathcal{B}}$ is one and the same value whichever basis $\mathcal{B}$ of $V$ is taken, and so is $\operatorname{tr} [T]_{\mathcal{B}}$. These two values are called the **determinant** and the **trace** of $T$ and are written $\det T$ and $\operatorname{tr} T$. That is, $\det T = \det [T]_{\mathcal{B}}$ and $\operatorname{tr} T = \operatorname{tr} [T]_{\mathcal{B}}$ for every basis $\mathcal{B}$ of $V$. The determinant and the trace are not defined for linear maps on a space with $\dim V = 0$. The sum and scalar multiple $S + T$, $cT$ are those of the space of linear maps, $i_V$ is the identity function on $V$, and $o$ is the zero map.

2. (The case of $\mathbb{R}^n$) If $A$ is an $n \times n$ matrix and $T_A : \mathbb{R}^n \to \mathbb{R}^n$ is the linear map defined in item (2) of the entry on matrix–vector products, then $\det T_A = \det A$ and $\operatorname{tr} T_A = \operatorname{tr} A$.
3. (Composition and the identity) If $S$, $T : V \to V$ are linear maps, then $\det(S \circ T) = \det S \cdot \det T$ and $\operatorname{tr}(S \circ T) = \operatorname{tr}(T \circ S)$. Also $\det i_V = 1$ and $\operatorname{tr} i_V = n$.
4. (Invertibility) $T$ is an isomorphism (that is, bijective) exactly when $\det T \ne 0$.
5. (Sums and scalar multiples) If $S$, $T : V \to V$ are linear maps, $c$ is a real number and $\mathcal{B}$ is a basis of $V$, then $[S + T]_{\mathcal{B}} = [S]_{\mathcal{B}} + [T]_{\mathcal{B}}$ and $[cT]_{\mathcal{B}} = c[T]_{\mathcal{B}}$. Hence $\operatorname{tr}(S + T) = \operatorname{tr} S + \operatorname{tr} T$, $\operatorname{tr}(cT) = c \operatorname{tr} T$, and $\det(cT) = c^n \det T$ ($c^n$ is the power of a real number). In particular $[T - c\, i_V]_{\mathcal{B}} = [T]_{\mathcal{B}} - cI_n$ and $\det(T - c\, i_V) = \det([T]_{\mathcal{B}} - cI_n)$. Also $\det o = 0$ and $\operatorname{tr} o = 0$.
6. ($\dim V = 1$) If $n = 1$, then $\det T = \operatorname{tr} T$.
:::

## 직관

행렬식과 대각합은 정사각행렬에 붙는 수인데, 선형사상 $T : V \to V$는 기저를 하나 잡아야 행렬로 적힙니다. 기저를 바꾸면 행렬은 바뀌지만, [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (3)에 의해 바뀐 행렬은 원래 행렬과 닮았고, [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)에 의해 닮은 행렬의 행렬식과 대각합은 같습니다. 그래서 어느 기저로 계산해도 같은 수가 나오고, 그 수를 선형사상 자신의 행렬식과 대각합이라 부를 수 있습니다. 같은 길이를 여러 자로 재어도 같은 값이 나오면 그 값을 길이라 부르는 것과 같습니다. 비유와 다른 점은, 자마다 눈금이 다른 길이와 달리 여기서는 바뀌는 것이 행렬 전체이고 같게 남는 것이 행렬식과 대각합이라는 수 두 개뿐이라는 것입니다.

$\dim V = 0$이면 $V = \{0_V\}$이고 기저는 빈 열이며, 이 사이트에는 크기 $0$인 행렬이 없으므로 행렬식과 대각합을 정의하지 않습니다.

(5)에서 대각합은 합과 스칼라배를 그대로 옮기지만 행렬식은 그렇지 않습니다. 스칼라배는 $c$가 아니라 $c^n$으로 나오고, 합의 행렬식은 행렬식의 합과 다를 수 있습니다(아래 반례).

## 성질의 증명

:::proof
아래에서 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]은 $W = V$, $\mathcal{C} = \mathcal{B}$로 두고 쓴다. 그 항목은 기저의 길이가 $n$이라는 것을 가정하는데, 진술 첫머리에서 본 대로 $V$의 모든 기저의 길이는 $n$이다.

**(1)의 증명.** $Q = [i_V]_{\mathcal{B}\mathcal{A}}$라 하자. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (2)에 의해 $Q$는 가역인 $n \times n$ 행렬이고, 같은 항목의 (3)에 의해 $[T]_{\mathcal{A}} = Q^{-1}[T]_{\mathcal{B}}Q$이다. 따라서 닮음의 정의에 의해 $[T]_{\mathcal{A}}$와 $[T]_{\mathcal{B}}$는 닮았고, [[similarity-invariants|닮은 행렬의 행렬식과 대각합]]의 (1)에 의해 두 행렬의 행렬식과 대각합은 각각 같다.

**(2)의 증명.** [[standard-basis|표준기저]]의 (2)에 의해 $\mathcal{E} = e_1, \dots, e_n$은 $\mathbb{R}^n$의 기저이다. 기저에 관한 행렬의 (7)에 의해 $[T_A]_{\mathcal{E}} = [T_A]_{\mathcal{E}\mathcal{E}} = [T_A]$이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[T_A] = A$이다. 따라서 $\det T_A = \det [T_A]_{\mathcal{E}} = \det A$이고 $\operatorname{tr} T_A = \operatorname{tr} A$이다.

**(3)의 증명.** $\mathcal{B}$를 $V$의 기저라 하자. [[composition-of-linear-maps|선형사상의 합성]]의 (1)에 의해 $S \circ T$와 $T \circ S$는 선형사상이고, 기저에 관한 행렬의 (4)를 $U = V$, $\mathcal{A} = \mathcal{B}$로 두고 쓰면 $[S \circ T]_{\mathcal{B}} = [S]_{\mathcal{B}}[T]_{\mathcal{B}}$이고 $[T \circ S]_{\mathcal{B}} = [T]_{\mathcal{B}}[S]_{\mathcal{B}}$이다. [[determinant-of-product|곱의 행렬식]]의 (1)에 의해 $\det(S \circ T) = \det([S]_{\mathcal{B}}[T]_{\mathcal{B}}) = \det S \cdot \det T$이고, [[trace-of-product|곱의 대각합]]의 (1)에 의해 $\operatorname{tr}(S \circ T) = \operatorname{tr}([S]_{\mathcal{B}}[T]_{\mathcal{B}}) = \operatorname{tr}([T]_{\mathcal{B}}[S]_{\mathcal{B}}) = \operatorname{tr}(T \circ S)$이다. [[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_V$는 선형사상이고, 기저에 관한 행렬의 (5)에 의해 $[i_V]_{\mathcal{B}} = I_n$이다. [[determinant|행렬식]]의 (1)의 (iii)에 의해 $\det i_V = \det I_n = 1$이고, [[trace|대각합]]의 (4)에 의해 $\operatorname{tr} i_V = \operatorname{tr} I_n = n$이다.

**(4)의 증명.** $\mathcal{B}$를 $V$의 기저라 하자. 기저에 관한 행렬의 (6)에 의해 $T$가 동형사상인 것은 정확히 $[T]_{\mathcal{B}}$가 가역일 때이고, [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 그것은 정확히 $\det [T]_{\mathcal{B}} = \det T \ne 0$일 때이다. [[isomorphism|동형사상]]의 정의에 의해 선형사상 $T$가 동형사상인 것은 정확히 전단사일 때이다.

**(5)의 증명.** [[linear-maps-form-a-vector-space|선형사상의 공간]]의 (1)에 의해 $S + T$와 $cT$는 선형사상이다. $v \in V$라 하자. 선형사상의 공간의 정의와 기저에 관한 행렬의 (1), (3), 그리고 [[matrix-vector-product|행렬과 벡터의 곱]]의 (4)에 의해

$$
\begin{aligned}
[(S + T)v]_{\mathcal{B}} &= [Sv + Tv]_{\mathcal{B}} \\
&= [Sv]_{\mathcal{B}} + [Tv]_{\mathcal{B}} \\
&= [S]_{\mathcal{B}}[v]_{\mathcal{B}} + [T]_{\mathcal{B}}[v]_{\mathcal{B}} \\
&= ([S]_{\mathcal{B}} + [T]_{\mathcal{B}})[v]_{\mathcal{B}}
\end{aligned}
$$

이다. 이것이 모든 $v$에서 성립하므로 기저에 관한 행렬의 (3)의 뒷부분에 의해 $[S + T]_{\mathcal{B}} = [S]_{\mathcal{B}} + [T]_{\mathcal{B}}$이다. 같은 방법으로 $[(cT)v]_{\mathcal{B}} = [c(Tv)]_{\mathcal{B}} = c[Tv]_{\mathcal{B}} = c([T]_{\mathcal{B}}[v]_{\mathcal{B}}) = (c[T]_{\mathcal{B}})[v]_{\mathcal{B}}$이므로 $[cT]_{\mathcal{B}} = c[T]_{\mathcal{B}}$이다.

따라서 [[trace|대각합]]의 (1)에 의해 $\operatorname{tr}(S + T) = \operatorname{tr}([S]_{\mathcal{B}} + [T]_{\mathcal{B}}) = \operatorname{tr} S + \operatorname{tr} T$이고 $\operatorname{tr}(cT) = \operatorname{tr}(c[T]_{\mathcal{B}}) = c \operatorname{tr} T$이다. [[determinant-of-product|곱의 행렬식]]의 (4)에 의해 $\det(cT) = \det(c[T]_{\mathcal{B}}) = c^n \det T$이다.

$T - c\, i_V$는 벡터공간 $L(V, V)$에서의 차이고, [[vector-space-basic-properties|벡터공간의 기본 성질]]의 (B2)와 (B9)에 의해 $T - c\, i_V = T + (-c)i_V$이다. 위에서 보인 두 등식과 기저에 관한 행렬의 (5)에 의해 $[T + (-c)i_V]_{\mathcal{B}} = [T]_{\mathcal{B}} + (-c)[i_V]_{\mathcal{B}} = [T]_{\mathcal{B}} + (-c)I_n$이고, 다시 (B9)와 (B2)를 $M_{n \times n}$에 쓰면 이것은 $[T]_{\mathcal{B}} - cI_n$이다. 따라서 $\det(T - c\, i_V) = \det [T - c\, i_V]_{\mathcal{B}} = \det([T]_{\mathcal{B}} - cI_n)$이다.

끝으로 모든 $v \in V$에서 $(0\, i_V)v = 0 v = 0_V = ov$이므로((B3)) 함수의 같음에 의해 $0\, i_V = o$이다. 위에서 보인 것과 곱의 행렬식의 (4)의 $c = 0$인 경우에 의해 $\det o = \det(0 [i_V]_{\mathcal{B}}) = 0$이고, 대각합의 (1)과 [[real-number-arithmetic|실수의 계산 법칙]]의 (K9)에 의해 $\operatorname{tr} o = 0 \cdot \operatorname{tr} i_V = 0$이다.

**(6)의 증명.** $n = 1$이면 $V$의 기저 $\mathcal{B}$에 대하여 $[T]_{\mathcal{B}}$는 $1 \times 1$ 행렬이다. 그 $(1, 1)$ 성분을 $t$라 하면 [[determinant|행렬식]]의 (2)에 의해 $\det T = t$이고 [[trace|대각합]]의 (5)에 의해 $\operatorname{tr} T = t$이다. $\blacksquare$
:::

## 예시와 반례

:::example[두 기저로 계산한 행렬식과 대각합]
$M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$이고 $T = T_M : \mathbb{R}^2 \to \mathbb{R}^2$라 합시다. (2)에 의해 $\det T = \det M = 2 \cdot 2 - 1 \cdot 1 = 3$이고 $\operatorname{tr} T = 4$입니다. 다른 기저 $\mathcal{B} = b_1, b_2$, $b_1 = (1, 1)$, $b_2 = (0, 1)$로 계산해 봅시다. 열이 $b_1$, $b_2$인 행렬은 $B = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$이고, $\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$을 양쪽에서 곱하면 $I_2$가 되므로 이것이 $B^{-1}$입니다. [[change-of-basis-and-similarity|기저 변환과 닮은 행렬]]의 (7)에 의해

$$
\begin{aligned}
[T]_{\mathcal{B}} &= B^{-1}MB \\
&= \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} \begin{pmatrix} 3 & 1 \\ 3 & 2 \end{pmatrix} \\
&= \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}
\end{aligned}
$$

입니다($MB = \begin{pmatrix} 3 & 1 \\ 3 & 2 \end{pmatrix}$). 이 행렬은 $M$과 다르지만 행렬식은 $3 \cdot 1 - 0 \cdot 1 = 3$, 대각합은 $3 + 1 = 4$로 같습니다.
:::

:::counterexample[det(S + T) 가 det S + det T 와 다른 예]
$V = \mathbb{R}^2$이고 $S = T = i_V$라 합시다. (3)에 의해 $\det S + \det T = 1 + 1 = 2$입니다. 한편 모든 $v$에서 $(i_V + i_V)v = v + v = 1v + 1v = 2v$이므로([[vector-space|벡터공간]]의 (V5)와 (V8)) $S + T = 2\, i_V$이고, (5)와 (3)에 의해 $\det(S + T) = 2^2 \det i_V = 4$입니다. 대각합은 $\operatorname{tr}(S + T) = 4 = 2 + 2 = \operatorname{tr} S + \operatorname{tr} T$로 (5)와 맞습니다.
:::

## 확인 질문

:::check[$\dim V = 3$이고 선형사상 $T : V \to V$의 행렬식이 $2$이면 $\det(2T)$와 $\det(T \circ T)$는 무엇인가?]
(5)에 의해 $\det(2T) = 2^3 \det T = 8 \cdot 2 = 16$이고, (3)에 의해 $\det(T \circ T) = \det T \cdot \det T = 4$입니다.
:::

:::check[각 $(x_1, x_2) \in \mathbb{R}^2$에서 값이 $(x_2, x_1)$인 선형사상 $T : \mathbb{R}^2 \to \mathbb{R}^2$의 행렬식과 대각합은 무엇인가? $T$는 동형사상인가?]
$A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이면 [[matrix-vector-product|행렬과 벡터의 곱]]의 정의에 의해 $Ax = x_1(0, 1) + x_2(1, 0) = (x_2, x_1)$이므로 함수의 같음에 의해 $T = T_A$입니다. (2)에 의해 $\det T = \det A = 0 \cdot 0 - 1 \cdot 1 = -1$이고 $\operatorname{tr} T = 0 + 0 = 0$입니다. $\det T \ne 0$이므로 (4)에 의해 $T$는 동형사상입니다.
:::
