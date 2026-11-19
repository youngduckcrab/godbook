---
title: 유한 순환군의 부분군
title_en: Subgroups of a Finite Cyclic Group
aliases: [유한 순환군의 부분군과 약수, 약수마다 하나의 부분군, subgroups of a finite cyclic group]
kind: theorem
field: group-theory
msc: ["20A05", "20K99"]
level: undergrad
summary: 원소가 n개인 순환군 G = ⟨a⟩의 부분군은 원소의 개수가 n을 나누고, n의 양의 약수 d마다(n = d·n′) 원소가 d개인 부분군은 ⟨aⁿ′⟩ 하나뿐이다. 두 부분군 사이의 포함은 원소의 개수의 나누어떨어짐과 같고, xᵈ = e인 원소 전체가 그 부분군이며, 부분군 전체의 집합은 n의 양의 약수 전체의 집합과 전단사이다.
requires: [set, subset, power-set, function, injective-surjective-bijective, recursion-theorem, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, division-theorem, divisibility, integer-cancellation, group, subgroup, subgroup-criteria, power-in-a-group, laws-of-exponents, cyclic-subgroup, number-groups, integers-modulo-n, group-of-units-modulo-n, order-of-an-element, order-of-cyclic-subgroup, subgroups-of-cyclic-groups, order-of-a-power]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 출처는 이것을 정리로 진술하지 않는다. 관련된 것은 4장 연습문제 3(c)–(f), 26, 38, 39 (p.55–58)와 부록의 연습문제 4.5.3 의 힌트(p.321)
    checked: original
    note: "출처에는 '원소가 n 개인 순환군은 n 의 약수마다 그 개수의 원소를 갖는 부분군을 정확히 하나 갖는다'는 정리가 없다(검색어 'exactly one subgroup', 'unique subgroup', 'only one subgroup' 6건은 10장·11장 연습문제의 '위수 k 인 부분군이 하나뿐이면 정규'와 15장 실로우 정리의 적용, 'subgroup of order d' 1건은 연습문제 39, 'number of subgroups', 'how many subgroups' 1건은 연습문제 1(e)). (2)의 존재 부분은 출처 4장 연습문제 39(p.58, '위수 m 인 순환군과 d | m 이면 위수 d 인 부분군이 있다')이다. (1)의 '|H| 는 n 을 나눈다'는 출처에서 6장의 라그랑주 정리(Theorem 6.10, p.76)의 특수한 경우이고, 이 항목은 라그랑주 정리를 쓰지 않고 순환군의 부분군 항목과 거듭제곱의 위수 항목으로 증명한다. 출처 4장 연습문제 38(p.58)은 원소의 위수에 대한 같은 종류의 문제이다. 출처 4장 연습문제 26(p.57, '소수 p 이면 ℤ_p 는 자명하지 않은 진부분군이 없다')은 (2)에서 n 이 소수인 경우이다. (3), (4), (5)는 출처에서 찾지 못했다(검색어 'xd = e', 'gd = e' 0건, 'collection of all subgroups' 1건은 15장의 실로우 정리의 증명, 'lattice of subgroups of Z12' 1건은 19장 연습문제(p.249)의 격자 그림 문제이다. 이 연습문제는 (3)이 말하는 포함 관계를 그림으로 그리라는 것과 같은 발상이다). 예시 'ℤ₁₂ 의 부분군'은 출처 4장 연습문제 3(c)(p.55, 'ℤ₁₂ 의 모든 부분군')와 같은 대상, 같은 결론이고, 출처 부록의 힌트(p.321)가 그 답 {0}, {0, 6}, {0, 4, 8}, {0, 3, 6, 9}, {0, 2, 4, 6, 8, 10} 을 적는다. 반례 'U(8) 의 원소 2 개인 부분군 둘'은 출처 Example 9.24(p.120, 'U(8) 은 H = {1, 3} 과 K = {1, 5} 의 내부 직접곱')와 같은 두 부분군이다(검색어 'U \\(8\\)' 11건을 모두 보았다). 출처는 그것을 직접곱의 예로 쓰고, 이 항목은 (2)의 유일성이 순환군이 아니면 깨질 수 있다는 예로 쓴다. 확인 질문 'ℤ₂₀ 의 원소 4 개인 부분군'은 출처 4장 연습문제 9(p.56, 'ℤ₃₂ 의 위수 8 인 부분군의 생성원')와 같은 종류이다(검색어 'Z20' 0건). 확인 질문 '원소 30 개인 순환군에서 x⁶ = e'는 출처에서 찾지 못했다(검색어 'xd = e', 'x6' 의 건 없음)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 문장과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 유한한 [[cyclic-subgroup|순환군]]이고 $a$가 그 생성원이며 $n = |G|$라 하자. 항등원은 $e$이고, 거듭제곱, $\langle a \rangle$, 원소의 위수는 [[power-in-a-group|군의 거듭제곱]], [[cyclic-subgroup|순환 부분군]], [[order-of-an-element|원소의 위수]]의 것이다. 부분군은 [[subgroup|부분군]]의 뜻이고, $|H|$는 [[number-of-elements-is-unique|원소의 개수]]이다. $n$의 양의 약수 전체의 집합을
$$\mathrm{Div}(n) = \{d \in \mathbb{N} : d \mid n\}$$
로 쓴다. $d \in \mathrm{Div}(n)$이면 $n = d \cdot n'$인 정수 $n'$은 [[integer-cancellation|소거 법칙]]에 의해 하나뿐이고 자연수이다. 이때 $H_d = \langle a^{n'} \rangle$로 쓴다.

1. (부분군의 원소의 개수) $G$의 모든 부분군 $H$는 유한군이고, $n = m \cdot |H|$이며 $H = \langle a^m \rangle$인 자연수 $m$이 있다. 특히 $|H| \in \mathrm{Div}(n)$이다.
2. (약수마다 하나) $d \in \mathrm{Div}(n)$이면 $H_d$는 원소가 $d$개인 $G$의 부분군이고, 원소가 $d$개인 $G$의 부분군은 $H_d$뿐이다.
3. (포함과 나누어떨어짐) $H$, $K$가 $G$의 부분군이면, $H \subseteq K$인 것은 정확히 $|H| \mid |K|$일 때이다.
4. (방정식의 해) $d \in \mathrm{Div}(n)$이면 $\{x \in G : x^d = e\} = H_d$이다.
5. (부분군의 개수) $\mathrm{Div}(n)$은 유한집합이다. $G$의 부분군 전체의 집합을 $\mathcal{S}$라 하면, 각 $d \in \mathrm{Div}(n)$에 $H_d$를 대응시키는 함수 $\mathrm{Div}(n) \to \mathcal{S}$는 전단사이다. 따라서 $\mathcal{S}$는 유한집합이고 $|\mathcal{S}| = |\mathrm{Div}(n)|$이다.
:::

:::english
Let $G$ be a finite cyclic group with generator $a$, and let $n = |G|$. The identity is $e$; powers, $\langle a \rangle$ and the order of an element are those of the entries on powers in a group, cyclic subgroups and the order of an element. Subgroups are meant in the sense of the entry on subgroups, and $|H|$ is the number of elements. We write the set of positive divisors of $n$ as
$$\mathrm{Div}(n) = \{d \in \mathbb{N} : d \mid n\}.$$
If $d \in \mathrm{Div}(n)$, then the integer $n'$ with $n = d \cdot n'$ is unique by the cancellation law and is a natural number; we then write $H_d = \langle a^{n'} \rangle$.

1. (Number of elements of a subgroup) Every subgroup $H$ of $G$ is a finite group, and there is a natural number $m$ with $n = m \cdot |H|$ and $H = \langle a^m \rangle$. In particular $|H| \in \mathrm{Div}(n)$.
2. (One for each divisor) If $d \in \mathrm{Div}(n)$, then $H_d$ is a subgroup of $G$ with $d$ elements, and it is the only subgroup of $G$ with $d$ elements.
3. (Inclusion and divisibility) If $H$ and $K$ are subgroups of $G$, then $H \subseteq K$ exactly when $|H| \mid |K|$.
4. (Solutions of an equation) If $d \in \mathrm{Div}(n)$, then $\{x \in G : x^d = e\} = H_d$.
5. (Number of subgroups) $\mathrm{Div}(n)$ is a finite set. If $\mathcal{S}$ is the set of all subgroups of $G$, then the function $\mathrm{Div}(n) \to \mathcal{S}$ assigning $H_d$ to each $d \in \mathrm{Div}(n)$ is a bijection. Hence $\mathcal{S}$ is a finite set and $|\mathcal{S}| = |\mathrm{Div}(n)|$.
:::

## 직관

원소가 $n$개인 순환군은 눈금이 $n$개인 시계와 같습니다. 생성원 $a$가 한 칸이고 $a^m$은 $m$칸입니다. [[subgroups-of-cyclic-groups|순환군의 부분군]]에 의해 부분군은 어떤 $a^m$이 생성하고, 그 $m$은 $n$을 나눕니다. $m$칸씩 뛰면 $n = m \cdot d$일 때 $d$번 만에 돌아오므로 그 부분군의 원소는 $d$개입니다. 거꾸로 원소가 $d$개이려면 뛰는 칸 수가 $n'$($n = d \cdot n'$)이어야 하므로 그런 부분군은 하나뿐입니다. 이것이 (1)과 (2)입니다.

부분군이 약수와 하나씩 짝지어지므로, 부분군 사이의 포함도 약수 사이의 관계로 옮겨집니다. 눈금 $m_1$칸마다 찍은 점들이 $m_2$칸마다 찍은 점들에 모두 들어 있으려면 $m_1$이 $m_2$의 배수여야 하고, 이것은 원소의 개수로 말하면 $|H|$가 $|K|$를 나눈다는 것입니다((3)). 비유가 맞지 않는 곳도 있습니다. 순환군이 아닌 군에서는 원소의 개수가 같은 부분군이 여럿일 수 있습니다(아래 반례).

## 증명

:::idea
(1)은 순환군의 부분군 항목에서 $H = \langle a^m \rangle$이고 $m \mid n$인 것을 얻은 뒤 거듭제곱의 위수 항목으로 $|H|$를 계산한다. (2)의 유일성은 $n = m \cdot d = n' \cdot d$에서 $d$를 소거한다. (3)과 (4)는 (1), (2)를 지수의 나누어떨어짐으로 옮긴다.
:::

:::hint
(1): $m \mid n$이고 $n = m \cdot q$이면 $a^m$의 위수는 $q$이다.
:::

:::hint
(4): $x = a^k$이면 $x^d = e$는 $n \mid kd$와 같다.
:::

:::proof
아래에서 "부분군 항목"은 [[subgroups-of-cyclic-groups|순환군의 부분군]], "크기 항목"은 [[order-of-cyclic-subgroup|순환 부분군의 크기]], "거듭제곱의 위수"는 [[order-of-a-power|거듭제곱의 위수]]이다. (Z2)는 [[prime-number|소수]]의 진술에서, (Z5)는 [[well-ordering-principle|정렬 원리]]의 진술에서 받아들인 것이다.

**준비.** 크기 항목의 (4)에 의해 $a$의 위수는 유한하고 $\operatorname{ord}(a) = n$이며, $G = \langle a \rangle$이다(순환 부분군의 (6)). $d \in \mathrm{Div}(n)$이면 $n = d \cdot n'$인 정수 $n'$이 있고, $d \ne 0$이므로 소거 법칙의 (2)에 의해 하나뿐이다. $n' \le 0$이면 (Z2)에 의해 $n = dn' \le 0$이 되어 $n$이 자연수라는 데 어긋나므로 $n'$은 자연수이다. $n = n' \cdot d$이므로 $n' \in \mathrm{Div}(n)$이다.

**(1)** 부분군 항목의 (1)에 의해, $G$가 유한군이므로 $a^{m} \in H$인 자연수 $m$ 가운데 가장 작은 것 $m$이 있고, $H = \langle a^m \rangle$이며 $m \mid n$이다. $n = m \cdot q$라 하면 위의 준비와 같은 방법으로 $q$는 자연수이고, 거듭제곱의 위수의 (4)에 의해 $\operatorname{ord}(a^m) = q$이다. 크기 항목의 (3)에 의해 $H = \langle a^m \rangle$은 유한집합이고 $|H| = q$이다. 따라서 $H$는 유한군이고 $n = m \cdot |H|$이며, $|H|$는 자연수이고 $|H| \mid n$이다.

**(2)** 준비에 의해 $n'$은 자연수이고 $n' \mid n$이며 $n = n' \cdot d$이다. 거듭제곱의 위수의 (4)에 의해 $\operatorname{ord}(a^{n'}) = d$이고, 크기 항목의 (3)에 의해 $|H_d| = d$이다. 순환 부분군의 (1)에 의해 $H_d$는 $G$의 부분군이다.

$H$가 원소가 $d$개인 $G$의 부분군이라 하자. (1)에 의해 $n = m \cdot d$이고 $H = \langle a^m \rangle$인 자연수 $m$이 있다. $md = n = n'd$이고 $d \ne 0$이므로 소거 법칙의 (2)에 의해 $m = n'$이다. 따라서 $H = \langle a^{n'} \rangle = H_d$이다.

**(3)** $d_1 = |H|$, $d_2 = |K|$로 두면 (1)에 의해 $d_1, d_2 \in \mathrm{Div}(n)$이고, (2)에 의해 $H = H_{d_1}$, $K = H_{d_2}$이다.

$H \subseteq K$라 하자. [[subgroup|부분군]]의 (6)에 의해 $H$는 군 $K$의 부분군이다. $K = \langle b \rangle$($b = a^{n_2'}$, $n = d_2 \cdot n_2'$)이므로 순환 부분군의 (6)의 끝 문장에 의해 군 $K$는 $b$를 생성원으로 하는 순환군이고, 원소가 $d_2$개인 유한군이다. 군 $K$에 (1)을 쓰면 $|H| \mid |K|$이다.

거꾸로 $d_1 \mid d_2$라 하자. $d_2 = d_1 t$인 정수 $t$가 있고, $n = d_2 \cdot n_2'$이므로 $n = d_1 \cdot (t n_2')$이다. 준비에서 본 유일성에 의해 $n = d_1 \cdot n_1'$인 $n_1'$은 $t n_2'$이고, $H = \langle a^{t n_2'} \rangle$, $K = \langle a^{n_2'} \rangle$이다. [[laws-of-exponents|지수법칙]]의 (2)에 의해 $a^{t n_2'} = (a^{n_2'})^t \in K$이므로, 순환 부분군의 (2)에 의해 $H \subseteq K$이다.

**(4)** $x \in G$이면 $G = \langle a \rangle$이므로 $x = a^k$인 정수 $k$가 있고, 지수법칙의 (2)에 의해 $x^d = a^{kd}$이다. [[order-of-an-element|원소의 위수]]의 (2)에 의해 $x^d = e$인 것은 정확히 $n \mid kd$일 때이다. $n = n'd$이므로 $n \mid kd$이면 $kd = n'dc$인 정수 $c$가 있고 소거 법칙의 (2)에 의해 $k = n'c$이다. 그러면 지수법칙의 (2)에 의해 $x = (a^{n'})^c \in H_d$이다. 거꾸로 $x \in H_d$이면 $x = (a^{n'})^c$인 정수 $c$가 있고, 지수법칙의 (2)와 [[power-in-a-group|군의 거듭제곱]]의 (3)에 의해 $x^d = a^{n'cd} = (a^{n'd})^c = (a^n)^c = e^c = e$이다.

**(5)** [[prime-number|소수]]의 진술에 의해 $n$의 양의 약수 $d$는 $1 \le d \le n$이므로 $\mathrm{Div}(n) \subseteq \{1, \dots, n\}$이다. [[finite-set|유한집합]]의 (F2)와 [[subset-of-finite-set|유한집합의 부분집합]]의 (1)에 의해 $\mathrm{Div}(n)$은 유한집합이다. $\mathcal{S}$는 [[power-set|멱집합]] $\mathscr{P}(G)$의 원소 가운데 $G$의 부분군인 것 전체이므로 집합이다.

각 $d \in \mathrm{Div}(n)$마다 $n'$이 하나로 정해지므로 $H_d$도 하나로 정해지고, (2)에 의해 $H_d \in \mathcal{S}$이다. [[recursion-theorem|재귀 정리]]의 (1)에 의해 $d$에 $H_d$를 대응시키는 함수 $\Phi : \mathrm{Div}(n) \to \mathcal{S}$가 있다. $\Phi(d) = \Phi(d')$이면 $d = |H_d| = |H_{d'}| = d'$이므로 $\Phi$는 단사이다. $H \in \mathcal{S}$이면 (1)에 의해 $|H| \in \mathrm{Div}(n)$이고 (2)에 의해 $H = H_{|H|} = \Phi(|H|)$이므로 $\Phi : \mathrm{Div}(n) \to \mathcal{S}$는 전사이다. [[injective-surjective-bijective|전단사]]이므로 유한집합의 (F4)에 의해 $\mathcal{S}$는 원소를 $|\mathrm{Div}(n)|$개 갖는 유한집합이다.
:::

## 예시와 반례

:::example[$\mathbb{Z}_{12}$의 부분군 전체]
$(\mathbb{Z}_{12}, +)$는 $[1]$이 생성하는 원소 $12$개의 순환군입니다([[cyclic-subgroup|순환 부분군]]의 (5), [[integers-modulo-n|법 n의 정수]]의 (1)). $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$입니다. 양의 약수는 [[prime-number|소수]]의 진술에 의해 $12$ 이하이고, $1$부터 $12$까지의 정수 가운데 나머지 $5, 7, 8, 9, 10, 11$은 [[division-theorem|나눗셈 정리]]로 $12$를 나눈 나머지가 $0$이 아니고 나머지는 하나뿐이기 때문입니다(예: $12 = 1 \cdot 7 + 5$). 덧셈 표기에서 $a^{n'}$은 $n' \cdot [1] = [n']$이므로([[power-in-a-group|군의 거듭제곱]]의 (7)) (2)와 (5)에 의해 부분군은 정확히 다음 여섯 개입니다.
$$H_1 = \langle [12] \rangle = \{[0]\}, \quad H_2 = \langle [6] \rangle = \{[0], [6]\}, \quad H_3 = \langle [4] \rangle = \{[0], [4], [8]\},$$
$$H_4 = \langle [3] \rangle = \{[0], [3], [6], [9]\}, \quad H_6 = \langle [2] \rangle = \{[0], [2], [4], [6], [8], [10]\}, \quad H_{12} = \langle [1] \rangle = \mathbb{Z}_{12}.$$
각 부분군의 원소는 [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (1)에 의해 $0 \cdot [n'], 1 \cdot [n'], \dots, (d-1) \cdot [n']$입니다. (3)에 의해 $H_2 \subseteq H_4$, $H_3 \subseteq H_6$이고, $4 \nmid 6$이므로 $H_4 \not\subseteq H_6$입니다. 실제로 $[3] \in H_4$이지만 $[3] \notin H_6$입니다.
:::

:::counterexample[순환군이 아닌 $U(8)$에는 원소가 2개인 부분군이 둘 있다]
(2)의 "하나뿐"은 $G$가 순환군이라는 가정 없이는 성립하지 않을 수 있습니다. $\mathbb{Z}_8$에서 $[3][3] = [9] = [1]$, $[5][5] = [25] = [1]$이므로 [[group-of-units-modulo-n|법 n의 단원군]]의 (3)에 의해 $[3], [5] \in U(8)$입니다. $\{[1], [3]\}$은 공집합이 아니고 곱 $[1][1]$, $[1][3]$, $[3][1]$, $[3][3]$이 모두 그 안에 있으며 $U(8)$은 유한군(단원군의 (5))이므로 [[subgroup-criteria|부분군 판정법]]의 (4)에 의해 부분군입니다. $\{[1], [5]\}$도 같습니다. [[integers-modulo-n|법 n의 정수]]의 (1)에 의해 $[1]$, $[3]$, $[5]$는 서로 다르므로 두 부분군은 원소가 둘씩이고 서로 다릅니다. $U(8)$은 [[cyclic-subgroup|순환 부분군]]의 (7)에 의해 순환군이 아닙니다.
:::

## 확인 질문

:::check[$(\mathbb{Z}_{20}, +)$에서 원소가 4개인 부분군은 무엇인가?]
$\langle [5] \rangle = \{[0], [5], [10], [15]\}$ 하나뿐입니다. $20 = 4 \cdot 5$이므로 (2)에 의해 그것은 $H_4 = \langle 5 \cdot [1] \rangle = \langle [5] \rangle$이고, 원소는 $0 \cdot [5], \dots, 3 \cdot [5]$입니다.
:::

:::check[원소가 30개인 순환군 $G$에서 $x^6 = e$인 원소 $x$는 몇 개인가?]
$6$개입니다. $30 = 6 \cdot 5$이므로 $6 \in \mathrm{Div}(30)$이고, (4)에 의해 그런 $x$ 전체는 $H_6$이며 (2)에 의해 원소가 $6$개입니다.
:::
