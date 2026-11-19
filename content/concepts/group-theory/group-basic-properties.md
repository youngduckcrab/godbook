---
title: 군의 기본 성질
title_en: Basic Properties of Groups
aliases: [소거법칙, 역원의 유일성, 항등원의 유일성, 곱의 역원, 왼쪽 곱, 오른쪽 곱, cancellation law, left multiplication, right multiplication]
kind: theorem
field: group-theory
msc: ["20A05"]
level: undergrad
summary: 군에서 항등원과 역원은 하나뿐이고, ab = e 이면 b = a⁻¹ 이며, (a⁻¹)⁻¹ = a, (ab)⁻¹ = b⁻¹a⁻¹, 소거법칙이 성립하고, 방정식 ax = b 와 xa = b 는 해를 정확히 하나 가지며, 왼쪽 곱과 오른쪽 곱은 전단사이다.
requires: [function, injective-surjective-bijective, binary-operation, group, recursion-theorem]
proof: full
sources:
  - ref: judson-abstract-algebra
    loc: 3.2절 Basic Properties of Groups, Proposition 3.17–3.22, p.36–37
    checked: original
    note: "이 항목의 번호와 출처의 대응: (1) ↔ Proposition 3.17(p.36), (2) ↔ Proposition 3.18(p.36), (5) ↔ Proposition 3.20(p.36), (6) ↔ Proposition 3.19(p.36), (7) ↔ Proposition 3.22(p.37), (8) ↔ Proposition 3.21(p.36–37). 출처는 (1)과 (2)를 군에 대해 증명하고, 이 항목은 이항연산 항목의 (1), (2)를 인용한다. 출처는 3.22(소거법칙)의 증명을 연습문제 3.30(p.42)으로, 3.21 의 xa = b 쪽을 연습문제 3.28(p.42)로 둔다. 출처의 3.21 증명은 ax = b 를 가정해 x = a⁻¹b 를 끌어내므로 a(a⁻¹b) = b 를 확인하는 문장이 없다. 이 항목은 그것을 따로 보인다. 출처의 3.19 와 3.20 의 증명은 네 원소의 곱을 괄호 없이 쓰고(abb⁻¹a⁻¹, aa⁻¹(a⁻¹)⁻¹), 3.19 는 두 쪽의 곱을 모두 계산한다. 이 항목은 (3)(한쪽만 확인하면 된다)을 먼저 보이고 (4)–(6)을 그것으로 증명한다. (3)과 (4)(e⁻¹ = e)는 출처에 명제로 없다(검색어 'ab = e', 'ba = e', 'e−1', 'left inverse', 'right inverse'. 'ab = e' 는 3.19 의 증명에만 나온다). (9)(aa = a 이면 a = e)는 출처에 명제로 없고, 출처가 Proposition 3.30 의 증명(p.39)에서 e_H e_H = e_H 와 e e_H = e_H 를 소거하는 것, Proposition 11.4 의 증명(p.134)에서 ϕ(e)ϕ(e) = ϕ(e) 를 소거하는 것과 같은 발상이다. (10)의 왼쪽 곱이 전단사라는 것은 출처가 Cayley 정리(Theorem 9.12, p.117)의 증명과 연습문제 5.27(p.72)에서 λ_g 에 대해 보이는 것과 같은 내용이고, 단사인 부분은 Proposition 6.9 의 증명(p.76)에서도 왼쪽 소거로 보인다. 오른쪽 곱은 출처에서 찾지 못했다(검색어 'right multiplication'). 연산표의 행과 열에 관한 참고는 출처에 없다(검색어 'exactly once', 'each row', 'every row', 'Latin'). 예시는 출처의 Proposition 3.21 을 (ℤ, +) 에 쓴 것이다. 반례(0 은 지울 수 없다)는 출처 Proposition 16.15(p.194)가 정역에서 0 이 아닌 원소에 대해서만 소거법칙을 진술하는 것과 같은 발상이다. 출처에서 0·1 = 0·2 같은 구체적인 예는 찾지 못했다(검색어 'cancel'). 첫째 확인 질문은 출처 연습문제 3.27(p.42, g₁g₂⋯gₙ 의 역원)의 n = 3 인 경우이다. 둘째 확인 질문(아벨군에서 (ab)⁻¹ = a⁻¹b⁻¹)은 출처에서 찾지 못했다(검색어 'a−1 b−1', 'b−1 a−1'. 'a−1 b−1' 꼴은 교환자 aba⁻¹b⁻¹ 와 연습문제 3.51 의 x⁻¹y⁻¹ 에만 나온다)."
status: reviewed
review_note: "2026-11-19 자기 검토(docs/self-review.md)와 지휘자의 표본 검사. 독립 검토는 거치지 않았다. 경계 경우에서 거짓이 되는 제목·직관과 출처 메모를 고침"
added: 2026-11-19
---

:::statement
$G$가 [[group|군]]이고 $e$가 그 항등원이라 하자. 곱 $ab$와 역원 $a^{-1}$은 [[group|군]]의 표기이다. 다음이 성립한다. 아래에서 $a$, $b$, $c$는 $G$의 원소이다.

1. (항등원의 유일성) $e' \in G$가 모든 $a \in G$에 대하여 $e'a = a$이고 $ae' = a$이면 $e' = e$이다.
2. (역원의 유일성) $ab = e$이고 $ba = e$이면 $b = a^{-1}$이다.
3. (한쪽만 확인하기) $ab = e$이면 $b = a^{-1}$이고 $a = b^{-1}$이다. 따라서 $ab = e$와 $ba = e$ 가운데 어느 하나만 성립해도 $b = a^{-1}$이고 $a = b^{-1}$이다.
4. $e^{-1} = e$이다.
5. $(a^{-1})^{-1} = a$이다.
6. $(ab)^{-1} = b^{-1}a^{-1}$이다.
7. (소거법칙) $ab = ac$이면 $b = c$이다(왼쪽 소거). $ba = ca$이면 $b = c$이다(오른쪽 소거).
8. (방정식의 해) $ax = b$인 $x \in G$는 정확히 하나 있고 그것은 $a^{-1}b$이다. $xa = b$인 $x \in G$는 정확히 하나 있고 그것은 $ba^{-1}$이다.
9. $aa = a$이면 $a = e$이다.
10. (왼쪽 곱과 오른쪽 곱) $G$의 각 $x$에 $ax$를 대응시키는 $\{(x, ax) : x \in G\}$는 $G$에서 $G$로의 [[function]]이다. 이것을 $a$에 의한 **왼쪽 곱**(left multiplication)이라 하고 $L_a$로 쓴다. 곧 $L_a : G \to G$이고 모든 $x \in G$에서 $L_a(x) = ax$이다. 마찬가지로 $R_a : G \to G$, $R_a(x) = xa$를 $a$에 의한 **오른쪽 곱**(right multiplication)이라 한다. $L_a : G \to G$와 $R_a : G \to G$는 [[injective-surjective-bijective|전단사]]이다.
:::

:::english
Let $G$ be a group with identity $e$. Products $ab$ and inverses $a^{-1}$ are written as in the entry on groups. The following hold, where $a$, $b$, $c$ denote elements of $G$.

1. (Uniqueness of the identity) If $e' \in G$ satisfies $e'a = a$ and $ae' = a$ for all $a \in G$, then $e' = e$.
2. (Uniqueness of inverses) If $ab = e$ and $ba = e$, then $b = a^{-1}$.
3. (Checking one side) If $ab = e$, then $b = a^{-1}$ and $a = b^{-1}$. Hence if either one of $ab = e$ and $ba = e$ holds, then $b = a^{-1}$ and $a = b^{-1}$.
4. $e^{-1} = e$.
5. $(a^{-1})^{-1} = a$.
6. $(ab)^{-1} = b^{-1}a^{-1}$.
7. (Cancellation laws) If $ab = ac$, then $b = c$ (left cancellation). If $ba = ca$, then $b = c$ (right cancellation).
8. (Solutions of equations) There is exactly one $x \in G$ with $ax = b$, namely $a^{-1}b$. There is exactly one $x \in G$ with $xa = b$, namely $ba^{-1}$.
9. If $aa = a$, then $a = e$.
10. (Left and right multiplication) The set $\{(x, ax) : x \in G\}$, which assigns $ax$ to each $x \in G$, is a function from $G$ to $G$. It is called **left multiplication** by $a$ and written $L_a$; thus $L_a : G \to G$ and $L_a(x) = ax$ for all $x \in G$. Likewise $R_a : G \to G$, $R_a(x) = xa$, is called **right multiplication** by $a$. Both $L_a : G \to G$ and $R_a : G \to G$ are bijective.
:::

## 직관

군에서는 보통의 수처럼 "양변에 같은 것을 곱해 지우는" 계산을 할 수 있습니다. 다만 군의 공리는 교환법칙을 요구하지 않으므로 왼쪽에서 곱할지 오른쪽에서 곱할지를 지켜야 합니다. $ax = b$를 풀 때는 양변의 **왼쪽**에 $a^{-1}$을 곱해 $x = a^{-1}b$를 얻고, $xa = b$를 풀 때는 **오른쪽**에 곱해 $x = ba^{-1}$을 얻습니다. 두 해가 같은 것은 정확히 $ab = ba$일 때입니다. $a^{-1}b = ba^{-1}$이면 양변의 왼쪽과 오른쪽에 $a$를 곱해 $a((a^{-1}b)a) = (aa^{-1})(ba) = ba$와 $a((ba^{-1})a) = (ab)(a^{-1}a) = ab$가 같아지고, 거꾸로 $ab = ba$이면 같은 계산을 $a^{-1}$로 되짚어 $a^{-1}b = ba^{-1}$을 얻습니다. 그래서 $ab \ne ba$인 $a$, $b$에서는 두 해가 다릅니다.

$(ab)^{-1} = b^{-1}a^{-1}$에서 순서가 뒤집히는 것은 옷을 입고 벗는 순서와 같습니다. 양말을 신고 그 위에 신발을 신었다면, 되돌릴 때는 신발을 먼저 벗고 양말을 나중에 벗습니다. 비유에서 신는 일 둘이 $a$와 $b$에, 벗는 일이 역원에, "차례로 하기"가 곱에 해당합니다. 비유가 맞지 않는 곳도 있습니다. 군의 곱 $ab$에는 "어느 것을 먼저 한다"는 뜻이 없으므로, 비유가 보여 주는 것은 두 원소의 자리가 뒤바뀐다는 것뿐입니다.

(3)은 역원을 확인하는 일을 반으로 줄여 줍니다. 역원의 정의는 $ab = e$와 $ba = e$를 둘 다 요구하지만, 군 안에서는 한쪽에서 다른 쪽이 나옵니다. 이 증명에는 $a$가 이미 역원 $a^{-1}$을 갖는다는 것, 곧 군의 공리 (3)이 쓰입니다.

## 증명

:::idea
모든 단계가 "결합법칙으로 괄호를 옮기고, $a^{-1}a = e$나 $aa^{-1} = e$로 지우고, $e$를 지운다"의 되풀이이다. 먼저 (3)을 보이면 (4)–(6)은 한쪽 곱이 $e$임을 확인하는 것으로 끝난다.
:::

:::hint
(3): $b = eb$에서 $e$를 $a^{-1}a$로 바꾸고 결합법칙을 쓴다.
:::

:::hint
(7): $ab = ac$의 양변에 왼쪽에서 $a^{-1}$을 곱한 것과 같은 계산을, 등식의 사슬 $b = eb = (a^{-1}a)b = \cdots$로 쓴다.
:::

:::proof
아래에서 "공리 (1)", "공리 (3)"은 [[group|군]]의 진술의 (1), (3)이고, "$e$의 성질"은 모든 $x \in G$에서 $ex = x$이고 $xe = x$라는 것, "역원의 성질"은 모든 $x \in G$에서 $xx^{-1} = e$이고 $x^{-1}x = e$라는 것이다(둘 다 [[group|군]]의 진술).

**(1)** $e'$과 $e$는 둘 다 군의 연산의 항등원이므로 [[binary-operation|이항연산]]의 (1)에 의해 $e' = e$이다.

**(2)** 가정에 의해 $b$는 $a$의 역원이고, $a^{-1}$도 $a$의 역원이다. 연산이 결합적이고 항등원 $e$를 가지므로 [[binary-operation|이항연산]]의 (2)에 의해 $b = a^{-1}$이다.

**(3)** $ab = e$라 하자. 그러면
$$b = eb = (a^{-1}a)b = a^{-1}(ab) = a^{-1}e = a^{-1}$$
이다. 차례로 $e$의 성질, 역원의 성질, 공리 (1), 가정 $ab = e$, $e$의 성질을 썼다. 또
$$a = ae = a(bb^{-1}) = (ab)b^{-1} = eb^{-1} = b^{-1}$$
이다. 차례로 $e$의 성질, 역원의 성질($b$에 대하여), 공리 (1), 가정, $e$의 성질을 썼다.

끝 문장: $ab = e$이면 방금 보인 대로 $b = a^{-1}$, $a = b^{-1}$이다. $ba = e$이면 방금 보인 것을 순서쌍 $(b, a)$에, 곧 $a$ 자리에 $b$를, $b$ 자리에 $a$를 넣어 쓰면 $a = b^{-1}$이고 $b = a^{-1}$이다.

**(4)** $e$의 성질에서 $x = e$로 두면 $ee = e$이다. (3)을 $a = e$, $b = e$로 쓰면 $e = e^{-1}$이다.

**(5)** 역원의 성질에 의해 $a^{-1}a = e$이다. (3)을 순서쌍 $(a^{-1}, a)$에 쓰면, 곧 $a$ 자리에 $a^{-1}$을, $b$ 자리에 $a$를 넣으면 $a = (a^{-1})^{-1}$이다.

**(6)** 공리 (1)을 세 원소 $ab$, $b^{-1}$, $a^{-1}$과 세 원소 $a$, $b$, $b^{-1}$에 써서
$$(ab)(b^{-1}a^{-1}) = \bigl((ab)b^{-1}\bigr)a^{-1} = \bigl(a(bb^{-1})\bigr)a^{-1} = (ae)a^{-1} = aa^{-1} = e$$
이다. 셋째 등호는 역원의 성질, 넷째는 $e$의 성질, 다섯째는 역원의 성질이다. (3)을 순서쌍 $(ab, b^{-1}a^{-1})$에 쓰면 $b^{-1}a^{-1} = (ab)^{-1}$이다.

**(7)** $ab = ac$라 하자. 그러면
$$b = eb = (a^{-1}a)b = a^{-1}(ab) = a^{-1}(ac) = (a^{-1}a)c = ec = c$$
이다. 차례로 $e$의 성질, 역원의 성질, 공리 (1), 가정, 공리 (1), 역원의 성질, $e$의 성질을 썼다. $ba = ca$라 하자. 그러면
$$b = be = b(aa^{-1}) = (ba)a^{-1} = (ca)a^{-1} = c(aa^{-1}) = ce = c$$
이다. 근거는 같은 차례이다.

**(8)** $x = a^{-1}b$이면 $ax = a(a^{-1}b) = (aa^{-1})b = eb = b$이다(공리 (1), 역원의 성질, $e$의 성질). 따라서 $ax = b$인 $x$가 있다. $x, x' \in G$가 $ax = b$이고 $ax' = b$이면 $ax = ax'$이므로 (7)의 왼쪽 소거에 의해 $x = x'$이다. 따라서 그런 $x$는 정확히 하나이고, 그것은 $a^{-1}b$이다.

$x = ba^{-1}$이면 $xa = (ba^{-1})a = b(a^{-1}a) = be = b$이다(같은 근거). $xa = b$이고 $x'a = b$이면 $xa = x'a$이므로 (7)의 오른쪽 소거에 의해 $x = x'$이다. 따라서 $xa = b$인 $x$는 정확히 하나이고, 그것은 $ba^{-1}$이다.

**(9)** $aa = a$라 하자. $e$의 성질에 의해 $a = ae$이므로 $aa = ae$이고, (7)의 왼쪽 소거에 의해 $a = e$이다.

**(10)** 연산이 $G \times G$에서 $G$로의 함수이므로 각 $x \in G$에 $G$의 원소 $ax$가 정해져 있다. [[recursion-theorem|재귀 정리]]의 (1)(값으로 정한 함수)에 의해 $L_a = \{(x, ax) : x \in G\}$는 $G$에서 $G$로의 함수이고 $L_a(x) = ax$이다. $R_a$도 같다.

$L_a$가 단사임을 보인다. $L_a(x) = L_a(x')$이면 $ax = ax'$이므로 (7)에 의해 $x = x'$이다. [[injective-surjective-bijective|단사의 동치 꼴]]에 의해 $L_a$는 단사이다. $L_a : G \to G$가 전사임을 보인다. $y \in G$이면 (8)에 의해 $a(a^{-1}y) = y$, 곧 $L_a(a^{-1}y) = y$이고 $a^{-1}y \in G$이다. 따라서 $L_a : G \to G$는 전단사이다. $R_a$도 같은 방법으로, (7)의 오른쪽 소거와 $R_a(ya^{-1}) = (ya^{-1})a = y$((8))로 전단사이다.
:::

:::remark[연산표의 행과 열]
$G$가 유한군이면 [[binary-operation|이항연산]]의 예시처럼 연산표를 만들 수 있습니다. $a$의 행에는 $x$의 열마다 $ax = L_a(x)$가 적히고, $b$의 열에는 $x$의 행마다 $xb = R_b(x)$가 적힙니다. (10)에 의해 $L_a$와 $R_b$는 전단사이므로, 각 행과 각 열에는 $G$의 모든 원소가 나오고(전사), 같은 원소가 두 칸에 나오지 않습니다(단사). 곧 군의 연산표의 각 행과 각 열에는 $G$의 원소가 저마다 정확히 한 번 나옵니다.
:::

## 예시와 반례

:::example[아벨군에서 두 방정식의 해]
$(\mathbb{Z}, +)$ 같은 아벨군에서는 $a^{-1}b = ba^{-1}$이므로 (8)의 두 해가 같습니다. 덧셈으로 쓰면 $a + x = b$와 $x + a = b$의 해가 둘 다 $(-a) + b$입니다. 예컨대 $3 + x = 5$의 해는 $(-3) + 5 = 2$이고, (8)에 의해 다른 해는 없습니다. $ab \ne ba$인 원소 $a$, $b$에서는 두 해가 다르므로(직관 절의 계산) 어느 쪽에 미지수가 있는지를 지켜야 합니다.
:::

:::counterexample[역원이 없으면 소거가 깨질 수 있다]
(7)의 증명은 $a$의 역원 $a^{-1}$을 씁니다. 역원이 없는 원소에서는 소거가 깨질 수 있습니다. 정수의 곱셈은 결합적이고 항등원 $1$을 갖지만 $0$은 역원을 갖지 않으며(그래서 $(\mathbb{Z}, \cdot)$는 군이 아니었습니다), $0 \cdot 1 = 0 = 0 \cdot 2$이지만 $1 \ne 2$입니다. 곧 $0 \cdot b = 0 \cdot c$에서 $b = c$를 끌어낼 수 없습니다.
:::

## 확인 질문

:::check[군 $G$의 원소 $a$, $b$, $c$에 대하여 $(abc)^{-1}$을 $a^{-1}$, $b^{-1}$, $c^{-1}$로 나타내어라.]
$abc = (ab)c$이므로 (6)을 두 원소 $ab$와 $c$에 쓰면 $(abc)^{-1} = c^{-1}(ab)^{-1}$이고, 다시 (6)에 의해 $(ab)^{-1} = b^{-1}a^{-1}$이므로 $(abc)^{-1} = c^{-1}(b^{-1}a^{-1}) = c^{-1}b^{-1}a^{-1}$입니다. 마지막 식은 세 원소의 곱이므로 괄호 없이 씁니다.
:::

:::check[아벨군 $G$에서 $(ab)^{-1} = a^{-1}b^{-1}$인가?]
그렇습니다. (6)에 의해 $(ab)^{-1} = b^{-1}a^{-1}$이고, $G$가 아벨군이므로 $b^{-1}a^{-1} = a^{-1}b^{-1}$입니다. 아벨군이 아니면 (6)의 순서를 바꿀 수 없습니다.
:::
