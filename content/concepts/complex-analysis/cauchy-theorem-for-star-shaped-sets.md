---
title: 별 모양 집합의 원시함수와 코시 정리
title_en: Primitives and Cauchy's Theorem on Star-Shaped Sets
aliases: [코시 정리, 코시–구르사 정리, 별 모양 집합의 코시 정리, 원시함수의 존재, 경로 독립, Cauchy's theorem, Cauchy–Goursat theorem, Cauchy's theorem for star-shaped sets]
kind: theorem
field: complex-analysis
msc: ["30E20"]
level: undergrad
summary: "열린집합 G 가 점 p 에 대해 별 모양이고 연속함수 f 가 p 를 꼭짓점으로 하고 G 에 드는 모든 닫힌 삼각형의 둘레에서 적분이 0 이면, p 에서 z 로 가는 선분 위의 적분 F(z) 가 f 의 복소 원시함수이다. 구르사 정리로 G 위의 정칙함수와 한 점에서만 정칙이 아닌 연속함수가 이 조건을 만족하므로 원시함수를 갖고, 닫힌 경로열 위의 적분이 0 이며(코시 정리), 적분은 시작점과 끝점만으로 정해지고, 원시함수는 상수 차이로 하나뿐이다."
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, absolute-value, complex-number, complex-field, modulus-of-complex-number, complex-triangle-inequality, open-ball, open-set-in-metric-space, complex-plane-as-metric-space, continuity-of-complex-operations, limit-of-complex-function, complex-derivative, complex-derivative-rules, zero-derivative-on-a-region, complex-exponential-function, derivative-of-complex-exponential, path-in-the-complex-plane, path-integral, length-of-path-and-ml-inequality, primitive-and-path-integral, integrals-over-circles, closed-triangle, goursat-theorem, goursat-theorem-with-exceptional-point, star-shaped-open-set]
proof: full
sources:
  - ref: beck-first-course-complex-analysis
    loc: "Antiderivatives 절의 Theorem thm_FTC1 과 그 증명, Corollary thm_FTC1polygonal, source/sec_antiderivatives.ptx:160–301; Cauchy's Theorem 절의 Theorem cauchythm, Corollary cauchycor 와 정함수에 대한 Corollary, source/sec_cauchythm.ptx:89–119, 283–295, 330–340; Antiderivatives Again 절의 Corollary cor_simplyconnectedprimitive, source/sec_antiderivagain.ptx:91–98; Cauchy's Integral Formula 절의 Example exam_cif 와 원판 위의 계산 예, source/sec_CIF.ptx:146–166, 344–370; Classification of Singularities 절의 예, source/sec_classificationsingul.ptx:61–80"
    checked: original
    note: "출처 Theorem thm_FTC1(sec_antiderivatives.ptx:160–175)은 영역 G 와 z₀ ∈ G 에서 연속인 f 가 G 안의 모든 닫힌 조각마다 매끄러운 경로에서 적분이 0 이면, z₀ 에서 z 로 가는 아무 경로를 따른 적분 F(z) 가 원시함수라고 진술한다. 증명(176–270)은 경로의 선택에 상관없음을 보인 뒤, z 에서 z + h 로 가는 선분 λ 위의 적분과 ML 부등식으로 F′(z) = f(z) 를 보인다. 이 항목의 (1)은 정의역을 별 모양 열린집합으로 좁히고, 가정을 'p 를 꼭짓점으로 하고 G 에 드는 닫힌 삼각형의 둘레에서 적분이 0'으로 약하게 하며, 경로를 p 에서 z 로 가는 선분 하나로 정한다. 그래서 경로의 선택에 상관없음을 따로 보이지 않는다. 미분계수를 보이는 부분(선분 위의 적분, 상수 f(z) 의 적분이 w − z, ML 부등식)은 출처의 증명(227–268)과 같은 길이다. 출처 Corollary thm_FTC1polygonal(285–301)은 닫힌 다각형 경로만으로 같은 결론을 진술한다. 출처는 코시 정리(sec_cauchythm.ptx:89–104)를 호모토피로 진술하고 f′ 이 연속이라는 가정 아래 증명하며, 구르사가 그 가정을 없앴다고 적는다(113–119). 출처 Corollary cauchycor(283–295)는 영역에서 수축가능한 경로의 적분이 0 이라는 것이고, 정함수의 닫힌 경로 적분이 0 이라는 Corollary(330–340)는 이 항목의 (5)와 같은 결론이다. 출처 Corollary cor_simplyconnectedprimitive(sec_antiderivagain.ptx:91–98)는 단순연결 영역의 정칙함수가 원시함수를 갖는다는 것이고, 이 항목의 (2)는 그것을 별 모양 열린집합으로 좁히고 한 점에서만 정칙이 아닌 연속함수까지 넓힌 것이다. 이 항목은 호모토피와 단순연결을 쓰지 않는다. 반례 '원점을 뺀 평면 위의 $1/z$'은 출처 Example ex_antiderivnotexist(sec_antiderivatives.ptx:142–155)와 같은 대상이다. 예시 '오른쪽 반평면 위의 $1/z$'은 출처가 1/z 의 원시함수로 Log 를 ℂ − ℝ≤0 위에서 드는 것(sec_antiderivatives.ptx:63–75, sec_antiderivagain.ptx:108–121)과 같은 함수를 다른 열린집합에서 본 것이다. 확인 질문 '$\\int_{\\gamma_{1,1}} \\frac{dz}{z^2 + 9}$의 값은?'의 함수는 출처 연습문제 ex_4_4(exercises-chap4.ptx:760–775)의 1/(z² + 1) 과 같은 꼴이고, 출처 Example exam_cif(sec_CIF.ptx:146–166: C[i, 1] 위의 1/(z² + 1) 의 적분이 π)의 함수와도 같은 꼴이다. 예시 '한 점에서만 정칙이 아닌 함수'의 (exp(z) − 1)/z 와 0 에서의 값 1 은 출처 Classification of Singularities 절의 예(sec_classificationsingul.ptx:61–80: (exp(z) − 1)/z 는 0 에서 없앨 수 있는 특이점을 갖고, ℂ − {0} 에서 정함수 Σ z^k/(k + 1)! 와 같다)와 같은 함수이고, 같은 예시의 exp(z)/z 의 원 위의 적분 2πi 는 출처 sec_CIF.ptx:344–370 의 예가 C[0, 3] 위의 exp(z)/z 의 적분을 2πi·exp(0) 으로 구하는 항과 같은 대상이다."
  - ref: klazar-complex-derivatives-continuous
    loc: "2절, Proposition 2.4 (p.6), Proposition 2.5 와 그 증명 (p.6–7)"
    checked: original
    note: "출처 Proposition 2.4 의 2(k.txt 291줄, p.6)는 ℂ − {a} 에서 정칙인 함수가 a 근처에서 유계이기만 하면 a 를 안쪽에 품은 직사각형의 둘레 위의 적분이 0 이라고 진술한다. 이 항목의 (2)의 (ii)는 그 생각을 삼각형과 한 점에서 연속인 함수로 옮긴 goursat-theorem-with-exceptional-point 를 쓴다. 예시 '한 점에서만 정칙이 아닌 함수'에서 exp(z)/z 의 원 위의 적분을 (exp(z) − 1)/z 와 1/z 로 나누어 구하는 것은 출처 Proposition 2.5 의 증명(k.txt 328–332줄, p.6)이 f(z)/(z − a) 를 f(a)/(z − a) 와 (f(z) − f(a))/(z − a) 로 나누는 것과 같은 발상이다."
  - ref: lebl-basic-analysis-2
    loc: "9.3절 Path independence, 9.3.1소절, Definition 9.3.5 앞 문단 (p.86), Theorem 9.3.6 (Poincaré lemma) 의 증명 (p.87), Example 9.3.7 (p.88)"
    checked: original
    note: "출처는 별 모양인 경우의 증명이 원시함수를 명시적으로 만든다고 적고(p.86), Poincaré lemma 의 증명(p.87)에서 p 에서 x 로 가는 선분 γ(t) = (1 − t)p + tx 를 따른 적분으로 함수를 정한다. 이 항목의 (1)에서 F(z) 를 σ_{p,z} 를 따른 적분으로 정하는 것은 같은 발상이다. 출처는 실수값 일형식에 대해 편도함수의 조건을 가정하고, 이 항목은 복소함수에 대해 삼각형 조건을 가정한다. 반례 '원점을 뺀 평면 위의 $1/z$'은 출처 Example 9.3.7(p.88: ℝ² − {(0, 0)} 위의 ω = (−y dx + x dy)/(x² + y²) 는 편도함수의 조건을 만족하지만 단위원을 따른 적분이 2π 이므로 df = ω 인 f 가 없고, 가정이 없으면 정리가 성립하지 않는다)과 같은 발상이며, 그 ω 는 dz/z 의 허수부와 같은 일형식이다."
status: reviewed
review_note: "2026-11-27 자기 검토와 지휘자 확인(코시 정리·CIF 의 증명 경로, 예의 값, 반지름의 식). 독립 검토 없음."
added: 2026-11-27
---

:::statement
복소수와 $i$는 [[complex-number]], 체 $\mathbb{C}$의 연산과 실수를 복소수 자리에 쓰는 약속은 [[complex-field]], 절댓값은 [[modulus-of-complex-number]]의 것이다. $\mathbb{C}$의 거리와 위상, 열린 공 $B(a, r)$는 [[complex-plane-as-metric-space|복소평면의 거리]]의 것이고, 열린집합은 [[open-set-in-metric-space]]의 $(\mathbb{C}, d)$에서의 것이다. 정칙함수, 정함수, "열린집합에서 정칙"은 [[complex-derivative|복소 미분]]의 것이고, 복소 원시함수는 [[primitive-and-path-integral|복소 원시함수와 경로 적분]]의 것이다. C¹ 경로, 닫힌 경로, 선분 경로 $\sigma_{z,w}$, 경로열과 그 상, 시작점, 끝점, 닫힌 경로열은 [[path-in-the-complex-plane|경로]]의 것이고, 경로 적분과 경로열의 경로 적분은 [[path-integral|경로 적분]]의 것이다. 닫힌 삼각형 $\Delta(a, b, c)$와 둘레 경로열 $\partial\Delta(a, b, c)$는 [[closed-triangle|닫힌 삼각형]]의 것이고, "$p$에 대해 별 모양"과 별 모양 열린집합은 [[star-shaped-open-set|별 모양 열린집합]]의 것이다.

아래에서 $G$는 $(\mathbb{C}, d)$의 열린집합이고 $p \in G$이며 $G$는 $p$에 대해 별 모양이다. $f : G \to \mathbb{C}$는 함수이다.

1. (**삼각형 조건과 원시함수**) $f$가 연속이고, $\Delta(p, z, w) \subseteq G$인 모든 복소수 $z$, $w$에서
   $$
   \int_{\partial\Delta(p, z, w)} f = 0
   $$
   이라 하자. 그러면 $z \in G$에서의 값이
   $$
   F(z) = \int_{\sigma_{p,z}} f
   $$
   인 함수 $F : G \to \mathbb{C}$는 $G$ 위의 $f$의 복소 원시함수이고 $F(p) = 0$이다. 또 $z$, $w \in G$이고 $\Delta(p, z, w) \subseteq G$이면 $F(w) - F(z) = \int_{\sigma_{z,w}} f$이다.
2. (정칙함수와 한 점 예외) 다음 (가), (나) 가운데 하나가 성립한다고 하자.
   - (가) $f$가 정칙함수이다.
   - (나) $q \in G$가 있어 $f$가 연속이고 $G - \{q\}$에서 정칙이다.
   
   그러면 $f$는 연속이고, $\Delta(a, b, c) \subseteq G$인 모든 복소수 $a$, $b$, $c$에서 $\int_{\partial\Delta(a, b, c)} f = 0$이다. 따라서 (1)의 $F$는 $G$ 위의 $f$의 복소 원시함수이다.
3. (**코시 정리**) (2)의 (가)나 (나)가 성립하면, 상이 $G$의 부분집합인 모든 닫힌 경로열 $\Gamma$에서 $\int_\Gamma f = 0$이다. 특히 상이 $G$의 부분집합인 모든 닫힌 C¹ 경로 $\gamma$에서 $\int_\gamma f = 0$이다.
4. (경로 독립) (2)의 (가)나 (나)가 성립하고 $\Gamma$, $\Lambda$가 상이 $G$의 부분집합인 경로열이며 시작점이 서로 같고 끝점이 서로 같으면 $\int_\Gamma f = \int_\Lambda f$이다.
5. (원판과 정함수) 복소수 $a$와 양의 실수 $R$에 대하여 $B(a, R)$ 위의 정칙함수는 $B(a, R)$ 위에서 복소 원시함수를 갖고, 상이 $B(a, R)$의 부분집합인 모든 닫힌 경로열 위의 적분이 $0$이다. 정함수는 $\mathbb{C}$ 위에서 복소 원시함수를 갖고, 모든 닫힌 경로열 위의 적분이 $0$이다.
6. (원시함수는 상수 차이로 하나) (1)의 가정이나 (2)의 (가), (나) 가운데 하나가 성립하고 $H$가 $G$ 위의 $f$의 복소 원시함수이면, 모든 $z \in G$에서 $H(z) = F(z) + H(p)$이다. 따라서 (1)의 $F$는 $p$에서의 값이 $0$인 $G$ 위의 $f$의 복소 원시함수 가운데 하나뿐인 것이다.
:::

:::english
Complex numbers and $i$ are those of the entry on complex numbers; the operations of the field $\mathbb{C}$ and the convention for writing real numbers in place of complex numbers are those of the entry on the field of complex numbers; the modulus is that of the entry on the modulus of a complex number. The metric and topology of $\mathbb{C}$ and open balls $B(a, r)$ are those of the entry on the metric of the complex plane, and open sets are those of the entry on open sets in a metric space, in $(\mathbb{C}, d)$. Holomorphic functions, entire functions, and "holomorphic on an open set" are those of the entry on the complex derivative, and complex primitives are those of the entry on complex primitives and path integrals. C¹ paths, closed paths, segment paths $\sigma_{z,w}$, chains of paths with their images, start points, end points, and closed chains are those of the entry on paths, and path integrals and path integrals along chains are those of the entry on path integrals. Closed triangles $\Delta(a, b, c)$ and boundary chains $\partial\Delta(a, b, c)$ are those of the entry on closed triangles, and "star-shaped with respect to $p$" and star-shaped open sets are those of the entry on star-shaped open sets.

Below, $G$ is an open set of $(\mathbb{C}, d)$, $p \in G$, and $G$ is star-shaped with respect to $p$. $f : G \to \mathbb{C}$ is a function.

1. (**Triangle condition and primitives**) Suppose $f$ is continuous and
   $$
   \int_{\partial\Delta(p, z, w)} f = 0
   $$
   for all complex numbers $z$, $w$ with $\Delta(p, z, w) \subseteq G$. Then the function $F : G \to \mathbb{C}$ whose value at $z \in G$ is
   $$
   F(z) = \int_{\sigma_{p,z}} f
   $$
   is a complex primitive of $f$ on $G$, and $F(p) = 0$. Moreover, if $z$, $w \in G$ and $\Delta(p, z, w) \subseteq G$, then $F(w) - F(z) = \int_{\sigma_{z,w}} f$.
2. (Holomorphic functions and one exceptional point) Suppose one of the following (a), (b) holds.
   - (a) $f$ is a holomorphic function.
   - (b) There is $q \in G$ such that $f$ is continuous and holomorphic on $G - \{q\}$.
   
   Then $f$ is continuous, and $\int_{\partial\Delta(a, b, c)} f = 0$ for all complex numbers $a$, $b$, $c$ with $\Delta(a, b, c) \subseteq G$. Hence the $F$ of (1) is a complex primitive of $f$ on $G$.
3. (**Cauchy's theorem**) If (a) or (b) of (2) holds, then $\int_\Gamma f = 0$ for every closed chain $\Gamma$ whose image is a subset of $G$. In particular, $\int_\gamma f = 0$ for every closed C¹ path $\gamma$ whose image is a subset of $G$.
4. (Path independence) If (a) or (b) of (2) holds and $\Gamma$, $\Lambda$ are chains whose images are subsets of $G$, with the same start point and the same end point, then $\int_\Gamma f = \int_\Lambda f$.
5. (Disks and entire functions) For a complex number $a$ and a positive real $R$, a holomorphic function on $B(a, R)$ has a complex primitive on $B(a, R)$, and its integral along every closed chain whose image is a subset of $B(a, R)$ is $0$. An entire function has a complex primitive on $\mathbb{C}$, and its integral along every closed chain is $0$.
6. (Primitives are unique up to a constant) If the hypothesis of (1) or one of (a), (b) of (2) holds and $H$ is a complex primitive of $f$ on $G$, then $H(z) = F(z) + H(p)$ for all $z \in G$. Hence the $F$ of (1) is the only complex primitive of $f$ on $G$ whose value at $p$ is $0$.
:::

## 직관

실함수에서 연속함수 $f$의 원시함수는 $F(x) = \int_p^x f$로 만들었습니다. 복소평면에서는 $p$에서 $z$로 가는 길이 여럿이라 "어느 길을 따라 적분하는가"가 문제가 됩니다. 별 모양 열린집합에서는 $p$에서 $z$로 가는 선분이 늘 $G$ 안에 있으므로 그 선분 하나로 정합니다. 그러면 $F(w) - F(z)$를 구할 때 두 선분 $\sigma_{p,z}$, $\sigma_{p,w}$와 $z$에서 $w$로 가는 선분이 이루는 삼각형의 둘레를 돌게 되고, 그 둘레 위의 적분이 $0$이라는 것이 (1)의 가정입니다. 이 가정이 있으면 $F(w) - F(z)$는 짧은 선분 $\sigma_{z,w}$ 위의 적분이고, $w$가 $z$에 가까우면 그것은 거의 $f(z)(w - z)$입니다.

삼각형 조건은 구르사 정리가 줍니다((2)). 그래서 별 모양 열린집합 위의 정칙함수는 원시함수를 갖고, 원시함수가 있으면 닫힌 경로열 위의 적분은 끝점의 값의 차 $0$입니다((3)). 한 점 $q$에서 정칙이 아니어도 $f$가 연속이기만 하면 같은 결론을 얻습니다.

비유하면, 산의 높이를 재는 데 한 봉우리 $p$에서 곧게 내려가는 길만 쓰는 것과 같습니다. 별 모양이라는 것은 그런 길이 모든 지점에 닿는다는 것이고, 삼각형 조건은 세 지점을 돌아 제자리로 오면 오르내린 높이의 합이 $0$이라는 것입니다. 비유가 맞지 않는 곳은 적분값이 실수가 아니라 복소수라는 것입니다. 정의역이 별 모양이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다. 원점을 뺀 평면에서 $1/z$의 원 위의 적분은 $0$이 아닙니다(아래 반례).

## 증명

:::idea
$F(w) - F(z) = \int_{\sigma_{z,w}} f$를 삼각형 조건과 뒤집기로 얻고, $\int_{\sigma_{z,w}} f(z)\,d\zeta = f(z)(w - z)$를 빼서 ML 부등식으로 누른다. 나머지는 구르사 정리와 원시함수의 성질이다.
:::

:::hint
$z$를 고정하고 $B(z, \varepsilon_0) \subseteq G$인 $\varepsilon_0$을 잡으면, 그 공 안의 $w$에서 [[star-shaped-open-set|별 모양 열린집합]]의 (5)에 의해 $\Delta(p, z, w) \subseteq G$입니다.
:::

:::hint
$\sigma_{z,w}$의 상의 점 $\zeta$는 $|\zeta - z| \le |w - z|$이므로 $f$의 연속에서 얻은 $\delta$ 안에 있습니다. 길이는 $|w - z|$입니다.
:::

:::proof
"삼각형 (n)"은 [[closed-triangle|닫힌 삼각형]], "적분 (n)"은 [[path-integral|경로 적분]], "원시함수 (n)"은 [[primitive-and-path-integral|복소 원시함수와 경로 적분]], "별 모양 (n)"은 [[star-shaped-open-set|별 모양 열린집합]], "미분 (n)"은 [[complex-derivative|복소 미분]]의 번호이다. $f$가 연속이면 [[path-integral|경로 적분]]의 "상 위에서 연속"의 정의 문단에 의해 $f$는 $G$의 모든 부분집합 위에서 연속이므로, 상이 $G$의 부분집합인 경로와 경로열을 따른 $f$의 적분이 정해진다.

**$\Delta(p, z, w)$와 별 모양 (4).** 삼각형의 정의에 의해 $\Delta(p, z, w)$는 $0 \le s$, $0 \le t$, $s + t \le 1$인 실수 $s$, $t$로 쓴 $p + s(z - p) + t(w - p)$ 전체이고, 별 모양 (3)에 의해 이것은 $(1 - s - t)p + sz + tw$와 같다. 따라서 $\Delta(p, z, w) \subseteq G$인 것은 정확히 별 모양 (4)의 (ii)가 성립할 때이다.

**1의 증명.** $z \in G$이면 별 모양의 정의에 의해 $\sigma_{p,z}$의 상은 $G$의 부분집합이므로 $F(z)$가 정해진다. $\sigma_{p,p}$는 상수 경로이므로 적분 (4)에 의해 $F(p) = 0$이다.

둘째 문장: $z$, $w \in G$이고 $\Delta = \Delta(p, z, w) \subseteq G$라 하자. 삼각형 (2)에 의해 $\partial\Delta = (\sigma_{p,z}, \sigma_{z,w}, \sigma_{w,p})$의 세 상은 $\Delta$의 부분집합이고, 경로열의 경로 적분의 정의와 가정에 의해
$$
\int_{\sigma_{p,z}} f + \int_{\sigma_{z,w}} f + \int_{\sigma_{w,p}} f = 0
$$
이다. 적분 (2)에 의해 $\int_{\sigma_{w,p}} f = -\int_{\sigma_{p,w}} f = -F(w)$이므로 $F(z) + \int_{\sigma_{z,w}} f - F(w) = 0$, 곧 $F(w) - F(z) = \int_{\sigma_{z,w}} f$이다.

미분계수: $z \in G$를 고정한다. $G$는 열린집합이므로 $B(z, \varepsilon_0) \subseteq G$인 실수 $\varepsilon_0 > 0$이 있다. $\varepsilon > 0$이라 하자. $f$는 $z$에서 연속이므로 [[continuity-of-complex-operations|복소수 연산의 연속]]의 (6)의 (i)에 의해 실수 $\delta_1 > 0$이 있어 $\zeta \in G$이고 $|\zeta - z| < \delta_1$이면 $|f(\zeta) - f(z)| < \varepsilon / 2$이다. $\delta = \min\{\delta_1, \varepsilon_0\}$로 두면 [[absolute-value]]의 (10)에 의해 $0 < \delta$이고 $\delta \le \delta_1$, $\delta \le \varepsilon_0$이다.

$w \in G$이고 $w \ne z$이며 $|w - z| < \delta$라 하자. $w \in B(z, \varepsilon_0)$이므로 별 모양 (5)에 의해 별 모양 (4)의 (ii)가 성립하고, 위 문단에 의해 $\Delta(p, z, w) \subseteq G$이다. 둘째 문장에 의해 $F(w) - F(z) = \int_{\sigma_{z,w}} f$이다. 적분 (4)에 의해 값이 $f(z)$인 상수함수의 적분은 $\int_{\sigma_{z,w}} f(z)\,d\zeta = f(z)(w - z)$이고, 적분 (1)에 의해
$$
\begin{aligned}
&F(w) - F(z) - f(z)(w - z) \\
&\quad = \int_{\sigma_{z,w}} \bigl(f(\zeta) - f(z)\bigr)\,d\zeta
\end{aligned}
$$
이다. [[open-ball]]의 (1)에 의해 $z \in B(z, \delta)$이고 $w \in B(z, \delta)$이므로 [[path-in-the-complex-plane|경로]]의 (2)에 의해 $\sigma_{z,w}$의 상은 $B(z, \delta) \subseteq B(z, \varepsilon_0) \subseteq G$의 부분집합이다. 따라서 상의 모든 점 $\zeta$에서 $|\zeta - z| < \delta \le \delta_1$이고 $|f(\zeta) - f(z)| < \varepsilon / 2$이다. [[length-of-path-and-ml-inequality|경로의 길이와 적분의 어림]]의 (2)의 (i)을 $M = \varepsilon / 2$로 쓰고 (1)의 $\ell(\sigma_{z,w}) = |w - z|$를 쓰면
$$
\begin{aligned}
&\bigl|F(w) - F(z) - f(z)(w - z)\bigr| \\
&\quad \le \frac{\varepsilon}{2}\,|w - z|
\end{aligned}
$$
이다. [[modulus-of-complex-number]]의 (1)에 의해 $0 < |w - z|$이므로, 그 (3), (4)로 양변을 $|w - z|$로 나누면 $F$의 $z$에서의 차분몫 $q_z$에 대하여 $|q_z(w) - f(z)| \le \varepsilon / 2 < \varepsilon$이다. [[limit-of-complex-function|복소함수의 극한]]의 수렴의 정의에 의해 $q_z$는 $z$에서 $f(z)$로 수렴하고, 미분의 정의에 의해 $F$는 $z$에서 복소 미분가능하며 $F'(z) = f(z)$이다. $z$는 $G$의 아무 점이었으므로 $F$는 정칙함수이고 그 도함수는 $f$이다.

**2의 증명.** (가)이면 미분 (3)에 의해 $f$는 연속이고, [[goursat-theorem|구르사 정리]]를 $U = G$로 쓰면 $\Delta(a, b, c) \subseteq G$인 모든 $a$, $b$, $c$에서 $\int_{\partial\Delta(a, b, c)} f = 0$이다. (나)이면 [[goursat-theorem-with-exceptional-point|예외점이 있는 구르사 정리]]를 $U = G$, 예외점 $q$로 쓰면 같은 결론을 얻는다. 특히 $a = p$, $b = z$, $c = w$로 두면 (1)의 가정이 성립하므로 (1)의 $F$는 복소 원시함수이다.

**3의 증명.** (2)에 의해 $F$는 $G$ 위의 $f$의 복소 원시함수이고 $f$는 연속이다. 원시함수 (3)에 의해 상이 $G$의 부분집합인 닫힌 경로열과 닫힌 C¹ 경로 위의 적분은 $0$이다.

**4의 증명.** 원시함수 (2)의 (iii)을 (2)의 $F$로 쓴다.

**5의 증명.** 별 모양 (1)에 의해 $B(a, R)$는 $a$에 대해, $\mathbb{C}$는 $0$에 대해 별 모양인 열린집합이다. 정칙함수는 (2)의 (가)를 만족하므로 (2)와 (3)을 쓴다.

**6의 증명.** (1)이나 (2)에 의해 $F$는 $G$ 위의 $f$의 복소 원시함수이다. 별 모양 (2)에 의해 $G$는 영역이므로 원시함수 (5)의 (ii)에 의해 모든 $z \in G$에서 $H(z) = F(z) + C$인 복소수 $C$가 있고, $z = p$를 넣으면 $F(p) = 0$이므로 $C = H(p)$이다. $H(p) = 0$이면 $H = F$이다. $\blacksquare$
:::

## 예시와 반례

:::example[오른쪽 반평면 위의 $1/z$]
$G = \{z \in \mathbb{C} : \operatorname{Re} z > 0\}$이라 합시다. $z \in G$이고 $u \in B(z, \operatorname{Re} z)$이면 [[modulus-of-complex-number]]의 (6)에 의해 $|\operatorname{Re} u - \operatorname{Re} z| \le |u - z| < \operatorname{Re} z$이고, [[absolute-value]]의 (8)에 의해 $\operatorname{Re} u > \operatorname{Re} z - \operatorname{Re} z = 0$이므로 $G$는 열린집합입니다. $1 \in G$이고, $z \in G$와 $0 \le t \le 1$에서 [[complex-field]]의 (1), (2)의 (ii)에 의해 $\operatorname{Re}\bigl(1 + t(z - 1)\bigr) = (1 - t) + t \operatorname{Re} z$입니다. $t < 1$이면 첫째 항이 양수이고 둘째 항이 $0$ 이상이며, $t = 1$이면 둘째 항이 $\operatorname{Re} z > 0$이므로 어느 쪽이든 양수입니다. 따라서 $G$는 $1$에 대해 별 모양입니다.

$0 \notin G$이므로 $z$에서의 값이 $1/z$인 함수 $f : G \to \mathbb{C}$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (3)의 (iii)에 의해 정칙함수입니다. (2)에 의해
$$
F(z) = \int_{\sigma_{1,z}} \frac{1}{\zeta}\,d\zeta
$$
는 $G$ 위의 $f$의 복소 원시함수이고 $F(1) = 0$입니다. [[integrals-over-circles|원 경로 위의 적분]]의 (6)에 의해 같은 함수가 $\mathbb{C} - \{0\}$ 위에서는 복소 원시함수를 갖지 않으므로, 원시함수가 있느냐는 정의역에 달려 있습니다.
:::

:::example[한 점에서만 정칙이 아닌 함수]
$f : \mathbb{C} \to \mathbb{C}$를 $z \ne 0$이면 $f(z) = (\exp(z) - 1)/z$, $f(0) = 1$로 정합시다. [[complex-exponential-function]]의 (3)에 의해 $\exp(0) = 1$이고 [[derivative-of-complex-exponential|복소 지수함수의 도함수]]의 (1)에 의해 $\exp'(0) = 1$이므로, $f$는 [[complex-derivative|복소 미분]]의 (2)의 (ii)에서 $\exp$와 $z_0 = 0$으로 만든 함수 $\varphi$이고 $0$에서 연속입니다. $\mathbb{C} - \{0\}$에서는 [[complex-derivative-rules|복소 미분의 법칙]]의 (1)과 (3)의 (iii)에 의해 정칙이므로 연속입니다. 따라서 $f$는 연속이고 (2)의 (나)를 $q = 0$으로 만족하며, (3)에 의해 $\int_{\gamma_{0,1}} f = 0$입니다.

원 경로 $\gamma_{0,1}$의 상에서는 $z \ne 0$이므로 $f(z) = \exp(z)/z - 1/z$이고, [[path-integral|경로 적분]]의 (1)과 [[integrals-over-circles|원 경로 위의 적분]]의 (1)에 의해
$$
\int_{\gamma_{0,1}} \frac{\exp(z)}{z}\,dz = \int_{\gamma_{0,1}} \frac{1}{z}\,dz = 2\pi i
$$
입니다.
:::

:::counterexample[원점을 뺀 평면 위의 $1/z$]
$z$에서의 값이 $1/z$인 함수 $\mathbb{C} - \{0\} \to \mathbb{C}$는 정칙함수이고 원 경로 $\gamma_{0,1}$의 상은 $\mathbb{C} - \{0\}$에 들지만, [[integrals-over-circles|원 경로 위의 적분]]의 (1)에 의해 $\int_{\gamma_{0,1}} \frac{1}{z}\,dz = 2\pi i \ne 0$입니다. [[star-shaped-open-set|별 모양 열린집합]]의 예시 '원점을 뺀 복소평면'에서 보았듯 $\mathbb{C} - \{0\}$은 별 모양이 아니므로 (3)과 어긋나지 않습니다. 곧 (3)에서 별 모양이라는 가정을 빼면 결론이 성립하지 않을 수 있습니다.
:::

## 확인 질문

:::check[$\int_{\gamma_{1,1}} \frac{dz}{z^2 + 9}$의 값은?]
$0$입니다. $z \in B(0, 3)$이면 $z^2 + 9 \ne 0$입니다. $z^2 = -9$이면 [[modulus-of-complex-number]]의 (3), (5)에 의해 $|z|^2 = 9$이고 [[order-properties-of-reals]]의 (7)의 (iv)에 의해 $|z| = 3$이기 때문입니다. 그래서 $z$에서의 값이 $1/(z^2 + 9)$인 함수 $B(0, 3) \to \mathbb{C}$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii), [[complex-derivative|복소 미분]]의 (4)의 (i)(정함수 $z^2 + 9$의 제한)과 복소 미분의 법칙의 (3)의 (iii)에 의해 정칙함수입니다. $\gamma_{1,1}$의 상의 점 $z$는 [[complex-triangle-inequality|복소수의 삼각부등식]]의 (2)에 의해 $|z| \le |z - 1| + 1 = 2 < 3$이므로 상이 $B(0, 3)$에 들고, (5)에 의해 적분은 $0$입니다.
:::

:::check[정함수 $f(z) = 3z^2 + 1$에 (1)을 $p = i$로 쓰면 $F$는 무엇인가?]
$F(z) = z^3 + z$입니다. $H(z) = z^3 + z$는 [[complex-derivative-rules|복소 미분의 법칙]]의 (4)의 (iii)에 의해 정함수이고 $H'(z) = 3z^2 + 1$이므로 복소 원시함수이며, $H(i) = i^3 + i = -i + i = 0$입니다. (6)에 의해 $H(z) = F(z) + H(i) = F(z)$입니다.
:::
