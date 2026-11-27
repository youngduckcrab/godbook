---
title: 대칭군은 가해군이 아니다
title_en: The Symmetric Group Is Not Solvable
aliases: [S5는 가해군이 아니다, Sn은 가해군이 아니다, 3-순환치환의 교환자 논법, Sn is not solvable, S5 is not solvable, 3-cycles as commutators]
kind: theorem
field: group-theory
msc: ["20F16", "20B30"]
level: undergrad
summary: "원소가 5개 이상인 유한집합 X에서 길이 3인 순환치환은 길이 3인 두 순환치환의 교환자이다. 그래서 길이 3인 순환치환을 모두 포함하는 S_X의 부분군, 특히 S_X와 A_X는 가해군이 아니고, n ≥ 5이면 Sₙ은 가해군이 아니다."
requires: [set, set-operations, subset, function, finite-set, number-of-elements-is-unique, disjoint-union-count, prime-number, well-ordering-principle, mathematical-induction, group, subgroup, group-homomorphism, homomorphism-kernel-and-image, normal-subgroup, quotient-group, finite-product-in-a-group, symmetric-group, cycle-permutation, parity-of-a-permutation, alternating-group, commutator, solvable-group, solvable-subgroups-and-images, solvable-group-examples]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "13.2절 Solvable Groups, Example 13.19 (p.165); 23.3절 Solvability by Radicals, S₅ 에 관한 문장(번호 없음, p.304); 10.2절 The Simplicity of the Alternating Group, Lemma 10.8–10.9 (p.127–128)와 Theorem 10.11 (p.129)"
    checked: original
    note: "출처 Example 13.19(p.165)는 'n ≥ 5 이면 Sₙ ⊃ Aₙ ⊃ {(1)} 이 몫군이 아벨군이 아닌 조성열이므로 Sₙ 은 가해군이 아니다'라고 하고, 23.3절(p.304)은 'S₅ 는 Theorem 10.11 에 의해 가해군이 아니다'라고 한다. 둘 다 Aₙ 의 단순성(Theorem 10.11, p.129)과 조성열에 기대고, 조성열에서 가해군이 아님을 끌어내는 단계(조르당–횔더 정리, Theorem 13.18)는 출처의 그 두 곳에 적혀 있지 않다. 이 항목은 단순성·조성열·생성한 부분군을 쓰지 않고, (1)의 등식으로 '몫이 아벨군인 정규부분군은 길이 3 인 순환치환을 모두 물려받는다'((2))를 보여 열을 위에서 아래로 내려간다. 출처 Lemma 10.8(p.127)의 증명은 호환 둘의 곱을 3-순환치환으로 쓰고((a, b)(c, d) = (a, c, b)(a, c, d)), Lemma 10.9(p.128)의 증명은 3-순환치환을 (i, j, k) 꼴의 곱으로 쓰며 켤레 [(i, j)(a, k)](i, j, a)²[(i, j)(a, k)]⁻¹ = (i, j, k) 를 계산한다. 그 줄들에 (1)의 교환자 등식은 없다. 출처 연습문제 5.4.24(p.72)는 '3-순환치환은 짝치환이다'를 묻고, 이 항목은 그것을 parity-of-a-permutation (3)으로 쓴다. 예시 '$(2\\ 4\\ 1)$을 교환자로 쓰기'는 출처 10.2절의 3-순환치환 계산과 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(교환자·S₄ 예의 계산 대입, 출처 13.4절 연습문제 대조). 독립 검토 없음."
added: 2026-11-27
---

:::statement
$X$가 [[set|집합]]이고 $S_X$가 [[symmetric-group|대칭군]]이며 $i_X$가 그 항등치환이라 하자. 순환치환과 그 표기 $(a_1\ a_2\ a_3)$은 [[cycle-permutation|순환치환]], 교환자는 [[commutator|교환자]], 가해군은 [[solvable-group|가해군]]의 것이다. 유한집합과 원소의 개수 $|X|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

1. (교환자로 쓰기) $a_1, a_2, a_3, a_4, a_5$가 $X$의 서로 다른 원소이면
   $$
   \begin{aligned}
   &(a_1\ a_2\ a_3) \\
   &\quad = (a_1\ a_2\ a_4)(a_1\ a_3\ a_5) \\
   &\qquad (a_1\ a_2\ a_4)^{-1}(a_1\ a_3\ a_5)^{-1}
   \end{aligned}
   $$
   이다. 곧 $(a_1\ a_2\ a_3)$은 길이 $3$인 두 순환치환 $(a_1\ a_2\ a_4)$와 $(a_1\ a_3\ a_5)$의 교환자이다.
2. (몫이 아벨군인 정규부분군) $X$가 유한집합이고 $|X| \ge 5$라 하자. $K$가 $S_X$의 부분군이고 $S_X$의 길이 $3$인 순환치환을 모두 포함하며, $H$가 군 $K$의 [[normal-subgroup|정규부분군]]이고 몫군 $K/H$가 아벨군이면, $H$도 $S_X$의 길이 $3$인 순환치환을 모두 포함한다.
3. (가해군이 아니다) $X$가 유한집합이고 $|X| \ge 5$이면, $S_X$의 길이 $3$인 순환치환을 모두 포함하는 $S_X$의 부분군은 가해군이 아니다. 특히 $S_X$와 [[alternating-group|교대군]] $A_X$는 가해군이 아니고, $n \ge 5$인 정수 $n$에 대하여 $S_n$과 $A_n$은 가해군이 아니다.
4. (준동형으로 옮기기) $X$가 유한집합이고 $|X| \ge 5$라 하자. $G$가 [[group|군]]이고 $\varphi : G \to S_X$가 [[group-homomorphism|준동형]]이며 상 $\varphi(G)$가 $S_X$의 길이 $3$인 순환치환을 모두 포함하면 $G$는 가해군이 아니다. 특히 $\varphi : G \to S_X$가 전사이면 $G$는 가해군이 아니다.
:::

:::english
Let $X$ be a set, $S_X$ the symmetric group, and $i_X$ its identity permutation. Cycles and the notation $(a_1\ a_2\ a_3)$, commutators, and solvable groups are as in the corresponding entries. Finite sets and the number of elements $|X|$ are as in the entries on finite sets and the number of elements.

1. (Writing as a commutator) If $a_1, a_2, a_3, a_4, a_5$ are distinct elements of $X$, then
   $$
   \begin{aligned}
   &(a_1\ a_2\ a_3) \\
   &\quad = (a_1\ a_2\ a_4)(a_1\ a_3\ a_5) \\
   &\qquad (a_1\ a_2\ a_4)^{-1}(a_1\ a_3\ a_5)^{-1}.
   \end{aligned}
   $$
   That is, $(a_1\ a_2\ a_3)$ is the commutator of the two cycles $(a_1\ a_2\ a_4)$ and $(a_1\ a_3\ a_5)$ of length $3$.
2. (Normal subgroups with abelian quotient) Let $X$ be finite with $|X| \ge 5$. If $K$ is a subgroup of $S_X$ containing every cycle of length $3$ in $S_X$, $H$ is a normal subgroup of the group $K$, and the quotient group $K/H$ is abelian, then $H$ also contains every cycle of length $3$ in $S_X$.
3. (Not solvable) If $X$ is finite with $|X| \ge 5$, then no subgroup of $S_X$ containing every cycle of length $3$ in $S_X$ is solvable. In particular $S_X$ and the alternating group $A_X$ are not solvable, and for every integer $n \ge 5$, $S_n$ and $A_n$ are not solvable.
4. (Transfer by homomorphisms) Let $X$ be finite with $|X| \ge 5$. If $G$ is a group, $\varphi : G \to S_X$ is a homomorphism, and the image $\varphi(G)$ contains every cycle of length $3$ in $S_X$, then $G$ is not solvable. In particular, if $\varphi : G \to S_X$ is surjective, then $G$ is not solvable.
:::

## 직관

가해열은 위층의 교환자를 아래층으로 떨어뜨리며 내려가 맨 아래 $\{e\}$에 닿는 열입니다([[solvable-group|가해군]]의 (1)). (1)은 길이 $3$인 순환치환이 모두 길이 $3$인 순환치환의 교환자라고 말합니다. 그래서 어느 층이 길이 $3$인 순환치환을 모두 가지면 그 바로 아래층도 모두 가집니다((2)). 맨 위층에서 시작해 한 층씩 내려가면 맨 아래 $\{i_X\}$까지 길이 $3$인 순환치환을 가져야 하는데, 길이 $3$인 순환치환은 항등치환이 아니므로 어긋납니다((3)).

옷에 묻은 얼룩에 비유할 수 있습니다. 빨 때마다 얼룩의 일부가 남는 정도가 아니라 같은 얼룩이 그대로 남는다면, 몇 번을 빨아도 깨끗해지지 않습니다. 몫이 아벨군인 정규부분군으로 내려가는 것이 한 번 빠는 것이고, 길이 $3$인 순환치환 전체가 남는 얼룩입니다.

$|X| \ge 5$는 (2)에서 $a_1, a_2, a_3$ 말고 서로 다른 원소 $a_4$, $a_5$를 더 찾는 데 쓰입니다. (3)에서 길이 $3$인 순환치환이 하나라도 있다는 데는 원소가 셋이면 됩니다. 원소가 $4$개이면 이것이 안 되고, 실제로 [[solvable-group-examples|가해군의 예]]의 (3)에 의해 $S_4$는 가해군입니다(아래 반례 '원소가 $4$개인 집합').

## 증명

:::idea
(1)은 $X$의 원소마다 네 치환을 오른쪽부터 차례로 적용해 확인한다. (2)는 (1)과 [[commutator|교환자]]의 (5)이다. (3)은 가해열을 맨 위에서부터 귀납으로 내려가며 (2)를 쓰고, 맨 아래 $\{i_X\}$에서 어긋남을 얻는다.
:::

:::hint
(1)에서 $(a_1\ a_2\ a_4)^{-1} = (a_4\ a_2\ a_1)$이고 $(a_1\ a_3\ a_5)^{-1} = (a_5\ a_3\ a_1)$입니다. $a_1$을 넣으면 $a_5$, $a_5$, $a_1$, $a_2$의 순으로 갑니다.
:::

:::hint
(3)에서 가해열 $H_0, \dots, H_m$에 대해 "$H_{m-j}$는 길이 $3$인 순환치환을 모두 포함한다"를 $j$에 대한 귀납으로 보이십시오.
:::

:::proof
**(1)** $u = (a_1\ a_2\ a_4)$, $v = (a_1\ a_3\ a_5)$로 두자. [[cycle-permutation|순환치환]]의 (1)에 의해 $u, v \in S_X$이고 $u^{-1} = (a_4\ a_2\ a_1)$, $v^{-1} = (a_5\ a_3\ a_1)$이다. 순환치환의 표기에 의해 이 네 치환은 다음과 같이 움직이고, 적힌 원소가 아닌 원소는 고정한다.

- $v^{-1}$: $a_5 \to a_3$, $a_3 \to a_1$, $a_1 \to a_5$.
- $u^{-1}$: $a_4 \to a_2$, $a_2 \to a_1$, $a_1 \to a_4$.
- $v$: $a_1 \to a_3$, $a_3 \to a_5$, $a_5 \to a_1$.
- $u$: $a_1 \to a_2$, $a_2 \to a_4$, $a_4 \to a_1$.

[[finite-product-in-a-group|군의 유한 곱]]의 (10)에 의해 모든 $x \in X$에서 $(uvu^{-1}v^{-1})(x) = u(v(u^{-1}(v^{-1}(x))))$이다. $v^{-1}$, $u^{-1}$, $v$, $u$를 차례로 적용하면

- $x = a_1$: $a_1 \to a_5 \to a_5 \to a_1 \to a_2$,
- $x = a_2$: $a_2 \to a_2 \to a_1 \to a_3 \to a_3$,
- $x = a_3$: $a_3 \to a_1 \to a_4 \to a_4 \to a_1$,
- $x = a_4$: $a_4 \to a_4 \to a_2 \to a_2 \to a_4$,
- $x = a_5$: $a_5 \to a_3 \to a_3 \to a_5 \to a_5$,
- $x \notin \{a_1, \dots, a_5\}$: 네 치환이 모두 $x$를 고정하므로 값은 $x$

이다. 다섯 원소가 서로 다르므로 각 줄에서 원소가 어느 경우에 해당하는지가 하나로 정해진다. 순환치환의 표기에 의해 $(a_1\ a_2\ a_3)$은 $a_1$을 $a_2$로, $a_2$를 $a_3$으로, $a_3$을 $a_1$로 보내고 나머지 원소를 고정하므로, 두 함수는 $X$의 모든 원소에서 값이 같다. 따라서 $(a_1\ a_2\ a_3) = uvu^{-1}v^{-1}$이다.

**(2)** $\gamma$가 $S_X$의 길이 $3$인 순환치환이라 하자. 순환치환의 정의에 의해 $\gamma = (a_1\ a_2\ a_3)$인 서로 다른 $a_1, a_2, a_3 \in X$가 있다. $A = \{a_1, a_2, a_3\}$으로 두면 순환치환의 (2)에 의해 $|A| = 3$이다. $A \subseteq X$이므로 [[disjoint-union-count|서로소인 합집합의 원소의 개수]]의 (2)에 의해 $Y = X - A$는 유한집합이고 $|Y| = |X| - 3 \ge 2$이다. $|Y| \ge 1$이므로 [[finite-set|유한집합]]의 (F2)에 의해 $Y \ne \emptyset$이고, $a_4 \in Y$가 있다. 다시 서로소인 합집합의 원소의 개수의 (2)에 의해 $|Y - \{a_4\}| = |Y| - 1 \ge 1$이므로 $a_5 \in Y - \{a_4\}$가 있다. 그러면 $a_4, a_5 \notin A$이고 $a_4 \ne a_5$이므로 $a_1, \dots, a_5$는 서로 다르다. 부등식은 [[well-ordering-principle|정렬 원리]]의 진술의 (Z7)로 계산한다.

$u = (a_1\ a_2\ a_4)$와 $v = (a_1\ a_3\ a_5)$는 길이 $3$인 순환치환이므로 가정에 의해 $u, v \in K$이다. $K/H$가 아벨군이므로 교환자의 (5)를 군 $K$와 그 정규부분군 $H$에 쓰면 군 $K$의 교환자는 모두 $H$에 속하고, 교환자의 (3)에 의해 군 $K$에서 만든 $u$와 $v$의 교환자는 $uvu^{-1}v^{-1}$이다. (1)에 의해 $\gamma = uvu^{-1}v^{-1} \in H$이다.

**(3)** $X$에는 서로 다른 세 원소가 있다. [[finite-set|유한집합]]의 정의에 의해 $n = |X| \ge 5$이고 전단사 $h : \{1, \dots, n\} \to X$가 있으므로, $h(1)$, $h(2)$, $h(3)$은 $h$가 단사여서 서로 다르다. 따라서 $\gamma_0 = (h(1)\ h(2)\ h(3))$은 $S_X$의 길이 $3$인 순환치환이고, 순환치환의 (2)에 의해 $\gamma_0 \ne i_X$이다.

$K$가 $S_X$의 부분군이고 길이 $3$인 순환치환을 모두 포함하며 가해군이라 하자. 가해군의 정의에 의해 $K$의 가해열 $H_0, \dots, H_m$이 있다. $j \ge 0$인 정수 $j$마다 명제 $Q_j$를 "$j \le m$이면 $H_{m-j}$는 $S_X$의 길이 $3$인 순환치환을 모두 포함한다"로 두고 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 보인다.

- $Q_0$: $H_m = K$이므로 참이다.
- $Q_j$에서 $Q_{j+1}$: $j + 1 \le m$이라 하고 $t = m - j - 1$로 두면 $0 \le t \le m - 1$이고 $t + 1 = m - j$이다. $j \le m$이므로 $Q_j$에 의해 $H_{t+1}$은 길이 $3$인 순환치환을 모두 포함한다. $H_{t+1}$은 군 $K$의 부분군이고 $K$는 $S_X$의 부분군이므로 [[subgroup|부분군]]의 (6)에 의해 $S_X$의 부분군이다. 가해열의 조건에 의해 $H_t$는 군 $H_{t+1}$의 정규부분군이고 $H_{t+1}/H_t$는 아벨군이므로, (2)를 $K$ 대신 $H_{t+1}$에, $H$ 대신 $H_t$에 쓰면 $H_t = H_{m-(j+1)}$은 길이 $3$인 순환치환을 모두 포함한다.

$Q_m$에 의해 $H_0 = \{i_X\}$가 $\gamma_0$을 포함한다. 군 $K$의 항등원은 부분군의 (1)에 의해 $i_X$이다. 곧 $\gamma_0 = i_X$인데 이것은 앞의 $\gamma_0 \ne i_X$에 어긋난다. 따라서 $K$는 가해군이 아니다.

$S_X$는 부분군의 (4)에 의해 자기 자신의 부분군이고 길이 $3$인 순환치환을 모두 포함한다. [[parity-of-a-permutation|치환의 홀짝]]의 (3)에 의해 길이 $3$인 순환치환은 짝치환이므로 $A_X$에 속하고, 교대군의 (1)에 의해 $A_X$는 $S_X$의 부분군이다. 따라서 둘 다 가해군이 아니다. $n \ge 5$이면 $\{1, \dots, n\}$은 유한집합의 (F2)에 의해 원소를 $n$개 가지므로, $S_n$과 $A_n$은 $X = \{1, \dots, n\}$인 경우이다.

**(4)** $G$가 가해군이라 하자. [[solvable-subgroups-and-images|가해군의 부분군과 준동형상]]의 (3)에 의해 군 $\varphi(G)$는 가해군이다. [[homomorphism-kernel-and-image|준동형의 핵과 상]]의 (4)에 의해 $\varphi(G)$는 $S_X$의 부분군이고 가정에 의해 길이 $3$인 순환치환을 모두 포함하므로, (3)에 어긋난다. 따라서 $G$는 가해군이 아니다. $\varphi$가 전사이면 준동형의 핵과 상의 (4)에 의해 $\varphi(G) = S_X$이므로 가정이 성립한다. $\blacksquare$
:::

## 예시와 반례

:::example[$(2\ 4\ 1)$을 교환자로 쓰기]
$X = \{1, 2, 3, 4, 5, 6\}$에서 $a_1 = 2$, $a_2 = 4$, $a_3 = 1$, $a_4 = 6$, $a_5 = 3$으로 두면 (1)은
$$
\begin{aligned}
(2\ 4\ 1) &= (2\ 4\ 6)(2\ 1\ 3) \\
&\qquad (2\ 4\ 6)^{-1}(2\ 1\ 3)^{-1}
\end{aligned}
$$
입니다. 직접 확인하면 $(2\ 4\ 6)^{-1} = (6\ 4\ 2)$, $(2\ 1\ 3)^{-1} = (3\ 1\ 2)$이고, $x = 2$에서 오른쪽부터 $2 \to 3 \to 3 \to 2 \to 4$, $x = 4$에서 $4 \to 4 \to 2 \to 1 \to 1$, $x = 1$에서 $1 \to 2 \to 6 \to 6 \to 2$, $x = 6$에서 $6 \to 6 \to 4 \to 4 \to 6$, $x = 3$에서 $3 \to 1 \to 1 \to 3 \to 3$이며 $5$는 네 치환이 모두 고정합니다. 값은 $2 \to 4$, $4 \to 1$, $1 \to 2$이고 나머지는 고정되므로 $(2\ 4\ 1)$과 같습니다. $5$는 쓰이지 않았으므로 $X = \{1, 2, 3, 4, 6\}$이었어도 같은 등식이 성립합니다.
:::

:::counterexample[원소가 $4$개인 집합]
$X = \{1, 2, 3, 4\}$이면 (2)의 결론이 성립하지 않을 수 있습니다. [[alternating-group|교대군]]의 (8)에 의해 $A_4$는 $S_4$의 길이 $3$인 순환치환을 모두 포함하고, [[solvable-group-examples|가해군의 예]]의 (3)의 열 $\{i\}, V, A_4, S_4$는 가해열이므로 $V$는 군 $A_4$의 정규부분군이고 $A_4/V$는 아벨군입니다. 그러나 교대군의 (5), (6)에 의해 $V = \{i\} \cup D$이고, 같은 (5)에 의해 $A_4$의 열두 원소 $i$, $C$의 원소, $D$의 원소는 서로 다르므로 $V$는 길이 $3$인 순환치환 전체의 집합 $C$의 원소를 하나도 포함하지 않습니다. 증명에서 깨지는 곳은 $a_4$, $a_5$를 찾는 단계입니다. $|X - \{a_1, a_2, a_3\}| = 1$이어서 서로 다른 두 원소가 없습니다. 실제로 가해군의 예의 (3)에 의해 $S_4$는 가해군입니다.
:::

## 확인 질문

:::check[$X$가 원소가 $7$개인 집합이고 $K$가 $S_X$의 부분군으로 짝치환 전체 $A_X$를 포함하면 $K$는 가해군인가?]
아닙니다. [[parity-of-a-permutation|치환의 홀짝]]의 (3)에 의해 길이 $3$인 순환치환은 짝치환이므로 $A_X \subseteq K$에 속합니다. $|X| = 7 \ge 5$이므로 (3)에 의해 $K$는 가해군이 아닙니다.
:::

:::check[$G$가 가해군이고 $\varphi : G \to S_5$가 준동형이면 $\varphi(G)$에 대해 무엇을 말할 수 있는가?]
$\varphi(G)$는 길이 $3$인 순환치환을 모두 포함할 수는 없습니다. 모두 포함하면 (4)에 의해 $G$가 가해군이 아니게 되어 가정에 어긋납니다. 특히 $\varphi$는 전사가 아닙니다. 예를 들어 $G$가 아벨군이면 [[solvable-group-examples|가해군의 예]]의 (1)에 의해 가해군이므로, 아벨군에서 $S_5$로 가는 전사인 준동형은 없습니다.
:::
