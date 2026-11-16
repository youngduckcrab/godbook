---
title: 행 동치
title_en: Row Equivalence
aliases: [행 동치, 행동치, 기본행렬의 곱, 행 연산으로 얻는다, row equivalent, row equivalence, product of elementary matrices]
kind: definition
field: linear-algebra
msc: ["15A06"]
level: undergrad
summary: 단위행렬에서 시작해 기본행렬을 하나씩 왼쪽에 곱해 가는 사슬의 끝을 기본행렬의 곱이라 하고, B = EA 인 기본행렬의 곱 E 가 있으면 A 와 B 를 행 동치라 한다. 기본행렬의 곱은 곱에 닫혀 있고 가역이며 역행렬도 기본행렬의 곱이고, 행 동치는 동치관계이며, 행 동치인 첨가행렬의 연립일차방정식은 해집합이 같다.
requires: [relation, equivalence-relation, prime-number, well-ordering-principle, mathematical-induction, real-number-arithmetic, real-function-space, subspace, finite-sum-of-vectors, linear-map, kernel-and-range, dimension, rank-and-nullity, rank-nullity-theorem, rank-of-a-matrix, matrix, matrix-vector-product, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, system-of-linear-equations, elementary-matrix]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "2장 3절 Analyzing the pivots, p.47; 4절 Finding A⁻¹ by row reduction, pp.52–53 (각주 포함)"
    checked: original
    note: "출처에는 '행 동치'와 '기본행렬의 곱'의 정의가 없다. 'row equivalent'라는 말은 책 전체에서 두 번 나온다(검색한 범위). 4절(p.52)의 'Any invertible matrix is row equivalent (i.e. can be reduced by row operations) to the identity matrix'에서 괄호로 뜻을 풀어 쓰고, 3장 3.5절(p.83)의 행렬식의 증명에서 같은 사실을 인용한다. 출처는 행 연산에 대응하는 기본행렬들의 곱을 E = E_N ⋯ E_2E_1 로 적고(3절 p.47, 4절 p.53), 각주(p.53)에서 처음 한 연산 E_1 이 곱의 가장 오른쪽에 와야 한다고 적는다. 출처는 행렬 여러 개의 곱을 따로 정의하지 않는다. 이 항목은 '기본행렬의 곱'을 단위행렬에서 시작해 기본행렬을 하나씩 왼쪽에 곱해 가는 M_{m×m} 의 벡터의 열(사슬)의 끝으로 정의하여, 재귀 정의를 새로 받아들이지 않는다. 출처의 각주가 말하는 순서는 이 정의에서 저절로 맞는다. 기본행렬의 곱이 가역이라는 것을 출처는 'E is a product of elementary matrices, so E is an invertible matrix'(2장 7절 p.63)라고 적는다. 곱의 역행렬이 역행렬들을 거꾸로 곱한 것이고 기본행렬의 역이 기본행렬이라는 계산은 출처 4절 Theorem 4.1 의 증명(p.53)과 3장 3.5절 Lemma 3.8 의 증명(p.83)에 있다. 이 항목은 그것을 사슬에 대한 귀납 (3)으로 적는다. 행 연산이 계수를 바꾸지 않는다는 (5)의 계수 부분은 출처 2장 7절 연습문제 7.1 c(p.67)가 참·거짓으로 묻는다. (1), (2)와 그 증명, 행 동치가 동치관계라는 (4)는 출처에 진술되어 있지 않다(2장 본문과 연습문제, 3장 3.5절을 읽은 범위). (5)와 (6)의 해집합에 관한 부분은 출처 2.1.1(p.42)의 논증(왼쪽에 E 를 곱하면 해를 잃지 않고, E⁻¹ 을 곱하면 원래 방정식으로 돌아온다)과 같다. 예시의 '가역행렬이 단위행렬과 행 동치'는 출처 p.52 의 위 문장과 같은 내용의 한 예이고, 행 연산으로 EA = I 인 E 를 얻는 것은 출처 4절 연습문제 4.1(p.54)이 하는 일과 같은 발상이다(행렬은 다르다). 반례(행 연산은 열공간을 바꿀 수 있다)와 확인 질문은 출처 2장 3절, 4절, 7절의 연습문제를 다시 읽고 겹치지 않게 새로 만들었다."
status: reviewed
review_note: "2026-11-16 작성자의 자기 검토 뒤 독립 검토 통과(전반 2회, 후반 1회). 기약 사다리꼴의 계수와 기본행렬의 작용을 진술에 더하고, 출처 메모, 헷갈리는 용어와 겹치는 글자, 직관의 일반화를 보완했다. 마지막 수정은 지휘자가 변경분을 확인했다."
added: 2026-11-16
---

:::statement
$m$이 자연수라 하자. [[matrix|행렬]]의 (1)에 의해 $M_{m \times m}$은 벡터공간이므로, 정수 $N \ge 0$에 대하여 함수 $F : \{1, \dots, N\} \to M_{m \times m}$는 [[finite-sum-of-vectors|벡터의 유한 합]]에서 정한 $M_{m \times m}$의 길이 $N$인 벡터의 열이다. 이것을 **$M_{m \times m}$의 벡터의 열**이라 하고(행렬의 $k$번째 열(column)과는 다른 것이다) $F_1, \dots, F_N$으로 쓴다($F_i = F(i)$). 이 벡터의 열의 "처음 $k$개"와 "덧붙인 열"은 그 항목에서 정한 것이다. [[elementary-matrix|기본행렬]]은 그 항목에서 정한 것이다.

**기본행렬의 곱.** $E$가 $m \times m$ 행렬이라 하자. 정수 $N \ge 1$에 대하여 $M_{m \times m}$의 길이 $N$인 벡터의 열 $F_1, \dots, F_N$이 **$E$에 이르는 사슬**(chain)인 것은 정확히 다음 세 조건이 모두 성립할 때이다.

- $F_1 = I_m$이다.
- $F_N = E$이다.
- $1 \le i < N$인 각 정수 $i$에 대하여 $F_{i+1} = GF_i$인 $m \times m$ 기본행렬 $G$가 있다.

$E$가 **기본행렬의 곱**(product of elementary matrices)인 것은 정확히 어떤 정수 $N \ge 1$에 대하여 $E$에 이르는 길이 $N$인 사슬이 있을 때이다.

**행 동치.** $n$이 자연수이고 $A$, $B$가 $m \times n$ 행렬이라 하자. $A$와 $B$가 **행 동치**(row equivalent)인 것은 정확히 $B = EA$인 $m \times m$ 기본행렬의 곱 $E$가 있을 때이다. 이때 "$B$는 $A$에서 행 연산으로 얻어진다"고도 한다. 곧 행 동치는 $M_{m \times n}$ 위의 [[relation|관계]] $\{(A, B) \in M_{m \times n} \times M_{m \times n} : B = EA\text{인 기본행렬의 곱 } E\text{가 있다}\}$이다.

다음이 성립한다. $n$은 자연수이다.

1. $I_m$은 기본행렬의 곱이다. $E$가 기본행렬의 곱이고 $G$가 $m \times m$ 기본행렬이면 $GE$도 기본행렬의 곱이다. 특히 모든 $m \times m$ 기본행렬은 기본행렬의 곱이다.
2. $E$와 $E'$이 $m \times m$ 기본행렬의 곱이면 $E'E$도 기본행렬의 곱이다.
3. 기본행렬의 곱 $E$는 [[invertible-matrix|가역]]이고 $E^{-1}$도 기본행렬의 곱이다.
4. 행 동치는 $M_{m \times n}$ 위의 [[equivalence-relation|동치관계]]이다.
5. $A$가 $m \times n$ 행렬이고 $E$가 기본행렬의 곱이며 $B = EA$이면, 모든 $b \in \mathbb{R}^m$에서 [[system-of-linear-equations|연립일차방정식]] $Ax = b$의 해집합과 $Bx = Eb$의 해집합이 같다. 곧 $\{x \in \mathbb{R}^n : Ax = b\} = \{x \in \mathbb{R}^n : Bx = Eb\}$이다. 또 $\operatorname{Ker} T_B = \operatorname{Ker} T_A$이고 $\operatorname{rank} T_B = \operatorname{rank} T_A$이다. 곧 [[rank-of-a-matrix|행렬의 계수]]의 기호로 $\operatorname{rank} B = \operatorname{rank} A$이다. ($T_A$는 [[matrix-vector-product|행렬과 벡터의 곱]]의 (2)의 선형사상이고, 계수는 [[rank-and-nullity|계수와 퇴화차수]]의 것이다.)
6. $A$, $A'$이 $m \times n$ 행렬이고 $b$, $b' \in \mathbb{R}^m$이며 첨가행렬 $(A \mid b)$와 $(A' \mid b')$이 행 동치이면, $Ax = b$의 해집합과 $A'x = b'$의 해집합이 같다.
:::

:::english
Let $m$ be a natural number. By (1) of the entry on matrices, $M_{m \times m}$ is a vector space, so for an integer $N \ge 0$ a function $F : \{1, \dots, N\} \to M_{m \times m}$ is a sequence of vectors of $M_{m \times m}$ of length $N$ in the sense of the entry on finite sums of vectors. We call it a **sequence of vectors of $M_{m \times m}$** (not to be confused with a column of a matrix) and write it $F_1, \dots, F_N$ (with $F_i = F(i)$). The "first $k$ terms" and the "appended sequence" of such a sequence are as defined in that entry. Elementary matrices are as defined in their entry.

**Products of elementary matrices.** Let $E$ be an $m \times m$ matrix. For an integer $N \ge 1$, a sequence of vectors $F_1, \dots, F_N$ of $M_{m \times m}$ of length $N$ is a **chain to $E$** exactly when all three of the following hold.

- $F_1 = I_m$.
- $F_N = E$.
- For each integer $i$ with $1 \le i < N$ there is an $m \times m$ elementary matrix $G$ with $F_{i+1} = GF_i$.

$E$ is a **product of elementary matrices** exactly when there is a chain to $E$ of length $N$ for some integer $N \ge 1$.

**Row equivalence.** Let $n$ be a natural number and let $A$, $B$ be $m \times n$ matrices. $A$ and $B$ are **row equivalent** exactly when there is an $m \times m$ product of elementary matrices $E$ with $B = EA$. We also say then that "$B$ is obtained from $A$ by row operations". That is, row equivalence is the relation $\{(A, B) \in M_{m \times n} \times M_{m \times n} : \text{there is a product of elementary matrices } E \text{ with } B = EA\}$ on $M_{m \times n}$.

The following hold. Here $n$ is a natural number.

1. $I_m$ is a product of elementary matrices. If $E$ is a product of elementary matrices and $G$ is an $m \times m$ elementary matrix, then $GE$ is a product of elementary matrices. In particular, every $m \times m$ elementary matrix is a product of elementary matrices.
2. If $E$ and $E'$ are $m \times m$ products of elementary matrices, then so is $E'E$.
3. A product of elementary matrices $E$ is invertible, and $E^{-1}$ is also a product of elementary matrices.
4. Row equivalence is an equivalence relation on $M_{m \times n}$.
5. If $A$ is an $m \times n$ matrix, $E$ is a product of elementary matrices, and $B = EA$, then for every $b \in \mathbb{R}^m$ the system of linear equations $Ax = b$ and the system $Bx = Eb$ have the same solution set. That is, $\{x \in \mathbb{R}^n : Ax = b\} = \{x \in \mathbb{R}^n : Bx = Eb\}$. Moreover, $\operatorname{Ker} T_B = \operatorname{Ker} T_A$ and $\operatorname{rank} T_B = \operatorname{rank} T_A$; that is, in the notation of the entry on the rank of a matrix, $\operatorname{rank} B = \operatorname{rank} A$. ($T_A$ is the linear map of (2) of the entry on the matrix–vector product, and the rank is the one of the entry on rank and nullity.)
6. If $A$, $A'$ are $m \times n$ matrices, $b$, $b' \in \mathbb{R}^m$, and the augmented matrices $(A \mid b)$ and $(A' \mid b')$ are row equivalent, then the systems $Ax = b$ and $A'x = b'$ have the same solution set.
:::

## 직관

행렬에 기본 행 연산을 몇 번 잇달아 하면 기본행렬 $G_1$, $G_2$, …를 차례로 왼쪽에 곱하게 되고, 결과는 $\cdots G_2(G_1A)$입니다. 결합법칙에 의해 이것은 "지금까지 곱한 기본행렬들을 모은 행렬"을 $A$에 한 번 곱한 것과 같습니다. 사슬 $F_1, \dots, F_N$은 그 모은 행렬이 연산마다 어떻게 자라는지를 적은 기록입니다. 아무 연산도 하지 않은 처음에는 $I_m$이고, 연산을 하나 할 때마다 그 기본행렬이 왼쪽에 붙습니다. 그래서 처음 한 연산이 곱의 가장 오른쪽에 놓입니다.

행 동치는 "행 연산으로 서로 오갈 수 있다"는 관계입니다. 기본 행 연산은 모두 되돌릴 수 있으므로([[elementary-matrix|기본행렬]]의 (3)) $A$에서 $B$로 갈 수 있으면 $B$에서 $A$로도 돌아올 수 있고, 이것이 이 항목의 (4)의 대칭성입니다. 계단을 오르내리는 것에 비유하면, 한 칸씩 오르는 것이 기본 행 연산이고 같은 칸을 거꾸로 밟으면 내려올 수 있습니다. 비유가 맞지 않는 곳은 계단에는 높낮이의 순서가 있지만 행 동치에는 어느 쪽이 위라는 순서가 없다는 점입니다.

연립일차방정식을 풀 때 이것이 중요한 까닭은 이 항목의 (6)입니다. 첨가행렬에 행 연산을 해도 해집합은 그대로이므로, 풀기 쉬운 꼴이 될 때까지 행 연산을 해도 됩니다. 한편 아래 반례처럼 행 연산은 열들의 생성은 바꿀 수 있습니다. 바꾸지 않는 것 가운데 하나가 이 항목의 (5)의 핵과 계수입니다.

## 성질의 증명

:::proof
아래에서 결합법칙과 단위행렬 법칙은 [[matrix-product-properties|행렬 곱의 성질]]의 (1)과 (4)이다. 행렬은 모두 $m \times m$이거나 $m \times n$이므로 곱이 정의된다. 정수에 관해서는 [[prime-number]]의 진술에서 받아들인 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)–(Z7), (L1), (L3)을 쓴다.

**사슬의 처음 부분.** $N \ge 1$이고 $F_1, \dots, F_{N+1}$이 $E$에 이르는 사슬이라 하자. 그 처음 $N$개 $F_1, \dots, F_N$은 $F_N$에 이르는 길이 $N$인 사슬이다. 실제로 $N \ge 1$이므로 첫 항은 $F_1 = I_m$이고, 끝 항은 $F_N$이며, $1 \le i < N$이면 (L3)과 (Z6)에 의해 $i < N + 1$이므로 $F_{i+1} = GF_i$인 기본행렬 $G$가 있다. 또 (L3)에 의해 $N < N + 1$이므로 $E = F_{N+1} = GF_N$인 기본행렬 $G$가 있다. 이것을 (☆)라 하자.

**(1)의 증명.** $I_m$: [[real-function-space|(G)]]에 의해 $1$에서의 값이 $I_m$인 길이 $1$인 $M_{m \times m}$의 벡터의 열 $F_1$이 있다. $F_1 = I_m$이고 $N = 1$이므로 $F_N = F_1 = I_m$이며, $1 \le i < 1$인 정수 $i$는 (L1)에 의해 없으므로 셋째 조건은 저절로 성립한다. 따라서 이것은 $I_m$에 이르는 사슬이다.

$GE$: $F_1, \dots, F_N$이 $E$에 이르는 사슬이라 하고, 이 열에 $GE$를 덧붙인 길이 $N + 1$인 $M_{m \times m}$의 벡터의 열을 $H_1, \dots, H_{N+1}$이라 하자. 곧 $i \le N$이면 $H_i = F_i$이고 $H_{N+1} = GE$이다. $N \ge 1$이므로 $H_1 = F_1 = I_m$이고, $H_{N+1} = GE$이다. $1 \le i < N + 1$인 정수 $i$를 잡자. (Z1)에 의해 $i + 1 \le N + 1$이고 (Z7)에 의해 $i \le N$이므로, $i < N$이거나 $i = N$이다. $i < N$이면 $i + 1 \le N$((Z1))이므로 $H_{i+1} = F_{i+1}$, $H_i = F_i$이고, $F$가 사슬이므로 $F_{i+1} = G'F_i$인 기본행렬 $G'$이 있다. $i = N$이면 $H_{N+1} = GE = GF_N = GH_N$이다. 따라서 $H$는 $GE$에 이르는 사슬이고, $GE$는 기본행렬의 곱이다. 끝으로 $G$가 기본행렬이면 단위행렬 법칙에 의해 $G = GI_m$이고, $I_m$이 기본행렬의 곱이므로 방금 보인 것에 의해 $G$는 기본행렬의 곱이다.

**(2)의 증명.** $E$를 고정한다. $N' \ge 1$인 정수마다 명제 $S_{N'}$을 "$E'$에 이르는 길이 $N'$인 사슬이 있는 모든 $m \times m$ 행렬 $E'$에 대하여 $E'E$는 기본행렬의 곱이다"로 두고, 시작점이 $1$인 [[mathematical-induction|수학적 귀납법]]으로 보인다.

기초 단계: $E'$에 이르는 길이 $1$인 사슬 $F'_1$이 있으면 $E' = F'_1 = I_m$이므로 단위행렬 법칙에 의해 $E'E = I_m E = E$이고, $E$는 기본행렬의 곱이다.

귀납 단계: $N' \ge 1$이고 $S_{N'}$이 참이라 하자. $F'_1, \dots, F'_{N'+1}$이 $E'$에 이르는 사슬이라 하자. (☆)에 의해 그 처음 $N'$개는 $F'_{N'}$에 이르는 길이 $N'$인 사슬이므로 귀납 가정에 의해 $F'_{N'}E$는 기본행렬의 곱이고, 또 $E' = GF'_{N'}$인 기본행렬 $G$가 있다. 결합법칙에 의해 $E'E = (GF'_{N'})E = G(F'_{N'}E)$이고, 이 항목의 (1)에 의해 이것은 기본행렬의 곱이다. 따라서 $S_{N'+1}$이 참이다.

귀납법에 의해 모든 $N' \ge 1$에서 $S_{N'}$이 참이다. $E'$이 기본행렬의 곱이면 어떤 길이 $N'$의 사슬이 있으므로 $E'E$는 기본행렬의 곱이다.

**(3)의 증명.** $N \ge 1$인 정수마다 명제 $S_N$을 "$E$에 이르는 길이 $N$인 사슬이 있는 모든 $m \times m$ 행렬 $E$는 가역이고 $E^{-1}$은 기본행렬의 곱이다"로 두고 시작점이 $1$인 귀납법으로 보인다.

기초 단계: 길이 $1$인 사슬의 끝은 $I_m$이다. [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 $I_m$은 가역이고 $I_m^{-1} = I_m$이며, 이것은 이 항목의 (1)에 의해 기본행렬의 곱이다.

귀납 단계: $N \ge 1$이고 $S_N$이 참이라 하자. $F_1, \dots, F_{N+1}$이 $E$에 이르는 사슬이라 하자. (☆)에 의해 처음 $N$개는 $F_N$에 이르는 길이 $N$인 사슬이므로 귀납 가정에 의해 $F_N$은 가역이고 $F_N^{-1}$은 기본행렬의 곱이며, 또 $E = GF_N$인 기본행렬 $G$가 있다. [[elementary-matrix|기본행렬]]의 (3)에 의해 $G$는 가역이고 $G^{-1}$은 기본행렬이다. 역행렬의 성질의 (3)에 의해 $E = GF_N$은 가역이고 $E^{-1} = F_N^{-1}G^{-1}$이다. $G^{-1}$은 이 항목의 (1)에 의해 기본행렬의 곱이고 $F_N^{-1}$도 기본행렬의 곱이므로, 이 항목의 (2)에 의해 $F_N^{-1}G^{-1}$은 기본행렬의 곱이다. 따라서 $S_{N+1}$이 참이고, 귀납법에 의해 결론이 나온다.

**(4)의 증명.** 행 동치를 $\sim$로 쓰자. [[equivalence-relation|동치관계]]의 세 조건을 확인한다. 반사성: $A \in M_{m \times n}$이면 단위행렬 법칙에 의해 $A = I_m A$이고 $I_m$은 이 항목의 (1)에 의해 기본행렬의 곱이므로 $A \sim A$이다. 대칭성: $A \sim B$, 곧 기본행렬의 곱 $E$로 $B = EA$라 하자. 이 항목의 (3)에 의해 $E^{-1}$이 있고 기본행렬의 곱이다. [[invertible-matrix|가역행렬]]의 (1)에 의해 $E^{-1}E = I_m$이므로 결합법칙과 단위행렬 법칙에 의해 $E^{-1}B = E^{-1}(EA) = (E^{-1}E)A = I_m A = A$이고, 따라서 $B \sim A$이다. 추이성: $A \sim B$이고 $B \sim C$, 곧 기본행렬의 곱 $E$, $E'$으로 $B = EA$, $C = E'B$라 하자. 결합법칙에 의해 $C = E'(EA) = (E'E)A$이고 이 항목의 (2)에 의해 $E'E$는 기본행렬의 곱이므로 $A \sim C$이다.

**(5)의 증명.** 이 항목의 (3)에 의해 $E$는 가역이다. $x \in \mathbb{R}^n$이 $Ax = b$를 만족하면 [[matrix-product|행렬의 곱]]의 (1)에 의해 $Bx = (EA)x = E(Ax) = Eb$이다. 거꾸로 $Bx = Eb$이면 단위행렬 법칙, 가역행렬의 (1)의 $E^{-1}E = I_m$, 결합법칙, 행렬의 곱의 (1), 행렬과 벡터의 곱의 (3)에 의해
$$Ax = (I_m A)x = ((E^{-1}E)A)x = (E^{-1}B)x = E^{-1}(Bx) = E^{-1}(Eb) = (E^{-1}E)b = I_m b = b$$
이다. 따라서 두 해집합은 같다.

핵: $b$가 영벡터이면 $T_E$가 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 $Eb$도 영벡터이다. 방금 보인 것과 [[system-of-linear-equations|연립일차방정식]]의 (2)에 의해 $\operatorname{Ker} T_A = \{x : Ax = 0\} = \{x : Bx = 0\} = \operatorname{Ker} T_B$이다.

계수: [[dimension|차원]]의 (4)에 의해 $\mathbb{R}^n$은 유한차원이고 $\dim \mathbb{R}^n = n$이다. [[rank-nullity-theorem|차원 정리]]에 의해 $\operatorname{nullity} T_A + \operatorname{rank} T_A = n$이고 $\operatorname{nullity} T_B + \operatorname{rank} T_B = n$이다. $\operatorname{Ker} T_A$와 $\operatorname{Ker} T_B$는 $\mathbb{R}^n$의 같은 부분집합이고, 둘 다 [[subspace|(P1)]]에 의해 $\mathbb{R}^n$의 연산을 제한한 연산으로 벡터공간으로 보므로 같은 벡터공간이다. 따라서 그 차원도 같아 $\operatorname{nullity} T_A = \operatorname{nullity} T_B$이다. 두 등식의 양변에서 이 수를 빼면 (Z7)에 의해 $\operatorname{rank} T_A = n - \operatorname{nullity} T_A = \operatorname{rank} T_B$이다. [[rank-of-a-matrix|행렬의 계수]]의 정의 $\operatorname{rank} A = \operatorname{rank} T_A$, $\operatorname{rank} B = \operatorname{rank} T_B$에 의해 $\operatorname{rank} B = \operatorname{rank} A$이다.

**(6)의 증명.** $(A \mid b)$와 $(A' \mid b')$이 행 동치이면 기본행렬의 곱 $E$가 있어 $(A' \mid b') = E(A \mid b)$이다. 연립일차방정식의 (4)에 의해 $E(A \mid b) = (EA \mid Eb)$이므로 $(A' \mid b') = (EA \mid Eb)$이고, 같은 항목의 (3)에 의해 $A' = EA$, $b' = Eb$이다. 이 항목의 (5)를 $B = A'$에 쓰면 $\{x : Ax = b\} = \{x : A'x = Eb\} = \{x : A'x = b'\}$이다. $\blacksquare$
:::

## 예시와 반례

:::example[행 연산 두 번으로 단위행렬에 이르기]
$m = n = 2$이고 $A = \begin{pmatrix} 1 & 3 \\ 2 & 7 \end{pmatrix}$이라 합시다. [[elementary-matrix|기본행렬]]의 (2)에 의해 $R_{2,1}(-2)A$는 둘째 행에 첫째 행의 $-2$배를 더한 $\begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$이고, 여기에 $R_{1,2}(-3)$을 곱하면 첫째 행에 둘째 행의 $-3$배를 더해 $(1 + 0,\ 3 + (-3) \cdot 1) = (1, 0)$이 되므로 $I_2$가 됩니다. $M_{2 \times 2}$의 벡터의 열
$$F_1 = I_2, \qquad F_2 = R_{2,1}(-2), \qquad F_3 = R_{1,2}(-3)R_{2,1}(-2)$$
은 단위행렬 법칙에 의해 $F_2 = R_{2,1}(-2)F_1$이고 $F_3 = R_{1,2}(-3)F_2$이므로 $E = F_3$에 이르는 사슬입니다. 기본행렬의 정의에 의해 $F_2 = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$이고, 기본행렬 항목의 (2)에 의해 $F_3$은 $F_2$의 첫째 행에 둘째 행의 $-3$배를 더한 $E = F_3 = \begin{pmatrix} 7 & -3 \\ -2 & 1 \end{pmatrix}$입니다(첫째 행이 $(1, 0) + (-3)(-2, 1) = (7, -3)$). 결합법칙에 의해 $EA = R_{1,2}(-3)(R_{2,1}(-2)A) = I_2$이므로 $A$와 $I_2$는 행 동치입니다.

연립방정식 $x_1 + 3x_2 = -1$, $2x_1 + 7x_2 = -3$의 첨가행렬 $(A \mid b)$, $b = (-1, -3)$에 같은 $E$를 곱하면 [[system-of-linear-equations|연립일차방정식]]의 (4)에 의해 $(EA \mid Eb) = (I_2 \mid Eb)$이고 $Eb = (-1)(7, -2) + (-3)(-3, 1) = (-7 + 9,\ 2 - 3) = (2, -1)$입니다. 이 항목의 (6)에 의해 원래 연립방정식의 해집합은 $I_2 x = (2, -1)$의 해집합이고, [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $I_2 x = x$이므로 이것은 $\{(2, -1)\}$입니다. 실제로 $2 + 3(-1) = -1$, $2 \cdot 2 + 7(-1) = -3$입니다.
:::

:::counterexample[행 연산은 열들의 생성을 바꿀 수 있다]
$A = \begin{pmatrix} 1 & 2 \\ 1 & 2 \end{pmatrix}$이고 $B = R_{2,1}(-1)A = \begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$이라 합시다. $R_{2,1}(-1)$은 이 항목의 (1)에 의해 기본행렬의 곱이므로 $A$와 $B$는 행 동치이고, 이 항목의 (5)에 의해 $\operatorname{Ker} T_A = \operatorname{Ker} T_B$, $\operatorname{rank} T_A = \operatorname{rank} T_B$입니다. 그러나 $\operatorname{Ran} T_A$와 $\operatorname{Ran} T_B$는 다릅니다. [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Ae_1 = (1, 1)$이므로 $(1, 1) \in \operatorname{Ran} T_A$입니다. 한편 행 규칙에 의해 모든 $x \in \mathbb{R}^2$에서 $Bx$의 둘째 값은 $0 \cdot x_1 + 0 \cdot x_2 = 0 + 0 = 0$이므로([[real-number-arithmetic|(K9)]], [[finite-sum-of-vectors|(H0)]], (K4)) $(1, 1) \notin \operatorname{Ran} T_B$입니다. 행 연산은 핵, 곧 $Ax = 0$이 되는 $x$들은 바꾸지 않지만, 열들 자체가 생성하는 공간은 바꿀 수 있습니다.
:::

## 확인 질문

:::check[$m \times n$ 영행렬과 행 동치인 행렬은 무엇인가?]
영행렬 자신뿐입니다. $O$를 영행렬, $E$를 기본행렬의 곱이라 하면 행렬의 곱의 정의에 의해 $EO$의 $k$번째 열은 $E$와 영벡터의 곱이고, $T_E$에 [[linear-map|선형사상]]의 (T1)을 쓰면 이것은 영벡터입니다. 모든 열이 $O$의 열과 같으므로 [[matrix|행렬]]의 (3)에 의해 $EO = O$입니다. 반사성에 의해 $O$는 자신과 행 동치입니다. 거꾸로 $B$가 $O$와 행 동치이면, 이 항목의 (4)의 대칭성에 의해 $B = EO$인 기본행렬의 곱 $E$가 있으므로 $B = O$입니다.
:::

:::check[$A$가 가역인 $m \times m$ 행렬이고 $B$가 $A$와 행 동치이면 $B$는 가역인가?]
가역입니다. $B = EA$인 기본행렬의 곱 $E$가 있고, 이 항목의 (3)에 의해 $E$는 가역입니다. [[inverse-matrix-properties|역행렬의 성질]]의 (3)에 의해 가역행렬의 곱 $EA$는 가역이고 $B^{-1} = A^{-1}E^{-1}$입니다.
:::
