---
title: 기저 변환과 닮은 행렬
title_en: Change of Basis and Similar Matrices
aliases: [기저 변환 행렬, 좌표 변환 행렬, 닮음, 닮은 행렬, 상사 행렬, change-of-basis matrix, change of coordinates matrix, similar matrices, similarity]
kind: definition
field: linear-algebra
msc: ["15A04"]
level: undergrad
summary: 기저 변환 행렬은 가역이고, 같은 선형사상의 두 기저에 관한 행렬은 그 행렬로 서로 닮았다. 닮음은 동치관계이고 닮은 두 행렬은 고윳값이 같으며, 선형사상의 고윳값은 어느 기저에 관한 행렬의 고윳값과도 같다.
requires: [real-number-arithmetic, vector-space, vector-space-basic-properties, real-function-space, finite-sum-of-vectors, function, function-composition, inverse-function, relation, equivalence-relation, standard-basis, linear-map, linear-map-examples, composition-of-linear-maps, isomorphism, matrix, matrix-vector-product, matrix-of-a-linear-map, matrix-product, matrix-product-properties, invertible-matrix, inverse-matrix-properties, eigenvalue-and-eigenvector, matrix-in-bases]
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 2장 8.3절 Change of coordinate matrix와 8.3.1절, pp.70–71; 8.4절, pp.71–72; 8.5절과 Definition 8.1, pp.72–73; 4장 1.3절, p.101
    checked: original
    note: "출처는 8.3절(p.70)에서 항등사상의 행렬 [I]_BA 를 기저 A 에서 B 로의 좌표 변환 행렬이라 하고, 모든 v 에서 [v]_B = [I]_BA[v]_A 이며 k 번째 열이 [a_k]_B 라고 적고, [I]_AB = ([I]_BA)⁻¹ 이 (8.1)에서 곧바로 나온다고 적는다. 8.3.1절(pp.70–71)은 Fⁿ 의 기저 B 의 벡터들을 열로 하는 행렬 B 에 대하여 [I]_SB = B, [I]_BS = B⁻¹ 이라 적는다. 8.4절(pp.71–72)은 두 쌍의 기저 사이의 변환 공식을 'just by analyzing what each of the matrices does'로 넘기고, 8.5절(p.72)은 한 기저의 경우 [T]_BB = Q⁻¹[T]_AA Q 를 끌어낸 뒤 Definition 8.1 에서 A = Q⁻¹BQ 인 가역행렬 Q 가 있을 때 A 가 B 와 닮았다고 정의한다. 출처는 닮은 행렬이 같은 크기의 정사각행렬이어야 한다는 것을 차원을 세어 얻는다고 하고, 대칭성을 B = QAQ⁻¹ = (Q⁻¹)⁻¹A(Q⁻¹) 로 보인다(pp.72–73). 반사성과 추이성, 닮음이 동치관계라는 말은 출처에 없다(책 전체를 검색한 범위). 이 항목은 닮음을 처음부터 n × n 행렬 사이에서 정의한다. 출처는 4장 1.3절(p.101)에서 닮음을 A = SBS⁻¹ 꼴로 다시 쓰고, 닮은 행렬의 특성다항식이 같다는 것을 행렬식으로 보여 연산자의 고윳값이 기저에 따라 달라지지 않음을 얻는다. 이 항목의 (5), (6)은 행렬식 없이 고유벡터를 직접 옮겨 증명한다. 닮은 행렬이 같은 고윳값을 갖는다는 것은 출처의 4장 연습문제 1.1 e(p.104)이기도 하다. (7)의 [T_A]_ℬ = B⁻¹AB 는 출처가 4장 Theorem 2.1 의 증명(p.106)에서 [I]_SB 와 [I]_BS 로 쓰는 계산과 같다. C_ℬ = T_B 라는 표현과 모든 증명은 이 사이트가 썼다. 이 항목은 '좌표 변환 행렬' 대신 '기저 변환 행렬'이라는 이름을 쓴다. 예시는 matrix-in-bases 의 예시의 기저와 사상을 이어 쓴다. 첫 예시에서 기저를 열로 하는 B 와 B⁻¹ 을 적고 곱해 확인하는 부분은 출처 8.3.1절(pp.70–71)의 예(기저 (1, 2), (2, 1))와 같은 발상이며, 기저는 새로 골랐다. 첫째 반례(닮은 행렬의 고유벡터가 다르다)는 출처 4장 연습문제 1.1 f(p.104)의 답에 해당한다. 둘째 반례와 확인 질문은 새로 만들었다."
status: source-checked
added: 2026-11-16
---

:::statement
$V$가 [[vector-space|벡터공간]]이고 $n$이 자연수이며 $\mathcal{A} = a_1, \dots, a_n$과 $\mathcal{B} = b_1, \dots, b_n$이 길이 $n$인 $V$의 기저라 하자. 좌표벡터 $[v]_{\mathcal{B}}$, 기저에 관한 행렬 $[T]_{\mathcal{B}\mathcal{A}}$, $[T]_{\mathcal{B}}$는 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]에서 정한 것이고, $i_V$는 $V$ 위의 [[inverse-function|항등함수]]이다. $n \times n$ 행렬 $[i_V]_{\mathcal{B}\mathcal{A}}$를 $\mathcal{A}$에서 $\mathcal{B}$로의 **기저 변환 행렬**(change-of-basis matrix)이라 한다. 괄호 없이 쓴 세 행렬의 곱, 예를 들어 $Q^{-1}BQ$는 $(Q^{-1}B)Q = Q^{-1}(BQ)$이다([[matrix-product-properties|행렬 곱의 성질]]의 (1)).

1. $[i_V]_{\mathcal{B}\mathcal{A}}$의 $k$번째 열은 $[a_k]_{\mathcal{B}}$이고, 모든 $v \in V$에서 $[v]_{\mathcal{B}} = [i_V]_{\mathcal{B}\mathcal{A}}[v]_{\mathcal{A}}$이다.
2. $[i_V]_{\mathcal{B}\mathcal{A}}$는 [[invertible-matrix|가역]]이고 그 역행렬은 $[i_V]_{\mathcal{A}\mathcal{B}}$이다.
3. $T : V \to V$가 [[linear-map|선형사상]]이고 $Q = [i_V]_{\mathcal{B}\mathcal{A}}$이면 $[T]_{\mathcal{A}} = Q^{-1}[T]_{\mathcal{B}}Q$이다.

**닮은 행렬.** $A$, $B$가 $n \times n$ [[matrix|행렬]]일 때, $A$가 $B$와 **닮았다**(similar)는 것은 정확히 $A = Q^{-1}BQ$인 가역 $n \times n$ 행렬 $Q$가 있을 때이다. $M_{n \times n}$ 위의 [[relation|관계]] $\{(A, B) \in M_{n \times n} \times M_{n \times n} : A\text{가 } B\text{와 닮았다}\}$를 **닮음**이라 한다.

4. 닮음은 $M_{n \times n}$ 위의 [[equivalence-relation|동치관계]]이다. 특히 $A$가 $B$와 닮았으면 $B$도 $A$와 닮았으므로, 이때 $A$와 $B$가 닮았다고 한다.
5. $A$, $B$가 $n \times n$ 행렬이고 $Q$가 가역 $n \times n$ 행렬이며 $A = Q^{-1}BQ$이고 $\lambda$가 실수라 하자. $v$가 $\lambda$에 속하는 $B$의 [[eigenvalue-and-eigenvector|고유벡터]]이면 $Q^{-1}v$는 $\lambda$에 속하는 $A$의 고유벡터이고, $w$가 $\lambda$에 속하는 $A$의 고유벡터이면 $Qw$는 $\lambda$에 속하는 $B$의 고유벡터이다. 따라서 닮은 두 행렬의 고윳값은 같다. 곧 $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda$가 $B$의 고윳값일 때이다.
6. $T : V \to V$가 선형사상이고 $\lambda$가 실수이며 $v \in V$라 하자. $v$가 $\lambda$에 속하는 $T$의 고유벡터인 것은 정확히 $[v]_{\mathcal{B}}$가 $\lambda$에 속하는 $[T]_{\mathcal{B}}$의 고유벡터일 때이다. 따라서 $\lambda$가 $T$의 고윳값인 것은 정확히 $\lambda$가 $[T]_{\mathcal{B}}$의 고윳값일 때이다.
7. $V = \mathbb{R}^n$이라 하고, $k$번째 열이 $b_k$인 $n \times n$ 행렬([[matrix|행렬]]의 (4))을 $B$, $\mathbb{R}^n$의 [[standard-basis|표준기저]]를 $\mathcal{E}$라 하자. 그러면 $B$는 가역이고, 좌표 동형사상 $C_{\mathcal{B}}$는 $T_B$이며, 모든 $v \in \mathbb{R}^n$에서 $[v]_{\mathcal{B}} = B^{-1}v$이고, $[i_{\mathbb{R}^n}]_{\mathcal{E}\mathcal{B}} = B$이다. $M$이 $n \times n$ 행렬이면 $[T_M]_{\mathcal{B}} = B^{-1}MB$이다.
:::

:::english
Let $V$ be a vector space, $n$ a natural number, and $\mathcal{A} = a_1, \dots, a_n$ and $\mathcal{B} = b_1, \dots, b_n$ bases of $V$ of length $n$. The coordinate vector $[v]_{\mathcal{B}}$ and the matrices $[T]_{\mathcal{B}\mathcal{A}}$, $[T]_{\mathcal{B}}$ with respect to bases are those defined in the entry on the matrix of a linear map with respect to bases, and $i_V$ is the identity function on $V$. The $n \times n$ matrix $[i_V]_{\mathcal{B}\mathcal{A}}$ is called the **change-of-basis matrix** from $\mathcal{A}$ to $\mathcal{B}$. A product of three matrices written without parentheses, such as $Q^{-1}BQ$, means $(Q^{-1}B)Q = Q^{-1}(BQ)$ ((1) of the entry on properties of the matrix product).

1. The $k$-th column of $[i_V]_{\mathcal{B}\mathcal{A}}$ is $[a_k]_{\mathcal{B}}$, and $[v]_{\mathcal{B}} = [i_V]_{\mathcal{B}\mathcal{A}}[v]_{\mathcal{A}}$ for every $v \in V$.
2. $[i_V]_{\mathcal{B}\mathcal{A}}$ is invertible and its inverse is $[i_V]_{\mathcal{A}\mathcal{B}}$.
3. If $T : V \to V$ is a linear map and $Q = [i_V]_{\mathcal{B}\mathcal{A}}$, then $[T]_{\mathcal{A}} = Q^{-1}[T]_{\mathcal{B}}Q$.

**Similar matrices.** For $n \times n$ matrices $A$, $B$, $A$ is **similar** to $B$ exactly when there is an invertible $n \times n$ matrix $Q$ with $A = Q^{-1}BQ$. The relation $\{(A, B) \in M_{n \times n} \times M_{n \times n} : A \text{ is similar to } B\}$ on $M_{n \times n}$ is called **similarity**.

4. Similarity is an equivalence relation on $M_{n \times n}$. In particular, if $A$ is similar to $B$ then $B$ is similar to $A$, and in this case we say that $A$ and $B$ are similar.
5. Let $A$, $B$ be $n \times n$ matrices, $Q$ an invertible $n \times n$ matrix with $A = Q^{-1}BQ$, and $\lambda$ a real number. If $v$ is an eigenvector of $B$ corresponding to $\lambda$, then $Q^{-1}v$ is an eigenvector of $A$ corresponding to $\lambda$; if $w$ is an eigenvector of $A$ corresponding to $\lambda$, then $Qw$ is an eigenvector of $B$ corresponding to $\lambda$. Hence similar matrices have the same eigenvalues. That is, $\lambda$ is an eigenvalue of $A$ exactly when $\lambda$ is an eigenvalue of $B$.
6. Let $T : V \to V$ be a linear map, $\lambda$ a real number and $v \in V$. $v$ is an eigenvector of $T$ corresponding to $\lambda$ exactly when $[v]_{\mathcal{B}}$ is an eigenvector of $[T]_{\mathcal{B}}$ corresponding to $\lambda$. Hence $\lambda$ is an eigenvalue of $T$ exactly when $\lambda$ is an eigenvalue of $[T]_{\mathcal{B}}$.
7. Let $V = \mathbb{R}^n$, let $B$ be the $n \times n$ matrix whose $k$-th column is $b_k$ ((4) of the entry on matrices), and let $\mathcal{E}$ be the standard basis of $\mathbb{R}^n$. Then $B$ is invertible, the coordinate isomorphism $C_{\mathcal{B}}$ is $T_B$, $[v]_{\mathcal{B}} = B^{-1}v$ for every $v \in \mathbb{R}^n$, and $[i_{\mathbb{R}^n}]_{\mathcal{E}\mathcal{B}} = B$. If $M$ is an $n \times n$ matrix, then $[T_M]_{\mathcal{B}} = B^{-1}MB$.
:::

## 직관

같은 선형사상도 기저를 바꾸면 행렬이 달라집니다. 같은 문장을 두 나라 말로 적는 것과 비슷합니다. 기저 변환 행렬은 한 말에서 다른 말로 옮기는 사전이고, (3)은 "새 말로 적힌 문장을 옛 말로 옮기고, 옛 말의 규칙으로 계산하고, 다시 새 말로 옮긴다"는 뜻입니다. 사전은 거꾸로도 쓸 수 있어야 하는데, 그것이 (2)의 가역성입니다. 비유가 맞지 않는 곳은 번역과 달리 여기서는 옮기는 규칙(행렬의 곱)이 정확히 정해져 있어 아무것도 잃지 않는다는 점입니다.

닮음은 (3)에서 나온 꼴을 행렬만으로 말한 것입니다. (3)이 말하듯 같은 사상의 두 기저에 관한 행렬은 닮았습니다. 출처는 거꾸로 닮은 행렬을 같은 사상의 다른 기저에 관한 행렬로 볼 수 있다고 적습니다. 닮은 두 행렬은 고윳값이 같습니다 (5). 다만 고유벡터는 그대로가 아니라 $Q^{-1}$을 곱해 옮겨집니다. 아래 첫째 반례처럼 닮은 두 행렬의 고유벡터는 다를 수 있습니다. (6)은 선형사상의 고윳값을 기저를 하나 골라 행렬의 고윳값으로 구해도 되고, 어느 기저를 골라도 결과가 같다는 것입니다. 출처는 이 사실을 행렬식으로 보이지만, 이 항목은 고유벡터를 좌표벡터로 직접 옮겨 보입니다.

## 성질의 증명

:::proof
[[linear-map-examples|선형사상의 예]]의 (2)에 의해 $i_V$는 선형사상이므로 기저에 관한 그 행렬이 정해진다. 아래에서 "기저 행렬 항목"은 [[matrix-in-bases|기저에 관한 선형사상의 행렬]]을 가리킨다.

**(1)의 증명.** 기저 행렬 항목의 (2)를 $W = V$, $T = i_V$, 정의역의 기저 $\mathcal{A}$, 공역의 기저 $\mathcal{B}$에 쓰면 $[i_V]_{\mathcal{B}\mathcal{A}}$의 $k$번째 열은 $[i_V a_k]_{\mathcal{B}} = [a_k]_{\mathcal{B}}$이다. 같은 항목의 (3)을 같은 설정에 쓰면 $[v]_{\mathcal{B}} = [i_V v]_{\mathcal{B}} = [i_V]_{\mathcal{B}\mathcal{A}}[v]_{\mathcal{A}}$이다.

**(2)의 증명.** [[isomorphism|동형사상]]의 (4)에 의해 $i_V$는 동형사상이다. [[composition-of-linear-maps|선형사상의 합성]]의 (2)에 의해 $i_V \circ i_V = i_V$이므로, 동형사상의 (1)을 $T = S = i_V$에 쓰면 $i_V$의 역함수는 $i_V$이다. 기저 행렬 항목의 (6)을 $T = i_V$, 정의역의 기저 $\mathcal{A}$, 공역의 기저 $\mathcal{B}$에 쓰면 $[i_V]_{\mathcal{B}\mathcal{A}}$는 가역이고 그 역행렬은 $[i_V^{-1}]_{\mathcal{A}\mathcal{B}} = [i_V]_{\mathcal{A}\mathcal{B}}$이다.

**(3)의 증명.** 선형사상의 합성의 (2)에 의해 $T \circ i_V = T$이고 $i_V \circ T = T$이므로 $T = i_V \circ (T \circ i_V)$이다. 선형사상의 합성의 (1)에 의해 $T \circ i_V$는 선형사상이다. 기저 행렬 항목의 (4)를 안쪽 사상 $i_V$(기저 $\mathcal{A}$에서 $\mathcal{B}$로)와 바깥 사상 $T$(기저 $\mathcal{B}$에서 $\mathcal{B}$로)에 쓰면 $[T \circ i_V]_{\mathcal{B}\mathcal{A}} = [T]_{\mathcal{B}}[i_V]_{\mathcal{B}\mathcal{A}} = [T]_{\mathcal{B}}Q$이다. 같은 (4)를 안쪽 사상 $T \circ i_V$(기저 $\mathcal{A}$에서 $\mathcal{B}$로)와 바깥 사상 $i_V$(기저 $\mathcal{B}$에서 $\mathcal{A}$로)에 쓰면
$$[T]_{\mathcal{A}} = [i_V \circ (T \circ i_V)]_{\mathcal{A}\mathcal{A}} = [i_V]_{\mathcal{A}\mathcal{B}}[T \circ i_V]_{\mathcal{B}\mathcal{A}} = [i_V]_{\mathcal{A}\mathcal{B}}\bigl([T]_{\mathcal{B}}Q\bigr)$$
이다. (2)에 의해 $[i_V]_{\mathcal{A}\mathcal{B}} = Q^{-1}$이므로 $[T]_{\mathcal{A}} = Q^{-1}[T]_{\mathcal{B}}Q$이다.

**(4)의 증명.** 아래의 행렬은 모두 $n \times n$ 행렬이다. 가역 $n \times n$ 행렬의 역행렬은 [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $n \times n$ 행렬이고 $QQ^{-1} = Q^{-1}Q = I_n$을 만족한다. 곱의 괄호는 행렬 곱의 성질의 (1)(결합법칙)에 의해 어떻게 쳐도 같다. 동치관계의 세 조건을 차례로 보인다.

반사성: [[inverse-matrix-properties|역행렬의 성질]]의 (1)에 의해 $I_n$은 가역이고 $I_n^{-1} = I_n$이며, 행렬 곱의 성질의 (4)에 의해 $I_n^{-1}AI_n = I_n A I_n = A$이다. 따라서 $A$는 $A$와 닮았다.

대칭성: $A = Q^{-1}BQ$라 하자. $P = Q^{-1}$로 두면 역행렬의 성질의 (2)에 의해 $P$는 가역이고 $P^{-1} = Q$이다. 그러면
$$P^{-1}AP = Q(Q^{-1}BQ)Q^{-1} = (QQ^{-1})B(QQ^{-1}) = I_n B I_n = B$$
이다(마지막 등호는 행렬 곱의 성질의 (4)). 따라서 $B$는 $A$와 닮았다.

추이성: $A = Q^{-1}BQ$이고 $B = R^{-1}CR$이라 하자($Q$, $R$은 가역 $n \times n$ 행렬). 역행렬의 성질의 (3)에 의해 $RQ$는 가역이고 $(RQ)^{-1} = Q^{-1}R^{-1}$이므로
$$A = Q^{-1}(R^{-1}CR)Q = (Q^{-1}R^{-1})C(RQ) = (RQ)^{-1}C(RQ)$$
이다. 따라서 $A$는 $C$와 닮았다. [[equivalence-relation|동치관계]]의 정의에 의해 닮음은 동치관계이다.

**(5)의 증명.** $v$가 $\lambda$에 속하는 $B$의 고유벡터라 하자. [[eigenvalue-and-eigenvector|고윳값과 고유벡터]]의 정의에 의해 $Bv = \lambda v$이고 $v \ne 0$이다. [[matrix-product|행렬의 곱]]의 (1)과 가역행렬과 역행렬의 (1), [[matrix-vector-product|행렬과 벡터의 곱]]의 (3)에 의해 $Q(Q^{-1}v) = (QQ^{-1})v = I_n v = v$이다. 행렬의 곱의 (1)을 거듭 쓰면
$$A(Q^{-1}v) = \bigl(Q^{-1}(BQ)\bigr)(Q^{-1}v) = Q^{-1}\Bigl(B\bigl(Q(Q^{-1}v)\bigr)\Bigr) = Q^{-1}(Bv) = Q^{-1}(\lambda v) = \lambda(Q^{-1}v)$$
이다. 마지막 등호는 행렬과 벡터의 곱의 (2)이다. $Q^{-1}v = 0$이라면 $T_Q$가 선형사상이므로 [[linear-map|선형사상]]의 (T1)에 의해 $v = Q(Q^{-1}v) = Q0 = 0$이 되어 $v \ne 0$에 어긋난다. 따라서 $Q^{-1}v \ne 0$이고 $Q^{-1}v$는 $\lambda$에 속하는 $A$의 고유벡터이다.

$w$가 $\lambda$에 속하는 $A$의 고유벡터라 하자. (4)의 대칭성의 증명에 의해 $P = Q^{-1}$은 가역이고 $P^{-1} = Q$이며 $B = P^{-1}AP$이다. 앞 문단을 $B$, $A$, $Q$ 대신 $A$, $B$, $P$에 쓰면 $P^{-1}w = Qw$는 $\lambda$에 속하는 $B$의 고유벡터이다.

따라서 $\lambda$에 속하는 $B$의 고유벡터가 있으면 $\lambda$에 속하는 $A$의 고유벡터가 있고, 거꾸로도 그렇다. 고윳값의 정의에 의해 $\lambda$가 $A$의 고윳값인 것은 정확히 $\lambda$가 $B$의 고윳값일 때이다. (4)에 의해 "$A$와 $B$가 닮았다"는 $A$가 $B$와 닮은 것이므로 이것으로 닮은 두 행렬의 고윳값이 같다.

**(6)의 증명.** 기저 행렬 항목의 (3)을 $W = V$, $\mathcal{C} = \mathcal{B}$에 쓰면 $[Tv]_{\mathcal{B}} = [T]_{\mathcal{B}}[v]_{\mathcal{B}}$이고, 같은 항목의 (1)에 의해 $[\lambda v]_{\mathcal{B}} = \lambda[v]_{\mathcal{B}}$이다. 먼저 $Tv = \lambda v$인 것은 정확히 $[T]_{\mathcal{B}}[v]_{\mathcal{B}} = \lambda[v]_{\mathcal{B}}$일 때임을 보이자. $Tv = \lambda v$이면 $[T]_{\mathcal{B}}[v]_{\mathcal{B}} = [Tv]_{\mathcal{B}} = [\lambda v]_{\mathcal{B}} = \lambda[v]_{\mathcal{B}}$이다. 거꾸로 $[T]_{\mathcal{B}}[v]_{\mathcal{B}} = \lambda[v]_{\mathcal{B}}$이면 $[Tv]_{\mathcal{B}} = [\lambda v]_{\mathcal{B}}$이고, 기저 행렬 항목의 (1)의 $C_{\mathcal{B}}([u]_{\mathcal{B}}) = u$에 의해 $Tv = C_{\mathcal{B}}([Tv]_{\mathcal{B}}) = C_{\mathcal{B}}([\lambda v]_{\mathcal{B}}) = \lambda v$이다. 또 같은 (1)에 의해 $v \ne 0_V$인 것은 정확히 $[v]_{\mathcal{B}} \ne 0$일 때이다. 두 동치를 합치면, $v$가 $\lambda$에 속하는 $T$의 고유벡터인 것은 정확히 $[T]_{\mathcal{B}}[v]_{\mathcal{B}} = \lambda[v]_{\mathcal{B}}$이고 $[v]_{\mathcal{B}} \ne 0$일 때, 곧 행렬의 고유벡터의 정의에 의해 $[v]_{\mathcal{B}}$가 $\lambda$에 속하는 $[T]_{\mathcal{B}}$의 고유벡터일 때이다.

고윳값에 대하여: $\lambda$가 $T$의 고윳값이면 그 고유벡터 $v$에 대해 $[v]_{\mathcal{B}}$가 $[T]_{\mathcal{B}}$의 고유벡터이므로 $\lambda$는 $[T]_{\mathcal{B}}$의 고윳값이다. 거꾸로 $x \in \mathbb{R}^n$이 $\lambda$에 속하는 $[T]_{\mathcal{B}}$의 고유벡터이면 $v = C_{\mathcal{B}} x$에 대하여 기저 행렬 항목의 (1)에 의해 $[v]_{\mathcal{B}} = x$이므로, 앞 문단에 의해 $v$는 $\lambda$에 속하는 $T$의 고유벡터이다.

**(7)의 증명.** $x \in \mathbb{R}^n$이면 $B$의 $k$번째 열이 $b_k$이므로 행렬과 벡터의 곱의 정의에 의해 $Bx = x_1 b_1 + \cdots + x_n b_n = C_{\mathcal{B}} x$이다. 두 함수의 정의역이 $\mathbb{R}^n$으로 같고 모든 $x$에서 값이 같으므로 [[function|함수의 같음]]에 의해 $C_{\mathcal{B}} = T_B$이다. $C_{\mathcal{B}}$는 동형사상이므로 가역행렬과 역행렬의 (2)에 의해 $B$는 가역이고 $T_{B^{-1}} = (T_B)^{-1} = C_{\mathcal{B}}^{-1}$이다. 따라서 $[v]_{\mathcal{B}} = C_{\mathcal{B}}^{-1}(v) = B^{-1}v$이다.

(1)을 정의역의 기저 $\mathcal{B}$, 공역의 기저 $\mathcal{E}$에 쓰면 $[i_{\mathbb{R}^n}]_{\mathcal{E}\mathcal{B}}$의 $k$번째 열은 $[b_k]_{\mathcal{E}}$이고, 기저 행렬 항목의 (7)에 의해 이것은 $b_k$, 곧 $B$의 $k$번째 열이다. [[matrix|행렬]]의 (3)에 의해 $[i_{\mathbb{R}^n}]_{\mathcal{E}\mathcal{B}} = B$이다.

마지막으로 $x \in \mathbb{R}^n$이면 행렬의 곱의 (1)을 두 번 쓰면 $C_{\mathcal{B}}^{-1}\bigl(T_M(C_{\mathcal{B}} x)\bigr) = B^{-1}\bigl(M(Bx)\bigr) = (B^{-1}M)(Bx) = \bigl((B^{-1}M)B\bigr)x$이다. 함수의 같음에 의해 $C_{\mathcal{B}}^{-1} \circ T_M \circ C_{\mathcal{B}} = T_{B^{-1}MB}$이고, [[matrix-of-a-linear-map|선형사상의 행렬]]의 (2)에 의해 $[T_M]_{\mathcal{B}} = [T_{B^{-1}MB}] = B^{-1}MB$이다. $\blacksquare$
:::

## 예시와 반례

:::example[공식으로 다시 구한 행렬과 옮겨진 고유벡터]
[[matrix-in-bases|기저에 관한 선형사상의 행렬]]의 예시처럼 $b_1 = (2, 1)$, $b_2 = (1, 1)$, $\mathcal{B} = b_1, b_2$, $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$이라 합시다. (7)의 행렬은 $B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$이고, $B^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$입니다. 이 행렬을 $R$이라 하면, 열마다 $B(1, -1) = (2, 1) - (1, 1) = (1, 0)$, $B(-1, 2) = -(2, 1) + 2(1, 1) = (0, 1)$이므로 $BR = I_2$이고, $R(2, 1) = 2(1, -1) + (-1, 2) = (1, 0)$, $R(1, 1) = (1, -1) + (-1, 2) = (0, 1)$이므로 $RB = I_2$입니다. [[invertible-matrix|가역행렬과 역행렬]]의 (1)에 의해 $R = B^{-1}$입니다.

$MB$의 열은 $M(2, 1) = (1, 2)$와 $M(1, 1) = (1, 1)$이고, 여기에 $B^{-1}$을 곱하면 $B^{-1}(1, 2) = (1, -1) + 2(-1, 2) = (-1, 3)$, $B^{-1}(1, 1) = (1, -1) + (-1, 2) = (0, 1)$이므로
$$[T_M]_{\mathcal{B}} = B^{-1}MB = \begin{pmatrix} -1 & 0 \\ 3 & 1 \end{pmatrix} = N$$
입니다. 기저에 관한 행렬 항목의 예시에서 그 항목의 (2)로 구한 행렬과 같습니다. $M$의 고유벡터를 옮겨 봅시다. $M(1, 1) = (1, 1)$이고 $M(1, -1) = (-1, 1) = (-1)(1, -1)$이므로 $1$과 $-1$은 $M$의 고윳값입니다. $N = B^{-1}MB$이므로 (5)의 $A$, $B$, $Q$ 자리에 $N$, $M$, $B$를 두고 쓰면 $B^{-1}(1, 1) = (0, 1)$과 $B^{-1}(1, -1) = (1, -1) - (-1, 2) = (2, -3)$이 $N$의 고유벡터여야 하고, 실제로 $N(0, 1) = (0, 1)$, $N(2, -3) = 2(-1, 3) + (-3)(0, 1) = (-2, 3) = (-1)(2, -3)$입니다.
:::

:::counterexample[닮은 두 행렬의 고유벡터는 다를 수 있다]
위 예시의 $M$과 $N$은 닮았고 고윳값 $1$과 $-1$을 함께 가집니다. 그러나 $(1, 1)$은 $M$의 고유벡터이지만 $N$의 고유벡터는 아닙니다. $N(1, 1) = (-1, 3) + (0, 1) = (-1, 4)$인데, $(-1, 4) = t(1, 1)$이려면 $t = -1$이고 $t = 4$여야 하므로 그런 실수 $t$가 없습니다. (5)가 말하는 것은 고윳값이 같다는 것과 고유벡터가 $Q^{-1}$을 곱해 옮겨진다는 것까지입니다.
:::

:::counterexample[가역이라는 조건을 빼면 닮음이 아니다]
닮음의 정의에서 $Q$가 가역이라는 조건을 빼고 "$QA = BQ$인 $n \times n$ 행렬 $Q$가 있다"로 바꾸면, $Q$를 영행렬 $O$로 두어 모든 $A$, $B$가 이 조건을 만족합니다. 예를 들어 $OI_2 = O = OO$입니다. 그러나 $I_2$는 $2 \times 2$ 영행렬 $O$와 닮지 않았습니다. 행렬과 벡터의 곱의 정의와 (B4), [[finite-sum-of-vectors|벡터의 유한 합]]의 (H5)에 의해 모든 $x$에서 $Ox = x_1 0 + x_2 0 = 0$입니다. 가역인 $Q$가 무엇이든 $OQ$의 열은 $O\mathbf{q}_k = 0$이므로 $OQ = O$이고, $Q^{-1}O$의 열은 [[linear-map|선형사상]]의 (T1)에 의해 $Q^{-1}0 = 0$이므로 $Q^{-1}O = O$입니다. 따라서 $Q^{-1}OQ = Q^{-1}(OQ) = Q^{-1}O = O$이고, $O$의 $(1, 1)$ 성분은 $0$, $I_2$의 $(1, 1)$ 성분은 $1$이어서 $O \ne I_2$이기 때문입니다.
:::

## 확인 질문

:::check[$n \times n$ 행렬 $A$가 $I_n$과 닮았으면 $A$는 무엇인가?]
$I_n$입니다. $A = Q^{-1}I_n Q$인 가역행렬 $Q$가 있으므로, 행렬 곱의 성질의 (4)와 가역행렬과 역행렬의 (1)에 의해 $A = Q^{-1}Q = I_n$입니다. 곧 $I_n$과 닮은 행렬은 $I_n$뿐입니다.
:::

:::check[$\mathcal{A}$에서 $\mathcal{B}$로의 기저 변환 행렬이 $I_n$이면 두 기저는 어떤 관계인가?]
같은 열입니다. (1)에 의해 모든 $k$에서 $[a_k]_{\mathcal{B}}$는 $I_n$의 $k$번째 열 $e_k$이고, 기저 행렬 항목의 (1)의 $[b_k]_{\mathcal{B}} = e_k$와 $C_{\mathcal{B}}([u]_{\mathcal{B}}) = u$에 의해 $a_k = C_{\mathcal{B}}([a_k]_{\mathcal{B}}) = C_{\mathcal{B}}([b_k]_{\mathcal{B}}) = b_k$입니다. 모든 자리의 항이 같으므로 $\mathcal{A}$와 $\mathcal{B}$는 같은 열입니다.
:::
