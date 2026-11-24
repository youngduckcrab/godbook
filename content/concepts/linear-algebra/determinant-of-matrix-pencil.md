---
title: 성분이 일차식인 행렬의 행렬식
title_en: Determinant of a Matrix with Linear Entries
aliases: [다항식 행렬의 행렬식, 일차식 성분의 행렬식, B + xC 의 행렬식, matrix pencil, determinant of a matrix pencil]
kind: lemma
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: n × n 행렬 B, C 에 대하여 x 를 det(B + xC) 로 보내는 함수는 𝒫ₙ 에 드는 다항함수이고, tⁿ 의 계수는 det C, 상수항은 det B 이다. det C = 0 이면 이 함수는 𝒫ₙ₋₁ 에 들고, det C ≠ 0 이면 차수가 n 이다. 증명은 첫째 열 전개를 함수의 등식으로 적고 n 에 대한 귀납으로 한다.
requires: [function, real-number-arithmetic, prime-number, well-ordering-principle, mathematical-induction, vector-space, vector-space-basic-properties, real-function-space, subspace, finite-sum-of-vectors, standard-basis, matrix, minor-matrix, determinant, determinant-and-invertibility, power-of-a-real-number, polynomial-function, product-of-polynomial-functions, roots-of-polynomial-function, coefficients-of-polynomial-function]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "4장 1절 Main definitions, 1.2 Finding eigenvalues: characteristic polynomials, p.100; 3장 5절 Cofactor expansion, 5.2 Some applications of the cofactor formula for the inverse 의 Example (Inverse of a polynomial matrix), p.94; 3장 5절 연습문제 5.3, 5.6 b), p.95; 3장 6절 Minors and rank, Corollary 6.2 의 증명, p.96; 4장 1절 연습문제 1.11, p.105; 5장 3절 Orthogonal projection and Gram-Schmidt orthogonalization, 연습문제 3.9 b), p.134"
    checked: original
    note: "출처 4장 1.2(p.100)는 n × n 행렬 A 에 대하여 det(A − λI) 가 변수 λ 의 n 차 다항식이라고 적고 증명하지 않는다. 출처 3장 5.2 의 Example (Inverse of a polynomial matrix)(p.94)는 성분이 변수 x 의 다항식인 행렬 A(x) 를 polynomial matrix 라 부르고, det A(x) 가 다항식이라는 것이 cofactor expansion 에서 나온다고 적는다. 3장 6절 Corollary 6.2 의 증명(p.96)도 다항식 행렬의 소행렬식이 다항식이라는 것을 같은 말로 쓴다. 이 항목의 증명(첫째 열 전개와 크기에 대한 귀납)은 이 '전개에서 나온다'를 펼친 것이고, 진술은 성분이 x 의 일차식인 B + xC 꼴로 좁혔다. 3장 연습문제 5.3(p.95)은 주어진 n × n 행렬 A 에 대해 det(A + tI) 를 구하라며 행 전개와 귀납을 권하는데, 이것은 B = A, C = Iₙ 인 이 항목의 φ 와 같은 대상이고 같은 방법(전개와 크기에 대한 귀납)이다. 3장 연습문제 5.6 b)(p.95)는 방데르몽드 행렬식의 마지막 행의 변수를 x 로 두고 그 행렬식이 n 차 다항식임을 보이라고 한다. 4장 연습문제 1.11(p.105)은 det(A − λI) = (a₁,₁ − λ)⋯(aₙ,ₙ − λ) + q(λ) 이고 q 의 차수가 n − 2 이하임을 보이라고 하는데, (4)의 'det C = 0 이면 차수가 내려간다'는 그런 계산에 쓰는 꼴이다. (1)–(5)의 증명은 이 사이트의 것이다. tⁿ 의 계수가 det C 라는 (3)의 둘째 문장에 해당하는 문장은 출처에서 찾지 못했다(검색어 leading coefficient, highest, monic 0건, coefficient of 1건(4장 연습문제 1.11), polynomial matrix 의 3곳(p.94, p.96)과 'is a polynomial' 8건을 읽었다). 반례 '어느 행도 영행이 아닌 C 로 차수가 내려가는 예'의 C 는 출처 5장 3절 연습문제 3.9 b)(p.134)의 '모든 성분이 1 인 n × n 행렬'의 n = 2 인 것과 같은 행렬이다(그 연습문제는 그 행렬의 고윳값과 중복도를 묻는다). matrix pencil 이라는 이름은 출처에 나오지 않는다(검색어 pencil, 0건). 확인 질문 '$\\det C \\ne 0$인 $n \\times n$ 행렬 $B$, $C$에 대하여, 모든 항 $x$에서 $B + xC$가 가역이 아닌 서로 다른 실수의 열은 길이가 얼마 이하인가?'는 출처 3장 Corollary 6.2 의 증명(p.96)이 '항등적으로 0 이 아닌 다항식인 소행렬식은 유한 개의 점에서만 0 이 된다'로 계수가 떨어지는 점이 유한 개임을 보이는 것과 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 상수나 영함수의 경우에 거짓이던 직관 4곳, 뒤 항목이 붙으면 거짓이 될 단원 글 1건, 메모의 틀린 번호 1건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$\mathbb{R}^{\mathbb{R}}$, 영함수 $o$, $t^k$, $\mathcal{P}_n$과 $0$부터 번호가 붙은 계수의 표기는 [[polynomial-function|다항함수]]의 것이고, 함수의 곱은 [[product-of-polynomial-functions|다항함수의 곱]]의 것이며, $t^k$의 계수, 상수항, 차수 $\deg$, 최고차계수는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 것이다. $\det$는 [[determinant|행렬식]], $B^{(j,1)}$은 [[minor-matrix|소행렬]], $(-1)^{j+1}$은 [[power-of-a-real-number|실수의 거듭제곱]]이고, 열의 합은 [[finite-sum-of-vectors|벡터의 유한 합]]의 것이다.

$n$이 자연수이고 $B$, $C$가 $n \times n$ [[matrix|행렬]]이라 하자. 실수 $x$마다 $B + xC$는 [[matrix|행렬]]의 (1)의 연산으로 만든 $n \times n$ 행렬이므로 실수 $\det(B + xC)$가 하나 정해지고, [[real-function-space|(G)]]에 의해 $x$에서의 값이 $\det(B + xC)$인 함수 $\mathbb{R} \to \mathbb{R}$가 있다. 이 함수를 $\varphi$로 쓴다.

1. (다항함수의 유한 합) $m$, $p \ge 0$이 정수이고 $f_1, \dots, f_p$가 길이 $p$인 $\mathbb{R}^{\mathbb{R}}$의 열이며 모든 항이 $\mathcal{P}_m$에 들면, $f_1 + \cdots + f_p \in \mathcal{P}_m$이다. 또 정수 $k \ge 0$마다 $f_1 + \cdots + f_p$의 $t^k$의 계수는 $i$번째 항이 $f_i$의 $t^k$의 계수인 길이 $p$인 실수의 열의 합이다.
2. (첫째 열 전개의 함수 꼴) $n \ge 2$라 하자. 모든 실수 $x$와 $j \in \{1, \dots, n\}$에서 $(B + xC)^{(j,1)} = B^{(j,1)} + xC^{(j,1)}$이다. $j$마다 $x$에서의 값이 $\det(B^{(j,1)} + xC^{(j,1)})$인 함수를 $\varphi_j$라 하면
   $$
   \begin{aligned}
   \varphi &= (-1)^{1+1}(b_{1,1} t^0 + c_{1,1} t)\varphi_1 \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1}(b_{n,1} t^0 + c_{n,1} t)\varphi_n
   \end{aligned}
   $$
   이다. 오른쪽은 $j$번째 항이 $(-1)^{j+1}(b_{j,1} t^0 + c_{j,1} t)\varphi_j$인 길이 $n$인 $\mathbb{R}^{\mathbb{R}}$의 열의 합이다. $\varphi_j$는 $(n-1) \times (n-1)$ 행렬 $B^{(j,1)}$, $C^{(j,1)}$로 만든 이 항목의 함수이다.
3. (다항함수와 두 계수) $\varphi \in \mathcal{P}_n$이다. $\varphi$의 $t^n$의 계수는 $\det C$이고, 상수항은 $\varphi(0) = \det B$이다.
4. (차수) $\det C \ne 0$이면 $\varphi \ne o$이고 $\deg \varphi = n$이며 최고차계수는 $\det C$이다. $\det C = 0$이면 $\varphi \in \mathcal{P}_{n-1}$이다. 특히 $C$의 어떤 행의 성분이 모두 $0$이면 $\varphi \in \mathcal{P}_{n-1}$이다.
5. (작은 경우) $n = 1$이면 $\varphi = b_{1,1} t^0 + c_{1,1} t$이다. $C$가 영행렬이면 $\varphi = (\det B)\,t^0$, 곧 값이 $\det B$인 상수함수이다.
:::

:::english
The space $\mathbb{R}^{\mathbb{R}}$, the zero function $o$, $t^k$, $\mathcal{P}_n$ and the notation for coefficients numbered from $0$ are those of the entry on polynomial functions; the product of functions is that of the entry on products of polynomial functions; the coefficient of $t^k$, the constant term, the degree $\deg$ and the leading coefficient are those of the entry on coefficients and degree. $\det$ is the determinant, $B^{(j,1)}$ is a minor matrix, $(-1)^{j+1}$ is a power of a real number, and sums of sequences are finite sums of vectors.

Let $n$ be a natural number and let $B$, $C$ be $n \times n$ matrices. For every real number $x$, $B + xC$ is an $n \times n$ matrix formed with the operations of item (1) of the entry on matrices, so the real number $\det(B + xC)$ is determined, and by (G) there is a function $\mathbb{R} \to \mathbb{R}$ whose value at $x$ is $\det(B + xC)$. We denote this function by $\varphi$.

1. (Finite sums of polynomial functions) If $m$, $p \ge 0$ are integers and $f_1, \dots, f_p$ is a sequence of length $p$ in $\mathbb{R}^{\mathbb{R}}$ all of whose terms lie in $\mathcal{P}_m$, then $f_1 + \cdots + f_p \in \mathcal{P}_m$. Moreover, for every integer $k \ge 0$, the coefficient of $t^k$ in $f_1 + \cdots + f_p$ is the sum of the sequence of real numbers of length $p$ whose $i$-th term is the coefficient of $t^k$ in $f_i$.
2. (Expansion along the first column, as functions) Let $n \ge 2$. For every real number $x$ and every $j \in \{1, \dots, n\}$ we have $(B + xC)^{(j,1)} = B^{(j,1)} + xC^{(j,1)}$. If for each $j$ we let $\varphi_j$ be the function whose value at $x$ is $\det(B^{(j,1)} + xC^{(j,1)})$, then
   $$
   \begin{aligned}
   \varphi &= (-1)^{1+1}(b_{1,1} t^0 + c_{1,1} t)\varphi_1 \\
   &\quad + \cdots \\
   &\quad + (-1)^{n+1}(b_{n,1} t^0 + c_{n,1} t)\varphi_n.
   \end{aligned}
   $$
   The right-hand side is the sum of the sequence of length $n$ in $\mathbb{R}^{\mathbb{R}}$ whose $j$-th term is $(-1)^{j+1}(b_{j,1} t^0 + c_{j,1} t)\varphi_j$. Each $\varphi_j$ is the function of this entry built from the $(n-1) \times (n-1)$ matrices $B^{(j,1)}$ and $C^{(j,1)}$.
3. (A polynomial function and two of its coefficients) $\varphi \in \mathcal{P}_n$. The coefficient of $t^n$ in $\varphi$ is $\det C$, and its constant term is $\varphi(0) = \det B$.
4. (Degree) If $\det C \ne 0$, then $\varphi \ne o$, $\deg \varphi = n$, and the leading coefficient is $\det C$. If $\det C = 0$, then $\varphi \in \mathcal{P}_{n-1}$. In particular, if all entries of some row of $C$ are $0$, then $\varphi \in \mathcal{P}_{n-1}$.
5. (Small cases) If $n = 1$, then $\varphi = b_{1,1} t^0 + c_{1,1} t$. If $C$ is the zero matrix, then $\varphi = (\det B)\,t^0$, that is, the constant function with value $\det B$.
:::

## 직관

$B + xC$의 성분은 모두 $b + cx$ 꼴, 곧 $x$에 대해 차수가 $1$ 이하인 식입니다($c = 0$이면 상수입니다). 행렬식을 첫째 열을 따라 전개하면 "첫째 열의 성분 하나"와 "한 단계 작은 행렬식"의 곱들을 더하고 빼게 됩니다. 성분은 $\mathcal{P}_1$에 들고, 작은 행렬식도 같은 꼴의 행렬의 행렬식이므로 크기에 대한 귀납으로 $\mathcal{P}_{n-1}$에 든다고 가정할 수 있습니다. 그러면 곱은 $\mathcal{P}_n$에 들고, 그런 것들을 더해도 $\mathcal{P}_n$에 듭니다.

계단을 한 칸씩 내려가며 칸마다 $x$를 많아야 한 번 집어 드는 것에 비유할 수 있습니다. $n$칸을 내려가면 $x$를 많아야 $n$번 곱하게 됩니다. 이 비유는 (2)의 전개가 크기를 하나씩 줄이고, 줄일 때마다 곱해지는 성분이 $\mathcal{P}_1$에 든다는 데서 맞아떨어집니다. 비유와 다른 점은, 집어 든 $x$들이 더하고 빼는 사이에 서로 지워질 수 있다는 것입니다.

$x$를 $n$번 곱하는 부분만 모으면 $B$의 성분은 하나도 남지 않고 $C$의 성분만 남습니다. 그래서 $t^n$의 계수는 $C$만으로 정해지고, 그것이 바로 $\det C$입니다((3)). 반대로 $x = 0$을 넣으면 $C$가 사라지므로 상수항은 $\det B$입니다. $\det C = 0$이면 $t^n$의 계수가 $0$이므로 $\varphi$는 $\mathcal{P}_{n-1}$에 듭니다((4)). 아래 반례처럼 $C$의 어느 행도 모든 성분이 $0$은 아닌데 그럴 수 있습니다.

## 증명

:::idea
첫째 열 전개를 함수의 등식 (2)로 적고, 크기 $n$에 대한 귀납으로 "$\mathcal{P}_n$에 들고 $t^n$의 계수가 $\det C$"를 함께 증명한다. $t^n$의 계수를 모으면 $C$의 첫째 열 전개가 된다.
:::

:::hint
$(b_{j,1} t^0 + c_{j,1} t)\varphi_j$를 $b_{j,1}\varphi_j + c_{j,1}(t\varphi_j)$로 펼치면, $\varphi_j \in \mathcal{P}_{n-1}$일 때 $t^n$의 계수에 기여하는 것은 어느 쪽인가?
:::

:::hint
$\det C = 0$이면 $\varphi$의 $t^n$의 계수가 $0$이다. 영함수가 아닌 다항함수의 차수는 계수가 $0$이 아닌 가장 큰 지수이다.
:::

:::proof
두 함수는 모든 $x$에서 값이 같으면 같다([[function|함수]]의 같음). (K…)는 [[real-number-arithmetic]]의 것, (B…)는 [[vector-space-basic-properties]]의 것, (H…)는 [[finite-sum-of-vectors]]의 것이다. $\mathbb{R}^{\mathbb{R}}$의 덧셈과 스칼라배의 값은 [[real-function-space]]의 정의대로 $(f + g)(x) = f(x) + g(x)$, $(\alpha f)(x) = \alpha f(x)$이고, 곱의 값은 [[product-of-polynomial-functions|다항함수의 곱]]의 정의대로 $(fg)(x) = f(x)g(x)$이다. 계수에 관한 (2)–(4)는 [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 번호이고, 이 항목의 번호와 구별하려고 "계수의 (3)"처럼 쓴다.

**(1)의 증명.** [[polynomial-function|다항함수]]의 (1)에 의해 $\mathcal{P}_m$은 $\mathbb{R}^{\mathbb{R}}$의 [[subspace|부분공간]]이므로 (H1)에 의해 $f_1 + \cdots + f_p \in \mathcal{P}_m$이다. 계수에 관한 주장은 $p$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다. $p = 0$이면 합의 정의에 의해 $f_1 + \cdots + f_p$는 $\mathbb{R}^{\mathbb{R}}$의 영벡터 $o$이고, $o \in \mathcal{P}_m$이며 계수의 (2)의 (iii)에 의해 $o$의 모든 계수는 $0$이다. 오른쪽은 빈 실수의 열의 합이므로 $0$이다. 이제 길이 $p$인 열에서 주장이 성립한다고 하고 $f_1, \dots, f_{p+1}$의 모든 항이 $\mathcal{P}_m$에 든다고 하자. 처음 $p$개의 합을 $s$라 하면 앞 문장에 의해 $s \in \mathcal{P}_m$이고, 합의 정의에 의해 $f_1 + \cdots + f_{p+1} = s + f_{p+1}$이다. 계수의 (3)의 (i)에 의해 이 함수의 $t^k$의 계수는 ($s$의 $t^k$의 계수) $+$ ($f_{p+1}$의 $t^k$의 계수)이다. 귀납 가정에 의해 앞의 것은 처음 $p$개의 함수의 $t^k$의 계수들의 합, 곧 $i$번째 항이 $f_i$의 $t^k$의 계수인 길이 $p + 1$인 실수의 열의 처음 $p$개의 합이다. 실수의 합의 정의에 의해 이것에 $(p+1)$번째 항을 더한 것이 길이 $p + 1$인 열의 합이다.

**(2)의 증명.** $n \ge 2$이고 $x$가 실수라 하자. $M = B + xC$로 두면 행렬의 (1)에 의해 $m_{j,1} = b_{j,1} + x c_{j,1}$이다. [[minor-matrix|소행렬]]의 (7)에 의해 $M^{(j,1)} = B^{(j,1)} + (xC)^{(j,1)} = B^{(j,1)} + xC^{(j,1)}$이고, 따라서 $\det M^{(j,1)} = \varphi_j(x)$이다. [[determinant|행렬식]]의 (3)(첫째 열 전개)에 의해 $\varphi(x) = \det M$은 $j$번째 항이 $(-1)^{j+1}(b_{j,1} + x c_{j,1})\varphi_j(x)$인 길이 $n$인 실수의 열의 합이다.

한편 $\ell_j = b_{j,1} t^0 + c_{j,1} t$로 두자. 이것은 $0$부터 번호가 붙은 열 $b_{j,1}, c_{j,1}$을 계수로 하는 $t^0, t^1$의 일차결합이므로, 다항함수의 (3)에 의해 $\ell_j(x) = b_{j,1} + c_{j,1} x$이고, (K1)에 의해 이것은 $b_{j,1} + x c_{j,1}$이다. 각 $j$에 함수 $g_j = (-1)^{j+1}(\ell_j \varphi_j)$가 하나씩 정해지므로 $j$번째 항이 $g_j$인 열이 있고, [[standard-basis|표준기저]]의 (1)에 의해 그 합의 $x$에서의 값은 실수의 열 $g_1(x), \dots, g_n(x)$의 합이다. 스칼라배와 곱의 값의 정의에 의해 $g_j(x) = (-1)^{j+1}\ell_j(x)\varphi_j(x) = (-1)^{j+1}(b_{j,1} + x c_{j,1})\varphi_j(x)$이다. 두 실수의 열은 모든 자리에서 항이 같으므로 같은 열이고, 같은 열의 합은 같다. 따라서 모든 $x$에서 $\varphi(x)$는 오른쪽 함수의 값과 같고, 두 함수는 같다.

**(5)의 증명.** (3)의 증명에서 쓰므로 먼저 보인다. $n = 1$이면 행렬식의 (2)와 행렬의 (1)에 의해 $\varphi(x) = (B + xC)_{1,1} = b_{1,1} + x c_{1,1}$이고, 위와 같이 다항함수의 (3)과 (K1)에 의해 이것은 $b_{1,1} t^0 + c_{1,1} t$의 $x$에서의 값이다. $C$가 영행렬 $O$이면, 행렬의 (1)에 의해 $O$는 벡터공간 $M_{n \times n}$의 영벡터이므로 (B4)에 의해 $xO = O$이고 [[vector-space|(V3)]]의 영벡터의 뜻에 의해 $B + xO = B + O = B$이다. 따라서 $\varphi(x) = \det B$이다. 한편 $((\det B)\,t^0)(x) = (\det B) \cdot 1 = \det B$이다((K4)). 따라서 $\varphi = (\det B)\,t^0$이다.

**(3)의 증명.** $n$에 대한 수학적 귀납법(시작점 $1$)으로 "모든 $n \times n$ 행렬 $B$, $C$에 대하여 $\varphi \in \mathcal{P}_n$이고 $\varphi$의 $t^n$의 계수가 $\det C$이다"를 보인다.

$n = 1$이면 (5)에 의해 $\varphi = b_{1,1} t^0 + c_{1,1} t$이다. 이것은 $t^0, t^1$의 일차결합이므로 $\mathcal{P}_1$에 들고, 계수의 (2)의 (iii)에 의해 $t^1$의 계수는 $c_{1,1}$이며, 행렬식의 (2)에 의해 $c_{1,1} = \det C$이다.

$n \ge 2$이고 크기 $n - 1$에서 주장이 성립한다고 하자. (2)의 $\varphi_j$는 $(n-1) \times (n-1)$ 행렬 $B^{(j,1)}$, $C^{(j,1)}$로 만든 함수이므로, 귀납 가정에 의해 $\varphi_j \in \mathcal{P}_{n-1}$이고 $\varphi_j$의 $t^{n-1}$의 계수는 $\det C^{(j,1)}$이다. $\ell_j = b_{j,1} t^0 + c_{j,1} t \in \mathcal{P}_1$이므로 [[product-of-polynomial-functions|다항함수의 곱]]의 (4)에 의해 $\ell_j \varphi_j \in \mathcal{P}_{1 + (n-1)} = \mathcal{P}_n$이고, 다항함수의 (1)에 의해 $g_j = (-1)^{j+1}(\ell_j \varphi_j) \in \mathcal{P}_n$이다. (2)에 의해 $\varphi = g_1 + \cdots + g_n$이므로 이 항목의 (1)에 의해 $\varphi \in \mathcal{P}_n$이다.

$t^n$의 계수를 계산한다. 곱의 (1)의 분배법칙, $(\alpha f)g = \alpha(fg)$, $t^0 f = f$에 의해
$$
\ell_j \varphi_j = b_{j,1}\varphi_j + c_{j,1}(t\varphi_j)
$$
이다. $\varphi_j \in \mathcal{P}_{n-1}$이고 $n > n - 1$이므로 계수의 (2)의 (iii)에 의해 $\varphi_j$의 $t^n$의 계수는 $0$이다. 계수의 (3)의 (ii)를 $t^1 = t$에 쓰면, $n \ge 1$이므로 $t\varphi_j$의 $t^n$의 계수는 $\varphi_j$의 $t^{n-1}$의 계수 $\det C^{(j,1)}$이다. 계수의 (3)의 (i)과 (K9), (K4)에 의해 $\ell_j \varphi_j$의 $t^n$의 계수는 $b_{j,1} \cdot 0 + c_{j,1}\det C^{(j,1)} = c_{j,1}\det C^{(j,1)}$이고, 다시 (3)의 (i)과 (K2)에 의해 $g_j$의 $t^n$의 계수는 $(-1)^{j+1} c_{j,1} \det C^{(j,1)}$이다. 이 항목의 (1)에 의해 $\varphi$의 $t^n$의 계수는 $j$번째 항이 $(-1)^{j+1} c_{j,1} \det C^{(j,1)}$인 길이 $n$인 실수의 열의 합이고, 행렬식의 (3)을 $C$에 쓰면 이 합은 $\det C$이다. 귀납법이 끝났다.

상수항은 계수의 (2)의 (iii)에 의해 $\varphi(0)$이다. (B3)에 의해 $0C$는 $M_{n \times n}$의 영벡터(영행렬)이므로 영벡터의 뜻에 의해 $B + 0C = B$이고 $\varphi(0) = \det B$이다.

**(4)의 증명.** (3)에 의해 $\varphi \in \mathcal{P}_n$이고 $t^n$의 계수는 $\det C$이다.

$\det C \ne 0$이라 하자. 계수의 (2)의 (iii)에 의해 영함수의 계수는 모두 $0$이므로 $\varphi \ne o$이다. 계수의 (4)의 첫째 줄에 의해 $\deg \varphi \le n$이다. 또 $n$은 $t^k$의 계수가 $0$이 아닌 정수 $k$ 전체의 집합에 들고 $\deg \varphi$는 그 집합의 최대 원소이므로 $n \le \deg \varphi$이다. [[well-ordering-principle|(L2)]]에 의해 $\deg \varphi = n$이고 최고차계수는 $t^n$의 계수 $\det C$이다.

$\det C = 0$이라 하자. $\varphi = o$이면 다항함수의 (1)에 의해 $\varphi \in \mathcal{P}_{n-1}$이다($n - 1 \ge 0$). $\varphi \ne o$이면 앞 문단과 같이 $\deg \varphi \le n$이고, $\deg \varphi$의 계수인 최고차계수는 $0$이 아닌데 $t^n$의 계수는 $0$이므로 $\deg \varphi \ne n$이다. 따라서 $\deg \varphi < n$이고, [[prime-number|(Z1)]]에 의해 $\deg \varphi + 1 \le n$, [[well-ordering-principle|(Z7)]]에 의해 $\deg \varphi \le n - 1$이다. 계수의 (4)의 첫째 줄에 의해 $\varphi \in \mathcal{P}_{n-1}$이다. 마지막으로 $C$의 어떤 행의 성분이 모두 $0$이면 행렬식의 (7)의 (a)에 의해 $\det C = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[2 × 2 에서 전개를 따라간 예]
$$
B = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}, \qquad C = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
$$

이라 합시다. [[matrix|행렬]]의 (1)에 의해 실수 $x$마다

$$
B + xC = \begin{pmatrix} 2 + x & 1 \\ x & 3 + x \end{pmatrix}
$$

이고, [[determinant|행렬식]]의 (4)에 의해 $\varphi(x) = (2 + x)(3 + x) - x \cdot 1 = 6 + 4x + x^2$입니다. [[polynomial-function|다항함수]]의 (3)에 의해 $\varphi = 6t^0 + 4t^1 + 1t^2$이고, $t^2$의 계수 $1$은 $\det C = 1 \cdot 1 - 1 \cdot 0 = 1$과, 상수항 $6$은 $\det B = 2 \cdot 3 - 0 \cdot 1 = 6$과 같습니다((3)).

(2)의 꼴로도 확인해 봅시다. 소행렬은 $B^{(1,1)} = \begin{pmatrix} 3 \end{pmatrix}$, $C^{(1,1)} = \begin{pmatrix} 1 \end{pmatrix}$, $B^{(2,1)} = \begin{pmatrix} 1 \end{pmatrix}$, $C^{(2,1)} = \begin{pmatrix} 0 \end{pmatrix}$이므로 행렬식의 (2)에 의해 $\varphi_1(x) = 3 + x$, $\varphi_2(x) = 1$입니다. (2)의 오른쪽의 $x$에서의 값은 $(2 + x)(3 + x) - (0 + x) \cdot 1$이고, 위의 값과 같습니다.
:::

:::counterexample[어느 행도 영행이 아닌 C 로 차수가 내려가는 예]
$C$의 행 가운데 모든 성분이 $0$인 것이 없어도 $\varphi$의 차수가 $n$보다 작을 수 있습니다.

$$
B = I_2, \qquad C = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}
$$

이면 $B + xC = \begin{pmatrix} 1 + x & x \\ x & 1 + x \end{pmatrix}$이고, [[determinant|행렬식]]의 (4)에 의해 $\varphi(x) = (1 + x)(1 + x) - x \cdot x = 1 + 2x$입니다. 따라서 $\varphi = 1t^0 + 2t^1$이고, [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (4)에 의해 차수는 $1$입니다. 이것은 (4)와 맞습니다. $\det C = 1 \cdot 1 - 1 \cdot 1 = 0$이기 때문입니다.
:::

## 확인 질문

:::check[$B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$이면 $\varphi$는 무엇인가?]
$B + xC = \begin{pmatrix} x & 1 \\ 1 & 0 \end{pmatrix}$이므로 [[determinant|행렬식]]의 (4)에 의해 $\varphi(x) = x \cdot 0 - 1 \cdot 1 = -1$이고, $\varphi = (-1)t^0$은 값이 $-1$인 상수함수입니다. $C$의 둘째 행의 성분이 모두 $0$이므로 (4)는 $\varphi \in \mathcal{P}_1$까지만 말하는데, 실제로는 차수가 $0$입니다. 상수항 $-1$은 $\det B = 0 \cdot 0 - 1 \cdot 1 = -1$과 같습니다((3)).
:::

:::check[$\det C \ne 0$인 $n \times n$ 행렬 $B$, $C$에 대하여, 모든 항 $x$에서 $B + xC$가 가역이 아닌 서로 다른 실수의 열은 길이가 얼마 이하인가?]
$n$ 이하입니다. [[determinant-and-invertibility|행렬식과 가역성]]의 (1)에 의해 $B + xC$가 가역이 아닌 것은 정확히 $\varphi(x) = 0$일 때, 곧 $x$가 $\varphi$의 [[roots-of-polynomial-function|근]]일 때입니다. (4)에 의해 $\varphi$는 영함수가 아니고 차수가 $n$이므로, [[coefficients-of-polynomial-function|다항함수의 계수와 차수]]의 (7)의 (i)에 의해 모든 항이 $\varphi$의 근인 서로 다른 실수의 열의 길이는 $n$ 이하입니다.
:::
