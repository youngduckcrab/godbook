---
title: 함수
summary: 관계 가운데 입력마다 출력이 정확히 하나인 것으로서의 함수, 단사와 전사, 합성, 역함수, 그리고 상과 역상.
concepts:
  - function
  - injective-surjective-bijective
  - function-composition
  - composition-is-associative
  - composition-preserves-injectivity-and-surjectivity
  - inverse-function
  - bijective-iff-inverse-is-a-function
  - image-and-preimage
---

앞 단원에서 [[relation]]는 순서쌍의 집합이었습니다. 이 단원의 [[function]]는 그 순서쌍의 집합 가운데 한 종류입니다. 곱집합 $A \times B$의 부분집합 $f$가 "$A$의 각 원소마다 짝이 정확히 하나"라는 조건을 만족하면 함수입니다. 함수를 규칙이 아니라 집합으로 정의하면, 함수끼리 같은지 따지는 일이나 "함수 전체의 모임"을 말하는 일이 모두 집합의 언어로 정확해집니다. 이때 공역은 집합 $f$만으로 정해지지 않고 선언하기 나름이라는 점이 뒤의 항목들에서 계속 쓰입니다.

함수를 정의한 다음에는 서로 다른 입력을 구별해 주는지, 공역을 빠짐없이 채우는지를 묻습니다. [[injective-surjective-bijective|단사, 전사, 전단사]]는 이 물음에 답하는 세 개의 말입니다. 단사는 서로 다른 입력이 서로 다른 출력을 내는 것이고, 전사는 공역의 모든 원소가 출력으로 나오는 것입니다. 둘이 함께 성립하면 입력과 출력이 빠짐없이 일대일로 짝지어집니다. 이 말들은 다음 단원 "집합의 크기"의 준비입니다. 두 집합의 크기를 비교하는 일을 두 집합 사이의 함수가 어떤 성질을 갖는가로 옮기기 때문입니다.

그다음 함수를 이어 붙이는 [[function-composition]]을 배웁니다. 합성은 순서가 중요하고 [[composition-is-associative|결합법칙]]은 괄호를 옮겨도 된다는 것만 보장합니다. [[composition-preserves-injectivity-and-surjectivity|합성과 단사, 전사의 관계]]에서는 합성이 단사와 전사를 이어받는 조건을 확인하는데, 전사는 공역을 맞춰 말해야 한다는 점을 눈여겨보세요.

단원의 뒷부분은 함수를 되돌리는 문제입니다. [[inverse-function|역관계와 역함수]]의 항목에서 순서쌍을 뒤집은 역관계를 정의하고, [[bijective-iff-inverse-is-a-function|전단사와 역관계의 정리]]에서 그 역관계가 함수가 되는 것이 정확히 전단사일 때임을 보입니다. 마지막으로 [[image-and-preimage|상과 역상]]은 한 원소가 아니라 부분집합을 보내거나 되돌리는 표기입니다. 역상은 역함수가 없어도 정의되므로 같은 기호 $f^{-1}$이 서로 다른 뜻을 갖는다는 점에 주의하세요.
