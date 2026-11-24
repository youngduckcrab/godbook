---
title: 삼각행렬의 특성다항식
title_en: Characteristic Polynomial of a Triangular Matrix
aliases: [대각행렬의 특성다항식, 스칼라 행렬의 특성다항식, characteristic polynomial of a triangular matrix, characteristic polynomial of a diagonal matrix]
kind: proposition
field: linear-algebra
msc: ["15A18"]
level: undergrad
summary: 삼각행렬 A 의 특성다항식은 대각성분으로 만든 곱 (a₁,₁t⁰ − t)⋯(aₙ,ₙt⁰ − t) = (−1)ⁿ(t − a₁,₁)⋯(t − aₙ,ₙ) 이고, 고윳값은 정확히 대각성분들이다. 대각행렬, cIₙ, Iₙ, 영행렬의 특성다항식과, 같은 대각성분이 이어서 늘어선 삼각행렬의 특성다항식 (−1)ⁿ(t − μ₁)^{m₁}⋯(t − μ_r)^{m_r} 을 함께 보인다.
requires: [function, real-number-arithmetic, well-ordering-principle, mathematical-induction, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, matrix, eigenvalue-and-eigenvector, eigenvalues-of-triangular-matrix, diagonalizable, determinant, determinant-of-triangular-matrix, power-of-a-real-number, finite-product-of-reals, polynomial-function, product-of-polynomial-functions, characteristic-polynomial, eigenvalue-iff-root, characteristic-polynomial-2x2]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.7 Eigenvalues of a triangular matrix, pp.103–104; 4장 1절 연습문제 1.4, 1.5, p.104; 4장 1절 연습문제 1.6, p.104; 4장 2절 연습문제 2.6, p.114, 2.7, p.115; 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization, 연습문제 3.9 b), p.134; 9장 1절 Cayley–Hamilton Theorem 의 A “standard” proof, p.255"
    checked: original
    note: "출처 4장 1.7(pp.103–104)은 삼각행렬(위삼각이거나 아래삼각)의 고윳값이 중복도를 세어 정확히 대각성분이라고 적고, 대각행렬은 위삼각이자 아래삼각이므로 대각행렬의 고윳값은 대각성분이라고 적는다. 증명은 대각성분에서 λ 를 빼고 삼각행렬의 행렬식이 대각성분의 곱이라는 것을 쓰면 된다며 det(A − λI) = (a₁,₁ − λ)(a₂,₂ − λ)⋯(aₙ,ₙ − λ) 를 적는다. (1)과 (3)은 이 경로를 이 사이트의 번호로 적은 것이다. (2)의 (−1)ⁿ 꼴은 출처 9장 1절의 A “standard” proof(p.255)가 위삼각행렬에 대해 p(z) = (λ₁ − z)⋯(λₙ − z) = (−1)ⁿ(z − λ₁)⋯(z − λₙ) 로 적는 것과 같다. (5)와 그 증명의 이어 붙이기는 이 사이트의 것이고, 출처의 '중복도를 세어'를 이 사이트는 이 꼴의 지수로만 말한다. 출처 4장 연습문제 1.4(p.104)는 삼각행렬 넷의 특성다항식을 곱의 꼴로 남겨 두고 구하라고 하고, 1.5 는 삼각행렬의 고윳값이 중복도를 세어 대각성분과 같음을 보이라고 한다. 출처 4장 2절 연습문제 2.6(p.114)는 위삼각행렬 (2 6 −6; 0 5 −2; 0 0 4) 의 고윳값을 계산 없이 찾을 수 있는지 묻는다. 예시 '같은 대각성분이 이어진 위삼각행렬'의 행렬은 출처 연습문제 1.4 의 행렬들과 같은 꼴(삼각행렬의 특성다항식을 곱으로 쓰기)이고, 같은 대각성분이 이어진다는 점에서 출처 4장 연습문제 2.7(p.115)의 위삼각행렬 (2 0 6; 0 2 4; 0 0 4)(대각성분 2, 2, 4)과 같은 꼴이다. 예시 '대각성분에 0 이 있는 아래삼각행렬'은 출처 연습문제 1.4 의 넷째 행렬(대각성분 4, 0, 0, 1 인 아래삼각행렬)과 같은 꼴이다. 반례 '삼각행렬이 아니면 대각성분이 고윳값이 아닐 수 있는 예'의 행렬은 출처 5장 3절 연습문제 3.9 b)(p.134)의 '모든 성분이 1 인 n × n 행렬'의 n = 2 인 것이고, 그 연습문제는 고윳값과 중복도를 묻는다. 확인 질문 '대각성분이 모두 $0$인 $n \\times n$ 위삼각행렬 $U$의 특성다항식과 고윳값은 무엇인가?'의 결론(고윳값은 0 하나)은 출처 4장 연습문제 1.6(p.104)이 멱영 연산자에 대해 보이라는 σ(A) = {0} 과 같은 결론이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인(새로 쓴 증명 통독, 예의 수치 재계산). 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$가 $n \times n$ [[matrix|행렬]]이라 하자. 위삼각행렬, 아래삼각행렬은 [[eigenvalues-of-triangular-matrix|삼각행렬의 고윳값]]의 것이고 **삼각행렬**은 [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]에서 정한 대로 위삼각행렬이거나 아래삼각행렬인 행렬이며, 대각행렬과 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 [[diagonalizable|대각화 가능]]의 것이다. $p_A$는 [[characteristic-polynomial|특성다항식]]이고, $t^k$, 실수 $c$에 대한 $t - c$는 [[polynomial-function|다항함수]]의 것, 함수의 열의 곱과 거듭제곱 $f^k$는 [[product-of-polynomial-functions|다항함수의 곱]]의 것, 실수의 열의 곱은 [[finite-product-of-reals|실수의 유한 곱]]의 것이다.

1. (곱의 꼴) $A$가 삼각행렬이면, 모든 실수 $x$에서 $A - xI_n$은 $A$와 같은 쪽의 삼각행렬이고 그 $(k, k)$ 성분은 $a_{k,k} - x$이다. 따라서 모든 실수 $x$에서
   $$
   \begin{aligned}
   p_A(x) &= (a_{1,1} - x)(a_{2,2} - x) \\
   &\qquad \cdots (a_{n,n} - x)
   \end{aligned}
   $$
   이고, $k$번째 항이 $a_{k,k} t^0 - t$인 함수의 열의 곱으로 $p_A = (a_{1,1} t^0 - t) \cdots (a_{n,n} t^0 - t)$이다.
2. ($(-1)^n$의 꼴) $A$가 삼각행렬이면 $p_A = (-1)^n (t - a_{1,1})(t - a_{2,2}) \cdots (t - a_{n,n})$이다.
3. (고윳값) $A$가 삼각행렬이면, 실수 $\lambda$가 $A$의 [[eigenvalue-and-eigenvector|고윳값]]인 것은 정확히 $\lambda = a_{k,k}$인 $k \in \{1, \dots, n\}$이 있을 때이다. 이것은 삼각행렬의 고윳값의 (2)(위삼각행렬)와 (3)(아래삼각행렬)의 결론과 같다.
4. (대각행렬과 스칼라 행렬) $\lambda_1, \dots, \lambda_n$이 실수의 열이면 $p_{\operatorname{diag}(\lambda_1, \dots, \lambda_n)} = (-1)^n (t - \lambda_1) \cdots (t - \lambda_n)$이다. 실수 $c$에 대하여 $p_{cI_n} = (-1)^n (t - c)^n$이다. 특히 $p_{I_n} = (-1)^n (t - 1)^n$이고, 영행렬 $O$에 대하여 $p_O = (-1)^n t^n$이다.
5. (같은 대각성분이 이어진 경우) $r \ge 0$이 정수이고 $\mu_1, \dots, \mu_r$이 실수의 열, $m_1, \dots, m_r$이 $0$ 이상인 정수의 열이라 하자. $j \in \{0, 1, \dots, r\}$마다 $s_j$를 처음 $j$개의 합 $m_1 + \cdots + m_j$로 두고($s_0 = 0$), $s_r = n$이라 하자. $A$가 삼각행렬이고, 모든 $j \in \{1, \dots, r\}$와 $s_{j-1} < k \le s_j$인 모든 정수 $k$에서 $a_{k,k} = \mu_j$이면
   $$
   \begin{aligned}
   p_A &= (-1)^n (t - \mu_1)^{m_1} \\
   &\qquad \cdots (t - \mu_r)^{m_r}
   \end{aligned}
   $$
   이다. 오른쪽은 $j$번째 항이 $(t - \mu_j)^{m_j}$인 함수의 열의 곱의 $(-1)^n$배이다. 대각행렬은 삼각행렬이므로 대각행렬에도 이것을 쓸 수 있다.
:::

:::english
Let $n$ be a natural number and let $A$ be an $n \times n$ matrix. Upper and lower triangular matrices are those of the entry on eigenvalues of triangular matrices, a **triangular matrix** is, as defined in the entry on determinants of triangular matrices, an upper or a lower triangular matrix, and diagonal matrices and $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$ are those of the entry on diagonalizable matrices. $p_A$ is the characteristic polynomial; $t^k$ and $t - c$ for a real number $c$ are those of the entry on polynomial functions, products of sequences of functions and powers $f^k$ are those of the entry on products of polynomial functions, and products of sequences of real numbers are those of the entry on finite products of reals.

1. (Product form) If $A$ is triangular, then for every real number $x$ the matrix $A - xI_n$ is triangular of the same kind as $A$ and its $(k, k)$ entry is $a_{k,k} - x$. Hence for every real number $x$,
   $$
   \begin{aligned}
   p_A(x) &= (a_{1,1} - x)(a_{2,2} - x) \\
   &\qquad \cdots (a_{n,n} - x),
   \end{aligned}
   $$
   and, as the product of the sequence of functions whose $k$-th term is $a_{k,k} t^0 - t$, $p_A = (a_{1,1} t^0 - t) \cdots (a_{n,n} t^0 - t)$.
2. (The form with $(-1)^n$) If $A$ is triangular, then $p_A = (-1)^n (t - a_{1,1})(t - a_{2,2}) \cdots (t - a_{n,n})$.
3. (Eigenvalues) If $A$ is triangular, then a real number $\lambda$ is an eigenvalue of $A$ exactly when $\lambda = a_{k,k}$ for some $k \in \{1, \dots, n\}$. This is the same conclusion as items (2) (upper triangular) and (3) (lower triangular) of the entry on eigenvalues of triangular matrices.
4. (Diagonal and scalar matrices) If $\lambda_1, \dots, \lambda_n$ is a sequence of real numbers, then $p_{\operatorname{diag}(\lambda_1, \dots, \lambda_n)} = (-1)^n (t - \lambda_1) \cdots (t - \lambda_n)$. For a real number $c$, $p_{cI_n} = (-1)^n (t - c)^n$. In particular $p_{I_n} = (-1)^n (t - 1)^n$, and for the zero matrix $O$, $p_O = (-1)^n t^n$.
5. (Equal diagonal entries in a row) Let $r \ge 0$ be an integer, $\mu_1, \dots, \mu_r$ a sequence of real numbers and $m_1, \dots, m_r$ a sequence of integers $\ge 0$. For each $j \in \{0, 1, \dots, r\}$ let $s_j$ be the sum $m_1 + \cdots + m_j$ of the first $j$ terms ($s_0 = 0$), and suppose $s_r = n$. If $A$ is triangular and $a_{k,k} = \mu_j$ for every $j \in \{1, \dots, r\}$ and every integer $k$ with $s_{j-1} < k \le s_j$, then
   $$
   \begin{aligned}
   p_A &= (-1)^n (t - \mu_1)^{m_1} \\
   &\qquad \cdots (t - \mu_r)^{m_r}.
   \end{aligned}
   $$
   The right-hand side is $(-1)^n$ times the product of the sequence of functions whose $j$-th term is $(t - \mu_j)^{m_j}$. Since diagonal matrices are triangular, this applies to diagonal matrices as well.
:::

## 직관

삼각행렬의 대각선에서 $x$를 빼도 대각선 바깥의 $0$은 그대로이므로 여전히 삼각행렬이고, 삼각행렬의 행렬식은 대각성분의 곱입니다. 그래서 특성다항식은 계산할 것도 없이 $(a_{k,k} - x)$들의 곱으로 나오고, 곱이 $0$인 것은 어느 한 인수가 $0$일 때이므로 고윳값을 대각선에서 바로 읽습니다.

건물의 층마다 스위치가 하나 있고, 층의 스위치를 모두 켜야 불이 들어오는 배선과 비슷합니다. 어느 층 하나라도 꺼지면(어떤 $a_{k,k} - x$가 $0$이면) 전체가 꺼집니다(곱이 $0$). 비유와 다른 점은, 삼각행렬이 아니면 대각선 바깥의 성분이 행렬식에 끼어들어 이 "층별 배선"이 성립하지 않을 수 있다는 것입니다. 아래 반례가 그런 경우입니다.

(2)와 (5)는 같은 곱을 $(t - c)$들의 곱으로 고쳐 쓴 것입니다. $(a - x) = (-1)(x - a)$이므로 인수 $n$개에서 $(-1)$이 $n$번 나옵니다. 같은 대각성분이 몇 개씩 이어서 늘어서 있으면, 그 인수들을 $(t - \mu_j)^{m_j}$로 묶을 수 있습니다. 이 묶음은 대각성분이 이어서 늘어선 경우에만 이 항목이 보인 것입니다. 같은 값이 떨어져 있는 대각성분을 모으는 것(곱의 재배열)은 주장하지 않습니다.

## 증명

:::idea
$A - xI_n$이 삼각행렬임을 성분으로 보고 삼각행렬의 행렬식을 쓴다. 곱이 $0$인 경우의 성질로 고윳값을 읽고, $(a - x) = (-1)(x - a)$와 항별 곱으로 부호를 모은다. (5)는 이어 붙인 열의 곱에 대한 귀납이다.
:::

:::hint
$(A - xI_n)_{j,k}$는 $j \ne k$일 때와 $j = k$일 때 각각 무엇인가?
:::

:::hint
(5)에서는 $r$에 대한 귀납으로, 대각성분의 열이 처음 $s_r$개와 나머지 $m_{r+1}$개를 이어 붙인 것임을 쓴다.
:::

:::proof
(K…)는 [[real-number-arithmetic]]의 것, (B…)는 [[vector-space-basic-properties]]의 것이다. 두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). 함수의 열의 곱의 $x$에서의 값은 값들의 열의 곱이고, $f^k$의 값은 $f(x)^k$이며([[product-of-polynomial-functions|다항함수의 곱]]의 정의), 실수 $c$에 대하여 $c\,t^0 - t$와 $t - c$의 $x$에서의 값은 $c - x$와 $x - c$이다([[polynomial-function|다항함수]]의 (3)과 (K4)).

**(1)의 증명.** 실수 $x$에서 $A - xI_n = A + (-x)I_n$이고((B9)), [[matrix|행렬]]의 (1), (6)에 의해 $j \ne k$이면 $(A - xI_n)_{j,k} = a_{j,k} + (-x) \cdot 0 = a_{j,k}$, $j = k$이면 $(A - xI_n)_{k,k} = a_{k,k} + (-x) \cdot 1 = a_{k,k} - x$이다((K4), (K9)). $A$가 위삼각행렬이면 $j > k$에서 $a_{j,k} = 0$이므로 $A - xI_n$의 그 성분도 $0$이고 $A - xI_n$은 위삼각행렬이다. 아래삼각행렬이면 같은 이유로 $A - xI_n$은 아래삼각행렬이다. [[determinant-of-triangular-matrix|삼각행렬의 행렬식]]의 (3) 또는 (4)에 의해 $p_A(x) = \det(A - xI_n)$은 대각성분 $a_{k,k} - x$의 곱이다. 이것은 $k$번째 항이 $a_{k,k} t^0 - t$인 함수의 열의 곱의 $x$에서의 값과 같으므로 두 함수는 같다.

**(2)의 증명.** 실수 $x$와 $k$에서 (K9)와 (K12)에 의해 $a_{k,k} - x = (-1)(x - a_{k,k})$이다. [[finite-product-of-reals|실수의 유한 곱]]의 (3)(항별 곱)과 (4)(모든 항이 $-1$인 열의 곱은 $(-1)^n$)에 의해
$$
\begin{aligned}
p_A(x) &= (-1)^n \bigl((x - a_{1,1}) \cdots \\
&\qquad (x - a_{n,n})\bigr)
\end{aligned}
$$
이다. 오른쪽은 함수 $(-1)^n (t - a_{1,1}) \cdots (t - a_{n,n})$의 $x$에서의 값이다([[real-function-space]]의 스칼라배의 값). 따라서 두 함수는 같다.

**(3)의 증명.** [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (1)에 의해 $\lambda$가 고윳값인 것은 정확히 $p_A(\lambda) = 0$일 때이고, (1)과 유한 곱의 (5)에 의해 이것은 정확히 어떤 $k$에서 $a_{k,k} - \lambda = 0$, 곧 ((K12)의 (v)) $\lambda = a_{k,k}$일 때이다.

**(4)의 증명.** [[diagonalizable|대각화 가능]]의 (1)에 의해 $\operatorname{diag}(\lambda_1, \dots, \lambda_n)$은 대각행렬이고 $(k, k)$ 성분은 $\lambda_k$이다. 대각행렬은 $j \ne k$인 성분이 모두 $0$이므로 특히 위삼각행렬이고, (2)에 의해 첫 문장이 성립한다. $cI_n$은 행렬의 (1), (6)에 의해 $(k, k)$ 성분이 $c$이고 나머지 성분이 $0$인 대각행렬이므로 (2)에 의해 $p_{cI_n}$은 모든 항이 $t - c$인 길이 $n$인 함수의 열의 곱의 $(-1)^n$배이고, 거듭제곱의 정의에 의해 그 곱은 $(t - c)^n$이다. $c = 1$이면 $1I_n = I_n$이고((V5)는 [[vector-space]]의 것), $c = 0$이면 (B3)에 의해 $0I_n = O$이다. 또 $t - 0 = t^1 - 0\,t^0 = t$이고((B3), (B2)와 $0_V$의 뜻), 곱의 (3)에 의해 $t$의 $n$제곱은 $t^n$이다.

**(5)의 증명.** 먼저 실수에 관한 다음 사실 (가)를 $r$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다.

(가) $\mu$, $m$, $s_j$가 (5)와 같고($s_j$는 0 이상인 정수이다. [[product-of-polynomial-functions|다항함수의 곱]]의 (5)의 첫 문장) $d_1, \dots, d_{s_r}$이 길이 $s_r$인 실수의 열이며, 모든 $j \in \{1, \dots, r\}$와 $s_{j-1} < k \le s_j$인 모든 정수 $k$에서 $d_k = \mu_j$이면, $d_1 \cdots d_{s_r}$은 $j$번째 항이 $\mu_j^{m_j}$인 길이 $r$인 열의 곱 $\mu_1^{m_1} \cdots \mu_r^{m_r}$과 같다.

$r = 0$이면 $s_0 = 0$이므로 양변이 모두 빈 곱 $1$이다. 길이 $r$에서 (가)가 성립한다고 하고 길이 $r + 1$인 $\mu$, $m$과 열 $d$가 (가)의 가정을 만족한다고 하자. 합의 정의에 의해 $s_{r+1} = s_r + m_{r+1}$이고, $m_j \ge 0$이므로 [[well-ordering-principle|(Z7)]]과 (Z6)에 의해 $j \le r$이면 $s_j \le s_r$이다(처음 $j$개의 합에 $0$ 이상인 수를 차례로 더한다. $j$에서 $r$까지의 귀납). 따라서 $j \le r$이고 $s_{j-1} < k \le s_j$이면 $k \le s_r$이다. $d$의 처음 $s_r$개를 $e_1, \dots, e_{s_r}$이라 하면 $e$는 $\mu$, $m$의 처음 $r$개에 대하여 (가)의 가정을 만족하고(처음 $j \le r$개의 합은 같다), 귀납 가정에 의해 $e_1 \cdots e_{s_r} = \mu_1^{m_1} \cdots \mu_r^{m_r}$이다. 또 $1 \le i \le m_{r+1}$이면 $k = s_r + i$는 $s_r < k \le s_{r+1}$을 만족하므로 $d_{s_r + i} = \mu_{r+1}$이고, $i$번째 항이 $d_{s_r + i}$인 길이 $m_{r+1}$인 열의 곱은 유한 곱의 (4)에 의해 $\mu_{r+1}^{m_{r+1}}$이다. $d$는 이 두 열을 차례로 늘어놓은 열이므로 유한 곱의 (2)에 의해 $d_1 \cdots d_{s_{r+1}} = (\mu_1^{m_1} \cdots \mu_r^{m_r})\,\mu_{r+1}^{m_{r+1}}$이고, 유한 곱의 (1)에 의해 이것은 $j$번째 항이 $\mu_j^{m_j}$인 길이 $r + 1$인 열의 곱이다.

이제 (5)를 보인다. 실수 $x$를 고정하고 $d_k = x - a_{k,k}$로 두면 가정에 의해 $s_{j-1} < k \le s_j$에서 $d_k = x - \mu_j$이다. (가)를 $\mu_j$ 대신 $x - \mu_j$에 쓰면 $d_1 \cdots d_n = (x - \mu_1)^{m_1} \cdots (x - \mu_r)^{m_r}$이다. (2)의 증명에서 $p_A(x) = (-1)^n (d_1 \cdots d_n)$이었다. 한편 $(t - \mu_j)^{m_j}$의 $x$에서의 값은 $(x - \mu_j)^{m_j}$이므로 (5)의 오른쪽 함수의 $x$에서의 값은 $(-1)^n \bigl((x - \mu_1)^{m_1} \cdots (x - \mu_r)^{m_r}\bigr)$이다. 모든 $x$에서 값이 같으므로 두 함수는 같다. $\blacksquare$
:::

## 예시와 반례

:::example[같은 대각성분이 이어진 위삼각행렬]
$$
U = \begin{pmatrix} 5 & 1 & 2 \\ 0 & 5 & 7 \\ 0 & 0 & -1 \end{pmatrix}
$$

은 위삼각행렬이고 대각성분은 차례로 $5, 5, -1$입니다. (1)에 의해 $p_U(x) = (5 - x)(5 - x)(-1 - x)$이고, (5)를 $r = 2$, $\mu_1 = 5$, $m_1 = 2$, $\mu_2 = -1$, $m_2 = 1$($s_1 = 2$, $s_2 = 3$)에 쓰면

$$
p_U = (-1)^3 (t - 5)^2 (t + 1)
$$

입니다. 여기서 $t + 1$은 $t - (-1)$입니다. (3)에 의해 $U$의 고윳값은 정확히 $5$와 $-1$입니다. 대각선 바깥의 성분 $1, 2, 7$은 특성다항식에 나타나지 않습니다.
:::

:::example[대각성분에 0 이 있는 아래삼각행렬]
$$
L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 0 & 0 \\ -3 & 4 & 1 \end{pmatrix}
$$

은 아래삼각행렬이고 대각성분은 $1, 0, 1$입니다. (2)에 의해 $p_L = (-1)^3 (t - 1)(t - 0)(t - 1)$이고, (3)에 의해 고윳값은 정확히 $1$과 $0$입니다. $0$이 고윳값이므로 [[eigenvalue-iff-root|고윳값과 특성다항식의 근]]의 (3)에 의해 $L$은 가역이 아닙니다. 이 대각성분은 같은 값 $1$이 떨어져 있으므로 (5)의 가정을 그대로는 만족하지 않습니다.
:::

:::counterexample[삼각행렬이 아니면 대각성분이 고윳값이 아닐 수 있는 예]
$$
A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
$$

은 삼각행렬이 아닙니다. 대각성분은 모두 $1$이지만, $\operatorname{tr} A = 2$, $\det A = 1 - 1 = 0$이고 $0 + 2 = 2$, $0 \cdot 2 = 0$이므로 [[characteristic-polynomial-2x2|2 × 2 행렬의 특성다항식]]의 (4)에 의해 $p_A = (t - 0)(t - 2)$이고 고윳값은 정확히 $0$과 $2$입니다. $1$은 $A$의 고윳값이 아닙니다.
:::

## 확인 질문

:::check[대각성분이 모두 $0$인 $n \times n$ 위삼각행렬 $U$의 특성다항식과 고윳값은 무엇인가?]
(2)에 의해 $p_U = (-1)^n (t - 0) \cdots (t - 0)$이고, (4)의 증명에서와 같이 $t - 0 = t$이므로 $p_U = (-1)^n t^n$입니다. (3)에 의해 고윳값은 $0$ 하나입니다. 대각선 위쪽의 성분이 무엇이든 그렇습니다.
:::

:::check[$1 \times 1$ 행렬 $A$에 이 항목의 (1)을 쓰면 무엇이 나오는가?]
$1 \times 1$ 행렬은 위삼각행렬이므로 (1)에 의해 $p_A(x) = a_{1,1} - x$이고 $p_A = a_{1,1} t^0 - t$입니다. 이것은 [[characteristic-polynomial|특성다항식]]의 (4)와 같습니다. 고윳값은 (3)에 의해 $a_{1,1}$ 하나입니다.
:::
