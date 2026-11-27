---
title: 유한체의 부분체
title_en: Subfields of a Finite Field
aliases: [유한체의 부분체의 격자, subfields of a finite field, subfield lattice of a finite field]
kind: theorem
field: field-theory
msc: ["12E20"]
level: undergrad
summary: "원소가 pⁿ 개인 유한체 E 의 부분체는 원소가 p^m 개이고 m 은 n 의 약수이다. 거꾸로 n 의 양의 약수 m 마다 원소가 p^m 개인 부분체가 정확히 하나 있고, 그것은 a 의 p^m 제곱이 a 인 원소 전체이다. 두 부분체 사이의 포함은 지수 사이의 나누어떨어짐과 같다."
requires: [set, function, injective-surjective-bijective, finite-set, number-of-elements-is-unique, subset-of-finite-set, disjoint-union-count, prime-number, well-ordering-principle, divisibility, prime-power-divisors, group, subgroup, power-in-a-group, order-of-an-element, cyclic-subgroup, order-of-cyclic-subgroup, order-of-a-power, ring, field, subfield, finite-products-in-a-commutative-ring, characteristic-of-a-ring, extension-field, frobenius-map, order-of-a-finite-field, finite-multiplicative-subgroup-is-cyclic, existence-and-uniqueness-of-finite-fields]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: "22.1절 Structure of a Finite Field, Theorem 22.7 과 그 증명 (p.280), Example 22.8 과 Figure 22.9 (p.280–281); 22.4절 Exercises, 연습문제 1, 2, 3 (p.289), 16, 23 (p.290); 21.1절 Extension Fields, Example 21.6 (p.262); 21.5절 Exercises, 연습문제 5 (p.276); Appendix B Hints and Answers, 23.5.3 의 힌트 (p.334)"
    checked: original
    note: "출처 Theorem 22.7(p.280)은 'Every subfield of the Galois field GF(p^n) has p^m elements, where m divides n. Conversely, if m | n for m > 0, then there exists a unique subfield of GF(p^n) isomorphic to GF(p^m)' 이다. (1)은 그 앞부분이고, 출처의 증명은 [E : K] = [E : F][F : K] 로 m | n 을 얻는다. 이 항목은 유한체의 원소 개수 항목(order-of-a-finite-field)의 (5)(|E| = |F|^{[E:F]} 와 지수 비교)를 쓴다. (2)는 그 뒷부분을 '원소가 p^m 개인 부분체가 정확히 하나 있고 그것은 a^{p^m} = a 인 원소 전체' 로 진술한 것이다. 출처의 증명은 'p^m − 1 divides p^n − 1. Consequently, x^{p^m−1} − 1 divides x^{p^n−1} − 1' 로 x^{p^m} − x 의 근이 모두 x^{p^n} − x 의 근임을 보이고 'Thus, GF(p^n) contains, as a subfield, a splitting field of x^{p^m} − x, which must be isomorphic to GF(p^m)' 로 끝난다. 이 항목은 원소의 개수를 곱셈군의 위수 p^m − 1 인 부분군으로 세고, 유일성은 원소가 p^m 개인 부분체의 원소가 모두 a^{p^m} = a 를 만족한다는 것으로 보인다. (3)과 (4)는 출처 Example 22.8 과 Figure 22.9(p.280–281, GF(p^{24}) 의 부분체의 격자)가 그림으로 보이는 것과 같은 내용이다. 예시 '원소가 $3^6$개인 체의 부분체' 는 같은 발상이고, 원소 3^6 = 729 개인 체와 그 원소 9 개인 부분체는 출처 부록의 연습문제 23.5.3 힌트(p.334, [GF(729) : GF(9)] = 3)에도 나온다. 확인 질문 '원소가 $2^{12}$개인 체의 부분체는 몇 개인가?' 는 출처 연습문제 22.4.3(p.289, GF(p^{30}) 의 부분체의 격자)과 같은 종류의 물음이다. 확인 질문 '원소가 $5^4$개인 체 $E$에서 $a^{25} = a$를 만족하는 원소는 몇 개인가?' 의 원소 25개인 부분체는 출처 연습문제 22.4.1(c)(p.289, [GF(625) : GF(25)])와 같은 대상이다. 반례 '원소가 $8$개인 체에서 $a^4 = a$를 만족하는 두 원소' 의 원소 8개인 체는 출처 Example 21.6(p.262)과 연습문제 21.5.5(p.276)에 나온다. 두 부분체의 교집합(예시의 마지막 문단)은 출처 연습문제 22.4.23(p.290)이 묻는 것과 같은 대상이다. 출처 연습문제 22.4.16(p.290, 유한체의 두 부분체가 동형이면 같다)은 (2)의 유일성에서 따른다. 출처 연습문제 22.4.1, 22.4.2(p.289)는 [GF(p^m) : GF(p^n)] 를 묻고, 이 항목의 (1)의 n = m·[E : F] 가 그 값을 준다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(예의 위수·생성원을 프로그램으로 재계산, (7) 경계값). 독립 검토 없음."
added: 2026-11-27
---

:::statement
[[field|체]], 가역원의 군 $E^{\times}$는 [[field|가역원과 체]]의 것이고, 표수는 [[characteristic-of-a-ring|환의 표수]], 부분체는 [[subfield|부분체]], 차수 $[E : F]$는 [[extension-field|확대체]]의 것이다. 유한체와 소체 $\mathbb{P}_E$는 [[order-of-a-finite-field|유한체의 원소 개수]]의 것이고, 원소의 개수 $|A|$는 [[number-of-elements-is-unique|원소의 개수]]의 것이다. 정수의 거듭제곱 $p^m$은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 것이고, 체의 원소의 거듭제곱 $a^k$는 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 것이다.

**설정.** $E$가 유한체이고 $p = \operatorname{char} E$이며, $n = [E : \mathbb{P}_E]$라 하자. 유한체의 원소 개수의 (1), (3)에 의해 $p$는 소수이고 $n \ge 1$이며 $|E| = p^n$이다. 자연수 $m$마다
$$
E_m = \{a \in E : a^{p^m} = a\}
$$
로 둔다($E$와 $m$에 따라 정해지는 이 항목 안의 이름이다).

1. (부분체의 원소 개수) $F$가 $E$의 부분체이면 $|F| = p^m$인 자연수 $m$이 있고, $n = m \cdot [E : F]$이다. 따라서 $m \mid n$이다.
2. (약수마다 하나) $m$이 $m \mid n$인 자연수이면 $E_m$은 원소가 $p^m$개인 $E$의 부분체이고, 원소가 $p^m$개인 $E$의 부분체는 $E_m$뿐이다. 특히 $E_1 = \mathbb{P}_E$이고 $E_n = E$이다.
3. (포함과 나누어떨어짐) $m_1$, $m_2$가 $n$의 양의 약수이면, $E_{m_1} \subseteq E_{m_2}$인 것은 정확히 $m_1 \mid m_2$일 때이다.
4. (부분체와 약수의 대응) $E$의 모든 부분체 $F$는 $n$의 양의 약수 $m$ 가운데 정확히 하나에 대하여 $F = E_m$이고, 그 $m$은 $|F| = p^m$인 수이다. 곧 $n$의 양의 약수 $m$에 $E_m$을 대응시키는 함수는 $n$의 양의 약수 전체의 집합에서 $E$의 부분체 전체의 집합으로의 전단사이다.
:::

:::english
Fields and the group of units $E^{\times}$ are those of the entry on units and fields; the characteristic is that of the entry on the characteristic of a ring, subfields that of the entry on subfields, and the degree $[E : F]$ that of the entry on extension fields. Finite fields and the prime subfield $\mathbb{P}_E$ are those of the entry on the number of elements of a finite field, and the number of elements $|A|$ is that of the entry on the number of elements. Integer powers $p^m$ are those of the entry on prime power divisors, and powers $a^k$ of field elements are those of the entry on finite products and powers in a commutative ring.

**Setting.** Let $E$ be a finite field, $p = \operatorname{char} E$ and $n = [E : \mathbb{P}_E]$. By (1) and (3) of the entry on the number of elements of a finite field, $p$ is a prime, $n \ge 1$ and $|E| = p^n$. For each natural number $m$ put
$$
E_m = \{a \in E : a^{p^m} = a\}
$$
(a name local to this entry, depending on $E$ and $m$).

1. (Number of elements of a subfield) If $F$ is a subfield of $E$, then there is a natural number $m$ with $|F| = p^m$, and $n = m \cdot [E : F]$. Hence $m \mid n$.
2. (One for each divisor) If $m$ is a natural number with $m \mid n$, then $E_m$ is a subfield of $E$ with $p^m$ elements, and $E_m$ is the only subfield of $E$ with $p^m$ elements. In particular $E_1 = \mathbb{P}_E$ and $E_n = E$.
3. (Inclusion and divisibility) If $m_1$, $m_2$ are positive divisors of $n$, then $E_{m_1} \subseteq E_{m_2}$ if and only if $m_1 \mid m_2$.
4. (Correspondence between subfields and divisors) Every subfield $F$ of $E$ equals $E_m$ for exactly one positive divisor $m$ of $n$, namely the number with $|F| = p^m$. That is, the function sending a positive divisor $m$ of $n$ to $E_m$ is a bijection from the set of positive divisors of $n$ to the set of subfields of $E$.
:::

## 직관

원소가 $p^n$개인 체의 부분체는 소체를 포함하고, 큰 체는 부분체 위의 벡터공간이므로 원소의 개수가 $|F|^{[E : F]}$입니다. 그래서 부분체의 원소 개수 $p^m$의 지수 $m$은 $n$을 나눕니다. 이것이 (1)입니다.

거꾸로 $m \mid n$이면, 원소가 $p^m$개인 부분체가 있다면 그 원소는 모두 $a^{p^m} = a$를 만족해야 합니다. 그래서 후보는 $E_m$ 하나뿐이고, 남은 일은 $E_m$에 원소가 정확히 $p^m$개 있음을 세는 것입니다. 곱셈군 $E^{\times}$는 원소가 $p^n - 1$개인 순환군이고 $p^m - 1$이 $p^n - 1$을 나누므로, 원소가 $p^m - 1$개인 부분군이 있고 그것이 $x^{p^m - 1} = 1$인 원소 전체입니다. 여기에 $0$을 더하면 $p^m$개입니다.

책장 칸에 비유할 수 있습니다. 칸의 크기가 $p^m$이고 전체가 $p^n$이면, 칸 크기의 지수가 전체 지수를 나눌 때만 빈틈 없이 칸이 들어가고, 그런 칸은 크기마다 하나씩 정해져 있습니다. 비유가 맞지 않는 곳도 있습니다. 부분체는 서로 겹칠 수 있고, 모든 부분체가 $\mathbb{P}_E$를 공유합니다. 포함 관계는 원소의 개수의 대소가 아니라 지수의 나누어떨어짐으로 정해집니다(아래 예시).

## 증명

:::idea
(1)은 유한체의 원소 개수의 (5)이다. (2)는 곱셈군이 순환군이라는 것으로 원소가 $p^m - 1$개인 부분군을 만들어 $E_m$의 원소를 세고, 유일성은 원소가 $p^m$개인 체의 원소가 모두 $a^{p^m} = a$를 만족한다는 것이다. (3)은 프로베니우스 사상의 (4)의 (iii)과 (1)이다.
:::

:::hint
(2)에서 $N = p^n - 1$, $d = p^m - 1$이라 하면 $d \mid N$이다. $E^{\times} = \langle a \rangle$이고 $N = d \cdot k$이면 $a^k$의 위수는 무엇인가?
:::

:::hint
$x \ne 0$이면 $x^{p^m} = x$인 것은 정확히 $x^{p^m - 1} = 1$일 때이다.
:::

:::proof
**쓰는 사실.** "원소 개수의 (n)"은 [[order-of-a-finite-field|유한체의 원소 개수]]의 (n), "프로베니우스의 (n)"은 [[frobenius-map|프로베니우스 사상]]의 (n), "곱의 (n)"은 [[finite-products-in-a-commutative-ring|가환환의 유한 곱과 거듭제곱]]의 (n), "거듭제곱의 (n)"은 [[prime-power-divisors|소수의 거듭제곱인 약수]]의 (n)이다. 정수의 순서는 [[prime-number]]의 (Z1), (Z2)와 [[well-ordering-principle]]의 (Z5)–(Z7)을 쓴다.

**1의 증명.** $F$가 $E$의 부분체라 하자. 원소 개수의 (4)에 의해 $F$는 유한체이고 $\operatorname{char} F = p$이다. 원소 개수의 (3)을 $F$에 쓰면 $m = [F : \mathbb{P}_F] \ge 1$이고 $|F| = p^m$이다. 원소 개수의 (5)에 의해 $n = m \cdot [E : F]$이고 $m \mid n$이다.

**2의 증명.** $m$이 $m \mid n$인 자연수라 하자.

($E_m$은 부분체이다.) 프로베니우스의 (4)의 (ii)를 체 $E$와 $q = p^m$에 쓰면 $E_m$은 $E$의 부분체이다.

($E_m$의 원소 개수.) $N = p^n - 1$, $d = p^m - 1$이라 하자. 거듭제곱의 (2)에 의해 $p^m \ge p \ge 2$이므로 $d \ge 1$이고, 같은 이유로 $N \ge 1$이다. 곱의 (11)의 (iii)을 정수 $p$와 $m \mid n$에 쓰면 $d \mid N$이므로 $N = d \cdot k$인 정수 $k$가 있다. $k \le 0$이면 (Z2)에 의해 $N = dk \le 0$이 되어 $N \ge 1$과 모순이므로 $k$는 자연수이다((Z5), (Z1)).

[[finite-multiplicative-subgroup-is-cyclic|체의 곱셈군의 유한 부분군은 순환군이다]]의 (4)에 의해 $E^{\times} = \langle a \rangle$이고 $\operatorname{ord}(a) = |E| - 1 = N$인 $a$가 있다. $k$는 $N$을 나누는 자연수이고 $N = k \cdot d$이므로 [[order-of-a-power|거듭제곱의 위수]]의 (4)에 의해 $\operatorname{ord}(a^k) = d$이다. $H = \langle a^k \rangle$라 하면 [[cyclic-subgroup|순환 부분군]]의 (1)에 의해 $H$는 $E^{\times}$의 부분군이고, [[order-of-cyclic-subgroup|순환 부분군의 크기]]의 (3)에 의해 원소가 $d$개인 유한집합이다. 곱셈군의 유한 부분군의 (3)을 $K = E$, $G = H$에 쓰면 $H = \{x \in E : x^d = 1\}$이다.

이제 $E_m = H \cup \{0\}$임을 보인다. $p^m \ge 1$이므로 곱의 (6)의 (v)에 의해 $0^{p^m} = 0$이고 $0 \in E_m$이다. $x \in E$이고 $x \ne 0$이라 하자. $p^m = d + 1$이므로 곱의 (6)의 (ii)에 의해 $x^{p^m} = x^d x$이다. $x^d = 1$이면 $x^{p^m} = x$이다. 거꾸로 $x^{p^m} = x$이면 $x^d x = 1 \cdot x$이고, 양변에 $x^{-1}$을 곱하면 $x^d = 1$이다. 따라서 $E_m - \{0\} = H$이고 $0 \notin H$이다($H \subseteq E^{\times}$). [[disjoint-union-count|서로소인 합집합의 원소 개수]]의 (1)에 의해 $|E_m| = |H| + |\{0\}| = d + 1 = p^m$이다.

(유일성.) $F$가 원소가 $p^m$개인 $E$의 부분체라 하자. 원소 개수의 (6)을 유한체 $F$에 쓰면 $F$의 모든 원소 $a$가 $a^{p^m} = a$를 만족하고, [[subfield|부분체]]의 (3)의 (iii)에 의해 이 거듭제곱은 $E$에서 계산해도 같다. 따라서 $F \subseteq E_m$이다. $|F| = |E_m| = p^m$이므로 [[subset-of-finite-set|유한집합의 부분집합]]의 (2)에 의해 $F = E_m$이다.

(특별한 경우.) 원소 개수의 (2)의 (ii)에 의해 $\mathbb{P}_E$는 원소가 $p = p^1$개인 $E$의 부분체이고, $1 \mid n$이므로 유일성에 의해 $E_1 = \mathbb{P}_E$이다. [[subfield|부분체]]의 (4)에 의해 $E$는 원소가 $p^n$개인 $E$의 부분체이므로 $E_n = E$이다.

**3의 증명.** $m_1 \mid m_2$이면 프로베니우스의 (4)의 (iii)에 의해 $E_{m_1} \subseteq E_{m_2}$이다. 거꾸로 $E_{m_1} \subseteq E_{m_2}$라 하자. (2)에 의해 둘 다 $E$의 부분체이고, 부분체의 (5)의 (i)에 의해 $E_{m_1}$은 체 $E_{m_2}$의 부분체이다. $E_{m_2}$는 원소가 $p^{m_2}$개인 유한체이고 $E_{m_1}$은 원소가 $p^{m_1}$개이므로, 원소 개수의 (5)를 체 $E_{m_2}$와 그 부분체 $E_{m_1}$에 쓰면 $m_1 \mid m_2$이다.

**4의 증명.** $F$가 $E$의 부분체이면 (1)에 의해 $|F| = p^m$이고 $m \mid n$인 자연수 $m$이 있으며, (2)의 유일성에 의해 $F = E_m$이다. $m'$이 $n$의 양의 약수이고 $F = E_{m'}$이면 (2)에 의해 $p^{m'} = |F| = p^m$이고 거듭제곱의 (2)에 의해 $m' = m$이다. 따라서 그런 약수는 정확히 하나이다. 이것은 약수 $m$에 $E_m$을 대응시키는 함수가 단사이고(서로 다른 약수는 원소 개수가 다른 부분체로 간다) 전사라는 것과 같으므로, 그 함수는 [[injective-surjective-bijective|전단사]]이다.
:::

## 예시와 반례

:::example[원소가 $3^6$개인 체의 부분체]
[[existence-and-uniqueness-of-finite-fields|유한체의 존재와 유일성]]의 (2)에 의해 원소가 $3^6 = 729$개인 체 $E$가 있습니다. $6$의 양의 약수는 $1, 2, 3, 6$이므로 (4)에 의해 $E$의 부분체는 정확히 넷, $E_1 = \mathbb{P}_E$(원소 $3$개), $E_2$(원소 $9$개), $E_3$(원소 $27$개), $E_6 = E$입니다.

(3)에 의해 $E_1$은 모든 부분체에 들어 있고, $E_2$와 $E_3$은 $E_6$에 들어 있습니다. 그러나 $2 \nmid 3$이므로 원소가 $9$개인 $E_2$는 원소가 $27$개인 $E_3$에 들어 있지 않습니다. 원소의 개수가 더 적다고 포함되는 것은 아닙니다.

$E_2 \cap E_3$은 [[subfield|부분체]]의 (5)의 (ii)에 의해 $E$의 부분체이므로 (4)에 의해 어떤 약수 $m$에 대한 $E_m$이고, (3)에 의해 $m \mid 2$이고 $m \mid 3$이므로 $m = 1$입니다. 곧 $E_2 \cap E_3 = \mathbb{P}_E$입니다.
:::

:::counterexample[원소가 $8$개인 체에서 $a^4 = a$를 만족하는 두 원소]
(2)의 가정 $m \mid n$이 없으면 $E_m$의 원소는 $p^m$개가 아닐 수 있습니다. $E$가 원소가 $8 = 2^3$개인 체이고 $m = 2$라 합시다. $E_2 = \{a \in E : a^4 = a\}$는 [[frobenius-map|프로베니우스 사상]]의 (4)의 (ii)에 의해 $E$의 부분체이므로 (4)에 의해 $E_1$이거나 $E_3 = E$입니다. [[existence-and-uniqueness-of-finite-fields|유한체의 존재와 유일성]]의 (1)에 의해 $E_2$의 원소는 $4$개 이하이므로 $E_2 \ne E$이고, 따라서 $E_2 = E_1 = \mathbb{P}_E = \{0, 1\}$입니다. 원소가 $2^2 = 4$개가 아니라 $2$개입니다.
:::

## 확인 질문

:::check[원소가 $2^{12}$개인 체의 부분체는 몇 개인가?]
$6$개입니다. $12$의 양의 약수는 $1, 2, 3, 4, 6, 12$이고, (4)에 의해 부분체는 약수와 하나씩 대응합니다. 원소의 개수는 차례로 $2$, $4$, $8$, $16$, $64$, $4096$입니다.
:::

:::check[원소가 $5^4$개인 체 $E$에서 $a^{25} = a$를 만족하는 원소는 몇 개인가?]
$25$개입니다. $25 = 5^2$이고 $2 \mid 4$이므로 (2)에 의해 $E_2 = \{a \in E : a^{25} = a\}$는 원소가 $5^2 = 25$개입니다.
:::
