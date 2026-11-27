---
title: 일치 정리
title_en: Identity Theorem
aliases: [정칙함수의 일치 정리, 일치의 원리, 유일성 정리, identity theorem, identity principle, uniqueness theorem]
kind: theorem
field: complex-analysis
msc: ["30C15"]
level: undergrad
summary: "영역 G 위의 정칙함수 f 의 영점의 집합이 G 의 한 점을 집적점으로 가지면 f 는 G 에서 0 이다. 따라서 두 정칙함수가 같은 값을 갖는 점의 집합이 G 의 한 점을 집적점으로 가지거나, 공집합이 아닌 열린 부분집합에서 같으면 두 함수는 G 전체에서 같다. 증명은 원판에서 0 인 점의 집합과 그렇지 않은 점의 집합이 둘 다 열려 있다는 것과 G 의 연결성을 쓰고, 수열을 고르지 않는다."
requires: [order-properties-of-reals, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, power-of-a-complex-number, open-ball, open-ball-is-open, open-set-in-metric-space, complex-plane-as-metric-space, subspace-topology, metric-subspace-topology, connected-space, limit-of-complex-function, complex-derivative, complex-derivative-rules, zero-derivative-on-a-region, zeros-of-holomorphic-functions, periodicity-of-trigonometric-functions, derivative-of-complex-exponential]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Classification of Zeros and the Identity Principle 절의 Theorem uniquenessfunction 과 그 앞 문단, Corollary cor_uniquenessfunction 과 그 증명, source/sec_classifzeros.ptx:123–193; 8장 연습문제 prob_uniquenessfunctionopensets, source/exercises-chap8.ptx:198–214; 4장 연습문제 가운데 경로 위에서 같은 두 정칙함수를 묻는 것, source/exercises-chap4.ptx:741–751"
    checked: original
    note: "출처 Theorem uniquenessfunction(sec_classifzeros.ptx:131–141)은 영역 G 위의 정칙함수 f 가 G 안에서 수렴하는 서로 다른 점들의 수열 (a_n) 에서 0 이면 f 가 영함수라고 진술하고, Corollary cor_uniquenessfunction(146–153)은 두 함수판이다. 출처의 증명(155–192)은 X(어떤 원판에서 f = 0 인 점)와 Y(어떤 구멍 뚫린 원판에서 f ≠ 0 인 점)로 G 를 나누고, 두 집합이 열려 있다는 것은 연습문제 prob_uniquenessfunctionopensets(exercises-chap8.ptx:198–214)로 돌린 뒤, 수열의 극한이 Y 에 있을 수 없으므로 X 에 있다고 한다. 이 항목의 (1)과 (2)는 수열 대신 영점의 집합(같은 값을 갖는 점의 집합)의 집적점으로 진술하고, 증명은 출처의 X 와 그 여집합을 쓰는 같은 길이며, 두 집합이 열려 있다는 것을 증명 안에서 보인다. 출처 4장 연습문제(exercises-chap4.ptx:741–751)는 경로 위에서 같은 두 정칙함수가 그 안쪽에서 같다는 것을 묻는데, (2)를 쓰면 같은 결론이 나오는 물음이다."
  - ref: lebl-basic-analysis-2
    loc: "11.3.5 Identity theorem for analytic functions, Theorem 11.3.9 와 그 증명 (p.161); 11.3.6 Exercises, Exercise 11.3.3, 11.3.8 (p.162)"
    checked: original
    note: "출처 Theorem 11.3.9(p.161)는 열린 연결집합 U 위의 두 해석함수가 U 안에 집적점을 갖는 집합 E 에서 같으면 U 에서 같다고 진술한다. (2)는 이것을 같은 값을 갖는 점의 집합 전체로 진술한 것이다. 출처의 증명은 0 으로 가는 영이 아닌 점들의 수열을 잡아 앞의 보조정리로 계수가 같다고 하고 E 의 집적점 전체가 열리고 닫혀 있다고 한다. 이 항목은 수열을 쓰지 않는다. 출처 Exercise 11.3.8(p.162)은 U ∩ ℝ 에서 0 인 해석함수가 U 에서 0 임을 보이라는 것인데, 예시 '실수축 위에서 $z^2$과 같은 정함수'는 같은 발상이다. 출처 Exercise 11.3.3(p.162)은 ℂ 위의 해석함수가 각 B(0, n) 에서 영점을 유한 개만 갖는다는 것을 보이라는 것인데, (4)의 '영점의 집합의 집적점이 없다' 와 가까운 물음이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(최대 절댓값 원리의 평균값 증명 통독, 일치 정리의 수열 없는 분리 논법). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이며, $\mathbb{C}$의 부분집합의 집적점은 [[limit-of-complex-function|복소함수의 극한]]의 것이다. 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 것이고, 정칙함수는 [[complex-derivative|복소 미분]]의 것이며, 영점, 영점의 분류의 (가)·(나), 영점의 중복도는 [[zeros-of-holomorphic-functions|정칙함수의 영점]]의 것이다.

아래에서 $G$는 영역이고 $f, g : G \to \mathbb{C}$는 정칙함수이다.

1. (**일치 정리**) $Z = \{z \in G : f(z) = 0\}$이라 하자. $G$의 어떤 점 $z_0$이 $Z$의 집적점이면, $G$의 모든 $z$에서 $f(z) = 0$이다.
2. (두 함수) $E = \{z \in G : f(z) = g(z)\}$라 하자. $G$의 어떤 점이 $E$의 집적점이면, $G$의 모든 $z$에서 $f(z) = g(z)$이다.
3. (열린 부분집합) $U$가 공집합이 아닌 $(\mathbb{C}, d)$의 열린집합이고 $U \subseteq G$라 하자. $U$의 모든 $z$에서 $f(z) = 0$이면 $G$의 모든 $z$에서 $f(z) = 0$이다. $U$의 모든 $z$에서 $f(z) = g(z)$이면 $G$의 모든 $z$에서 $f(z) = g(z)$이다.
4. (영함수가 아닌 정칙함수의 영점) $f(w) \ne 0$인 $w \in G$가 있다고 하자. 그러면 $G$의 어느 점도 $Z = \{z \in G : f(z) = 0\}$의 집적점이 아니고, $f$의 모든 영점 $a$에서 영점의 분류의 (나)가 성립하며, 따라서 $a$의 중복도가 정해진다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$, and cluster points of subsets of $\mathbb{C}$ are those of the entry on limits of complex functions. Regions are those of the entry on regions and functions with zero derivative; holomorphic functions are those of the entry on the complex derivative; zeros, cases (a) and (b) of the classification of zeros, and the multiplicity of a zero are those of the entry on zeros of holomorphic functions.

Below, $G$ is a region and $f, g : G \to \mathbb{C}$ are holomorphic functions.

1. (**Identity theorem**) Let $Z = \{z \in G : f(z) = 0\}$. If some point $z_0$ of $G$ is a cluster point of $Z$, then $f(z) = 0$ for every $z$ in $G$.
2. (Two functions) Let $E = \{z \in G : f(z) = g(z)\}$. If some point of $G$ is a cluster point of $E$, then $f(z) = g(z)$ for every $z$ in $G$.
3. (Open subsets) Let $U$ be a nonempty open set of $(\mathbb{C}, d)$ with $U \subseteq G$. If $f(z) = 0$ for every $z$ in $U$, then $f(z) = 0$ for every $z$ in $G$. If $f(z) = g(z)$ for every $z$ in $U$, then $f(z) = g(z)$ for every $z$ in $G$.
4. (Zeros of a holomorphic function that is not the zero function) Suppose there is $w \in G$ with $f(w) \ne 0$. Then no point of $G$ is a cluster point of $Z = \{z \in G : f(z) = 0\}$, case (b) of the classification of zeros holds at every zero $a$ of $f$, and hence the multiplicity of $a$ is defined.
:::

## 직관

정칙함수의 영점 $a$에서는 둘 가운데 하나입니다. 둘레의 원판에서 함수가 $0$이거나, $a$ 둘레에 다른 영점이 없습니다. 앞의 경우인 점들을 모은 집합을 $X$라 하면, $X$의 점 가까이의 점도 $X$에 들고, $X$ 밖의 점 가까이의 점도 $X$ 밖에 있습니다. 곧 $X$와 그 나머지가 둘 다 열려 있습니다. 영역은 이렇게 두 열린 조각으로 나뉠 수 없으므로, $X$가 공집합이 아니면 $X$가 영역 전체입니다. 영점들이 $G$의 한 점으로 모여들면 그 점이 $X$에 들므로 $f$는 $G$ 전체에서 $0$입니다.

비유하면 하나로 이어진 호수의 한 곳이 얼어붙기 시작해 그 둘레가 모두 얼면, 얼음이 끊어질 곳이 없어 호수 전체가 얼어붙습니다. "하나로 이어진 호수"가 영역이 연결이라는 가정에, "한 곳의 둘레가 모두 언다"가 $X$가 열려 있다는 것에 해당합니다. 실제 호수에는 얼음이 멈추는 가장자리가 생길 수 있다는 점에서 비유가 맞지 않습니다. 정칙함수에서는 그런 가장자리가 없다는 것, 곧 $X$의 여집합도 열려 있다는 것이 이 정리의 내용입니다.

연결이라는 가정은 빼면 안 됩니다. 떨어진 두 원판의 합집합에서는 한 원판에서만 $0$인 정칙함수가 있습니다(아래 반례). 또 영점이 무한히 많다는 것만으로는 부족하고, 영점들이 $G$ 안의 점으로 모여들어야 합니다(아래 확인 질문).

## 증명

:::idea
어떤 원판에서 $f = 0$인 점의 집합 $X$와 그 나머지 $Y = G - X$가 둘 다 열린집합임을 영점의 분류와 고립된 영점으로 보이고, $z_0 \in X$를 쓴 뒤 $G$의 연결성으로 $Y = \emptyset$을 얻는다.
:::

:::hint
$a \in Y$에서 $f(a) \ne 0$이면 $a$ 둘레의 원판에서 $f$가 $0$이 아니고, $f(a) = 0$이면 $a$는 (가)가 아닌 영점이므로 (나)이고 고립된 영점입니다. 어느 경우든 그 원판의 점은 $X$에 들지 않습니다.
:::

:::hint
$X$의 점 $b$에서는 $b$ 자신이 그 원판에 들므로 $f(b) = 0$입니다.
:::

:::proof
"영점 (n)"은 [[zeros-of-holomorphic-functions|정칙함수의 영점]], "법칙 (n)"은 [[complex-derivative-rules|복소 미분의 법칙]], "극한 (n)"은 [[limit-of-complex-function|복소함수의 극한]]의 번호이다.

**1의 증명.** $B(a, r) \subseteq G$이고 $B(a, r)$의 모든 $z$에서 $f(z) = 0$인 실수 $r > 0$이 있는 $a \in G$ 전체의 집합을 $X$라 하고(이 $r$을 $a$의 반지름이라 부른다), $Y = G - X$를 둔다. $b \in X$이고 $r$이 그 반지름이면 $|b - b| = 0 < r$이므로 $b \in B(b, r)$이고 $f(b) = 0$이다. 곧 $X$의 점에서 $f$는 $0$이다.

$X$는 $(\mathbb{C}, d)$의 열린집합이다. $a \in X$이고 $r$이 그 반지름이라 하자. $b \in B(a, r)$이면, [[open-ball-is-open|열린 공은 열린집합]]의 (1)과 [[open-set-in-metric-space]]의 정의에 의해 $B(b, s) \subseteq B(a, r)$인 실수 $s > 0$이 있다. 그러면 $B(b, s) \subseteq G$이고 $B(b, s)$의 모든 점에서 $f = 0$이므로 $b \in X$이다. 따라서 $B(a, r) \subseteq X$이다.

$Y$는 $(\mathbb{C}, d)$의 열린집합이다. $a \in Y$라 하자.
- $f(a) \ne 0$이면, $f$는 $a$에서 미분가능하므로 법칙 (3)의 (i)에 의해 $B(a, r) \subseteq G$이고 $B(a, r)$의 모든 점에서 $f$가 $0$이 아닌 실수 $r > 0$이 있다. 위에 의해 $X$의 점에서는 $f$가 $0$이므로 $B(a, r)$의 점은 $X$에 들지 않는다. 따라서 $B(a, r) \subseteq Y$이다.
- $f(a) = 0$이면 $a$는 $f$의 영점이고, $a \notin X$이므로 영점 (1)의 (가)가 성립하지 않는다. 영점 (1)에 의해 (나)가 성립하고, 영점 (2)에 의해 $B(a, r) \subseteq G$이고 $0 < |z - a| < r$인 모든 $z$에서 $f(z) \ne 0$인 실수 $r > 0$이 있다. $b \in B(a, r)$이고 $b \ne a$이면 $f(b) \ne 0$이므로 $b \notin X$이고, $b = a$이면 $a \notin X$이다. 따라서 $B(a, r) \subseteq Y$이다.

$z_0 \in X$이다. $z_0 \in G$가 $Z$의 집적점이므로 영점 (4)에 의해 $f(z_0) = 0$이고 영점 (1)의 (가)가 성립한다. 곧 $B(z_0, r) \subseteq G$이고 그 위에서 $f = 0$인 $r > 0$이 있으므로 $z_0 \in X$이다.

$G$의 부분집합 $X$, $Y$는 $(\mathbb{C}, d)$의 열린집합이므로, [[subspace-topology]]의 정의에 의해 $X = X \cap G$와 $Y = Y \cap G$는 부분공간 위상의 원소이고, [[metric-subspace-topology|거리공간의 부분공간 위상]]의 (1)에 의해 이것은 $G$에 준 위상이다. $X \cap Y = \emptyset$, $X \cup Y = G$, $X \ne \emptyset$이다. $Y \ne \emptyset$이면 $(X, Y)$는 [[connected-space|연결공간]]의 정의의 분리이어서, $G$가 $\mathbb{C}$의 연결 부분집합이라는 것(영역의 정의)과 어긋난다. 따라서 $Y = \emptyset$, 곧 $X = G$이고, $G$의 모든 점에서 $f = 0$이다.

**2의 증명.** 법칙 (1)에 의해 $f - g : G \to \mathbb{C}$는 정칙함수이고, $f(z) - g(z) = 0$인 것은 정확히 $f(z) = g(z)$일 때이므로 $\{z \in G : (f - g)(z) = 0\} = E$이다. (1)을 $f - g$에 쓰면 $G$의 모든 $z$에서 $f(z) - g(z) = 0$이다.

**3의 증명.** $U \ne \emptyset$이므로 $a \in U$를 잡는다. 극한 (1)의 (ii)에 의해 $a$는 $U - \{a\}$의 집적점이다. 극한 (1)의 (i)에 의해 모든 실수 $r > 0$에 대하여 $z \in U$, $z \ne a$, $|z - a| < r$인 $z$가 있고, $U$의 모든 점에서 $f = 0$이므로 그 $z$는 $Z$에 든다. 같은 (1)의 (i)에 의해 $a \in G$는 $Z$의 집적점이고, (1)에 의해 $G$에서 $f = 0$이다. 두 함수의 문장은 이것을 $f - g$(법칙 (1))에 쓴 것이다.

**4의 증명.** $G$의 어떤 점이 $Z$의 집적점이면 (1)에 의해 $f(w) = 0$이어서 가정과 어긋난다. $a$가 $f$의 영점이고 영점 (1)의 (가)가 $r > 0$으로 성립한다고 하자. $B(a, r)$는 [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 열린집합이고 $a$를 원소로 가지므로, (3)에 의해 $G$에서 $f = 0$이고 $f(w) = 0$이어서 어긋난다. 따라서 영점 (1)에 의해 (나)가 성립하고, 영점의 중복도가 정해진다. $\blacksquare$
:::

## 예시와 반례

:::example[실수축 위에서 $z^2$과 같은 정함수]
정함수 $f$가 모든 실수 $x$에서 $f(x) = x^2$을 만족한다고 합시다(오른쪽은 실수 $x^2$을 $\iota$로 옮긴 것). $g(z) = z^2$은 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (i)에 의해 정함수이고, [[power-of-a-complex-number]]의 (5)에 의해 $g(\iota(x)) = \iota(x^2)$이므로 $E = \{z \in \mathbb{C} : f(z) = g(z)\}$는 $\iota(\mathbb{R})$을 포함합니다. 실수 $r > 0$마다 $z = \iota(r/2)$는 $E$의 원소이고 $z \ne 0$, $|z - 0| = r/2 < r$이므로([[modulus-of-complex-number]]의 (5), [[order-properties-of-reals]]의 (8)) [[limit-of-complex-function|복소함수의 극한]]의 (1)의 (i)에 의해 $0$은 $E$의 집적점입니다. $\mathbb{C}$는 영역이므로([[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (ii)) (2)에 의해 모든 복소수 $z$에서 $f(z) = z^2$입니다.
:::

:::counterexample[떨어진 두 원판 위에서 한쪽만 $0$인 정칙함수]
$G = B(0, 1) \cup B(3, 1)$로 두면 두 원판은 겹치지 않습니다. $|z| < 1$이고 $|z - 3| < 1$이면 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)에 의해 $3 = |3| \le |z| + |3 - z| < 2$가 되기 때문입니다. $f$를 $B(0, 1)$에서 $0$, $B(3, 1)$에서 $1$인 함수로 두면, 두 제한이 상수함수이므로 [[complex-derivative|복소 미분]]의 (5)와 (4)의 (ii)에 의해 $f$는 정칙함수입니다. $f$의 영점의 집합은 $B(0, 1)$이고, 열린집합 $B(0, 1)$의 점 $0$은 그 집적점입니다([[limit-of-complex-function|복소함수의 극한]]의 (1)의 (ii)). 그러나 $f(3) = 1$입니다. $G$는 열린집합이지만 영역이 아니어서 (1)의 가정을 만족하지 않습니다.
:::

## 확인 질문

:::check[모든 정수 $n$에서 $0$인 정함수는 영함수인가?]
그렇지 않을 수 있습니다. $f(z) = \exp(2\pi i z) - 1$은 [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (3)과 [[complex-derivative-rules|복소 미분의 법칙]]의 (1)에 의해 정함수이고, 정수 $n$에서 $2\pi n \in 2\pi\mathbb{Z}$이므로 [[periodicity-of-trigonometric-functions|삼각함수의 주기성]]의 (3)에 의해 $\exp(i \cdot 2\pi n) = 1$, 곧 $f(n) = 0$입니다. 그런데 같은 항목의 (1)에 의해 $f(1/2) = \exp(i\pi) - 1 = -2 \ne 0$입니다. (1)이 요구하는 것은 영점의 집합이 $G$의 한 점을 집적점으로 갖는 것입니다. 이 $f$에서는 (4)에 의해 영점의 집합의 집적점이 $\mathbb{C}$에 없습니다.
:::

:::check[영역 $G$ 위의 정칙함수 $f$, $g$가 모든 $z$에서 $f(z) g(z) = 0$이고 $g(w) \ne 0$인 $w \in G$가 있으면 $f$는?]
$G$에서 $f = 0$입니다. $g$는 $w$에서 미분가능하고 $g(w) \ne 0$이므로 [[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (i)에 의해 $B(w, r) \subseteq G$이고 그 위에서 $g \ne 0$인 $r > 0$이 있습니다. $B(w, r)$의 점 $z$에서는 $f(z) g(z) = 0$의 양변에 $g(z)^{-1}$을 곱해 $f(z) = 0$입니다. $B(w, r)$는 공집합이 아닌 열린집합이므로([[open-ball-is-open|열린 공은 열린집합]]의 (1)) (3)에 의해 $G$에서 $f = 0$입니다.
:::
