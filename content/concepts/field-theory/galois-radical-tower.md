---
title: 근호 탑을 감싸는 분해체
title_en: A Splitting Field Containing a Radical Tower
aliases: [갈루아 근호 탑, 정규 근호 확대, 근호 확대를 감싸는 갈루아 확대, normal radical extension, Galois radical tower]
kind: theorem
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "복소수체의 부분체 F 의 근호 탑이 있으면, 1 의 N제곱근과 탑의 근호들의 최소다항식의 곱 g 의 근을 모두 붙인 체 M 은 F 위에서 g 의 분해체이고 탑의 꼭대기를 포함한다. M 은 1 의 N제곱근 하나를 먼저 붙이고 근호들의 상을 차례로 붙인 근호 탑의 꼭대기이기도 하며, 그 탑의 각 단계는 앞 단계 위의 분해체이고 자기동형군이 아벨군이다. 따라서 Aut(M/F) 는 가해군이다."
requires: [function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, mathematical-induction, ring, field, integral-domain, finite-products-in-a-commutative-ring, polynomial-ring, degree-of-a-polynomial, evaluation-homomorphism, subfield, irreducible-polynomial, rational-numbers-field, eisenstein-criterion, extension-field, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, splitting-field, separable-polynomial, group, subgroup, normal-subgroup, quotient-group, group-isomorphism, automorphism-group-of-extension, automorphisms-permute-roots, order-of-galois-group, fundamental-theorem-of-galois-theory, solvable-group, real-number-arithmetic, order-properties-of-reals, power-of-a-real-number, nth-root, square-root-exists, complex-field, power-of-a-complex-number, roots-of-unity, polynomials-and-polynomial-functions, splitting-fields-in-complex-numbers, radical-extension, galois-groups-of-roots-of-unity-and-radicals]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.3절 Applications, Lemma 23.29 와 그 증명 (p.304–305), Theorem 23.30 의 증명 (p.305); 23.5절 Exercises, 연습문제 8 (p.308)"
    checked: original
    note: "출처 Lemma 23.29(p.304)는 표수 0 인 체 F 의 근호 확대 F = F_0 ⊂ ⋯ ⊂ F_r = E 에 대하여 'there exists a normal radical extension F = K_0 ⊂ K_1 ⊂ ⋯ ⊂ K_r = K such that K that contains E and K_i is a normal extension of K_{i−1}' 라고 진술한다. 증명은 K_1 을 x^{n_1} − α_1^{n_1} 의 분해체로 두고 'Continuing in this manner' 로 K_r 까지 간다. Theorem 23.30 의 증명(p.305)은 'By Lemma 23.29, we can assume that E is a splitting field f(x) and F_i is normal over F_{i−1}' 라고 쓰고 기본정리로 G(E/F_{i−1})/G(E/F_i) ≅ G(F_i/F_{i−1}) 를 써서 가해성을 얻는다. 이 항목은 열의 단계 수를 출처와 다르게 잡는다. 1 의 N제곱근 ζ 하나를 먼저 붙이고(N 은 지수들의 곱), F 위의 분해체 M 을 처음부터 g = (X^N − 1)m_1 ⋯ m_r 의 근을 모두 붙인 체로 정한 뒤, ζ 와 근호들의 M 의 자기동형에 의한 상을 하나씩 붙여 꼭대기가 M 인 근호 탑을 만든다. 그래서 M 이 F 위의 분해체이고 각 단계가 앞 단계 위의 분해체라는 것을 따로 증명한다. 각 단계의 갈루아 군이 아벨군이라는 것은 출처 Lemma 23.28 의 증명의 두 경우를 진술로 올린 galois-groups-of-roots-of-unity-and-radicals 를 쓴다. (1)의 (iii)의 'M 은 사이의 체 L 위에서도 g 의 분해체' 는 23.5절 연습문제 8(p.308, 'If E is a normal extension of F, show that E must also be a normal extension of K')과 같은 내용이다. 예시 '$\\iota(\\mathbb{Q}) \\subseteq \\iota(\\mathbb{Q})(\\sqrt{2})$로 만든 탑' 과 반례 '꼭대기 $\\iota(\\mathbb{Q})(\\sqrt[3]{2})$에서 자기동형군의 위수가 차수보다 작은 예' 의 체 ℚ(√2), ℚ(∛2) 는 출처 21장과 23장에서 여러 번 나오는 체이고, 반례는 출처 Example 21.30(p.268, ℚ(∛3) 은 x³ − 3 의 분해체가 아니다)과 같은 발상이고, 반례의 [ℚ(∛2) : ℚ] = 3 은 출처 21.3절(p.274)이 '∛2 is a zero of the irreducible polynomial x³ − 2 over ℚ' 에서 얻는 차수와 같은 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(5차 예의 값과 도함수의 근을 다시 계산, 경계 경우 n = 1·b = 0). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 확대체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 다항식환과 부정원 $X$는 [[polynomial-ring|다항식환]]의 것이고, 대입한 값과 근은 [[evaluation-homomorphism|대입 준동형]], 거듭제곱과 열의 곱, 빈 곱 $1$은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다. 최소다항식은 [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]], $F(\alpha_1, \dots, \alpha_k)$는 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (1)의 것이다. 분해체는 [[splitting-field|분해체]], 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. $\operatorname{Aut}(E/F)$와 그 곱(합성), $i_M$은 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 정규부분군, 몫군, 동형 $\cong$, 아벨군은 [[normal-subgroup|정규부분군]], [[quotient-group|몫군]], [[group-isomorphism|군의 동형]], [[group|군]]의 것이며, 가해열과 가해군은 [[solvable-group|가해군]]의 것이다. 체 $\mathbb{C}$는 [[complex-field|복소수체]], $\mu_N$과 $\omega_N$은 [[roots-of-unity|1 의 n제곱근]], $F(R)$은 [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 것이고, 근호 탑, 근호, 지수, 꼭대기, 근호 확대는 [[radical-extension|근호 확대]]의 것이다. 유한집합과 원소의 개수 $|A|$는 [[finite-set|유한집합]]과 [[number-of-elements-is-unique|원소의 개수]]의 것이다.

**설정.** $F$가 $\mathbb{C}$의 부분체이고, $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$이 $F$의 길이 $r$인 근호 탑이라 하자. 근호 확대의 (1)의 (iii)에 의해 각 $\beta_i$는 $F$ 위에서 대수적이고, 그 $F$ 위의 최소다항식을 $m_i$라 하자. 환 $\mathbb{Z}$에서의 곱 $N = n_1 n_2 \cdots n_r$($r = 0$이면 $N = 1$)로 두고 $\zeta = \omega_N$이라 하자.
$$
g = (X^N - 1)\,(m_1 m_2 \cdots m_r) \in F[X]
$$
로 두고, $g$의 $\mathbb{C}$ 안의 근 전체의 집합을 $R_g$, $M = F(R_g)$, $G = \operatorname{Aut}(M/F)$라 하자. $1 \le i \le r$이면 $m_i$의 $\mathbb{C}$ 안의 근 전체의 집합을 $R_i$라 하자.

1. (분해체 $M$)
   - (i) $N$은 자연수이고, $g$는 영다항식이 아니며 $\deg g \ge 1$이다. 따라서 $M$이 정해진다.
   - (ii) $R_g = \mu_N \cup R_1 \cup \cdots \cup R_r$이다. 곧 복소수 $z$가 $g$의 근인 것은 정확히 $z \in \mu_N$이거나 어떤 $i$에서 $z \in R_i$일 때이다.
   - (iii) $M$은 $F$ 위에서 $g$의 분해체이고, $g$의 $F$ 위의 모닉 기약 인수마다 $M$에서 근이 서로 다르며, $G$는 유한군이고 $|G| = [M : F]$이다. 더 일반적으로 $L$이 $F \subseteq L \subseteq M$인 $\mathbb{C}$의 부분체이면, $g \in L[X]$이고 $M$은 $L$ 위에서 $g$의 분해체이며, $g$의 $L$ 위의 모닉 기약 인수마다 $M$에서 근이 서로 다르고, $\operatorname{Aut}(M/L)$는 $G$의 부분군인 유한군이며 $|\operatorname{Aut}(M/L)| = [M : L]$이다.
   - (iv) $\zeta \in M$이고 모든 $\beta_i$는 $M$의 원소이며, $F_r \subseteq M$이다. $1 \le i \le r$이면 $N = n_i c_i$인 자연수 $c_i$가 있고 $\omega_{n_i} = \zeta^{c_i}$이다.
   - (v) $1 \le i \le r$이면 $R_i = \{\sigma(\beta_i) : \sigma \in G\}$이다.
2. ($M$에 이르는 근호 탑) $q = |G|$라 하자. $G$는 $i_M$을 원소로 가지므로 $q \ge 1$이고, 유한집합의 정의에 의해 전단사 $s : \{1, \dots, q\} \to G$가 있다. 그런 $s$를 하나 잡자. $K = 1 + qr$로 두고, $\gamma_1 = \zeta$, $p_1 = N$이라 하자. $r \ge 1$이고 $2 \le k \le K$이면 [[tower-law|차수의 곱셈 공식]]의 (1)의 (i)에 의해 $k - 1 = (j - 1)r + i$인 $i \in \{1, \dots, r\}$, $j \in \{1, \dots, q\}$가 정확히 하나씩 있고, $\gamma_k = s(j)(\beta_i)$, $p_k = n_i$로 둔다. 그러면 다음이 성립한다.
   - (i) 모든 $\gamma_k$는 $M$의 원소이고 $F$ 위에서 대수적이다. $L_0 = F$, $1 \le k \le K$에서 $L_k = F(\gamma_1, \dots, \gamma_k)$로 두면, $L_0, \dots, L_K$, $\gamma_1, \dots, \gamma_K$, $p_1, \dots, p_K$는 $F$의 근호 탑이고, $L_1 = F(\zeta)$이며 꼭대기는 $L_K = M$이다. 따라서 $M$은 $F$의 근호 확대이다.
   - (ii) $1 \le k \le K$이면 $L_k$는 $L_{k-1}$ 위에서 $X^{p_k} - \gamma_k^{p_k}$의 분해체이고, $\operatorname{Aut}(L_k/L_{k-1})$는 아벨군이다.
   - (iii) $1 \le k \le K$이면 $\operatorname{Aut}(M/L_k) \subseteq \operatorname{Aut}(M/L_{k-1})$이고, $\operatorname{Aut}(M/L_k)$는 군 $\operatorname{Aut}(M/L_{k-1})$의 정규부분군이며
     $$
     \begin{aligned}
     &\operatorname{Aut}(M/L_{k-1}) \\
     &\quad / \operatorname{Aut}(M/L_k) \\
     &\quad \cong \operatorname{Aut}(L_k/L_{k-1})
     \end{aligned}
     $$
     이다. 따라서 몫군 $\operatorname{Aut}(M/L_{k-1}) / \operatorname{Aut}(M/L_k)$는 아벨군이다.
3. (가해군) (2)의 $L_0, \dots, L_K$에 대하여 $0 \le j \le K$에서 $H_j = \operatorname{Aut}(M/L_{K-j})$로 둔 열 $H_0, \dots, H_K$는 $G$의 가해열이다. $H_0 = \{i_M\}$이고 $H_K = G$이다. 따라서 $G = \operatorname{Aut}(M/F)$는 가해군이다.
:::

:::english
Fields are meant as in "Units and Fields"; subfields, extension fields, finite extensions and the degree $[E : F]$ are as in the entries on subfields and extension fields. The polynomial ring and the indeterminate $X$ are as in "Polynomial Ring"; values and roots as in "Evaluation Homomorphism"; powers, products of sequences and the empty product $1$ as in "Finite Products and Powers in a Commutative Ring". Minimal polynomials are as in "Algebraic Elements and Minimal Polynomials", and $F(\alpha_1, \dots, \alpha_k)$ is that of (1) in "Finite Extensions Are Algebraic". Splitting fields are as in "Splitting Field", and monic irreducible factors and "has distinct roots" as in "Polynomials with Distinct Roots". $\operatorname{Aut}(E/F)$, its product (composition) and $i_M$ are as in "The Automorphism Group of an Extension"; normal subgroups, quotient groups, isomorphism $\cong$ and abelian groups are as in the entries on normal subgroups, quotient groups, group isomorphisms and groups; solvable series and solvable groups are as in "Solvable Group". The field $\mathbb{C}$ is as in "The Field of Complex Numbers", $\mu_N$ and $\omega_N$ as in "Roots of Unity", $F(R)$ is that of (3) in "Splitting Fields inside the Complex Numbers", and radical towers, radicals, exponents, tops and extensions by radicals are as in "Radical Extension". Finite sets and the number of elements $|A|$ are as in the entries on finite sets and on the number of elements.

**Setting.** Let $F$ be a subfield of $\mathbb{C}$, and let $F_0, \dots, F_r$, $\beta_1, \dots, \beta_r$, $n_1, \dots, n_r$ be a radical tower of $F$ of length $r$. By (1)(iii) of "Radical Extension", each $\beta_i$ is algebraic over $F$; let $m_i$ be its minimal polynomial over $F$. Let $N = n_1 n_2 \cdots n_r$ be the product in the ring $\mathbb{Z}$ ($N = 1$ if $r = 0$), and let $\zeta = \omega_N$. Put
$$
g = (X^N - 1)\,(m_1 m_2 \cdots m_r) \in F[X],
$$
let $R_g$ be the set of all roots of $g$ in $\mathbb{C}$, $M = F(R_g)$ and $G = \operatorname{Aut}(M/F)$. For $1 \le i \le r$, let $R_i$ be the set of all roots of $m_i$ in $\mathbb{C}$.

1. (The splitting field $M$)
   - (i) $N$ is a natural number, $g$ is nonzero and $\deg g \ge 1$. Hence $M$ is defined.
   - (ii) $R_g = \mu_N \cup R_1 \cup \cdots \cup R_r$. That is, a complex number $z$ is a root of $g$ exactly when $z \in \mu_N$ or $z \in R_i$ for some $i$.
   - (iii) $M$ is a splitting field of $g$ over $F$, every monic irreducible factor of $g$ over $F$ has distinct roots in $M$, and $G$ is a finite group with $|G| = [M : F]$. More generally, if $L$ is a subfield of $\mathbb{C}$ with $F \subseteq L \subseteq M$, then $g \in L[X]$, $M$ is a splitting field of $g$ over $L$, every monic irreducible factor of $g$ over $L$ has distinct roots in $M$, and $\operatorname{Aut}(M/L)$ is a finite group, a subgroup of $G$, with $|\operatorname{Aut}(M/L)| = [M : L]$.
   - (iv) $\zeta \in M$, every $\beta_i$ is an element of $M$, and $F_r \subseteq M$. If $1 \le i \le r$, then there is a natural number $c_i$ with $N = n_i c_i$, and $\omega_{n_i} = \zeta^{c_i}$.
   - (v) If $1 \le i \le r$, then $R_i = \{\sigma(\beta_i) : \sigma \in G\}$.
2. (A radical tower reaching $M$) Let $q = |G|$. Since $G$ has the element $i_M$, $q \ge 1$, and by the definition of finite sets there is a bijection $s : \{1, \dots, q\} \to G$. Fix such an $s$. Put $K = 1 + qr$, $\gamma_1 = \zeta$ and $p_1 = N$. If $r \ge 1$ and $2 \le k \le K$, then by (1)(i) of "The Tower Law" there are exactly one $i \in \{1, \dots, r\}$ and one $j \in \{1, \dots, q\}$ with $k - 1 = (j - 1)r + i$, and we put $\gamma_k = s(j)(\beta_i)$ and $p_k = n_i$. Then the following hold.
   - (i) Every $\gamma_k$ is an element of $M$ and is algebraic over $F$. With $L_0 = F$ and $L_k = F(\gamma_1, \dots, \gamma_k)$ for $1 \le k \le K$, the sequences $L_0, \dots, L_K$, $\gamma_1, \dots, \gamma_K$, $p_1, \dots, p_K$ form a radical tower of $F$, $L_1 = F(\zeta)$, and the top is $L_K = M$. Hence $M$ is an extension by radicals of $F$.
   - (ii) If $1 \le k \le K$, then $L_k$ is a splitting field of $X^{p_k} - \gamma_k^{p_k}$ over $L_{k-1}$, and $\operatorname{Aut}(L_k/L_{k-1})$ is abelian.
   - (iii) If $1 \le k \le K$, then $\operatorname{Aut}(M/L_k) \subseteq \operatorname{Aut}(M/L_{k-1})$, $\operatorname{Aut}(M/L_k)$ is a normal subgroup of the group $\operatorname{Aut}(M/L_{k-1})$, and
     $$
     \begin{aligned}
     &\operatorname{Aut}(M/L_{k-1}) \\
     &\quad / \operatorname{Aut}(M/L_k) \\
     &\quad \cong \operatorname{Aut}(L_k/L_{k-1}).
     \end{aligned}
     $$
     Hence the quotient group $\operatorname{Aut}(M/L_{k-1}) / \operatorname{Aut}(M/L_k)$ is abelian.
3. (Solvable group) For $L_0, \dots, L_K$ of (2), the sequence $H_0, \dots, H_K$ with $H_j = \operatorname{Aut}(M/L_{K-j})$ for $0 \le j \le K$ is a solvable series of $G$, with $H_0 = \{i_M\}$ and $H_K = G$. Hence $G = \operatorname{Aut}(M/F)$ is a solvable group.
:::

## 직관

근호 탑의 꼭대기 $F_r$ 자신은 $F$ 위의 분해체가 아닐 수 있습니다. 아래 반례처럼 실수 $\sqrt[3]{2}$ 하나를 붙인 체는 $X^3 - 2$의 다른 두 근을 담지 못하고, 그러면 자기동형이 너무 적어 갈루아 이론의 기본정리를 쓸 수 없습니다. 그래서 탑의 근호들의 "켤레", 곧 최소다항식의 다른 근들까지 모두 붙인 더 큰 체 $M$으로 갑니다. $M$은 처음부터 다항식 $g$의 근을 모두 붙인 체로 정하므로 분해체이고, 꼭대기 $F_r$을 포함합니다.

이 $M$도 근호 탑의 꼭대기라는 것이 핵심입니다. 먼저 $1$의 $N$제곱근 $\zeta$를 붙입니다. 그러면 모든 지수 $n_i$에 대해 $1$의 $n_i$제곱근이 이미 들어 있습니다. 그다음 $M$의 자기동형 $\sigma$마다 근호들을 $\sigma(\beta_1), \sigma(\beta_2), \dots$의 순서로 붙입니다. $\sigma(\beta_i)$의 $n_i$제곱은 $\sigma(\beta_i^{n_i})$이고, $\beta_i^{n_i}$는 앞의 근호들로 만들어지므로 이 값도 앞에서 붙인 $\sigma(\beta_1), \dots, \sigma(\beta_{i-1})$로 만들어집니다. 그래서 각 단계가 근호 하나를 붙이는 단계가 됩니다. 계단을 오르는데 각 계단의 높이(지수)마다 필요한 1 의 거듭제곱근을 미리 첫 계단에 깔아 둔 것과 같습니다. 비유의 "첫 계단"은 $L_1 = F(\zeta)$이고, "깔아 둔 것"은 (1)의 (iv)의 $\omega_{n_i} = \zeta^{c_i}$입니다.

각 단계에서는 $1$의 거듭제곱근이 이미 있으므로 [[galois-groups-of-roots-of-unity-and-radicals|거듭제곱근을 붙인 확대의 갈루아 군]]에 의해 자기동형군이 아벨군입니다. 기본정리는 단계마다 $\operatorname{Aut}(M/L_k)$가 $\operatorname{Aut}(M/L_{k-1})$의 정규부분군이고 몫이 그 아벨군과 동형임을 줍니다. 이 군들을 위에서부터 거꾸로 늘어놓은 것이 가해열입니다.

## 증명

:::idea
$M$을 $g$의 근을 모두 붙인 체로 정해 처음부터 분해체로 만든다. $\zeta$를 먼저 붙이고 근호들의 상을 차례로 붙이면 각 단계는 1 의 거듭제곱근이 이미 있는 체에 근호 하나를 붙이는 것이므로, 단계의 자기동형군은 아벨군이고 기본정리로 정규부분군의 열을 얻는다.
:::

:::hint
$\sigma(\beta_i)^{n_i} = \sigma(\beta_i^{n_i})$이고 $\beta_i^{n_i} \in F(\beta_1, \dots, \beta_{i-1})$입니다. 유한 확대와 대수적 확대의 (2)로 $\sigma(F(\beta_1, \dots, \beta_{i-1}))$의 꼴을 구해 보세요.
:::

:::hint
가해열은 $\{e\}$에서 시작해 $G$로 올라가는 방향입니다. 체의 열은 $F$에서 $M$으로 올라가므로, 자기동형군의 열은 번호를 뒤집어야 합니다.
:::

:::proof
**쓰는 사실.** 체 $E$의 부분체 $K$와 $K$ 위의 다항식에 대하여 대입한 값은 [[evaluation-homomorphism|대입 준동형]]의 (8)에 의해 $E$에서 계산해도 같다. [[automorphism-group-of-extension|확대의 자기동형군]]의 (2)에 의해 자기동형은 $1$을 $1$로 보내므로 [[finite-products-in-a-commutative-ring|가환환의 유한 곱]]의 (9)에 의해 거듭제곱을 보존한다. $\mathbb{C}$의 부분체 $K \subseteq L$이면 $K$는 체 $L$의 부분체이고, 체 $L$의 부분체는 $\mathbb{C}$의 부분체이다([[subfield|부분체]]의 (5)의 (i)).

**(1)의 (i).** 자연수의 곱은 자연수이다(곱의 끝항 떼기, 가환환의 유한 곱의 (2)와 $r$에 대한 [[mathematical-induction|수학적 귀납법]]). 따라서 $N \ge 1$이고, [[degree-of-a-polynomial|다항식의 차수]]의 (2), (3)에 의해 $X^N - 1$은 차수가 $N$인 모닉 다항식이다. [[algebraic-element-and-minimal-polynomial|대수적 원소와 최소다항식]]의 (3)의 (i)에 의해 각 $m_i$는 영다항식이 아니다. 다항식의 차수의 (6)에 의해 $F[X]$는 정역이므로 가환환의 유한 곱의 (7)에 의해 $g \ne 0$이다. 대입 준동형의 (2)에 의해 $g(1) = (1^N - 1)\,m_1(1) \cdots m_r(1) = 0$이다. $\deg g = 0$이면 다항식의 차수의 (2)에 의해 $g$는 $0$이 아닌 상수 다항식이고 대입 준동형의 (1)에 의해 $g(1) \ne 0$이어서 어긋나므로 $\deg g \ge 1$이다.

**(1)의 (ii).** 대입 준동형의 (2)에 의해 복소수 $z$에서 $g(z) = (z^N - 1)\,m_1(z) \cdots m_r(z)$이다. [[field|가역원과 체]]의 (3)에 의해 $\mathbb{C}$는 정역이므로 가환환의 유한 곱의 (7)에 의해 이것이 $0$인 것은 정확히 $z^N = 1$이거나 어떤 $i$에서 $m_i(z) = 0$일 때이다. [[polynomials-and-polynomial-functions|다항식과 다항함수]]의 (5)의 (iv)에 의해 환의 거듭제곱은 복소수의 거듭제곱이므로 $z^N = 1$인 것은 정확히 $z \in \mu_N$일 때이다([[roots-of-unity|1 의 n제곱근]]의 정의).

**(1)의 (iii).** [[splitting-fields-in-complex-numbers|ℂ 안의 분해체]]의 (3)의 (iii), (iv)와 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)이 첫 문장이다. $L$이 $F \subseteq L \subseteq M$인 부분체이면, ℂ 안의 분해체의 (3)의 (vii)에 의해 $g \in L[X]$이고 $L(R_g) = F(R_g) = M$은 $L$ 위에서 $g$의 분해체이며, 그 (3)의 (iv)를 $L$에 쓰면 $g$의 $L$ 위의 모닉 기약 인수마다 $M$에서 근이 서로 다르다. 분해체의 갈루아 군의 위수의 (1)을 $L$에 쓰면 나머지 크기가 나오고, 확대의 자기동형군의 (1)의 (iii)에 의해 $\operatorname{Aut}(M/L)$는 $G$의 부분군이다.

**(1)의 (iv).** 1 의 n제곱근의 (2)에 의해 $\zeta \in \mu_N$이므로 (ii)에 의해 $\zeta \in R_g \subseteq M$이다. $\beta_i$는 $m_i$의 근이므로 $\beta_i \in R_i \subseteq R_g \subseteq M$이다. [[radical-extension|근호 확대]]의 (1)의 (ii)에 의해 $F \subseteq M$이고, 그 (1)의 (iii)에 의해 $F_r = F(\beta_1, \dots, \beta_r)$이므로 유한 확대와 대수적 확대의 (1)의 (ii)에 의해 $F_r \subseteq M$이다. $N = n_i c_i$인 자연수 $c_i$는 $r$개의 자연수의 곱을 앞의 $i - 1$개의 곱과 나머지의 곱으로 나누고(가환환의 유한 곱의 (3)) 나머지의 곱에서 맨 앞의 $n_i$를 떼어 내어(같은 (4)) 얻는다. 곧 $c_i$는 $n_i$를 뺀 $r - 1$개의 곱이고 자연수이다. 1 의 n제곱근의 (2)에 의해 $\zeta^{c_i} = \exp(2\pi i c_i / N)$이고, $c_i / N = 1 / n_i$이므로 이것은 $\exp(2\pi i / n_i) = \omega_{n_i}$이다.

**(1)의 (v).** $\beta_i \in R_g$이고 $m_i$는 $\beta_i$의 $F$ 위의 최소다항식이다. [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (3)의 (ii)를 $E = M$, $f = g$, $\alpha = \beta_i$에 쓰면 궤도 $\{\sigma(\beta_i) : \sigma \in G\}$는 $M$ 안의 $m_i$의 근 전체의 집합이다. $R_i \subseteq R_g \subseteq M$이므로 쓰는 사실에 의해 $M$ 안의 $m_i$의 근 전체는 $R_i$이다.

**(2)의 (i).** $\zeta \in M$이고, $\sigma \in G$는 $M$에서 $M$으로의 함수이므로 $\sigma(\beta_i) \in M$이다. (1)의 (iii)에 의해 $M$은 $F$의 유한 확대이므로 [[finite-extension-is-algebraic|유한 확대와 대수적 확대]]의 (3)에 의해 모든 $\gamma_k$는 $F$ 위에서 대수적이다(쓰는 사실에 의해 $\mathbb{C}$에서 보아도 그렇다). 유한 확대와 대수적 확대의 (1)의 (i)에 의해 $L_k = L_{k-1}(\gamma_k)$이고 $L_1 = F(\zeta)$이다. 근호 탑의 조건 $\gamma_k^{p_k} \in L_{k-1}$을 본다. $k = 1$이면 $\gamma_1^{N} = \zeta^N = 1 \in F$이다.

$k \ge 2$이고 $k - 1 = (j - 1)r + i$, $\sigma = s(j)$라 하자. 근호 확대의 (1)의 (iii)에 의해 $\beta_i^{n_i} \in F_{i-1} = F(\beta_1, \dots, \beta_{i-1})$이다. (1)의 (iv)에 의해 $F_{i-1} \subseteq F_r \subseteq M$이므로, 쓰는 사실과 유한 확대와 대수적 확대의 (1)의 (ii)의 유일성을 체 $M$에 쓰면 $F_{i-1}$은 $M$ 안에서 붙인 $F(\beta_1, \dots, \beta_{i-1})$과 같다($F_{i-1}$은 $F$와 그 원소들을 포함하는 $M$의 부분체이고, 그런 $M$의 부분체는 $\mathbb{C}$의 부분체이므로 $F_{i-1}$을 포함한다). 유한 확대와 대수적 확대의 (2)를 $E = E' = M$, $\tau = \sigma$에 쓰면, $\sigma$가 $F$의 원소를 고정하므로 $\sigma(F_{i-1}) = F(\sigma(\beta_1), \dots, \sigma(\beta_{i-1}))$이다. $1 \le l \le i - 1$이면 $\sigma(\beta_l) = \gamma_{k'}$, $k' = 1 + (j - 1)r + l < k$이므로 $\sigma(\beta_l) \in L_{k-1}$이고, $L_{k-1}$은 $F$를 포함하는 $M$의 부분체이므로 $\sigma(F_{i-1}) \subseteq L_{k-1}$이다. 쓰는 사실에 의해
$$
\begin{aligned}
\gamma_k^{p_k} &= \sigma(\beta_i)^{n_i} = \sigma(\beta_i^{n_i}) \\
&\in \sigma(F_{i-1}) \subseteq L_{k-1}
\end{aligned}
$$
이다. $i = 1$이면 $F_0 = F$이고 $\sigma(F) = F \subseteq L_{k-1}$이다. 따라서 근호 탑이다.

꼭대기를 본다. 모든 $\gamma_k$가 $M$에 속하므로 유한 확대와 대수적 확대의 (1)의 (ii)에 의해 $L_K \subseteq M$이다. 거꾸로 $\zeta \in L_K$이고 $L_K$는 곱에 닫혀 있으므로, 1 의 n제곱근의 (1)과 (2)에 의해 $\mu_N = \{\zeta^t : 0 \le t \le N - 1\} \subseteq L_K$이다. $r \ge 1$이고 $\rho \in R_i$이면 (1)의 (v)에 의해 $\rho = \sigma(\beta_i)$인 $\sigma \in G$가 있고, $s$가 전사이므로 $\sigma = s(j)$인 $j$가 있어 $\rho = \gamma_k$($k = 1 + (j - 1)r + i$)이다. 따라서 (1)의 (ii)에 의해 $R_g \subseteq L_K$이고, ℂ 안의 분해체의 (3)의 (ii)에 의해 $M = F(R_g) \subseteq L_K$이다. 곧 $L_K = M$이다. $r = 0$이면 $K = 1$이고 $R_g = \mu_1$이므로 같은 논법이 성립한다.

**(2)의 (ii).** $k = 1$이면 [[galois-groups-of-roots-of-unity-and-radicals|거듭제곱근을 붙인 확대의 갈루아 군]]의 (1)의 (i), (iii)을 $F$와 $n = N$에 쓴 것이다. $k \ge 2$이고 $k - 1 = (j - 1)r + i$라 하자. $b = \gamma_k^{n_i}$는 (i)에 의해 $L_{k-1}$의 원소이고, (1)의 (iv)에 의해 $\omega_{n_i} = \zeta^{c_i} \in L_1 \subseteq L_{k-1}$이다(근호 확대의 (1)의 (ii)). $b \ne 0$이면 거듭제곱근을 붙인 확대의 갈루아 군의 (2)의 (i), (iii)을 밑체 $L_{k-1}$, $n = n_i$, $\gamma = \gamma_k$에 쓰면 $L_k = L_{k-1}(\gamma_k)$는 $L_{k-1}$ 위에서 $X^{n_i} - b$의 분해체이고 자기동형군은 아벨군이다. $b = 0$이면 그 (3)의 (ii)에 의해 $\gamma_k = 0$, $L_k = L_{k-1}$이고, $L_{k-1}$은 $L_{k-1}$ 위에서 $X^{n_i}$의 분해체이며 자기동형군은 $\{i_{L_k}\}$이다. 원소가 하나인 군은 아벨군이다.

**(2)의 (iii).** 근호 확대의 (1)의 (ii)에 의해 $L_{k-1} \subseteq L_k \subseteq M$이다. (1)의 (iii)을 $L = L_{k-1}$에 쓰면 $M$은 $L_{k-1}$ 위에서 $g$의 분해체이고 모닉 기약 인수마다 근이 서로 다르므로, [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 설정이 밑체 $L_{k-1}$, 체 $M$, 다항식 $g$에 대해 성립하고 $L_k$는 그 중간체이다. (ii)에 의해 $L_k$는 $L_{k-1}$ 위에서 영이 아니고 차수가 $p_k \ge 1$인 $X^{p_k} - \gamma_k^{p_k}$의 분해체이므로, 기본정리의 (4)의 (iii)에 의해 그 (4)의 (i)이 성립하고, (4)의 (ii)에 의해 $\operatorname{Aut}(M/L_k)$는 $\operatorname{Aut}(M/L_{k-1})$의 정규부분군이며, (4)의 (iv)에 의해 몫군은 $\operatorname{Aut}(L_k/L_{k-1})$와 동형이다. 포함은 확대의 자기동형군의 (1)의 (iii)이다. (ii)에 의해 $\operatorname{Aut}(L_k/L_{k-1})$는 아벨군이므로 [[group-isomorphism|군의 동형]]의 (3)의 (i)에 의해 몫군도 아벨군이다.

**(3).** 확대의 자기동형군의 (1)의 (ii), (iii)과 (1)의 (iii)에 의해 각 $H_j$는 $G$의 부분군이다. (2)의 (i)에 의해 $L_K = M$, $L_0 = F$이므로 $H_0 = \operatorname{Aut}(M/M) = \{i_M\}$이고 $H_K = \operatorname{Aut}(M/F) = G$이다. $0 \le j \le K - 1$이면 $k = K - j$는 $1 \le k \le K$이고 $H_j = \operatorname{Aut}(M/L_k)$, $H_{j+1} = \operatorname{Aut}(M/L_{k-1})$이므로, (2)의 (iii)에 의해 $H_j \subseteq H_{j+1}$, $H_j$는 군 $H_{j+1}$의 정규부분군이고 $H_{j+1}/H_j$는 아벨군이다. [[solvable-group|가해군]]의 정의에 의해 $H_0, \dots, H_K$는 $G$의 가해열이고 $G$는 가해군이다.
:::

## 예시와 반례

:::example[$\iota(\mathbb{Q}) \subseteq \iota(\mathbb{Q})(\sqrt{2})$로 만든 탑]
$F = \iota(\mathbb{Q})$, $\delta = \iota(\sqrt{2})$이고 길이 $1$인 탑 $F_0 = F$, $F_1 = F(\delta)$, $\beta_1 = \delta$, $n_1 = 2$라 합시다($\delta^2 = 2 \in F$). $N = 2$이고, 1 의 n제곱근의 (2), (5)에 의해 $\operatorname{ord}(\omega_2) = 2$, $\mu_2 = \{1, -1\}$이므로 $\zeta = \omega_2 = -1$입니다. [[eisenstein-criterion|아이젠슈타인 판정법]]의 (3)과 ℂ 안의 분해체의 (2)의 (ii)에 의해 $X^2 - 2$는 $F$ 위의 모닉 기약 다항식이므로 $m_1 = X^2 - 2$이고, $g = (X^2 - 1)(X^2 - 2)$, $R_g = \{1, -1, \delta, -\delta\}$, $M = F(\delta)$입니다. [[simple-algebraic-extension|단순 대수적 확대]]의 (3)의 (iii)에 의해 $[M : F] = 2$이므로 (1)의 (iii)에 의해 $G$는 원소가 두 개입니다. 항등함수가 아닌 원소 $c$에서 $c(\delta)$는 자기동형과 근의 치환의 (1)의 (ii)에 의해 $X^2 - 2$의 근 $\delta$나 $-\delta$이고, $c(\delta) = \delta$이면 확대의 자기동형군의 (4)의 (iii)에 의해 $c$가 항등함수가 되므로 $c(\delta) = -\delta$입니다.

$s(1) = i_M$, $s(2) = c$로 잡으면 $K = 1 + 2 \cdot 1 = 3$이고 $\gamma_1 = -1$, $\gamma_2 = \delta$, $\gamma_3 = -\delta$입니다. $L_1 = F(-1) = F$, $L_2 = F(\delta) = M$, $L_3 = M$이고, 가해열은 $H_0 = \operatorname{Aut}(M/L_3) = \{i_M\}$, $H_1 = \operatorname{Aut}(M/L_2) = \{i_M\}$, $H_2 = \operatorname{Aut}(M/L_1) = G$, $H_3 = G$입니다. 같은 군이 이어지는 단계가 있어도 가해열의 조건을 해치지 않습니다.
:::

:::counterexample[꼭대기 $\iota(\mathbb{Q})(\sqrt[3]{2})$에서 자기동형군의 위수가 차수보다 작은 예]
$F = \iota(\mathbb{Q})$, $\gamma = \iota(\sqrt[3]{2})$($\sqrt[3]{2}$는 [[nth-root|n제곱근]]의 실수)이고 길이 $1$인 탑 $F_1 = F(\gamma)$, $n_1 = 3$이라 합시다. 아이젠슈타인 판정법의 (3)에 의해 $X^3 - 2$는 $\mathbb{Q}$ 위에서 기약이고 ℂ 안의 분해체의 (2)의 (ii)에 의해 $F$ 위에서도 그러므로 $[F_1 : F] = 3$입니다. 한편 $\sigma \in \operatorname{Aut}(F_1/F)$이면 자기동형과 근의 치환의 (1)의 (ii)에 의해 $\sigma(\gamma)$는 $F_1$ 안의 $X^3 - 2$의 근이고, $F_1 \subseteq \iota(\mathbb{R})$이므로 실수인 복소수입니다. ℂ 안의 분해체의 (2)의 (iii)에 의해 $\sigma(\gamma) = \iota(x)$이고 $x^3 = 2$인 실수 $x$가 있습니다. $x \le 0$이면 [[order-properties-of-reals|실수의 순서의 성질]]의 (5)의 (iii)과 (4)의 (iv)에 의해 $x^3 = (xx)x \le 0$이어서 어긋나므로 $0 < x$이고, n제곱근의 (1)에 의해 $x = \sqrt[3]{2}$, 곧 $\sigma(\gamma) = \gamma$입니다. 확대의 자기동형군의 (4)의 (iii)에 의해 $\sigma = i_{F_1}$이므로 $|\operatorname{Aut}(F_1/F)| = 1 < 3 = [F_1 : F]$입니다. 꼭대기 자신에서는 기본정리를 쓸 수 없고, 그래서 이 정리는 $M$으로 넓힙니다.
:::

## 확인 질문

:::check[길이 $0$인 탑, 곧 $r = 0$이면 $N$, $g$, $M$, $K$와 가해열은 무엇인가?]
$N$은 빈 곱 $1$이고 $\zeta = \omega_1 = 1$, $g = X - 1$, $R_g = \{1\}$이므로 $M = F$이고 $G = \{i_F\}$, $q = 1$입니다. $K = 1 + 1 \cdot 0 = 1$이고 $L_0 = F$, $L_1 = F(1) = F$이며, 가해열은 $H_0 = H_1 = \{i_F\}$입니다.
:::

:::check[(2)에서 전단사 $s$를 다르게 잡으면 무엇이 바뀌고 무엇이 바뀌지 않는가?]
$\gamma_k$와 그 사이의 $L_k$는 $s$에 따라 정해집니다. 그러나 $L_1 = F(\zeta)$와 꼭대기 $L_K = M$, 그리고 $G$가 가해군이라는 (3)의 결론은 $s$에 기대지 않습니다. 증명은 $s$가 전단사라는 것만 씁니다.
:::
