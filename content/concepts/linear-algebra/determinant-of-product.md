---
title: 곱의 행렬식
title_en: Determinant of a Product
aliases: [행렬식의 곱셈성, det(AB) = det A det B, 스칼라배의 행렬식, determinant of a product, multiplicativity of the determinant]
kind: theorem
field: linear-algebra
msc: ["15A15"]
level: undergrad
summary: n × n 행렬 A, B 에 대하여 det(AB) = det A · det B 이다. 따라서 AB ≠ BA 이어도 det(AB) = det(BA) 이고, 가역행렬 Q 에 대하여 det(Q⁻¹AQ) = det A 이며, 실수 c 에 대하여 det(cA) = cⁿ det A 이다.
requires: [well-ordering-principle, prime-number, mathematical-induction, real-number-arithmetic, real-function-space, finite-sum-of-vectors, matrix, matrix-product, matrix-product-properties, invertible-matrix, power-of-a-real-number, determinant-function, determinant, determinant-and-invertibility]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "1장 5절 Composition of linear transformations and matrix multiplication, 5.3 Properties of matrix multiplication, p.22, 연습문제 5.5, p.23; 6절 Invertible transformations and matrices. Isomorphisms, 연습문제 6.9, p.29; 3장 3절 Constructing the determinant, 3.5 Determinants of a transpose and of a product. Determinants of elementary matrices, Theorem 3.5, p.82, Lemma 3.6, Corollary 3.7, Lemma 3.8, p.83, Theorem 3.5 의 증명, p.84; 3.6 Summary of properties of determinant 의 11, 12, p.85; 3절 연습문제 3.1, 3.6, p.85; 7절 연습문제 7.1 h), j), 7.2, 7.3, p.97; 4장 1절 Main definitions, 1.3, p.101"
    checked: original
    note: "(1)은 출처 Theorem 3.5(p.82) 'For n × n matrices A and B, det(AB) = (det A)(det B)' 와 같다. 출처의 증명(p.84)은 B 가 가역이면 Lemma 3.8(가역행렬은 기본행렬의 곱, p.83)로 B 를 기본행렬의 곱으로 쓰고 Corollary 3.7(오른쪽에 기본행렬을 곱하는 것, p.83)을 쓰며, B 가 가역이 아니면 AB 도 가역이 아님을 보여 양변이 0 이라고 한다. 이 항목은 경우를 나누지 않는다. B 를 고정하고 X 를 det(XB) 로 보내는 함수가 행렬식 함수의 조건 (i)(ii)를 만족함을 보인 뒤, 행렬식 항목의 (8)(조건 (iii)이 없는 함수는 단위행렬에서의 값과 det 의 곱)을 쓴다. (2)는 (1)과 실수 곱의 교환법칙에서 바로 나온다. (3)은 출처 연습문제 3.6(p.85, 닮은 행렬의 행렬식이 같다)과 같은 내용을 가역행렬 Q 로 적은 것이다. 출처는 4장 1.3(p.101)에서 A = SBS⁻¹ 이면 det A = det S det B det S⁻¹ = det B 라고 적고 det S⁻¹ = 1/det S 를 쓴다. (4)는 출처 3.6절의 12(p.85) 'det(aA) = aⁿ det A' 와 같다. 출처는 그 뒤 문단에서 aA 는 각 행에 a 를 곱한 것이고 곱할 때마다 행렬식이 a 배가 된다고 적는다. 이 항목은 이것을 '처음 k 개의 행에 c 를 곱한 행렬'에 대한 귀납으로 적는다. 출처 연습문제 3.1(p.85)은 det A 와 det(5A) 의 관계를 묻고 det(5A) = 5 det A 는 1 × 1 에서만 성립한다고 덧붙이며, 연습문제 7.2(p.97)는 det(3A), det(−A), det(A²) 를 det A 로 나타내게 한다. 확인 질문 '$4 \\times 4$ 행렬 $A$에 대하여 $\\det(-A)$와 $\\det(2A)$를 $\\det A$로 나타내면 무엇인가?' 는 이 두 연습문제와 같은 물음이다. 연습문제 7.1 h)(p.97)는 (1)을 참·거짓으로 묻는다. 예시 '행렬식이 0 인 행렬이 들어간 곱'의 AB = 0(영행렬이 아닌 두 행렬의 곱이 영행렬)은 출처 1장 5절 연습문제 5.5(p.23, AB = 0 이지만 BA ≠ 0 인 A, B 를 찾아라)와 6절 연습문제 6.9(p.29, 영행렬이 아닌 B 로 AB = 0 이면 A 가 가역일 수 있는가)와 같은 종류의 대상이다. 예시 '곱하는 순서에 따라 다른 두 곱의 행렬식'의 AB ≠ BA 는 출처 1장 5.3(p.22)이 행렬의 곱은 일반적으로 교환법칙이 성립하지 않는다(AB ≠ BA)고 적는 것과 같은 관찰이다. 확인 질문 '$3 \\times 3$ 행렬 $A$, $B$에서 $\\det A = 2$이고 $AB = I_3$이면 $\\det B$는 무엇인가?'는 출처 연습문제 7.1 j)(p.97, det(A⁻¹) = 1/det(A))와 7.3 의 Hint(p.97, det(A) det(A⁻¹) 은 무엇인가)와 같은 발상이다. 반례 'det(A + B) 가 det A + det B 와 다른 2 × 2 의 예'의 마지막 경우 det(2I₂) = 4 는 출처 연습문제 3.1(p.85)과 그 Remark(det(5A) = 5 det A 는 1 × 1 에서만 성립)와 같은 발상이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 거짓이던 직관 2건, 단원 글의 상태 문장 1건, 메모의 부정 주장 2건, 근거 없던 작은 사실 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$n$이 자연수이고 $A$, $B$가 $n \times n$ [[matrix|행렬]]이라 하자. $\det$는 [[determinant|행렬식]]이고, 곱 $AB$는 [[matrix-product|행렬의 곱]], $cA$는 행렬의 스칼라배, 가역과 $Q^{-1}$은 [[invertible-matrix|가역행렬과 역행렬]]의 것이며, $c^n$은 [[power-of-a-real-number|실수의 거듭제곱]]이다.

1. (곱의 행렬식) $\det(AB) = \det A \cdot \det B$이다.
2. (곱하는 순서) $\det(AB) = \det(BA)$이다. $AB \ne BA$인 경우에도 그렇다.
3. (가역행렬로 끼우기) $Q$가 가역인 $n \times n$ 행렬이면 $\det(Q^{-1}AQ) = \det A$이다.
4. (스칼라배) $c$가 실수이면 $\det(cA) = c^n \det A$이다. 특히 $\det(-A) = (-1)^n \det A$이고 $\det(cI_n) = c^n$이며, $c = 0$이면 $\det(0A) = 0$이다.
:::

:::english
Let $n$ be a natural number and $A$, $B$ be $n \times n$ matrices. $\det$ is the determinant; the product $AB$ is the matrix product, $cA$ is the scalar multiple of a matrix, invertibility and $Q^{-1}$ are as in the entry on invertible matrices, and $c^n$ is a power of a real number.

1. (Determinant of a product) $\det(AB) = \det A \cdot \det B$.
2. (Order of the factors) $\det(AB) = \det(BA)$. This holds even when $AB \ne BA$.
3. (Conjugating by an invertible matrix) If $Q$ is an invertible $n \times n$ matrix, then $\det(Q^{-1}AQ) = \det A$.
4. (Scalar multiples) If $c$ is a real number, then $\det(cA) = c^n \det A$. In particular $\det(-A) = (-1)^n \det A$ and $\det(cI_n) = c^n$, and if $c = 0$ then $\det(0A) = 0$.
:::

## 직관

$B$를 하나 정해 두고 $X$에 $\det(XB)$를 대응시켜 봅시다. $XB$의 $p$번째 행은 $X$의 $p$번째 행에만 기대고, 그 행에 대해 일차식입니다. 그래서 이 대응은 행렬식 함수처럼 각 행에 대해 선형이고, $X$의 두 행이 같으면 $XB$의 두 행도 같아 값이 $0$입니다. 행렬식 함수의 조건 가운데 단위행렬에서 $1$이라는 것만 빠졌는데, 이런 함수는 단위행렬에서의 값 $\det(I_nB) = \det B$에 $\det X$를 곱한 것뿐입니다. 그래서 $\det(XB) = \det X \cdot \det B$입니다.

행렬의 곱은 순서를 바꾸면 달라질 수 있지만 실수의 곱은 그렇지 않습니다. (1)로 두 행렬식을 실수의 곱으로 바꾸고 나면 순서가 상관없어지므로 (2)와 (3)이 나옵니다. (3)의 $Q^{-1}AQ$는 선형대수 강의에서 $A$와 닮은 행렬이라 부른 꼴입니다.

(4)에서 지수가 $n$인 까닭은 $cA$가 $A$의 모든 행, 곧 $n$개의 행에 저마다 $c$를 곱한 행렬이기 때문입니다. 한 행에 $c$를 곱할 때마다 행렬식이 $c$배가 되므로 $c$가 $n$번 곱해집니다. 그래서 $\det(2A)$는 $2 \times 2$에서 $4 \det A$, $3 \times 3$에서 $8 \det A$입니다.

## 증명

:::idea
$X$를 $\det(XB)$로 보내는 함수는 행렬식 함수의 조건 (i)과 (ii)를 만족하므로, [[determinant|행렬식]]의 (8)에 의해 $\det(XB) = \det(I_nB)\det X$이다. (4)는 처음 $k$개의 행에 $c$를 곱한 행렬에 대해 $k$에 관한 귀납법을 쓴다.
:::

:::hint
[[matrix-product|행렬의 곱]]의 (2)로 $(XB)_{p,q}$를 $X$의 $p$번째 행의 성분으로 적어 보세요. $X$의 $p$번째 행이 $\alpha$(한 행) $+ \beta$(다른 행)이면 $(XB)_{p,q}$는 어떻게 됩니까?
:::

:::hint
(4)에서 $N_k$의 $k + 1$번째 행에 $c$를 곱하면 $N_{k+1}$이 됩니다. 행렬식의 (7)의 (b)는 $c = 0$도 허락합니다.
:::

:::proof
행렬식 항목의 번호는 "행렬식의 (n)"으로 인용한다. 행렬식 함수와 그 조건 (i)–(iii)은 [[determinant-function|행렬식 함수]]의 것이고, 두 행렬의 행이 같다는 것과 한 행이 두 행의 일차결합이라는 것은 그 항목의 (1)에 의해 성분으로 읽는다. 실수의 계산은 [[real-number-arithmetic|실수의 계산 법칙]]의 번호로 인용한다. $\mathbb{R}$을 벡터공간으로 보면 스칼라배는 실수의 곱이므로, 실수의 열의 합에 [[finite-sum-of-vectors|벡터의 유한 합]]의 (C1), (C2)를 쓸 수 있다.

**(1)의 증명.** $B$를 고정한다. $X \in M_{n \times n}$마다 실수 $\det(XB)$가 하나 정해지므로 [[real-function-space|(G)]]에 의해 $X$를 $\det(XB)$로 보내는 함수 $\Delta : M_{n \times n} \to \mathbb{R}$가 있다. [[matrix-product|행렬의 곱]]의 (2)에 의해 모든 $X$, $i$, $q$에서

$$
(XB)_{i,q} = x_{i,1} b_{1,q} + \cdots + x_{i,n} b_{n,q}
$$

이고, 오른쪽은 $l$번째 항이 $x_{i,l} b_{l,q}$인 길이 $n$인 실수의 열의 합이다. 이것을 (가)라 부른다.

$\Delta$가 조건 (i)을 만족함을 보인다. $p \in \{1, \dots, n\}$, 실수 $\alpha$, $\beta$와 $X$, $Y$, $Z \in M_{n \times n}$에 대하여, $X$, $Y$, $Z$가 $p$번째 행을 뺀 모든 행에서 서로 같고 $Z$의 $p$번째 행이 $\alpha$($X$의 $p$번째 행) $+ \beta$($Y$의 $p$번째 행)이라 하자. 행렬식 함수의 (1)에 의해 $i \ne p$인 모든 $i$와 모든 $l$에서 $x_{i,l} = y_{i,l} = z_{i,l}$이고, 모든 $l$에서 $z_{p,l} = \alpha x_{p,l} + \beta y_{p,l}$이다.

- $i \ne p$이면 (가)의 세 열 $x_{i,l} b_{l,q}$, $y_{i,l} b_{l,q}$, $z_{i,l} b_{l,q}$는 모든 자리에서 같은 열이므로 합도 같다. 곧 모든 $q$에서 $(XB)_{i,q} = (YB)_{i,q} = (ZB)_{i,q}$이다.
- $i = p$이면 (K12)의 (i)에 의해 $l$번째 항은 $z_{p,l} b_{l,q} = (\alpha x_{p,l}) b_{l,q} + (\beta y_{p,l}) b_{l,q}$이다. 벡터의 유한 합의 (C1)을 $v_l = b_{l,q}$로 쓰면, $(ZB)_{p,q}$는 $l$번째 항이 $(\alpha x_{p,l}) b_{l,q}$인 열의 합과 $l$번째 항이 $(\beta y_{p,l}) b_{l,q}$인 열의 합을 더한 것이다. (C2)에 의해 앞의 합은 $\alpha(x_{p,1} b_{1,q} + \cdots + x_{p,n} b_{n,q})$이고 (가)에 의해 이것은 $\alpha (XB)_{p,q}$이다. 같은 까닭으로 뒤의 합은 $\beta (YB)_{p,q}$이다. 따라서 $(ZB)_{p,q} = \alpha (XB)_{p,q} + \beta (YB)_{p,q}$이다.

따라서 행렬식 함수의 (1)에 의해 $XB$, $YB$, $ZB$는 $p$번째 행을 뺀 모든 행에서 서로 같고 $ZB$의 $p$번째 행은 $\alpha$($XB$의 $p$번째 행) $+ \beta$($YB$의 $p$번째 행)이다. 행렬식의 (1)의 (i)에 의해 $\det(ZB) = \alpha \det(XB) + \beta \det(YB)$, 곧 $\Delta(Z) = \alpha \Delta(X) + \beta \Delta(Y)$이다.

$\Delta$가 조건 (ii)를 만족함을 보인다. $j \ne k$이고 $X$의 $j$번째 행과 $k$번째 행이 같다고 하자. 행렬식 함수의 (1)에 의해 모든 $l$에서 $x_{j,l} = x_{k,l}$이므로, (가)의 두 열 $x_{j,l} b_{l,q}$와 $x_{k,l} b_{l,q}$는 같은 열이고 모든 $q$에서 $(XB)_{j,q} = (XB)_{k,q}$이다. 따라서 $XB$의 $j$번째 행과 $k$번째 행이 같고, 행렬식의 (1)의 (ii)에 의해 $\Delta(X) = \det(XB) = 0$이다.

$\Delta$가 (i)과 (ii)를 만족하므로 행렬식의 (8)에 의해 모든 $X$에서 $\Delta(X) = \Delta(I_n) \det X$이다. [[matrix-product-properties|행렬 곱의 성질]]의 (4)에 의해 $I_n B = B$이므로 $\Delta(I_n) = \det B$이다. $X = A$로 두면 $\det(AB) = \det B \cdot \det A$이고, (K1)에 의해 $\det(AB) = \det A \cdot \det B$이다.

**(2)의 증명.** (1)을 $AB$와 $BA$에 쓰면 $\det(AB) = \det A \cdot \det B$이고 $\det(BA) = \det B \cdot \det A$이다. (K1)에 의해 두 값은 같다.

**(3)의 증명.** 행렬 곱의 성질의 (1)에 의해 $Q^{-1}AQ$는 $(Q^{-1}A)Q = Q^{-1}(AQ)$이다. (1)을 두 번 쓰면 $\det(Q^{-1}AQ) = \det(Q^{-1}) \cdot (\det A \cdot \det Q)$이다. [[determinant-and-invertibility|행렬식과 가역성]]의 (2)에 의해 $\det Q \ne 0$이고 $\det(Q^{-1}) = (\det Q)^{-1}$이므로, (K1), (K2)와 (K8)의 (iii), (K4)에 의해

$$
\begin{aligned}
&\det(Q^{-1}AQ) \\
&= \big((\det Q)^{-1} \det Q\big) \det A \\
&= 1 \cdot \det A = \det A
\end{aligned}
$$

이다.

**(4)의 증명.** $0$ 이상인 정수 $k$마다, $(i, q)$ 성분이 $i \le k$이면 $c\,a_{i,q}$이고 $i > k$이면 $a_{i,q}$인 $n \times n$ 행렬을 $N_k$라 하자. $(i, q)$마다 실수가 하나씩 정해지므로 (G)에 의해 이런 행렬이 있고, [[matrix|행렬]]의 (2)에 의해 하나뿐이다. 모든 행 번호 $i$는 $i \ge 1$이고 $1 > 0$이므로([[well-ordering-principle|정렬 원리]] 항목의 (Z8), (Z6)) $i > 0$이고, $N_0$의 성분은 모두 $a_{i,q}$이고, 행렬의 (2)에 의해 $N_0 = A$이다. 모든 $i \le n$이므로 $N_n$의 성분은 모두 $c\,a_{i,q}$이고, 행렬의 (1)의 스칼라배와 (2)에 의해 $N_n = cA$이다.

$0$ 이상인 정수 $k$에 대하여 명제 "$k \le n$이면 $\det N_k = c^k \det A$"를 $S_k$라 하고, [[mathematical-induction|수학적 귀납법]]을 시작점 $0$으로 쓴다.

- 기초 단계: $N_0 = A$이고 [[power-of-a-real-number|실수의 거듭제곱]]의 정의에 의해 $c^0 = 1$이므로 (K1), (K4)에 의해 $\det N_0 = \det A = c^0 \det A$이다.
- 귀납 단계: $k \ge 0$이고 $S_k$가 참이라 하고, $k + 1 \le n$이라 하자. 정렬 원리 항목의 (L3)에 의해 $k < k + 1$이므로 (Z6)에 의해 $k \le n$이고 $S_k$에 의해 $\det N_k = c^k \det A$이다. 행 번호 $i$는 (Z5)와 [[prime-number|소수]] 항목의 (Z1)에 의해 $i \le k$이거나 $i \ge k + 1$이고, 뒤의 것은 $i = k + 1$이거나 $i > k + 1$이다. $i \le k$이면 $N_k$와 $N_{k+1}$의 $(i, q)$ 성분은 둘 다 $c\,a_{i,q}$이고, $i > k + 1$이면 둘 다 $a_{i,q}$이다. $i = k + 1$이면 $N_{k+1}$의 성분은 $c\,a_{k+1,q}$이고 $N_k$의 성분은 $a_{k+1,q}$이다. 따라서 [[determinant-function|행렬식 함수]]의 (1)에 의해 $N_{k+1}$은 $k + 1$번째 행을 뺀 모든 행에서 $N_k$와 같고 $N_{k+1}$의 $k + 1$번째 행은 $c$($N_k$의 $k + 1$번째 행)이다. 행렬식의 (7)의 (b)에 의해 $\det N_{k+1} = c \det N_k = c\,(c^k \det A)$이고, (K2)와 실수의 거듭제곱의 (1)의 $c^{k+1} = c\,c^k$에 의해 $\det N_{k+1} = c^{k+1} \det A$이다.

따라서 $0$ 이상인 모든 정수 $k$에서 $S_k$가 참이고, $k = n$으로 두면 $\det(cA) = \det N_n = c^n \det A$이다.

$c = -1$이면 행렬의 (1)에 의해 $(-1)A$의 성분은 $(-1)a_{i,q} = -a_{i,q}$((K9))이므로 $(-1)A = -A$이고, $\det(-A) = (-1)^n \det A$이다. $A = I_n$이면 행렬식의 (1)의 (iii)에 의해 $\det I_n = 1$이므로 $\det(cI_n) = c^n$이다. $c = 0$이면 $n \ge 1$이므로 실수의 거듭제곱의 (2)의 (iv)에 의해 $0^n = 0$이고, (K9)에 의해 $\det(0A) = 0 \cdot \det A = 0$이다. $\blacksquare$
:::

## 예시와 반례

:::example[곱하는 순서에 따라 다른 두 곱의 행렬식]
$A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 4 & -1 \end{pmatrix}$이라 합시다. [[matrix-product|행렬의 곱]]의 (2)로 계산하면

$$
\begin{aligned}
AB &= \begin{pmatrix} 6 & -1 \\ 12 & -3 \end{pmatrix}, \\
BA &= \begin{pmatrix} 2 & 1 \\ 8 & 1 \end{pmatrix}
\end{aligned}
$$

이므로 $AB \ne BA$입니다. 그래도 [[determinant|행렬식]]의 (4)에 의해 $\det(AB) = 6 \cdot (-3) - 12 \cdot (-1) = -6$이고 $\det(BA) = 2 \cdot 1 - 8 \cdot 1 = -6$입니다. 한편 $\det A = 6$, $\det B = -1$이므로 두 값은 (1)이 말하는 $\det A \cdot \det B = -6$과 같습니다.
:::

:::example[행렬식이 0 인 행렬이 들어간 곱]
$A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$, $B = \begin{pmatrix} 2 & -6 \\ -1 & 3 \end{pmatrix}$, $C = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이라 합시다. $\det A = 4 - 4 = 0$, $\det B = 6 - 6 = 0$, $\det C = 1$입니다. 곱을 계산하면

$$
\begin{aligned}
AB &= \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}, \\
AC &= \begin{pmatrix} 1 & 3 \\ 2 & 6 \end{pmatrix}, \\
CA &= \begin{pmatrix} 3 & 6 \\ 2 & 4 \end{pmatrix}
\end{aligned}
$$

이고, 행렬식은 차례로 $0$, $6 - 6 = 0$, $12 - 12 = 0$입니다. (1)에 의해 $\det A = 0$이면 $X$가 어떤 $2 \times 2$ 행렬이든 $\det(AX) = 0 \cdot \det X = 0$이고 $\det(XA) = \det X \cdot 0 = 0$입니다. $C$처럼 다른 쪽이 가역이어도 그렇습니다. $AB$처럼 영행렬이 아닌 두 행렬의 곱이 영행렬일 수도 있습니다.
:::

:::counterexample[det(A + B) 가 det A + det B 와 다른 2 × 2 의 예]
$A = I_2$, $B = -I_2$이면 $\det A = 1$이고 (4)에 의해 $\det B = (-1)^2 \cdot 1 = 1$이므로 $\det A + \det B = 2$입니다. 그런데 $A + B$는 영행렬이고 [[determinant|행렬식]]의 (4)에 의해 $\det(A + B) = 0$입니다. 이 항목의 진술은 곱에 대한 것이고 합 $A + B$의 행렬식에 대해서는 아무것도 말하지 않습니다. $A = B = I_2$로 두어도 $\det(A + B) = \det(2I_2) = 2^2 = 4$이지만 $\det A + \det B = 2$입니다.
:::

## 확인 질문

:::check[$4 \times 4$ 행렬 $A$에 대하여 $\det(-A)$와 $\det(2A)$를 $\det A$로 나타내면 무엇인가?]
(4)에 의해 $\det(-A) = (-1)^4 \det A = \det A$이고 $\det(2A) = 2^4 \det A = 16 \det A$입니다. $n$이 짝수이므로 $(-1)^4 = 1$입니다([[power-of-a-real-number|실수의 거듭제곱]]의 (5)).
:::

:::check[$3 \times 3$ 행렬 $A$, $B$에서 $\det A = 2$이고 $AB = I_3$이면 $\det B$는 무엇인가?]
(1)에 의해 $\det A \cdot \det B = \det(AB) = \det I_3 = 1$이므로 $2 \det B = 1$이고, [[real-number-arithmetic|(K8)]]의 (iii)에 의해 $\det B = 2^{-1}$입니다. 가역성을 따로 확인하지 않아도 (1)만으로 값이 정해집니다.
:::
