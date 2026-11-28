---
title: 유한 개의 존재를 하나의 열로 모으기
title_en: Gathering Finitely Many Existence Statements into One Sequence
aliases: [유한 선택, 상에 든 유한 열의 원상, finite choice, preimages of a finite sequence]
kind: theorem
field: linear-algebra
msc: ["03E25"]
level: undergrad
summary: 1 부터 r 까지의 각 번호 k 마다 조건 P(k, x) 를 만족하는 x 가 있으면, 모든 k 에서 P(k, x_k) 인 길이 r 인 열 x₁, …, x_r 가 있다. r 에 대한 귀납으로 증명하고 각 단계는 원소 하나가 있다는 것만 쓰므로 선택 공리를 쓰지 않는다. 첨수가 유한집합인 꼴과, 함수나 선형사상의 상에 든 유한 열이 어떤 유한 열의 상이라는 꼴을 함께 진술한다.
requires: [set, function, open-sentence, image-and-preimage, inverse-function, injective-surjective-bijective, finite-set, mathematical-induction, recursion-theorem, prime-number, well-ordering-principle, vector-space, finite-sum-of-vectors, linear-map, kernel-and-range]
proof: full
sources:
  - ref: treil-linear-algebra-done-wrong
    loc: "9장 4절 Structure of nilpotent operators, 4.2 Jordan canonical form of a nilpotent operator, Theorem 4.2 의 증명, p.268"
    checked: original
    note: "출처 Theorem 4.2 의 증명(p.268)은 Ran A 의 사슬 C₁, …, C_r 의 끝 벡터 v^k_{p_k} 가 Ran A 에 들므로 'one can find a vector v^k_{p_k+1} such that Av^k_{p_k+1} = v^k_{p_k}' 라 적고, 그렇게 r 개의 사슬을 모두 하나씩 늘린다. 이 항목의 (3)은 그 단계에서 쓰는 사실, 곧 Ran A 에 든 유한 개의 벡터마다 원상이 있으면 그 원상들을 늘어놓은 열이 있다는 것을 진술로 올린 것이다. (1)의 일반형과 그 귀납 증명은 이 사이트가 썼다."
  - ref: hefferon-linear-algebra
    loc: "Nilpotence, Strings, th:NilMapHasStrBas 의 증명, src/jc/jc3.tex:1103–1111"
    checked: original
    note: "Hefferon 의 th:NilMapHasStrBas 의 증명(jc3.tex:1103–1111)은 β₁, …, β_i 가 모두 상 R(t) 에 든다는 것에서 't(v₁) = β₁, …, t(v_i) = β_i 인 벡터 v₁, …, v_i ∈ V 를 쓴다(use vectors … such that)'고 적는다. (3)은 그 단계에서 쓰는 사실과 같은 것이다. 출처의 스칼라는 복소수이다. 예시 'ℝ³ 의 성분을 한 칸씩 옮기는 사상의 상에 든 두 벡터'의 N 은 출처 Strings 소절의 FirstNilMap(jc3.tex:589–632)이 shift map 이라 부르는 사상(ℂ² 에서 성분을 한 칸 아래로 옮긴다)과 NilIndexFourOnCFour(jc3.tex:634–667)와 같은 종류의 사상이다."
status: reviewed
review_note: "2026-11-28 자기 검토와 지휘자 확인(서로소 판정의 f = 0 경계, 블록 행렬식의 귀납 꼴, 유한 열 보조정리의 r = 0). 독립 검토 없음."
added: 2026-11-28
---

:::statement
$A$가 [[set|집합]]이고 $r$이 $0$ 이상인 정수라 하자. $\{1, \dots, r\}$은 [[finite-set|유한집합]]의 것이고($r = 0$이면 공집합), 함수 $\{1, \dots, r\} \to A$를 $A$의 원소의 길이 $r$인 **열**이라 하며, $k$에서의 값을 $x_k$로 써서 열을 $x_1, \dots, x_r$로 나타낸다. $r = 0$이면 정의역이 공집합인 함수 하나뿐이고 이것을 빈 열이라 한다. $A$가 벡터공간이면 이것은 [[finite-sum-of-vectors|벡터의 유한 합]]의 벡터의 열과 같다. 열린 문장은 [[open-sentence|열린 문장]]의 것이다.

1. (유한 개의 존재를 열로 모으기) $P(k, x)$가 정수 $k \in \{1, \dots, r\}$와 $x \in A$에 관한 열린 문장이고, 모든 $k \in \{1, \dots, r\}$에 대하여 $P(k, x)$가 참인 $x \in A$가 있다고 하자. 그러면 모든 $k \in \{1, \dots, r\}$에서 $P(k, x_k)$가 참인 $A$의 원소의 길이 $r$인 열 $x_1, \dots, x_r$이 있다.
2. (첨수가 유한집합인 꼴) $I$가 유한집합이고 $P(i, x)$가 $i \in I$와 $x \in A$에 관한 열린 문장이며, 모든 $i \in I$에 대하여 $P(i, x)$가 참인 $x \in A$가 있다고 하자. 그러면 모든 $i \in I$에서 $P(i, \xi(i))$가 참인 [[function|함수]] $\xi : I \to A$가 있다.
3. (상에 든 유한 열의 원상)
   - (i) $B$가 집합이고 $f : A \to B$가 함수이며 $y_1, \dots, y_r$이 모든 항이 [[image-and-preimage|상]] $f(A)$에 드는 $B$의 원소의 열이면, 모든 $k \in \{1, \dots, r\}$에서 $f(x_k) = y_k$인 $A$의 원소의 열 $x_1, \dots, x_r$이 있다.
   - (ii) 특히 $V$, $W$가 벡터공간이고 $N : V \to W$가 [[linear-map|선형사상]]이며 $y_1, \dots, y_r$이 모든 항이 $\operatorname{Ran} N$([[kernel-and-range|핵과 상]])에 드는 $W$의 열이면, 모든 $k$에서 $Nx_k = y_k$인 $V$의 열 $x_1, \dots, x_r$이 있다. 곧 $y_1, \dots, y_r$은 $V$의 어떤 열 $x_1, \dots, x_r$을 $N$으로 옮긴 열 $Nx_1, \dots, Nx_r$이다.

(1)–(3)의 증명은 $r$에 대한 귀납의 각 단계에서 조건을 만족하는 원소가 있다는 것을 한 번 쓸 뿐이고, 여럿 가운데 하나를 고르는 원리는 쓰지 않는다. 이 항목은 길이가 유한한 열에 대해서만 진술한다.
:::

:::english
Let $A$ be a set and $r \ge 0$ an integer. The set $\{1, \dots, r\}$ is that of the finite set entry (empty if $r = 0$); a function $\{1, \dots, r\} \to A$ is called a **sequence** of elements of $A$ of length $r$, and writing its value at $k$ as $x_k$ we denote it by $x_1, \dots, x_r$. If $r = 0$ there is exactly one such function, the one with empty domain, called the empty sequence. When $A$ is a vector space this is the same as a sequence of vectors in the entry on finite sums of vectors. Open sentences are those of the open sentence entry.

1. (Gathering finitely many existence statements into a sequence) Let $P(k, x)$ be an open sentence about an integer $k \in \{1, \dots, r\}$ and $x \in A$, and suppose that for every $k \in \{1, \dots, r\}$ there is $x \in A$ for which $P(k, x)$ is true. Then there is a sequence $x_1, \dots, x_r$ of elements of $A$ of length $r$ such that $P(k, x_k)$ is true for every $k \in \{1, \dots, r\}$.
2. (Indexed by a finite set) Let $I$ be a finite set and $P(i, x)$ an open sentence about $i \in I$ and $x \in A$, and suppose that for every $i \in I$ there is $x \in A$ for which $P(i, x)$ is true. Then there is a function $\xi : I \to A$ such that $P(i, \xi(i))$ is true for every $i \in I$.
3. (Preimages of a finite sequence in the image)
   - (i) If $B$ is a set, $f : A \to B$ is a function, and $y_1, \dots, y_r$ is a sequence of elements of $B$ all of whose terms lie in the image $f(A)$, then there is a sequence $x_1, \dots, x_r$ of elements of $A$ with $f(x_k) = y_k$ for every $k \in \{1, \dots, r\}$.
   - (ii) In particular, if $V$, $W$ are vector spaces, $N : V \to W$ is a linear map, and $y_1, \dots, y_r$ is a sequence in $W$ all of whose terms lie in $\operatorname{Ran} N$, then there is a sequence $x_1, \dots, x_r$ in $V$ with $Nx_k = y_k$ for every $k$. That is, $y_1, \dots, y_r$ is the sequence $Nx_1, \dots, Nx_r$ obtained by applying $N$ to some sequence $x_1, \dots, x_r$ of $V$.

The proofs of (1)–(3) use, at each step of an induction on $r$, only once the fact that an element satisfying the condition exists, and use no principle of picking one among many. This entry makes statements only about sequences of finite length.
:::

## 직관

가방 $r$개가 있고 가방마다 조건에 맞는 물건이 적어도 하나 들어 있다면, 가방마다 물건을 하나씩 꺼내 한 줄로 늘어놓을 수 있습니다. 당연해 보이지만, "가방마다 하나씩 꺼낸다"를 한꺼번에 하는 원리를 이 사이트는 받아들이지 않았습니다. 그래서 가방의 개수 $r$에 대한 귀납으로 증명합니다. 처음 $r$개의 가방에서 꺼낸 줄이 있다고 하고, $(r + 1)$번째 가방에 물건이 있다는 것 하나만 써서 그 줄 끝에 물건 하나를 덧붙입니다. 비유의 "가방마다 물건이 있다"가 (1)의 가정 "모든 $k$에 $P(k, x)$인 $x$가 있다"이고, "줄"이 열 $x_1, \dots, x_r$입니다.

증명은 길이마다 그런 열이 있다는 것을 줄 뿐이므로, 이 항목은 길이가 유한한 열에만 씁니다. 이 사이트는 자연수 전체에 걸친 수열을 이런 방식으로 만들지 않습니다.

(3)은 (1)을 "$f(x) = y_k$"라는 조건에 쓴 것입니다. 선형사상 $N$의 상에 든 벡터 $r$개가 있으면, 각각의 원상을 늘어놓은 열이 있습니다. 같은 벡터가 여러 자리에 나와도 되고, 그 자리마다 원상이 같을 필요는 없습니다.

## 증명

:::idea
$r$에 대한 귀납법을 쓴다. 길이 $m$인 열이 있으면 $(m + 1)$번째 조건을 만족하는 원소 하나를 덧붙여 길이 $m + 1$인 열을 만든다.
:::

:::hint
명제를 "$m \le r$이면 처음 $m$개의 조건을 만족하는 길이 $m$인 열이 있다"로 두고 $m$에 대한 귀납법(시작점 $0$)을 쓰십시오.
:::

:::proof
정수의 순서는 [[prime-number|소수]] 항목의 (Z1)과 [[well-ordering-principle|정렬 원리]] 항목의 (Z5)로 인용한다.

**(1).** $0$ 이상인 정수 $m$에 대하여 다음 명제를 $S(m)$이라 하고 [[mathematical-induction|수학적 귀납법]](시작점 $0$)을 쓴다.

> $S(m)$: $m \le r$이면 모든 $k \in \{1, \dots, m\}$에서 $P(k, x_k)$가 참인 $A$의 원소의 길이 $m$인 열 $x_1, \dots, x_m$이 있다.

- 기초 단계 $S(0)$: [[finite-set|유한집합]]의 (F1)에 의해 $\{1, \dots, 0\} = \emptyset$이다. 빈 열은 [[recursion-theorem|재귀 정리]]의 (1)을 정의역이 공집합인 경우에 쓴 함수 $\emptyset \to A$이고, 조건 "모든 $k \in \emptyset$에서 $P(k, x_k)$"는 $k$가 없으므로 참이다.
- 귀납 단계: $S(m)$이 참이라 하고 $m + 1 \le r$이라 하자. $m \le r$이므로 $S(m)$에 의해 모든 $k \le m$에서 $P(k, x_k)$가 참인 길이 $m$인 열 $x_1, \dots, x_m$이 있다. 그런 열 하나를 $x$라 하자. $m + 1 \in \{1, \dots, r\}$이므로((Z1)) 가정에 의해 $P(m + 1, y)$가 참인 $y \in A$가 있다. 그런 원소 하나를 $y$라 하자. 유한집합의 (F1)에 의해 $\{1, \dots, m + 1\} = \{1, \dots, m\} \cup \{m + 1\}$이고 $m + 1 \notin \{1, \dots, m\}$이므로, $k \le m$에서 $x_k$, $k = m + 1$에서 $y$를 값으로 하는 것은 $\{1, \dots, m + 1\}$의 각 원소에 이미 정해진 $A$의 원소 하나씩을 준다. 재귀 정리의 (1)에 의해 이 값을 갖는 함수 $x' : \{1, \dots, m + 1\} \to A$가 있다. $k \le m$이면 $P(k, x'_k) = P(k, x_k)$가 참이고, $P(m + 1, x'_{m+1}) = P(m + 1, y)$도 참이다. 곧 $S(m + 1)$이 참이다. $m + 1 > r$이면 $S(m + 1)$은 가정이 거짓이므로 참이다.

따라서 모든 $m \ge 0$에서 $S(m)$이 참이고, $S(r)$이 (1)이다. 각 단계에서 쓴 것은 "그런 열이 있다"와 "그런 원소가 있다"에서 그것을 하나 잡아 이름 붙이는 것뿐이고, 원소를 고르는 규칙을 여러 자리에 한꺼번에 쓰지 않는다.

**(2).** $I$는 유한집합이므로 [[injective-surjective-bijective|전단사]] $\varphi : \{1, \dots, r\} \to I$인 $0$ 이상인 정수 $r$과 $\varphi$가 있다(유한집합의 정의). $k \in \{1, \dots, r\}$와 $x \in A$에 관한 열린 문장 $Q(k, x)$를 $P(\varphi(k), x)$로 둔다. $\varphi(k) \in I$이므로 가정에 의해 $Q(k, x)$가 참인 $x$가 있다. (1)에 의해 모든 $k$에서 $Q(k, x_k)$가 참인 열 $x_1, \dots, x_r$이 있다. 유한집합의 (F3)에 의해 [[inverse-function|역함수]] $\varphi^{-1} : I \to \{1, \dots, r\}$은 전단사이다. 재귀 정리의 (1)에 의해 $i \in I$에서의 값이 $x_{\varphi^{-1}(i)}$인 함수 $\xi : I \to A$가 있다. $i \in I$이면 $\varphi(\varphi^{-1}(i)) = i$이므로 $Q(\varphi^{-1}(i), x_{\varphi^{-1}(i)})$는 $P(i, \xi(i))$이고, 따라서 참이다.

**(3).** (i) 열린 문장 $P(k, x)$를 "$f(x) = y_k$"로 둔다. $y_k \in f(A)$이므로 [[image-and-preimage|상과 역상]]의 (1)에 의해 $f(x) = y_k$인 $x \in A$가 있다. (1)에 의해 결론이 나온다.

(ii) [[kernel-and-range|핵과 상]]에 의해 $\operatorname{Ran} N$은 함수 $N$의 상 $N(V)$이므로 (i)을 $f = N$에 쓴다. [[linear-map|선형사상]]에서 정한 대로 $V$의 열 $x_1, \dots, x_r$을 $N$으로 옮긴 열은 $k$번째 항이 $Nx_k$인 $W$의 열이고, 길이가 같고 모든 자리에서 항이 같으므로([[finite-sum-of-vectors|벡터의 유한 합]]) 그것은 $y_1, \dots, y_r$이다. $\blacksquare$
:::

## 예시와 반례

:::example[ℝ³ 의 성분을 한 칸씩 옮기는 사상의 상에 든 두 벡터]
$N : \mathbb{R}^3 \to \mathbb{R}^3$을 $N(a, b, c) = (b, c, 0)$인 선형사상이라 합시다. $\operatorname{Ran} N = \{(s, t, 0) : s, t \in \mathbb{R}\}$입니다. 열 $y_1 = (1, 0, 0)$, $y_2 = (2, 5, 0)$의 두 항은 모두 $\operatorname{Ran} N$에 들므로 (3)의 (ii)에 의해 $Nx_1 = y_1$, $Nx_2 = y_2$인 열이 있습니다. 실제로 $x_1 = (0, 1, 0)$, $x_2 = (7, 2, 5)$가 그런 열입니다. 원상은 하나로 정해지지 않습니다. $N(a, 1, 0) = (1, 0, 0)$이 모든 실수 $a$에서 성립하므로 $x_1$의 첫째 값은 무엇이어도 됩니다. 이 항목은 그런 열이 "있다"는 것만 말합니다.
:::

:::example[같은 벡터가 두 자리에 나오는 열]
같은 $N$과 열 $y_1 = y_2 = (1, 0, 0)$에 대하여 $x_1 = (0, 1, 0)$, $x_2 = (3, 1, 0)$도 (3)의 (ii)의 열입니다. 열은 함수이므로 같은 값이 여러 자리에 나와도 되고, 자리마다 원상이 달라도 됩니다.
:::

:::counterexample[상에 들지 않는 항이 있는 열의 예]
같은 $N$에서 열 $y_1 = (1, 0, 0)$, $y_2 = (0, 0, 1)$을 생각합시다. $Nx = (b, c, 0)$의 셋째 값은 늘 $0$이므로 $Nx_2 = y_2$인 $x_2$는 없고, (3)의 (ii)의 결론이 성립하지 않습니다. 가정 "모든 항이 $\operatorname{Ran} N$에 든다"가 둘째 항에서 깨진 경우입니다.
:::

## 확인 질문

:::check[r = 0 일 때 (1)의 결론은 무엇을 말하는가?]
길이 $0$인 열, 곧 빈 열이 있고 그것이 조건 "모든 $k \in \{1, \dots, 0\}$에서 $P(k, x_k)$"를 만족한다는 것입니다. $\{1, \dots, 0\}$은 공집합이므로 이 조건은 아무것도 요구하지 않고, 가정도 아무것도 요구하지 않습니다.
:::

:::check[f : ℝ → ℝ 가 f(x) = x x 이고 열 y₁, y₂, y₃ 이 4, 0, 9 이면 (3)의 (i)의 열을 하나 적으면?]
$4 = 2 \cdot 2$, $0 = 0 \cdot 0$, $9 = 3 \cdot 3$이므로 세 항은 모두 $f(\mathbb{R})$에 들고, 예컨대 $x_1 = -2$, $x_2 = 0$, $x_3 = 3$이 $f(x_k) = y_k$를 만족합니다. 첫째 항을 $2$로 바꿔도 됩니다.
:::
