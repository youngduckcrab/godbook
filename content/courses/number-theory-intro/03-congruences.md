---
title: 합동식
summary: 합동의 덧셈과 곱셈, 나머지, 소거 법칙과 역원을 증명하고, 일차 합동식과 두 합동식을 함께 푸는 중국인의 나머지 정리, 나머지가 3인 소수의 무한함까지 간다.
concepts:
  - congruence-arithmetic
  - residues-modulo-n
  - congruence-cancellation
  - inverse-modulo-n
  - linear-congruence-solvability
  - chinese-remainder-theorem
  - primes-of-form-4x-minus-1
---

"수학의 언어"에서 [[congruence-modulo-n|합동]]을 정의하고 동치관계임을 보았지만, 합동인 수끼리 더하고 곱해도 되는지는 다루지 못했습니다. 이 단원은 그 계산부터 시작합니다. [[congruence-arithmetic|합동의 계산 법칙]]은 합, 차, 곱, 여러 수의 곱과 거듭제곱이 합동을 보존한다고 말합니다. 큰 수를 합동인 작은 수로 바꿔 놓고 계산해도 된다는 뜻입니다. 이어서 [[residues-modulo-n|법 n에 대한 나머지]]에서 모든 정수가 $0$ 이상 $n - 1$ 이하인 정수 하나와 합동임을 나눗셈 정리로 증명합니다. 앞 강의가 미뤄 둔 "법 $4$의 동치류가 정수 전체를 덮는가"에 대한 답이 여기서 나옵니다.

다음 두 항목은 나눗셈 쪽입니다. 합동은 덧셈과 곱셈에는 잘 맞지만 나눗셈에는 맞지 않습니다. [[congruence-cancellation|소거 법칙]]은 지우려는 수가 법과 서로소일 때 양변에서 그 수를 지울 수 있다고 하고, 이 증명에는 2단원의 [[coprime-divides-product|서로소인 약수의 성질]]이 쓰입니다. [[inverse-modulo-n|역원]]은 곱해서 $1$과 합동이 되는 수이고, 있을 조건은 서로소라는 것입니다. 존재는 1단원의 [[bezout-identity|베주 항등식]]에서, 유일성은 앞의 계산 법칙에서 나옵니다.

[[linear-congruence-solvability|일차 합동식]]은 역원의 존재 조건을 일반화한 것으로, $ax \equiv b$가 풀리는 조건을 최대공약수로 말합니다. [[chinese-remainder-theorem|중국인의 나머지 정리]]는 서로소인 두 법의 합동식을 함께 푸는 이야기이고, 베주 항등식으로 해를 만들고 2단원의 [[coprime-divisors-product-divides|서로소인 두 약수의 곱]]으로 해가 법의 곱에 대해 하나뿐임을 보입니다. 이 단원은 합동식이 둘인 경우까지만 다룹니다.

마지막 [[primes-of-form-4x-minus-1|4x − 1 꼴의 소수]]는 2단원의 소수가 끝없이 있다는 증명을 합동의 언어로 다시 쓴 응용입니다. 소수들을 곱한 수에서 $1$을 더하는 대신 $4$를 곱하고 $1$을 뺍니다. 그 수의 소인수가 모두 나머지 $1$일 수 없다는 점에 합동의 곱셈 법칙이 쓰이고, 나머지가 $0, 1, 2, 3$ 가운데 하나라는 점에 나머지 항목이 쓰입니다. 이 단원에서 새로 받아들인 사실은 없고, 앞 단원들이 받아들인 것만 씁니다.
