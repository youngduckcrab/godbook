---
title: 내적의 예
title_en: Examples of Inner Products
aliases: [가중 내적, 프로베니우스 내적, 기저로 옮긴 내적, weighted inner product, Frobenius inner product, examples of inner products]
kind: proposition
field: linear-algebra
msc: ["15A63"]
level: undergrad
summary: ℝⁿ 에서 가중치를 곱한 합 w₁x₁y₁ + ⋯ + wₙxₙyₙ 는 가중치가 모두 양수일 때 정확히 내적이다. 행렬의 공간에서 tr(AᵀB) 는 성분끼리의 곱의 합이고 내적이다. 기저의 좌표벡터의 표준내적은 내적이어서 유한차원 벡터공간에는 모두 내적이 있다. ℝ² 위의 x₁y₁ − x₂y₂ 는 내적이 아니다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, function, injective-surjective-bijective, real-function-space, finite-sum-of-vectors, standard-basis, linear-map, isomorphism, basis, dimension, matrix, transpose, trace, double-sum-interchange, geometric-at-most-algebraic, matrix-in-bases, inner-product-space, standard-inner-product]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 5장 1절, 1.3.1 Examples 의 Example 1.3, p.120; 1절 연습문제 1.5, pp.124–125; 2절 연습문제 2.4, p.129; 7장 5절 Positive definite forms and inner products, pp.214–215
    checked: original
    note: "(1)의 가중치를 곱한 합은 출처 7장 5절(pp.214–215)이 양의 정부호 행렬 G 로 정하는 G-내적 (x, y)_G := (Gx, y) 에서 G 가 대각행렬인 경우와 같다. (1)의 (iii)은 출처 6장 3.1(p.171)의 Theorem 3.1 의 증명이 '대각행렬이 양의 정부호인 것은 정확히 대각성분이 모두 양수일 때'라고 적는 것과 같은 결론이다. 이 항목은 행렬과 고윳값 없이 표준기저를 넣어 증명했다. (2)는 출처 Example 1.3(p.120)의 프로베니우스 내적이다. 출처는 (A, B) = trace(B*A) 로 정하고 성질 1–4 의 확인을 '쉽다'고 하며, trace(B*A) 가 성분끼리의 곱의 합이므로 ℂ^{mn} 의 표준내적과 같다고 적는다. 이 항목은 실수 행렬에 tr(AᵀB) 로 쓰고(조건 (i)에 의해 tr(BᵀA) 와 같다), 증명은 열마다 표준내적으로 나눠 이 사이트가 썼다. M_{m×n} 과 ℝ^{mn} 사이의 대응은 쓰지 않는다. (3)의 (ii)는 출처 2절 연습문제 2.4(p.129)의 '기저를 정규직교로 선언해 내적을 정한다'와 같은 내용이고, 거꾸로 정규직교 기저의 좌표로 표준내적을 계산한다는 것은 출처 2절 Remark 2.8 과 연습문제 2.3(p.128)이다. (3)의 (i)과 증명은 이 사이트가 썼다. (3)의 (iii)은 출처가 명제로 적지 않지만, 기저가 있는 공간에서는 연습문제 2.4 에서 바로 나온다. (4)는 출처 1절 연습문제 1.5 의 a)(p.125)와 같은 함수이다. 출처는 그것이 내적이 아닌 까닭을 설명하라고만 한다. 확인 질문 '실수 $c$에 대하여 $\\mathbb{R}^2$ 위의 $x_1 y_1 + c\\,x_2 y_2$가 내적인 것은 $c$가 어떤 값일 때인가?'는 (4)와 출처 연습문제 1.5 의 a)를 가중치 하나로 넓힌 것이다. 확인 질문 '$M_{n \\times n}$의 프로베니우스 내적에서 $\\operatorname{tr}(I_n^T A)$는 무엇인가?'는 출처 Example 1.3(p.120)의 (A, B) = trace(B*A) 에 B = I 를 넣은 것이다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(증명 표본 통독, 출처 검색 표본). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
내적과 내적의 조건 (i)–(iii)은 [[inner-product-space|내적과 내적공간]]의 것이고, $\mathbb{R}^n$의 표준내적 $\langle x, y \rangle$는 [[standard-inner-product|ℝⁿ 의 표준내적]]의 것이다. $x \in \mathbb{R}^n$의 $k$에서의 값을 $x_k$로 쓰고, $e_1, \dots, e_n$은 [[standard-basis|표준기저]]이다. 아래의 $\langle \cdot, \cdot \rangle_w$, $\langle \cdot, \cdot \rangle_S$, $\langle \cdot, \cdot \rangle_{\mathcal{B}}$는 이 항목 안에서만 쓰는 이름이다.

1. (가중치를 곱한 합) $n$이 자연수이고 $w_1, \dots, w_n$이 길이 $n$인 실수의 열이라 하자. $x, y \in \mathbb{R}^n$에 대하여 $k$번째 항이 $w_k(x_k y_k)$인 길이 $n$인 실수의 열의 합을 $\langle x, y \rangle_w = w_1 x_1 y_1 + \cdots + w_n x_n y_n$으로 쓴다.
   - (i) 모든 실수의 열 $w$에 대하여, $(x, y)$에서의 값이 $\langle x, y \rangle_w$인 함수 $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$는 내적의 조건 (i)과 (ii)를 만족한다.
   - (ii) 모든 $k \in \{1, \dots, n\}$에서 $\langle e_k, e_k \rangle_w = w_k$이다.
   - (iii) 이 함수가 $\mathbb{R}^n$ 위의 내적인 것은 정확히 모든 $k$에서 $0 < w_k$일 때이다. 어떤 $k$에서 $w_k = 0$이면 $e_k$는 영벡터가 아닌데 $\langle e_k, e_k \rangle_w = 0$이고, 어떤 $k$에서 $w_k < 0$이면 $\langle e_k, e_k \rangle_w < 0$이다.
   - (iv) 모든 $k$에서 $w_k = 1$이면 $\langle x, y \rangle_w = \langle x, y \rangle$이다.
2. (행렬의 공간) $m$, $n$이 자연수이고 $A$, $B$가 $m \times n$ [[matrix|행렬]]이라 하자. $A^T B$와 $B^T A$는 $n \times n$ 행렬이고([[transpose|전치행렬]]), 그 [[trace|대각합]]에 대하여
   $$
   \begin{aligned}
   &\operatorname{tr}(A^T B) = \operatorname{tr}(B^T A) \\
   &= \langle \mathbf{a}_1, \mathbf{b}_1 \rangle + \cdots \\
   &\quad + \langle \mathbf{a}_n, \mathbf{b}_n \rangle \\
   &= (a_{1,1} b_{1,1} + \cdots + a_{m,1} b_{m,1}) \\
   &\quad + \cdots \\
   &\quad + (a_{1,n} b_{1,n} + \cdots + a_{m,n} b_{m,n}) \\
   &= (a_{1,1} b_{1,1} + \cdots + a_{1,n} b_{1,n}) \\
   &\quad + \cdots \\
   &\quad + (a_{m,1} b_{m,1} + \cdots + a_{m,n} b_{m,n})
   \end{aligned}
   $$
   이다. 둘째 등호의 오른쪽은 $k$번째 항이 $\mathbb{R}^m$의 표준내적 $\langle \mathbf{a}_k, \mathbf{b}_k \rangle$인 길이 $n$인 열의 합이다. 셋째 등호의 오른쪽은 성분끼리의 곱을 열마다 먼저 더한 이중 합, 곧 $k$번째 항이 $a_{1,k} b_{1,k} + \cdots + a_{m,k} b_{m,k}$인 길이 $n$인 열의 합이고, 넷째 등호의 오른쪽은 행마다 먼저 더한 이중 합, 곧 $j$번째 항이 $a_{j,1} b_{j,1} + \cdots + a_{j,n} b_{j,n}$인 길이 $m$인 열의 합이다. 특히 $\operatorname{tr}(A^T A)$는 성분의 제곱 $a_{j,k} a_{j,k}$를 모두 더한 이 두 꼴의 이중 합이다. 또 $(A, B)$에서의 값이 $\operatorname{tr}(A^T B)$인 함수 $M_{m \times n} \times M_{m \times n} \to \mathbb{R}$는 ([[matrix|행렬]]의 (1)의 벡터공간) $M_{m \times n}$ 위의 내적이다. 이 내적을 **프로베니우스 내적**(Frobenius inner product)이라 한다.
3. (기저로 옮긴 내적)
   - (i) $U$, $V$가 벡터공간이고 $\langle \cdot, \cdot \rangle$이 $V$ 위의 내적이며 $S : U \to V$가 [[injective-surjective-bijective|단사]]인 [[linear-map|선형사상]]이면, $(u, u')$에서의 값이 $\langle u, u' \rangle_S = \langle S u, S u' \rangle$인 함수 $U \times U \to \mathbb{R}$는 $U$ 위의 내적이다.
   - (ii) $V$가 벡터공간이고 $n$이 자연수이며 $\mathcal{B} = b_1, \dots, b_n$이 $V$의 [[basis|기저]]라 하자. [[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 좌표벡터 $[x]_{\mathcal{B}} \in \mathbb{R}^n$으로 정한 $\langle x, y \rangle_{\mathcal{B}} = \langle [x]_{\mathcal{B}}, [y]_{\mathcal{B}} \rangle$를 $(x, y)$에서의 값으로 갖는 함수 $V \times V \to \mathbb{R}$는 $V$ 위의 내적이다. $x = x_1 b_1 + \cdots + x_n b_n$, $y = y_1 b_1 + \cdots + y_n b_n$이면 $\langle x, y \rangle_{\mathcal{B}} = x_1 y_1 + \cdots + x_n y_n$이다. 특히 $\langle b_j, b_k \rangle_{\mathcal{B}}$는 $j = k$일 때 $1$이고 $j \ne k$일 때 $0$이다.
   - (iii) [[dimension|유한차원]]인 모든 벡터공간 위에는 내적이 있다.
4. (내적이 아닌 함수) $\mathbb{R}^2$ 위에서 $(x, y)$에서의 값이 $x_1 y_1 - x_2 y_2$인 함수는 내적의 조건 (i)과 (ii)를 만족하지만 내적이 아니다. $(e_2, e_2)$에서의 값이 $-1$이고, 영벡터가 아닌 $x = (1, 1)$에 대하여 $(x, x)$에서의 값이 $0$이다.
:::

:::english
Inner products and the conditions (i)–(iii) for an inner product are as in the entry on inner product spaces, and the standard inner product $\langle x, y \rangle$ on $\mathbb{R}^n$ is as in the entry on it. The value of $x \in \mathbb{R}^n$ at $k$ is written $x_k$, and $e_1, \dots, e_n$ is the standard basis. The names $\langle \cdot, \cdot \rangle_w$, $\langle \cdot, \cdot \rangle_S$, $\langle \cdot, \cdot \rangle_{\mathcal{B}}$ below are used only within this entry.

1. (Weighted sums) Let $n$ be a natural number and $w_1, \dots, w_n$ a sequence of $n$ real numbers. For $x, y \in \mathbb{R}^n$, write $\langle x, y \rangle_w = w_1 x_1 y_1 + \cdots + w_n x_n y_n$ for the sum of the sequence of $n$ real numbers whose $k$-th term is $w_k(x_k y_k)$.
   - (i) For every sequence $w$ of real numbers, the function $\mathbb{R}^n \times \mathbb{R}^n \to \mathbb{R}$ whose value at $(x, y)$ is $\langle x, y \rangle_w$ satisfies conditions (i) and (ii) for an inner product.
   - (ii) For every $k \in \{1, \dots, n\}$, $\langle e_k, e_k \rangle_w = w_k$.
   - (iii) This function is an inner product on $\mathbb{R}^n$ exactly when $0 < w_k$ for every $k$. If $w_k = 0$ for some $k$, then $e_k$ is not the zero vector but $\langle e_k, e_k \rangle_w = 0$; if $w_k < 0$ for some $k$, then $\langle e_k, e_k \rangle_w < 0$.
   - (iv) If $w_k = 1$ for every $k$, then $\langle x, y \rangle_w = \langle x, y \rangle$.
2. (Spaces of matrices) Let $m$, $n$ be natural numbers and $A$, $B$ be $m \times n$ matrices. Then $A^T B$ and $B^T A$ are $n \times n$ matrices, and for their traces
   $$
   \begin{aligned}
   &\operatorname{tr}(A^T B) = \operatorname{tr}(B^T A) \\
   &= \langle \mathbf{a}_1, \mathbf{b}_1 \rangle + \cdots \\
   &\quad + \langle \mathbf{a}_n, \mathbf{b}_n \rangle \\
   &= (a_{1,1} b_{1,1} + \cdots + a_{m,1} b_{m,1}) \\
   &\quad + \cdots \\
   &\quad + (a_{1,n} b_{1,n} + \cdots + a_{m,n} b_{m,n}) \\
   &= (a_{1,1} b_{1,1} + \cdots + a_{1,n} b_{1,n}) \\
   &\quad + \cdots \\
   &\quad + (a_{m,1} b_{m,1} + \cdots + a_{m,n} b_{m,n}) .
   \end{aligned}
   $$
   The right side of the second equality is the sum of the sequence of $n$ terms whose $k$-th term is the standard inner product $\langle \mathbf{a}_k, \mathbf{b}_k \rangle$ on $\mathbb{R}^m$. The right side of the third equality is the double sum of the entrywise products added column by column first, that is, the sum of the sequence of $n$ terms whose $k$-th term is $a_{1,k} b_{1,k} + \cdots + a_{m,k} b_{m,k}$; the right side of the fourth equality is the double sum added row by row first, that is, the sum of the sequence of $m$ terms whose $j$-th term is $a_{j,1} b_{j,1} + \cdots + a_{j,n} b_{j,n}$. In particular $\operatorname{tr}(A^T A)$ is the double sum, in either of these two forms, of all the squares $a_{j,k} a_{j,k}$ of the entries. Moreover, the function $M_{m \times n} \times M_{m \times n} \to \mathbb{R}$ whose value at $(A, B)$ is $\operatorname{tr}(A^T B)$ is an inner product on $M_{m \times n}$ (the vector space of item (1) of the entry on matrices). This inner product is called the **Frobenius inner product**.
3. (Inner products carried over by a basis)
   - (i) If $U$, $V$ are vector spaces, $\langle \cdot, \cdot \rangle$ is an inner product on $V$, and $S : U \to V$ is an injective linear map, then the function $U \times U \to \mathbb{R}$ whose value at $(u, u')$ is $\langle u, u' \rangle_S = \langle S u, S u' \rangle$ is an inner product on $U$.
   - (ii) Let $V$ be a vector space, $n$ a natural number and $\mathcal{B} = b_1, \dots, b_n$ a basis of $V$. Using the coordinate vectors $[x]_{\mathcal{B}} \in \mathbb{R}^n$ of the entry on matrices with respect to bases, the function $V \times V \to \mathbb{R}$ whose value at $(x, y)$ is $\langle x, y \rangle_{\mathcal{B}} = \langle [x]_{\mathcal{B}}, [y]_{\mathcal{B}} \rangle$ is an inner product on $V$. If $x = x_1 b_1 + \cdots + x_n b_n$ and $y = y_1 b_1 + \cdots + y_n b_n$, then $\langle x, y \rangle_{\mathcal{B}} = x_1 y_1 + \cdots + x_n y_n$. In particular $\langle b_j, b_k \rangle_{\mathcal{B}}$ is $1$ if $j = k$ and $0$ if $j \ne k$.
   - (iii) Every finite-dimensional vector space has an inner product.
4. (A function that is not an inner product) On $\mathbb{R}^2$, the function whose value at $(x, y)$ is $x_1 y_1 - x_2 y_2$ satisfies conditions (i) and (ii) for an inner product but is not an inner product: its value at $(e_2, e_2)$ is $-1$, and and for the nonzero vector $x = (1, 1)$ its value at $(x, x)$ is $0$.
:::

## 직관

내적은 정의의 세 조건만 만족하면 되므로 같은 벡터공간 위에도 여러 가지가 있습니다. (1)은 표준내적의 각 항에 정해진 수를 곱한 것입니다. 시험 과목마다 반영 비율을 달리 주어 총점을 매기는 것과 비슷합니다. 대칭과 선형성은 비율이 무엇이든 유지되지만, 어떤 과목의 비율이 $0$이면 그 과목만 잘한 학생의 총점이 $0$이 되고, 비율이 음수이면 그 과목을 잘할수록 총점이 깎입니다. 양의 정부호가 깨지는 것은 이 두 경우이고 (1)의 (iii)이 정확히 그것을 말합니다. 비유와 다른 점은 성분과 내적의 값이 음수일 수 있다는 것입니다.

(2)는 $m \times n$ 행렬을 성분 $mn$개를 늘어놓은 것으로 보고 성분끼리 곱해 더한 것입니다. 열마다 표준내적을 구해 더하든, 행마다 곱을 더한 것을 다시 더하든 같은 수입니다. 그 수를 $A^T B$의 대각합으로 쓸 수 있다는 것이 식의 첫 부분이고, $\operatorname{tr}(A^T B) = \operatorname{tr}(B^T A)$는 대칭에 해당합니다. $n = 1$이면 $M_{m \times 1}$의 행렬은 열이 하나이고 프로베니우스 내적은 그 열의 표준내적입니다.

(3)은 내적을 단사인 선형사상을 거쳐 "끌어오는" 방법입니다. 단사가 필요한 것은 양의 정부호 때문입니다. $S u = 0_V$인 영벡터가 아닌 $u$가 있으면 그 $u$에서 $\langle u, u \rangle_S = 0$이 됩니다. 좌표벡터를 보내는 사상은 동형사상이므로 단사이고, 기저 $\mathcal{B}$의 원소들이 마치 표준기저처럼 서로 내적이 $0$이고 자기 자신과는 $1$이 되는 내적이 생깁니다. 기저에 따라 내적이 달라질 수 있습니다(아래 예시).

## 증명

:::idea
(1)과 (2)는 항마다 $0$ 이상인 수의 합이 $0$이면 항마다 $0$이라는 [[geometric-at-most-algebraic|항마다 비교한 합]]으로 양의 정부호를 보이고, (3)은 $V$의 내적의 조건을 $S$로 옮긴다.
:::

:::hint
(1)의 (iii)에서 "양수가 아닌 $w_k$가 하나라도 있으면 내적이 아니다"는 그 $k$의 $e_k$를 넣어 보면 됩니다.
:::

:::hint
(2)는 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)로 $A^T B$의 대각성분을 열끼리의 내적으로 바꾸면, 조건을 열마다 표준내적의 조건으로 확인할 수 있습니다.
:::

:::proof
아래에서 (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것, (H0)–(H7)은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것, (T1), (T3)은 [[linear-map|선형사상]]의 것이다. 실수의 합은 $V = \mathbb{R}$인 벡터의 유한 합이고, 길이가 같고 모든 자리의 항이 같은 두 실수의 열의 합은 같다("같은 열의 합"). 순서의 성질은 [[order-properties-of-reals|실수의 순서의 성질]]의 번호로 인용한다. 각 $(x, y)$에 실수가 하나씩 정해지면 [[real-function-space|(G)]]에 의해 그 값을 갖는 함수가 있으므로, 아래의 함수들은 모두 함수로 정해진다.

**(1)의 증명.** (i) (K1)과 (K2)에 의해 모든 $k$에서 $w_k(x_k y_k) = w_k(y_k x_k)$이므로 같은 열의 합에 의해 $\langle x, y \rangle_w = \langle y, x \rangle_w$이다. $x, y, z \in \mathbb{R}^n$과 실수 $\alpha$, $\beta$에서 $(\alpha x + \beta y)_k = \alpha x_k + \beta y_k$이므로([[real-function-space|실숫값 함수의 공간]]의 $\mathbb{R}^n$ 단락), (K3), (K12)의 (i), (K1), (K2)에 의해 $k$번째 항은 $w_k((\alpha x_k + \beta y_k) z_k) = \alpha(w_k(x_k z_k)) + \beta(w_k(y_k z_k))$이다. (H3)과 (H4)에 의해 $\langle \alpha x + \beta y, z \rangle_w = \alpha \langle x, z \rangle_w + \beta \langle y, z \rangle_w$이다.

(ii) $e_k$의 $i$에서의 값은 $i = k$이면 $1$, 아니면 $0$이다([[standard-basis|표준기저]]). 따라서 $\langle e_k, e_k \rangle_w$를 이루는 열의 $i$번째 항은 $i = k$이면 (K4)에 의해 $w_k(1 \cdot 1) = w_k$이고 $i \ne k$이면 (K9)에 의해 $w_i(0 \cdot 0) = 0$이다. (H7)에 의해 합은 $w_k$이다.

(iii) 모든 $k$에서 $0 < w_k$라 하자. (i)에 의해 조건 (i), (ii)가 성립한다. 각 $k$에서 순서의 성질 (5)의 (iii)에 의해 $0 \le x_k x_k$이고 $\le$의 뜻에 의해 $0 \le w_k$이므로 (4)의 (iv)에 의해 $0 \le w_k(x_k x_k)$이다. [[geometric-at-most-algebraic|기하적 중복도는 대수적 중복도 이하]]의 (1)을 모든 항이 $0$인 열(합은 (H5)에 의해 $0$)과 이 열에 쓰면 $0 \le \langle x, x \rangle_w$이고, $\langle x, x \rangle_w = 0$이면 모든 $k$에서 $w_k(x_k x_k) = 0$이다. $w_k \ne 0$이므로 (K10)을 두 번 쓰면 $x_k = 0$이고, 따라서 $x = (0, \dots, 0)$이다. 거꾸로 $x = (0, \dots, 0)$이면 모든 항이 (K9)에 의해 $0$이므로 (H5)에 의해 $\langle x, x \rangle_w = 0$이다. 따라서 조건 (iii)도 성립하고 내적이다.

거꾸로 어떤 $k$에서 "$0 < w_k$"가 성립하지 않는다고 하자. 순서의 성질 (1)의 (iii)에 의해 $w_k \le 0$이고, [[real-order-axioms|실수의 순서]]에서 $\le$의 뜻에 의해 $w_k < 0$이거나 $w_k = 0$이다. $e_k$는 $k$에서의 값이 $1 \ne 0$((K4))이므로 영벡터 $(0, \dots, 0)$이 아니다. $w_k = 0$이면 (ii)에 의해 $\langle e_k, e_k \rangle_w = 0$이므로 조건 (iii)의 "값이 $0$인 것은 정확히 영벡터일 때"가 깨진다. $w_k < 0$이면 $\langle e_k, e_k \rangle_w = w_k < 0$이므로 순서의 성질 (1)의 (i)에 의해 $0 \le \langle e_k, e_k \rangle_w$가 성립하지 않는다. 어느 경우든 내적이 아니다. 이것으로 (iii)의 세 문장이 모두 증명되었다.

(iv) 모든 $k$에서 (K4)와 (K1)에 의해 $1 \cdot (x_k y_k) = x_k y_k$이므로 같은 열의 합이다.

**(2)의 증명.** $A^T$, $B^T$는 $n \times m$ 행렬이므로 $A^T B$와 $B^T A$는 $n \times n$ 행렬이다. [[standard-inner-product|ℝⁿ 의 표준내적]]의 (5)에 의해 각 $k$에서 $(A^T B)_{k,k} = \langle \mathbf{a}_k, \mathbf{b}_k \rangle$이고 $(B^T A)_{k,k} = \langle \mathbf{b}_k, \mathbf{a}_k \rangle$이며, 표준내적의 조건 (i)에 의해 두 값은 같다. 따라서 [[trace|대각합]]의 정의와 같은 열의 합에 의해 첫째와 둘째 등호가 성립한다. 각 $j \in \{1, \dots, m\}$, $k \in \{1, \dots, n\}$에 $t_{j,k} = a_{j,k} b_{j,k}$로 두면, 표준내적의 정의와 [[matrix|행렬]]의 열의 정의에 의해 $\langle \mathbf{a}_k, \mathbf{b}_k \rangle = t_{1,k} + \cdots + t_{m,k}$이므로 같은 열의 합에 의해 셋째 등호가 성립한다. [[double-sum-interchange|이중 합의 순서 바꾸기]]의 (2)에 의해 $k$번째 항이 $t_{1,k} + \cdots + t_{m,k}$인 열의 합은 $j$번째 항이 $t_{j,1} + \cdots + t_{j,n}$인 열의 합과 같으므로 넷째 등호가 성립한다. $B = A$로 두면 마지막 문장의 앞부분이다.

이제 $g(A, B) = \operatorname{tr}(A^T B) = \langle \mathbf{a}_1, \mathbf{b}_1 \rangle + \cdots + \langle \mathbf{a}_n, \mathbf{b}_n \rangle$로 쓰고 내적의 조건을 확인한다. $A$, $B$, $C \in M_{m \times n}$이고 $\alpha$, $\beta$는 실수이다.

- (i) 표준내적의 조건 (i)에 의해 모든 $k$에서 $\langle \mathbf{a}_k, \mathbf{b}_k \rangle = \langle \mathbf{b}_k, \mathbf{a}_k \rangle$이므로 같은 열의 합에 의해 $g(A, B) = g(B, A)$이다.
- (ii) 행렬의 (5)에 의해 $\alpha A + \beta C$의 $k$번째 열은 $\alpha \mathbf{a}_k + \beta \mathbf{c}_k$이다. 표준내적의 조건 (ii)에 의해 $\langle \alpha \mathbf{a}_k + \beta \mathbf{c}_k, \mathbf{b}_k \rangle = \alpha \langle \mathbf{a}_k, \mathbf{b}_k \rangle + \beta \langle \mathbf{c}_k, \mathbf{b}_k \rangle$이고, (H3)과 (H4)에 의해 $g(\alpha A + \beta C, B) = \alpha g(A, B) + \beta g(C, B)$이다.
- (iii) 표준내적의 (1)에 의해 모든 $k$에서 $0 \le \langle \mathbf{a}_k, \mathbf{a}_k \rangle$이다. 항마다 비교한 합(기하적 중복도는 대수적 중복도 이하의 (1))을 모든 항이 $0$인 열과 이 열에 쓰면 $0 \le g(A, A)$이고, $g(A, A) = 0$이면 모든 $k$에서 $\langle \mathbf{a}_k, \mathbf{a}_k \rangle = 0$이며, 표준내적의 (1)에 의해 $\mathbf{a}_k = (0, \dots, 0)$이다. 영행렬의 $k$번째 열도 $(0, \dots, 0)$이므로 행렬의 (3)에 의해 $A$는 영행렬이다. 거꾸로 $A$가 영행렬이면 모든 $\mathbf{a}_k$가 $(0, \dots, 0)$이므로 모든 항이 $0$이고 (H5)에 의해 $g(A, A) = 0$이다. 행렬의 (1)에 의해 영행렬은 $M_{m \times n}$의 영벡터이다.

따라서 $g$는 $M_{m \times n}$ 위의 내적이다.

**(3)의 증명.** (i) $u, u', u'' \in U$이고 $\alpha$, $\beta$가 실수라 하자. 조건 (i)은 $\langle S u, S u' \rangle = \langle S u', S u \rangle$에서 나온다. (T3)에 의해 $S(\alpha u + \beta u') = \alpha S u + \beta S u'$이므로, $V$의 조건 (ii)에 의해 $\langle \alpha u + \beta u', u'' \rangle_S = \langle \alpha S u + \beta S u', S u'' \rangle = \alpha \langle u, u'' \rangle_S + \beta \langle u', u'' \rangle_S$이다. $V$의 조건 (iii)에 의해 $0 \le \langle S u, S u \rangle = \langle u, u \rangle_S$이고, $\langle u, u \rangle_S = 0$인 것은 정확히 $S u = 0_V$일 때이다. (T1)에 의해 $S 0_U = 0_V$이므로, $S u = 0_V$이면 $S u = S 0_U$이고 단사이므로 $u = 0_U$이다. 거꾸로 $u = 0_U$이면 $S u = 0_V$이다. 따라서 $\langle u, u \rangle_S = 0$인 것은 정확히 $u = 0_U$일 때이다.

(ii) [[matrix-in-bases|기저에 관한 선형사상의 행렬]]에 의해 $C_{\mathcal{B}}^{-1} : V \to \mathbb{R}^n$은 [[isomorphism|동형사상]]이므로 전단사이고, 특히 단사인 선형사상이다. 그 값이 $[x]_{\mathcal{B}} = C_{\mathcal{B}}^{-1}(x)$이므로 $\langle x, y \rangle_{\mathcal{B}}$는 (i)의 $\langle x, y \rangle_S$를 $S = C_{\mathcal{B}}^{-1}$와 $\mathbb{R}^n$의 표준내적([[standard-inner-product|ℝⁿ 의 표준내적]]의 (1)에 의해 내적이다)으로 쓴 것이고, (i)에 의해 내적이다. $x = x_1 b_1 + \cdots + x_n b_n$이면 기저에 관한 선형사상의 행렬의 (1)에 의해 $[x]_{\mathcal{B}} = (x_1, \dots, x_n)$이고, $y$도 같으므로 표준내적의 정의에 의해 $\langle x, y \rangle_{\mathcal{B}} = x_1 y_1 + \cdots + x_n y_n$이다. 같은 (1)에 의해 $[b_k]_{\mathcal{B}} = e_k$이므로 $\langle b_j, b_k \rangle_{\mathcal{B}} = \langle e_j, e_k \rangle$이고, 표준내적의 (2)에 의해 마지막 문장이 성립한다.

(iii) $V$가 유한차원이라 하자. [[dimension|유한차원과 차원]]의 (1)과 (2)에 의해 $V$에는 길이 $n = \dim V$인 기저가 있다. $n = 0$이면 같은 항목의 (3)에 의해 $V = \{0_V\}$이고, [[inner-product-space|내적과 내적공간]]의 (7)에 의해 $V$ 위에 내적이 있다. $n \ge 1$이면 $n$은 자연수이고 (ii)에 의해 내적이 있다.

**(4)의 증명.** (1)에서 $n = 2$, $w_1 = 1$, $w_2 = -1$로 두면 (K4), (K1), (K9)의 $(-1)a = -a$와 뺄셈의 정의에 의해 $\langle x, y \rangle_w = x_1 y_1 + (-(x_2 y_2)) = x_1 y_1 - x_2 y_2$이다. (1)의 (i)에 의해 조건 (i), (ii)를 만족한다. (1)의 (ii)에 의해 $\langle e_2, e_2 \rangle_w = -1$이고, 순서의 성질 (5)의 (ii)와 (3)의 (ii)에 의해 $-1 < 0$이므로 (1)의 (iii)에 의해 내적이 아니다. 또 $x = (1, 1)$이면 $\langle x, x \rangle_w = 1 \cdot 1 - 1 \cdot 1 = 0$이고 $x$는 영벡터가 아니다. $\blacksquare$
:::

## 예시와 반례

:::example[가중치 2, 3 과 표준내적의 비교]
$\mathbb{R}^2$에서 $w_1 = 2$, $w_2 = 3$이면 두 가중치가 양수이므로 (1)의 (iii)에 의해 $\langle \cdot, \cdot \rangle_w$는 내적입니다. $x = (1, 2)$, $y = (3, -1)$이면 $\langle x, y \rangle_w = 2 \cdot 3 + 3 \cdot (-2) = 0$이지만 표준내적은 $\langle x, y \rangle = 3 - 2 = 1$입니다. 같은 두 벡터라도 어느 내적으로 재느냐에 따라 값이 다릅니다.
:::

:::example[2 × 2 행렬의 프로베니우스 내적]
$$
A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}, \qquad B = \begin{pmatrix} 3 & 0 \\ 1 & 4 \end{pmatrix}
$$

이면 성분끼리의 곱의 합은 $(1 \cdot 3 + 2 \cdot 0) + (0 \cdot 1 + (-1) \cdot 4) = 3 - 4 = -1$입니다. 한편

$$
\begin{aligned}
A^T B &= \begin{pmatrix} 1 & 0 \\ 2 & -1 \end{pmatrix} \begin{pmatrix} 3 & 0 \\ 1 & 4 \end{pmatrix} \\
&= \begin{pmatrix} 3 & 0 \\ 5 & -4 \end{pmatrix}
\end{aligned}
$$

이므로 $\operatorname{tr}(A^T B) = 3 + (-4) = -1$이어서 (2)와 맞습니다. 열로 보아도 $\langle \mathbf{a}_1, \mathbf{b}_1 \rangle = 3$, $\langle \mathbf{a}_2, \mathbf{b}_2 \rangle = 0 - 4 = -4$입니다.
:::

:::example[ℝ² 의 다른 기저로 옮긴 내적]
$\mathbb{R}^2$에서 $b_1 = (1, 1)$, $b_2 = (0, 1)$이라 합시다. 실수 $\alpha$, $\beta$에 대하여 $\alpha b_1 + \beta b_2 = (\alpha, \alpha + \beta)$이므로, 모든 $(p, q) \in \mathbb{R}^2$가 $\alpha = p$, $\beta = q - p$일 때 그리고 그때만 이 꼴로 표현됩니다. 따라서 [[basis|기저]]의 정의에 의해 $\mathcal{B} = b_1, b_2$는 기저입니다. $x = (2, 5)$는 $2 b_1 + 3 b_2$이고 $y = (1, 0)$은 $1 b_1 + (-1) b_2$이므로 (3)의 (ii)에 의해 $\langle x, y \rangle_{\mathcal{B}} = 2 \cdot 1 + 3 \cdot (-1) = -1$입니다. 표준내적으로는 $\langle x, y \rangle = 2$입니다. 또 $\langle b_1, b_2 \rangle_{\mathcal{B}} = 0$이지만 $\langle b_1, b_2 \rangle = 1$입니다.
:::

## 확인 질문

:::check[실수 $c$에 대하여 $\mathbb{R}^2$ 위의 $x_1 y_1 + c\,x_2 y_2$가 내적인 것은 $c$가 어떤 값일 때인가?]
가중치 $w_1 = 1$, $w_2 = c$인 (1)의 경우입니다. $0 < 1$이므로 (1)의 (iii)에 의해 정확히 $0 < c$일 때 내적입니다. $c = 0$이면 $e_2$에서, $c < 0$이면 역시 $e_2$에서 양의 정부호가 깨집니다.
:::

:::check[$M_{n \times n}$의 프로베니우스 내적에서 $\operatorname{tr}(I_n^T A)$는 무엇인가?]
(2)의 둘째 등호의 오른쪽 꼴을 $m = n$이고 $A$ 대신 $I_n$, $B$ 대신 $A$인 경우에 쓰면 $k$번째 항은 $I_n$의 $k$번째 열과 $\mathbf{a}_k$의 표준내적입니다. [[matrix|행렬]]의 (6)에 의해 $I_n$의 $k$번째 열은 $e_k$이므로 이 항은 [[standard-inner-product|ℝⁿ 의 표준내적]]의 (2)에 의해 $\langle e_k, \mathbf{a}_k \rangle = a_{k,k}$입니다. 따라서 값은 $a_{1,1} + \cdots + a_{n,n} = \operatorname{tr} A$입니다.
:::
