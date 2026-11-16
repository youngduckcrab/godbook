# 갓북 (Godbook)

공개된 수학의 정의, 정리, 증명을 출처와 함께 하나씩 정리하는 사이트입니다. 모든 내용은 AI(Claude)가 출처를 대조해 작성하고, 별도의 검토 에이전트가 다시 검사합니다.

- 사이트: https://youngduckcrab.github.io/godbook/
- 내용: `content/` (항목은 `content/concepts/`, 출처는 `content/sources/`, 강의는 `content/courses/`)
- 진행 절차: [CLAUDE.md](CLAUDE.md)
- 역할별 지침: [작성](docs/writing.md), [검토](docs/reviewing.md), [출처 준비](docs/source-prep.md), [표기와 약속](docs/conventions.md)

## 내용 추가

Claude Code 세션에서 한 줄로 요청합니다.

- `라그랑주 정리 추가해줘`
- `https://arxiv.org/abs/... 이 논문 정리해줘`
- `수학의 언어 다음 단원 진행해줘`
- `다음 것 알아서 추가해줘`
- `1단원 연습문제 추가해줘`

## 로컬에서 보기

```bash
npm install
```

```bash
npm run build && npm run preview
```
