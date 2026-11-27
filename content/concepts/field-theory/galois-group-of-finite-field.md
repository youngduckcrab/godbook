---
title: 유한체의 갈루아 군
title_en: Galois Group of a Finite Field
aliases: [유한체의 자기동형군, 프로베니우스 자기동형, Galois group of a finite field, Frobenius automorphism]
kind: theorem
field: field-theory
msc: ["12E20", "12F10"]
level: undergrad
summary: "유한체 E 와 원소가 q 개인 부분체 F 에 대하여 k = [E : F] 이면 E 는 F 위에서 X^(q^k) − X 의 분해체이고 Aut(E/F) 는 원소가 k 개이다. a 를 a^q 로 보내는 Fr_q 가 Aut(E/F) 의 위수 k 인 원소여서 Aut(E/F) 는 Fr_q 가 생성하는 순환군이다. k 의 양의 약수 d 마다 q^d 제곱해도 제자리인 원소 전체가 중간체이고, 그 위의 자기동형군은 Fr_(q^d) 가 생성하며, 이것으로 중간체와 부분군이 모두 나온다."
requires: [set, function, inverse-function, function-composition, finite-set, number-of-elements-is-unique, subset-of-finite-set, prime-number, well-ordering-principle, mathematical-induction, divisibility, integer-cancellation, greatest-common-divisor, prime-power-divisors, group, subgroup, power-in-a-group, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, order-of-a-power, ring, ring-homomorphism, field, subfield, extension-field, finite-products-in-a-commutative-ring, characteristic-of-a-ring, polynomial-ring, splitting-field, separable-polynomial, automorphism-group-of-extension, fixed-field, order-of-galois-group, fundamental-theorem-of-galois-theory, frobenius-map, order-of-a-finite-field, existence-and-uniqueness-of-finite-fields, subfields-of-a-finite-field]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "23.1절 Field Automorphisms, Corollary 23.9 와 그 증명 (p.295); 23.5절 Exercises, 연습문제 3 (p.308); Appendix B Hints and Answers, 23.5.3 의 힌트 (p.334); 22.4절 Exercises, 연습문제 21 (p.290); 23.2절 The Fundamental Theorem, Theorem 23.23 (p.300–301)"
    checked: original
    note: "(1)과 (2)는 출처 Corollary 23.9(p.295) 'Let F be a finite field with a finite extension E such that [E : F] = k. Then G(E/F) is cyclic of order k' 이다. 출처의 증명은 'We can also assume that E is the splitting field of x^{p^m} − x over a subfield of order p' 로 E 를 소체 위의 분해체와 같은 것으로 보고 F 위의 분해체로 넘긴 뒤 Theorem 23.7 로 |G(E/F)| = k 를 얻고, σ(α) = α^{p^n} 이 F 를 고정한다는 것을 'F is the splitting field of x^{p^n} − x over the base field of order p' 로 보이며, σ^r (1 ≤ r < k) 이 항등이면 x^{p^{nr}} − x 가 p^m 개의 근을 가져야 한다는 것으로 위수를 얻는다. 이 항목은 F 위의 분해체를 유한체의 존재와 유일성 항목(existence-and-uniqueness-of-finite-fields)의 (7)에서 가져오고, Fr_q 가 F 를 고정한다는 것은 원소 q 개인 체의 모든 원소가 a^q = a 라는 것으로 보이며, 위수의 논법은 출처와 같다. 출처는 그 함수를 σ 로 쓰고, 이 항목은 프로베니우스 사상 항목의 Fr_q 를 쓴다. 출처 연습문제 22.4.21(p.290, GF(p^n) 의 프로베니우스 사상은 위수 n 인 자기동형이다)은 (2)를 F 가 소체일 때 본 것이다. (3)은 출처 Theorem 23.23(p.300–301, 갈루아 이론의 기본정리)을 유한체에 쓴 것이다. 출처 연습문제 23.5.3(p.308, GF(729) 의 GF(9) 위의 갈루아 군의 위수와 생성원)과 그 힌트(p.334)는 (2)를 k = 3, q = 9 에 쓴 것과 같은 대상이다. 예시 '원소가 $2^6$개인 체의 소체 위의 갈루아 대응' 은 (3)을 같은 방식으로 다른 체에 쓴 것이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예시의 약수 대응, 반례의 Fr₂). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]]는 [[field|가역원과 체]]의 뜻이고, 부분체, 유한 확대, 차수 $[E : F]$는 [[subfield|부분체]]와 [[extension-field|확대체]]의 것이다. 분해체는 [[splitting-field|분해체]], 모닉 기약 인수와 "근이 서로 다르다"는 [[separable-polynomial|근이 서로 다른 다항식]]의 것이다. $\operatorname{Aut}(E/F)$와 그 곱(합성), 항등원 $i_E$는 [[automorphism-group-of-extension|확대의 자기동형군]]의 것이고, 중간체는 [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 것이다. 거듭제곱 $\sigma^j$, 원소의 위수, $\langle \sigma \rangle$과 순환군은 [[power-in-a-group|군의 거듭제곱]], [[order-of-an-element|원소의 위수]], [[cyclic-subgroup|순환 부분군]]의 것이다. 유한체, 소체, 원소의 개수 $|A|$는 [[order-of-a-finite-field|유한체의 원소 개수]]와 [[number-of-elements-is-unique|원소의 개수]]의 것이고, $\operatorname{Fr}_q$는 [[frobenius-map|프로베니우스 사상]]의 것이며, 정수의 거듭제곱 $q^k$는 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 것이다.

**설정.** $E$가 유한체이고 $F$가 $E$의 부분체이며, $q = |F|$, $k = [E : F]$라 하자. 유한체의 원소 개수의 (1), (3), (4)에 의해 $p = \operatorname{char} E$는 소수이고, $q = p^m$인 자연수 $m$이 있으며, $E$는 $F$의 유한 확대이고 $k \ge 1$, $|E| = q^k$이다. 따라서 $0$ 이상인 모든 정수 $j$에서 $q^j = p^{mj}$이고, $E$의 $\operatorname{Fr}_{q^j}$가 정해진다.

1. (분해체와 위수) $E$는 $F$ 위에서 $X^{q^k} - X$의 분해체이고, $X^{q^k} - X$의 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다. $\operatorname{Aut}(E/F)$는 유한군이고 $|\operatorname{Aut}(E/F)| = k$이다.
2. (프로베니우스 사상이 생성한다) $\operatorname{Fr}_q \in \operatorname{Aut}(E/F)$이다. $0$ 이상인 모든 정수 $j$에서 군 $\operatorname{Aut}(E/F)$에서의 거듭제곱 $(\operatorname{Fr}_q)^j$는 $\operatorname{Fr}_{q^j}$이다. $\operatorname{Fr}_q$의 위수는 $k$이고, $\operatorname{Aut}(E/F) = \langle \operatorname{Fr}_q \rangle$이다. 곧 $\operatorname{Aut}(E/F)$는 원소가 $k$개인 순환군이다.
3. (갈루아 대응) $k$의 양의 약수 $d$마다 $k = d \cdot d'$인 자연수 $d'$을 잡고
   $$
   K_d = \{a \in E : a^{q^d} = a\}
   $$
   로 둔다($E$, $F$, $d$에 따라 정해지는 이 항목 안의 이름이다).
   - (i) $K_d$는 중간체이고, $|K_d| = q^d$, $[K_d : F] = d$, $[E : K_d] = d'$이다.
   - (ii) $\operatorname{Aut}(E/K_d) = \langle \operatorname{Fr}_{q^d} \rangle$이고, 이 군은 원소가 $d'$개이다.
   - (iii) 모든 중간체는 $k$의 양의 약수 $d$ 가운데 정확히 하나에 대한 $K_d$이고, $\operatorname{Aut}(E/F)$의 모든 부분군은 $k$의 양의 약수 $d$ 가운데 정확히 하나에 대한 $\langle \operatorname{Fr}_{q^d} \rangle$이다. $k$의 양의 약수 $d_1$, $d_2$에 대하여 $K_{d_1} \subseteq K_{d_2}$인 것은 정확히 $d_1 \mid d_2$일 때이다.
:::

:::english
Fields are in the sense of the entry on units and fields; subfields, finite extensions and the degree $[E : F]$ are those of the entries on subfields and extension fields. Splitting fields are those of the entry on splitting fields, and monic irreducible factors and "has distinct roots" those of the entry on polynomials with distinct roots. $\operatorname{Aut}(E/F)$, its product (composition) and the identity $i_E$ are those of the entry on the automorphism group of an extension, and intermediate fields are those of the entry on the order of the Galois group of a splitting field. Powers $\sigma^j$, orders of elements, $\langle \sigma \rangle$ and cyclic groups are those of the entries on powers in a group, the order of an element and cyclic subgroups. Finite fields, prime subfields and the number of elements $|A|$ are those of the entries on the number of elements of a finite field and on the number of elements; $\operatorname{Fr}_q$ is that of the entry on the Frobenius map, and integer powers $q^k$ are those of the entry on prime power divisors.

**Setting.** Let $E$ be a finite field, $F$ a subfield of $E$, $q = |F|$ and $k = [E : F]$. By (1), (3) and (4) of the entry on the number of elements of a finite field, $p = \operatorname{char} E$ is a prime, there is a natural number $m$ with $q = p^m$, $E$ is a finite extension of $F$, $k \ge 1$ and $|E| = q^k$. Hence $q^j = p^{mj}$ for every integer $j \ge 0$, and the map $\operatorname{Fr}_{q^j}$ of $E$ is defined.

1. (Splitting field and order) $E$ is a splitting field of $X^{q^k} - X$ over $F$, and every monic irreducible factor of $X^{q^k} - X$ over $F$ has distinct roots in $E$. $\operatorname{Aut}(E/F)$ is a finite group and $|\operatorname{Aut}(E/F)| = k$.
2. (The Frobenius map generates) $\operatorname{Fr}_q \in \operatorname{Aut}(E/F)$. For every integer $j \ge 0$, the power $(\operatorname{Fr}_q)^j$ in the group $\operatorname{Aut}(E/F)$ is $\operatorname{Fr}_{q^j}$. The order of $\operatorname{Fr}_q$ is $k$, and $\operatorname{Aut}(E/F) = \langle \operatorname{Fr}_q \rangle$; that is, $\operatorname{Aut}(E/F)$ is a cyclic group with $k$ elements.
3. (Galois correspondence) For each positive divisor $d$ of $k$, take the natural number $d'$ with $k = d \cdot d'$ and put
   $$
   K_d = \{a \in E : a^{q^d} = a\}
   $$
   (a name local to this entry, depending on $E$, $F$ and $d$).
   - (i) $K_d$ is an intermediate field, $|K_d| = q^d$, $[K_d : F] = d$ and $[E : K_d] = d'$.
   - (ii) $\operatorname{Aut}(E/K_d) = \langle \operatorname{Fr}_{q^d} \rangle$, and this group has $d'$ elements.
   - (iii) Every intermediate field is $K_d$ for exactly one positive divisor $d$ of $k$, and every subgroup of $\operatorname{Aut}(E/F)$ is $\langle \operatorname{Fr}_{q^d} \rangle$ for exactly one positive divisor $d$ of $k$. For positive divisors $d_1$, $d_2$ of $k$, $K_{d_1} \subseteq K_{d_2}$ if and only if $d_1 \mid d_2$.
:::

## 직관

유한체 $E$에서 원소가 $q$개인 부분체 $F$의 원소는 모두 $a^q = a$를 만족합니다. 그래서 "$q$제곱하기" $\operatorname{Fr}_q$는 $F$를 움직이지 않는 $E$의 자기동형입니다. 이것을 $j$번 하면 $q^j$제곱하기이고, $E$의 원소는 모두 $a^{q^k} = a$를 만족하므로 $k$번 하면 제자리로 돌아옵니다. $k$번보다 적게 해서 제자리로 돌아오려면 $E$의 $q^k$개 원소가 모두 차수가 더 낮은 $X^{q^r} - X$의 근이어야 하는데, 근은 차수보다 많을 수 없습니다.

한편 갈루아 군의 원소의 개수는 차수 $k$와 같습니다. 위수가 $k$인 원소가 있으므로 그 원소 하나로 군 전체가 다 나옵니다. 시계의 시침이 한 칸씩 움직여 열두 번에 제자리로 오는 것처럼, $\operatorname{Fr}_q$를 거듭하면 $E$의 모든 $F$-자기동형을 한 번씩 지나 $k$번에 항등함수로 돌아옵니다. 시침의 한 칸이 $\operatorname{Fr}_q$, 열두 칸이 $k$에 해당합니다.

순환군의 부분군은 그 위수의 약수마다 하나씩이고, 유한체의 중간체도 차수의 약수마다 하나씩이어서 기본정리의 대응이 약수끼리의 대응으로 보입니다. $K_d$를 고정하는 자기동형은 $q^d$제곱하기의 거듭제곱들입니다.

## 증명

:::idea
(1)은 유한체의 존재와 유일성의 (7)과 분해체의 갈루아 군의 위수이다. (2)는 프로베니우스 사상의 (2), (3)과 원소 $q$개인 체의 원소가 $a^q = a$를 만족한다는 것, 그리고 $X^{q^r} - X$의 근의 개수이다. (3)은 유한체의 부분체와 갈루아 이론의 기본정리이다.
:::

:::hint
(2)에서 $(\operatorname{Fr}_q)^r = i_E$이면 $E$의 모든 원소가 $X^{q^r} - X$의 근이다. 근은 몇 개 이하인가?
:::

:::hint
(3)의 (ii)에서 $\operatorname{Fr}_{q^d} = (\operatorname{Fr}_q)^d$는 $K_d$의 원소를 고정한다. $\langle (\operatorname{Fr}_q)^d \rangle$과 $\operatorname{Aut}(E/K_d)$의 원소의 개수를 비교한다.
:::

:::proof
**쓰는 사실.** "원소 개수의 (n)"은 [[order-of-a-finite-field|유한체의 원소 개수]]의 (n), "프로베니우스의 (n)"은 [[frobenius-map|프로베니우스 사상]]의 (n), "존재의 (n)"은 [[existence-and-uniqueness-of-finite-fields|유한체의 존재와 유일성]]의 (n), "부분체의 (n)"은 [[subfields-of-a-finite-field|유한체의 부분체]]의 (n), "자기동형군의 (n)"은 [[automorphism-group-of-extension|확대의 자기동형군]]의 (n), "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n)이다. 정수의 순서는 [[prime-number]]의 (Z1)–(Z3)과 [[well-ordering-principle]]의 (Z5)–(Z7), (L1)을 쓰고, 정수의 소거는 [[integer-cancellation|정수의 소거 법칙]]의 (2)이다.

**설정의 확인.** 원소 개수의 (4)에 의해 $F$는 유한체이고 $\operatorname{char} F = \operatorname{char} E = p$이며, $E$는 $F$의 유한 확대이고 $|E| = |F|^{[E : F]} = q^k$이다. 원소 개수의 (3)을 $F$에 쓰면 $q = p^m$인 자연수 $m$이 있다. [[extension-field|확대체]]의 (2)의 (i)에 의해 $k \ge 1$이다. 거듭제곱의 (1)의 (iii)에 의해 $q^j = (p^m)^j = p^{mj}$이다.

**1의 증명.** 존재의 (7)에 의해 $E$는 $F$ 위에서 $X^{|E|} - X = X^{q^k} - X$의 분해체이고, 그 $F$ 위의 모닉 기약 인수마다 $E$에서 근이 서로 다르다. [[order-of-galois-group|분해체의 갈루아 군의 위수]]의 (1)에 의해 $\operatorname{Aut}(E/F)$는 유한군이고 $|\operatorname{Aut}(E/F)| = [E : F] = k$이다.

**2의 증명.** ($\operatorname{Fr}_q$는 $\operatorname{Aut}(E/F)$의 원소이다.) $E$는 체이므로 정역이고([[field|가역원과 체]]의 (3)) 유한집합이므로, 프로베니우스의 (3)에 의해 $\operatorname{Fr}_q : E \to E$는 환 동형사상, 곧 $E$의 자기동형이다. $a \in F$이면 원소 개수의 (6)을 원소가 $q$개인 체 $F$에 써서 $a^q = a$이고, [[subfield|부분체]]의 (3)의 (iii)에 의해 이 거듭제곱은 $E$에서 계산해도 같다. 따라서 $\operatorname{Fr}_q$는 $F$의 원소를 고정하고 $\operatorname{Fr}_q \in \operatorname{Aut}(E/F)$이다.

(거듭제곱.) $j$에 대한 [[mathematical-induction|수학적 귀납법]](시작점 $0$)으로 $(\operatorname{Fr}_q)^j = \operatorname{Fr}_{q^j}$임을 보인다. [[power-in-a-group|군의 거듭제곱]]의 정의에 의해 $(\operatorname{Fr}_q)^0$은 항등원 $i_E$이고(자기동형군의 (1)), 프로베니우스의 (2)에 의해 $\operatorname{Fr}_{q^0} = \operatorname{Fr}_1 = i_E$이다. $j$에서 성립하면 군의 거듭제곱의 (2)와 자기동형군의 (1)의 (i)(곱은 합성)에 의해
$$
\begin{aligned}
(\operatorname{Fr}_q)^{j+1} &= (\operatorname{Fr}_q)^j \circ \operatorname{Fr}_q \\
&= \operatorname{Fr}_{p^{mj}} \circ \operatorname{Fr}_{p^m} \\
&= \operatorname{Fr}_{p^{mj+m}} = \operatorname{Fr}_{q^{j+1}}
\end{aligned}
$$
이다. 셋째 등호는 프로베니우스의 (2)이다.

(위수.) 원소 개수의 (6)에 의해 $E$의 모든 원소 $a$가 $a^{q^k} = a^{|E|} = a$를 만족하므로 $(\operatorname{Fr}_q)^k = \operatorname{Fr}_{q^k} = i_E$이다. $r$이 자연수이고 $(\operatorname{Fr}_q)^r = i_E$라 하자. 그러면 $E$의 모든 원소 $a$가 $a^{q^r} = a$를 만족한다. 존재의 (1)을 $p$, $mr$에 쓰면($mr \ge 1$, $\operatorname{char} E = p$) $\{a \in E : a^{q^r} = a\}$는 원소가 $q^r$개 이하인 유한집합이고, 그것이 $E$와 같으므로 $q^k = |E| \le q^r$이다. 만약 $r < k$이면 (Z1)에 의해 $r + 1 \le k$이고, $m \ge 1$이므로 (Z3)에 의해 $mr + m \le mk$이며, (Z7)과 (Z6)에 의해 $mr < mk$이고, 거듭제곱의 (2)에 의해 $p^{mr} < p^{mk}$, 곧 $q^r < q^k$이어서 (L1)에 의해 모순이다. 따라서 (Z5)에 의해 $k \le r$이다. [[order-of-an-element|원소의 위수]]의 정의(그 진술의 마지막 문장)에 의해 $\operatorname{Fr}_q$의 위수는 유한하고 $k$이다.

(생성.) [[cyclic-subgroup|순환 부분군]]의 (2)에 의해 $\langle \operatorname{Fr}_q \rangle \subseteq \operatorname{Aut}(E/F)$이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 $|\langle \operatorname{Fr}_q \rangle| = k = |\operatorname{Aut}(E/F)|$이다. [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $\langle \operatorname{Fr}_q \rangle = \operatorname{Aut}(E/F)$이다.

**3의 증명.** $n = mk$로 두면 $|E| = p^{n}$이고, 원소 개수의 (3)과 거듭제곱의 (2)에 의해 $n = [E : \mathbb{P}_E]$이다. 곧 부분체 항목의 설정의 $n$이 이 $mk$이고, 그 항목의 이름으로 $K_d = E_{md}$이다. $d$가 $k$의 양의 약수이고 $k = d \cdot d'$이면 $mk = (md) \cdot d'$이므로 $md \mid mk$이다.

(i) 부분체의 (2)에 의해 $K_d = E_{md}$는 원소가 $p^{md} = q^d$개인 $E$의 부분체이다. $F$는 원소가 $p^m$개인 $E$의 부분체이므로 부분체의 (2)에 의해 $F = E_m$이고, $m \mid md$이므로 부분체의 (3)에 의해 $F \subseteq K_d$이다. 곧 $K_d$는 중간체이다. 원소 개수의 (5)를 체 $K_d$와 그 부분체 $F$에 쓰면 $md = m \cdot [K_d : F]$이고, 정수의 소거에 의해 $[K_d : F] = d$이다. 같은 곳을 $E$와 그 부분체 $K_d$에 쓰면 $mk = md \cdot [E : K_d]$이고 $mk = md \cdot d'$이므로 $[E : K_d] = d'$이다.

(ii) (2)에 의해 $\operatorname{Fr}_{q^d} = (\operatorname{Fr}_q)^d \in \operatorname{Aut}(E/F)$이고, $K_d$의 정의에 의해 $\operatorname{Fr}_{q^d}$는 $K_d$의 원소를 고정하므로 $\operatorname{Fr}_{q^d} \in \operatorname{Aut}(E/K_d)$이다. 자기동형군의 (1)에 의해 $\operatorname{Aut}(E/K_d)$는 부분군이므로 순환 부분군의 (2)에 의해 $\langle \operatorname{Fr}_{q^d} \rangle \subseteq \operatorname{Aut}(E/K_d)$이다. $\operatorname{Fr}_q$의 위수가 $k = d \cdot d'$이므로 [[order-of-a-power|거듭제곱의 위수]]의 (4)에 의해 $(\operatorname{Fr}_q)^d$의 위수는 $d'$이고, 순환 부분군의 크기의 (3)에 의해 $|\langle \operatorname{Fr}_{q^d} \rangle| = d'$이다. 분해체의 갈루아 군의 위수의 (2)를 중간체 $K_d$에 쓰면 ((1)에 의해 그 항목의 설정이 $f = X^{q^k} - X$에서 성립한다) $|\operatorname{Aut}(E/K_d)| = [E : K_d] = d'$이다. 유한집합의 부분집합의 (2)에 의해 두 군은 같다.

(iii) $K$가 중간체이면 부분체의 (4)에 의해 $K = E_j$이고 $|K| = p^j$인 $n = mk$의 양의 약수 $j$가 있다. $F = E_m \subseteq E_j$이므로 부분체의 (3)에 의해 $m \mid j$이고, $j = m \cdot d$인 정수 $d$가 있다. $m \ge 1$이고 $j = md \ge 1$이므로 $d \le 0$이면 (Z2)에 의해 $md \le 0$이어서 모순이고, 따라서 $d \ge 1$이며((Z5), (Z1)), $j \mid mk$에서 $mk = md \cdot t$인 정수 $t$가 있으므로 정수의 소거에 의해 $k = d \cdot t$, 곧 $d \mid k$이다. 따라서 $K = E_{md} = K_d$이다. 그런 $d$는 하나뿐이다. $K_d = K_{e}$이면 (i)에 의해 $q^d = q^e$, 곧 $p^{md} = p^{me}$이고 거듭제곱의 (2)와 정수의 소거에 의해 $d = e$이다.

$H$가 $\operatorname{Aut}(E/F)$의 부분군이면, (1)에 의해 [[fundamental-theorem-of-galois-theory|갈루아 이론의 기본정리]]의 설정이 $f = X^{q^k} - X$에서 성립하고, 그 (1)에 의해 [[fixed-field|고정체]] $E^H$는 중간체이고 $H = \operatorname{Aut}(E/E^H)$이다. 앞 문단에 의해 $E^H = K_d$인 약수 $d$가 있고, (ii)에 의해 $H = \operatorname{Aut}(E/K_d) = \langle \operatorname{Fr}_{q^d} \rangle$이다. $\langle \operatorname{Fr}_{q^d} \rangle = \langle \operatorname{Fr}_{q^e} \rangle$이면 (ii)에 의해 원소의 개수가 $k = d \cdot d' = e \cdot e'$의 $d' = e'$이고, 정수의 소거에 의해 $d = e$이다.

마지막으로 $K_{d_1} = E_{md_1}$, $K_{d_2} = E_{md_2}$이므로 부분체의 (3)에 의해 $K_{d_1} \subseteq K_{d_2}$인 것은 정확히 $md_1 \mid md_2$일 때이다. $d_1 \mid d_2$이면 $md_1 \mid md_2$이고, 거꾸로 $md_2 = md_1 \cdot t$이면 정수의 소거에 의해 $d_2 = d_1 t$이다.
:::

## 예시와 반례

:::example[원소가 $2^6$개인 체의 소체 위의 갈루아 대응]
[[existence-and-uniqueness-of-finite-fields|유한체의 존재와 유일성]]의 (2)에 의해 원소가 $2^6 = 64$개인 체 $E$가 있습니다. $F = \mathbb{P}_E$로 두면 $q = 2$, $k = 6$입니다. (2)에 의해 $\operatorname{Aut}(E/\mathbb{P}_E)$는 $\operatorname{Fr}_2$가 생성하는 원소 $6$개인 순환군이고, 그 원소는 $i_E = \operatorname{Fr}_1$, $\operatorname{Fr}_2$, $\operatorname{Fr}_4$, $\operatorname{Fr}_8$, $\operatorname{Fr}_{16}$, $\operatorname{Fr}_{32}$입니다.

$6$의 양의 약수 $d = 1, 2, 3, 6$에 대하여 (3)이 주는 짝은 다음과 같습니다.

- $d = 1$: $K_1 = \mathbb{P}_E$(원소 $2$개), $\operatorname{Aut}(E/K_1) = \langle \operatorname{Fr}_2 \rangle$(원소 $6$개).
- $d = 2$: $K_2$(원소 $4$개), $\operatorname{Aut}(E/K_2) = \langle \operatorname{Fr}_4 \rangle = \{i_E, \operatorname{Fr}_4, \operatorname{Fr}_{16}\}$.
- $d = 3$: $K_3$(원소 $8$개), $\operatorname{Aut}(E/K_3) = \langle \operatorname{Fr}_8 \rangle = \{i_E, \operatorname{Fr}_8\}$.
- $d = 6$: $K_6 = E$, $\operatorname{Aut}(E/E) = \{i_E\}$.

$\operatorname{Fr}_{16} = (\operatorname{Fr}_2)^4$이고 $(\operatorname{Fr}_4)^2 = \operatorname{Fr}_{16}$, $(\operatorname{Fr}_4)^3 = \operatorname{Fr}_{64} = i_E$입니다. 중간체가 커질수록 그 위의 자기동형군은 작아집니다.
:::

:::counterexample[원소가 $4$개인 부분체를 고정하지 않는 $\operatorname{Fr}_2$]
(2)의 생성원은 $\operatorname{Fr}_p$가 아니라 $\operatorname{Fr}_q$입니다. $E$가 원소가 $16 = 2^4$개인 체이고(유한체의 존재와 유일성의 (2)), $F$가 원소가 $4$개인 $E$의 부분체라 합시다([[subfields-of-a-finite-field|유한체의 부분체]]의 (2)). $\operatorname{Fr}_2$는 $E$의 자기동형이지만, $\{a \in E : a^2 = a\}$는 유한체의 존재와 유일성의 (1)에 의해 원소가 $2$개 이하이므로 $F$의 네 원소를 모두 담을 수 없습니다. 곧 $a^2 \ne a$인 $a \in F$가 있고, $\operatorname{Fr}_2 \notin \operatorname{Aut}(E/F)$입니다. 여기서 $q = 4$, $k = 2$이고 $\operatorname{Aut}(E/F) = \{i_E, \operatorname{Fr}_4\}$입니다.
:::

## 확인 질문

:::check[원소가 $5^6$개인 체 $E$에서 $\operatorname{Aut}(E/\mathbb{P}_E)$의 원소는 몇 개이고, $(\operatorname{Fr}_5)^3$이 고정하는 원소는 몇 개인가?]
$6$개, $125$개입니다. (1)에 의해 $|\operatorname{Aut}(E/\mathbb{P}_E)| = 6$입니다. (2)에 의해 $(\operatorname{Fr}_5)^3 = \operatorname{Fr}_{125}$이고, 이것이 고정하는 원소 전체는 $K_3 = \{a \in E : a^{125} = a\}$이며 (3)의 (i)에 의해 원소가 $5^3 = 125$개입니다.
:::

:::check[$[E : F] = 4$이고 $|F| = q$이면 $\operatorname{Aut}(E/F)$의 생성원은 무엇인가?]
$\operatorname{Fr}_q$와 $\operatorname{Fr}_{q^3}$입니다. (2)에 의해 $\operatorname{Aut}(E/F)$는 위수가 $4$인 $\operatorname{Fr}_q$가 생성하는 순환군이고, [[order-of-a-power|거듭제곱의 위수]]의 (6)에 의해 $(\operatorname{Fr}_q)^j$($0 \le j \le 3$)가 생성원인 것은 정확히 $\gcd(j, 4) = 1$, 곧 $j = 1, 3$일 때입니다. (2)에 의해 $(\operatorname{Fr}_q)^3 = \operatorname{Fr}_{q^3}$입니다.
:::
