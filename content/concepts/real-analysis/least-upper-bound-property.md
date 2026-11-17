---
title: 최소상계 성질
title_en: Least-Upper-Bound Property
aliases: [실수의 완비성, 완비성 공리, 상한 공리, 완비 순서체, least-upper-bound property, completeness of the real numbers, completeness axiom, supremum property, complete ordered field]
kind: axiom
field: real-analysis
msc: ["26A03", "12J15"]
level: undergrad
summary: 공집합이 아니고 위로 유계인 실수의 집합은 상한을 갖는다는 성질 (U)를 증명 없이 받아들인다. 계산 법칙, 순서 공리와 함께 이것이 이 강의의 실수이다.
requires: [real-number-arithmetic, real-order-axioms, order-properties-of-reals, upper-bound-and-supremum]
sources:
  - ref: lebl-basic-analysis
    loc: 1.1절 Definition 1.1.3 과 그 뒤 문단 (p.24), 연습문제 1.1.4 (p.27); 1.2절 Theorem 1.2.1 과 각주 (p.29), 연습문제 1.2.15 (p.35)
    checked: original
    note: "출처는 Definition 1.1.3(p.24)에서 일반의 순서집합 S 에 대해, 공집합이 아니고 위로 유계인 S 의 모든 부분집합이 S 안에 상한을 가질 때 S 가 최소상계 성질(least-upper-bound property)을 갖는다고 정의하고, 이 성질을 completeness property 또는 Dedekind completeness property 라고도 부른다고 적는다. 출처는 실수를 Theorem 1.2.1(p.29) '최소상계 성질을 가진 순서체 ℝ 가 (각주에 따르면 동형을 뺀 뜻에서) 유일하게 존재하고 ℚ ⊂ ℝ 이다'로 들이며, 그 바로 앞에서 유리수에서 실수를 구성하는 대신 그 존재를 증명 없이 정리로 진술한다고 밝힌다(p.29). 각주는 구성은 Rudin 을 보라고 한다. 이 항목은 (U)를 ℝ 에 관한 공리로 받아들이며, 유일성은 진술하지 않는다. ℚ ⊆ ℝ 는 이 사이트에서 유리수를 실수 가운데 a/b 꼴인 것으로 정의하므로(rational-and-irrational-numbers) 따로 받아들이지 않는다. 번호 (U)와 '완비 순서체'라는 용어는 출처에 나오지 않는다(검색한 범위). 출처의 Example 1.1.4(p.24–25)는 ℚ 가 최소상계 성질을 갖지 않는다고 말하는데, 이 항목은 그 사실을 다루지 않는다. 예시(상한은 상계의 집합의 최솟값)와 반례는 새로 만들었다. 확인 질문 2 의 E = {x ∈ ℝ : x < 0}(상한 0 이 집합에 속하지 않는다)은 출처 p.24 의 {x ∈ ℚ : x < 1} 과 같은 발상이다. 확인 질문 1 의 sup F ≤ sup E 는 출처 연습문제 1.1.4 의 sup A ≤ sup B 와 같다. 역사와 맥락의 두 문장은 출처의 Definition 1.1.3 뒤 문단과 각주(p.24), 연습문제 1.2.15 끝의 Note(p.35)에서 읽은 것이다."
status: source-checked
added: 2026-11-17
---

:::statement
상계, 위로 유계, 상한은 [[upper-bound-and-supremum]]의 것이다. 이 사이트는 실수에 관하여 다음 성질을 증명 없이 받아들인다.

- (U) (**최소상계 성질**, least-upper-bound property) $\mathbb{R}$의 부분집합 $E$가 공집합이 아니고 위로 유계이면, $E$의 상한인 실수가 있다. 곧 $\sup E$가 있다.

이 성질을 실수의 **완비성**(completeness)이라고도 한다.

[[real-number-arithmetic]]의 (K1)–(K7), [[real-order-axioms]]의 (W1)–(W4), 그리고 (U)를 모두 받아들인 수 체계가 이 강의의 실수이다. 덧셈과 곱셈이 (K1)–(K6)의 법칙을 만족하고, 순서가 (W1)–(W4)를 만족하며, (U)가 성립하는 수 체계를 **완비 순서체**(complete ordered field)라 부른다. 곧 이 강의의 실수는 완비 순서체이다((K7)은 정수가 그 안의 수라는 조항이다). 이런 수 체계가 실제로 있다는 것, 곧 유리수 등에서 실수를 구성해 이 성질들을 증명하는 일은 이 사이트에서 다루지 않는다.
:::

:::english
Upper bounds, bounded above, and suprema are as in the entry on upper bounds and suprema. This site accepts the following property of the real numbers without proof.

- (U) (**Least-upper-bound property**) If a subset $E$ of $\mathbb{R}$ is nonempty and bounded above, then some real number is a supremum of $E$; that is, $\sup E$ exists.

This property is also called the **completeness** of the real numbers.

The real numbers of this course are the number system for which (K1)–(K7) from the entry on arithmetic of the real numbers, (W1)–(W4) from the entry on the order of the real numbers, and (U) are all accepted. A number system whose addition and multiplication satisfy the laws (K1)–(K6), whose order satisfies (W1)–(W4), and in which (U) holds is called a **complete ordered field**. Thus the real numbers of this course form a complete ordered field ((K7) is the clause placing the integers among its numbers). That such a number system actually exists, that is, constructing the real numbers from the rational numbers or otherwise and proving these properties, is not treated on this site.
:::

## 직관

[[upper-bound-and-supremum|상계와 상한]]의 천장 비유를 이어 가면, 공집합이 아닌 방에 어떤 높이의 천장이든 달 수 있을 때(위로 유계) 천장을 내릴 수 있는 데까지 내리면 어느 높이에서 딱 멈춘다는 것이 (U)입니다. 그 멈춘 높이가 상한입니다. 수직선으로 말하면 "가장 작은 상계가 들어갈 자리가 빠져 있지 않다", 곧 수직선에 구멍이 없다는 그림입니다. 비유가 맞지 않는 곳은, 방의 천장이 멈추는 것은 눈으로 보이는 일이지만 수에 대해서는 이것이 계산 법칙이나 순서 공리처럼 받아들여야 하는 약속이라는 점입니다.

(K1)–(K7)과 (W1)–(W4)는 주어진 몇 개의 수에 대해 무엇이 성립하는지를 말하지만, (U)는 실수의 부분집합에 대해 말한다는 점이 다릅니다. 유리수에 대해서는 이런 성질이 성립하지 않는다는 것을 이 단원의 뒤에서 제곱근을 다루며 보게 됩니다.

두 가정은 모두 필요합니다. 공집합은 위로 유계이지만 상한이 없고([[upper-bound-and-supremum|상계와 상한]]의 (5)), $\mathbb{R}$은 공집합이 아니지만 위로 유계가 아니어서 상한이 없습니다. 아래 반례가 이 두 경우입니다.

## 예시와 반례

:::example[상한은 상계 가운데 가장 작은 것이다]
$E$가 공집합이 아니고 위로 유계인 실수의 집합이라 하고, $E$의 상계 전체의 집합을 $B$라 합시다. (U)에 의해 $s = \sup E$가 있습니다. 상한의 정의에 의해 $s$는 $E$의 상계이므로 $s \in B$이고, $B$의 모든 원소 $b$에 대하여 $s \le b$이므로 $s$는 $B$의 하계입니다. 따라서 [[upper-bound-and-supremum|상계와 상한]]의 정의에 의해 $s$는 $B$의 최솟값입니다. 곧 $\sup E = \min B$이고, "최소상계"라는 이름은 이 뜻입니다. (U)는 이 최솟값이 있다는 것을 보장합니다.
:::

:::counterexample[두 가정을 뺄 수 없다]
- 공집합이 아니라는 가정을 뺀 경우: $\emptyset$은 위로 유계입니다(모든 실수가 상계입니다). 그러나 [[upper-bound-and-supremum|상계와 상한]]의 (5)에 의해 $\emptyset$에는 상한이 없습니다.
- 위로 유계라는 가정을 뺀 경우: $\mathbb{R}$은 공집합이 아닙니다. 실수 $b$를 아무것이나 잡으면 [[order-properties-of-reals]]의 (5)의 (ii)의 $0 < 1$에 (W3)으로 $b$를 더해 $0 + b < 1 + b$, 곧 ((K1), (K4)) $b < b + 1$이므로 $b$는 $\mathbb{R}$의 상계가 아닙니다. 상한은 상계여야 하므로 $\mathbb{R}$에는 상한이 없습니다.

두 경우는 (U)가 틀렸다는 뜻이 아니라, (U)가 두 가정을 둔 까닭입니다.
:::

## 역사와 맥락

출처는 최소상계 성질을 완비성(completeness property) 또는 데데킨트 완비성(Dedekind completeness property)이라고도 부른다고 적고, 각주에서 독일 수학자 데데킨트(Julius Wilhelm Richard Dedekind, 1831–1916)의 이름을 딴 것이라고 적습니다. 또 연습문제 1.2.15 끝에서, 데데킨트가 실수를 구성할 때 그 연습문제가 데데킨트 절단(Dedekind cut)이라 부르는 유리수의 집합을 썼다고 적습니다.

## 확인 질문

:::check[$E$가 공집합이 아니고 위로 유계인 실수의 집합이고 $F$가 $E$의 공집합이 아닌 부분집합이면, $F$는 상한을 갖는가? 갖는다면 $\sup F$와 $\sup E$의 크기는 어떠한가?]
갖습니다. (U)에 의해 $\sup E$가 있습니다. $F$의 원소는 $E$의 원소이므로 $\sup E$ 이하이고, 따라서 $\sup E$는 $F$의 상계입니다. $F$는 공집합이 아니고 위로 유계이므로 (U)에 의해 $\sup F$가 있고, $\sup E$가 $F$의 상계이므로 상한의 정의에 의해 $\sup F \le \sup E$입니다.
:::

:::check[$E$가 공집합이 아니고 원소가 모두 음수인 실수의 집합이면 $\sup E$가 있는가? $\sup E$는 반드시 음수인가?]
$0$이 $E$의 상계이므로 (U)에 의해 $\sup E$가 있고, 상한의 정의에 의해 $\sup E \le 0$입니다. 그러나 반드시 음수인 것은 아닙니다. $E = \{x \in \mathbb{R} : x < 0\}$이면 $\sup E = 0$입니다. $b < 0$인 실수 $b$를 잡으면 [[order-properties-of-reals]]의 (8)에 의해 $b < \frac{b + 0}{2} < 0$이고, $\frac{b + 0}{2} = \frac{b}{2}$는 $E$의 원소이면서 $b$보다 크므로 $b$는 상계가 아닙니다. 따라서 $E$의 상계 $b$는 $b < 0$이 아니므로 [[order-properties-of-reals]]의 (1)의 (iii)에 의해 $0 \le b$입니다. $0$도 상계이므로 상한의 정의에 의해 $\sup E = 0$입니다.
:::
