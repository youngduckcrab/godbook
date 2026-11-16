---
title: 유한집합과 세기
summary: 유한집합과 원소의 개수를 전단사로 엄밀하게 정하고, 비둘기집 원리와 개수의 유일성, 부분집합의 크기, 자연수가 끝없이 많다는 것을 증명한 뒤, 이를 이용해 유한 곱의 재배열과 집합 위의 곱을 다룬다.
concepts:
  - finite-set
  - adding-or-removing-an-element
  - pigeonhole-principle
  - number-of-elements-is-unique
  - subset-of-finite-set
  - natural-numbers-are-infinite
  - finite-product-of-products
  - rearranging-a-finite-product
  - product-over-a-finite-set
---

앞의 단원들에서 "원소가 유한 개인 집합", "원소의 개수"라는 말은 일상의 뜻으로만 썼습니다. 이 단원은 그 말을 [[finite-set|전단사로 정의]]합니다. 집합이 원소를 $n$개 갖는다는 것은 $\{1, \dots, n\}$에서 그 집합으로의 전단사가 있다는 것입니다. 이 정의에서는 세는 순서나 방법이 달라져도 같은 수가 나오는지가 증명할 일이 됩니다. 그래서 단원의 앞쪽 네 항목은 그것을 향해 갑니다. [[adding-or-removing-an-element|원소 하나를 더하거나 빼는]] 구성이 [[pigeonhole-principle|비둘기집 원리]]의 증명에 쓰이고, 비둘기집 원리가 [[number-of-elements-is-unique|개수가 하나로 정해진다는 것]]을 줍니다. 마지막 항목에서는 8단원에서 전단사로 정한 "크기가 같다"와 원소의 개수가 유한집합에서 서로 어긋나지 않음도 확인합니다.

그다음 두 항목은 이 도구를 쓰는 첫 결과입니다. [[subset-of-finite-set|유한집합의 부분집합]]은 유한집합이고 개수가 더 작거나 같으며, 진부분집합이면 더 작습니다. 이로부터 [[natural-numbers-are-infinite|자연수의 집합이 무한집합]]이라는 것이 나옵니다. 지금까지 "무한집합이다"를 증명할 도구가 없어 "가산 무한이 아니다"까지만 말했던 곳이 여기서 풀립니다.

뒤의 세 항목은 정수론 입문 강의에서 쓰이는 유한 곱을 다룹니다. 이 셋은 정수론 입문 2단원의 [[finite-product|유한 곱]]과 3단원의 합동식의 계산에 나오는 거듭제곱을 배운 뒤에 읽는 것이 좋습니다. [[finite-product-of-products|항끼리 곱한 열의 곱]]은 공통 인수를 곱 밖으로 빼는 규칙이고, [[rearranging-a-finite-product|곱의 재배열]]은 이 단원의 전단사로 인수의 순서를 바꿔도 곱이 같다는 정리입니다. [[product-over-a-finite-set|유한집합 위의 곱]]은 순서가 없는 집합의 원소를 모두 곱하는 일이 재배열 덕분에 잘 정의됨을 보입니다. 이 셋은 이후 정수론 입문 강의에서 곱을 다루는 증명의 도구가 됩니다.
