---
title: 별 모양 열린집합
title_en: Star-Shaped Open Sets
aliases: [별 모양, 별 모양 집합, star-shaped, star-shaped set, star-shaped open set, star-shaped domain]
kind: definition
field: complex-analysis
msc: ["30"]
level: undergrad
summary: "열린집합 G 의 한 점 p 에서 G 의 모든 점으로 가는 선분이 G 안에 있으면 G 를 p 에 대해 별 모양이라 한다. 열린 원판과 복소평면이 별 모양이고 별 모양 열린집합은 영역이라는 것, p 와 두 점 z, w 의 볼록 결합이 모두 G 에 드는 것은 z 에서 w 로 가는 선분이 G 에 드는 것과 같다는 것, 그래서 z 를 중심으로 하고 G 에 드는 열린 공 안의 w 와 원판 안의 세 점에서는 늘 그렇다는 것을 증명한다."
requires: [function, image-and-preimage, real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, triangle-inequality, complex-number, complex-field, modulus-of-complex-number, open-ball, open-ball-is-open, open-set-in-metric-space, open-sets-of-a-metric-space, complex-plane-as-metric-space, path-in-the-complex-plane, zero-derivative-on-a-region]
sources:
  - ref: lebl-basic-analysis-2
    loc: "9.3절 Path independence, 9.3.1소절 Path independent integrals, Definition 9.3.5 와 그 앞 문단 (p.86), 그 뒤 문단 (p.87); 9.3.3소절 Exercise 9.3.4 (p.89); 8.1절 Vector spaces, linear mappings, and convexity, 8.1.4소절 Convexity 와 Proposition 8.1.20 (p.16); 8.1.5소절 Exercise 8.1.1 (p.18), Exercise 8.1.13, 8.1.14, 8.1.17 (p.19)"
    checked: original
    note: "출처 Definition 9.3.5(p.86)는 ℝⁿ 의 열린집합 U 와 p ∈ U 에 대하여, U 의 다른 모든 점 x 에서 선분 [p, x], 곧 t ∈ [0, 1] 인 (1 − t)p + tx 가 모두 U 에 들 때 U 를 p 에 대한 star-shaped domain 이라 하고, 어떤 p ∈ U 에 대해 그러하면 그냥 star-shaped 라 한다. 이 항목의 정의는 ℂ = ℝ × ℝ 에서 이것과 같다((1 − t)p + tz = p + t(z − p) = σ_{p,z}(t)). 출처의 정의는 U 가 열린집합이라는 것만 요구하므로 이 항목은 star-shaped domain 의 domain 을 '열린집합'으로 옮기고, Beck 이 연결인 열린집합에 쓰는 '영역'과 구별한다. 출처는 정의 바로 앞 문단(p.86)에서 공은 별 모양이라고 적고, 뒤 문단(p.87)에서 볼록이면 별 모양이지만 별 모양이 볼록일 필요는 없다고 적는다. 출처는 ℝⁿ 의 공이 볼록이라는 것을 Proposition 8.1.20(p.16)으로 두고 그 증명을 연습문제로 남긴다고 적으며, 연습문제 8.1.1(p.18)이 그것을 묻는다. (1)은 원판에 대한 같은 내용이고, 이 항목은 path-in-the-complex-plane 의 (2)로 증명한다. (2)는 출처 연습문제 9.3.4(p.89, 별 모양이면 경로연결)와 8.1.17(p.19, 볼록이면 연결)과 닮은 진술이다. 이 항목은 경로연결을 쓰지 않고 연결을 zero-derivative-on-a-region 의 (1)의 (i)로 보인다. 출처 연습문제 8.1.14(p.19)는 세 점의 볼록 껍질을 계산하게 한다. 이 항목은 볼록 껍질을 정의하지 않고 (3)의 볼록 결합의 꼴만 쓴다. 예시 '십자 모양의 열린집합'은 출처 p.87 의 '별 모양이 볼록일 필요는 없다'를 구체적인 집합으로 보인 것이고, 볼록인 두 띠의 합집합이 볼록이 아니라는 점에서 연습문제 8.1.13(p.19, 볼록 집합의 합집합이 볼록일 필요가 없음을 예로 보이기)과 같은 발상이다. 예시 '원점을 뺀 복소평면'은 출처 8.1.4소절(p.16)의 ℝ² − {0} 이 볼록이 아니라는 예(x 와 −x 의 중점이 0)와 같은 발상이다."
  - ref: beck-first-course-complex-analysis
    loc: "Elementary Topology of the Plane 절의 영역의 정의와 원판의 예, source/sec_topologyintro.ptx:187–201, 387–408; Antiderivatives 절의 Theorem thm_FTC1 의 증명, source/sec_antiderivatives.ptx:227–229; 4장 연습문제 가운데 볼록 영역에서 코시 적분 공식을 보이는 것, source/exercises-chap4.ptx:876–925; 1장 연습문제, source/exercises-chap1.ptx:818–822"
    checked: original
    note: "출처의 원본 64개 파일 전체에서 star, star-shaped, starlike, star-like 를 낱말로 찾으면 0건이다. 출처는 볼록 영역을 'z 와 w 가 G 에 있을 때마다 그 둘을 잇는 선분도 G 에 있는 영역'으로 정의한다(exercises-chap4.ptx:883–885). 출처의 원본 전체에서 convex 는 이 연습문제의 두 곳(883, 924줄)에 나온다. (5)의 선분이 열린 공 안에 든다는 것은 출처 Theorem thm_FTC1 의 증명이 'h 의 절댓값이 충분히 작으면 z 에서 z + h 로 가는 선분이 G 에 든다'고 쓰는 것(sec_antiderivatives.ptx:227–229)과 같은 내용이다. 출처는 영역(region)을 연결인 열린집합으로 정의한다(sec_topologyintro.ptx:199–200). 예시 '원점을 뺀 복소평면'은 출처의 원판의 예(sec_topologyintro.ptx:387–408)에서 중심을 뺀 원판의 두 점 −1/2 과 1/2 을 잇는 데 0 을 지날 수 없어 선분이 셋 필요하다는 것과 같은 발상이다. 확인 질문 '$B(0, 1) \\cup B(3/2, 1)$은 $3/4$에 대해 별 모양인가?'는 공통점이 있는 두 영역의 합집합이 영역이라는 1장 연습문제(exercises-chap1.ptx:818–822)와 대상이 닮았다(결론은 다르다)."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 표본 확인(정의의 양방향, 반례의 볼록 결합). 독립 검토 없음."
added: 2026-11-27
---

:::statement
함수는 [[function]], 상은 [[image-and-preimage]]의 것이다. 복소수, $\operatorname{Re}$, $\operatorname{Im}$, $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산, 함수 $\iota$와 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리, 열린 공 $B(a, r)$와 닫힌 공 $C(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 선분 경로 $\sigma_{z,w}$와 경로의 상은 [[path-in-the-complex-plane|경로]]의 것이고, 영역은 [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 것이다.

**별 모양.** $G$를 $(\mathbb{C}, d)$의 열린집합, $p$를 $G$의 점이라 하자. $G$가 **$p$에 대해 별 모양**(star-shaped with respect to $p$)인 것은 정확히 모든 $z \in G$에서 선분 경로 $\sigma_{p,z}$의 상이 $G$의 부분집합일 때, 곧 모든 $z \in G$와 $0 \le t \le 1$인 모든 실수 $t$에서 $p + t(z - p) \in G$일 때이다. 열린집합 $G$가 **별 모양 열린집합**(star-shaped open set)인 것은 정확히 $G$가 $G$의 어떤 점에 대해 별 모양일 때이다. 정의에 의해 별 모양 열린집합은 공집합이 아니다.

다음이 성립한다. 아래에서 $a$, $p$, $z$, $w$는 복소수이고 $r$, $\varepsilon$은 양의 실수이다.

1. (원판과 복소평면) 열린 공 $B(a, r)$는 그 모든 점에 대해 별 모양이고, 특히 $a$에 대해 별 모양이다. $\mathbb{C}$는 모든 복소수에 대해 별 모양이다. 따라서 $B(a, r)$와 $\mathbb{C}$는 별 모양 열린집합이다.
2. (영역) 별 모양 열린집합은 영역이다.
3. (볼록 결합과 세 변) 실수 $s$, $t$에 대하여
   $$
   \begin{aligned}
   &(1 - s - t)p + sz + tw \\
   &\quad = p + s(z - p) + t(w - p)
   \end{aligned}
   $$
   이다. $0 \le \tau \le 1$인 실수 $\tau$에 대하여, $(s, t)$가 $(\tau, 0)$, $(1 - \tau, \tau)$, $(0, 1 - \tau)$일 때 이 복소수는 각각 $\sigma_{p,z}(\tau)$, $\sigma_{z,w}(\tau)$, $\sigma_{w,p}(\tau)$이고, 이 세 쌍은 모두 $0 \le s$, $0 \le t$, $s + t \le 1$을 만족한다. $(s, t)$가 $(0, 0)$, $(1, 0)$, $(0, 1)$일 때 이 복소수는 각각 $p$, $z$, $w$이다.
4. (볼록 결합이 $G$에 드는 조건) $G$가 $p$에 대해 별 모양인 열린집합이라 하자. 다음 두 조건은 같은 말이다.
   - (i) $\sigma_{z,w}$의 상이 $G$의 부분집합이다.
   - (ii) $0 \le s$, $0 \le t$, $s + t \le 1$인 모든 실수 $s$, $t$에서 $(1 - s - t)p + sz + tw \in G$이다.
   
   이때 (3)에 의해 $\sigma_{p,z}$, $\sigma_{z,w}$, $\sigma_{w,p}$의 상은 모두 $G$의 부분집합이다.
5. (공 안의 점) $G$가 $p$에 대해 별 모양인 열린집합이고, $B(z, \varepsilon) \subseteq G$이며 $w \in B(z, \varepsilon)$이면 (4)의 (i)과 (ii)가 성립한다.
6. (원판 안의 세 점) $p$, $z$, $w$가 모두 $B(a, r)$의 원소이면, $0 \le s$, $0 \le t$, $s + t \le 1$인 모든 실수 $s$, $t$에서 $(1 - s - t)p + sz + tw \in B(a, r)$이다.
:::

:::english
Functions are those of the entry on functions, and images are those of the entry on images and preimages. Complex numbers, $\operatorname{Re}$, $\operatorname{Im}$, $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$, the function $\iota$, and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric of $\mathbb{C}$, open balls $B(a, r)$ and closed balls $C(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Segment paths $\sigma_{z,w}$ and images of paths are those of the entry on paths, and regions are those of the entry on regions and functions with zero derivative.

**Star-shaped.** Let $G$ be an open set of $(\mathbb{C}, d)$ and $p$ a point of $G$. $G$ is **star-shaped with respect to $p$** exactly when the image of the segment path $\sigma_{p,z}$ is a subset of $G$ for every $z \in G$, that is, when $p + t(z - p) \in G$ for every $z \in G$ and every real $t$ with $0 \le t \le 1$. An open set $G$ is a **star-shaped open set** exactly when $G$ is star-shaped with respect to some point of $G$. By the definition, a star-shaped open set is nonempty.

The following hold. Below, $a$, $p$, $z$, $w$ are complex numbers and $r$, $\varepsilon$ are positive real numbers.

1. (Disks and the plane) The open ball $B(a, r)$ is star-shaped with respect to each of its points, in particular with respect to $a$. $\mathbb{C}$ is star-shaped with respect to every complex number. Hence $B(a, r)$ and $\mathbb{C}$ are star-shaped open sets.
2. (Regions) A star-shaped open set is a region.
3. (Convex combinations and the three sides) For real numbers $s$, $t$,
   $$
   \begin{aligned}
   &(1 - s - t)p + sz + tw \\
   &\quad = p + s(z - p) + t(w - p).
   \end{aligned}
   $$
   For a real $\tau$ with $0 \le \tau \le 1$, when $(s, t)$ is $(\tau, 0)$, $(1 - \tau, \tau)$, $(0, 1 - \tau)$, this complex number is $\sigma_{p,z}(\tau)$, $\sigma_{z,w}(\tau)$, $\sigma_{w,p}(\tau)$ respectively, and all three pairs satisfy $0 \le s$, $0 \le t$, $s + t \le 1$. When $(s, t)$ is $(0, 0)$, $(1, 0)$, $(0, 1)$, this complex number is $p$, $z$, $w$ respectively.
4. (When the convex combinations lie in $G$) Let $G$ be an open set that is star-shaped with respect to $p$. The following two conditions are equivalent.
   - (i) The image of $\sigma_{z,w}$ is a subset of $G$.
   - (ii) $(1 - s - t)p + sz + tw \in G$ for all real $s$, $t$ with $0 \le s$, $0 \le t$, $s + t \le 1$.
   
   In that case, by (3), the images of $\sigma_{p,z}$, $\sigma_{z,w}$, $\sigma_{w,p}$ are all subsets of $G$.
5. (A point in a ball) If $G$ is an open set that is star-shaped with respect to $p$, $B(z, \varepsilon) \subseteq G$, and $w \in B(z, \varepsilon)$, then (i) and (ii) of (4) hold.
6. (Three points in a disk) If $p$, $z$, $w$ are all elements of $B(a, r)$, then $(1 - s - t)p + sz + tw \in B(a, r)$ for all real $s$, $t$ with $0 \le s$, $0 \le t$, $s + t \le 1$.
:::

## 직관

$p$에 등불을 하나 두었다고 생각해 봅시다. 빛은 곧게 나아가므로 $p$에서 $z$로 가는 선분이 모두 $G$ 안에 있으면 $z$는 그 등불에 비칩니다. $G$가 $p$에 대해 별 모양이라는 것은 $G$의 모든 점이 $p$의 등불 하나에 비친다는 것입니다. 비유의 "모든 점이 비친다"가 정의의 "모든 $z \in G$에서"에, 빛줄기가 선분 경로 $\sigma_{p,z}$의 상에 해당합니다. 비유가 맞지 않는 곳은 정의가 $G$가 열린집합이기를 함께 요구한다는 것입니다. 그래서 닫힌 원판은 중심의 등불에 모두 비치지만 이 정의의 별 모양 열린집합이 아닙니다(아래 확인 질문).

원판은 어느 점에 등불을 두어도 모두 비칩니다((1)). 아래 십자 모양의 예는 가운데의 $0$에 둔 등불에는 모두 비치지만, 팔 쪽의 점 $2$에 둔 등불에는 비치지 않는 점이 있습니다. 어느 쪽이든 모든 점이 $p$와 선분으로 이어지므로 $G$는 끊어지지 않은 한 덩어리, 곧 영역입니다((2)).

(4)는 $0 \le s$, $0 \le t$, $s + t \le 1$인 점들 $(1 - s - t)p + sz + tw$를 봅니다. 그림으로 그리면 $p$, $z$, $w$가 한 직선 위에 있지 않을 때 세 점을 꼭짓점으로 하는 삼각형의 둘레와 안쪽입니다. 증명에서 보듯 이 점들은 모두 $p$에서 $z$와 $w$ 사이의 선분 위의 어떤 점으로 가는 선분 위에 있습니다. 그래서 맞은편 변인 $z$와 $w$ 사이의 선분만 $G$에 들면 별 모양에 의해 나머지가 모두 $G$에 듭니다. $z$와 $w$가 $G$에 든다는 것만으로는 모자랄 수 있습니다(아래 반례). $w$가 $z$를 중심으로 하고 $G$에 드는 열린 공 안에 있으면 그 선분은 공 안에 있으므로 조건이 채워집니다((5)).

## 증명

:::idea
(1), (5), (6)은 열린 공 안의 두 점을 잇는 선분이 그 공 안에 있다는 것에서 나오고, (2)는 한 점에서 모든 점으로 가는 선분이 들어 있는 집합이 연결이라는 것이다. (4)는 $(1 - s - t)p + sz + tw$를 $p$에서 $z$와 $w$ 사이의 선분 위의 한 점 $u$로 가는 선분 위의 점으로 다시 쓰는 것이다.
:::

:::hint
(4)에서 $\tau = s + t$로 두고 $\tau > 0$이면 $u = \sigma_{z,w}(t/\tau)$를 봅니다. $p + \tau(u - p)$를 전개해 보세요.
:::

:::hint
(6)은 (1)로 $B(a, r)$가 $p$에 대해 별 모양임을 얻은 뒤 (4)를 씁니다.
:::

:::proof
"순서 성질 (n)"은 [[order-properties-of-reals]], "경로 (n)"은 [[path-in-the-complex-plane|경로]], "복소수체 (n)"은 [[complex-field]]의 번호이다. 실수를 복소수 자리에 쓴 식은 복소수체 (3)의 약속대로 읽고, 복소수의 계산은 복소수체 (1)의 체의 법칙과 (2)의 $\iota$의 성질로 한다. [[complex-plane-as-metric-space|복소평면의 거리]]의 (1)에 의해 $(\mathbb{C}, d)$는 거리공간이고, 그 (3)에 의해 $z \in B(a, r)$인 것은 정확히 $|z - a| < r$일 때이다. [[image-and-preimage]]의 (1)에 의해 $\sigma_{z,w}$의 상은 $\{z + t(w - z) : 0 \le t \le 1\}$이다.

**1의 증명.** [[open-ball-is-open|열린 공은 열린집합]]의 (1)에 의해 $B(a, r)$는 열린집합이다. $p$와 $z$가 $B(a, r)$의 원소이면 경로 (2)를 $c = a$, $\varepsilon = r$로 $(p, z)$에 쓰면 $\sigma_{p,z}$의 상은 $B(a, r)$의 부분집합이다. 따라서 $B(a, r)$는 그 모든 점 $p$에 대해 별 모양이고, [[open-ball]]의 (1)에 의해 $a \in B(a, r)$이므로 특히 $a$에 대해 별 모양이다. $\mathbb{C}$는 [[open-set-in-metric-space]]의 (1)에 의해 열린집합이고, $\sigma_{p,z}$가 $[0, 1]$에서 $\mathbb{C}$로 가는 [[function]]이므로 그 상은 $\mathbb{C}$의 부분집합이다.

**2의 증명.** $G$가 $p \in G$에 대해 별 모양인 열린집합이라 하자. $z \in G$이고 $0 \le s \le 1$이면 $p + \iota(s)(z - p) = \sigma_{p,z}(s)$는 $\sigma_{p,z}$의 상의 원소이므로 $G$의 원소이다. [[zero-derivative-on-a-region|영역과 도함수가 0 인 함수]]의 (1)의 (i)을 $T = G$, $a = p$로 쓰면 $G$는 $\mathbb{C}$의 연결 부분집합이다. $G$는 열린집합이므로 그 항목의 정의에 의해 영역이다.

**3의 증명.** 체의 법칙으로 $(1 - s - t)p + sz + tw = p - sp - tp + sz + tw = p + s(z - p) + t(w - p)$이다. 이 값을 $q(s, t)$라 하자. $0 \le \tau \le 1$이면
- $q(\tau, 0) = (1 - \tau)p + \tau z = p + \tau(z - p) = \sigma_{p,z}(\tau)$,
- $q(1 - \tau, \tau) = 0 \cdot p + (1 - \tau)z + \tau w = z + \tau(w - z) = \sigma_{z,w}(\tau)$,
- $q(0, 1 - \tau) = \tau p + (1 - \tau)w = w + \tau(p - w) = \sigma_{w,p}(\tau)$

이다. 순서 성질 (3)의 (i)에 의해 $\tau \le 1$에서 $0 \le 1 - \tau$이고, 순서 성질 (2)의 (i)과 $0 \le \tau$에서 $1 - \tau \le 1$이다. 따라서 세 쌍의 두 성분은 모두 $0$ 이상이고, 두 성분의 합 $\tau$, $1$, $1 - \tau$는 모두 $1$ 이하이다. 끝으로 $q(0, 0) = p$, $q(1, 0) = z$, $q(0, 1) = w$이다.

**4의 증명.** (i)에서 (ii): $s$, $t$가 $0 \le s$, $0 \le t$, $s + t \le 1$을 만족한다 하고 $\tau = s + t$로 두자. 순서 성질 (2)의 (iii)에 의해 $0 \le \tau$이고, 순서 성질 (2)의 (i)에 의해 $s = s + 0 \le \tau$, $t = 0 + t \le \tau$이다. [[real-order-axioms]]의 $\le$의 정의에 의해 $\tau = 0$이거나 $0 < \tau$이다.

- $\tau = 0$이면 $0 \le s \le 0$, $0 \le t \le 0$이므로 순서 성질 (1)의 (ii)에 의해 $s = t = 0$이고, (3)에 의해 그 점은 $p \in G$이다.
- $0 < \tau$이면 순서 성질 (6)의 (i)에 의해 $0 < \tau^{-1}$이고, 순서 성질 (4)의 (iii)을 $0 \le t \le \tau$에 쓰고 [[real-number-arithmetic]]의 (K9)의 $0\tau^{-1} = 0$과 (K8)의 $\tau\tau^{-1} = 1$을 쓰면 $\lambda = t\tau^{-1}$은 $0 \le \lambda \le 1$이다. 따라서 $u = \sigma_{z,w}(\lambda) = z + \lambda(w - z)$는 $\sigma_{z,w}$의 상의 원소이고, (i)에 의해 $u \in G$이다. $G$는 $p$에 대해 별 모양이고 $0 \le \tau \le 1$이므로 $\sigma_{p,u}(\tau) = p + \tau(u - p) \in G$이다. [[real-number-arithmetic]]의 계산으로 $\tau\lambda = t$이므로
  $$
  \begin{aligned}
  &p + \tau(u - p) \\
  &\quad = p + \tau(z - p) + t(w - z) \\
  &\quad = p + s(z - p) + t(w - p)
  \end{aligned}
  $$
  이다. 둘째 등호는 $\tau(z - p) = s(z - p) + t(z - p)$와 $t(z - p) + t(w - z) = t(w - p)$이다. (3)에 의해 이것은 $(1 - s - t)p + sz + tw$이므로 이 점은 $G$의 원소이다.

(ii)에서 (i): $0 \le \tau \le 1$이면 (3)에 의해 $\sigma_{z,w}(\tau)$는 $(s, t) = (1 - \tau, \tau)$에서의 $(1 - s - t)p + sz + tw$이고 이 쌍은 (ii)의 조건을 만족하므로 $\sigma_{z,w}(\tau) \in G$이다.

마지막 문장: (ii)가 성립하면, (3)에 의해 $\sigma_{p,z}(\tau)$, $\sigma_{z,w}(\tau)$, $\sigma_{w,p}(\tau)$는 모두 (ii)의 조건을 만족하는 쌍에서의 값이므로 $G$의 원소이다.

**5의 증명.** [[open-ball]]의 (1)에 의해 $z \in B(z, \varepsilon)$이다. 경로 (2)를 $c = z$로 $(z, w)$에 쓰면 $\sigma_{z,w}$의 상은 $B(z, \varepsilon)$의 부분집합이고, 따라서 $G$의 부분집합이다. 곧 (4)의 (i)이 성립하고, (4)에 의해 (ii)도 성립한다.

**6의 증명.** (1)에 의해 $B(a, r)$는 $p$에 대해 별 모양인 열린집합이다. 경로 (2)를 $c = a$, $\varepsilon = r$로 $(z, w)$에 쓰면 $\sigma_{z,w}$의 상은 $B(a, r)$의 부분집합이다. (4)를 $G = B(a, r)$로 쓰면 결론을 얻는다. $\blacksquare$
:::

## 예시와 반례

:::example[십자 모양의 열린집합]
$H = \{z \in \mathbb{C} : |\operatorname{Im} z| < 1\}$, $V = \{z \in \mathbb{C} : |\operatorname{Re} z| < 1\}$, $G = H \cup V$라 합시다. 가로 띠와 세로 띠를 겹친 십자 모양입니다.

$G$는 열린집합입니다. $z \in H$이면 [[order-properties-of-reals]]의 (3)의 (i)에 의해 $\rho = 1 - |\operatorname{Im} z|$는 양수이고, $u \in B(z, \rho)$이면 [[complex-field]]의 (1)과 [[modulus-of-complex-number]]의 (6)에 의해 $|\operatorname{Im} u - \operatorname{Im} z| = |\operatorname{Im}(u - z)| \le |u - z| < \rho$이므로 [[triangle-inequality|삼각부등식]]의 (1)에 의해 $|\operatorname{Im} u| \le |\operatorname{Im} z| + |\operatorname{Im} u - \operatorname{Im} z| < |\operatorname{Im} z| + \rho = 1$, 곧 $B(z, \rho) \subseteq H \subseteq G$입니다. $V$의 점에서는 실수부로 같은 계산을 합니다. [[open-set-in-metric-space]]의 정의에 의해 $G$는 열린집합입니다.

$G$는 $0$에 대해 별 모양입니다. $z \in H$이고 $0 \le t \le 1$이면 $\sigma_{0,z}(t) = tz$이고, [[complex-field]]의 (2)의 (ii)와 [[absolute-value]]의 (4), (1)에 의해 $|\operatorname{Im}(tz)| = t\,|\operatorname{Im} z|$이고 $t \le 1$이므로 [[order-properties-of-reals]]의 (4)의 (iii)에 의해 $t\,|\operatorname{Im} z| \le |\operatorname{Im} z| < 1$이어서 $tz \in H$입니다. $V$도 같습니다. 그러나 $G$는 자기 점 $2$에 대해서는 별 모양이 아닙니다. $2 \in H$이고 $2i \in V$인데 $\sigma_{2,2i}(1/2) = 2 + \tfrac12(2i - 2) = 1 + i$이고, $|\operatorname{Re}(1 + i)| = |\operatorname{Im}(1 + i)| = 1$이므로 $1 + i \notin G$입니다. 곧 별 모양 열린집합이 그 모든 점에 대해 별 모양이라고는 할 수 없습니다((1)의 원판은 그렇습니다).
:::

:::example[원점을 뺀 복소평면]
$G = \mathbb{C} - \{0\}$은 [[open-set-in-metric-space]]의 (5)에 의해 $\{0\}$이 닫힌집합이므로 열린집합입니다. 그러나 $G$의 어느 점 $p$에 대해서도 별 모양이 아닙니다. $p \ne 0$이면 $-p \ne 0$이라 $-p \in G$인데, $\sigma_{p,-p}(1/2) = p + \tfrac12(-p - p) = 0 \notin G$이기 때문입니다. 따라서 $\mathbb{C} - \{0\}$은 별 모양 열린집합이 아닙니다.
:::

:::counterexample[십자 모양 집합에서 꼭짓점이 $0$, $2$, $2i$인 볼록 결합]
위 십자 모양의 $G$는 $p = 0$에 대해 별 모양이고 $z = 2$, $w = 2i$는 $G$의 원소입니다. 그런데 $s = t = 1/2$이면 $(1 - s - t)p + sz + tw = 1 + i \notin G$입니다. 그러니 (4)의 (ii)는 성립하지 않고, (4)에 의해 (i)도 성립하지 않습니다. 실제로 $\sigma_{2,2i}(1/2) = 1 + i$입니다. 곧 (4)에서 "$z$와 $w$가 $G$의 원소"만으로는 볼록 결합이 모두 $G$에 들지 않을 수 있습니다.

(5)의 조건도 깨집니다. $B(2, \varepsilon) \subseteq G$이면 $\varepsilon \le 1$입니다. $\varepsilon > 1$이면 $|(2 + i) - 2| = 1 < \varepsilon$이라 $2 + i \in B(2, \varepsilon)$인데, $|\operatorname{Re}(2 + i)| = 2$, $|\operatorname{Im}(2 + i)| = 1$이므로 $2 + i \notin G$이기 때문입니다. 한편 $|2i - 2| = \sqrt{8} > 1$이므로 $2i$는 $G$에 드는 어떤 $B(2, \varepsilon)$에도 들지 않습니다.
:::

## 확인 질문

:::check[$B(0, 1) \cup B(3/2, 1)$은 $3/4$에 대해 별 모양인가?]
그렇습니다. [[open-ball-is-open|열린 공은 열린집합]]의 (1)과 [[open-sets-of-a-metric-space|거리공간의 열린집합]]의 (2)에 의해 이 합집합은 열린집합입니다. $|3/4 - 0| = 3/4 < 1$이고 $|3/4 - 3/2| = 3/4 < 1$이므로 $3/4$는 두 공에 모두 듭니다. $z$가 $B(0, 1)$에 들면 [[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{3/4,z}$의 상은 $B(0, 1)$에 들고, $z$가 $B(3/2, 1)$에 들면 같은 이유로 $B(3/2, 1)$에 듭니다. 어느 쪽이든 합집합에 듭니다.
:::

:::check[닫힌 공 $C(0, 1)$은 별 모양 열린집합인가?]
아닙니다. $z \in C(0, 1)$이고 $0 \le t \le 1$이면 [[modulus-of-complex-number]]의 (5)와 [[order-properties-of-reals]]의 (11)의 (i)에 의해 $|tz| = t|z| \le 1 \cdot 1 = 1$이므로 $0$에서 가는 선분은 모두 $C(0, 1)$에 들지만, $C(0, 1)$은 열린집합이 아닙니다. $1 \in C(0, 1)$이고, 모든 $r > 0$에서 $1 + r/2$는 $1$과의 거리가 $r/2 < r$인데 $|1 + r/2| = 1 + r/2 > 1$이라 $C(0, 1)$에 들지 않으므로 [[open-set-in-metric-space]]의 (2)에 의해 열린집합이 아닙니다. 별 모양은 열린집합에만 정의합니다.
:::
