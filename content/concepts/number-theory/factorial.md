---
title: 계승
title_en: Factorial
aliases: [팩토리얼, n!, 차례곱, factorial]
kind: definition
field: number-theory
msc: ["11B65"]
level: undergrad
summary: 자연수 n의 계승 n!은 1부터 n까지의 정수를 모두 곱한 수이고, (n + 1)! = n!·(n + 1)이며 1 이상 n 이하인 정수는 모두 n!의 약수이다.
requires: [finite-product, product-over-a-finite-set, division-theorem, finite-set, function, divisibility, well-ordering-principle, prime-number, even-and-odd]
sources:
  - ref: stein-elementary-number-theory
    loc: 2.1.3절 Wilson's Theorem, Proposition 2.1.22의 진술과 예, p.27
    checked: original
    note: "출처는 계승을 정의하지 않고 (p − 1)!을 그대로 쓴다(책 전체에서 계승의 정의를 찾지 못했다). 이 항목은 용어와 표기 n!을 위해 Hammack을 함께 단다."
  - ref: hammack-book-of-proof
    loc: 3.4절 Factorials and Permutations, Definition 3.1, p.78. 식 (3.1)과 표, p.79
    checked: original
    note: "Hammack은 n!을 'n개의 기호로 중복 없이 만들 수 있는 길이 n인 목록의 개수'로 정의하고(0!도 포함해 n이 음이 아닌 정수), n > 1이면 n! = n(n − 1)(n − 2)···3·2·1이라고 적는다. 이 사이트에는 목록을 세는 도구가 없으므로 이 항목은 n!을 1부터 n까지의 열의 유한 곱으로 정의하고, 정의가 같은 수를 준다는 것은 다루지 않는다. 0!은 정의하지 않는다(정수의 빈 곱은 finite-product 에서 정의하지 않는다). 정수론 입문은 0!을 쓰지 않는다. Hammack의 정의에서는 0! = 1이 나온다(Thus 0! = 1). 점화식은 Hammack p.79의 식 (3.1) n! = n·(n − 1)!과 같은 내용이다(이 항목의 1은 n ≥ 1에서 (n + 1)! = n!·(n + 1)로 적는다). 예시의 1!부터 6!까지의 값은 p.79의 표와 같다. 약수와 집합 위의 곱에 관한 성질과 모든 증명은 출처에 없고 이 사이트가 썼다."
status: reviewed
review_note: "2026-11-16 독립 검토 3회 통과. 출처 메모의 틀린 서술, 예 하나에서 넘겨짚은 일반화, 가정이 쓰이는 단계에 관한 설명, 인용 근거를 보완했다."
added: 2026-11-16
---

:::statement
$n$이 자연수일 때 **$n$의 계승**(factorial) $n!$을, 각 자리의 값이 그 자리의 번호인 길이 $n$인 정수의 열 $1, 2, \dots, n$(곧 $i$번째 항이 $i$인 열)의 [[finite-product|곱]]으로 정한다. 곧 $n! = 1 \cdot 2 \cdots n$이다. $0!$은 정의하지 않는다(인수가 없는 곱은 [[finite-product]]에서 정의하지 않는다. Hammack의 정의에서는 $0! = 1$이 나오지만 정수론 입문은 $0!$을 쓰지 않는다. $0!$은 강의 '급수와 멱급수'에서 정의한다). 다음이 성립한다.

1. $1! = 1$이고, 모든 자연수 $n$에 대하여 $(n + 1)! = n! \cdot (n + 1)$이다.
2. $n!$은 양의 정수이다. 또 $j$가 $1 \le j \le n$인 정수이면 $j \mid n!$이다.
3. $\{1, \dots, n\} = \{i \in \mathbb{Z} : 1 \le i \le n\}$는 원소를 $n$개 갖는 정수의 집합이고, [[product-over-a-finite-set|집합 위의 곱]]에 대해 $\prod_{s \in \{1, \dots, n\}} s = n!$이다.

증명에서 정수와 부등식에 관하여 [[prime-number]]의 (Z1)과 [[well-ordering-principle]]의 (Z5)–(Z8), (L1)–(L3)을 인용하고, 정수끼리의 곱이 정수라는 것은 [[even-and-odd]]에서 받아들인 사실을 쓴다.
:::

:::english
For a natural number $n$, the **factorial** $n!$ is the finite product of the sequence $1, 2, \dots, n$ of length $n$ whose $i$-th term is $i$. That is, $n! = 1 \cdot 2 \cdots n$. The value $0!$ is not defined (the product with no factors is not defined; Hammack's definition gives $0! = 1$, but Elementary Number Theory does not use $0!$; $0!$ is defined in the course Series and Power Series). The following hold.

1. $1! = 1$, and $(n + 1)! = n! \cdot (n + 1)$ for every natural number $n$.
2. $n!$ is a positive integer. Moreover, if $j$ is an integer with $1 \le j \le n$, then $j \mid n!$.
3. The set $\{1, \dots, n\} = \{i \in \mathbb{Z} : 1 \le i \le n\}$ of integers has $n$ elements, and for the product over this finite set we have $\prod_{s \in \{1, \dots, n\}} s = n!$.
:::

## 직관

$n!$은 $1$부터 $n$까지를 차례로 곱한 수입니다. $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$이고, 한 단계 올라갈 때마다 새 수를 곱합니다. $6! = 5! \cdot 6 = 720$입니다. 이것이 1의 점화식입니다. 비유로는 갈림길이 있는 나무를 생각할 수 있습니다. $n$번째 층에서는 앞 층의 갈래마다 $n$개씩 새 갈래가 갈라진다고 하면 갈래의 수가 $n!$이 됩니다. 이 비유가 맞는 곳은 "앞의 결과에 새 인수 하나만 곱한다"는 점이고, 어긋나는 곳은, 나무에서는 뿌리를 $0$번째 층으로 볼 수 있지만 이 항목은 $0!$을 정의하지 않는다는 점입니다. 정수론 입문에서는 $0!$을 쓰지 않습니다.

2의 둘째 문장은 $n!$이 $1$부터 $n$까지의 모든 정수의 배수라는 말입니다. 곱에 나오는 인수는 곱을 나누기 때문입니다([[finite-product]]의 (P4)). 3은 같은 곱을 집합 위의 곱의 기호로 쓸 수 있다는 것으로, [[wilson-theorem|윌슨 정리]]의 증명에서 곱을 집합의 원소별로 나눠 다루는 데 쓰입니다.

이 정의는 Hammack이 쓰는 "중복 없는 목록의 개수"가 아니라 곱으로 정한 것입니다. 이 사이트에는 목록의 개수를 세는 도구가 없어서, 두 정의가 같은 수를 준다는 것은 다루지 않습니다.

## 기본 성질의 증명

:::proof
**1.** $n = 1$이면 [[finite-product]]의 정의에 의해 열 $1$(길이 $1$)의 곱은 그 첫 항 $1$이므로 $1! = 1$이다. $n$이 자연수이고 $1, 2, \dots, n + 1$이 길이 $n + 1$인 열($i$번째 항이 $i$)이라 하면, [[finite-product]]의 정의에 의해 이 열의 곱은 처음 $n$개로 이루어진 열의 곱에 $(n + 1)$번째 항을 곱한 것이다. 처음 $n$개로 이루어진 열은 $i$번째 항이 $i$인 길이 $n$인 열이므로 그 곱은 $n!$이고, $(n + 1)$번째 항은 $n + 1$이다. 따라서 $(n + 1)! = n! \cdot (n + 1)$이다.

**2.** 열 $1, 2, \dots, n$의 모든 항은 양의 정수이므로 [[finite-product]]의 (P5)에 의해 곱 $n!$은 양의 정수이고, $1 \le j \le n$인 정수 $j$는 열의 $j$번째 항이므로 (P4)에 의해 $j \mid n!$이다.

**3.** [[finite-set]]의 (F2)에 의해 $\{1, \dots, n\}$은 원소를 $n$개 갖는다. 곧 $n \ge 1$이고 전단사 $p : \{1, \dots, n\} \to \{1, \dots, n\}$이 있다. 항등함수 $p(i) = i$($i_{\{1, \dots, n\}}$)가 이런 전단사이다. 서로 다른 $i$에 서로 다른 값 $i$를 주므로 단사이고, 모든 $s \in \{1, \dots, n\}$이 $p(s) = s$의 값이므로 전사이다. 이 $p$는 길이 $n$인 정수의 열 $p_1, \dots, p_n$이고 $p_i = i$이므로 이 열의 곱은 $n!$이다. [[product-over-a-finite-set]]의 1에 의해 집합 위의 곱은 어느 나열로 구하든 같으므로 $\prod_{s \in \{1, \dots, n\}} s = n!$이다.
:::

## 예시와 반례

:::example[6!과 점화식]
$1! = 1$, $2! = 1! \cdot 2 = 2$, $3! = 2! \cdot 3 = 6$, $4! = 6 \cdot 4 = 24$, $5! = 24 \cdot 5 = 120$, $6! = 120 \cdot 6 = 720$입니다. 2에 의해 $1$부터 $6$까지의 모든 정수가 $720$의 약수입니다. 예컨대 $4 \mid 720$($720 = 4 \cdot 180$)이고 $5 \mid 720$($720 = 5 \cdot 144$)입니다.
:::

:::counterexample[j > n이면 j | n!이 아닐 수 있다]
2의 $j \mid n!$은 $1 \le j \le n$일 때의 진술입니다. $n = 6$, $j = 7$이면 $6! = 720 = 7 \cdot 102 + 6$이고 나머지가 $0$이 아니므로 $7 \nmid 720$입니다([[division-theorem|나눗셈 정리]]의 유일성에 의해 $720 = 7c$인 정수 $c$는 없습니다).
:::

:::counterexample[n = 2에서 (2n)! ≠ 2·n!]
계승은 $n$을 두 배로 하는 일과 이런 식으로 늘 어울리지는 않습니다. $n = 2$이면 $(2n)! = 4! = 24$이지만 $2 \cdot n! = 2 \cdot 2 = 4$입니다.
:::

## 확인 질문

:::check[$7!$을 $6!$을 써서 구하라. $7!$은 $7$의 배수인가?]
$6! = 720$이므로 1에 의해 $7! = 720 \cdot 7 = 5040$입니다. $7 \cdot 720 = 5040$이므로 $7 \mid 7!$이고, 2의 $j = n = 7$인 경우이기도 합니다.
:::

:::check[$3!$을 집합 $\{1, 2, 3\}$ 위의 곱으로 구하라. 나열 $p = (2, 3, 1)$로 곱해도 같은가?]
$p_1 = 2$, $p_2 = 3$, $p_3 = 1$은 $\{1, 2, 3\}$에서 자신으로의 전단사이므로 나열입니다. $2 \cdot 3 \cdot 1 = 6$이고 $3! = 1 \cdot 2 \cdot 3 = 6$으로 같습니다. [[product-over-a-finite-set]]의 1이 말하는 대로 어느 나열로 곱해도 $\prod_{s \in \{1, 2, 3\}} s = 6$입니다.
:::
