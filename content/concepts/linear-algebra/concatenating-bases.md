---
title: 이어 붙인 기저
title_en: Concatenating Bases
aliases: [기저 이어 붙이기, 부분공간들의 기저를 이어 붙이기, 일차독립인 부분공간들의 합의 차원, concatenation of bases, union of bases, dimension of a direct sum]
kind: lemma
field: linear-algebra
msc: ["15A03"]
level: undergrad
summary: 일차독립인 부분공간들의 기저를 차례로 이어 붙인 열은 그 부분공간들의 합의 기저이다. 따라서 각 부분공간이 유한차원이면 합도 유한차원이고 합의 차원은 차원들의 합이다. 두 부분공간이면 교집합이 {0} 일 때이다.
requires: [set, function, cartesian-product, finite-set, even-and-odd, prime-number, well-ordering-principle, mathematical-induction, real-function-space, real-number-arithmetic, vector-space, vector-space-basic-properties, subspace, subspace-intersection-and-sum, finite-sum-of-vectors, linear-combination-and-span, linear-independence, basis, basis-iff-independent-and-spanning, dimension, extension-to-a-basis, sequences-in-a-subspace, dimension-of-subspace, standard-basis, independent-subspaces]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: 4장 2.4절 Bases of subspaces (AKA direct sums of subspaces)의 Theorem 2.6, Lemma 2.7 과 그 증명, Theorem 2.6 의 증명, pp.110–111; 9장 3.1절 Invariant subspaces 의 기저 잇기 문단, p.260
    checked: original
    note: "출처의 Lemma 2.7(p.110)은 일차독립인 부분공간들 V₁, …, V_p 의 각 V_k 에 일차독립인 계 B_k 가 있으면 합집합 ∪_k B_k 가 일차독립이라고 진술하고, Theorem 2.6(p.110)은 V₁, …, V_p 가 부분공간들의 기저(모든 v ∈ V 의 표현이 하나뿐)이고 B_k 가 V_k 의 기저이면 ∪_k B_k 가 V 의 기저라고 진술한다. 출처는 증명에서 '알맞은 기호를 고르는 것이 어려울 뿐'이라며 B₁ 의 벡터를 먼저, 다음에 B₂ 의 벡터를 늘어놓는 식으로 번호를 붙이고 첨자 집합 Λ_k 위의 합 v_k = Σ_{j∈Λ_k} c_j b_j 로 쓴다('flat' notation, pp.110–111). 각주 2, 3(p.110)은 B_k 의 벡터를 나열하지 않는다고 적는다. 이 항목은 합집합 대신 열을 이어 붙이고, 그 순서를 Λ = {(k, j)} 와 s_k = d₁ + ⋯ + d_k 로 정해 (2)에서 이어 붙인 열이 하나뿐임을 보인다. 첨자 집합 위의 합 대신 두 부분공간판 (1)과 p 에 대한 귀납을 쓰고, 그 귀납에 independent-subspaces 의 (5)를 쓴다. 출처의 Lemma 2.7 은 B_k 가 일차독립이기만 하면 된다고 하는데, 이 항목은 (1)의 (ii)에서만 그 꼴을 두 부분공간에 대해 적고 p 개의 판은 기저에 대해서만 적는다. 출처의 Theorem 2.6 은 부분공간들이 V 전체의 기저라고 가정하고, 이 항목의 (3)은 일차독립만 가정해 합 V₁ + ⋯ + V_p 의 기저를 얻는다. 차원의 등식 (1)의 (iv)와 (4)는 출처에 정리로 적혀 있지 않고, 출처는 Theorem 2.8 의 증명(p.112)에서 'B 의 벡터의 개수는 dim E_k 들의 합'이라고 쓴다. (4)에서 기저의 모임이 있다는 것을 귀납으로 보인 것과 모든 증명은 이 사이트가 썼다. 출처 9장 3.1절(p.260)은 불변 부분공간들의 기저 각각에서 기저를 골라 이어 붙이면 V 의 기저가 된다고 Theorem 2.6 을 가리키며, 그 순서를 'E₁ 의 기저를 먼저, 다음에 E₂ 의 기저' 로 적는다. 확인 질문 '$U$, $W$가 $\\mathbb{R}^5$의 부분공간이고 $\\dim U = 3$, $\\dim W = 3$이면 $U \\cap W = \\{0\\}$일 수 있는가?'의 결론은 출처 7장 4.2절 Theorem 4.3 의 증명(p.212: dim E + dim F > n 이므로 E ∩ F 에 영이 아닌 벡터가 있다)이 쓰는 사실과 같은 꼴이다."
status: reviewed
review_note: "2026-11-24 자기 검토(docs/self-review.md)와 지휘자의 확인. 일반 문장으로 읽히던 반례 제목 1건, 귀납 명제의 범위 2건, 증명과 어긋난 직관 2건, 다른 항목의 예시에 기대던 근거 3건을 작성자가 고쳤다. 독립 검토는 거치지 않았다."
added: 2026-11-24
---

:::statement
$V$가 [[vector-space|벡터공간]]이라 하자. $V$의 [[subspace|부분공간]] $W$는 [[subspace|(P1)]]의 제한한 연산으로 벡터공간으로 보고, $W$의 [[basis|기저]], [[dimension|유한차원]], 차원은 이 벡터공간에 대해 말한다([[dimension-of-subspace|부분공간의 차원]]). [[sequences-in-a-subspace|부분공간 안의 열]]의 (J4)에 의해, 모든 항이 $W$에 속하는 $V$의 [[finite-sum-of-vectors|벡터의 열]]이 $W$의 기저인 것은 정확히 그 열이 ($V$에서) [[linear-independence|일차독립]]이고 그 생성이 $W$일 때이다. 두 열을 **이어 붙인 열**은 [[extension-to-a-basis|기저로 늘리기]]의 진술에서 정한 것이다. 합과 일차독립인 부분공간들은 [[independent-subspaces|일차독립인 부분공간들]]에서 정한 것이다.

1. (두 부분공간) $U$, $W$가 $V$의 부분공간이고 $u_1, \dots, u_r$과 $w_1, \dots, w_s$가 각각 모든 항이 $U$, $W$에 속하는 $V$의 열이며($r, s \ge 0$), $c$가 두 열을 이어 붙인 길이 $r + s$인 열 $u_1, \dots, u_r, w_1, \dots, w_s$라 하자.

   (i) $\operatorname{span}(c) = \operatorname{span}(u_1, \dots, u_r) + \operatorname{span}(w_1, \dots, w_s)$이다. 오른쪽은 [[subspace-intersection-and-sum|두 부분공간의 합]]이다.

   (ii) $U \cap W = \{0_V\}$이고 두 열이 모두 일차독립이면 $c$는 일차독립이다.

   (iii) $U \cap W = \{0_V\}$이고 두 열이 각각 $U$, $W$의 기저이면 $c$는 $U + W$의 기저이다.

   (iv) $U \cap W = \{0_V\}$이고 $U$, $W$가 유한차원이면 $U + W$는 유한차원이고 $\dim(U + W) = \dim U + \dim W$이다.
2. (이어 붙이는 자리) $p$가 자연수이고 $d_1, \dots, d_p$가 모든 항이 $0$ 이상의 정수인 길이 $p$인 실수의 열이라 하자. $s_0 = 0$으로 두고, $1 \le k \le p$이면 $s_k$를 처음 $k$개의 합 $d_1 + \cdots + d_k$([[finite-sum-of-vectors|실수의 합]])로 둔다.

   (i) $1 \le k \le p$이면 $s_k = s_{k-1} + d_k$이다. 모든 $s_k$는 $0$ 이상의 정수이고, $0 \le a \le b \le p$이면 $s_a \le s_b$이다.

   (ii) $\Lambda = \{(k, j) \in \mathbb{Z} \times \mathbb{Z} : 1 \le k \le p,\ 1 \le j \le d_k\}$로 둔다. $\{1, \dots, s_p\}$의 모든 원소 $i$는 어떤 $(k, j) \in \Lambda$로 $i = s_{k-1} + j$라 쓸 수 있다. 또 $(k, j) \in \Lambda$이면 $1 \le s_{k-1} + j \le s_k$이다.

   (iii) $b : \Lambda \to V$가 함수이고 그 값을 $b_{k,j}$로 쓰자. 각 $k$에서 $j \in \{1, \dots, d_k\}$를 $b_{k,j}$로 보내는 길이 $d_k$인 열을 $\mathcal{B}_k$라 한다. 그러면 모든 $(k, j) \in \Lambda$에서 $c_{s_{k-1}+j} = b_{k,j}$인 길이 $s_p$인 $V$의 열 $c$가 꼭 하나 있다. 이 $c$를 $\mathcal{B}_1, \dots, \mathcal{B}_p$를 **차례로 이어 붙인 열**이라 한다. $p = 1$이면 $c = \mathcal{B}_1$이다. $p \ge 2$이면 $c$는 처음 $p - 1$개의 $\mathcal{B}_1, \dots, \mathcal{B}_{p-1}$을 차례로 이어 붙인 열($b$를 $k \le p - 1$인 $(k, j)$로 제한한 것에 대한 것)과 $\mathcal{B}_p$를 이어 붙인 열이다.
3. (이어 붙인 기저) $V_1, \dots, V_p$가 일차독립인 길이 $p$인 부분공간의 열이고, (2)의 $d$, $\Lambda$, $b$에 대하여 모든 $k$에서 $\mathcal{B}_k$가 $V_k$의 기저라 하자(이런 $b$를 $V_1, \dots, V_p$의 **기저의 모임**이라 한다). 그러면 $\mathcal{B}_1, \dots, \mathcal{B}_p$를 차례로 이어 붙인 열 $c$는 $V_1 + \cdots + V_p$의 기저이다. 따라서 모든 $k$에서 $V_k$는 유한차원이고 $\dim V_k = d_k$이며, $V_1 + \cdots + V_p$는 유한차원이고 $\dim(V_1 + \cdots + V_p) = s_p = d_1 + \cdots + d_p$이다.
4. (차원의 합) $V_1, \dots, V_p$가 일차독립인 길이 $p$인 부분공간의 열이고 모든 $V_k$가 유한차원이라 하자. $k$번째 항이 $\dim V_k$인 실수의 열을 $d$라 하면, $V_1, \dots, V_p$의 기저의 모임 $b : \Lambda \to V$가 있다. 따라서 (3)에 의해 $V_1 + \cdots + V_p$는 유한차원이고
   $$\dim(V_1 + \cdots + V_p) = \dim V_1 + \cdots + \dim V_p$$
   이며, $V_1 + \cdots + V_p$의 기저 $c$로서 모든 $(k, j) \in \Lambda$에서 $c_{s_{k-1}+j} \in V_k$이고 각 $k$에서 $j$를 $c_{s_{k-1}+j}$로 보내는 길이 $d_k$인 열이 $V_k$의 기저인 것이 있다.
:::

:::english
Let $V$ be a vector space. A subspace $W$ of $V$ is regarded as a vector space with the restricted operations of (P1), and a basis, finite-dimensionality and the dimension of $W$ refer to this vector space. By (J4), a sequence of vectors in $V$ all of whose terms lie in $W$ is a basis of $W$ exactly when it is linearly independent (in $V$) and its span is $W$. The **concatenation** of two sequences is as defined in the statement of the entry on extending to a basis. Sums and linearly independent subspaces are as defined in the entry on linearly independent subspaces.

1. (Two subspaces) Let $U$, $W$ be subspaces of $V$, let $u_1, \dots, u_r$ and $w_1, \dots, w_s$ be sequences in $V$ all of whose terms lie in $U$ and in $W$ respectively ($r, s \ge 0$), and let $c$ be the concatenation $u_1, \dots, u_r, w_1, \dots, w_s$ of length $r + s$.

   (i) $\operatorname{span}(c) = \operatorname{span}(u_1, \dots, u_r) + \operatorname{span}(w_1, \dots, w_s)$, the sum of two subspaces on the right.

   (ii) If $U \cap W = \{0_V\}$ and both sequences are linearly independent, then $c$ is linearly independent.

   (iii) If $U \cap W = \{0_V\}$ and the two sequences are bases of $U$ and $W$ respectively, then $c$ is a basis of $U + W$.

   (iv) If $U \cap W = \{0_V\}$ and $U$, $W$ are finite-dimensional, then $U + W$ is finite-dimensional and $\dim(U + W) = \dim U + \dim W$.
2. (Places of the concatenation) Let $p$ be a natural number and $d_1, \dots, d_p$ a sequence of real numbers of length $p$ all of whose terms are integers $\ge 0$. Put $s_0 = 0$, and for $1 \le k \le p$ let $s_k$ be the sum $d_1 + \cdots + d_k$ of the first $k$ terms.

   (i) If $1 \le k \le p$, then $s_k = s_{k-1} + d_k$. Every $s_k$ is an integer $\ge 0$, and $s_a \le s_b$ whenever $0 \le a \le b \le p$.

   (ii) Put $\Lambda = \{(k, j) \in \mathbb{Z} \times \mathbb{Z} : 1 \le k \le p,\ 1 \le j \le d_k\}$. Every element $i$ of $\{1, \dots, s_p\}$ can be written as $i = s_{k-1} + j$ with some $(k, j) \in \Lambda$. Moreover, if $(k, j) \in \Lambda$, then $1 \le s_{k-1} + j \le s_k$.

   (iii) Let $b : \Lambda \to V$ be a function, with values written $b_{k,j}$. For each $k$, let $\mathcal{B}_k$ be the sequence of length $d_k$ sending $j \in \{1, \dots, d_k\}$ to $b_{k,j}$. Then there is exactly one sequence $c$ in $V$ of length $s_p$ with $c_{s_{k-1}+j} = b_{k,j}$ for all $(k, j) \in \Lambda$. This $c$ is called the **concatenation of $\mathcal{B}_1, \dots, \mathcal{B}_p$ in order**. If $p = 1$, then $c = \mathcal{B}_1$. If $p \ge 2$, then $c$ is the concatenation of the concatenation of the first $p - 1$ sequences $\mathcal{B}_1, \dots, \mathcal{B}_{p-1}$ in order (the one for the restriction of $b$ to the $(k, j)$ with $k \le p - 1$) with $\mathcal{B}_p$.
3. (Concatenated bases) Let $V_1, \dots, V_p$ be a linearly independent sequence of subspaces of length $p$, and suppose that, for $d$, $\Lambda$, $b$ as in (2), $\mathcal{B}_k$ is a basis of $V_k$ for every $k$ (such a $b$ is called a **family of bases** of $V_1, \dots, V_p$). Then the concatenation $c$ of $\mathcal{B}_1, \dots, \mathcal{B}_p$ in order is a basis of $V_1 + \cdots + V_p$. Hence every $V_k$ is finite-dimensional with $\dim V_k = d_k$, and $V_1 + \cdots + V_p$ is finite-dimensional with $\dim(V_1 + \cdots + V_p) = s_p = d_1 + \cdots + d_p$.
4. (Sum of dimensions) Let $V_1, \dots, V_p$ be a linearly independent sequence of subspaces of length $p$, all finite-dimensional. If $d$ is the sequence of real numbers whose $k$th term is $\dim V_k$, then there is a family of bases $b : \Lambda \to V$ of $V_1, \dots, V_p$. Hence, by (3), $V_1 + \cdots + V_p$ is finite-dimensional,
   $$\dim(V_1 + \cdots + V_p) = \dim V_1 + \cdots + \dim V_p,$$
   and there is a basis $c$ of $V_1 + \cdots + V_p$ such that $c_{s_{k-1}+j} \in V_k$ for all $(k, j) \in \Lambda$ and, for each $k$, the sequence of length $d_k$ sending $j$ to $c_{s_{k-1}+j}$ is a basis of $V_k$.
:::

## 직관

서랍이 여러 개 달린 장을 떠올려 봅시다. 서랍마다 그 안의 물건을 빠짐없이, 겹치지 않게 적은 목록이 있고, 서랍끼리 물건을 나눠 갖지 않는다면, 목록들을 첫째 서랍부터 차례로 이어 적은 것이 장 전체의 목록이 됩니다. 서랍의 목록이 각 부분공간 $V_k$의 기저이고, "서랍끼리 나눠 갖지 않는다"가 부분공간들이 일차독립이라는 가정입니다. 비유가 맞지 않는 곳은 물건은 한 서랍에만 들지만 벡터공간에서는 여러 서랍의 벡터를 더한 새 벡터가 생긴다는 점이고, 그래서 가정은 교집합이 아니라 "합이 $0_V$이면 모두 $0_V$"라는 꼴입니다.

증명은 두 부분공간의 경우 (1)이 전부이고, 나머지는 하나씩 늘려 가는 귀납입니다. 처음 $p - 1$개를 이어 붙인 열은 그 합의 기저이고, [[independent-subspaces|일차독립인 부분공간들]]의 (5)에 의해 그 합과 $V_p$의 교집합이 $\{0_V\}$이므로 (1)을 다시 씁니다. 부분공간들이 일차독립이라는 가정은 [[independent-subspaces|일차독립인 부분공간들]]의 (5)를 거쳐 "교집합이 $\{0_V\}$"라는 꼴로 (1)의 (ii)에 들어가고, 거기서 $u$들의 일차결합이 $w$들의 일차결합의 $-1$배와 같을 때 둘 다 $0_V$라고 결론짓는 데 쓰입니다. (2)는 수학의 문제라기보다 "어느 자리에 무엇이 오는가"를 정확히 적는 일이고, 출처도 증명의 어려움은 기호를 고르는 데 있다고 적습니다. 어떤 $V_k$가 $\{0_V\}$이면 그 기저는 빈 열이고 $d_k = 0$이어서 그 자리에는 아무것도 이어 붙지 않습니다.

## 증명

:::idea
두 부분공간에서는 이어 붙인 열의 일차결합이 "$U$의 원소 + $W$의 원소"로 나뉜다([[extension-to-a-basis|기저로 늘리기]]의 (1)). 교집합이 $\{0_V\}$이면 이 두 원소가 각각 $0_V$가 되어 일차독립이 나온다. $p$개는 처음 $p - 1$개를 이어 붙인 열과 $V_p$의 기저를 다시 두 부분공간으로 다룬다.
:::

:::hint
(1)의 (ii)에서 이어 붙인 열의 계수 $\gamma$를 앞의 $r$개 $\alpha$와 뒤의 $s$개 $\beta$로 나누면, $\alpha$로 만든 일차결합은 $U$에, $\beta$로 만든 일차결합은 $W$에 듭니다. 하나가 다른 하나의 $-1$배라는 것에서 무엇을 얻습니까?
:::

:::hint
(3)은 $p$에 대한 귀납입니다. 처음 $p - 1$개의 부분공간도 일차독립이고, $b$를 $k \le p - 1$인 자리로 제한하면 그것들의 기저의 모임입니다. (4)의 기저의 모임도 같은 귀납으로, 단계마다 기저 하나가 있다는 것만 써서 만듭니다.
:::

:::proof
정수의 순서에 관하여 [[prime-number|(Z1)]], [[well-ordering-principle|(Z5), (Z6), (Z7), (L1)–(L3)]]을 쓰고, 정수끼리 더하거나 뺀 결과가 정수라는 것은 [[even-and-odd]]에서 받아들인 사실, 정수의 합이 정수로서 계산하든 실수로서 계산하든 같다는 것은 [[real-number-arithmetic|(K7)]]을 쓴다. $q \ge 1$이고 $k \in \{1, \dots, q + 1\}$이면 (Z5)와 (Z1)에 의해 $k \le q$이거나 $k \ge q + 1$이고, 뒤의 경우 (L2)에 의해 $k = q + 1$이다. $k \le q$이면 (L3)와 (Z6)에 의해 $k < q + 1$이고 (Z5)에 의해 $k \ne q + 1$이다. (†)

**(1)의 증명.** $\gamma$가 길이 $r + s$인 실수의 열이면, 기저로 늘리기의 (1)의 거꾸로에 의해 $\alpha_i = \gamma_i$ ($1 \le i \le r$), $\beta_j = \gamma_{r+j}$ ($1 \le j \le s$)로 둔 두 열로
$$\gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s} = (\alpha_1 u_1 + \cdots + \alpha_r u_r) + (\beta_1 w_1 + \cdots + \beta_s w_s)$$
이다. 이 등식을 ($\ast$)라 하자. (i): 왼쪽은 $\operatorname{span}(c)$의 원소이고 오른쪽은 $\operatorname{span}(u) + \operatorname{span}(w)$의 원소이다. 거꾸로 $\operatorname{span}(u) + \operatorname{span}(w)$의 원소는 $y + z$, $y = \alpha_1 u_1 + \cdots + \alpha_r u_r$, $z = \beta_1 w_1 + \cdots + \beta_s w_s$ 꼴이고, $\alpha$와 $\beta$를 이어 붙인 열 $\gamma$에 기저로 늘리기의 (1)을 쓰면 $y + z = \gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s} \in \operatorname{span}(c)$이다.

(ii): $\gamma_1 c_1 + \cdots + \gamma_{r+s} c_{r+s} = 0_V$라 하고 $(\ast)$의 오른쪽의 두 괄호를 $y$, $z$라 하자. $u$의 모든 항이 $U$에 속하므로 [[linear-combination-and-span|일차결합과 생성]]의 (N3)에 의해 $y \in U$이고, 같은 이유로 $z \in W$이다. $y + z = 0_V$이므로 [[vector-space-basic-properties|(B2)]]의 유일성에 의해 $y = -z$이고, (B5)와 부분공간의 (S3)에 의해 $-z = (-1)z \in W$이다. 따라서 $y \in U \cap W = \{0_V\}$이고 $y = 0_V$이며, [[finite-sum-of-vectors|벡터의 유한 합]]의 (H0)에 의해 $z = 0_V + z = y + z = 0_V$이다. $u$와 $w$가 일차독립이므로 모든 $\alpha_i = 0$이고 모든 $\beta_j = 0$이다. $\{1, \dots, r + s\}$의 모든 $i$는 (Z5)와 (Z1)에 의해 $i \le r$이거나 $i = r + j$ ($1 \le j \le s$)이므로 모든 $\gamma_i = 0$이다. 곧 $c$는 일차독립이다.

(iii): (J4)에 의해 $\operatorname{span}(u) = U$, $\operatorname{span}(w) = W$이고 두 열은 일차독립이다. (i)에 의해 $\operatorname{span}(c) = U + W$이고 (ii)에 의해 $c$는 일차독립이다. [[subspace-intersection-and-sum|부분공간의 교집합과 합]]의 (2)에 의해 $U + W$는 $U$와 $W$를 포함하는 부분공간이므로 $c$의 모든 항은 $U + W$에 속하고, (J4)에 의해 $c$는 $U + W$의 기저이다.

(iv): [[dimension|유한차원과 차원]]의 (1), (2)에 의해 $U$에는 길이 $\dim U$인 기저가, $W$에는 길이 $\dim W$인 기저가 있다. (iii)에 의해 두 기저를 이어 붙인 길이 $\dim U + \dim W$인 열이 $U + W$의 기저이므로, 차원의 (1), (2)에 의해 $U + W$는 유한차원이고 $\dim(U + W) = \dim U + \dim W$이다.

**(2)의 증명.** (i): 처음 $k$개의 처음 $k - 1$개는 처음 $k - 1$개이므로, 합의 재귀 정의에 의해 $1 \le k \le p$에서 $s_k = s_{k-1} + d_k$이다($k = 1$이면 빈 열의 합이 $0 = s_0$이다). $s_0 = 0$은 $0$ 이상의 정수이고, $s_{k-1}$이 $0$ 이상의 정수이면 $s_k = s_{k-1} + d_k$는 정수이며 (Z7)에 의해 $s_{k-1} = s_{k-1} + 0 \le s_{k-1} + d_k = s_k$이므로 (Z6)에 의해 $0 \le s_k$이다. [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 모든 $s_k$가 $0$ 이상의 정수이고 $s_{k-1} \le s_k$이다. $a \le b$에 대하여 $s_a \le s_b$는 $b$에 대한 귀납(시작점 $a$)으로 나온다. $b = a$이면 같고, $s_a \le s_b$이고 $b + 1 \le p$이면 (Z6)에 의해 $s_a \le s_b \le s_{b+1}$이다.

(ii): $(k, j) \in \Lambda$이면 $s_{k-1} \ge 0$, $j \ge 1$이므로 (Z7)에 의해 $s_{k-1} + j \ge 1$이고, $j \le d_k$이므로 $s_{k-1} + j \le s_{k-1} + d_k = s_k$이다. (ii)의 첫 문장은 "모든 항이 $0$ 이상의 정수인 길이 $p$인 모든 실수의 열 $d$에 대하여 성립한다"를 $p$에 대한 귀납으로 보인다. $d$의 처음 $p - 1$개 $d_1, \dots, d_{p-1}$에 대한 $s_k$ ($k \le p - 1$)는 $d$에 대한 것과 같고(처음 $k$개가 같다), 그 $\Lambda$는 $\Lambda$의 $k \le p - 1$인 원소 전체이다. $p = 1$이면 $i \in \{1, \dots, d_1\}$은 $(1, i) \in \Lambda$로 $i = s_0 + i$이다. $p \ge 2$이고 길이 $p - 1$인 모든 그런 열에 대해 성립한다고 하고 $i \in \{1, \dots, s_p\}$라 하자. (Z5)와 (Z1)에 의해 $i \le s_{p-1}$이거나 $i \ge s_{p-1} + 1$이다. 앞의 경우는 처음 $p - 1$개에 대한 귀납 가정에 의해 $i = s_{k-1} + j$인 $(k, j) \in \Lambda$ ($k \le p - 1$)가 있다. 뒤의 경우 $j = i - s_{p-1}$로 두면 $j$는 정수이고 (Z7)에 의해 $1 \le j \le s_p - s_{p-1} = d_p$이므로 $(p, j) \in \Lambda$이고 $i = s_{p-1} + j$이다.

(iii): 유일성: $c$, $c'$이 조건을 만족하면, (ii)에 의해 $\{1, \dots, s_p\}$의 모든 $i$는 어떤 $(k, j) \in \Lambda$로 $s_{k-1} + j$이므로 $c_i = b_{k,j} = c'_i$이고, 두 열은 같다. 존재를 "길이 $p$인 모든 그런 $d$와 모든 $b$에 대하여"의 꼴로 $p$에 대한 귀납으로 보인다. $p = 1$이면 $s_0 = 0$, $s_1 = d_1$((H0))이고 $\mathcal{B}_1$이 조건을 만족한다. $p \ge 2$라 하자. 귀납 가정을 $d$의 처음 $p - 1$개와 $b$를 $k \le p - 1$인 $(k, j)$로 제한한 함수에 쓰면, 그것에 대한 조건을 만족하는 길이 $s_{p-1}$인 열 $c'$이 있다. $c'$과 $\mathcal{B}_p$를 이어 붙인 길이 $s_{p-1} + d_p = s_p$인 열을 $e$라 하자. $(k, j) \in \Lambda$이고 $k \le p - 1$이면 (ii)와 (i)에 의해 $1 \le s_{k-1} + j \le s_k \le s_{p-1}$이므로 $e_{s_{k-1}+j} = c'_{s_{k-1}+j} = b_{k,j}$이다. $k = p$이면 이어 붙인 열의 정의에 의해 $e_{s_{p-1}+j} = b_{p,j}$이다. (†)에 의해 이것이 $\Lambda$의 모든 원소이므로 $e$가 조건을 만족한다. 유일성에 의해 $c = e$이고, 이것이 (iii)의 마지막 문장이다.

**(3)의 증명.** $p$에 대한 귀납으로 "길이 $p$인 일차독립인 모든 부분공간의 열과 그 모든 기저의 모임에 대하여 $c$는 $V_1 + \cdots + V_p$의 기저이다"를 보인다. $p = 1$이면 $c = \mathcal{B}_1$은 $V_1$의 기저이고, 일차독립인 부분공간들의 (1)에 의해 $V_1 + \cdots + V_p = V_1$이다. $p \ge 2$라 하자. 일차독립인 부분공간들의 (5)에 의해 처음 $p - 1$개 $V_1, \dots, V_{p-1}$은 일차독립이고, 그 합을 $W'$이라 하면 $W' \cap V_p = \{0_V\}$이다. $b$를 $k \le p - 1$인 $(k, j)$로 제한한 함수는 처음 $p - 1$개의 기저의 모임이므로, 귀납 가정에 의해 그것을 차례로 이어 붙인 열 $c'$은 $W'$의 기저이다. $W'$과 $V_p$는 부분공간이고(일차독립인 부분공간들의 (1)), (1)의 (iii)에 의해 $c'$과 $\mathcal{B}_p$를 이어 붙인 열은 $W' + V_p$의 기저이다. (2)의 (iii)에 의해 이 열은 $c$이고, 일차독립인 부분공간들의 (1)에 의해 $W' + V_p = V_1 + \cdots + V_p$이다.

$\mathcal{B}_k$는 길이 $d_k$인 $V_k$의 기저이므로 차원의 (1), (2)에 의해 $V_k$는 유한차원이고 $\dim V_k = d_k$이다. $c$는 길이 $s_p$인 $V_1 + \cdots + V_p$의 기저이므로 같은 이유로 $\dim(V_1 + \cdots + V_p) = s_p$이다.

**(4)의 증명.** 각 $\dim V_k$는 $0$ 이상의 정수이므로 (G)에 의해 $d$가 있고 (2)를 쓸 수 있다. $p$에 대한 귀납으로 "길이 $p$인, 모든 항이 유한차원인 모든 부분공간의 열에 기저의 모임이 있다"를 보인다(일차독립은 이 단계에 필요 없다). $p = 1$이면 차원의 (1), (2)에 의해 길이 $d_1$인 $V_1$의 기저 $x_1, \dots, x_{d_1}$이 있고, $b_{1,j} = x_j$로 정한 $b$가 기저의 모임이다((G)). 처음 $p - 1$개에 기저의 모임 $b'$이 있다고 하고, 길이 $d_p$인 $V_p$의 기저 $x_1, \dots, x_{d_p}$를 하나 잡는다(차원의 (1), (2)). $(k, j) \in \Lambda$에서 $k \le p - 1$이면 $b_{k,j} = b'_{k,j}$, $k = p$이면 $b_{p,j} = x_j$로 정한다. (†)에 의해 $\Lambda$의 모든 원소에 값이 하나씩 정해지므로 (G)에 의해 함수 $b : \Lambda \to V$가 있고, 각 $\mathcal{B}_k$는 $k \le p - 1$이면 $b'$의 것, $k = p$이면 $x$이므로 $V_k$의 기저이다. 귀납 안에서 기저를 하나씩 잡을 뿐이므로 고르는 원리는 쓰지 않는다.

$V_1, \dots, V_p$가 일차독립이면 (3)에 의해 이 $b$를 차례로 이어 붙인 열 $c$는 $V_1 + \cdots + V_p$의 기저이고 $\dim(V_1 + \cdots + V_p) = d_1 + \cdots + d_p = \dim V_1 + \cdots + \dim V_p$이다. $c_{s_{k-1}+j} = b_{k,j}$이므로 $c_{s_{k-1}+j} \in V_k$이고, $j$를 $c_{s_{k-1}+j}$로 보내는 열은 $\mathcal{B}_k$이므로 $V_k$의 기저이다. $\blacksquare$
:::

## 예시와 반례

:::example[평면과 직선의 기저를 이어 붙인 예]
$\mathbb{R}^3$에서 $V_1 = \operatorname{span}(e_1, e_2)$, $V_2 = \operatorname{span}(w)$, $w = (1, 1, 1)$이라 합시다. $x \in V_1 \cap V_2$이면 $x = \alpha e_1 + \beta e_2 = (\alpha, \beta, 0)$이고 [[linear-combination-and-span|일차결합과 생성]]의 (N4)에 의해 $x = \gamma w = (\gamma, \gamma, \gamma)$이므로, 셋째 값에서 $\gamma = 0$이고 $x = 0$입니다. 따라서 $V_1 \cap V_2 = \{0\}$이고 [[independent-subspaces|일차독립인 부분공간들]]의 (4)에 의해 두 부분공간은 일차독립입니다. [[standard-basis|표준기저]]의 (2)와 [[basis-iff-independent-and-spanning|기저와 일차독립·생성]]에 의해 $e_1, e_2, e_3$은 일차독립이고, [[linear-independence|일차독립]]의 (I3)에 의해 셋째 항을 지운 $e_1, e_2$도 일차독립이므로 (J4)에 의해 $V_1$의 기저이고, $w \ne 0$이므로 일차독립의 (I4)에 의해 $w$ 하나는 $V_2$의 기저입니다. (1)의 (iii)에 의해 $e_1, e_2, w$는 $V_1 + V_2$의 기저이고 $\dim(V_1 + V_2) = 2 + 1 = 3$입니다. [[dimension-of-subspace|부분공간의 차원]]의 (3)에 의해 $V_1 + V_2 = \mathbb{R}^3$입니다. 여기서 $d = 2, 1$이고 $s_0 = 0$, $s_1 = 2$, $s_2 = 3$이며, $c_{s_0 + 1} = e_1$, $c_{s_0 + 2} = e_2$, $c_{s_1 + 1} = w$입니다.
:::

:::counterexample[ℝ² 의 세 직선의 기저를 이어 붙인 예]
$\mathbb{R}^2$에서 $V_1 = \operatorname{span}(e_1)$, $V_2 = \operatorname{span}(e_2)$, $V_3 = \operatorname{span}(u)$, $u = (1, 1)$이라 합시다. 각각 $e_1$, $e_2$, $u$ 하나가 기저이고 차원은 모두 $1$입니다. 이어 붙인 열 $e_1, e_2, u$는 $1e_1 + 1e_2 + (-1)u = (0, 0)$이므로 일차종속이고, $d_1 + d_2 + d_3 = 3$은 $V_1 + V_2 + V_3 = \mathbb{R}^2$의 차원 $2$와 다릅니다. 앞의 등식의 세 항 $e_1$, $e_2$, $(-1)u$는 각각 $V_1$, $V_2$, $V_3$에 들고 영벡터가 아니므로 이 세 부분공간은 일차독립이 아니고, (3)의 가정이 성립하지 않습니다. 두 개씩의 교집합은 모두 $\{0\}$인데도 그렇습니다.
:::

## 확인 질문

:::check[$\mathbb{R}^2$에서 $V_1 = \operatorname{span}(e_1)$, $V_2 = \{0\}$, $V_3 = \operatorname{span}(e_2)$일 때 $s_0, \dots, s_3$과 이어 붙인 열은 무엇인가?]
$V_2 = \{0\}$의 기저는 빈 열이므로([[basis|기저]]의 (Q1)) $d = 1, 0, 1$이고 $s_0 = 0$, $s_1 = 1$, $s_2 = 1$, $s_3 = 2$입니다. 세 부분공간은 일차독립입니다. $v_1 = \alpha e_1$, $v_2 = 0$, $v_3 = \beta e_2$이고 합이 $0$이면 $(\alpha, \beta) = (0, 0)$이므로 $\alpha = \beta = 0$이기 때문입니다. $\Lambda = \{(1, 1), (3, 1)\}$이고 $c_{s_0 + 1} = c_1 = e_1$, $c_{s_2 + 1} = c_2 = e_2$이므로 이어 붙인 열은 $e_1, e_2$입니다. 세 부분공간은 일차독립이므로 (3)에 의해 이것은 $V_1 + V_2 + V_3$의 기저이고, 그 차원이 $2 = \dim \mathbb{R}^2$이므로 [[dimension-of-subspace|부분공간의 차원]]의 (3)에 의해 합은 $\mathbb{R}^2$입니다.
:::

:::check[$U$, $W$가 $\mathbb{R}^5$의 부분공간이고 $\dim U = 3$, $\dim W = 3$이면 $U \cap W = \{0\}$일 수 있는가?]
없습니다. $U \cap W = \{0\}$이라면 (1)의 (iv)에 의해 $\dim(U + W) = 6$인데, $U + W$는 $\mathbb{R}^5$의 부분공간이므로 [[dimension-of-subspace|부분공간의 차원]]의 (2)에 의해 그 차원은 $5$ 이하입니다. $6 \le 5$는 거짓입니다.
:::
