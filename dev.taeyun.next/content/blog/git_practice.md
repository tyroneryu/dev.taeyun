---
title: 'Git #2 - 브랜치와 Switch'
description: 'Git에서 브랜치를 조회·생성·삭제하는 방법과 switch 명령어를 통한 브랜치 이동, 특정 커밋 기준으로 새로운 브랜치를 생성하는 활용법을 정리한다.'
image: '/images/blog/portfolio-git.png'
tags: 'Git, Branch, Switch, Commit, Version Control'
created: '2024-01-16'
---


# Git
### Git branch
- 브랜치 조회, 생성, 삭제 등
- `$ git branch`: 브랜치 목록 확인
- `$ git branch -r`: 원격 저장소의 브랜치 목록 확인
- `$ git branch <branch_name>`: 새로운 브랜치 생성
- `$ git branch -d <branch_name>`: 병합된 브랜치만 삭제 가능
- `$ git branch -D <branch_name>`: (주의) 강제 삭제 (병합되지 않은 브랜치도 삭제 가능)

### Git switch
- `$ git switch <other_branch>`: 다른 브랜치로 이동
- `$ git switch -c <branch_name>`: 브랜치를 새로 생성함과 동시에 이동
- `$ git switch -c <branch_name> <commit_ID>`: 특정 커밋을 기준으로 브랜치 생성과 동시에 이동
