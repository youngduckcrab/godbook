---
title: 영역과 도함수가 0 인 함수
title_en: Regions and Functions with Zero Derivative
aliases: [영역, 연결인 열린집합, 도함수가 0 이면 상수, 실숫값 정칙함수는 상수, region, zero derivative implies constant]
kind: theorem
field: complex-analysis
msc: ["30A99"]
level: undergrad
summary: 연결인 열린집합을 영역이라 하고, 한 점에서 모든 점으로 가는 선분이 들어 있는 집합은 연결이라는 것으로 열린 원판과 복소평면 전체가 영역임을 보인다. 원판 위의 정칙함수의 도함수가 0 이면 가로·세로 두 선분을 따라 상수이고, 영역 위에서는 같은 값을 갖는 점의 집합이 열린집합이면서 닫힌집합이라는 것으로 상수이다. 도함수가 같은 두 함수, 실숫값 정칙함수, 켤레도 정칙인 함수에 쓴다.
requires: [set-operations, family-of-sets, real-number-arithmetic, order-properties-of-reals, absolute-value, interval, real-valued-function, derivative, derivative-and-monotonicity, complex-number, complex-field, modulus-of-complex-number, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, subspace-topology, metric-subspace-topology, subspace-and-continuity, connected-space, connected-subsets-of-reals, continuous-image-of-connected, union-of-connected-sets, complex-plane-as-metric-space, complex-triangle-inequality, continuity-of-complex-operations, complex-derivative, complex-derivative-rules, complex-differentiability-examples, cauchy-riemann-equations]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Constant Functions 절의 Proposition lem_constant, 연결이 필요한 예, Theorem derivative0 와 그 증명, source/sec_constantfcts.ptx:16–125; Elementary Topology of the Plane 절의 분리·연결·영역의 정의, Theorem connbysegments 와 그 앞뒤 문단, 원판의 예, source/sec_topologyintro.ptx:187–204, 359–408; 연습문제 ex_realimpliesconst, ex_fandconjfimpliesconst (source/exercises-chap2.ptx:407–431)"
    checked: original
    note: "출처는 영역(region)을 연결인 열린집합으로 정의하고(sec_topologyintro.ptx:199–200), 연결을 'ℂ 의 서로소인 열린집합 A, B 로 X ⊆ A, Y ⊆ B 인 분리된 두 공집합 아닌 집합의 합집합이 될 수 없다'로 정의한다(187–198줄). 이 항목은 위상수학 입문의 연결(부분공간 위상)을 쓴다. 출처 Theorem derivative0(sec_constantfcts.ptx:74–82)은 이 항목의 (3)과 같은 진술이다. 출처의 증명(83–125줄)은 가로·세로 선분 위에서 실수부와 허수부가 상수라는 것을 실함수판(Proposition lem_constant, 16–40줄)으로 보인 뒤, 영역의 두 점이 가로·세로 선분의 유한 개로 이어진다는 Theorem connbysegments(sec_topologyintro.ptx:365–371)를 쓴다. 출처는 그 정리의 증명이 위상의 준비를 더 요구한다고만 적고(359–363줄) 증명하지 않는다. 이 항목은 connbysegments 를 쓰지 않는다. 원판에서는 두 선분으로 직접 보이고((2)), 영역에서는 같은 값을 갖는 점의 집합이 열린집합이면서 그 여집합도 열린집합이라는 것과 연결의 정의로 보인다((3)). (1)의 원판이 연결이라는 것은 출처가 원판의 예(sec_topologyintro.ptx:387–408)에서 두 점이 두 선분으로 이어진다는 것과 connbysegments 로 보이는 것과 같은 결론이고, 이 항목은 중심에서의 선분의 합집합으로 보인다. (5)의 (i)은 출처 연습문제 ex_realimpliesconst(exercises-chap2.ptx:407–421), (ii)는 ex_fandconjfimpliesconst(422–431)와 같은 진술이다. 반례 '두 원판의 합집합 위의 함수'는 출처 sec_constantfcts.ptx:57–68 의 예(Re z > 0 이면 1, Re z < 0 이면 2 인 함수)와 같은 발상이다. 확인 질문 '모든 값의 실수부가 $0$인 정함수는 무엇인가?'는 출처 연습문제 ex_realimpliesconst 와 같은 발상이다. 예시 '도함수가 $2z + i$ 인 정함수'의 식 2z + i 는 출처 sec_limitsandcontinuity.ptx:31 에 복소함수의 예로 나온다(그곳에서는 함수 자신이다)."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시–리만 (4)의 약한 가정 검토, |z|² 의 경계 경우). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 함수 $\iota$, 실수를 복소수 자리에 쓰는 약속, $a + bi$ 꼴은 [[complex-field]], 절댓값 $|z|$는 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 연결 부분집합은 [[connected-space|연결공간]]의 것이고, $\mathbb{C}$의 부분집합에는 $(\mathbb{C}, d)$의 거리위상의 부분공간 위상을 준다. 복소 미분가능, 미분계수, 정칙함수, 도함수는 [[complex-derivative|복소 미분]]의 것이고, 편도함수는 [[cauchy-riemann-equations|코시–리만 방정식]]의 것이다. 함수 $\overline{f}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 것이다.

**영역.** $G \subseteq \mathbb{C}$가 **영역**(region)인 것은 정확히 $G$가 $(\mathbb{C}, d)$의 열린집합이고 $\mathbb{C}$의 연결 부분집합일 때이다. 연결 부분집합의 정의에 의해 공집합도 영역이다. 이 말은 함수의 정의역과 다른 낱말이다.

다음이 성립한다.

1. (선분과 연결)
   - (i) $T \subseteq \mathbb{C}$이고 $a \in T$라 하자. 모든 $z \in T$와 $0 \le s \le 1$인 모든 실수 $s$에서 $a + \iota(s)(z - a) \in T$이면 $T$는 $\mathbb{C}$의 연결 부분집합이다.
   - (ii) 복소수 $a$와 실수 $r > 0$에 대하여 열린 공 $B(a, r)$는 영역이다. $\mathbb{C}$는 영역이다.
2. (원판에서 도함수가 $0$) $a$가 복소수, $r$이 양의 실수이고 $f : B(a, r) \to \mathbb{C}$가 정칙함수이며 모든 $z \in B(a, r)$에서 $f'(z) = 0$이면, 모든 $z \in B(a, r)$에서 $f(z) = f(a)$이다.
3. (영역에서 도함수가 $0$) $G$가 영역이고 $f : G \to \mathbb{C}$가 정칙함수이며 모든 $z \in G$에서 $f'(z) = 0$이면 $f$는 상수이다. 곧 모든 $z, z' \in G$에서 $f(z) = f(z')$이다.
4. (도함수가 같은 두 함수) $G$가 영역이고 $f, g : G \to \mathbb{C}$가 정칙함수이며 모든 $z \in G$에서 $f'(z) = g'(z)$이면, 어떤 복소수 $C$가 있어 모든 $z \in G$에서 $f(z) = g(z) + C$이다.
5. (값이나 켤레에 조건이 있는 정칙함수) $G$가 영역이고 $f : G \to \mathbb{C}$가 정칙함수라 하자.
   - (i) $f$의 모든 값이 실수인 복소수이면 $f$는 상수이다.
   - (ii) $\overline{f}$도 정칙함수이면 $f$는 상수이다.
:::

:::english
Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, the convention for writing real numbers in place of complex numbers, and the form $a + bi$ are those of the entry on the field of complex numbers; the modulus $|z|$ is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Connected subsets are those of the entry on connected spaces, and subsets of $\mathbb{C}$ carry the subspace topology of the metric topology of $(\mathbb{C}, d)$. Complex differentiability, derivatives, holomorphic functions, and the derivative function are those of the entry on the complex derivative, and partial derivatives are those of the entry on the Cauchy–Riemann equations. The function $\overline{f}$ is that of the entry on the continuity of the complex operations.

**Regions.** $G \subseteq \mathbb{C}$ is a **region** exactly when $G$ is an open set of $(\mathbb{C}, d)$ and a connected subset of $\mathbb{C}$. By the definition of connected subsets, the empty set is also a region. This word is different from the domain of a function.

The following hold.

1. (Segments and connectedness)
   - (i) Let $T \subseteq \mathbb{C}$ and $a \in T$. If $a + \iota(s)(z - a) \in T$ for all $z \in T$ and all real $s$ with $0 \le s \le 1$, then $T$ is a connected subset of $\mathbb{C}$.
   - (ii) For a complex number $a$ and a real $r > 0$, the open ball $B(a, r)$ is a region. $\mathbb{C}$ is a region.
2. (Zero derivative on a disk) If $a$ is a complex number, $r$ a positive real number, and $f : B(a, r) \to \mathbb{C}$ a holomorphic function with $f'(z) = 0$ for all $z \in B(a, r)$, then $f(z) = f(a)$ for all $z \in B(a, r)$.
3. (Zero derivative on a region) If $G$ is a region and $f : G \to \mathbb{C}$ is a holomorphic function with $f'(z) = 0$ for all $z \in G$, then $f$ is constant. That is, $f(z) = f(z')$ for all $z, z' \in G$.
4. (Two functions with the same derivative) If $G$ is a region and $f, g : G \to \mathbb{C}$ are holomorphic functions with $f'(z) = g'(z)$ for all $z \in G$, then there is a complex number $C$ such that $f(z) = g(z) + C$ for all $z \in G$.
5. (Holomorphic functions with conditions on values or conjugates) Let $G$ be a region and $f : G \to \mathbb{C}$ a holomorphic function.
   - (i) If every value of $f$ is a real complex number, then $f$ is constant.
   - (ii) If $\overline{f}$ is also a holomorphic function, then $f$ is constant.
:::

## 직관

실함수에서 도함수가 $0$이면 상수라는 것은 평균값 정리에서 나오고, 정의역이 구간이라는 것이 중요합니다. 정의역이 두 구간으로 끊겨 있으면 각 구간에서 다른 상수일 수 있습니다. 복소함수에서는 구간의 자리를 영역, 곧 연결인 열린집합이 차지합니다. 아래 반례처럼 서로 떨어진 두 원판 위에서는 원판마다 다른 상수인 함수도 도함수가 $0$입니다.

증명은 두 단계입니다. 먼저 원판 안에서는 중심에서 어느 점으로든 가로로 한 번, 세로로 한 번 가는 길이 원판 안에 있고, 각 선분 위에서 실수부와 허수부는 도함수가 $0$인 실함수라 상수입니다((2)). 코시–리만 방정식이 실수축 방향과 허수축 방향의 편도함수를 $f'$의 실수부와 허수부로 주기 때문입니다. 다음으로 영역 전체에서는 "값이 $f(z_0)$인 점들"이 열린집합이고 "값이 $f(z_0)$이 아닌 점들"도 열린집합이라는 것을 (2)로 보입니다. 연결인 집합은 공집합이 아닌 두 열린집합으로 나뉘지 않으므로 앞의 집합이 전부입니다.

비유하면, 원판 하나 안에서는 물이 고르게 퍼져 높이가 같고, 영역은 그런 원판들이 끊김 없이 겹쳐 이어진 호수입니다. 호수가 둘로 떨어져 있으면 두 호수의 수면 높이는 다를 수 있습니다. 비유가 맞지 않는 곳은 증명이 원판을 하나씩 이어 가지 않고 열린집합과 연결의 정의로 한꺼번에 끝낸다는 것입니다.

## 증명

:::idea
(1)은 한 점에서 나가는 선분들이 연결이고 모두 그 점을 지나므로 합집합이 연결이라는 것이다. (2)는 코시–리만 방정식으로 가로·세로 선분 위의 실함수의 도함수가 $0$임을 보이고 실함수판을 쓴다. (3)은 $E = \{z \in G : f(z) = f(z_0)\}$와 $G - E$가 둘 다 열린집합이라는 것을 (2)로 보이고 연결의 정의를 쓴다.
:::

:::hint
(2)에서 $z \in B(a, r)$이면 $p = a + \iota(\operatorname{Re}(z - a))$로 두고 $a$에서 $p$로 가로로, $p$에서 $z$로 세로로 갑니다. 두 선분의 점과 $a$ 사이의 거리는 $|z - a|$ 이하입니다.
:::

:::hint
(3)에서 $E$의 점 $z_1$에서 $B(z_1, r) \subseteq G$인 공을 잡으면 (2)에 의해 그 공 위에서 $f = f(z_1) = f(z_0)$입니다. $G - E$의 점에서도 같은 방법을 씁니다.
:::

:::proof
"복소수체 (n)"은 [[complex-field]], "복소 절댓값 (n)"은 [[modulus-of-complex-number]], "순서 성질 (n)"은 [[order-properties-of-reals]], "미분 (n)"은 [[complex-derivative|복소 미분]], "CR (n)"은 [[cauchy-riemann-equations|코시–리만 방정식]]의 번호이다. 거리 (3)에 의해 $z \in B(a, r)$인 것은 정확히 $|z - a| < r$일 때이다([[complex-plane-as-metric-space|복소평면의 거리]]).

**1의 증명.** (i) $z \in T$마다 $\sigma_z(s) = a + \iota(s)(z - a)$로 정한 $\sigma_z : \mathbb{R} \to \mathbb{C}$는 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (2)($\iota$와 상수함수)와 (3)(상수배와 합)에 의해 연속이고, [[subspace-and-continuity|부분공간과 연속]]의 (2)에 의해 $[0, 1]$로의 제한도 연속이다. [[connected-subsets-of-reals|실수의 연결 부분집합]]의 (2)에 의해 $[0, 1]$은 연결이므로 [[continuous-image-of-connected|연결공간의 연속 상]]의 (1)에 의해 $S_z = \{a + \iota(s)(z - a) : 0 \le s \le 1\}$은 $\mathbb{C}$의 연결 부분집합이다. 가정에 의해 $S_z \subseteq T$이고, $s = 0$에서 $a \in S_z$, $s = 1$에서 $z \in S_z$이다. [[family-of-sets]]의 식으로 정한 집합족 $\mathcal{C} = \{S_z : z \in T\}$의 원소는 모두 $a$를 원소로 갖는 연결 부분집합이므로 [[union-of-connected-sets|연결집합의 합집합]]의 (1)에 의해 $\bigcup \mathcal{C}$는 연결 부분집합이다. 각 $S_z \subseteq T$이고 각 $z \in T$가 $S_z$에 속하므로([[family-of-sets]]의 (9)) $\bigcup \mathcal{C} = T$이다.

(ii) [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B(a, r)$는 열린집합이다. $z \in B(a, r)$이고 $0 \le s \le 1$이면 복소 절댓값 (3), (5)와 순서 성질 (4)의 (iii)에 의해 $|\iota(s)(z - a)| = s|z - a| \le |z - a| < r$이므로 $a + \iota(s)(z - a) \in B(a, r)$이고, $a \in B(a, r)$이다. (i)에 의해 $B(a, r)$는 연결이다. $\mathbb{C}$는 [[open-set-in-metric-space]]의 (1)에 의해 열린집합이고, $a = 0$으로 (i)의 조건이 바로 성립한다.

**2의 증명.** $u, v : B(a, r) \to \mathbb{R}$를 $f$의 실수부와 허수부라 하자. $B(a, r)$의 모든 점 $w$에서 $f$는 미분가능하고 $f'(w) = 0$이므로 CR (3)에 의해 $u_x(w) = v_y(w) = \operatorname{Re} f'(w) = 0$이고 $v_x(w) = -u_y(w) = \operatorname{Im} f'(w) = 0$이다. 다음을 먼저 본다.

- (가) $p$가 복소수이고 $m$이 $0$이 아닌 실수이며, $K$가 $0$과 $m$ 사이의 닫힌구간($m > 0$이면 $[0, m]$, $m < 0$이면 $[m, 0]$)이라 하자. 모든 $\tau \in K$에서 $p + \iota(\tau) \in B(a, r)$이면 $f(p + \iota(m)) = f(p)$이다. 모든 $\tau \in K$에서 $p + \iota(\tau) i \in B(a, r)$이면 $f(p + \iota(m) i) = f(p)$이다.

$\varphi(\tau) = u(p + \iota(\tau))$로 정한 $\varphi : K \to \mathbb{R}$는 CR (2)의 (i)에 의해 $K$의 모든 점에서 미분가능하고 미분계수가 $u_x(p + \iota(\tau)) = 0$이다. [[derivative-and-monotonicity|도함수와 단조성]]의 (1)에 의해 $\varphi$는 상수함수이고 $u(p + \iota(m)) = u(p)$이다. $v$도 같고, 복소수체 (4)에 의해 $f(p + \iota(m)) = f(p)$이다. 세로 방향은 CR (2)의 (ii)와 $u_y = v_y = 0$으로 같다.

$z \in B(a, r)$를 잡고 $x_1 = \operatorname{Re}(z - a)$, $y_1 = \operatorname{Im}(z - a)$, $p = a + \iota(x_1)$로 둔다. 복소수체 (4)에 의해 $z - a = \iota(x_1) + \iota(y_1) i$이므로 $z = p + \iota(y_1) i$이다.

- 가로: $x_1 = 0$이면 $p = a$이다. $x_1 \ne 0$이고 $\tau$가 $0$과 $x_1$ 사이의 닫힌구간의 원소이면 $|\tau| \le |x_1|$이고([[absolute-value]]의 (1)) 복소 절댓값 (6)에 의해 $|x_1| \le |z - a|$이므로 $|(a + \iota(\tau)) - a| = |\tau| < r$이다. (가)에 의해 $f(p) = f(a)$이다.
- 세로: $y_1 = 0$이면 $z = p$이다. $y_1 \ne 0$이고 $\tau$가 $0$과 $y_1$ 사이의 닫힌구간의 원소이면 $|\tau| \le |y_1|$이므로 $\tau^2 \le y_1^2$이고(순서 성질 (7)의 (ii)와 절댓값 (5)), 복소 절댓값 (1)에 의해 $|p + \iota(\tau) i - a|^2 = x_1^2 + \tau^2 \le x_1^2 + y_1^2 = |z - a|^2$이다. 순서 성질 (7)의 (iii)에 의해 $|p + \iota(\tau) i - a| \le |z - a| < r$이다. (가)에 의해 $f(z) = f(p)$이다.

따라서 $f(z) = f(a)$이다.

**3의 증명.** $G = \emptyset$이면 따질 점이 없다. $z_0 \in G$를 하나 잡고 $E = \{z \in G : f(z) = f(z_0)\}$로 둔다.

$E$는 $(\mathbb{C}, d)$의 열린집합이다. $z_1 \in E$이면 $G$가 열린집합이므로 $B(z_1, r) \subseteq G$인 $r > 0$이 있다. $B(z_1, r)$는 열린집합이므로 미분 (4)의 (i)에 의해 $f|_{B(z_1, r)}$은 정칙함수이고 도함수는 $f'$의 제한, 곧 영함수이다. (2)에 의해 $B(z_1, r)$의 모든 점 $z$에서 $f(z) = f(z_1) = f(z_0)$이므로 $B(z_1, r) \subseteq E$이다. 같은 방법으로 $G - E$도 열린집합이다. $z_1 \in G - E$이면 $B(z_1, r) \subseteq G$의 모든 점에서 $f(z) = f(z_1) \ne f(z_0)$이므로 $B(z_1, r) \subseteq G - E$이다.

[[subspace-topology]]의 정의에 의해 $G$의 부분집합 $U$가 $(\mathbb{C}, d)$의 열린집합이면 $U = U \cap G$는 부분공간 위상 $\mathcal{T}|_G$의 원소이고, [[metric-subspace-topology|거리공간의 부분공간 위상]]의 (1)에 의해 이것은 $G$에 준 위상이다. 따라서 $E$와 $G - E$는 $G$의 열린집합이고, $E \cap (G - E) = \emptyset$, $E \cup (G - E) = G$, $z_0 \in E$이다. $G - E \ne \emptyset$이면 $(E, G - E)$는 [[connected-space|연결공간]]의 정의의 분리이어서 $G$가 연결이라는 것에 어긋난다. 따라서 $G - E = \emptyset$, 곧 $E = G$이고, 모든 $z \in G$에서 $f(z) = f(z_0)$이다. 그러면 모든 $z, z' \in G$에서 $f(z) = f(z_0) = f(z')$이다.

**4의 증명.** [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 $f - g$는 정칙함수이고 도함수는 $f' - g'$, 곧 영함수이다. (3)에 의해 $f - g$는 상수이다. $G \ne \emptyset$이면 $z_0 \in G$를 하나 잡아 $C = f(z_0) - g(z_0)$으로 두면 모든 $z$에서 $f(z) - g(z) = C$이다. $G = \emptyset$이면 $C = 0$으로 두면 된다.

**5의 증명.** (i) [[complex-differentiability-examples|복소 미분가능하지 않은 함수의 예]]의 (1)에 의해 $f$의 도함수는 영함수이므로 (3)을 쓴다. (ii) 같은 항목의 (2)를 $G$의 각 점에 쓰면 $f'$은 영함수이므로 (3)을 쓴다. $\blacksquare$
:::

## 예시와 반례

:::example[도함수가 $2z + i$ 인 정함수]
정함수 $f$가 모든 $z$에서 $f'(z) = 2z + i$이고 $f(0) = 3$이면 $f(z) = z^2 + iz + 3$입니다. $g(z) = z^2 + iz$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)에 의해 정함수이고 $g'(z) = 2z + i$입니다. (1)의 (ii)에 의해 $\mathbb{C}$는 영역이므로 (4)에 의해 모든 $z$에서 $f(z) = g(z) + C$인 복소수 $C$가 있고, $z = 0$을 넣으면 $C = f(0) - g(0) = 3$입니다.
:::

:::counterexample[두 원판의 합집합 위의 함수]
$G = B(0, 1) \cup B(3, 1)$이고 $f(z) = 0$ ($|z| < 1$일 때), $f(z) = 1$ ($|z - 3| < 1$일 때)이라 합시다. 두 공은 만나지 않습니다. $|z| < 1$이고 $|z - 3| < 1$이면 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)에 의해 $3 = |z + (3 - z)| \le |z| + |z - 3| < 2$가 되기 때문입니다. 그래서 $f$는 $G$ 위에서 정해집니다. $G$는 [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (2)에 의해 열린집합입니다.

$f$의 두 공으로의 제한은 상수함수이므로 [[complex-derivative|복소 미분]]의 (5)에 의해 정칙함수이고 도함수는 영함수입니다. [[complex-derivative|복소 미분]]의 (4)의 (ii)에 의해 $f$는 정칙함수이고 $f'$은 영함수이지만, $f(0) = 0 \ne 1 = f(3)$이므로 $f$는 상수가 아닙니다. (3)의 결론이 성립하지 않으므로 $G$는 영역이 아닙니다. 곧 (3)에서 연결이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[모든 값의 실수부가 $0$인 정함수는 무엇인가?]
상수함수입니다. $f$가 그런 정함수이면 $g = -if$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 정함수이고, $f(z) = (\operatorname{Im} f(z)) i$이므로 $g(z) = \operatorname{Im} f(z)$는 실수인 복소수입니다. $\mathbb{C}$는 영역이므로 (5)의 (i)에 의해 $g$는 상수이고, $f = ig$도 상수입니다.
:::

:::check[$f$, $g$가 정함수이고 $f' = g'$, $f(0) = g(0)$이면 $f$와 $g$는 어떤 관계인가?]
같은 함수입니다. (4)에 의해 모든 $z$에서 $f(z) = g(z) + C$인 $C$가 있고, $z = 0$을 넣으면 $C = 0$이므로 모든 $z$에서 $f(z) = g(z)$입니다.
:::
