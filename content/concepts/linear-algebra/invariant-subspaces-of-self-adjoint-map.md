---
title: 자기수반사상의 고유벡터와 불변 부분공간
title_en: Eigenvectors and Invariant Subspaces of Self-Adjoint Maps
aliases: [불변 부분공간, 불변부분공간, T-불변 부분공간, 제한한 사상, 자기수반사상의 고유공간의 직교성, invariant subspace, restriction of a linear map, eigenvectors of a self-adjoint operator are orthogonal]
kind: theorem
field: linear-algebra
msc: ["15A04", "15A18"]
level: undergrad
summary: 선형사상 T 가 부분공간 E 를 E 안으로 보낼 때 E 를 T-불변 부분공간이라 하고, T 를 E 에 제한한 사상 E → E 를 정의한다. 제한한 사상의 고유벡터는 원래 사상의 고유벡터이다. T 가 자기수반이면 불변 부분공간의 직교 여공간도 불변이고, 제한한 사상은 제한한 내적에 관해 자기수반이며, 서로 다른 고윳값의 고유벡터와 고유공간은 서로 직교한다.
requires: [function, real-number-arithmetic, vector-space, subspace, linear-combination-and-span, linear-independence, sequences-in-a-subspace, linear-map, kernel-and-range, dimension, dimension-of-subspace, eigenvalue-and-eigenvector, matrix, matrix-vector-product, inner-product-space, standard-inner-product, orthogonal-vectors, orthogonal-complement, real-eigenvalues-2x2, self-adjoint-map]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 9장 Advanced spectral theory 3절 Generalized eigenspaces. Geometric meaning of algebraic multiplicity 의 3.1 Invariant subspaces — Definition 과 제한 A|_E 의 정의, p.259. 6장 Structure of operators in inner product spaces 1절의 Theorem 1.1 의 증명과 그 뒤 Remark, p.164; 2절 Spectral theorem for self-adjoint and normal operators 의 Proposition 2.3 과 그 증명, p.167
    checked: original
    note: "T-불변 부분공간과 제한한 사상의 정의는 출처 9장 3.1 의 Definition(p.259)의 'AE ⊂ E, i.e. Av ∈ E for all v ∈ E' 와 제한 (A|_E)v = Av 를 따랐다. 제한한 사상이 선형이라는 것과 공역을 E 로 다시 선언하는 것은 출처가 'we can treat A as an operator acting on E' 로만 적는 것을 이 항목이 핵과 상 항목의 (4)와 함수의 공역 선언으로 보인 것이다. (2)의 '제한한 사상의 고유벡터는 원래 사상의 고유벡터'는 정의에서 바로 나오는 것을 진술에 둔 것이다. (6)의 서로 다른 고윳값의 고유벡터의 직교성은 출처 6장 Proposition 2.3(p.167)이다. 출처는 고윳값이 실수라는 것을 써서 켤레를 없애고 (Au, v) = λ(u, v) = μ(u, v) 로 보인다. 이 항목은 실수만 쓰므로 켤레가 없고, 같은 계산을 자기수반사상 항목의 (1)로 썼다. 출처는 그 앞(p.167)에서 '자기수반사상의 고유공간들이 직교한다'는 것이 Theorem 2.1 에서 나온다고 적고, 이 항목은 그것을 (6)의 둘째 문장으로 진술했다. (3)의 '자기수반사상의 불변 부분공간의 직교 여공간은 불변'과 (4)의 '제한한 사상의 자기수반성'은 출처 6장 1–2절과 9장 3.1 을 찾은 범위에서는 명제로 보지 못했다(검색어 invariant 27건과 restriction 12건을 모두 열어 읽었고, 'E ⊥ ⊂', 'A(E ⊥)', 'orthogonal complement … invariant' 꼴은 0건이었으며, 'orthogonal complement' 6건은 5장 3.3, 연습문제 3.13, 7장 4.2 의 여차원, 색인이었고, 6장 1·2절의 연습문제를 처음부터 읽었다). 출처의 스펙트럼 정리 증명은 슈어 표현을 거치므로 이것을 쓰지 않는다. 출처 6장 5절 Structure of orthogonal matrices 의 증명(pp.188–189)은 직교행렬에 대해 E_λ 가 불변 부분공간이라는 것을 쓴다. 반례 '자기수반이 아닌 사상에서 불변 부분공간의 직교 여공간이 불변이 아닌 예'는 출처 6장 Theorem 1.1 뒤 Remark(p.164)가 고유벡터 u₁ 의 직교 여공간 E = u₁⊥ 이 일반적으로 불변이 아니라고 적는 것과 같은 발상이다. (5)의 span(u)⊥ 는 출처 6장 Theorem 1.1 의 증명(pp.163–164)이 단위 고유벡터 u₁ 로 잡는 E = u₁⊥ 와 같은 대상이고, 같은 Remark 는 AE ⊂ E 인 것이 정확히 첫째 행의 λ₁ 밖의 성분이 모두 0 일 때라고 적는다. 확인 질문 '$A = \\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$일 때 $T_A : \\mathbb{R}^2 \\to \\mathbb{R}^2$의 불변 부분공간은 무엇인가?'의 행렬은 출처 6장 1절의 Remark(p.164)가 고윳값이 복소수라서 실 상삼각행렬과 닮지 않는다고 적는 회전행렬에서 α = π/2 인 것이고, 출처 5장 6절 연습문제 6.1(p.150)의 둘째 행렬과 같다."
status: reviewed
review_note: "2026-11-25 자기 검토(docs/self-review.md)와 지휘자의 확인(출처 검색 표본, 메모의 진술 번호 대조 — 어긋난 번호 둘을 고쳤다). 독립 검토는 거치지 않았다."
added: 2026-11-25
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $T : V \to V$가 [[linear-map|선형사상]]이라 하자. $V$의 [[subspace|부분공간]] $E$가 **$T$-불변 부분공간**(invariant subspace of $T$)인 것은 정확히 모든 $v \in E$에서 $Tv \in E$일 때이다. 이때 "$E$는 $T$-불변이다"라고도 한다.

$E$가 $T$-불변이면, $E$를 [[subspace|(P1)]]의 제한한 연산으로 벡터공간으로 볼 때 $T$를 $E$로 제한한 함수는 모든 값이 $E$에 속하므로 [[function|함수]]의 "공역은 선언하기 나름이다"에 의해 $E$에서 $E$로의 함수이다. 이 함수를 $T|_E : E \to E$로 쓰고 $T$를 $E$로 **제한한 사상**(restriction)이라 한다. 곧 모든 $v \in E$에서 $T|_E v = Tv$이다. 고윳값과 고유벡터는 [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 것이다.

1. (불변 부분공간의 예) $\{0_V\}$와 $V$는 $T$-불변이다. 모든 실수 $\lambda$에서 고유공간 $\operatorname{Ker}(T - \lambda i_V)$는 $T$-불변이다. $u$가 $T$의 고유벡터이면 $\operatorname{span}(u)$는 $T$-불변이다([[linear-combination-and-span|생성]]).
2. (제한한 사상) $E$가 $T$-불변이면 $T|_E : E \to E$는 선형사상이다. 실수 $\lambda$와 $v \in E$에 대하여, $v$가 $\lambda$에 속하는 $T|_E$의 고유벡터인 것은 정확히 $v$가 $\lambda$에 속하는 $T$의 고유벡터일 때이다. 따라서 $T|_E$의 고윳값은 모두 $T$의 고윳값이다.

아래 (3)–(6)에서는 $V$가 [[dimension|유한차원]]인 [[inner-product-space|내적공간]]이고 $T$가 [[self-adjoint-map|자기수반]]이다. $E^\perp$는 [[orthogonal-complement|직교 여공간]]의 것이고, $V$의 부분공간은 [[inner-product-space|내적과 내적공간]]의 (4)의 내적으로 내적공간으로 본다.

3. (직교 여공간도 불변) $E$가 $T$-불변이면 $E^\perp$도 $T$-불변이다.
4. (제한한 사상도 자기수반) $E$가 $T$-불변이면 $E$는 유한차원인 내적공간이고, $T|_E : E \to E$는 자기수반이다.
5. (고유벡터 하나에서 시작하기) $u$가 $T$의 고유벡터이면 $\operatorname{span}(u)$와 $\operatorname{span}(u)^\perp$는 $T$-불변이고, $\dim \operatorname{span}(u)^\perp = \dim V - 1$이며, $T$를 $\operatorname{span}(u)^\perp$로 제한한 사상은 자기수반이다.
6. (서로 다른 고윳값) $\lambda \ne \mu$인 실수이고 $u$가 $\lambda$에 속하는 $T$의 고유벡터, $v$가 $\mu$에 속하는 $T$의 고유벡터이면 $\langle u, v \rangle = 0$이다. 또 $\lambda \ne \mu$이면 두 고유공간 $\operatorname{Ker}(T - \lambda i_V)$와 $\operatorname{Ker}(T - \mu i_V)$는 [[orthogonal-vectors|직교]]하고, 곧 $\operatorname{Ker}(T - \lambda i_V) \subseteq \operatorname{Ker}(T - \mu i_V)^\perp$이다.
:::

:::english
Let $V$ be a vector space and let $T : V \to V$ be a linear map. A subspace $E$ of $V$ is a **$T$-invariant subspace** exactly when $Tv \in E$ for all $v \in E$; we then also say "$E$ is $T$-invariant".

If $E$ is $T$-invariant and $E$ is regarded as a vector space with the restricted operations of (P1), then the function obtained by restricting $T$ to $E$ has all its values in $E$, so by "the codomain is a matter of declaration" for functions it is a function from $E$ to $E$. We write this function $T|_E : E \to E$ and call it the **restriction** of $T$ to $E$; that is, $T|_E v = Tv$ for all $v \in E$. Eigenvalues and eigenvectors are those of the entry on eigenvalues and eigenvectors.

1. (Examples of invariant subspaces) $\{0_V\}$ and $V$ are $T$-invariant. For every real $\lambda$ the eigenspace $\operatorname{Ker}(T - \lambda i_V)$ is $T$-invariant. If $u$ is an eigenvector of $T$, then $\operatorname{span}(u)$ is $T$-invariant.
2. (Restrictions) If $E$ is $T$-invariant, then $T|_E : E \to E$ is a linear map. For a real $\lambda$ and $v \in E$, $v$ is an eigenvector of $T|_E$ belonging to $\lambda$ exactly when $v$ is an eigenvector of $T$ belonging to $\lambda$. Hence every eigenvalue of $T|_E$ is an eigenvalue of $T$.

In (3)–(6) below, $V$ is a finite-dimensional inner product space and $T$ is self-adjoint. $E^\perp$ is as in the entry on orthogonal complements, and subspaces of $V$ are regarded as inner product spaces with the inner product of item (4) of the entry on inner product spaces.

3. (The orthogonal complement is invariant too) If $E$ is $T$-invariant, then so is $E^\perp$.
4. (The restriction is self-adjoint too) If $E$ is $T$-invariant, then $E$ is a finite-dimensional inner product space and $T|_E : E \to E$ is self-adjoint.
5. (Starting from one eigenvector) If $u$ is an eigenvector of $T$, then $\operatorname{span}(u)$ and $\operatorname{span}(u)^\perp$ are $T$-invariant, $\dim \operatorname{span}(u)^\perp = \dim V - 1$, and the restriction of $T$ to $\operatorname{span}(u)^\perp$ is self-adjoint.
6. (Distinct eigenvalues) If $\lambda \ne \mu$ are real numbers, $u$ is an eigenvector of $T$ belonging to $\lambda$ and $v$ is an eigenvector of $T$ belonging to $\mu$, then $\langle u, v \rangle = 0$. Moreover, if $\lambda \ne \mu$, the two eigenspaces $\operatorname{Ker}(T - \lambda i_V)$ and $\operatorname{Ker}(T - \mu i_V)$ are orthogonal; that is, $\operatorname{Ker}(T - \lambda i_V) \subseteq \operatorname{Ker}(T - \mu i_V)^\perp$.
:::

## 직관

불변 부분공간은 $T$를 써도 빠져나가지 않는 부분공간입니다. 그 안에서는 $T$를 더 작은 공간 위의 사상 $T|_E$로 볼 수 있고, 그 사상의 고유벡터는 원래 사상의 고유벡터입니다((2)). 비유하면 울타리를 친 마당과 같습니다. 마당 안의 어느 자리에서 $T$로 한 번 옮겨도 마당 밖으로 나가지 않으므로, 마당 안의 움직임만 따로 떼어 볼 수 있습니다. 울타리가 부분공간 $E$이고, "나가지 않는다"가 모든 $v \in E$에서 $Tv \in E$라는 조건입니다.

일반적인 사상에서는 불변 부분공간의 직교 여공간이 불변이 아닐 수 있습니다(아래 반례). 자기수반사상에서는 불변입니다((3)). $w$가 $E$와 직교하고 $e \in E$이면 $\langle Tw, e \rangle = \langle w, Te \rangle$이고, $Te$가 다시 $E$에 있으므로 이 값이 $0$이기 때문입니다. 자기수반이라는 가정은 $T$를 내적의 다른 자리로 옮기는 이 한 단계에서 쓰입니다.

(5)는 고유벡터 하나를 찾으면 공간을 그 방향과 그것에 직교하는 방향들로 나누고, 직교하는 쪽에서 차원이 $1$ 작은 공간 위의 자기수반사상을 얻는다는 것입니다. (6)은 자기수반사상에서는 서로 다른 고윳값의 고유벡터가 자동으로 직교한다는 것입니다(자기수반이 아니면 그렇지 않을 수 있습니다. 아래 반례). $\lambda \langle u, v \rangle$와 $\mu \langle u, v \rangle$가 같은 값 $\langle Tu, v \rangle = \langle u, Tv \rangle$이어서, $\lambda \ne \mu$이면 $\langle u, v \rangle$가 $0$일 수밖에 없습니다.

## 증명

:::idea
(1), (2)는 정의를 풀어 쓴 것이다. (3), (4), (6)은 모두 자기수반사상 항목의 (1), 곧 $\langle Tx, y \rangle = \langle x, Ty \rangle$를 한 번 쓰는 것이다. (5)는 (1), (3), (4)를 $\operatorname{span}(u)$에 쓰고 직교 여공간의 차원 공식을 쓴다.
:::

:::hint
(3)은 $w \in E^\perp$, $e \in E$에서 $\langle Tw, e \rangle$를 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (1)로 바꿉니다.
:::

:::hint
(6)은 $\lambda \langle u, v \rangle = \langle Tu, v \rangle = \langle u, Tv \rangle = \mu \langle u, v \rangle$에서 $(\lambda - \mu)\langle u, v \rangle = 0$을 얻습니다.
:::

:::proof
아래에서 [[inner-product-space|내적과 내적공간]]의 번호는 "내적의 (1)"처럼, [[self-adjoint-map|자기수반사상과 대칭행렬]]의 번호는 "자기수반의 (1)"처럼, [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 번호는 "고윳값의 (1)"처럼 쓴다. (K1)–(K12)는 [[real-number-arithmetic|실수의 계산 법칙]]의 것이다.

**(1)의 증명.** [[linear-map|선형사상]]의 (T1)에 의해 $T0_V = 0_V$이므로 $\{0_V\}$는 $T$-불변이고, $T$의 값은 모두 $V$에 속하므로 $V$도 $T$-불변이다([[subspace|부분공간]]의 (P4)에 의해 둘은 부분공간이다). 고윳값의 (1)에 의해 $\operatorname{Ker}(T - \lambda i_V) = \{v \in V : Tv = \lambda v\}$는 부분공간이다. $v$가 여기에 속하면 (T-배)에 의해 $T(Tv) = T(\lambda v) = \lambda (Tv)$이므로 $Tv$도 여기에 속한다. $u$가 $\lambda$에 속하는 고유벡터이면 [[linear-combination-and-span|일차결합과 생성]]의 (N1)과 (N4)에 의해 $\operatorname{span}(u) = \{\alpha u : \alpha \text{는 실수}\}$는 부분공간이고, 그 원소 $\alpha u$에서 $T(\alpha u) = \alpha (Tu) = \alpha(\lambda u) = (\alpha \lambda) u$이다([[vector-space|벡터공간]]의 (V6)). 이것은 $\operatorname{span}(u)$의 원소이다.

**(2)의 증명.** [[kernel-and-range|핵과 상]]의 (4)에 의해 $T$를 $E$로 제한한 함수는 벡터공간 $E$에서 $V$로의 선형사상이다. 곧 모든 $u, v \in E$와 실수 $\alpha$에서 $T(u + v) = Tu + Tv$, $T(\alpha v) = \alpha Tv$이고, 여기서 $u + v$, $\alpha v$는 (P1)에 의해 $E$의 연산과 같은 원소이다. 값 $Tu$, $Tv$가 $E$에 속하므로 오른쪽의 $Tu + Tv$, $\alpha Tv$도 (P1)에 의해 $E$의 연산으로 계산한 것과 같다. 따라서 $T|_E : E \to E$는 (T-합)과 (T-배)를 만족하는 선형사상이다.

$v \in E$이고 $\lambda$가 실수이면 $T|_E v = Tv$이고, (P1)에 의해 $E$의 스칼라배 $\lambda v$와 $E$의 영벡터는 $V$의 것과 같다. 따라서 "$T|_E v = \lambda v$이고 $v$가 $E$의 영벡터가 아니다"는 "$Tv = \lambda v$이고 $v \ne 0_V$이다"와 같은 문장이고, 고윳값과 고유벡터의 정의에 의해 첫 주장이 나온다. $\lambda$가 $T|_E$의 고윳값이면 $\lambda$에 속하는 $T|_E$의 고유벡터가 있고, 그것은 $\lambda$에 속하는 $T$의 고유벡터이므로 $\lambda$는 $T$의 고윳값이다.

**(3)의 증명.** [[orthogonal-complement|직교 여공간]]의 (1)에 의해 $E^\perp$는 부분공간이다. $w \in E^\perp$라 하자. $E$의 모든 원소 $e$에서 자기수반의 (1)에 의해 $\langle Tw, e \rangle = \langle w, Te \rangle$이고, $E$가 $T$-불변이므로 $Te \in E$이어서 직교 여공간의 정의에 의해 $\langle w, Te \rangle = 0$이다. 따라서 $Tw$는 $E$의 모든 원소와의 내적이 $0$이므로 $Tw \in E^\perp$이다.

**(4)의 증명.** [[dimension-of-subspace|부분공간의 차원]]의 (1)에 의해 $E$는 유한차원이고, 내적의 (4)에 의해 $E$는 제한한 내적으로 내적공간이며 $E$의 두 원소의 내적은 $V$에서 계산한 것과 같다. (2)에 의해 $T|_E : E \to E$는 선형사상이다. $x, y \in E$이면 자기수반의 (1)에 의해
$$
\begin{aligned}
\langle T|_E x, y \rangle &= \langle Tx, y \rangle \\
&= \langle x, Ty \rangle = \langle x, T|_E y \rangle
\end{aligned}
$$
이고, 이 내적들은 내적공간 $E$에서 계산해도 같다. 따라서 자기수반의 (1)을 내적공간 $E$와 선형사상 $T|_E$에 쓰면 $T|_E$는 자기수반이다.

**(5)의 증명.** (1)에 의해 $\operatorname{span}(u)$는 $T$-불변이고, (3)에 의해 $\operatorname{span}(u)^\perp$도 $T$-불변이며, (4)를 $E = \operatorname{span}(u)^\perp$에 쓰면 $T$를 $\operatorname{span}(u)^\perp$로 제한한 사상은 자기수반이다. 차원: 고유벡터는 $u \ne 0_V$이므로 [[linear-independence|일차독립]]의 (I4)에 의해 길이 $1$인 열 $u$는 일차독립이고, 부분공간의 차원의 (4)에 의해 $\dim \operatorname{span}(u) = 1$이다. 직교 여공간의 (4)에 의해 $\dim \operatorname{span}(u) + \dim \operatorname{span}(u)^\perp = \dim V$이므로 $\dim \operatorname{span}(u)^\perp = \dim V - 1$이다.

**(6)의 증명.** 내적의 (1)과 내적의 조건 (ii), 자기수반의 (1)에 의해
$$
\begin{aligned}
\lambda \langle u, v \rangle &= \langle \lambda u, v \rangle \\
&= \langle Tu, v \rangle = \langle u, Tv \rangle \\
&= \langle u, \mu v \rangle = \mu \langle u, v \rangle
\end{aligned}
$$
이다. 따라서 (K12)의 (i)과 (v)에 의해 $(\lambda - \mu)\langle u, v \rangle = \lambda \langle u, v \rangle - \mu \langle u, v \rangle = 0$이고, $\lambda - \mu \ne 0$이므로((K12)의 (v)) (K10)에 의해 $\langle u, v \rangle = 0$이다.

둘째 문장: $x \in \operatorname{Ker}(T - \lambda i_V)$, $y \in \operatorname{Ker}(T - \mu i_V)$라 하자. 고윳값의 (1)에 의해 $x$는 $0_V$이거나 $\lambda$에 속하는 고유벡터이고, $y$는 $0_V$이거나 $\mu$에 속하는 고유벡터이다. 어느 하나가 $0_V$이면 내적의 (2)에 의해 $\langle x, y \rangle = 0$이고, 둘 다 고유벡터이면 첫 문장에 의해 $\langle x, y \rangle = 0$이다. 따라서 직교의 정의에 의해 두 고유공간은 직교하고, 직교 여공간의 정의에 의해 $\operatorname{Ker}(T - \lambda i_V) \subseteq \operatorname{Ker}(T - \mu i_V)^\perp$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 대칭행렬에서 불변 부분공간과 그 직교 여공간]
$A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$은 모든 $j$, $k$에서 $(j, k)$ 성분과 $(k, j)$ 성분이 같아 대칭이므로 [[self-adjoint-map|자기수반사상과 대칭행렬]]의 (2)에 의해 $T_A : \mathbb{R}^3 \to \mathbb{R}^3$은 표준내적에 관해 자기수반입니다. 행 규칙에 의해 $Ax = (2x_1 + x_2, x_1 + 2x_2, 3x_3)$입니다.

$u = (1, 1, 0)$이면 $Au = (3, 3, 0) = 3u$이므로 $u$는 $3$에 속하는 고유벡터이고, (1)에 의해 $E = \operatorname{span}(u)$는 $T_A$-불변입니다. $E^\perp$는 $x_1 + x_2 = 0$인 $x$ 전체이고, 그 원소 $x = (a, -a, c)$에서 $Ax = (a, -a, 3c)$의 첫 두 성분의 합도 $0$이므로 $Ax \in E^\perp$입니다. (3)이 말하는 대로 $E^\perp$도 불변입니다.

$(A - 3I_3)x = (-x_1 + x_2, x_1 - x_2, 0)$이므로 $3$에 대한 고유공간은 $x_1 = x_2$인 $x$ 전체이고, $(A - I_3)x = (x_1 + x_2, x_1 + x_2, 2x_3)$이므로 $1$에 대한 고유공간은 $x_2 = -x_1$, $x_3 = 0$인 $x$ 전체, 곧 $\operatorname{span}((1, -1, 0))$입니다. $x_1 = x_2$인 $x$와 $(1, -1, 0)$의 내적은 $x_1 - x_2 = 0$이어서, (6)이 말하는 대로 두 고유공간은 직교합니다.
:::

:::counterexample[자기수반이 아닌 사상에서 불변 부분공간의 직교 여공간이 불변이 아닌 예]
$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$이면 $Ax = (x_1 + x_2, x_2)$입니다. $A e_1 = e_1$이므로 $e_1$은 $1$에 속하는 고유벡터이고 $E = \operatorname{span}(e_1)$은 $T_A$-불변입니다. 표준내적에서 $E^\perp = \operatorname{span}(e_2)$인데 $A e_2 = (1, 1)$은 $e_1$과의 내적이 $1$이어서 $E^\perp$에 속하지 않습니다. $A$는 $(1, 2)$ 성분이 $1$, $(2, 1)$ 성분이 $0$이어서 대칭이 아니므로, $T_A$는 자기수반이 아니고 (3)과 어긋나지 않습니다.
:::

:::counterexample[자기수반이 아닌 사상에서 서로 다른 고윳값의 고유벡터가 직교하지 않는 예]
$A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$이면 $A e_1 = e_1$이고, $w = (1, 1)$에서 $Aw = (2, 2) = 2w$입니다. 따라서 $e_1$은 $1$에, $w$는 $2$에 속하는 고유벡터인데 $\langle e_1, w \rangle = 1 \ne 0$입니다. $A$는 대칭이 아니어서 (6)의 가정을 만족하지 않습니다.
:::

## 확인 질문

:::check[$\lambda$가 실수이고 $T = \lambda i_V$이면 $V$의 어떤 부분공간이 $T$-불변인가?]
모든 부분공간이 $T$-불변입니다. $E$가 부분공간이고 $v \in E$이면 $Tv = \lambda v$이고, [[subspace|부분공간]]의 (S3)에 의해 $\lambda v \in E$입니다.
:::

:::check[$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$일 때 $T_A : \mathbb{R}^2 \to \mathbb{R}^2$의 불변 부분공간은 무엇인가?]
$\{0\}$과 $\mathbb{R}^2$뿐입니다. [[dimension-of-subspace|부분공간의 차원]]의 (2), (3)에 의해 그 밖의 부분공간 $E$는 $\dim E = 1$이므로 길이 $1$인 기저 $u$가 있고, [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해 $E = \operatorname{span}(u)$이며, $u$는 일차독립인 열이므로 [[linear-independence|일차독립]]의 (I4)에 의해 $u \ne 0$입니다. $E$가 불변이면 $Au \in \operatorname{span}(u)$이므로 [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 어떤 실수 $\lambda$에서 $Au = \lambda u$, 곧 $u$는 고유벡터입니다. 그런데 [[real-eigenvalues-2x2|2 × 2 행렬의 실고윳값]]의 (1)에 의해 $\operatorname{disc} A = (0 - 0)^2 + 4 \cdot (-1) \cdot 1 = -4 < 0$이므로 그 항목의 (2)에 의해 $A$에는 고윳값이 없고, 따라서 고유벡터도 없습니다. 그러므로 $\dim E = 1$인 불변 부분공간은 없습니다.
:::
