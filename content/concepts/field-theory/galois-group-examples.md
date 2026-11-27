---
title: 갈루아 군의 예
title_en: Examples of Galois Groups
aliases: [Q(√2, √5) 의 갈루아 군, 중간체와 부분군의 대응의 예, examples of Galois groups, Galois group of Q(sqrt 2, sqrt 5)]
kind: proposition
field: field-theory
msc: ["12F10"]
level: undergrad
summary: "ℚ(√2, √5) 는 ℚ 위에서 (X² − 2)(X² − 5) 의 분해체이고, 그 갈루아 군은 √2 와 √5 의 부호를 바꾸는 네 자기동형으로 이루어지며 모든 원소의 제곱이 항등함수이다. 이 군의 부분군 다섯과 중간체 ℚ(√2, √5), ℚ(√2), ℚ(√5), ℚ(√10), ℚ 다섯이 기본정리로 대응한다. 원소 9개인 체는 그 소체 위에서 자기동형이 둘이고 중간체가 둘이다."
requires: [set, function, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, integers-modulo-n, real-number-arithmetic, order-properties-of-reals, square-root-exists, rational-numbers-field, group, subgroup, subgroup-criteria, lagrange-theorem, normal-subgroup, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, ring, ring-homomorphism, field, polynomial-ring, evaluation-homomorphism, irreducible-polynomial, subfield, extension-field, kronecker-theorem, algebraic-element-and-minimal-polynomial, simple-algebraic-extension, tower-law, finite-extension-is-algebraic, field-extension-examples, splitting-field, separable-polynomial, splitting-field-examples, automorphism-group-of-extension, automorphisms-permute-roots, fixed-field, order-of-galois-group, fundamental-theorem-of-galois-theory]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.1절 Field Automorphisms, Example 23.4 (p.294), Example 23.10 (p.296), Corollary 23.9 (p.295); 23.2절 The Fundamental Theorem, Example 23.16 (p.298), Example 23.21 과 Figure 23.22 (p.299–300); 23.5절 Exercises, 연습문제 1, 3 (p.308); 22.4절 Exercises, 연습문제 21 (p.290)"
    checked: original
    note: "(1)–(4)는 출처 Example 23.4(p.294), 23.10(p.296), 23.16(p.298), 23.21 과 Figure 23.22(p.299–300)가 ℚ(√3, √5) 에서 하는 것과 같은 꼴의 계산을 √3 대신 √2 로 한 것이다. 출처는 그 예에서 자기동형 σ, τ, μ = στ 와 곱셈표로 갈루아 군이 Z_2 × Z_2 와 동형이라고 적고, 부분군 다섯과 중간체 ℚ(√3), ℚ(√5), ℚ(√15) 를 포함한 다섯을 그림으로 대응시킨다. 이 항목은 자기동형이 있다는 것을 중간체 위의 위수의 등식으로 얻고, 중간체가 정확히 다섯이라는 것을 기본정리의 대응으로 보인다. 이 항목은 직곱 Z_2 × Z_2 를 쓰지 않고 '모든 원소의 제곱이 항등함수' 로 진술한다. (5)는 출처 Corollary 23.9(p.295, [E : F] = k 인 유한체의 G(E/F) 는 위수 k 인 순환군)를 k = 2 에 쓴 것과 같은 결론이고, 출처 23.5절 연습문제 3(p.308, GF(729) 의 GF(9) 위의 갈루아 군)과 같은 종류의 물음이다. 반례 '순환군이 아닌 $\\operatorname{Aut}(E/\\mathbb{Q})$' 의 결론은 출처 Example 23.4 가 그 군을 Z_2 × Z_2 의 곱셈표로 적는 것과 같다. 예시 '$\\sqrt{2} + \\sqrt{5}$를 고정하는 자기동형' 은 출처 p.297 의 Q(√3, √5) = Q(√3 + √5) 와 같은 결론을 자기동형으로 얻은 것이다. 확인 질문 '$\\mathbb{Q}$를 포함하는 $\\mathbb{Q}(\\sqrt{2}, \\sqrt{5})$의 부분체 가운데 $\\mathbb{Q}$ 위의 차수가 $2$인 것은 몇 개인가?' 와 '$\\operatorname{Aut}(E/\\mathbb{Q}(\\sqrt{10}))$의 원소는 무엇인가?' 는 출처 Figure 23.22 의 대응과 같은 내용이고, 출처 23.5절 연습문제 1(c)(p.308, G(ℚ(√2, √3, √5)/ℚ))와 같은 종류의 계산이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(새로 쓴 아르틴 보조정리 증명 통독, 예의 부분군·중간체 대응). 독립 검토 없음."
added: 2026-11-27
---

:::statement
유리수체 $\mathbb{Q}$, 제곱근 $\sqrt{a}$, $\mathbb{R}$의 부분체 $\mathbb{Q}(\sqrt{a})$와 $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$는 [[rational-numbers-field|유리수체]], [[square-root-exists|제곱근의 존재]], [[field-extension-examples|체의 확대의 예]]의 것이고, 분해체는 [[splitting-field|분해체]]의 것이다. $\operatorname{Aut}(E/F)$와 그 곱(합성)은 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 고정체 $E^H$는 [[fixed-field|고정체]]의 것이며, 중간체는 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 것이다. 크로네커 정리의 설정 $L$, $\iota$, $\alpha$는 [[kronecker-theorem|크로네커 정리]]의 것이다.

**설정.** $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$, $f = (X^2 - 2)(X^2 - 5) \in \mathbb{Q}[X]$, $G = \operatorname{Aut}(E/\mathbb{Q})$로 둔다. $\sqrt{10} = \sqrt{2}\sqrt{5}$이다.

1. (갈루아 군의 원소) $E$는 $\mathbb{Q}$ 위에서 $f$의 분해체이고 $|G| = 4$이다. $\sigma(\sqrt{2}) = -\sqrt{2}$, $\sigma(\sqrt{5}) = \sqrt{5}$인 $\sigma \in G$와 $\tau(\sqrt{2}) = \sqrt{2}$, $\tau(\sqrt{5}) = -\sqrt{5}$인 $\tau \in G$가 각각 정확히 하나 있고, $G = \{i_E, \sigma, \tau, \sigma\tau\}$이며 이 네 원소는 서로 다르다. 유리수 $x$, $y$, $z$, $w$에 대하여
   $$
   \begin{aligned}
   &\sigma(x + y\sqrt{2} + z\sqrt{5} + w\sqrt{10}) \\
   &\quad = x - y\sqrt{2} + z\sqrt{5} - w\sqrt{10}, \\
   &\tau(x + y\sqrt{2} + z\sqrt{5} + w\sqrt{10}) \\
   &\quad = x + y\sqrt{2} - z\sqrt{5} - w\sqrt{10}
   \end{aligned}
   $$
   이다.
2. (군의 꼴) $\sigma\tau = \tau\sigma$이고 $\sigma\sigma = \tau\tau = (\sigma\tau)(\sigma\tau) = i_E$이다. 따라서 $G$는 아벨군이고 $G$의 모든 원소 $g$에서 $gg = i_E$이다.
3. (부분군) $G$의 부분군은 정확히 다섯 개 $\{i_E\}$, $H_1 = \{i_E, \sigma\}$, $H_2 = \{i_E, \tau\}$, $H_3 = \{i_E, \sigma\tau\}$, $G$이고, 모두 $G$의 정규부분군이다.
4. (중간체) $E$의 부분체로서 $\mathbb{Q}$를 포함하는 것은 정확히 다섯 개 $E$, $\mathbb{Q}(\sqrt{5})$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{10})$, $\mathbb{Q}$이고 서로 다르다. 이들은 차례로 $E^{\{i_E\}}$, $E^{H_1}$, $E^{H_2}$, $E^{H_3}$, $E^G$이고, $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{5})) = H_1$, $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{2})) = H_2$, $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{10})) = H_3$이다. 다섯 중간체 $K$는 모두 모든 $g \in G$에서 $g(K) = K$를 만족하고, $a \in \{2, 5, 10\}$이면 $|\operatorname{Aut}(\mathbb{Q}(\sqrt{a})/\mathbb{Q})| = 2$이다.
5. (원소 $9$개인 체) $L$, $\iota$, $\alpha$가 $\mathbb{Z}_3$ 위의 $h = X^2 + [1]$로 만든 크로네커 정리의 설정의 것이라 하자. 그러면 $|\operatorname{Aut}(L/\iota(\mathbb{Z}_3))| = 2 = [L : \iota(\mathbb{Z}_3)]$이고, $L$의 부분체로서 $\iota(\mathbb{Z}_3)$를 포함하는 것은 $\iota(\mathbb{Z}_3)$와 $L$뿐이다.
:::

:::english
The field of rational numbers $\mathbb{Q}$, square roots $\sqrt{a}$, the subfields $\mathbb{Q}(\sqrt{a})$ of $\mathbb{R}$ and $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$ are as in the entries on the field of rational numbers, on the existence of square roots and on examples of field extensions, and splitting fields are as in "Splitting Field". $\operatorname{Aut}(E/F)$ and its product (composition) are as in the entry on the automorphism group of an extension, fixed fields $E^H$ as in "Fixed Field", and intermediate fields as in the entry on the order of the Galois group of a splitting field. The setting $L$, $\iota$, $\alpha$ of Kronecker's theorem is as in "Kronecker's Theorem".

**Setting.** Put $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$, $f = (X^2 - 2)(X^2 - 5) \in \mathbb{Q}[X]$ and $G = \operatorname{Aut}(E/\mathbb{Q})$. Then $\sqrt{10} = \sqrt{2}\sqrt{5}$.

1. (Elements of the Galois group) $E$ is a splitting field of $f$ over $\mathbb{Q}$ and $|G| = 4$. There is exactly one $\sigma \in G$ with $\sigma(\sqrt{2}) = -\sqrt{2}$, $\sigma(\sqrt{5}) = \sqrt{5}$, and exactly one $\tau \in G$ with $\tau(\sqrt{2}) = \sqrt{2}$, $\tau(\sqrt{5}) = -\sqrt{5}$; moreover $G = \{i_E, \sigma, \tau, \sigma\tau\}$ and these four elements are distinct. For rational numbers $x$, $y$, $z$, $w$,
   $$
   \begin{aligned}
   &\sigma(x + y\sqrt{2} + z\sqrt{5} + w\sqrt{10}) \\
   &\quad = x - y\sqrt{2} + z\sqrt{5} - w\sqrt{10}, \\
   &\tau(x + y\sqrt{2} + z\sqrt{5} + w\sqrt{10}) \\
   &\quad = x + y\sqrt{2} - z\sqrt{5} - w\sqrt{10}.
   \end{aligned}
   $$
2. (Shape of the group) $\sigma\tau = \tau\sigma$ and $\sigma\sigma = \tau\tau = (\sigma\tau)(\sigma\tau) = i_E$. Hence $G$ is abelian and $gg = i_E$ for every element $g$ of $G$.
3. (Subgroups) The subgroups of $G$ are exactly the five subgroups $\{i_E\}$, $H_1 = \{i_E, \sigma\}$, $H_2 = \{i_E, \tau\}$, $H_3 = \{i_E, \sigma\tau\}$ and $G$, and all of them are normal subgroups of $G$.
4. (Intermediate fields) The subfields of $E$ containing $\mathbb{Q}$ are exactly the five fields $E$, $\mathbb{Q}(\sqrt{5})$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{10})$, $\mathbb{Q}$, and they are distinct. In this order they are $E^{\{i_E\}}$, $E^{H_1}$, $E^{H_2}$, $E^{H_3}$, $E^G$, and $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{5})) = H_1$, $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{2})) = H_2$, $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{10})) = H_3$. Each of the five intermediate fields $K$ satisfies $g(K) = K$ for every $g \in G$, and $|\operatorname{Aut}(\mathbb{Q}(\sqrt{a})/\mathbb{Q})| = 2$ for $a \in \{2, 5, 10\}$.
5. (The field with $9$ elements) Let $L$, $\iota$, $\alpha$ be the setting of Kronecker's theorem built from $h = X^2 + [1]$ over $\mathbb{Z}_3$. Then $|\operatorname{Aut}(L/\iota(\mathbb{Z}_3))| = 2 = [L : \iota(\mathbb{Z}_3)]$, and the only subfields of $L$ containing $\iota(\mathbb{Z}_3)$ are $\iota(\mathbb{Z}_3)$ and $L$.
:::

## 직관

$E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$의 $\mathbb{Q}$ 위의 자기동형은 $\sqrt{2}$를 $X^2 - 2$의 근으로, $\sqrt{5}$를 $X^2 - 5$의 근으로 보내야 하므로 두 부호를 어떻게 바꾸는지로 정해지고, 그 가짓수는 많아야 $2 \times 2 = 4$입니다. 기본정리의 위수의 등식 $|G| = [E : \mathbb{Q}] = 4$가 네 가지가 모두 실제로 있다는 것을 알려 줍니다. 부호를 두 번 바꾸면 제자리이므로 모든 원소의 제곱이 항등함수입니다.

기본정리는 중간체를 찾는 일을 부분군을 찾는 일로 바꿉니다. 원소 $4$개인 이 군의 부분군은 눈으로 다 셀 수 있고, 원소 $2$개인 부분군 셋은 각각 $\sqrt{2}$, $\sqrt{5}$, $\sqrt{10}$ 가운데 하나를 고정하므로 그 고정체가 $\mathbb{Q}(\sqrt{5})$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{10})$입니다. 그래서 이 셋 말고 $\mathbb{Q}$ 위의 차수가 $2$인 중간체는 없다는 것까지 알 수 있습니다.

## 증명

:::idea
위수의 등식으로 $\mathbb{Q}(\sqrt{5})$와 $\mathbb{Q}(\sqrt{2})$ 위의 자기동형이 각각 둘이라는 것에서 $\sigma$, $\tau$를 얻고, 자기동형은 $\sqrt{2}$, $\sqrt{5}$의 상으로 정해지므로 $G$의 네 원소가 정해진다. 부분군은 라그랑주 정리로 세고, 중간체는 기본정리의 대응과 차수의 비교로 정한다.
:::

:::proof
**쓰는 사실.** "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "위수의 (n)"은 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (n), "기본정리의 (n)"은 [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 (n), "체의 확대의 예의 (n)"은 [[field-extension-examples|체의 확대의 예]]의 (n)이다. 체의 확대의 예의 (1)에 의해 $a \in \{2, 5, 10\}$이면 $[\mathbb{Q}(\sqrt{a}) : \mathbb{Q}] = 2$이고, 그 (2)에 의해 $[E : \mathbb{Q}] = 4$이다. [[square-root-exists|제곱근의 존재]]의 (1)에 의해 $0 < \sqrt{2}$이므로 [[order-properties-of-reals|실수의 순서의 성질]]의 (3)의 (ii)에 의해 $-\sqrt{2} < 0 < \sqrt{2}$, 곧 $\sqrt{2} \ne -\sqrt{2}$이고, 같은 이유로 $\sqrt{5} \ne -\sqrt{5}$이다. 제곱근의 존재의 (2)에 의해 $\sqrt{10} = \sqrt{2}\sqrt{5}$이다.

**1.** [[splitting-field-examples|분해체의 예]]의 (5)에 의해 $E$는 $\mathbb{Q}$ 위에서 $f$의 분해체이고 $f$의 $\mathbb{Q}$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르므로, 위수의 (1)에 의해 $|G| = 4$이다. $E[X]$에서 $X^2 - 2 = (X - \sqrt{2})(X + \sqrt{2})$이므로 [[splitting-field|분해체]]의 (1)의 (ii)에 의해 $E$ 안의 $X^2 - 2$의 근은 $\pm\sqrt{2}$뿐이고, $X^2 - 5$의 근도 $\pm\sqrt{5}$뿐이다. $g \in G$이면 [[automorphisms-permute-roots|자기동형과 근의 치환]]의 (1)의 (ii)에 의해 $g(\sqrt{2}) \in \{\sqrt{2}, -\sqrt{2}\}$, $g(\sqrt{5}) \in \{\sqrt{5}, -\sqrt{5}\}$이다. 또 $E = \mathbb{Q}(\sqrt{2}, \sqrt{5})$이므로 자기동형군의 (4)의 (iii)에 의해 $G$의 원소는 $\sqrt{2}$와 $\sqrt{5}$에서의 값으로 정해진다.

$K_5 = \mathbb{Q}(\sqrt{5})$는 중간체이고 [[tower-law|차수의 곱셈 공식]]의 (3)의 (i)에 의해 $4 = [E : K_5] \cdot 2$이므로 $[E : K_5] = 2$이다. 위수의 (2)에 의해 $|\operatorname{Aut}(E/K_5)| = 2$이므로 $i_E$가 아닌 $\sigma \in \operatorname{Aut}(E/K_5)$가 있다. $\sigma$는 $\sqrt{5}$를 고정하고, $\sigma(\sqrt{2}) = \sqrt{2}$이면 $\sigma$와 $i_E$가 $\sqrt{2}$, $\sqrt{5}$에서 같아 $\sigma = i_E$가 되므로 $\sigma(\sqrt{2}) = -\sqrt{2}$이다. 자기동형군의 (1)의 (iii)에 의해 $\sigma \in G$이다. 같은 방법으로 $K_2 = \mathbb{Q}(\sqrt{2})$에서 $\tau(\sqrt{2}) = \sqrt{2}$, $\tau(\sqrt{5}) = -\sqrt{5}$인 $\tau \in G$를 얻는다. 값으로 정해지므로 이런 $\sigma$, $\tau$는 각각 하나뿐이다.

$\sigma\tau(\sqrt{2}) = \sigma(\sqrt{2}) = -\sqrt{2}$이고, $\sigma\tau(\sqrt{5}) = \sigma(-\sqrt{5}) = -\sigma(\sqrt{5}) = -\sqrt{5}$이다. 그래서 네 원소 $i_E$, $\sigma$, $\tau$, $\sigma\tau$는 $(\sqrt{2}, \sqrt{5})$에서의 값의 쌍이 각각 $(\sqrt{2}, \sqrt{5})$, $(-\sqrt{2}, \sqrt{5})$, $(\sqrt{2}, -\sqrt{5})$, $(-\sqrt{2}, -\sqrt{5})$로 서로 다르므로 서로 다르다. 이 네 원소의 집합은 원소가 $4$개인 $G$의 부분집합이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $G$와 같다.

$\sigma$는 유리수를 고정하는 환 준동형이고 $\sigma(\sqrt{10}) = \sigma(\sqrt{2})\sigma(\sqrt{5}) = -\sqrt{10}$이므로, $\sigma(x + y\sqrt{2} + z\sqrt{5} + w\sqrt{10}) = x - y\sqrt{2} + z\sqrt{5} - w\sqrt{10}$이다. $\tau(\sqrt{10}) = \sqrt{2}(-\sqrt{5}) = -\sqrt{10}$이므로 $\tau$의 식도 같다.

**2.** $\tau\sigma(\sqrt{2}) = \tau(-\sqrt{2}) = -\sqrt{2}$, $\tau\sigma(\sqrt{5}) = \tau(\sqrt{5}) = -\sqrt{5}$이므로 $\tau\sigma$와 $\sigma\tau$는 $\sqrt{2}$, $\sqrt{5}$에서 같고, 1에 의해 $\tau\sigma = \sigma\tau$이다. $\sigma\sigma(\sqrt{2}) = \sigma(-\sqrt{2}) = \sqrt{2}$, $\sigma\sigma(\sqrt{5}) = \sqrt{5}$이므로 $\sigma\sigma = i_E$이고, 같은 계산으로 $\tau\tau = i_E$이다. 군의 결합법칙과 $\tau\sigma = \sigma\tau$에 의해 $(\sigma\tau)(\sigma\tau) = (\sigma\sigma)(\tau\tau) = i_E$이다. $G$의 네 원소가 $i_E$, $\sigma$, $\tau$, $\sigma\tau$이고 $\sigma$와 $\tau$가 교환되므로 $G$의 어느 두 원소도 교환된다.

**3.** [[lagrange-theorem|라그랑주 정리]]의 (1)에 의해 $G$의 부분군의 원소의 개수는 $4$의 양의 약수 $1$, $2$, $4$ 가운데 하나이다. 원소가 $1$개이면 [[subgroup|부분군]]의 (1)에 의해 $\{i_E\}$이고, $4$개이면 유한집합의 부분집합의 (2)에 의해 $G$이다. 원소가 $2$개이면 $i_E$와 $i_E$가 아닌 한 원소 $g$로 된 $\{i_E, g\}$이다. 거꾸로 $g \in \{\sigma, \tau, \sigma\tau\}$이면 $gg = i_E$이므로 $\{i_E, g\}$는 곱에 대해 닫혀 있고 $g^{-1} = g$이며, [[subgroup-criteria|부분군의 판정법]]의 (1)에 의해 부분군이다. 따라서 부분군은 정확히 다섯이다. 2에 의해 $G$는 아벨군이므로 [[normal-subgroup|정규부분군]]의 (3)에 의해 모두 정규부분군이다.

**4.** 기본정리의 (1)에 의해 중간체 전체는 부분군 다섯의 고정체이고, 다섯 부분군이 서로 다르므로 그 고정체도 서로 다르다. 고정체의 (1)에 의해 $E^{\{i_E\}} = E$이고, 위수의 (3)에 의해 $E^G = \mathbb{Q}$이다. $H_1$의 두 원소는 유리수와 $\sqrt{5}$를 고정하므로, [[simple-algebraic-extension|단순 대수적 확대]]의 (1)에 의해 $\mathbb{Q}(\sqrt{5}) \subseteq E^{H_1}$이다. 라그랑주 정리의 (1)에 의해 $[G : H_1] = 2$이고, 기본정리의 (3)에 의해 $[E^{H_1} : \mathbb{Q}] = 2 = [\mathbb{Q}(\sqrt{5}) : \mathbb{Q}]$이다. [[subfield|부분체]]의 (5)의 (i)에 의해 $\mathbb{Q}(\sqrt{5})$는 체 $E^{H_1}$의 부분체이므로, [[extension-field|확대체]]의 (2)의 (iii)에 의해 $E^{H_1} = \mathbb{Q}(\sqrt{5})$이다. 같은 방법으로 $\tau$가 $\sqrt{2}$를 고정하므로 $E^{H_2} = \mathbb{Q}(\sqrt{2})$이고, $\sigma\tau(\sqrt{10}) = (-\sqrt{2})(-\sqrt{5}) = \sqrt{10}$이므로 $E^{H_3} = \mathbb{Q}(\sqrt{10})$이다. 기본정리의 (1)에 의해 $\operatorname{Aut}(E/E^{H_i}) = H_i$이다. 3에 의해 모든 부분군이 정규부분군이므로 기본정리의 (4)에 의해 다섯 중간체는 모두 (4)의 (i)을 만족하고, 그 (iv)에 의해 $|\operatorname{Aut}(\mathbb{Q}(\sqrt{a})/\mathbb{Q})| = [\mathbb{Q}(\sqrt{a}) : \mathbb{Q}] = 2$이다.

**5.** [[splitting-field-examples|분해체의 예]]의 (3)과 (1)의 (i), (ii)에 의해 $h^{\iota}$는 $\iota(\mathbb{Z}_3)$ 위에서 기약이고, $L$은 $\iota(\mathbb{Z}_3)$ 위에서 $h^{\iota}$의 분해체이며 $[L : \iota(\mathbb{Z}_3)] = 2$이고, $h^{\iota}$는 $L$에서 근이 서로 다르다. [[evaluation-homomorphism|대입 준동형]]의 (3)의 (i)에 의해 $h^{\iota}$는 모닉이므로 [[irreducible-polynomial|기약 다항식]]의 (3)의 (iv)에 의해 그 모닉 기약 인수는 $h^{\iota}$ 자신뿐이고, 설정의 가정이 성립한다. 위수의 (1)에 의해 $|\operatorname{Aut}(L/\iota(\mathbb{Z}_3))| = 2$이다. 라그랑주 정리의 (1)에 의해 원소가 $2$개인 군의 부분군은 원소가 $1$개이거나 $2$개이므로 3에서와 같이 자명한 부분군과 군 자신뿐이고, 기본정리의 (1)에 의해 중간체는 그 고정체 $L$과, 위수의 (3)에 의해 $\iota(\mathbb{Z}_3)$의 둘이다.
:::

## 예시와 반례

:::example[$\sqrt{2} + \sqrt{5}$를 고정하는 자기동형]
$\gamma = \sqrt{2} + \sqrt{5}$라 합시다. (1)에 의해 $\sigma(\gamma) = -\sqrt{2} + \sqrt{5}$, $\tau(\gamma) = \sqrt{2} - \sqrt{5}$, $\sigma\tau(\gamma) = -\gamma$입니다. $\sqrt{2} \ne -\sqrt{2}$이므로 $\sigma(\gamma) \ne \gamma$이고, $\sqrt{5} \ne -\sqrt{5}$이므로 $\tau(\gamma) \ne \gamma$이며, $0 < \gamma$이므로 $-\gamma \ne \gamma$입니다. 따라서 $\gamma$를 고정하는 $G$의 원소는 $i_E$뿐이고, [[automorphism-group-of-extension|확대의 자기동형군]]의 (4)의 (iv)에 의해 $\operatorname{Aut}(E/\mathbb{Q}(\gamma)) = \{i_E\}$입니다. [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 (1)에 의해 $\mathbb{Q}(\gamma) = E^{\{i_E\}} = E$입니다. 곧 $\sqrt{2} + \sqrt{5}$ 하나를 붙여도 $E$ 전체가 나옵니다.
:::

:::counterexample[순환군이 아닌 $\operatorname{Aut}(E/\mathbb{Q})$]
$G$는 원소가 $4$개이지만 순환군이 아닙니다. $g \in G$이면 (2)에 의해 $gg = i_E$이므로 [[order-of-an-element|원소의 위수]]의 (2)에 의해 $\operatorname{ord}(g)$는 $2$를 나누고 $\operatorname{ord}(g) \le 2$입니다. [[order-of-cyclic-subgroup|순환 부분군의 위수]]의 (4)에 의해 $g$가 $G$의 생성원인 것은 $\operatorname{ord}(g) = 4$일 때뿐이므로 $G$에는 생성원이 없습니다.
:::

## 확인 질문

:::check[$\mathbb{Q}$를 포함하는 $\mathbb{Q}(\sqrt{2}, \sqrt{5})$의 부분체 가운데 $\mathbb{Q}$ 위의 차수가 $2$인 것은 몇 개인가?]
세 개, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{5})$, $\mathbb{Q}(\sqrt{10})$입니다. 그런 부분체는 중간체이고, (4)에 의해 중간체는 다섯입니다. 그 가운데 $\mathbb{Q}$ 위의 차수가 $2$인 것은 [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 (3)에 의해 $[G : H] = 2$인 부분군 $H$, 곧 원소가 $2$개인 $H_1$, $H_2$, $H_3$의 고정체입니다. $E$와 $\mathbb{Q}$의 차수는 $4$와 $1$입니다.
:::

:::check[$\operatorname{Aut}(E/\mathbb{Q}(\sqrt{10}))$의 원소는 무엇인가?]
$i_E$와 $\sigma\tau$입니다. (4)에 의해 $\operatorname{Aut}(E/\mathbb{Q}(\sqrt{10})) = H_3 = \{i_E, \sigma\tau\}$입니다. 실제로 $\sigma\tau$는 $\sqrt{2}$와 $\sqrt{5}$의 부호를 함께 바꾸므로 그 곱 $\sqrt{10}$을 고정하고, $\sigma$와 $\tau$는 $\sqrt{10}$을 $-\sqrt{10}$으로 보냅니다.
:::
