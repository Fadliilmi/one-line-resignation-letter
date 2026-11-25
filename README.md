# The Funniest One-Line Resignation Letter

[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Fadliilmi/one-line-resignation-letter/rank.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![Reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/Fadliilmi/one-line-resignation-letter/reward.svg)](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

A [make.fun](https://make.fun/bounty/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) program/v1 entry: a program that writes the one-line resignation letter of a retry loop.

## The letter

> Dear team, after 40,000 retries I accept the server's silence as an answer; this is my final attempt. — Retry Loop

## How it works

`main.ts` (Node 22) writes the line above to `/output/entry.txt`, creating the parent directory if needed, and refuses to write it if the line ever falls outside the 1–140 character gate.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
